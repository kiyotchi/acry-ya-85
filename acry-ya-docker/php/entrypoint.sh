#!/bin/sh
set -eu

APP_ROOT="${APP_ROOT:-/var/www/html}"

# 書き込みが必要なディレクトリだけ権限を調整する
# storage/logs が巨大な場合は事前に整理しておくこと
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
