# アクリ屋webシステム Docker 作成計画

- 作成日: 2026-11-21
- 対象: ローカル開発環境（本番デプロイ手順ではない）
- 関連: `CLAUDE.md`, `ai-document/ローカルインフラ構成.md`, `ai-document/dump2026.sql`
- 関連計画: `ai-document/laravel-upgrade.md`

---

## 1. 目的

以下 4 アプリを、1 つの Docker Compose 環境で同時に起動できるようにする。

| アプリ | 現行 / 移行先 | PHP | Laravel | 想定 URL |
|---|---|---|---|---|
| `acry-ya.com` | 現行（本番同等） | 7.2 | 5.8 | http://localhost:8002 |
| `admin.acry-ya.com` | 現行（本番同等） | 7.2 | 5.8 | http://localhost:8003 |
| `acry-ya.com85` | 移行先 | 8.5 | 13 | http://localhost:8000 |
| `admin.acry-ya.com85` | 移行先 | 8.5 | 13 | http://localhost:8001 |

現行版と移行版を**同時に起動して見比べられること**を最優先とする。これにより、Laravel バージョンアップの各フェーズで「旧画面と新画面の差分確認」「同一 DB データでの動作比較」ができる。

### 非スコープ

- カートシステム（Perl/CGI `public/cgibin/*`）の実行
- WordPress（`public/_blog/*`）の実行
- 本番サーバー（さくら / AWS RDS / Apache）の構築・デプロイ
- 商品画像の本番同期
- メールの実送信（ローカルは Mailpit で受信）

> カート・ブログは既存の本番ドメイン側の資産であり、今回の Laravel 最新化の対象外。ローカルでリンクを踏むと 404 になるが、これは想定内とする。

---

## 2. 現状分析（設計の根拠）

コード・設定・ダンプを確認した結果、Docker 設計に影響する事実は以下。

### 2.1 アプリ構成

- 両アプリとも Laravel 5.8。`composer.json` の `php` は `^7.1.3`。
- フロントは Form/Html ファサードなし。管理画面は `laravelcollective/html` の `Form::` を **788 箇所**で使用。
- 管理画面は `Auth::routes()`（laravel/ui 相当）と `resources/views/auth/*` を使用。
- フロントは独自 `App\Services\Route\UrlGenerator` で末尾スラッシュを付与している。
- フロントは `public/storage` が実ディレクトリ（`reviewimages`）、管理画面は `public/storage/images` がシンボリックリンク。

### 2.2 本番想定の Apache 依存

- フロントの `public/.htaccess` は **1,789 行**。以下を含む。
  - 攻撃元 IP の 503 ブロック
  - HTTPS 強制リダイレクト（`X-Forwarded-Proto != https`）
  - 大量の SEO 301 リダイレクト
  - `.html` / `.htm` を PHP として実行（`AddHandler application/x-httpd-php`）
  - `ErrorDocument`、`Header` による no-cache
- 管理画面の `.htaccess` は標準的な Laravel フロントコントローラのみ。

→ **Nginx + PHP-FPM ではなく、Apache + mod_php を採用する**。`.htaccess` の挙動（特に `.html` を PHP 実行）をそのまま再現できるため。PHP バージョンごとに Apache コンテナを分ける。

### 2.3 DB

- `ai-document/dump2026.sql` は MySQL **8.4.8** のダンプ。42 テーブル、`utf8mb4`、InnoDB。
- 2 カラムのみ `utf8mb4_0900_ai_ci`、他は `utf8mb4_unicode_ci`。
- `taxes.tax_change_date` に **`0000-00-00 00:00:00`** が 1 件存在。
- ダンプ内の `migrations` テーブル（58 行）と、`admin.acry-ya.com/database/migrations` のファイル名（66 件）が**一致していない**（日付部分が `2019_04_15_*` と `2019_04_19_*` で異なる）。
  - → インポート済み DB に対して `php artisan migrate` を実行してはいけない。テスト用 DB は別途「空 DB に migrate」で作る。

### 2.4 ストレージ・画像

- フロント `public/` は約 **1.2GB**（`_blog` 241MB、`wpinportimage` 427MB、`assets` 439MB など）。
- フロント `storage/logs` は約 **5.1GB**（daily ログの蓄積）。Docker マウント前に整理が必要。
- 管理画面 `storage/app/public/img_storage` は約 **760MB**。商品画像の実体。
- フロントの商品画像表示は `DISPLAY_IMAGE_PATH=storage/images/` → `public/storage/images/...`。
  - 管理画面の `img_storage` をフロントの `public/storage/images` に共有マウントする必要がある。
- フロントのレビュー画像は `public/storage/reviewimages/`（約 26MB）に直接保存される。

### 2.5 ハードコードされたパス

- `DELIVERIES_PATH` は両アプリとも `/var/www/acry-ya.com/data/zaiko6.csv` を参照（管理画面もフロントの CSV を読む）。
- 管理画面の `.env` は `FRONT_REVIEW_IMAGES_DIR=https://acry-ya.com/storage/reviewimages/` を参照。
- → コンテナ内のアプリ配置パスを **`/var/www/acry-ya.com`**、**`/var/www/admin.acry-ya.com`** に合わせる。85 版も同様に `/var/www/acry-ya.com85` などにする。

### 2.6 認証・MySQL の互換性

- PHP 7.2 の mysqlnd は MySQL 8 の `caching_sha2_password` を安定して扱えない（PHP 7.4.4 以降で正式対応）。
- MySQL 8.4 は `mysql_native_password` がデフォルト無効。
- → MySQL 8.4 で `mysql_native_password=ON` を有効にし、ローカルで使う接続ユーザー（`root`、予備の `acryya58` / `acryya85`）はすべて `mysql_native_password` にする。本番 RDS も同じ構成（PHP 7.2 から MySQL 8.4 へ接続）と考えられる。

### 2.7 ポート

`ローカルインフラ構成.md` の正しいポートは以下。

| アプリ | ポート |
|---|---|
| front58 | 8002 |
| admin58 | 8003 |
| front85 | 8000 |
| admin85 | 8001 |

ただし、現在の開発マシンでは **8000 は `techno2`、8001 は `src-pgadmin-1` が使用中**。

```
techno2         0.0.0.0:8000->80/tcp
src-pgadmin-1   0.0.0.0:8001->80/tcp
```

85版を起動する前に、この2つのコンテナを停止するか、`acry-ya-docker/.env` の `FRONT85_PORT` / `ADMIN85_PORT` を別ポート（例: 8010 / 8011）に変更する。

| アプリ | 既定ポート | 備考 |
|---|---|---|
| front58 | 8002 | ドキュメント通り |
| admin58 | 8003 | ドキュメント通り |
| front85 | **8000** | 他プロジェクト使用中なら停止するか `.env` で変更 |
| admin85 | **8001** | 同上 |
| MySQL | 3306 | ホストから直接接続（root/root） |
| Mailpit SMTP | 1025 | |
| Mailpit UI | 8025 | |
| phpMyAdmin | 8080 | 任意 |

> ポートはすべて `acry-ya-docker/.env` で変数化している。

---

## 3. 設計方針

