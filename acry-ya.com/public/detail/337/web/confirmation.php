<?php
$exclude_fields = [
	'材料の色-acrylic',
	'材料の色-polyca',
	'材料の色-other',
	'材料の厚み-acrylic',
	'材料の厚み-polyca',
	'材料の厚み-other',
	'端面仕上-acrylic',
	'端面仕上-polyca',
	'端面仕上-other',
];

if ($_POST["お客様情報の保存"]["value"] == 1) {
    setcookie("customer_type", $_POST["種別"]["value"], 0, "/");
    setcookie("name", $_POST["お名前"]["value"], 0, "/");
    setcookie("name_kana", $_POST["お名前（ふりがな）"]["value"], 0, "/");
    setcookie("corporate_name", $_POST["法人名"]["value"], 0, "/");
    setcookie("corporate_name_kana", $_POST["法人名（ふりがな）"]["value"], 0, "/");
    setcookie("corporate_department", $_POST["法人部署名"]["value"], 0, "/");
    setcookie("mail_address", $_POST["メールアドレス"]["value"], 0, "/");
    setcookie("mail_address_check", $_POST["メールアドレス(確認用)"]["value"], 0, "/");
    setcookie("postal_code", $_POST["郵便番号"]["value"], 0, "/");
    setcookie("prefectures", $_POST["都道府県"]["value"], 0, "/");
    setcookie("address", $_POST["住所"]["value"], 0, "/");
    setcookie("phone_number", $_POST["電話番号"]["value"], 0, "/");
    setcookie("fax", $_POST["FAX"]["value"], 0, "/");
    setcookie("phone_contact_from_our", $_POST["弊社からの電話連絡"]["value"], 0, "/");
    setcookie("customer_type", $_POST["納品先"]["value"], 0, "/");
    setcookie("information_save", $_POST["お客様情報の保存"]["value"], 0, "/");
} else {
    setcookie("customer_type", "", 0, "/");
    setcookie("name", "", 0, "/");
    setcookie("name_kana", "", 0, "/");
    setcookie("corporate_name", "", 0, "/");
    setcookie("corporate_name_kana", "", 0, "/");
    setcookie("corporate_department", "", 0, "/");
    setcookie("mail_address", "", 0, "/");
    setcookie("mail_address_check", "", 0, "/");
    setcookie("postal_code", "", 0, "/");
    setcookie("prefectures", "", 0, "/");
    setcookie("address", "", 0, "/");
    setcookie("phone_number", "", 0, "/");
    setcookie("fax", "", 0, "/");
    setcookie("phone_contact_from_our", "", 0, "/");
    setcookie("customer_type", "", 0, "/");
    setcookie("information_save", "", 0, "/");
}
?>

