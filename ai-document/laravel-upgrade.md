# Laravel バージョンアップ計画（5.8 → 13 / PHP 7.2 → 8.5）

- 作成日: 2026-11-21
- 対象: `acry-ya.com`（フロント） / `admin.acry-ya.com`（商品管理）
- 移行先: `acry-ya.com85` / `admin.acry-ya.com85`
- 関連: `CLAUDE.md`, `ai-document/ローカルインフラ構成.md`, `ai-document/docker.md`
- 前提: ローカル環境は `ai-document/docker.md` の Docker 構成で用意する

---

## 1. ゴール

| 項目 | 現状 | 移行後 |
|---|---|---|
| PHP | 7.2.x | **8.5.x** |
| Laravel | 5.8.11（管理） / 5.8.16（フロント） | **13.x** |
| PHPUnit | 7.5 / 8.1 | 12.x |
| Form ファサード | `laravelcollective/html` 5.8 | `konekt/html`（ドロップイン） |
| 認証スキャフォールド | Laravel 5.8 標準 | `laravel/ui` 4.6.3 |
| DB | MySQL 8.4.8 | 同じ |
| アプリ構造 | Laravel 5.8 構造 | **Laravel 10 構造を維持**（Laravel 11+ がサポート） |

> Laravel 13 は 2026-03-17 リリース。PHP 8.3〜8.5 対応。本計画は 2026-11 時点の公式アップグレードガイドに基づく。実装時に最新パッチと依存制約を再確認する。

### 非ゴール

- UI/デザインの刷新
- 機能追加（カート連携、ブログ移行など）
- DB スキーマの大規模再設計
- 新スケルトン（`bootstrap/app.php` の `Application::configure()` 形式）への全面移行
- テストカバレッジ 100% 化

---

## 2. 現状分析

### 2.1 コード規模

| アプリ | PHP ファイル | app/ の行数 | Blade | コントローラ | マイグレーション |
|---|---:|---:|---:|---:|---:|
| フロント | 97 | 約 6,700 | 45 | 13 | 2（実質は管理と共通 DB） |
| 管理 | 138 | 約 10,900 | 51 | 42 | 66 |

管理画面の方が大きく、`Form::` と `array_*` ヘルパの使用が多い。フロントは小さいが、独自 URL 生成・レビュー画像・メール送信などの固有処理がある。

### 2.2 アップグレードを阻害する箇所（コード調査結果）

| # | 箇所 | 内容 | 対応フェーズ |
|---|---|---|---|
| 1 | `admin.acry-ya.com/resources/views/**` | `array_pluck()` **108 箇所**、`array_sort()` **43 箇所**。Laravel 6 で global helper が削除 | Phase 1 / 6 |
| 2 | `admin.acry-ya.com/resources/views/**` | `Form::` **788 箇所**。`laravelcollective/html` は Laravel 11+ 非対応 | Phase 3 / 6 |
| 3 | `admin.acry-ya.com/app/Services/UploadImageService.php:62-63` | `UploadedFile::getClientSize()`。Symfony 5（Laravel 7）で削除 | Phase 2 |
| 4 | `acry-ya.com/app/Models/*`, `admin.../app/Models/*` | `protected $dates = ['deleted_at']`（各 7 モデル）。Laravel 10 で削除 | Phase 5 |
| 5 | `app/Exceptions/Handler.php`（両アプリ） | `report(Exception)`, `render($request, Exception)`。Laravel 8 で `Throwable` に変更 | Phase 3 |
| 6 | `app/Http/Middleware/CheckForMaintenanceMode.php`（両アプリ） | Laravel 8 で本体が `PreventRequestsDuringMaintenance` に改名（8.x では旧クラスはシムとして残る） | Phase 3 |
| 7 | `app/Http/Middleware/TrustProxies.php`（両アプリ） | `fideloper/proxy` 依存。Laravel 9 で framework の `TrustProxies` に移行 | Phase 4 |
| 8 | `resources/lang/`（両アプリ） | Laravel 9 で `lang/` 直下に移動 | Phase 4 |
| 9 | `database/factories/*`, `database/seeds/*`（管理） | 旧 `$factory->define()` / 非名前空間 Seeder。Laravel 8 でクラスベース化 | Phase 3 |
| 10 | `admin.../app/Models/RelatedProduct.php` | `mopo922/laravel-treats` の `HasCompositePrimaryKey`。パッケージは Laravel 5 想定 | Phase 3 |
| 11 | `acry-ya.com/app/Providers/ComposerServiceProvider.php:30` | `boot(Request $request)`。サービスプロバイダの `boot` は引数なしが原則 | Phase 6 |
| 12 | `acry-ya.com/app/Services/Route/UrlGenerator.php` | `Illuminate\Routing\UrlGenerator` のサブクラス。コンストラクタ/`format()` のシグネチャは 13 でも互換だが要検証 | Phase 4 / 6 |
| 13 | `app/**` の `env()` 直呼び（16 箇所。死蔵コードを除くと 13 箇所） | `DELIVERIES_PATH`, `IMAGE_STORAGE`, `DISPLAY_IMAGE_PATH`, `SITE_URL`, `APP_URL`。`config:cache` 時に `null` になる | Phase 3 / 6 |
| 14 | `admin.../routes/web.php:20` | `Auth::routes()`。Laravel 6 以降は `laravel/ui` が必要 | Phase 1 |
| 15 | `bootstrap/app.php` / `public/index.php` | Laravel 5.8 形式。Laravel 11+ の旧構造サポートに依存 | Phase 6 |
| 16 | `app/User.php` | `App\User`。Laravel 8+ の標準は `App\Models\User`（必須ではない） | Phase 6（任意） |
| 17 | `password_resets` テーブル | Laravel 8+ の標準は `password_reset_tokens` | Phase 3 |
| 18 | `phpunit.xml`（両アプリ） | `backupStaticAttributes`, `convertErrorsToExceptions`, `<filter><whitelist>` など PHPUnit 10+ で削除 | Phase 5 / 6 |
| 19 | `composer.json` の `minimum-stability: dev` | Laravel 10 で `stable` 推奨 | Phase 5 |
| 20 | `fzaninotto/faker` | 放棄。Laravel 8 で `fakerphp/faker` へ | Phase 3 |
| 21 | `beyondcode/laravel-dump-server`, `filp/whoops`, `xethron/migrations-generator` | 放棄/非互換 | Phase 1 |
| 22 | `fideloper/proxy` | 放棄。Laravel 9 で framework へ | Phase 4 |
| 23 | `doctrine/dbal` | Laravel 11 で不要 | Phase 6 |
| 24 | `nunomaduro/collision` / `laravel/tinker` / `laravel/ui` | 各 Laravel バージョンに合わせて更新 | 各 Phase |
| 25 | PHP 8.x の deprecation | 暗黙 nullable 引数 12 件、`imagedestroy` 2 件、`curl_close` 1 件、null 渡し 17 件など | Phase 8 / 9 |

### 2.3 既存テスト

- 管理: テストメソッド 72、うち 11 が `markTestSkipped()`。
- フロント: サンプル 2 件のみ。
- `RefreshDatabase` を使うテストが複数あるが、ダンプの `migrations` 不整合のため、そのままではテスト DB を再現できない。
- API テストはダンプ内の実ユーザーの `api_token` をハードコードしている。

→ Phase 0 で「テストが再現できる DB」を整備し、ベースラインを記録する。

### 2.4 依存パッケージの現状

| パッケージ | 現行 | 問題 |
|---|---|---|
| `laravel/framework` | 5.8.11 / 5.8.16 | 対象 |
| `laravel/tinker` | ^1.0 | 2 系へ |
| `laravelcollective/html` | ^5.8（管理のみ） | 11+ 非対応。6.x → konekt/html |
| `mopo922/laravel-treats` | ^2.0（管理のみ） | Laravel 5 想定。自作トレイトへ |
| `fideloper/proxy` | ^4.0 | 放棄。framework へ |
| `vlucas/phpdotenv` | ^3.4 | framework 管理へ |
| `fzaninotto/faker` | ^1.4 | 放棄。fakerphp へ |
| `beyondcode/laravel-dump-server` | ^1.0 | 不要 |
| `filp/whoops` | ^2.0 | 不要。ignition へ |
| `nunomaduro/collision` | ^2 / ^3 | バージョン追随 |
| `phpunit/phpunit` | ^7.5 / ^8.0 | 12 へ |
| `xethron/migrations-generator` | ^2.0（管理のみ） | 不要 |
| `doctrine/dbal` | ^2.9（管理のみ） | 10 で ^3、11 で削除 |

