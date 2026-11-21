<?php
if ($_POST["お客様情報の保存"]["value"] == 1) {
    setcookie("orderNum", $_POST["ご注文番号（半角）"]["value"], 0, "/");
    setcookie("name", $_POST["お名前"]["value"], 0, "/");
    setcookie("CorporateName", $_POST["法人名"]["value"], 0, "/");
    setcookie("mail_address", $_POST["メールアドレス"]["value"], 0, "/");
    setcookie("mail_address_check", $_POST["メールアドレス(確認用)"]["value"], 0, "/");
} else {
    setcookie("orderNum", "", 0, "/");
    setcookie("name", "", 0, "/");
    setcookie("CorporateName", "", 0, "/");
    setcookie("mail_address", "", 0, "/");
    setcookie("mail_address_check", "", 0, "/");
}
?>

<?php
require_once(__DIR__ . '/config/config.php');
$app = new recycle\Confirmation();
$app->run($adminMail, $ext_denied, $EXT_ALLOWS, $maxmemory, $max, $_SERVER["CONTENT_LENGTH"]);
?>
<?php include $_SERVER['DOCUMENT_ROOT'] . 'static.php'; ?><!DOCTYPE html>
<html lang="ja" prefix="og: http://ogp.me/ns#">
<head>
    <?php echo $head_start; ?>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta meta http-equiv="Expires" content="604800">
    <meta name="format-detection" content="telephone=no">
    <meta name="description" content="">
    <meta name="keywords" content="アクリル板,アクリルケース,アクリル加工,販売,通販,価格,当日出荷,当日発送,ポスターフレーム,フォトフレーム,樹脂,アクリ屋">
    <title>入力内容の確認｜アクリ屋</title>
    <meta property="og:title" content="入力内容の確認｜アクリ屋ドットコム">
    <meta property="og:type" content="website">
    <meta property="og:url" content="/naire_order/typeface/order/">
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
    <link rel="stylesheet" href="/assets/stylesheets/projects/recycle.css">
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
<body id="p-naireOrder">
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
                        <li><a href="/">HOME</a></li>
                        <li>リサイクル回収について</li>
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
                        <th colspan="2" class="c-heading--sm-left">リサイクル回収お申込み</th>
                        </thead>
                        <tbody>
                        <?php $i = 0; ?>
                        <?php foreach ($_SESSION["submitContent"] as $key => $value) : ?>
                            <tr>
                                <?php if ($i > 12) {
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