| 項目 | 採用 | 理由 |
|---|---|---|
| Web サーバー | Apache 2.4 + mod_php | `.htaccess` の再現性。`.html` を PHP 実行する設定がそのまま動く |
| コンテナ単位 | アプリごとに 1 コンテナ | ドキュメントルート・PHP バージョン・環境変数が異なるため |
| PHP 7.2 | `php:7.2.34-apache`（Debian buster） | 本番同等。arm64 イメージあり |
| PHP 8.5 | `php:8.5.0-apache` | 移行先 |
| DB | `mysql:8.4` | ダンプのサーバーバージョンに合わせる |
| DB の持たせ方 | 58 系は `acryya_system`、85 系は `acryya_system85` | 現行と移行版を同時に動かし、スキーマ変更の影響を分離するため |
| メール | Mailpit | SMTP をローカル受信。UI で確認 |
| セッション/キャッシュ | file | 既存設定のまま。Redis は未使用 |
| キュー | sync | 既存設定のまま。ワーカー不要 |
| ファイル共有 | bind mount + 画像ディレクトリの共有マウント | ホストの既存ファイルをそのまま使う |
| フロント `.htaccess` | Docker 専用のローカル安全版に差し替え | 本番 `.htaccess` の HTTPS 強制・Basic 認証・IP 制限を避けるため |

### 3.1 全体構成

```
Host (macOS / Docker Desktop)
│
├─ :8002  front58   ── Apache + PHP 7.2 ── /var/www/acry-ya.com
├─ :8003  admin58   ── Apache + PHP 7.2 ── /var/www/admin.acry-ya.com
├─ :8000  front85   ── Apache + PHP 8.5 ── /var/www/acry-ya.com85
├─ :8001  admin85   ── Apache + PHP 8.5 ── /var/www/admin.acry-ya.com85
│
├─ :3306  mysql     ── MySQL 8.4（root/root）
│     ├─ acryya_system     (dump2026.sql)
│     └─ acryya_system85   (dump2026.sql の複製)
│
├─ :1025/:8025 mailpit
├─ :8080 phpmyadmin (任意)
└─ tools node (任意)

Docker network: appnet
```

---

## 4. ディレクトリ構成

```
acry-ya2026/
├── acry-ya.com/                 # 現行フロント（変更しない）
├── admin.acry-ya.com/           # 現行管理（変更しない）
├── acry-ya.com85/               # 移行フロント（Phase 0 で作成）
├── admin.acry-ya.com85/         # 移行管理（Phase 0 で作成）
├── ai-document/
│   ├── docker.md                # 本ドキュメント
│   ├── laravel-upgrade.md       # バージョンアップ計画
│   └── dump2026.sql             # DB ダンプ（13MB）
└── acry-ya-docker/              # Docker 定義（本計画で作成）
    ├── docker-compose.yml
    ├── env.example              # Compose 用 .env のサンプル
    ├── Makefile                 # 任意。日常コマンド集
    ├── db-data/                 # MySQL データ（gitignore）
    ├── php/
    │   ├── Dockerfile
    │   ├── apache/
    │   │   ├── 000-default.conf
    │   │   └── front.htaccess   # フロント用ローカル安全版
    │   ├── php.ini
    │   └── entrypoint.sh
    ├── mysql/
    │   ├── conf/
    │   │   └── my.cnf
    │   └── init/
    │       ├── 00-users.sh
    │       └── 20-init85.sh
    └── node/                    # 任意（npm 用）
```

> `acry-ya-docker/.env` と `db-data/` は Git 管理しない。`env.example` のみ共有する。

---

## 5. PHP / Apache イメージ設計

### 5.1 Dockerfile

`acry-ya-docker/php/Dockerfile`

```dockerfile
# syntax=docker/dockerfile:1

ARG PHP_VERSION=8.5.0
ARG COMPOSER_IMAGE=composer:2

# Composer を別ステージからコピー（PHP 7.2 は composer:2.2 を指定）
FROM ${COMPOSER_IMAGE} AS composer

FROM php:${PHP_VERSION}-apache

ARG PHP_VERSION

ENV TZ=Asia/Tokyo \
    APACHE_DOCUMENT_ROOT=/var/www/html/public

# ---------------------------------------------------------------------
# OS パッケージ
# PHP 7.2 (Debian buster) は EOL のため apt リポジトリが archive に移動している
# ---------------------------------------------------------------------
RUN set -eux; \
    if [ "${PHP_VERSION%%.*}" = "7" ]; then \
        sed -i \
            -e 's|http://deb.debian.org/debian|http://archive.debian.org/debian|g' \
            -e '/security.debian.org/d' \
            -e '/buster-updates/d' \
            /etc/apt/sources.list; \
        echo 'Acquire::Check-Valid-Until "false";' > /etc/apt/apt.conf.d/90no-check-valid-until; \
    fi; \
    apt-get update; \
    apt-get install -y --no-install-recommends \
        git unzip \
        libpng-dev libjpeg62-turbo-dev libfreetype6-dev \
        libicu-dev libonig-dev libxml2-dev; \
    rm -rf /var/lib/apt/lists/*

# ---------------------------------------------------------------------
# PHP 拡張
#   必須: pdo_mysql, mbstring, gd（レビュー画像）, exif, bcmath, opcache
#   intl: 将来の利用に備えて導入（不要なら削除可）
# ---------------------------------------------------------------------
RUN set -eux; \
    if [ "${PHP_VERSION%%.*}" = "7" ]; then \
        docker-php-ext-configure gd \
            --with-freetype-dir=/usr/include/ \
            --with-jpeg-dir=/usr/include/; \
    else \
        docker-php-ext-configure gd \
            --with-freetype \
            --with-jpeg; \
    fi; \
    docker-php-ext-install -j"$(nproc)" \
        pdo_mysql mbstring gd intl exif bcmath opcache

# ---------------------------------------------------------------------
# Composer
#   7.2 は Composer 2.2 系（PHP 7.2 対応の最終系）
# ---------------------------------------------------------------------
COPY --from=composer /usr/bin/composer /usr/local/bin/composer

# ---------------------------------------------------------------------
# Apache
# ---------------------------------------------------------------------
RUN a2enmod rewrite headers expires
COPY apache/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY php.ini /usr/local/etc/php/conf.d/99-acryya.ini
COPY entrypoint.sh /usr/local/bin/app-entrypoint
RUN chmod +x /usr/local/bin/app-entrypoint

ENTRYPOINT ["app-entrypoint"]
CMD ["apache2-foreground"]
```

#### 補足

- `php:7.2.34-apache` が取得できない場合は `php:7.2-apache`（同内容の buster イメージ）にフォールバックする。
- `php:8.5.0-apache` が取得できない場合は `php:8.5-apache` にフォールバックする。
- `docker-php-ext-install` はソースからビルドするため、初回ビルドに数分かかる。
- PHP 7.2 の `gd` は `--with-freetype-dir` / `--with-jpeg-dir` 形式。PHP 8 系は `--with-freetype` / `--with-jpeg` 形式。上記の条件分岐で吸収する。
- 拡張を増やす場合（`zip`, `imagick` など）は `apt-get install` のパッケージと `docker-php-ext-install` の両方に追加する。

