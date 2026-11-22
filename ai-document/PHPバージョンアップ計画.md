# PHP バージョンアップ計画（7.2 → 8.5）

- 作成日: 2026-11-22
- 版: 1.0
- 前提: `ai-document/laravel-upgrade.md`（Laravel 5.8 → 13）
- 関連: `ai-document/本番インフラ構築計画.md`
- 対象: `acry-ya.com` / `admin.acry-ya.com`（58系 → 85系）

---

## 1. 目的

本番で稼働している PHP 7.2 を **PHP 8.5** へ段階的に更新する。

- PHP 7.2 はサポート終了（EOL）しており、セキュリティ修正が提供されない
- Laravel 13 の動作要件を満たす
- PHP 8 系の性能改善（OPcache、JIT 等）とモダンな言語機能を活用する
- 画面・URL・業務フローは維持し、利用者から見た体験を変えない

---

## 2. 基本方針

1. **Laravel のメジャーアップと同時に PHP を上げる**
   - Laravel の各バージョンが要求する PHP 範囲に合わせ、最小差分で更新する
2. **1 フェーズずつ進める**
   - 各フェーズでテスト、スクリーンショット比較、タグ付け、DB バックアップを行う
3. **58 系は比較用に残す**
   - 85 系を並行稼働し、旧画面と新画面を比較できる状態を維持する
4. **各フェーズの完了条件を固定する**
   - PHPUnit、`php -l`、Playwright、deprecation ログ、`composer audit`
5. **最終目標は PHP 8.5 / Laravel 13**
   - PHP 8.6 は Laravel の安定性を考慮し、今回は採用しない

---

## 3. バージョン対応表

| Phase | 内容 | Laravel | PHP | 主な PHP 要件 | 目安 |
|---|---|---|---|---|---|
| 0 | ベースライン構築 | 5.8 | 7.2 | 現状固定・テスト基盤 | 10–15 日 |
| 1 | 5.8 → 6 | 6.x | 7.2 / 7.4 | PHP 7.4 対応の準備 | 5 日 |
| 2 | 6 → 7 | 7.x | 7.4 | Symfony 5 系 | 3 日 |
| 3 | 7 → 8 | 8.x | 7.4 / 8.0 | PHP 8.0 の構文・型 | 8 日 |
| 4 | 8 → 9 | 9.x | 8.0 / 8.1 | Symfony Mailer、Flysystem 3 | 8 日 |
| 5 | 9 → 10 | 10.x | 8.1 / 8.2 | `$dates` → `$casts`、Monolog 3 | 5 日 |
| 6 | 10 → 11 | 11.x | 8.2 / 8.3 | アプリ構造、Form ファサード | 15 日 |
| 7 | 11 → 12 | 12.x | 8.2 / 8.3 | Carbon 3、PHPUnit 11 | 3 日 |
| 8 | 12 → 13 | 13.x | 8.3 / **8.5** | PHP 8.5 対応、CSRF、session | 8 日 |
| 9 | 安定化・リリース | 13.x | **8.5** | 性能、セキュリティ、本番切替 | 10 日 |

合計目安: **75–80 人日**（両アプリ、1 名想定）。
2 名体制の場合は **約2か月（8週間）**。インフラ構築と並行して進める。
AI/MCP による設計・検証の自動化を前提とする。

---

## 4. PHP 8 系の主な変更と対策

### 4.1 事前に検出する非互換

| 項目 | 内容 | 本アプリでの想定 | 対策 |
|---|---|---|---|
| 動的プロパティ | PHP 8.2 で非推奨 | 81 箇所 | プロパティ宣言、または `#[AllowDynamicProperties]` |
| 暗黙 nullable | PHP 8.4 で非推奨 | 12 箇所 | `?Type $x = null` に修正 |
| null を内部関数へ渡す | PHP 8.1 で非推奨 | 17 箇所 | `(string)` キャスト、デフォルト値 |
| `imagedestroy()` | PHP 8.5 で非推奨 | フロント 2 箇所 | `unset()` または GD の GC に任せる |
| `curl_close()` | PHP 8.5 で非推奨 | フロント 1 箇所 | 削除 |
| `__sleep` / `__wakeup` | PHP 8.0 以降の挙動変更 | 0 件 | 対応不要 |
| 旧式キャスト | `(integer)` 等 | 0 件 | 対応不要 |

### 4.2 言語仕様・ライブラリの変更

- PHP 8.0: named arguments、union types、`match`、constructor property promotion、attributes
- PHP 8.1: enums、readonly properties、`never` 型、Fibers
- PHP 8.2: readonly classes、DNF types、dynamic properties の非推奨
- PHP 8.3: typed class constants、`#[Override]`
- PHP 8.4: property hooks、asymmetric visibility、暗黙 nullable の非推奨
- PHP 8.5: 最新の構文・非推奨事項に対応

> 新機能の積極採用は行わず、まずは**既存コードが 8.5 で正しく動くこと**を優先する。

### 4.3 MySQL / 認証

- PHP 8.5 の mysqlnd は `caching_sha2_password` に対応
- 既存 RDS（MySQL 8.4）にそのまま接続可能
- `mysql_native_password` への依存は不要
- 接続は TLS を推奨

---

## 5. フェーズ別の PHP 作業

### Phase 0: ベースライン

- `php -v` / `php -m` / `php -i` を記録
- 既存テスト 72 件の結果を記録
- 主要画面のスクリーンショットを保存
- `storage/logs` の deprecation / warning を確認
- Docker の PHP バージョンを固定

### Phase 1–2: PHP 7.2 → 7.4

