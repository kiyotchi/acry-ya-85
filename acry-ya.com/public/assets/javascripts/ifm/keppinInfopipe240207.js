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

msgCnt = 57;
let keppinMsg=new Array(msgCnt);
keppinMsg[0]='<br><div id="keppinInfo">';
keppinMsg	[	1	]	='<table>';
keppinMsg	[	2	]	='  <tr>';
keppinMsg	[	3	]	='    <td><h3 class="section__caption c-heading--sm" id="tagOutOfStock">欠品情報</h3></td>';
keppinMsg	[	4	]	='    <td><h3 class="section__caption c-heading--xs">2024/2/7 現在</h3></td>';
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
keppinMsg	[	16	]	='        <td>21.8</td>';
keppinMsg	[	17	]	='        <td>2</td>';
keppinMsg	[	18	]	='        <td>3/1</td>';
keppinMsg	[	19	]	='      </tr>';
keppinMsg	[	20	]	='      <tr>';
keppinMsg	[	21	]	='        <td>キャストパイプ</td>';
keppinMsg	[	22	]	='        <td>75</td>';
keppinMsg	[	23	]	='        <td>4</td>';
keppinMsg	[	24	]	='        <td>2月中旬</td>';
keppinMsg	[	25	]	='      </tr>';
keppinMsg	[	26	]	='      <tr>';
keppinMsg	[	27	]	='        <td>キャストパイプ</td>';
keppinMsg	[	28	]	='        <td>80</td>';
keppinMsg	[	29	]	='        <td>10</td>';
keppinMsg	[	30	]	='        <td>2月下旬</td>';
keppinMsg	[	31	]	='      </tr>';
keppinMsg	[	32	]	='      <tr>';
keppinMsg	[	33	]	='        <td>キャストパイプ</td>';
keppinMsg	[	34	]	='        <td>100</td>';
keppinMsg	[	35	]	='        <td>10</td>';
keppinMsg	[	36	]	='        <td>2月未定</td>';
keppinMsg	[	37	]	='      </tr>';
keppinMsg	[	38	]	='      <tr>';
keppinMsg	[	39	]	='        <td>キャストパイプ</td>';
keppinMsg	[	40	]	='        <td>125</td>';
keppinMsg	[	41	]	='        <td>5</td>';
keppinMsg	[	42	]	='        <td>2月下旬</td>';
keppinMsg	[	43	]	='      </tr>';
keppinMsg	[	44	]	='    </table></td>';
keppinMsg	[	45	]	='  </tr>';
keppinMsg	[	46	]	='</table>';
keppinMsg	[	47	]	='</div>';
keppinMsg	[	48	]	='<ul class="c-list--note--sm"><li class="list__item">';
keppinMsg	[	49	]	='現在メーカーでの在庫切れが続いており、ご注文内容によって納期を通常よりお待ち頂く場合がございます。外径20mm～300mmまでは輸入パイプで代替出来る場合がございます。ご希望のお客様は別途<a href="/support/contact/" target="_blank">お問い合わせ</a>下さい。';
keppinMsg	[	50	]	='</li>';
keppinMsg	[	51	]	='<li class="list__item">';
keppinMsg	[	52	]	='輸入パイプは通常出荷の国産パイプに比べて、若干寸法のバラつき、傷の付着が目立つ場合がございます。';
keppinMsg	[	53	]	='</li>';
keppinMsg	[	54	]	='<li class="list__item">';
keppinMsg	[	55	]	='受注生産品ご希望のお客様は<a href="/support/contact/" target="_blank">お問い合わせ</a>下さい。';
keppinMsg	[	56	]	='</li></ul>';

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
