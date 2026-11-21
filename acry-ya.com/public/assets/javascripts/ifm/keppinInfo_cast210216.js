msgCnt = 5;
let nouki=new Array(msgCnt);
nouki[0]='<div class="c-flame--sm-primary">';
nouki[1]='<p class="c-heading--md">クリアー 8mm厚をご注文頂くお客様へのお知らせ　<span class="c-heading--xs">2021/2/16 現在</span></p>';
nouki[2]='<p class="c-text--md">一辺が2000mmを超えるサイズをご注文頂く場合、材料欠品中の為、3月中旬以降のお届けとなります。</p>';
nouki[3]='<p class="c-text--md">お客様には大変ご迷惑をお掛け致しますが、何卒宜しくお願い致します。</p>';
nouki[4]='</div>';

nouki_Msg = '';
for(i=0;i<msgCnt;i++){
	nouki_Msg = nouki_Msg + nouki[i];
}

$(document).ready(
	function(){
		$('.mainVisual__description').after(nouki_Msg);
	}
);
