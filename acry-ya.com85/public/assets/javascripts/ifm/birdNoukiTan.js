msgCnt = 5;
let nouki=new Array(msgCnt);
nouki[0]='<div class="c-card--category--bird"><div class="card__head"><img src="/storage/images/animal/info/inko.svg"></div>';
nouki[1]='<div class="card__body"><h3 class="card__title c-heading--sm-bird">HOEI35手のり用ケース「OBG500」 納期短縮について</h3>';
nouki[2]='<div class="card__information">';
nouki[3]='<p class="card__discription c-text--md--bird">急な冷え込みや、それに伴う鳥さんの体調管理に対処すべく、定番人気商品の「HOEI35手のり」を対象とした「バードケージケース500タイプ」は、納期を短めに設定致しました。</p>';
nouki[4]='</div></div></div>';

nouki_Msg = '';
for(i=0;i<msgCnt;i++){
	nouki_Msg = nouki_Msg + nouki[i];
}

$(document).ready(
	function(){
		$('.mainVisual__description').after(nouki_Msg);
	}
);