---

## 3. 基本戦略

### 3.1 1 メジャーずつ上げる

Laravel の公式アップグレードガイドは「直前のメジャーからの差分」を前提としている。5.8 から 13 へ一気に上げることは技術的には可能だが、失敗箇所の切り分けが困難になる。本計画は以下を標準とする。

```
5.8 → 6 → 7 → 8 → 9 → 10 → 11 → 12 → 13
```

各フェーズの終わりに「テスト green / 主要画面の目視確認 / deprecation 増加なし」をゲートとする。

> 工数短縮案として「5.8 → 6 → 8 → 10 → 11 → 13」のように 7 / 9 / 12 を飛ばすことは可能。ただし 7 の Symfony 5 変更、9 の Symfony Mailer / Flysystem / lang 移動は飛ばしても必要になる。切り分けテストを優先し、標準案を推奨する。

### 3.2 フロントをパイロットにする

1. フロント（小規模、Form なし）を先に 13 まで上げる。
2. 共通の Models / Services の差分を管理画面へ横展開する。
3. 管理画面は `Form::` と `array_*` が多いため、フロントで確立した手順・テスト・設定変更を再利用する。

フロントと管理はコードがコピー由来で似ているが、以下は固有。

- フロント: 独自 `UrlGenerator`、レビュー画像、メール送信、`getNewFlagAttribute` などのアクセサ
- 管理: `Form::`、認証、画像アップロード、API、Seeder/Factory

### 3.3 58 と 85 を並走させる

- `acry-ya.com` / `admin.acry-ya.com` は**変更しない**（比較用）。
- `acry-ya.com85` / `admin.acry-ya.com85` を Phase 0 で複製し、こちらだけを変更する。
- DB は `acryya_system`（58）と `acryya_system85`（85）に分ける（`ai-document/docker.md` §7）。
- 各フェーズの完了時にフォルダをスナップショット（または Git タグ）として残す。

### 3.4 Git / バックアップ

現状、両アプリとも Git リポジトリではない。Phase 0 で以下を行う。

```bash
cd acry-ya.com
git init
git add .
git commit -m "baseline: Laravel 5.8 / PHP 7.2"
git tag baseline-5.8

cd ../admin.acry-ya.com
git init
git add .
git commit -m "baseline: Laravel 5.8 / PHP 7.2"
git tag baseline-5.8
```

- `vendor/`, `node_modules/`, `.env`, `storage/logs/*` は除外（既存 `.gitignore` を確認）。
- フェーズごとに `git tag phase-1-laravel6` など。
- DB はフェーズ前に `mysqldump` でバックアップ。

---

## 4. フェーズ一覧（サマリ）

| Phase | 内容 | Laravel | PHP | 主な作業 | 目安 |
|---|---|---|---|---|---|
| 0 | ベースライン構築 | 5.8 | 7.2 | Docker、Git、テスト DB、特性テスト、バックアップ | 10–15 日 |
| 1 | 5.8 → 6 | 6.x | 7.2 / 7.4 | helper、laravel/ui、keyType、不要パッケージ削除 | 5 日 |
| 2 | 6 → 7 | 7.x | 7.4 | Symfony 5、`getClientSize()`、collision | 3 日 |
| 3 | 7 → 8 | 8.x | 7.4 / 8.0 | factory/seeder クラス化、faker、Throwable、Maintenance 改名、password_resets | 8 日 |
| 4 | 8 → 9 | 9.x | 8.0 / 8.1 | Symfony Mailer、Flysystem 3、lang 移動、TrustProxies | 8 日 |
| 5 | 9 → 10 | 10.x | 8.1 / 8.2 | `$dates`→`$casts`、Monolog 3、PHPUnit 10、stable | 5 日 |
| 6 | 10 → 11 | 11.x | 8.2 / 8.3 | 構造判断、Form フォーク、doctrine/dbal 削除、config 化 | 15 日 |
| 7 | 11 → 12 | 12.x | 8.2 / 8.3 | Carbon 3、依存更新、PHPUnit 11 | 3 日 |
| 8 | 12 → 13 | 13.x | 8.3 / 8.5 | CSRF 改名、cache/session 設定、PHP 8.5 対応 | 8 日 |
| 9 | 安定化・リリース | 13.x | 8.5 | 性能、セキュリティ、負荷試験、カットオーバー | 10 日 |

合計目安: **75–80 人日**（両アプリ、1 名想定）。管理画面の Form/Seeder 対応により前後する。2 名体制なら 2–2.5 か月程度。

---

## 5. Phase 0: ベースライン構築

### 目的

「変えたら壊れたことが分かる」状態を作る。アップグレードそのものはまだ行わない。

### タスク

- [ ] `ai-document/docker.md` の Docker 環境を構築する。
- [ ] 58 系（フロント / 管理）が Docker で起動し、本番同等の画面が出ることを確認する。
- [ ] 85 フォルダを `rsync` で作成する（`ai-document/docker.md` §9.2）。
- [ ] 58版で適用したローカル修正（`index.blade.php` の `X-Forwarded-Proto` / RSS フォールバック、`common/sidemenu.blade.php` の null ガード、`layouts/simple.blade.php` の追加）が 85 コピーに含まれていることを確認する（`ai-document/docker.md` §11.4）。
- [ ] 両アプリで `git init` し、`baseline-5.8` タグを付ける。
- [ ] DB を `mysqldump` でバックアップする。
- [ ] テスト用 DB `acryya_system_test` を作成する。
  - ダンプを使わず、空 DB に `php artisan migrate` → `php artisan db:seed` を実行する。
  - ダンプの `migrations` 不整合を避けるため。
  - 既存テストがダンプ内のユーザー（`api_token`）を前提にしている場合は、テスト用 Seeder / Fixture を追加する。
- [ ] 既存テストを実行し、ベースラインの成功/失敗/スキップを記録する。
  - `vendor/bin/phpunit --testdox` の結果を `ai-document/test-baseline.md` に保存（任意）。
- [ ] 特性テスト（Characterization Test）を追加する。
  - フロント: トップ、商品一覧、商品詳細、検索、レビュー投稿、404。
  - 管理: ログイン、商品一覧、商品編集、画像アップロード、各マスタ CRUD。
  - HTML のゴールデンマスター（CSRF トークン・日時・ランダム値を正規化）。
- [ ] 主要 URL のステータスコード一覧を取得する（`curl -o /dev/null -s -w "%{http_code}"` など）。
- [ ] 画面スクリーンショットを保存する（Phase ごとの比較用）。
- [ ] `storage/logs` を整理する（5.1GB）。
- [ ] 管理画面の新規登録の扱いを決める。
  - ダンプに不審なユーザー（2026-09 作成の使い捨てメール）がいるため、`Auth::routes(['register' => false])` を推奨。
- [ ] デバッグ設定を確認する。
  - 85 側は `APP_DEBUG=true`、58 側は現状維持。
- [ ] 静的解析の導入可否を決める（PHPStan / Larastan は Phase 3 以降で導入）。

### 完了条件

- 58 系が Docker で起動し、主要画面が表示できる。
- 既存テストのベースライン結果が記録されている。
- 85 フォルダが作成され、58 と同じ画面が出る（まだ 5.8 のまま）。
- Git タグと DB バックアップがある。

---

## 6. Phase 1: 5.8 → 6.x

- Laravel: `^6.0`
- PHP: 7.2（または 7.4）
- 公式ガイド: https://laravel.com/docs/6.x/upgrade

### 主な変更

