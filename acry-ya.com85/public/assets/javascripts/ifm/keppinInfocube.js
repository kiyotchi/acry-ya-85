let noukiDelay='<a href="#keppinInfo" class="c-link js-anchorScroll"><span class="c-label--xl--noukiDelay">在庫切れのお知らせ</span></a>';

MsgCnt = 7;
let pipe=new Array(MsgCnt);
pipe[0]='<div class="c-flame--sm-danger">';
pipe[1]='<p class="c-heading--md"></p>';
pipe[2]='<p class="c-text--md"></p>';
pipe[3]='<ul class="c-list--note--sm"><li class="list__item">';
pipe[4]='';
pipe[5]='</li></ul>';
pipe[6]='</div>';

pipe_Msg = '';
for(i=0;i<MsgCnt;i++){
	pipe_Msg = pipe_Msg + pipe[i];
}

msgCnt = 21;
let keppinMsg=new Array(msgCnt);
keppinMsg[0]='<br><div id="keppinInfo">';
keppinMsg	[	1	]	='<table>';
keppinMsg	[	2	]	='  <tr>';
keppinMsg	[	3	]	='    <td><h3 class="section__caption c-heading--sm" id="tagOutOfStock">在庫切れのお知らせ</h3></td>';
keppinMsg	[	4	]	='    <td><h3 class="section__caption c-heading--xs">2023/9/1 現在</h3></td>';
keppinMsg	[	5	]	='  </tr>';
keppinMsg	[	6	]	='  <tr>';
keppinMsg	[	7	]	='    <td colspan="2"><table border="0" class="c-table">';
keppinMsg	[	8	]	='      <tr>';
keppinMsg	[	9	]	='        <th>タイプ</th>';
keppinMsg	[	10	]	='        <th>サイズ</th>';
keppinMsg	[	11	]	='        <th>入荷予定</th>';
keppinMsg	[	12	]	='      </tr>';
keppinMsg	[	13	]	='        <td>高さ2個分</td>';
keppinMsg	[	14	]	='        <td>80×40×厚さ40ｍｍ</td>';
keppinMsg	[	15	]	='        <td>未定</td>';
keppinMsg	[	16	]	='</table>';
keppinMsg	[	17	]	='</div>';
keppinMsg	[	18	]	='<ul class="c-list--note--sm"><li class="list__item">';
keppinMsg	[	19	]	='受注生産品ご希望のお客様は<a href="/support/contact/" target="_blank">お問い合わせ</a>下さい。';
keppinMsg	[	20	]	='</li></ul>';

keppin_Msg = '';
for(i=0;i<msgCnt;i++){
	keppin_Msg = keppin_Msg + keppinMsg[i];
}

$(document).ready(
	function(){
		$('.promotion__detail').after(keppin_Msg);
		$('#delivery_schedule').after(noukiDelay);
//		$('.mainVisual__description').after(pipe_Msg);
	}
);