### 5.2 Apache 仮想ホスト

`acry-ya-docker/php/apache/000-default.conf`

```apache
<VirtualHost *:80>
    ServerName localhost
    DocumentRoot ${APACHE_DOCUMENT_ROOT}

    <Directory ${APACHE_DOCUMENT_ROOT}>
        Options FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>

    # ログは docker logs に出す
    ErrorLog  /dev/stderr
    CustomLog /dev/stdout combined
</VirtualHost>
```

- `AllowOverride All` により、各アプリの `.htaccess`（`RewriteRule`, `Header`, `AddHandler`, `ErrorDocument`）が有効になる。
- `mod_rewrite`, `mod_headers`, `mod_expires` を有効化済み。
- `Options FollowSymLinks` のみ（`Indexes` は付けない）。

### 5.3 フロント用ローカル安全版 `.htaccess`

本番の `acry-ya.com/public/.htaccess` は以下のためローカルでそのまま使えない。

- HTTPS 強制リダイレクト → `http://localhost` が `https://localhost` に飛ぶ
- Basic 認証 → ユーザー名/パスワードを要求される
- 攻撃元 IP の 503 ブロック
- `ErrorDocument 404 /404.html` → Laravel の 404 画面ではなく静的 HTML を返す

`acry-ya-docker/php/apache/front.htaccess` を用意し、フロントコンテナに**読み取り専用で上書きマウント**する。

```apache
Options -MultiViews -Indexes

# 本番同様、.html / .htm を PHP として実行する
<FilesMatch "\.(html|htm)$">
    AddType application/x-httpd-php .html .htm
</FilesMatch>

<IfModule mod_rewrite.c>
    RewriteEngine On

    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # フロントコントローラ
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]

    # /products/ 配下もフロントコントローラへ
    RewriteCond %{REQUEST_URI} (^/products/)
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

マウント例:

```yaml
- ./php/apache/front.htaccess:/var/www/acry-ya.com/public/.htaccess:ro
```

> SEO 301 の検証が必要な場合は、本番 `.htaccess` から HTTPS 強制・Basic 認証・IP 制限・`ErrorDocument` を除去した「ローカル検証用フル版」を別途作成する。通常の画面確認では上記の最小版で十分。

### 5.4 php.ini

`acry-ya-docker/php/php.ini`

```ini
memory_limit = 512M
upload_max_filesize = 64M
post_max_size = 64M
max_execution_time = 120
max_input_vars = 5000

date.timezone = Asia/Tokyo
display_errors = On
error_reporting = E_ALL
log_errors = On

opcache.enable = 1
opcache.validate_timestamps = 1
opcache.revalidate_freq = 0
opcache.memory_consumption = 128
opcache.max_accelerated_files = 20000
```

- ローカルは `display_errors=On`、`opcache.validate_timestamps=1`（コード変更を即反映）。
- PHP 8.x の deprecation を拾うため `error_reporting=E_ALL`。ログ肥大化に注意（§10.4）。

### 5.5 entrypoint

`acry-ya-docker/php/entrypoint.sh`

```sh
#!/bin/sh
set -eu

APP_ROOT="${APP_ROOT:-/var/www/html}"

for dir in \
    "$APP_ROOT/storage/framework/views" \
    "$APP_ROOT/storage/framework/cache" \
    "$APP_ROOT/storage/framework/sessions" \
    "$APP_ROOT/storage/logs" \
    "$APP_ROOT/bootstrap/cache"; do
    mkdir -p "$dir" 2>/dev/null || true
    chown -R www-data:www-data "$dir" 2>/dev/null || true
    chmod -R ug+rwX "$dir" 2>/dev/null || true
done

exec docker-php-entrypoint "$@"
```

- 起動時に書き込みディレクトリだけ権限調整する。
- `storage/logs` が 5GB あると `chown -R` が遅いので、**事前にログを整理する**（§10.4）。
- Linux ホストで権限が合わない場合は、Dockerfile で `www-data` の UID/GID をホストに合わせるか、Compose の `user:` を検討する（macOS では通常不要）。

---

## 6. docker-compose.yml 設計

`acry-ya-docker/docker-compose.yml` の全体像。ここでは 58 系を常時起動、85 系を `profiles: ["v85"]` で任意起動にする。85 フォルダ作成後にプロファイルを外せば常時起動できる。

```yaml
name: acry-ya2026

x-php-base: &php-base
  restart: unless-stopped
  networks:
    - appnet
  extra_hosts:
    - "host.docker.internal:host-gateway"
  depends_on:
    mysql:
      condition: service_healthy
    mailpit:
      condition: service_started