- PHP 7.2 以上が必須（現行と同じ）。
- `str_*` / `array_*` グローバルヘルパが `laravel/helpers` に分離。
- `Input` ファサード削除（本アプリでは未使用）。
- `Auth::routes()` が framework から `laravel/ui` に移動。
- 文字列主キーのモデルは `$keyType = 'string'` が必要。
- `BelongsTo::update` の挙動変更。
- `viewAny` ポリシー（本アプリはポリシー未使用のため影響なし）。
- Carbon 2 必須（現行 `composer.lock` は Carbon 2 なので影響なし）。
- キューはデフォルト 1 回リトライ（`sync` のため影響なし）。
- `lang` は `resources/lang` のまま。

### タスク

- [ ] `composer.json` の `laravel/framework` を `^6.0` に変更。
- [ ] `laravel/tinker` を `^2.0` に変更。
- [ ] `laravel/ui` を `^1.0` で追加（管理画面の `Auth::routes()` のため）。
- [ ] `laravel/helpers` を追加（`array_pluck` / `array_sort` の暫定対応）。
  - 恒久対応は Phase 6 で `Arr::pluck` / `Arr::sort` に置換し、`laravel/helpers` を削除する。
- [ ] `beyondcode/laravel-dump-server` を削除。
- [ ] `filp/whoops` を削除し、`facade/ignition` を dev に追加（任意）。
- [ ] `xethron/migrations-generator` を削除（管理のみ）。
- [ ] `nunomaduro/collision` は `^3.0` のまま（`^4.0` は Symfony 5 必須で Laravel 6 と競合。Phase 2 で `^4.0`）。
- [ ] `phpunit/phpunit` を `^8.0` に変更。
- [ ] `minimum-stability` は `dev` のままでも可（Phase 5 で `stable`）。
- [ ] `ProductType` モデルに `$keyType = 'string'` を追加（`incrementing = false` のため）。
  - `acry-ya.com/app/Models/ProductType.php`
  - `admin.acry-ya.com/app/Models/ProductType.php`
- [ ] `Auth::routes()` が `laravel/ui` で動作することを確認。
- [ ] `composer update` 後、`php artisan route:list` でルートが変わっていないことを確認。
- [ ] テストを実行し、Phase 0 のベースラインと同じ結果になることを確認。

### 注意

- `laravel/ui` を追加しても `php artisan ui bootstrap --auth` は実行しない。既存の `resources/views/auth/*` と `app/Http/Controllers/Auth/*` を維持する。
- `array_pluck` / `array_sort` は `laravel/helpers` で動作するが、Laravel 13 では `symfony/polyfill-php85` との `array_first` / `array_last` 衝突に注意。Phase 6 までに置換する。
- `composer update` は 5.8 の `composer.lock` を直接書き換えるため、Git タグ `baseline-5.8` からやり直せるようにする。

### 完了条件

- Laravel 6 でフロント / 管理の主要画面が表示される。
- ログイン、商品一覧、商品編集、画像アップロードが動作する。
- テスト結果がベースラインと同じ。

---

## 7. Phase 2: 6.x → 7.x

- Laravel: `^7.0`
- PHP: 7.4 推奨（7.2.5 以上）
- 公式ガイド: https://laravel.com/docs/7.x/upgrade

### 主な変更

- Symfony 5 へ。`UploadedFile::getClientSize()` が削除。
- `laravel/ui` は `^2.0`。
- `nunomaduro/collision` は `^4.0`。
- HTTP クライアント `Http` ファサード導入（本アプリは未使用）。
- メールの Markdown レイアウト変更（本アプリは `Mail::send` のテキストビューのため影響小）。
- Blade コンポーネントの変更（本アプリは `@include` / `@section` のみ）。

### タスク

- [x] `UploadImageService::upload()` の `getClientSize()` を `getSize()` に変更。
  - `admin.acry-ya.com/app/Services/UploadImageService.php:62-63`
  - `getSize()` はアップロードされたファイルの実サイズを返す。`disk_free_space("/")` との比較はそのまま使える。
- [ ] `laravel/framework` を `^7.0`、`laravel/ui` を `^2.0` に変更。
- [ ] `laravel/tinker` は `^2.0` のまま。
- [ ] `composer update` → テスト → 画面確認。
- [ ] 画像アップロード（管理画面）を必ず確認する。
- [ ] `php artisan view:clear` / `config:clear` を実行。
- [x] （実作業で判明）`composer.json` の `vlucas/phpdotenv ^3.4` を削除（Laravel 7 は ^4.0 を要求）。`php` 要件を `^7.2.5` に変更、`facade/ignition` を `^2.0` に変更。
- [x] （実作業で判明）`App\Exceptions\Handler` の `report` / `render` を `Throwable` 型に変更（Laravel 7 で必須。Phase 3 の項目を前倒し）。
- [x] （実作業で判明）Eloquent の日付シリアライズが ISO-8601（UTC）に変更されるため、全モデルに `App\Models\Concerns\SerializesDatesLegacy` を追加して従来形式（`Y-m-d H:i:s`）を維持。

### 完了条件

- 画像アップロードが成功する。
- フロント / 管理の主要画面が表示される。
- テスト結果がベースラインと同じ。

---

## 8. Phase 3: 7.x → 8.x

- Laravel: `^8.0`
- PHP: 7.4 または 8.0
- 公式ガイド: https://laravel.com/docs/8.x/upgrade

### 主な変更

- モデルファクトリがクラスベースに全面変更。`factory()` ヘルパ削除。
- `database/seeds` → `database/seeders`、名前空間 `Database\Seeders`。
- `fzaninotto/faker` → `fakerphp/faker`。
- `app/Exceptions/Handler` の `report` / `render` が `Throwable` に。
- `CheckForMaintenanceMode` → `PreventRequestsDuringMaintenance`。
- `password_resets` → `password_reset_tokens`（デフォルト）。
- `laravel/ui` は `^3.0`。
- `laravelcollective/html` は `^6.2`。
- `composer.json` の `autoload.classmap` から `database/seeds`, `database/factories` を外し、PSR-4 を追加。
- `$dates` はまだ有効。
- `TrustProxies` はまだ `fideloper/proxy`。
- `RouteServiceProvider` の `$namespace` はまだ有効。

### タスク

#### 8.1 依存関係

- [ ] `laravel/framework` を `^8.0`。
- [ ] `laravel/ui` を `^3.0`。
- [ ] `laravelcollective/html` を `^6.2`（管理）。
- [ ] `fzaninotto/faker` を削除し、`fakerphp/faker` を追加。
- [ ] `facade/ignition` を `^2.0` に（dev）。
- [ ] `nunomaduro/collision` を `^5.0`。
- [ ] `phpunit/phpunit` を `^9.0`。
- [ ] `mopo922/laravel-treats` を削除（後述の自作トレイトへ）。

#### 8.2 ファクトリ / シーダー

- [ ] `database/factories/UserFactory.php` をクラス化。
  - `namespace Database\Factories;`
  - `class UserFactory extends Factory`
  - `protected $model = User::class;`
  - `public function definition(): array`
- [ ] `ProductCategoryFactory`, `ProductTypeFactory` をクラス化（管理）。
- [ ] モデルに `HasFactory` トレイトを追加（`User`, `ProductCategory`, `ProductType`）。
- [ ] `database/seeds/*.php`（23 ファイル）を `database/seeders/` に移動し、`namespace Database\Seeders;` を付与。
- [ ] `DatabaseSeeder` の `$this->call([...])` のクラス参照を名前空間付きに更新。
- [ ] `composer.json`:
  ```json
  "autoload": {
      "psr-4": {
          "App\\": "app/",
          "Database\\Factories\\": "database/factories/",
          "Database\\Seeders\\": "database/seeders/"
      }
  }
  ```
  `classmap` から `database/seeds`, `database/factories` を削除。
- [ ] テストの `factory(ProductCategory::class)->create()` を `ProductCategory::factory()->create()` に変更。
- [ ] `factory(X::class, 30)->create()` を `X::factory()->count(30)->create()` に変更。
- [ ] `$this->seed('TDD...Seeder')` を `$this->seed(\Database\Seeders\TDD...Seeder::class)` に変更。
- [ ] `composer dump-autoload`。

> 旧ファクトリを一時的に維持したい場合は `laravel/legacy-factories` を使えるが、Laravel 13 まで持ち込まない。Phase 3 で完全移行する。

