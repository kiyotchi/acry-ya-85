let noukiDelay='<a href="#keppinInfo" class="c-link js-anchorScroll"><span class="c-label--xl--noukiDelay">欠品情報があります</span></a>';

MsgCnt = 7;
let pipe=new Array(MsgCnt);
pipe[0]='<div class="c-flame--sm-danger">';
pipe[1]='<p class="c-heading--md">アクリルキャストパイプ品薄に伴う代替品のお知らせ</p>';
pipe[2]='<p class="c-text--md">現在メーカーでの在庫切れが続いており、ご注文内容によって納期を通常よりお待ち頂く場合がございます。外径20mm～300mmまでは輸入パイプで代替出来る場合がございます。ご希望のお客様は別途<a href="/support/contact/" target="_blank">お問い合わせ</a>下さい。</p>';
pipe[3]='<ul class="c-list--note--sm"><li class="list__item">';
pipe[4]='輸入パイプは通常出荷の国産パイプに比べて、若干寸法のバラつき、傷の付着が目立つ場合がございます。';
pipe[5]='</li></ul>';
pipe[6]='</div>';

pipe_Msg = '';
for(i=0;i<MsgCnt;i++){
	pipe_Msg = pipe_Msg + pipe[i];
}

msgCnt = 45;
let keppinMsg=new Array(msgCnt);
keppinMsg[0]='<br><div id="keppinInfo">';
keppinMsg	[	1	]	='<table>';
keppinMsg	[	2	]	='  <tr>';
keppinMsg	[	3	]	='    <td><h3 class="section__caption c-heading--sm" id="tagOutOfStock">欠品情報</h3></td>';
keppinMsg	[	4	]	='    <td><h3 class="section__caption c-heading--xs">2023/12/5 現在</h3></td>';
keppinMsg	[	5	]	='  </tr>';
keppinMsg	[	6	]	='  <tr>';
keppinMsg	[	7	]	='    <td colspan="2"><table border="0" class="c-table">';
keppinMsg	[	8	]	='      <tr>';
keppinMsg	[	9	]	='        <th>材料</th>';
keppinMsg	[	10	]	='        <th>外径（mm）</th>';
keppinMsg	[	11	]	='        <th>板厚（mm）</th>';
keppinMsg	[	12	]	='        <th>入荷予定</th>';
keppinMsg	[	13	]	='      </tr>';
keppinMsg	[	14	]	='      <tr>';
keppinMsg	[	15	]	='        <td>キャストパイプ</td>';
keppinMsg	[	16	]	='        <td>66</td>';
keppinMsg	[	17	]	='        <td>8</td>';
keppinMsg	[	18	]	='        <td>2024年2月上旬</td>';
keppinMsg	[	19	]	='      </tr>';
keppinMsg	[	20	]	='      <tr>';
keppinMsg	[	21	]	='        <td>キャストパイプ</td>';
keppinMsg	[	22	]	='        <td>75</td>';
keppinMsg	[	23	]	='        <td>4</td>';
keppinMsg	[	24	]	='        <td>12月14日以降</td>';
keppinMsg	[	25	]	='      </tr>';
keppinMsg	[	26	]	='      <tr>';
keppinMsg	[	27	]	='        <td>キャストパイプ</td>';
keppinMsg	[	28	]	='        <td>125</td>';
keppinMsg	[	29	]	='        <td>5</td>';
keppinMsg	[	30	]	='        <td>12月下旬</td>';
keppinMsg	[	31	]	='      </tr>';
keppinMsg	[	32	]	='    </table></td>';
keppinMsg	[	33	]	='  </tr>';
keppinMsg	[	34	]	='</table>';
keppinMsg	[	35	]	='</div>';
keppinMsg	[	36	]	='<ul class="c-list--note--sm"><li class="list__item">';
keppinMsg	[	37	]	='現在メーカーでの在庫切れが続いており、ご注文内容によって納期を通常よりお待ち頂く場合がございます。外径20mm～300mmまでは輸入パイプで代替出来る場合がございます。ご希望のお客様は別途<a href="/support/contact/" target="_blank">お問い合わせ</a>下さい。';
keppinMsg	[	38	]	='</li>';
keppinMsg	[	39	]	='<li class="list__item">';
keppinMsg	[	40	]	='輸入パイプは通常出荷の国産パイプに比べて、若干寸法のバラつき、傷の付着が目立つ場合がございます。';
keppinMsg	[	41	]	='</li>';
keppinMsg	[	42	]	='<li class="list__item">';
keppinMsg	[	43	]	='受注生産品ご希望のお客様は<a href="/support/contact/" target="_blank">お問い合わせ</a>下さい。';
keppinMsg	[	44	]	='</li></ul>';

keppin_Msg = '';
for(i=0;i<msgCnt;i++){
	keppin_Msg = keppin_Msg + keppinMsg[i];
}

$(document).ready(
	function(){
		$('.detail__fullorder').after(keppin_Msg);
		$('#delivery_schedule').after(noukiDelay);
//		$('.mainVisual__description').after(pipe_Msg);
	}
);