services:
  # ===================================================================
  # MySQL 8.4
  # ===================================================================
  mysql:
    image: mysql:8.4
    container_name: acryya-mysql
    command:
      - --character-set-server=utf8mb4
      - --collation-server=utf8mb4_unicode_ci
      - --default-time-zone=+09:00
      # PHP 7.2 は caching_sha2_password 非対応のため native password を有効化
      - --mysql-native-password=ON
    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD:-root}
      MYSQL_DATABASE: acryya_system
      MYSQL_USER: acryya58
      MYSQL_PASSWORD: ${DB_PASSWORD_58:-acryya58}
      DB_PASSWORD_85: ${DB_PASSWORD_85:-acryya85}
      TZ: Asia/Tokyo
    ports:
      - "${MYSQL_PORT:-3306}:3306"
    volumes:
      - ./db-data:/var/lib/mysql
      - ./mysql/conf/my.cnf:/etc/mysql/conf.d/zz-acryya.cnf:ro
      - ./mysql/init/00-users.sh:/docker-entrypoint-initdb.d/00-users.sh:ro
      - ../ai-document/dump2026.sql:/docker-entrypoint-initdb.d/10-dump.sql:ro
      - ./mysql/init/20-init85.sh:/docker-entrypoint-initdb.d/20-init85.sh:ro
    healthcheck:
      test: ["CMD-SHELL", "mysqladmin ping -h 127.0.0.1 -uroot -p\"$$MYSQL_ROOT_PASSWORD\" --silent"]
      interval: 5s
      timeout: 5s
      retries: 30
    networks:
      - appnet

  # ===================================================================
  # フロント 5.8 (PHP 7.2)
  # ===================================================================
  front58:
    <<: *php-base
    build:
      context: ./php
      args:
        PHP_VERSION: "7.2.34"
        COMPOSER_IMAGE: "composer:2.2"
    image: acry-ya-php:7.2
    container_name: acryya-front58
    working_dir: /var/www/acry-ya.com
    ports:
      - "${FRONT58_PORT:-8002}:80"
    environment:
      APP_ROOT: /var/www/acry-ya.com
      APACHE_DOCUMENT_ROOT: /var/www/acry-ya.com/public
      TZ: Asia/Tokyo
      APP_URL: http://localhost:${FRONT58_PORT:-8002}
      DB_HOST: mysql
      DB_PORT: "3306"
      DB_DATABASE: acryya_system
      DB_USERNAME: root
      DB_PASSWORD: ${MYSQL_ROOT_PASSWORD:-root}
      MAIL_DRIVER: smtp
      MAIL_MAILER: smtp
      MAIL_HOST: mailpit
      MAIL_PORT: "1025"
      MAIL_USERNAME: ""
      MAIL_PASSWORD: ""
      MAIL_ENCRYPTION: ""
      DELIVERIES_PATH: /var/www/acry-ya.com/data/zaiko6.csv
      IMAGE_STORAGE: public/img_storage
      DISPLAY_IMAGE_PATH: storage/images/
    volumes:
      - ../acry-ya.com:/var/www/acry-ya.com:cached
      # 管理画面の商品画像をフロントの表示パスに共有（読み取り専用）
      - ../admin.acry-ya.com/storage/app/public/img_storage:/var/www/acry-ya.com/public/storage/images:ro,cached
      # 本番 .htaccess の HTTPS/Basic 認証を避ける
      - ./php/apache/front.htaccess:/var/www/acry-ya.com/public/.htaccess:ro

  # ===================================================================
  # 管理 5.8 (PHP 7.2)
  # ===================================================================
  admin58:
    <<: *php-base
    build:
      context: ./php
      args:
        PHP_VERSION: "7.2.34"
        COMPOSER_IMAGE: "composer:2.2"
    image: acry-ya-php:7.2
    container_name: acryya-admin58
    working_dir: /var/www/admin.acry-ya.com
    ports:
      - "${ADMIN58_PORT:-8003}:80"
    environment:
      APP_ROOT: /var/www/admin.acry-ya.com
      APACHE_DOCUMENT_ROOT: /var/www/admin.acry-ya.com/public
      TZ: Asia/Tokyo
      APP_URL: http://localhost:${ADMIN58_PORT:-8003}
      SITE_URL: http://localhost:${FRONT58_PORT:-8002}
      DB_HOST: mysql
      DB_PORT: "3306"
      DB_DATABASE: acryya_system
      DB_USERNAME: root
      DB_PASSWORD: ${MYSQL_ROOT_PASSWORD:-root}
      MAIL_DRIVER: smtp
      MAIL_MAILER: smtp
      MAIL_HOST: mailpit
      MAIL_PORT: "1025"
      MAIL_USERNAME: ""
      MAIL_PASSWORD: ""
      MAIL_ENCRYPTION: ""
      DELIVERIES_PATH: /var/www/acry-ya.com/data/zaiko6.csv
      IMAGE_STORAGE: public/img_storage
      DISPLAY_IMAGE_PATH: storage/images/
      FRONT_REVIEW_IMAGES_DIR: http://localhost:${FRONT58_PORT:-8002}/storage/reviewimages/
    volumes:
      - ../admin.acry-ya.com:/var/www/admin.acry-ya.com:cached
      # 出荷目安 CSV はフロントの data を参照する
      - ../acry-ya.com/data:/var/www/acry-ya.com/data:ro,cached

  # ===================================================================
  # フロント 85 (PHP バージョンは .env の PHP85_VERSION) — Phase 0 でフォルダ作成後に起動
  # ===================================================================
  front85:
    <<: *php-base
    profiles: ["v85"]
    build:
      context: ./php
      args:
        PHP_VERSION: ${PHP85_VERSION:-8.5.0}
        COMPOSER_IMAGE: ${PHP85_COMPOSER_IMAGE:-composer:2}
    image: acry-ya-php:${PHP85_VERSION:-8.5.0}
    container_name: acryya-front85
    working_dir: /var/www/acry-ya.com85
    ports:
      - "${FRONT85_PORT:-8000}:80"
    environment:
      APP_ROOT: /var/www/acry-ya.com85
      APACHE_DOCUMENT_ROOT: /var/www/acry-ya.com85/public
      TZ: Asia/Tokyo
      APP_DEBUG: "true"
      APP_URL: http://localhost:${FRONT85_PORT:-8000}
      DB_HOST: mysql
      DB_PORT: "3306"
      DB_DATABASE: acryya_system85
      DB_USERNAME: root
      DB_PASSWORD: ${MYSQL_ROOT_PASSWORD:-root}
      MAIL_DRIVER: smtp
      MAIL_MAILER: smtp
      MAIL_HOST: mailpit
      MAIL_PORT: "1025"
      MAIL_USERNAME: ""
      MAIL_PASSWORD: ""
      MAIL_ENCRYPTION: ""
      DELIVERIES_PATH: /var/www/acry-ya.com85/data/zaiko6.csv
      IMAGE_STORAGE: public/img_storage
      DISPLAY_IMAGE_PATH: storage/images/
    volumes:
      - ../acry-ya.com85:/var/www/acry-ya.com85:cached
      - ../admin.acry-ya.com85/storage/app/public/img_storage:/var/www/acry-ya.com85/public/storage/images:ro,cached
      - ./php/apache/front.htaccess:/var/www/acry-ya.com85/public/.htaccess:ro

  # ===================================================================
  # 管理 85 (PHP バージョンは .env の PHP85_VERSION)
  # ===================================================================
  admin85:
    <<: *php-base
    profiles: ["v85"]
    build:
      context: ./php
      args:
        PHP_VERSION: ${PHP85_VERSION:-8.5.0}
        COMPOSER_IMAGE: ${PHP85_COMPOSER_IMAGE:-composer:2}
    image: acry-ya-php:${PHP85_VERSION:-8.5.0}
    container_name: acryya-admin85
    working_dir: /var/www/admin.acry-ya.com85
    ports:
      - "${ADMIN85_PORT:-8001}:80"
    environment:
      APP_ROOT: /var/www/admin.acry-ya.com85
      APACHE_DOCUMENT_ROOT: /var/www/admin.acry-ya.com85/public
      TZ: Asia/Tokyo
      APP_DEBUG: "true"
      APP_URL: http://localhost:${ADMIN85_PORT:-8001}
      SITE_URL: http://localhost:${FRONT85_PORT:-8000}
      DB_HOST: mysql
      DB_PORT: "3306"
      DB_DATABASE: acryya_system85
      DB_USERNAME: root
      DB_PASSWORD: ${MYSQL_ROOT_PASSWORD:-root}
      MAIL_DRIVER: smtp
      MAIL_MAILER: smtp
      MAIL_HOST: mailpit
      MAIL_PORT: "1025"
      MAIL_USERNAME: ""
      MAIL_PASSWORD: ""
      MAIL_ENCRYPTION: ""
      DELIVERIES_PATH: /var/www/acry-ya.com85/data/zaiko6.csv
      IMAGE_STORAGE: public/img_storage
      DISPLAY_IMAGE_PATH: storage/images/
      FRONT_REVIEW_IMAGES_DIR: http://localhost:${FRONT85_PORT:-8000}/storage/reviewimages/
    volumes:
      - ../admin.acry-ya.com85:/var/www/admin.acry-ya.com85:cached
      - ../acry-ya.com85/data:/var/www/acry-ya.com85/data:ro,cached

  # ===================================================================
  # Mailpit
  # ===================================================================
  mailpit:
    image: axllent/mailpit:v1.34
    container_name: acryya-mailpit
    ports:
      - "${MAILPIT_SMTP_PORT:-1025}:1025"
      - "${MAILPIT_UI_PORT:-8025}:8025"
    environment:
      TZ: Asia/Tokyo
      MP_SMTP_AUTH_ACCEPT_ANY: "1"
      MP_SMTP_AUTH_ALLOW_INSECURE: "1"
    networks:
      - appnet

  # ===================================================================
  # 任意ツール
  # ===================================================================
  node:
    image: node:18
    profiles: ["tools"]
    working_dir: /app
    volumes:
      - ../admin.acry-ya.com:/app:cached
    environment:
      NODE_OPTIONS: --openssl-legacy-provider
    command: sh -lc "npm install && npm run dev"
    networks:
      - appnet

  phpmyadmin:
    image: phpmyadmin:5
    profiles: ["tools"]
    ports:
      - "${PMA_PORT:-8080}:80"
    environment:
      PMA_HOST: mysql
      PMA_USER: root
      PMA_PASSWORD: ${MYSQL_ROOT_PASSWORD:-root}
      UPLOAD_LIMIT: 64M
    networks:
      - appnet