#### 8.3 例外・ミドルウェア

- [ ] `app/Exceptions/Handler.php` の `report` / `render` を `Throwable` に変更。
  ```php
  public function report(Throwable $exception)
  public function render($request, Throwable $exception)
  ```
- [ ] `app/Http/Middleware/CheckForMaintenanceMode.php` の親クラスを `Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance` に変更。
  - クラス名はそのままでもよいが、混乱を避けるため `PreventRequestsDuringMaintenance` にリネームし、`app/Http/Kernel.php` の参照を更新するのが望ましい。
- [ ] `app/Http/Kernel.php` の `$middleware` / `$middlewareGroups` の参照を更新。

#### 8.4 複合主キー

- [ ] `mopo922/laravel-treats` の `HasCompositePrimaryKey` を `app/Models/Concerns/HasCompositePrimaryKey.php` に移植する。
  - 元実装: `getIncrementing()`, `getKey()`, `setKeysForSaveQuery()`, `find()`, `findOrFail()`, `refresh()`。
  - Laravel 10+ では親クラスに戻り値型が付くため、以下を付与する。
    ```php
    public function getIncrementing(): bool
    public function getKey(): mixed
    protected function setKeysForSaveQuery($query)
    public static function find($ids, $columns = ['*']): ?static
    public static function findOrFail($ids, $columns = ['*']): static
    public function refresh(): static
    ```
  - `ModelNotFoundException` の import を追加（元実装で未 import の可能性がある）。
- [ ] `RelatedProduct` の `use` を自作トレイトに変更。
- [ ] 関連商品の登録・更新・削除をテストする。

#### 8.5 パスワードリセット

- [ ] `config/auth.php` の `passwords.users.table` を `password_resets` のままにする（既存 DB に合わせる）。
  - もしくは `password_reset_tokens` へのリネームマイグレーションを追加する。既存 DB を触りたくない場合は前者。
- [ ] パスワードリセット画面の動作確認（Mailpit）。

#### 8.6 その他

- [ ] `laravel/ui` 3 で `Auth::routes()` が動作することを確認。
- [ ] `laravelcollective/html` 6.2 で `Form::` が動作することを確認。
- [ ] `array_pluck` / `array_sort` は `laravel/helpers` のまま（Phase 6 で置換）。
- [ ] `$dates` はまだ使えるため変更しない。
- [ ] `composer update` → テスト → 画面確認。
- [x] （実作業で判明）PHP 7.3 以上が必須のため、`acry-ya-docker/.env` の `PHP85_VERSION` を `7.4.33` / `composer:2` に変更して 85 コンテナを再ビルド。Dockerfile の gd configure は PHP 7.4 以降で新形式に分岐を修正。
- [x] （実作業で判明）Laravel 8 は EOL でセキュリティ勧告によりブロックされるため、`COMPOSER_NO_SECURITY_BLOCKING=1 composer update -W` で実行（`composer.json` には書かない。中間ステップのみ）。
- [x] （実作業で判明）Laravel 8 でページネーションの既定ビューが Tailwind になるため、管理の `AppServiceProvider::boot()` に `Paginator::useBootstrap()` を追加（Bootstrap 4）。フロントは `defaultView()` 指定済みで影響なし。
- [x] （実作業で判明）`HasCompositePrimaryKey` の移植版は PHP 7.4 のため型宣言なし。Phase 5（Laravel 10）で戻り値型を付与する。

### 完了条件

- 管理画面のログイン、商品 CRUD、画像アップロード、マスタ CRUD が動作する。
- シーダー / ファクトリが新形式で動作する。
- テスト結果がベースラインと同じ（または改善）。
- `RelatedProduct` の複合主キー操作が動作する。

---

## 9. Phase 4: 8.x → 9.x

- Laravel: `^9.0`
- PHP: 8.0.2 以上（8.1 推奨）
- 公式ガイド: https://laravel.com/docs/9.x/upgrade

### 主な変更

- SwiftMailer → Symfony Mailer。
- Flysystem 1.x → 3.x。
- `resources/lang` → `lang/`。
- `fideloper/proxy` → framework の `TrustProxies`。
- `password` バリデーションルール → `current_password`。
- `assertDeleted` → `assertModelMissing`。
- `FILESYSTEM_DRIVER` → `FILESYSTEM_DISK`。
- `facade/ignition` → `spatie/laravel-ignition`。
- `laravel/ui` は `^4.0`。
- `laravelcollective/html` は `^6.3`。
- `nunomaduro/collision` は `^6.1`。
- `phpunit/phpunit` は `^9.5`。
- `RouteServiceProvider` の `$namespace` はまだ有効。

### タスク

#### 9.1 メール

- [ ] `config/mail.php` を Laravel 9 形式に更新する。
  - `'default' => env('MAIL_MAILER', 'smtp')`
  - `'mailers' => ['smtp' => ['transport' => 'smtp', 'host' => ..., 'port' => ..., 'encryption' => ..., ...]]`
- [ ] `.env` / Compose の `MAIL_DRIVER` を `MAIL_MAILER` に変更（Docker は両方設定済み）。
- [ ] `Mail::send(['text' => 'review.mail'], ...)` が Symfony Mailer で動作することを確認。
  - `$message->to()`, `->from()`, `->subject()` は Symfony Mailer でも利用可能。
- [ ] Mailpit で受信確認。
- [ ] `ReviewController` のメール送信箇所を確認。

#### 9.2 ファイルシステム

- [ ] `Storage` / `UploadedFile` の動作確認。
  - `$file->storeAs(env('IMAGE_STORAGE') . '/' . $directory, $file_name)` は Flysystem 3 でも動作。
  - `Storage::disk('local')->delete()` も動作。
- [ ] `config/filesystems.php` の `FILESYSTEM_DRIVER` を `FILESYSTEM_DISK` に変更。
- [ ] `'throw' => true` を必要に応じて追加（書き込み失敗を例外にしたい場合）。

#### 9.3 lang 移動

- [ ] `resources/lang/` を `lang/` に移動。
  - フロント: `lang/en/*`
  - 管理: `lang/en/*`, `lang/ja/*`
- [ ] `app()->langPath()` の参照がないことを確認。
- [ ] バリデーション日本語メッセージが表示されることを確認。

#### 9.4 TrustProxies

- [ ] `app/Http/Middleware/TrustProxies.php` の親クラスを `Illuminate\Http\Middleware\TrustProxies` に変更。
- [ ] `$headers` をビットマスクに変更。
  ```php
  protected $headers =
      Request::HEADER_X_FORWARDED_FOR |
      Request::HEADER_X_FORWARDED_HOST |
      Request::HEADER_X_FORWARDED_PORT |
      Request::HEADER_X_FORWARDED_PROTO |
      Request::HEADER_X_FORWARDED_AWS_ELB;
  ```
- [ ] `fideloper/proxy` を削除。
- [ ] `$proxies = '**'` の妥当性を確認（本番の LB 構成に合わせる）。

#### 9.5 その他

- [ ] `assertDeleted` を使っているテストを `assertModelMissing` に変更（grep では 0 件）。
- [ ] `password` ルールを `current_password` に変更（grep では該当なし）。
- [ ] `laravel/ui` 4 で `Auth::routes()` が動作することを確認。
- [ ] `laravelcollective/html` 6.3 で `Form::` が動作することを確認。
- [ ] `spatie/laravel-ignition` を dev に追加。
- [ ] `composer update` → テスト → 画面確認。

- [x] （実作業で判明）PHP 8.1 では、テストの `delete()` ヘルパーが `TestCase::delete()` と非互換でファタルになるため `deleteImage()` に改名（`TDDImageControllerTest`）。
- [x] （実作業で判明）`PHP85_VERSION=8.1.31` に更新して 85 コンテナを再ビルド。`COMPOSER_NO_SECURITY_BLOCKING=1` が引き続き必要。
- [x] `config/mail.php` は `MAIL_MAILER` を優先し、旧 `MAIL_DRIVER` もフォールバックで読む形にした。`FILESYSTEM_DISK` も同様に旧 `FILESYSTEM_DRIVER` をフォールバック。

