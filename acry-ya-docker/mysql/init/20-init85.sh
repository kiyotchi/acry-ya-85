#!/bin/bash
set -e

# ---------------------------------------------------------------------------
# acryya_system85 に dump2026.sql を投入する
#   10-dump.sql は MySQL の entrypoint が acryya_system に自動投入するため、
#   ここでは 85 用 DB に同じ内容を投入する。
# ---------------------------------------------------------------------------
mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" acryya_system85 \
    < /docker-entrypoint-initdb.d/10-dump.sql

# 0000-00-00 は MySQL 8.4 の strict mode で書き込み時にエラーになるため補正
mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" acryya_system85 <<'SQL'
UPDATE taxes
   SET tax_change_date = '2019-04-16 00:00:00'
 WHERE tax_change_date = '0000-00-00 00:00:00';
SQL