networks:
  appnet:
    driver: bridge
```

### 6.1 Compose 用 .env（`acry-ya-docker/.env`）

```dotenv
FRONT58_PORT=8002
ADMIN58_PORT=8003
FRONT85_PORT=8000
ADMIN85_PORT=8001

MYSQL_PORT=3306
MYSQL_ROOT_PASSWORD=root
# 予備ユーザー（アプリは root で接続）
DB_PASSWORD_58=acryya58
DB_PASSWORD_85=acryya85

MAILPIT_SMTP_PORT=1025
MAILPIT_UI_PORT=8025
PMA_PORT=8080
```

> 本番の DB パスワードは使わない。ローカル専用の値を設定する。`.env` は Git 管理しない。

### 6.2 環境変数の優先順位

Laravel の `.env`（各アプリ配下）より、Compose の `environment` が優先される（phpdotenv の `safeLoad` は既存の環境変数を上書きしない）。そのため、各アプリの `.env` は原則そのまま使い、Docker 固有の差分（DB_HOST, APP_URL, MAIL_HOST など）だけ Compose で上書きする。

ただし、**Laravel 11 以降で `config:cache` を有効にすると `env()` は config ファイル以外では `null` になる**。`app/` 配下の `env()` 直呼び（`DELIVERIES_PATH`, `IMAGE_STORAGE`, `DISPLAY_IMAGE_PATH`, `SITE_URL`, `APP_URL`）は、アップグレード計画の Phase 3/6 で `config/acryya.php` に移す。Docker 環境では `config:cache` を無効のまま運用する。

---

## 7. MySQL 設計

### 7.1 初期化の流れ

MySQL 公式イメージの entrypoint は、初回起動時に `/docker-entrypoint-initdb.d/` のファイルを**ファイル名の昇順**で実行する。

| 順 | ファイル | 内容 |
|---|---|---|
| 1 | `00-users.sh` | 5.8 ユーザーを `mysql_native_password` に変更。85 ユーザーと `acryya_system85` を作成 |
| 2 | `10-dump.sql` | `MYSQL_DATABASE=acryya_system` に自動インポート |
| 3 | `20-init85.sh` | `dump2026.sql` を `acryya_system85` にインポート。ゼロ日付を補正 |

`00-users.sh`:

```bash
#!/bin/bash
set -e

mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" <<SQL
# アプリは root で接続する。PHP 7.x でも接続できるよう認証方式を変更する
ALTER USER 'root'@'%'
    IDENTIFIED WITH mysql_native_password BY '${MYSQL_ROOT_PASSWORD}';

ALTER USER '${MYSQL_USER}'@'%'
    IDENTIFIED WITH mysql_native_password BY '${MYSQL_PASSWORD}';

CREATE USER IF NOT EXISTS 'acryya85'@'%'
    IDENTIFIED WITH mysql_native_password BY '${DB_PASSWORD_85}';

CREATE DATABASE IF NOT EXISTS \`acryya_system85\`
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

GRANT ALL PRIVILEGES ON \`acryya_system\`.*   TO 'acryya85'@'%';
GRANT ALL PRIVILEGES ON \`acryya_system85\`.* TO 'acryya85'@'%';
FLUSH PRIVILEGES;
SQL
```

`20-init85.sh`:

```bash
#!/bin/bash
set -e

mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" acryya_system85 \
    < /docker-entrypoint-initdb.d/10-dump.sql

# 0000-00-00 は MySQL 8.4 の strict mode で書き込み時にエラーになるため補正
mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" acryya_system85 <<'SQL'
UPDATE taxes
   SET tax_change_date = '2019-04-16 00:00:00'
 WHERE tax_change_date = '0000-00-00 00:00:00';
SQL
```

`my.cnf`:

```ini
[mysqld]
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
default-time-zone = +09:00
sql_mode = NO_ENGINE_SUBSTITUTION
```

> `--mysql-native-password=ON` は MySQL 8.4 のコマンドラインオプション。8.0 系を使う場合は `--default-authentication-plugin=mysql_native_password` に読み替える。`mysql_native_password` は将来の MySQL で削除予定のため、本番移行時には認証方式を見直す。

### 7.2 DB の使い分け

| アプリ | DB | ユーザー | 認証 |
|---|---|---|---|
| front58 / admin58 | `acryya_system` | `root` | `mysql_native_password` |
| front85 / admin85 | `acryya_system85` | `root` | `mysql_native_password` |

ローカル開発では接続を簡略化するため、全アプリが `root` / `root` で接続する。
`acryya58` / `acryya85` は予備ユーザーとして残している（`00-users.sh` が作成）。

`ローカルインフラ構成.md` は「各環境とも同じ DB を見る」としているが、**アップグレード検証では 58 と 85 で DB を分ける**ことを推奨する。

理由:

- 85 側でマイグレーションやテストデータ投入をしても 58 側が壊れない。
- 同じダンプから作るため、初期データは同一。画面比較が可能。
- 移行完了後に `DB_DATABASE` を `acryya_system` に戻せば、最終的な同一 DB 運用に切り替えられる。

同じ DB を見たい場合は、`front85` / `admin85` の `DB_DATABASE` を `acryya_system` に変更する（ユーザーは `root` のままでよい。ただし 85 側の書き込みが 58 側に影響する）。

### 7.3 ダンプのマイグレーション不整合

`dump2026.sql` の `migrations` テーブルは 58 行で、ファイル名が `2019_04_15_*`。一方 `database/migrations` は 66 ファイルで `2019_04_19_*`。

- **インポート済み DB に対して `php artisan migrate` を実行しない。**
- テスト用 DB（`acryya_system_test`）は、ダンプを使わず**空 DB に `php artisan migrate` → `db:seed`** で作る。
- どうしてもインポート済み DB で migrate したい場合は、`migrations` テーブルに 66 ファイル分のレコードを手動で登録する、または `schema:dump` でスキーマをスカッシュする。

---

## 8. ファイル共有・ボリューム設計

