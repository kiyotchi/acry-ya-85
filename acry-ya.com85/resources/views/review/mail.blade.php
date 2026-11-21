DATE = <?= date("Y年m月d日(D) H時i分s秒") ."\n" ?>
INPUTKEY = <?= $attr['inputkey'] ."\n" ?>
IP = <?= $attr['ip'] ."\n" ?>
HOST = <?= $attr['host'] ."\n" ?>
AGENT = <?= $attr['user_agent'] ."\r\n" ?>
----------------------------------------------------
ご購入商品 = <?= $attr['keyword1'] ."\n" ?>
ニックネーム = <?= $attr['name'] ."\n" ?>
タイトル = <?= $attr['title'] ."\n" ?>
商品評価 = <?= $attr['star'] ."\n" ?>
商品画像 = @if(!empty($attr['file']))<?= 'あり'?> @else<?= 'なし'?> @endif <?= "\n" ?>
SNS = <?= $attr['sns'] ."\n" ?>
ご感想 = <?= "\n" ?>
<?= $attr['content'] ."\n" ?>
----------------------------------------------------