- `each()` などの削除関数を確認
- 型宣言・戻り値の整合性を確認
- Laravel 6 / 7 の依存更新
- `php -l` と PHPUnit を実行

### Phase 3: PHP 8.0

- `fzaninotto/faker` → `fakerphp/faker`
- factory / seeder のクラス化
- `Throwable` の実装確認
- `Maintenance` ミドルウェア名の変更
- `password_resets` テーブルの確認

### Phase 4: PHP 8.1

- Symfony Mailer への移行
- Flysystem 3 への移行
- `lang` ディレクトリの移動
- `TrustProxies` の設定見直し

### Phase 5: PHP 8.2

- `$dates` → `$casts`
- Monolog 3、PHPUnit 10
- `laravelcollective/html` → `konekt/html` の準備
- `env()` の config 化

### Phase 6: PHP 8.3

- アプリ構造の判断（Laravel 11 の新構造に合わせるか）
- Form ファサードの移行（788 箇所）
- `doctrine/dbal` の削除
- 設定ファイルの同期

### Phase 7: PHP 8.3

- Carbon 3 対応
- PHPUnit 11
- 依存パッケージの更新
- `composer audit`

### Phase 8: PHP 8.5

- CSRF ミドルウェアの改名（`PreventRequestForgery`）
- cache / session の設定変更
- ページネーションの内部ビュー名変更
- PHP 8.5 の非推奨対応（§4.1）
- `E_ALL` で deprecation を収集し、0 件を目指す

### Phase 9: 安定化

- `APP_ENV=production`, `APP_DEBUG=false`
- `php artisan config:cache` / `route:cache` / `view:cache`
- OPcache の設定
- 負荷試験（主要画面、商品一覧の N+1）
- 本番切替

---

## 6. 品質ゲート

各フェーズで以下を実施し、すべて満たした場合のみ次へ進む。

- [ ] `php -l` で構文エラーがない
- [ ] `vendor/bin/phpunit --testdox` が green
- [ ] Playwright の主要導線が通る
  - フロント: トップ → 一覧 → 詳細 → レビュー投稿
  - 管理: ログイン → 商品一覧 → 商品編集 → 画像アップロード
- [ ] 主要画面のスクリーンショットが Phase 0 と一致（許容差分を除く）
- [ ] `storage/logs/laravel.log` に deprecation / warning / fatal がない
- [ ] `composer audit` に致命的な脆弱性がない
- [ ] DB バックアップと Git タグがある
- [ ] 前フェーズの性能と同等以上

---

## 7. リスクと対策

| # | リスク | 影響 | 対策 |
|---|---|---|---|
| 1 | Form ファサード 788 箇所の移行 | 管理画面の入力フォームが動かない | Phase 6 で `konekt/html` へ計画的に移行。画面テストを拡充 |
| 2 | 動的プロパティ 81 箇所 | PHP 8.2 以降で deprecation | 事前に一覧化し、プロパティ宣言 or `#[AllowDynamicProperties]` |
| 3 | 既存テストが 72 件と少ない | 回帰の見逃し | Phase 0 で特性テストとスクショ比較を追加 |
| 4 | DB マイグレーションの不整合 | `migrate` で壊れる | ダンプ済み DB では `migrate` しない。テストは空 DB に `migrate` |
| 5 | `APP_KEY` の変更 | 暗号化データが読めない | 現行の `APP_KEY` を維持 |
| 6 | セッション形式の変更 | ログアウト多発 | `SESSION_COOKIE` を明示。切替前に周知 |
| 7 | PHP 8.5 の非推奨 | ログ肥大・将来の削除 | `E_ALL` で収集し、0 件を目指す |
| 8 | 本番切替の失敗 | サービス停止 | DNS 切戻し、旧環境 2–4 週間保持、DB スナップショット |

---

## 8. 体制・スケジュール

- 1 名: 75–80 人日（約 3.5–4 か月）
- 2 名: **約2か月（8週間、並行作業）**
- インフラ構築（2名体制で約8週間）と並行して進める
- AI/MCP による設計・検証の自動化を前提とする
- 本番切替は **Phase 8 完了後**。インフラのカットオーバー条件と一致させる

| 週 | Laravel / PHP | インフラ | マイルストーン |
|---|---|---|---|
| 1 | Phase 0 | Phase 0 | キックオフ |
| 2 | Phase 1–2 | Phase 1 | G1 設計・コスト承認 |
| 3 | Phase 3 | Phase 2 | テスト環境構築 |
| 4 | Phase 4 | Phase 3–4 | G2 テスト環境確認 |
| 5 | Phase 5–6 | Phase 5 | アプリ配備 |
| 6 | Phase 6–7 | Phase 6 | ステージング候補 |
| 7 | Phase 8 | Phase 7 | G3 本番切替承認 |
| 8 | Phase 9 | Phase 8–9 | 本番切替・安定化 |

---

## 9. 完了条件

- [ ] PHP 8.5 / Laravel 13 でフロント・管理の全主要機能が動作する
- [ ] テストが green、deprecation が許容範囲（0 が理想）
- [ ] 主要画面のスクリーンショットが Phase 0 と一致
- [ ] 性能が Phase 6 と同等以上
- [ ] セキュリティチェック（`APP_DEBUG=false`、新規登録無効化、`composer audit`）
- [ ] 本番切替と切戻しの手順が文書化されている

---

## 10. 関連ドキュメント

- `ai-document/laravel-upgrade.md` — Laravel 5.8 → 13 の詳細
- `ai-document/本番インフラ構築計画.md` — AWS 本番環境の構築
- `ai-document/本番インフラ.md` — 本番要件
- `ai-document/docker.md` — ローカル検証環境