| ホスト | コンテナ | モード | 用途 |
|---|---|---|---|
| `acry-ya.com/` | `/var/www/acry-ya.com` | rw, cached | フロントコード・public・storage |
| `admin.acry-ya.com/` | `/var/www/admin.acry-ya.com` | rw, cached | 管理コード |
| `acry-ya.com85/` | `/var/www/acry-ya.com85` | rw, cached | 移行フロント |
| `admin.acry-ya.com85/` | `/var/www/admin.acry-ya.com85` | rw, cached | 移行管理 |
| `admin.acry-ya.com/storage/app/public/img_storage` | `acry-ya.com/public/storage/images` | ro, cached | 商品画像の共有 |
| `admin.acry-ya.com85/storage/app/public/img_storage` | `acry-ya.com85/public/storage/images` | ro, cached | 85 商品画像の共有 |
| `acry-ya.com/data` | `admin.acry-ya.com` の `/var/www/acry-ya.com/data` | ro, cached | 出荷目安 CSV |
| `acry-ya.com85/data` | `admin85` の `/var/www/acry-ya.com85/data` | ro, cached | 85 出荷目安 CSV |
| `acry-ya-docker/db-data` | `/var/lib/mysql` | rw | MySQL データ |
| `php/apache/front.htaccess` | フロントの `public/.htaccess` | ro | ローカル安全版 |

### 8.1 画像の流れ

```
管理画面 (admin) でアップロード
  → admin/storage/app/public/img_storage/<dir>/<file>
  → admin/public/storage/images  (シンボリックリンク)
  → フロント表示は DISPLAY_IMAGE_PATH=storage/images/
  → front/public/storage/images/<dir>/<file>  (共有マウント)
```

- 管理画面の `public/storage/images` は既存のシンボリックリンク（`../../storage/app/public/img_storage`）を使う。
- フロントは `public/storage/images` に管理画面の `img_storage` を**読み取り専用**でマウントする。
- `php artisan storage:link` は実行しない。フロントの `public/storage` は実ディレクトリ（`reviewimages`）であり、シンボリックリンクを作ると衝突する。

### 8.2 レビュー画像

- フロント `public/storage/reviewimages/YYYYMM/*` に保存される。
- 85 環境で独立して検証する場合は、`acry-ya.com/public/storage/reviewimages` を `acry-ya.com85/public/storage/reviewimages` にコピーする。
- 58 と共有したい場合は、`front85` に `../acry-ya.com/public/storage/reviewimages:/var/www/acry-ya.com85/public/storage/reviewimages:cached` を追加する（ただし 85 の投稿画像が 58 側に混ざる）。

### 8.3 商品画像ストアの複製

85 環境を 58 から完全に分離する場合:

```bash
rsync -a --info=progress2 \
  admin.acry-ya.com/storage/app/public/img_storage/ \
  admin.acry-ya.com85/storage/app/public/img_storage/
```

760MB 程度。共有のまま検証を始め、画像の書き込みテストをする段階で複製するとよい。

### 8.4 ログの整理（重要）

フロント `storage/logs` は約 5.1GB。Docker の bind mount と `chown -R` が非常に遅くなる。

```bash
# 直近 7 日以外を削除（実行前に内容を確認）
find "acry-ya.com/storage/logs" -type f -name '*.log' -mtime +7 -print

# 問題なければ削除
find "acry-ya.com/storage/logs" -type f -name '*.log' -mtime +7 -delete
```

または、必要なログを `backups/` 等に退避してから `truncate -s 0` する。**削除は不可逆なので、事前に確認する。**

---

## 9. セットアップ手順

### 9.1 前提

- Docker Desktop for Mac（Docker 29.x / Compose v2 以降を確認済み）
- Docker Desktop の File Sharing に **`/Volumes/Untitled 1` が含まれていること**（プロジェクトが外付けボリューム上にあるため）
  - Settings → Resources → File Sharing で確認・追加
- ホストの 8002 / 8003 / 8000 / 8001 / 3306 / 1025 / 8025 が空いていること

### 9.2 85 フォルダの作成（Phase 0）

```bash
cd "/Volumes/Untitled 1/site/acry-ya2026"

# フロント（トップレベルの vendor, node_modules, 巨大ログを除外）
#   除外パターンは先頭に / を付けて「プロジェクト直下のみ」に限定する。
#   / を付けないと resources/views/vendor や public/mailvendor/vendor まで
#   除外されて、ページネーションビュー等が欠落する。
rsync -a \
  --exclude '/vendor' \
  --exclude '/node_modules' \
  --exclude '/storage/logs/*' \
  acry-ya.com/ acry-ya.com85/

# 管理（トップレベルの vendor, node_modules, 画像ストアを除外。画像は後で複製）
rsync -a \
  --exclude '/vendor' \
  --exclude '/node_modules' \
  --exclude '/storage/app/public/img_storage/*' \
  admin.acry-ya.com/ admin.acry-ya.com85/

# 5.8 時代のキャッシュ・コンパイル済みビューを持ち込まない
rm -f acry-ya.com85/bootstrap/cache/*.php admin.acry-ya.com85/bootstrap/cache/*.php
find acry-ya.com85/storage/framework/views -type f -delete 2>/dev/null || true
find admin.acry-ya.com85/storage/framework/views -type f -delete 2>/dev/null || true
```

- `.env` はコピーされる。`APP_KEY` は同じ値を使う（データ暗号化の互換性のため）。
- `acry-ya.com85/.env` の `APP_URL` は Compose で上書きされるため、編集不要。
- `admin.acry-ya.com85/.env` の `SITE_URL` / `FRONT_REVIEW_IMAGES_DIR` も Compose で上書きされる。

### 9.3 起動

```bash
cd acry-ya-docker
cp env.example .env
# 必要なら .env を編集（ポート、パスワード）

# 58 系イメージのビルド
docker compose build front58 admin58

# 85 系イメージのビルド（初回は PHP 8.5 のビルドで数分）
docker compose --profile v85 build front85 admin85

# MySQL / Mailpit 起動（初回はダンプ投入で 1〜2 分）
docker compose up -d mysql mailpit

# MySQL の healthcheck が healthy になるのを待つ
docker compose ps

# 58 系起動
docker compose up -d front58 admin58

# 85 系起動
docker compose --profile v85 up -d front85 admin85
```

### 9.4 Composer / 初期化

```bash
# 58 系（vendor が既にある場合は不要）
docker compose exec front58 composer install --no-interaction --prefer-dist
docker compose exec admin58 composer install --no-interaction --prefer-dist

# 85 系（vendor がないため必須）
#   Laravel 5.8 は Composer 2 の installed.json 形式に非対応のため
#   --no-scripts でインストールし、58 側の packages.php を複製する
docker compose exec front85 composer install --no-scripts --no-interaction --prefer-dist
docker compose exec admin85 composer install --no-scripts --no-interaction --prefer-dist
cp ../acry-ya.com/bootstrap/cache/packages.php ../acry-ya.com85/bootstrap/cache/packages.php
cp ../admin.acry-ya.com/bootstrap/cache/packages.php ../admin.acry-ya.com85/bootstrap/cache/packages.php

# 権限（entrypoint でも実行されるが、明示的に）
docker compose exec front58 chown -R www-data:www-data storage bootstrap/cache
docker compose exec admin58 chown -R www-data:www-data storage bootstrap/cache
docker compose exec front85 chown -R www-data:www-data storage bootstrap/cache
docker compose exec admin85 chown -R www-data:www-data storage bootstrap/cache
```