<?php
require_once(__DIR__ . '/config/config.php');
$app = new web\Confirmation();
$app->run($adminMail, $ext_denied, $EXT_ALLOWS, $maxmemory, $max, $_SERVER["CONTENT_LENGTH"]);
?>
<?php include $_SERVER['DOCUMENT_ROOT'] . 'static.php'; ?>
<!DOCTYPE html>
<html lang="ja" prefix="og: http://ogp.me/ns#">
<head>
    <?php echo $head_start; ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta meta http-equiv="Expires" content="604800">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <title>入力内容の確認｜アクリ屋ドットコム</title>
    <meta property="og:title" content="入力内容の確認｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/products/detail/337/web/">
    <meta property="og:image" content="/assets/images/ogp.jpg">
    <meta property="og:site_name" content="アクリ屋ドットコム">
    <meta property="og:description" content="アクリル板材料の加工とアクリル製品のことなら「アクリ屋ドットコム」。アクリル製品のセミオーダー加工や特注品のご注文も承っております。１万円以上は送料無料。">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="アクリ屋ドットコム">
    <meta name="twitter:description" content="アクリル板材料の加工とアクリル製品のことなら「アクリ屋ドットコム」。アクリル製品のセミオーダー加工や特注品のご注文も承っております。１万円以上は送料無料。">
    <meta name="twitter:image" content="/assets/images/ogp.jpg">
    <meta itemprop="image" content="/assets/images/ogp.jpg">
    <!--meta(property='fb:app_id', content='')-->
    <link rel="shortcut icon" href="/assets/images/favicon.ico">
    <link rel="apple-touch-icon" href="/assets/images/favicon.png">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
    <link rel="stylesheet" href="/assets/stylesheets/base.css">
    <link rel="stylesheet" href="/assets/stylesheets/layout.css">
    <link rel="stylesheet" href="/assets/stylesheets/style.css">
    <link rel="stylesheet" href="/assets/stylesheets/projects/full-order-web.css">
    <link rel="stylesheet" href="/assets/stylesheets/acry-ya.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
    <script src="/assets/javascripts/common.js"></script>
    <script src="/assets/javascripts/function.js" defer></script>
    <script src="/assets/javascripts/plugins/cookie.js" defer></script>
    <script src="/assets/javascripts/plugins/slick-1.6.0.min.js"></script>
    <script src="/assets/javascripts/plugins/slick-1.6.0.setting.js"></script>