### 完了条件

- メール送信（レビュー投稿）が Mailpit に届く。
- 画像アップロード / 表示が動作する。
- 日本語バリデーションが動作する。
- ログイン / 商品 CRUD が動作する。

---

## 10. Phase 5: 9.x → 10.x

- Laravel: `^10.0`
- PHP: 8.1 以上（8.2 推奨）
- 公式ガイド: https://laravel.com/docs/10.x/upgrade

### 主な変更

- `$dates` プロパティ削除。`$casts` へ。
- Monolog 3。
- `composer.json` の `minimum-stability` を `stable` 推奨。
- `doctrine/dbal` は `^3.0`。
- PHPUnit 10。
- `nunomaduro/collision` は `^7.0`。
- `$routeMiddleware` → `$middlewareAliases`（任意）。
- `registerPolicies` は自動呼び出しに。
- `DB::raw` の文字列キャスト不可。
- `Bus::dispatchNow` 削除。

### タスク

- [ ] `laravel/framework` を `^10.0`。
- [ ] `phpunit/phpunit` を `^10.0`、`nunomaduro/collision` を `^7.0`。
- [ ] `doctrine/dbal` を `^3.0`（管理）。
- [ ] `composer.json` の `minimum-stability` を `stable` に変更（または削除）。
- [ ] `$dates` を `$casts` に変更。
  - 対象: `Color`, `DiscountRate`, `DiscountRateItem`, `Material`, `PlateThickness`, `Review`, `Size`（両アプリ）。
  - 例:
    ```php
    protected $casts = [
        'deleted_at' => 'datetime',
    ];
    ```
- [ ] `phpunit.xml` を PHPUnit 10 形式に更新。
  - `backupStaticAttributes`, `convertErrorsToExceptions`, `convertNoticesToExceptions`, `convertWarningsToExceptions`, `processIsolation`, `stopOnFailure` などを削除/移行。
  - `<filter><whitelist>` を `<source><include>` に変更。
  - `<coverage processUncoveredFiles>` を削除。
- [ ] `AuthServiceProvider::boot()` の `$this->registerPolicies()` を削除（自動呼び出しのため）。
- [ ] `DB::raw` を文字列キャストしている箇所がないか確認（grep では 11 箇所。`(string)` キャストがないか確認）。
- [ ] `composer update` → テスト → 画面確認。

- [x] （実作業で判明）`spatie/laravel-ignition` は Laravel 10 では `^2.0` が必要（`^1.0` は Laravel 9 まで）。
- [x] （実作業で判明）`doctrine/dbal` は、マイグレーションに `->change()` が無いため追加していない。
- [x] （実作業で判明）`PHP85_VERSION=8.2.29` に更新。`composer audit` は `laravel/framework` 10 の勧告が残る（中間ステップ。Laravel 13 で解消）。
- [x] `HasCompositePrimaryKey` は Laravel 10 / PHP 8.2 でも型宣言なしのまま動作（互換エラーなし）。型付与は Phase 6 で再確認。

### 完了条件

- 管理画面の日時表示（`deleted_at` など）が正しい。
- テストが PHPUnit 10 で動作する。
- `composer audit` で致命的な脆弱性がない。

---

## 11. Phase 6: 10.x → 11.x

- Laravel: `^11.0`
- PHP: 8.2 以上（8.3 推奨）
- 公式ガイド: https://laravel.com/docs/11.x/upgrade

### 主な変更

- Laravel 11 の新スケルトン（`bootstrap/app.php` の `Application::configure()`、`app/Http/Kernel.php` なし、`config/*` なし、`bootstrap/providers.php`）。
  - **ただし Laravel 11 は Laravel 10 の旧構造もサポートする**。本計画は旧構造を維持する。
- `doctrine/dbal` 不要。`change()` の挙動変更（変更時に全ての修飾子を明示）。
- `casts()` メソッドが基底 `Model` に追加。モデルに `casts` リレーションがある場合は衝突。
- `laravelcollective/html` は 11+ 非対応 → `konekt/html` へ。
- `laravel/ui` は `^4.4` 以上。
- `password_reset_tokens` が標準（設定で旧テーブルを維持）。
- `TrustProxies` の `$proxies = '**'` を見直し。
- Carbon 3（`diffIn*` の返り値が float / 負値）。
- `spatie/once` 削除（本アプリ未使用）。
- 浮動小数点カラムの `double` / `float` シグネチャ変更。
- SQLite 3.26 以上（本アプリは MySQL のため影響なし）。
- `Schema::getAllTables()` などの削除。
- `Enumerable::dump(...$args)`、`UserProvider` / `Authenticatable` 契約の追加メソッド（本アプリは独自実装なし）。
- メール検証リスナーの自動登録。

### 11.1 アプリ構造の判断（重要）

Laravel 11 の公式ガイドは「Laravel 10 アプリを 11 の新構造へ移行することを推奨しない」と明記している。本計画は以下を採用する。

- `app/Http/Kernel.php` を維持
- `app/Console/Kernel.php` を維持
- `app/Exceptions/Handler.php` を維持
- `config/*.php` を維持
- `bootstrap/app.php` は既存の `$app = new Application(...)` 形式を維持
- `bootstrap/providers.php` は作成しない（`config/app.php` の `providers` を使う）

> 実装時に Laravel 11/12/13 で旧 `bootstrap/app.php` がサポートされることを spike で確認する。もしサポートされない場合は、新 `bootstrap/app.php` へ移行し、`config` は必要分だけ publish する。この場合の追加工数を 5–8 日見込む。

### 11.2 Form ファサード

- [ ] `laravelcollective/html` を削除。
- [ ] `konekt/html` を追加。
  - 名前空間 `Collective\Html` は同じ。`config/app.php` の `HtmlServiceProvider` / `Form` / `Html` エイリアスはそのまま。
  - `composer remove laravelcollective/html`
  - `composer require konekt/html:^6.5`
- [ ] `php artisan view:clear`。
- [ ] 788 箇所の `Form::` をスモークテスト（text/select/label/radio/checkbox/textarea/hidden/submit/open/close）。
- [ ] 代替として `prabowosd/laravel-collective-html`（Laravel 6–13 対応）も検討可。ただしネイティブ戻り値型が追加されるため、`FormBuilder` / `HtmlBuilder` のサブクラスがある場合は注意。

### 11.3 `array_*` ヘルパの置換

- [ ] `resources/views/**` の `array_pluck($array, 'value', 'key')` を `Arr::pluck($array, 'value', 'key')` に置換。
- [ ] `array_sort($array, fn($v) => ...)` を `Arr::sort($array, fn($v) => ...)` に置換。
- [ ] Blade で `Arr` を使うため、`@php use Illuminate\Support\Arr; @endphp` またはコントローラで整形する。
  - 大量の置換はスクリプト化する（単純な関数名置換 + import）。
- [ ] `laravel/helpers` を削除。
- [ ] 置換後に `array_pluck` / `array_sort` が残っていないことを grep で確認。

### 11.4 `env()` の config 化

- [ ] `config/acryya.php` を新設。
  ```php
  return [
      'deliveries_path' => env('DELIVERIES_PATH'),
      'image_storage' => env('IMAGE_STORAGE', 'public/img_storage'),
      'display_image_path' => env('DISPLAY_IMAGE_PATH', 'storage/images/'),
      'site_url' => env('SITE_URL'),
      'front_review_images_dir' => env('FRONT_REVIEW_IMAGES_DIR'),
  ];
  ```
- [ ] `app/` 配下の `env()` 直呼びを `config('acryya.*')` に置換。
  - `app/Models/Picture.php`
  - `app/Services/ProductService.php`
  - `app/Services/ImageService.php`
  - `app/Services/UploadImageService.php`
  - `app/Providers/ComposerServiceProvider.php`
  - `app/Services/save20220722_*`（削除予定なら不要）
- [ ] `config:cache` を有効にしても動作することを確認。

### 11.5 サービスプロバイダ / ミドルウェア