- `php artisan key:generate` は実行しない（既存の `APP_KEY` を維持）。
- `php artisan storage:link` は実行しない（§8.1）。
- `php artisan migrate` は実行しない（§7.3）。
- 既存の `db-data/` を使い続ける場合、`root` が `caching_sha2_password` のままだと
  PHP 7.x で `SQLSTATE[HY000] [2054]` になる。以下で変更する（新規ボリュームでは
  `00-users.sh` が最初から `mysql_native_password` で作成する）。

  ```sql
  ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root';
  ALTER USER 'acryya85'@'%' IDENTIFIED WITH mysql_native_password BY 'acryya85';
  FLUSH PRIVILEGES;
  ```

- `PHP85_VERSION` はフェーズに合わせて `acry-ya-docker/.env` で変更する（§12）。
  Phase 0〜1 は `7.2.34` / `composer:2.2`。Laravel 6.20 以降は Composer 2 に
  対応するため、Phase 1 完了後に `composer:2` へ切り替えてよい。

### 9.5 アクセス確認

| URL | 期待 |
|---|---|
| http://localhost:8002/ | フロントトップ（5.8） |
| http://localhost:8002/products/list/ | 商品一覧 |
| http://localhost:8002/products/detail/1/ | 商品詳細 |
| http://localhost:8003/ | 管理ログイン（5.8） |
| http://localhost:8000/ | フロントトップ（85） |
| http://localhost:8001/ | 管理ログイン（85） |
| http://localhost:8025/ | Mailpit UI |
| http://localhost:8080/ | phpMyAdmin（任意） |

管理画面のログインは、ダンプの `users` テーブルの既存ユーザーを使う。パスワードは本番のものを流用せず、必要ならテストユーザーを作成する。

---

## 10. 日常運用

### 10.1 よく使うコマンド

```bash
cd acry-ya-docker

# 状態
docker compose ps

# ログ
docker compose logs -f front58
docker compose logs -f admin85

# シェル
docker compose exec front58 bash
docker compose exec admin85 bash

# artisan
docker compose exec front58 php artisan route:list
docker compose exec admin85 php artisan cache:clear

# テスト
docker compose exec admin58 vendor/bin/phpunit
docker compose exec admin85 php artisan test

# 停止
docker compose down

# 85 も含めて停止
docker compose --profile v85 down
```

### 10.2 DB リセット（破壊的）

```bash
cd acry-ya-docker
docker compose down
rm -rf db-data
docker compose up -d mysql
# 初期化スクリプトが再実行され、ダンプが再投入される
```

> `db-data` を削除するとローカルの変更はすべて失われる。実行前にバックアップする。

### 10.3 DB バックアップ

```bash
docker compose exec -T mysql \
  mysqldump -uroot -p"$MYSQL_ROOT_PASSWORD" --single-transaction acryya_system \
  > ../backups/acryya_system_$(date +%Y%m%d_%H%M%S).sql
```

### 10.4 ログローテーション

`config/logging.php` は `daily` だが、フロントは 5.1GB まで蓄積している。以下を運用に加える。

- `LOG_DAILY_DAYS=14` を設定（Laravel 10+ の `daily` チャンネルは `days` に対応）
- 定期的に `storage/logs` を確認
- Docker 側は `storage/logs` を bind mount しているため、コンテナ再作成でもログは残る

### 10.5 スケジューラ（任意）

現状 `schedule()` は空だが、将来 `sitemap` などを定期実行する場合:

```yaml
  scheduler:
    <<: *php-base
    profiles: ["tools"]
    image: acry-ya-php:7.2
    working_dir: /var/www/acry-ya.com
    volumes:
      - ../acry-ya.com:/var/www/acry-ya.com:cached
    command: sh -lc "while true; do php artisan schedule:run >> /dev/null 2>&1; sleep 60; done"
```

### 10.6 Xdebug（任意）

必要な場合のみ、Dockerfile に `INSTALL_XDEBUG` 分岐を追加する。

- PHP 8.5: `pecl install xdebug` → `docker-php-ext-enable xdebug`
- PHP 7.2: `pecl install xdebug-2.9.8` → `docker-php-ext-enable xdebug`
- ポート: Xdebug 3 は 9003、Xdebug 2 は 9000
- `XDEBUG_MODE=debug,develop`, `XDEBUG_CONFIG=client_host=host.docker.internal`

> 常時有効にすると遅くなるため、プロファイル `xdebug` で分離するのが望ましい。

---

## 11. 動作確認チェックリスト

### 11.1 フロント（58 / 85 共通）

- [ ] トップページが表示される
- [ ] 商品一覧（カテゴリ指定 / 検索）が表示される
- [ ] 商品詳細が表示される（画像・価格・在庫・出荷目安）
- [ ] 商品画像が `public/storage/images/...` 経由で表示される
- [ ] 補修部品一覧・詳細が表示される
- [ ] お客様の声・FAQ・レビュー一覧が表示される
- [ ] レビュー投稿（画像あり / なし）が成功し、Mailpit にメールが届く
- [ ] レビュー画像が `public/storage/reviewimages/` に保存される
- [ ] 404 / 500 のエラーページが Laravel のビューで表示される
- [ ] `DELIVERIES_PATH` の CSV が読める（出荷目安が表示される）
- [ ] `/products/` 配下の URL がフロントコントローラに到達する
- [ ] 末尾スラッシュ付き URL が正しく生成される（独自 UrlGenerator）

### 11.2 管理画面（58 / 85 共通）

- [ ] ログインできる
- [ ] 商品一覧・商品登録・商品編集・削除ができる
- [ ] セミオーダー商品の登録・編集ができる
- [ ] カテゴリ / カラー / サイズ / 板厚 / 素材 / 消費税 / 告知 / HTML パーツの CRUD
- [ ] 商品画像アップロード（`getClientSize()` → `getSize()` の確認）
- [ ] カラー別 / サイズ別 / オプション画像設定
- [ ] 割引率 / 補修部品 / レビュー管理
- [ ] `Form::` の各要素（text/select/label/radio/checkbox/textarea/hidden/submit/open/close）が表示・送信できる
- [ ] API（`/api/images/search`, `/api/images/upload`, `/api/user`）がトークン認証で動作する

### 11.3 環境

- [ ] `docker compose ps` で MySQL が healthy
- [ ] `acryya_system` と `acryya_system85` の両方が存在する
- [ ] `root` / `root` で `acryya_system` / `acryya_system85` に接続できる
- [ ] Mailpit にメールが届く
- [ ] `storage/logs/laravel.log` に致命的エラーがない
- [ ] PHP 8.5 側で deprecation が大量に出ていない（出た場合はアップグレード計画で修正）

### 11.4 58版起動時に適用したローカル修正

58版の起動確認で、本番環境との差分に起因する以下の問題が見つかったため、最小限の修正を入れた。