</head>
<body id="p-support">
<div id="wrapper" class="l-column js-menu">
    <?php echo $header; ?>
    <?php echo $sidemenu; ?>
    <div class="column__right">
        <div class="l-loading js-loading"><img src="/assets/images/loading.png" class="loading__image is-animated fx-infinite"></div>
        <div class="l-banner"><img src="/assets/images/banner/bn_souryomuryo_sp.jpg"></div>
        <main class="l-main">
            <div class="main__sub--white">
                <nav class="c-pankuzu--scroll">
                    <ul class="pankuzu__list">
                        <li><a href="/products/list/">商品一覧</a></li>
                        <li><a href="/products/list/2/">アクリル板加工DIY</a></li>
                        <li><a href="/detail/337/">アクリル板レーザー加工（カット・彫刻）サービス</a></li>
                        <li><a href="/detail/337/web/">レーザー加工でのお見積り依頼</a></li>
                        <li>入力内容の確認</li>
                    </ul>
                </nav>
                <h1 class="main__title c-heading--xl">入力内容の確認</h1>

                <?php if (!empty($app->seriousError)) : ?>
                    <section class="c-section">
                        <div class="c-flame--sm-danger">
                            <p>
                                <?php echo $app->seriousError; ?>
                            </p>
                        </div>
                    </section>
                <?php else : ?>
                    <?php if (empty($app->err)) : ?>
                        <p class="c-heading--sm-left">下記内容で送信してよろしいですか？</p>
                    <?php else : ?>
                        <section class="c-section">
                            <div class="c-flame--sm-danger">
                                <p>
                                    入力に誤りがあります。エラーの内容をご確認いただき、<br>
                                    戻るボタンから修正をお願いいたします。
                                </p>
                            </div>
                        </section>
                    <?php endif; ?>
                <?php endif; ?>

                <form class="l-form--contact c-form" action="./send.php" method="post" enctype="multipart/form-data">
                    <table class="c-table--border">
                        <thead>
                        <th colspan="2" class="c-heading--sm-left">お客様情報</th>
                        </thead>
                        <tbody>
                        <?php $i = 0; ?>
                        <?php foreach ($_SESSION["submitContent"] as $key => $value) : ?>
                            <?php if ( in_array($key, $exclude_fields ) ) {
                                continue;
                            } ?>
                            <tr>
                                <?php if ($i > 11) {
                                    break;
                                } ?>
                                <th class="c-text--md-left is-required"><?php echo h($key); ?></th>
                                <td class="c-text--md-left">
                                    <?php if (empty($app->err[$key])) {
                                        if (strpos($value, "\n") !== false) {
                                            echo nl2br(h($value));
                                            $i++;
                                        } else {
                                            echo empty($value) && (string)$value !== "0" ? "&nbsp;\n" : h($value);
                                            $i++;
                                        }
                                    } else {
                                        echo "<span class=\"err\">{$app->err[$key]}</span>";
                                        $i++;
                                    }
                                    ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        </tbody>
                    </table>
                    <table class="c-table--border">
                        <thead>
                        <th colspan="2" class="c-heading--sm-left">納品先</th>
                        </thead>
                        <tbody>
                        <?php $i2 = 0; ?>
                        <?php foreach ($_SESSION["submitContent"] as $key => $value) : ?>
                            <?php if ( in_array($key, $exclude_fields ) ) {
                                continue;
                            } ?>
                            <tr>
                                <?php if ($i2 <= 11 || $i2 >= 18) {
                                    $i2++;
                                    continue;
                                } ?>
                                <th class="c-text--md-left is-required"><?php
                                    if(h($key) == "郵便番号_納品先"){
                                        echo "郵便番号";
                                    }elseif(h($key) == "都道府県_納品先"){
                                        echo "都道府県";
                                    }elseif(h($key) == "住所_納品先"){
                                        echo "住所";
                                    }elseif(h($key) == "電話番号_納品先"){
                                        echo "電話番号";
                                    }else{
                                        echo h($key);
                                    }
                                     ?></th>
                                <td class="c-text--md-left">
                                    <?php if (empty($app->err[$key])) {
                                        if (strpos($value, "\n") !== false) {
                                            echo nl2br(h($value));
                                            $i2++;
                                        } else {
                                            echo empty($value) && (string)$value !== "0" ? "&nbsp;\n" : h($value);
                                            $i2++;
                                        }
                                    } else {
                                        echo "<span class=\"err\">{$app->err[$key]}</span>";
                                        $i2++;
                                    }
                                    ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        </tbody>
                    </table>
                    <table class="c-table--border">
                        <thead>
                        <th colspan="2" class="c-heading--sm-left">制作内容</th>
                        </thead>
                        <tbody>
                        <?php $i3 = 0; ?>
                        <?php foreach ($_SESSION["submitContent"] as $key => $value) : ?>
                            <?php if ( in_array($key, $exclude_fields ) ) {
                                continue;
                            } ?>
                            <tr>
                                <?php if ($i3 <= 17 || $i3 >= 27) {
                                    $i3++;
                                    continue;
                                } ?>
                                <?php if(h($key) == "全体サイズ_横（W）"): ?>
                                <th rowspan="3" class="c-text--md-left is-required">
                                <?php elseif(h($key) == "全体サイズ_奥行き（D）" || h($key) == "全体サイズ_高さ（H）"): ?>
                                <?php else: ?>
                                <th class="c-text--md-left is-required">
                                <?php endif; ?>
                                    <?php
                                    if(h($key) == "製作内容の詳細"){
                                        echo "製作内容の詳細" ?></br><?php ;
                                    }elseif (h($key) == "全体サイズ_横（W）"){
                                        echo "全体サイズ";
                                    }elseif (h($key) == "全体サイズ_奥行き（D）" || h($key) == "全体サイズ_高さ（H）"){

                                    }else {
                                        echo h($key);
                                    }?>
                                <?php if(h($key) == "全体サイズ_奥行き（D）" || h($key) == "全体サイズ_高さ（H）"): ?>
                                </th>
                                <?php endif; ?>
                                <td class="c-text--md-left">
                                    <?php if (empty($app->err[$key])) {
                                        if (strpos($value, "\n") !== false) {
                                            echo nl2br(h($value));
                                            $i3++;
                                        } elseif (h($key) == "全体サイズ_横（W）" || h($key) == "全体サイズ_奥行き（D）" || h($key) == "全体サイズ_高さ（H）"){
                                            echo empty($value) && (string)$value !== "0" ? "&nbsp;\n" : h($value . " mm");
                                            $i3++;
                                        } else {
                                            echo empty($value) && (string)$value !== "0" ? "&nbsp;\n" : h($value);
                                            $i3++;
                                        }
                                    } else {
                                        echo "<span class=\"err\">{$app->err[$key]}</span>";
                                        $i3++;
                                    }
                                    ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        <?php $i4 = 0; ?>
                        <?php foreach ($_SESSION["submitContent"] as $key => $value) : ?>
                            <?php if ( in_array($key, $exclude_fields ) ) {
                                continue;
                            } ?>
                            <tr>
                                <?php if ($i4 <= 34 || $i4 >= 35) {
                                    $i4++;
                                    continue;
                                } ?>
                                <th class="c-text--md-left is-required"><?php echo h($key); ?></th>
                                <td class="c-text--md-left">
                                    <?php if (empty($app->err[$key])) {
                                        if (strpos($value, "\n") !== false) {
                                            echo nl2br(h($value));
                                            $i4++;
                                        } else {
                                            echo empty($value) && (string)$value !== "0" ? "&nbsp;\n" : h($value);
                                            $i4++;
                                        }
                                    } else {
                                        echo "<span class=\"err\">{$app->err[$key]}</span>";
                                        $i4++;
                                    }
                                    ?>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        <?php $i5 = 0; ?>
                        <?php foreach ($_SESSION["submitContent"] as $key => $value) : ?>
                            <tr>
                                <?php if ($i5 < 27 || $i5 > 30) {
                                    $i5++;
                                    continue;
                                } ?>

                                <?php if(h($key) == "入稿データ1"): ?>
                                <th rowspan="3" class="c-text--md-left is-required">
                                <?php  echo "入稿データ"; ?>
                                </th>
                                <?php endif; ?>

                                <?php if(h($key) == "データの添付数"): ?>
                                <th class="c-text--md-left is-required">
                                <?php  echo "データの添付数"; ?>
                                </th>
                                <?php endif; ?>

                                <td class="c-text--md-left">
                                    <?php if (empty($app->err[$key])) {
                                        if (strpos($value, "\n") !== false) {
                                            echo nl2br(h($value));
                                            $i5++;
                                        } else {
                                            echo empty($value) && (string)$value !== "0" ? "&nbsp;\n" : h($value);
                                            $i5++;
                                        }
                                    } else {
                                        echo "<span class=\"err\">{$app->err[$key]}</span>";
                                        $i5++;
                                    }
                                    ?>
                                </td>
                            </tr>

                        <?php endforeach; ?>
                        </tbody>
                    </table>
                    <?php if (!empty($_SESSION["submitContent"]) && empty($app->seriousError) && empty($app->err)) : ?>
                    <div class="form__action">
                        <input type="hidden" name="requiredItem[name]"
                               value="<?php echo h($app->requiredItem["name"]); ?>">
                        <input type="hidden" name="requiredItem[mailaddress]"
                               value="<?php echo h($app->requiredItem["mailaddress"]); ?>">
                        <input type="hidden" name="token" value="<?php echo h($_SESSION['token']); ?>">
                        <p class="action__text">上記内容で、お間違いがなければ「送信する」を押してください。</p>
                        <button type="button" class="c-button--xl-gray js-disabledSwitch__content"
                                onclick="history.back()" ;>入力内容を修正する
                        </button>
                        <button type="send" class="c-button--xl-primary js-disabledSwitch__content">送信する</button>
                    </div>
                </form>
            <?php else : ?>
                <div class="form__action">
                    <button type="button" class="c-button--xl-gray js-disabledSwitch__content"
                            onclick="history.back()" ;>入力内容を修正する
                    </button>
                </div>
                </form>
            <?php endif; ?>
            </div>
        </main>
        <?php echo $footer; ?>
    </div>
</div>
<?php echo $body_end; ?>
</body>
</html>