- [ ] `ComposerServiceProvider::boot(Request $request)` を `boot()` に変更し、`request()` ヘルパまたは `View::composer` のクロージャで `$request` を取得する。
- [ ] `RouteServiceProvider` の `$namespace` を維持。`routes/web.php` の `'Controller@method'` 形式はそのまま動く。
- [ ] `app/Http/Kernel.php` の `$routeMiddleware` を `$middlewareAliases` にリネーム（任意。Laravel 10 から推奨）。
- [ ] `app/Console/Kernel.php` の `schedule()` / `commands()` に `: void` を付与（親クラスの戻り値型に合わせる）。
- [ ] 各 `ServiceProvider::register()` / `boot()` に `: void` を付与（親クラスが `void` を宣言している場合）。
- [ ] `app/Http/Middleware/Authenticate::redirectTo($request)` に `: ?string` を付与（親クラスに合わせる）。
- [ ] `app/Exceptions/Handler` の `report(Throwable)` / `render($request, Throwable)` を再確認。

### 11.6 認証・ユーザーモデル

- [ ] `laravel/ui` を `^4.4` 以上に。
- [ ] `Auth::routes()` の登録ルートを確認。
- [ ] `App\User` を `App\Models\User` に移動するか判断する。
  - 移動する場合: `config/auth.php` の `model`、`RegisterController` の `use`、テストの参照を更新。
  - 移動しない場合: `config/auth.php` の `model` は `App\User::class` のまま。
- [ ] `Auth::routes(['register' => false])` にして新規登録を無効化（推奨）。
- [ ] `password_reset_tokens` への移行 or `password_resets` 維持を最終決定。

### 11.7 マイグレーション

- [ ] `doctrine/dbal` を削除。
- [ ] `->change()` を使っているマイグレーションを確認（grep では 0 件）。`dropColumn` / `renameColumn` は 4 件。Laravel 11 のネイティブ実装で動作するか確認。
- [ ] `schema:dump` を使うか検討する。既存 DB をダンプから作る運用のため、必須ではない。
- [ ] テスト DB は空から `migrate` して通ることを確認。

### 11.8 設定ファイルの同期

- [ ] `config/app.php`, `config/auth.php`, `config/cache.php`, `config/database.php`, `config/filesystems.php`, `config/logging.php`, `config/mail.php`, `config/queue.php`, `config/session.php` を Laravel 11 のデフォルトと比較し、必要なキーを追加する。
  - すべてを新デフォルトに置き換えるのではなく、既存のカスタム値を維持する。
- [ ] `config/session.php` の `same_site` を `'lax'` に（推奨）。
- [ ] `config/logging.php` の `daily` に `days` を設定。

### 完了条件

- Laravel 11 でフロント / 管理の全主要画面が動作する。
- `Form::` の全種類が動作する。
- `config:cache` 有効でも `env()` 依存の不具合がない。
- テストが green。
- `composer audit` で致命的な脆弱性がない。

---

## 12. Phase 7: 11.x → 12.x

- Laravel: `^12.0`
- PHP: 8.2 以上（8.3 推奨）
- 公式ガイド: https://laravel.com/docs/12.x/upgrade

### 主な変更

- 破壊的変更は少ない。依存パッケージの更新が中心。
- Carbon 3 がデフォルト。
- PHPUnit 11。
- `nunomaduro/collision` は `^8.0`。
- `laravel/ui` は `^4.6.1`。
- `konekt/html` は `^6.5`。

### タスク

- [ ] `laravel/framework` を `^12.0`。
- [ ] `phpunit/phpunit` を `^11.0`。
- [ ] `nunomaduro/collision` を `^8.0`。
- [ ] `laravel/ui` を `^4.6.1`。
- [ ] `konekt/html` を `^6.5`。
- [ ] `composer update` → テスト → 画面確認。
- [ ] Carbon 3 の `diffIn*` 使用箇所を確認（`getNewFlagAttribute` は `strtotime` のため影響なし）。
- [ ] PHP 8.3 で deprecation がないかログを確認。

### 完了条件

- テスト green。
- 主要画面の表示・操作が Phase 6 と同じ。

---

## 13. Phase 8: 12.x → 13.x（PHP 8.5）

- Laravel: `^13.0`
- PHP: 8.3〜8.5（**最終目標 8.5**）
- 公式ガイド: https://laravel.com/docs/13.x/upgrade

### 主な変更

- `laravel/framework` `^13.0`、`laravel/tinker` `^3.0`、`phpunit/phpunit` `^12.0`。
- `VerifyCsrfToken` → `PreventRequestForgery`（旧名は非推奨エイリアス）。
- キャッシュ / セッションのデフォルトプレフィックス変更（ハイフン区切り）。
- `cache.serializable_classes` が `false` デフォルト。
- `session.serialization` が `json` デフォルト（新規スケルトン）。
- ページネーションの内部ビュー名変更（`pagination::default` → `pagination::bootstrap-3`）。
- `Container::call` の nullable デフォルト挙動変更。
- ドメインルートの優先順位変更。
- `JobAttempted` / `QueueBusy` イベントのプロパティ変更（本アプリ未使用）。
- MySQL の `DELETE ... JOIN ... ORDER BY ... LIMIT` の SQL 生成変更。
- ポリモーフィックピボットのテーブル名生成変更。
- `Str` ファクトリのテスト間リセット。
- `Js::from` の Unicode 非エスケープ。
- `symfony/polyfill-php85` と `laravel/helpers` の `array_first` / `array_last` 衝突。
- Symfony 7.4 / 8.0、PHPUnit 13 対応。

### タスク

#### 13.1 依存関係

- [ ] `laravel/framework` を `^13.0`。
- [ ] `laravel/tinker` を `^3.0`。
- [ ] `phpunit/phpunit` を `^12.0`。
- [ ] `nunomaduro/collision` を Laravel 13 対応版に。
- [ ] `laravel/ui` を `^4.6.3`（Laravel 13 対応の最小版）。
- [ ] `konekt/html` を Laravel 13 対応版に。
- [ ] `laravel/helpers` が残っていないことを確認（Phase 6 で削除済み）。

#### 13.2 CSRF

- [ ] `app/Http/Middleware/VerifyCsrfToken.php` を `PreventRequestForgery` にリネーム、または親クラスを `Illuminate\Foundation\Http\Middleware\PreventRequestForgery` に変更。
- [ ] `app/Http/Kernel.php` の `web` グループの参照を更新。
- [ ] テストの `withoutMiddleware([VerifyCsrfToken::class])` を `PreventRequestForgery::class` に更新。
- [ ] フォーム送信（管理画面の全 `Form::open`）が CSRF で弾かれないことを確認。
- [ ] Origin 検証（`Sec-Fetch-Site`）がローカルで問題を起こさないか確認。必要なら `preventRequestForgery` の除外設定を検討。

#### 13.3 キャッシュ・セッション

- [ ] `config/cache.php` に `serializable_classes` を明示（オブジェクトをキャッシュしない場合は `false` のまま）。
- [ ] `config/session.php` の `serialization` を `json` に設定（PHP オブジェクトをセッションに保存していないことを確認）。
  - 設定変更後、既存セッションは無効になる（ローカルのみ）。
- [ ] `CACHE_PREFIX`, `SESSION_COOKIE`, `REDIS_PREFIX` を明示し、デフォルト変更の影響を避ける。
- [ ] `config/session.php` の `same_site` を `'lax'` に。

#### 13.4 ページネーション

- [ ] `AppServiceProvider::boot()` の `Paginator::defaultView('vendor.pagination.default')` はカスタムビューのため影響なし。ただし Laravel 13 の内部ビュー名変更に合わせ、`pagination::bootstrap-3` などを直接参照している箇所がないか確認。
- [ ] 商品一覧・管理画面のページ送りを確認。

#### 13.5 PHP 8.5 対応

- [ ] `imagedestroy()`（フロント `ReviewController` 2 箇所）を `unset()` に置換、または GD のリソース GC に任せる。
- [ ] `curl_close()`（フロント `ComposerServiceProvider` 1 箇所）を削除（PHP 8.5 で非推奨）。
- [ ] 暗黙 nullable 引数（12 箇所）を `?Type $x = null` に修正。
  - `ColorService::findList`, `HtmlPartService::findList`, `ProductService::findList`, `SizeService::findList`, `ProductCategoryService::findList`, `OptionSettingService::updateOptionSetting`, `SizeService::findList2`, `DiskCapacityOverException::__construct`, `DuplicateException::__construct`。