| ファイル | 修正内容 | 理由 |
|---|---|---|
| `acry-ya.com/resources/views/index.blade.php` | `$_SERVER['HTTP_X_FORWARDED_PROTO']` に `?? 'http'` のフォールバックを追加 | ローカルにはプロキシがなく、ヘッダが未設定で `Undefined index` → 500 |
| 同上 | `/blog/feed` の取得失敗時に既存の `_blog_rss.json` キャッシュを使うよう修正 | ローカルに WordPress がなく、RSS 取得が 404 になるため |
| `acry-ya.com/resources/views/common/sidemenu.blade.php` | `$categories` / `$blog_categories` の `@foreach` に `empty()` ガードを追加 | 404 エラー画面など、カテゴリが未設定の状況で `foreach` 警告が出るため |
| `acry-ya.com/resources/views/layouts/simple.blade.php` | 新規追加（最小レイアウト） | `errors/403.blade.php` / `errors/500.blade.php` が継承しているが、ファイルが存在しなかったため |

> これらは本番の挙動を変えない互換性・堅牢性の修正。Phase 0 で `acry-ya.com85` を作成する際にそのまま引き継ぐ。

---

## 12. アップグレードフェーズとの連携

Laravel の各フェーズで必要な PHP バージョンは以下。`acry-ya-docker/.env` の `PHP85_VERSION`（と `PHP85_COMPOSER_IMAGE`）を変えてイメージをビルドし直す。

| フェーズ | Laravel | 推奨 PHP | Docker イメージ例 |
|---|---|---|---|
| 0 | 5.8 | 7.2 | `7.2.34-apache` |
| 1 | 6.x | 7.2 / 7.4 | `7.2.34-apache` または `7.4.33-apache` |
| 2 | 7.x | 7.4 | `7.4.33-apache` |
| 3 | 8.x | 7.4 / 8.0 | `7.4.33-apache` または `8.0.30-apache` |
| 4 | 9.x | 8.0 / 8.1 | `8.1.31-apache` |
| 5 | 10.x | 8.1 / 8.2 | `8.2.29-apache` |
| 6 | 11.x | 8.2 / 8.3 | `8.3.26-apache` |
| 7 | 12.x | 8.2 / 8.3 | `8.3.26-apache` |
| 8 | 13.x | 8.3 / 8.5 | `8.5.0-apache` |
| 9 | 13.x | 8.5 | `8.5.0-apache` |

- 中間フェーズ用のコンテナは、`.env` の `PHP85_VERSION` を変えて
  `docker compose --profile v85 build --no-cache front85 admin85` で再ビルドする。
- フェーズごとに `docker compose build --no-cache front85` で拡張を再ビルドする。
- PHP 7.4 / 8.0 / 8.1 / 8.2 / 8.3 のイメージも Debian の EOL に注意。必要に応じて archive 対応を追加する。

---

## 13. リスクと対策

| リスク | 影響 | 対策 |
|---|---|---|
| `/Volumes/Untitled 1` が Docker Desktop の File Sharing にない | bind mount が空/失敗 | Docker Desktop の設定を確認。必要なら `/Users` 配下に移動 |
| ホスト 8000 / 8001 が他プロジェクトで使用中 | 起動失敗 | `techno2` / `src-pgadmin-1` を停止するか、`.env` で別ポートに変更 |
| PHP 7.2 イメージの Debian buster が EOL | `apt-get update` 失敗 | archive.debian.org への sed 置換を Dockerfile に含める |
| MySQL 8.4 の `mysql_native_password` 無効 | PHP 7.2 が接続できない | `--mysql-native-password=ON` + `ALTER USER` |
| `taxes.tax_change_date` のゼロ日付 | 書き込み時に strict mode エラー | インポート後に有効日付へ UPDATE |
| フロント `storage/logs` 5.1GB | マウント/権限調整が極端に遅い | 事前にログ削除・退避 |
| macOS の bind mount が遅い | 画面表示が遅い | `:cached`。必要なら Mutagen / `/Users` へ移動 |
| 本番 `.htaccess` の HTTPS/Basic 認証 | ローカルでリダイレクトループ/認証要求 | `front.htaccess` で上書き |
| `public/storage` のシンボリックリンク衝突 | `storage:link` が失敗 | `storage:link` を実行しない。共有マウントを使う |
| ダンプと migration ファイルの不整合 | `migrate` が失敗 | インポート DB では migrate しない。テストは空 DB |
| `.env` に本番認証情報 | 情報漏洩 | ローカル専用値に変更。Git 管理しない |
| 85 側の書き込みが 58 側に影響 | 比較検証が壊れる | DB・画像ストアを分離 |
| カート/ブログが動かない | リンク切れ | 対象外と明記。必要なら別途プロキシ |
| PHP 8.5 の deprecation 多発 | ログ肥大化/動作不良 | `E_ALL` で検出し、アップグレード計画で修正 |
| Xdebug 常時有効 | 著しく遅い | プロファイル分離 |

---

## 14. 未決事項（要確認）

1. **admin85 のポート**: `ローカルインフラ構成.md` の通り **8001**。ただし現在の開発マシンでは 8000 / 8001 を `techno2` / `src-pgadmin-1` が使用中のため、85版の起動前に停止するか、`.env` で別ポート（例: 8010 / 8011）に変更する必要がある。
2. **DB の共有方針**: ドキュメントは「各環境とも同じ DB」だが、本計画は 58/85 で DB を分ける。分離で進めてよいか。
3. **85 フォルダの作成タイミング**: Phase 0 で `rsync` コピーする想定。既に別途作成済みか。
4. **Apache + mod_php でよいか**: `.htaccess` 再現性を優先。Nginx + PHP-FPM にしたい場合は `.htaccess` の移植が必要。
5. **phpMyAdmin / Xdebug / Node を含めるか**: 本計画では任意プロファイル。
6. **5.1GB のログを削除してよいか**: 退避が必要なら先にバックアップ。
7. **管理画面の新規登録を無効化してよいか**: ダンプに不審なユーザー（2026-09 作成の使い捨てメール）が存在。`Auth::routes(['register' => false])` を推奨。
8. **`laravelcollective/html` の扱い**: 11 以降は `konekt/html`（ドロップイン）を推奨。テンプレート書き換えはしない。
9. **旧アプリ構造を維持するか**: Laravel 11+ でも `app/Http/Kernel.php` / `config/*` を維持する方針を推奨。新スケルトンへの移行は別フェーズ。
10. **フロント先行か、同時進行か**: フロントをパイロットにして、管理画面へ横展開する方針を推奨。

---

## 15. 参考

- Laravel 13 アップグレードガイド: https://laravel.com/docs/13.x/upgrade
- Laravel 11 アップグレードガイド（アプリ構造）: https://laravel.com/docs/11.x/upgrade
- PHP 公式 Docker イメージ: https://hub.docker.com/_/php
- MySQL 8.4 リファレンス（認証プラグイン）: https://dev.mysql.com/doc/refman/8.4/en/caching-sha2-pluggable-authentication.html
- Mailpit: https://mailpit.axllent.org/
- Docker Compose: https://docs.docker.com/compose/
