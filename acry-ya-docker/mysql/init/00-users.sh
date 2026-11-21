#!/bin/bash
set -e

# ---------------------------------------------------------------------------
# 初回起動時のみ実行される
#   1. 5.8 用ユーザーを mysql_native_password に変更
#      （PHP 7.2 は caching_sha2_password を安定して扱えないため）
#   2. 85 用ユーザーと acryya_system85 を作成
#      Phase 0〜3 は PHP 7.x で動かすため、85 ユーザーも
#      mysql_native_password にする（PHP 8.x からも接続可能）
# ---------------------------------------------------------------------------
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