- [ ] null を内部関数へ渡している箇所（17 箇所）を確認し、`(string)` キャストやデフォルト値で修正。
- [ ] 動的プロパティ（81 箇所）を確認。Eloquent の属性は問題ないが、非 Eloquent クラスで `$this->foo =` している箇所があれば `#[AllowDynamicProperties]` またはプロパティ宣言を追加。
- [ ] `array_key_exists()` に null オフセットを渡していないか確認。
- [ ] `__sleep` / `__wakeup` を使用していないか確認（grep では 0 件）。
- [ ] `(integer)` / `(boolean)` / `(double)` / `(binary)` キャストを使用していないか確認（grep では 0 件）。
- [ ] `backtick` 演算子を使用していないか確認。

#### 13.6 Laravel 13 の細かい変更

- [ ] `Container::call` で nullable クラスデフォルトに依存している箇所がないか確認（`ComposerServiceProvider` など）。
- [ ] ドメインルートを使用していない（`Route::domain` なし）ため影響なし。
- [ ] `upsert` を使用していないため影響なし。
- [ ] MySQL の `DELETE JOIN` を使用していないため影響なし。
- [ ] ポリモーフィックリレーションを使用しているか確認（`morphTo` / `morphMany`）。使用している場合、ピボットのテーブル名を明示する。
- [ ] `Collection` のシリアライズ（キュー）を使用していないため影響なし。
- [ ] `Str` ファクトリをテストで使用していないため影響なし。
- [ ] `Js::from` を使用していないため影響なし。

#### 13.7 PHP 8.5 での最終確認

- [ ] Docker の `PHP_VERSION` を `8.5.0` にしてビルド。
- [ ] `php -v` で 8.5 を確認。
- [ ] `php artisan about`（Laravel 13）でバージョン確認。
- [ ] 全テストを実行。
- [ ] 主要画面のスクリーンショットを Phase 0 と比較。
- [ ] `storage/logs/laravel.log` に deprecation / warning が出ていないことを確認。
  ```bash
  grep -iE "deprecat|warning|fatal" storage/logs/laravel.log | tail -50
  ```
- [ ] `composer audit` で致命的な脆弱性がないことを確認。

### 完了条件

- Laravel 13 / PHP 8.5 でフロント / 管理の全主要機能が動作する。
- テストが green。
- deprecation ログが許容範囲（0 が理想）。
- パフォーマンスが Phase 6 と同等以上。

---

## 14. Phase 9: 安定化・リリース

### タスク

- [ ] `APP_DEBUG=false`, `APP_ENV=production` で動作確認。
- [ ] `php artisan config:cache`, `route:cache`, `view:cache` を有効化して動作確認。
  - `config:cache` 有効時に `env()` 直呼びがないこと（Phase 6 で対応済み）。
- [ ] `php artisan optimize` / `optimize:clear` の動作確認。
- [ ] OPcache の設定確認（本番）。
- [ ] セキュリティ確認。
  - 管理画面の新規登録無効化
  - `APP_DEBUG=false`
  - `TrustProxies` の範囲
  - API の GET による更新操作（`/api/images/upload`, `/api/images/delete`）の見直し
  - `.env` の本番認証情報の管理
  - `composer audit`
- [ ] 負荷試験（主要画面のレスポンスタイム、商品一覧の N+1 確認）。
- [ ] DB クエリログで N+1 や `ONLY_FULL_GROUP_BY` エラーがないか確認。
- [ ] 本番カットオーバー計画。
  - 58 → 85 の DNS / ドキュメントルート切り替え
  - DB を `acryya_system85` → `acryya_system` に戻すタイミング
  - ロールバック手順（58 を残す）
- [ ] ドキュメント更新（`CLAUDE.md`, `ローカルインフラ構成.md`, 本ドキュメント）。
- [ ] 旧コードの整理。
  - `save20220722_*`, `save20240817_*`, `.phps`, `.blade.php_save*` などの死蔵コードをアーカイブ。
  - `public/_blog`, `public/cgibin` は対象外のため触らない。

### 完了条件

- 本番同等設定で主要機能が動作する。
- ロールバック手順が文書化されている。
- 旧 58 環境を停止できる状態。

---

## 15. パッケージバージョン対応表

| パッケージ | 5.8 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |
|---|---|---|---|---|---|---|---|---|---|
| `laravel/framework` | 5.8.* | ^6.0 | ^7.0 | ^8.0 | ^9.0 | ^10.0 | ^11.0 | ^12.0 | ^13.0 |
| `laravel/tinker` | ^1.0 | ^2.0 | ^2.0 | ^2.0 | ^2.0 | ^2.0 | ^2.0 | ^2.0 | ^3.0 |
| `laravel/ui` | 不要 | ^1.0 | ^2.0 | ^3.0 | ^4.0 | ^4.0 | ^4.4+ | ^4.6.1+ | ^4.6.3 |
| `laravelcollective/html` | ^5.8 | ^6.0 | ^6.1 | ^6.2 | ^6.3 | ^6.4 | — | — | — |
| `konekt/html` | — | — | — | — | — | — | ^6.5 | ^6.5 | ^6.5 |
| `fzaninotto/faker` | ^1.4 | ^1.4 | ^1.4 | — | — | — | — | — | — |
| `fakerphp/faker` | — | — | — | ^1.9 | ^1.9 | ^1.9 | ^1.9 | ^1.9 | ^1.9 |
| `phpunit/phpunit` | ^7.5 | ^8.0 | ^8.5 | ^9.0 | ^9.5 | ^10.0 | ^10.5 | ^11.0 | ^12.0 |
| `nunomaduro/collision` | ^3.0 | ^4.0 | ^4.0 | ^5.0 | ^6.1 | ^7.0 | ^8.0 | ^8.0 | ^8.0 |
| `fideloper/proxy` | ^4.0 | ^4.0 | ^4.0 | ^4.0 | — | — | — | — | — |
| `doctrine/dbal` | — | — | — | — | ^2.9 | ^3.0 | — | — | — |
| `beyondcode/laravel-dump-server` | ^1.0 | — | — | — | — | — | — | — | — |
| `filp/whoops` | ^2.0 | — | — | — | — | — | — | — | — |
| `xethron/migrations-generator` | ^2.0 | — | — | — | — | — | — | — | — |
| `mopo922/laravel-treats` | ^2.0 | ^2.0 | ^2.0 | — | — | — | — | — | — |

> バージョンは目安。`composer update` 時に Laravel の制約と照合する。`konekt/html` は Laravel 10 にも対応するため、Phase 5 で早めに移行してもよい。

---

## 16. 横断タスク

### 16.1 テスト

- 既存テスト 72 件のベースラインを取る。
- テスト DB は空 DB に `migrate` + `seed` で作る（ダンプを使わない）。
- ダンプ内のユーザーに依存するテストは、テスト用 Seeder でユーザーを作る。
- 特性テスト（HTML ゴールデンマスター）を追加する。
- 各フェーズで以下を実行する。
  ```bash
  vendor/bin/phpunit --testdox
  php artisan route:list
  ```
- ブラウザテスト（Playwright）を追加する。
  - フロント: トップ → 一覧 → 詳細 → レビュー投稿
  - 管理: ログイン → 商品一覧 → 商品編集 → 画像アップロード
- 画面スクリーンショットを Phase 0 と比較する。

### 16.2 静的解析・コード品質

- Phase 3 以降で `larastan/larastan`（PHPStan）を導入する。
  - 最初は level 0–2 から。ベースラインを `phpstan-baseline.neon` に固定。
- Phase 5 以降で `laravel/pint` を導入する。
  - 一括整形は差分が大きくなるため、フェーズの区切りで実行する。
- `rector/rector` の Laravel セットを検討する（自動修正）。
- `composer audit` を各フェーズで実行する。

### 16.3 ログ・監視

