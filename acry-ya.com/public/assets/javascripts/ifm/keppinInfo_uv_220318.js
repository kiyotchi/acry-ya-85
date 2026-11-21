MsgCnt = 3;
let uv=new Array(MsgCnt);
uv[0]='<div class="c-flame--sm-danger">';
uv[1]='<p class="c-text--md">アクリル紫外線カット(UVカット)板、2mm厚(2000×1000mm)が現在品薄の為、ご注文内容によって納期を通常よりお待ち頂く場合がございます。</p>';
uv[2]='</div>';

uv_Msg = '';
for(i=0;i<MsgCnt;i++){
	uv_Msg = uv_Msg + uv[i];
}

$(document).ready(
	function(){
		$('.mainVisual__description').after(uv_Msg);
	}
);
