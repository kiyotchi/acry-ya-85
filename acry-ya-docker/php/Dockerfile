# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# ビルド引数
#   PHP_VERSION: 7.2.34 / 8.5.0 など
#   COMPOSER_IMAGE: PHP 7.2 は composer:2.2、PHP 8.x は composer:2
# ---------------------------------------------------------------------------
ARG PHP_VERSION=8.5.0
ARG COMPOSER_IMAGE=composer:2

FROM ${COMPOSER_IMAGE} AS composer

FROM php:${PHP_VERSION}-apache

ARG PHP_VERSION

ENV TZ=Asia/Tokyo \
    APACHE_DOCUMENT_ROOT=/var/www/html/public

# ---------------------------------------------------------------------------
# OS パッケージ
#   PHP 7.2 (Debian buster) は EOL のため apt リポジトリを archive に切り替える
# ---------------------------------------------------------------------------
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

# ---------------------------------------------------------------------------
# PHP 拡張
#   pdo_mysql : DB
#   mbstring  : SJIS → UTF-8 変換（zaiko6.csv）
#   gd        : レビュー画像のリサイズ
#   intl      : 将来利用
#   exif      : 画像メタデータ
#   bcmath    : 計算
#   opcache   : 高速化
# ---------------------------------------------------------------------------
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
    EXTS="pdo_mysql mbstring gd intl exif bcmath"; \
    # PHP 8.5 以降は opcache が本体に組み込み済みのため install 不要
    if [ "${PHP_VERSION%%.*}" = "7" ] || { [ "${PHP_VERSION%%.*}" = "8" ] && [ "$(echo "$PHP_VERSION" | cut -d. -f2)" -lt 5 ]; }; then \
        EXTS="$EXTS opcache"; \
    fi; \
    docker-php-ext-install -j"$(nproc)" $EXTS

# ---------------------------------------------------------------------------
# Composer
# ---------------------------------------------------------------------------
COPY --from=composer /usr/bin/composer /usr/local/bin/composer

# ---------------------------------------------------------------------------
# Apache
# ---------------------------------------------------------------------------
RUN a2enmod rewrite headers expires

COPY apache/000-default.conf /etc/apache2/sites-available/000-default.conf
COPY php.ini /usr/local/etc/php/conf.d/99-acryya.ini
COPY entrypoint.sh /usr/local/bin/app-entrypoint
RUN chmod +x /usr/local/bin/app-entrypoint

ENTRYPOINT ["app-entrypoint"]
CMD ["apache2-foreground"]