- `LOG_CHANNEL=stack` → `daily` の `days` を 14 に。
- 各フェーズで `grep -iE "deprecat|warning|fatal" storage/logs/laravel.log` を確認。
- PHP 8.5 では `E_ALL` で deprecation を収集する。

### 16.4 DB

- フェーズ前に `mysqldump` でバックアップ。
- ダンプの `migrations` 不整合に注意。インポート DB では `migrate` しない。
- `ONLY_FULL_GROUP_BY` のクエリを確認。
  - `RepairPartGroupService` の `groupBy`、`SpecificationDetailService` の `groupBy()`（引数なし）など。
  - `groupBy()` 引数なしは 5.8 では no-op。Laravel 13 でも no-op か確認し、意図が「重複排除」なら `distinct()` に置き換える。
- `taxes.tax_change_date` のゼロ日付を補正。

### 16.5 セキュリティ

- 管理画面の新規登録を無効化（`Auth::routes(['register' => false])`）。
- ダンプ内の不審ユーザーを削除（ローカルのみ）。
- API の GET による更新操作を見直す（`/api/images/upload`, `/api/images/delete`）。
- `APP_DEBUG=false`（本番）。
- `.env` を Git 管理しない。
- `composer audit`。
- `TrustProxies` の `'**'` を見直す。
- パスワードハッシュ（bcrypt）のコストを確認。

### 16.6 死蔵コードの整理

アップグレード前に以下をアーカイブ（削除ではなく `archive/` へ移動）する。

- `admin.acry-ya.com/app/Services/save20220722_*`
- `admin.acry-ya.com/app/Http/Controllers/Product/save/save20240817_ProductController.phps`
- `acry-ya.com/resources/views/**/*_save*`, `*_original`, `*.blade250228.php`
- `admin.acry-ya.com/resources/views/product/save20220722_*`
- `acry-ya.com/app/Http/Controllers/Product/save/`
- `20230114-amazon-save/`

参照がないことを grep で確認してから移動する。コード量が減り、アップグレードの差分確認が容易になる。

---

## 17. リスクと対策

| リスク | 影響 | 対策 |
|---|---|---|
| Laravel 11 で旧構造がサポートされない | Phase 6 で追加工数 | Phase 6 冒頭で spike。必要なら新 `bootstrap/app.php` へ移行 |
| `laravelcollective/html` のフォークが Laravel 13 で動かない | 管理画面の全フォームが壊れる | `konekt/html` を Phase 6 で早期検証。代替 `prabowosd/laravel-collective-html` |
| `array_pluck` / `array_sort` の置換漏れ | 管理画面のセレクトが空になる | 一括置換 + grep + 全画面スモークテスト |
| `getClientSize()` の置換漏れ | 画像アップロードが fatal | Phase 2 で必ず修正。grep で 0 件確認 |
| `$dates` 削除漏れ | 日時が正しく扱えない | Phase 5 で全モデルを `$casts` へ |
| Exception Handler の型不一致 | 起動時 fatal | Phase 3 で `Throwable` に |
| `CheckForMaintenanceMode` の旧クラスが将来削除される | 起動時 fatal | Phase 3 で `PreventRequestsDuringMaintenance` に移行 |
| Seeder/Factory の名前空間漏れ | `db:seed` / テストが失敗 | Phase 3 で全ファイルに名前空間付与 |
| `env()` 直呼び | `config:cache` 時に null | Phase 6 で `config/acryya.php` に移行 |
| 独自 `UrlGenerator` のシグネチャ変更 | URL 生成が壊れる | Phase 4/6 でテスト。必要なら `format()` のみオーバーライドする実装に変更 |
| PHP 8.5 の deprecation 多発 | ログ肥大化 / 将来の fatal | Phase 8 で `E_ALL` + ログ確認。`imagedestroy` / `curl_close` / 暗黙 nullable を修正 |
| MySQL の strict mode / ゼロ日付 | 管理画面の保存が失敗 | ゼロ日付補正。`sql_mode` を確認 |
| テスト DB がダンプ前提 | テストが再現しない | Phase 0 で空 DB + Seeder に移行 |
| フロントの本番 `.htaccess` | ローカルでリダイレクトループ | Docker 用 `.htaccess` に差し替え（`docker.md` §5.3） |
| 5.1GB ログ | Docker が遅い | 事前に整理 |
| Git 未管理 | ロールバック不能 | Phase 0 で `git init` + タグ |
| PHP 7.2 の EOL | セキュリティ | 早期に Phase 1 以降へ。最終的に 8.5 |

---

## 18. スケジュール（目安）

| 週 | 内容 |
|---|---|
| 1–2 | Phase 0（Docker、Git、テスト DB、特性テスト、ベースライン） |
| 3 | Phase 1（Laravel 6） |
| 4 | Phase 2（Laravel 7） + Phase 3 準備 |
| 5–6 | Phase 3（Laravel 8、Factory/Seeder、例外、複合キー） |
| 7–8 | Phase 4（Laravel 9、Mailer、Flysystem、lang、TrustProxies） |
| 9 | Phase 5（Laravel 10、$casts、PHPUnit 10） |
| 10–12 | Phase 6（Laravel 11、Form フォーク、config 化、構造判断） |
| 13 | Phase 7（Laravel 12） |
| 14–15 | Phase 8（Laravel 13、PHP 8.5、CSRF、deprecation） |
| 16–17 | Phase 9（安定化、負荷試験、カットオーバー準備） |

- 1 名想定で約 4 か月。フロント先行 + 管理横展開で短縮可能。
- Phase 6 が最大の山場。Form 788 箇所と `array_*` 151 箇所の置換、`config:cache` 対応を含む。
- 並行作業可能なのは Phase 0 のテスト作成、Phase 9 のドキュメント整備など。

---

## 19. 完了定義（Definition of Done）

- [ ] Laravel 13.x / PHP 8.5.x でフロント / 管理が動作する。
- [ ] `composer audit` で致命的な脆弱性がない。
- [ ] 既存テスト + 追加した特性テストが green。
- [ ] `storage/logs/laravel.log` に deprecation / fatal がない。
- [ ] フロントの主要画面（トップ、一覧、詳細、検索、レビュー、404）が 58 と同等。
- [ ] 管理画面の全 CRUD、画像アップロード、ログイン、API が動作する。
- [ ] メール送信（Mailpit）が動作する。
- [ ] 出荷目安 CSV が読める。
- [ ] 商品画像・レビュー画像が表示される。
- [ ] `config:cache` / `route:cache` / `view:cache` が動作する。
- [ ] 本番相当の `APP_DEBUG=false` で動作する。
- [ ] 管理画面の新規登録が無効化されている。
- [ ] ロールバック手順（58 に戻す）が文書化されている。
- [ ] `CLAUDE.md` / `ローカルインフラ構成.md` / 本ドキュメントが更新されている。

---

## 20. 参考

- Laravel 13 Upgrade Guide: https://laravel.com/docs/13.x/upgrade
- Laravel 12 Upgrade Guide: https://laravel.com/docs/12.x/upgrade
- Laravel 11 Upgrade Guide: https://laravel.com/docs/11.x/upgrade
- Laravel 10 Upgrade Guide: https://laravel.com/docs/10.x/upgrade
- Laravel 9 Upgrade Guide: https://laravel.com/docs/9.x/upgrade
- Laravel 8 Upgrade Guide: https://laravel.com/docs/8.x/upgrade
- Laravel 7 Upgrade Guide: https://laravel.com/docs/7.x/upgrade
- Laravel 6 Upgrade Guide: https://laravel.com/docs/6.x/upgrade
- Laravel 13 Release Notes: https://laravel.com/framework/docs/13.x/releases
- PHP 8.5 Migration Guide: https://www.php.net/manual/en/migration85.php
- PHP 8.5 Deprecated Features: https://www.php.net/manual/en/migration85.deprecated.php
- `konekt/html`（laravelcollective/html のドロップインフォーク）: https://packagist.org/packages/konekt/html
- `laravel/ui`: https://packagist.org/packages/laravel/ui
- Laravel Shift（自動アップグレード支援）: https://laravelshift.com/
- Rector: https://getrector.com/
- Larastan: https://github.com/larastan/larastan
