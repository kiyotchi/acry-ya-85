<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.sourceforge.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.sourceforge.jp/Codex:%E8%AB%87%E8%A9%B1%E5%AE%A4 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define('DB_NAME', 'acryya_wp');

/** MySQL データベースのユーザー名 */
define('DB_USER', 'acryya_prod');

/** MySQL データベースのパスワード */
define('DB_PASSWORD', 'vJ94VxU8Jmkj');

/** MySQL のホスト名 */
define('DB_HOST', 'acry-ya-db.cdx5i26u0ch3.ap-northeast-1.rds.amazonaws.com');

/** データベースのテーブルを作成する際のデータベースの文字セット */
define('DB_CHARSET', 'utf8');

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/** 無限リダイレクトループの解消 */
define('FORCE_SSL_ADMIN', true);
if ( ! empty( $_SERVER['HTTP_X_FORWARDED_PROTO'] ) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https' ) {
       $_SERVER['HTTPS']='on';
}

define('FS_METHOD','direct');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '23mW5}YKS,SStyGrjFhV*KE2}u#QsVV0h)vXACId[>XZB.l8HyXfN7RYb}o$5$RI');
define('SECURE_AUTH_KEY',  'V5:2Lz/TS|i99rSD_e2eu,PjLC]p%cxmdgjW.eP{=6O6rXA*|N]24n~ms#muQV=}');
define('LOGGED_IN_KEY',    'uCqOl&kpD ~bW^#<:9M8Bl_?13>I|{)*(A[>*<|7w%F[gZk@=[*iuwO[Tg{uWmO ');
define('NONCE_KEY',        'SscH%m1^uHv)Y+])v;aiJK]ZGFl+.)T1H_+baOs(D3Xn@`~i/hU8O0)aTWtO-<<F');
define('AUTH_SALT',        '$O|XyAe@MIA&e]j*KD~AYBdy%lD@@)Ob$=qf/9mMd;.ZKRqy`,gZu:Fm)ilRM~hF');
define('SECURE_AUTH_SALT', 'nb8<ZFV]&=T4b`fm]}|:vNCqsj?F1U+^rGUnfjZ5C8DO8f$)/%4@F83-j2Qe9s2V');
define('LOGGED_IN_SALT',   '$DA`D3CoD8tm&axE*n(0a4si.pAk7I7]EO0+2SG[rJ^3-9.st3kA>C+N^_!>NyEy');
define('NONCE_SALT',       '#gm7drHT=>>8k~OIv_hXjcnMi/Fx+j^!q}Pjrjm-&^!UY>kq,L#@*nqEA^`f6[Xw');

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix  = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
//define('WP_DEBUG', true);
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でブログをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
