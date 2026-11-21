msgCnt = 5;
let nouki=new Array(msgCnt);
nouki[0]='<div class="c-flame--sm-primary">';
nouki[1]='<p class="c-heading--md">材料品薄のお知らせ　<span class="c-heading--xs">2021/2/10 現在</span></p>';
nouki[2]='<p class="c-text--md">現在材料特需の関係で、色・サイズに限らずご注文内容によって材料のご用意が出来ない、若しくは納期を通常よりお待ち頂く場合がございます。</p>';
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
