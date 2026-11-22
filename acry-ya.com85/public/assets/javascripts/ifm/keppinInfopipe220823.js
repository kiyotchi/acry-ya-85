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

msgCnt = 90;
let keppinMsg=new Array(msgCnt);
keppinMsg[0]='<br><div id="keppinInfo">';
keppinMsg	[	1	]	='<table>';
keppinMsg	[	2	]	='  <tr>';
keppinMsg	[	3	]	='    <td><h3 class="section__caption c-heading--sm" id="tagOutOfStock">欠品情報</h3></td>';
keppinMsg	[	4	]	='    <td><h3 class="section__caption c-heading--xs">2022/8/23 現在</h3></td>';
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
keppinMsg	[	16	]	='        <td>12</td>';
keppinMsg	[	17	]	='        <td>2</td>';
keppinMsg	[	18	]	='        <td>2023年2月頃</td>';
keppinMsg	[	19	]	='      </tr>';
keppinMsg	[	20	]	='      <tr>';
keppinMsg	[	21	]	='        <td>キャストパイプ</td>';
keppinMsg	[	22	]	='        <td>25</td>';
keppinMsg	[	23	]	='        <td>3</td>';
keppinMsg	[	24	]	='        <td>10月下旬</td>';
keppinMsg	[	25	]	='      </tr>';
keppinMsg	[	26	]	='      <tr>';
keppinMsg	[	27	]	='        <td>キャストパイプ</td>';
keppinMsg	[	28	]	='        <td>26</td>';
keppinMsg	[	29	]	='        <td>1.5</td>';
keppinMsg	[	30	]	='        <td>9月下旬</td>';
keppinMsg	[	31	]	='      </tr>';
keppinMsg	[	32	]	='      <tr>';
keppinMsg	[	33	]	='        <td>キャストパイプ</td>';
keppinMsg	[	34	]	='        <td>38.8</td>';
keppinMsg	[	35	]	='        <td>8</td>';
keppinMsg	[	36	]	='        <td>未定</td>';
keppinMsg	[	37	]	='      </tr>';
keppinMsg	[	38	]	='      <tr>';
keppinMsg	[	39	]	='        <td>キャストパイプ</td>';
keppinMsg	[	40	]	='        <td>40</td>';
keppinMsg	[	41	]	='        <td>2</td>';
keppinMsg	[	42	]	='        <td>9月上旬</td>';
keppinMsg	[	43	]	='      </tr>';
keppinMsg	[	44	]	='      <tr>';
keppinMsg	[	45	]	='        <td>キャストパイプ</td>';
keppinMsg	[	46	]	='        <td>50</td>';
keppinMsg	[	47	]	='        <td>3</td>';
keppinMsg	[	48	]	='        <td>12月</td>';
keppinMsg	[	49	]	='      </tr>';
keppinMsg	[	50	]	='      <tr>';
keppinMsg	[	51	]	='        <td>キャストパイプ</td>';
keppinMsg	[	52	]	='        <td>76</td>';
keppinMsg	[	53	]	='        <td>2</td>';
keppinMsg	[	54	]	='        <td>9月中旬</td>';
keppinMsg	[	55	]	='      </tr>';
keppinMsg	[	56	]	='      <tr>';
keppinMsg	[	57	]	='        <td>キャストパイプ</td>';
keppinMsg	[	58	]	='        <td>160</td>';
keppinMsg	[	59	]	='        <td>12</td>';
keppinMsg	[	60	]	='        <td>未定</td>';
keppinMsg	[	61	]	='      </tr>';
keppinMsg	[	62	]	='      <tr>';
keppinMsg	[	63	]	='        <td>キャストパイプ</td>';
keppinMsg	[	64	]	='        <td>170</td>';
keppinMsg	[	65	]	='        <td>8</td>';
keppinMsg	[	66	]	='        <td>未定</td>';
keppinMsg	[	67	]	='      </tr>';
keppinMsg	[	68	]	='      <tr>';
keppinMsg	[	69	]	='        <td>キャストパイプ</td>';
keppinMsg	[	70	]	='        <td>172</td>';
keppinMsg	[	71	]	='        <td>10</td>';
keppinMsg	[	72	]	='        <td>未定</td>';
keppinMsg	[	73	]	='      </tr>';
keppinMsg	[	74	]	='      <tr>';
keppinMsg	[	75	]	='        <td>キャストパイプ</td>';
keppinMsg	[	76	]	='        <td>290</td>';
keppinMsg	[	77	]	='        <td>15</td>';
keppinMsg	[	78	]	='        <td>未定</td>';
keppinMsg	[	79	]	='      </tr>';
keppinMsg	[	80	]	='    </table></td>';
keppinMsg	[	81	]	='  </tr>';
keppinMsg	[	82	]	='</table>';
keppinMsg	[	83	]	='</div>';
keppinMsg	[	84	]	='<ul class="c-list--note--sm"><li class="list__item">';
keppinMsg	[	85	]	='現在メーカーでの在庫切れが続いており、ご注文内容によって納期を通常よりお待ち頂く場合がございます。外径20mm～300mmまでは輸入パイプで代替出来る場合がございます。ご希望のお客様は別途<a href="/support/contact/" target="_blank">お問い合わせ</a>下さい。';
keppinMsg	[	86	]	='</li>';
keppinMsg	[	87	]	='<li class="list__item">';
keppinMsg	[	88	]	='輸入パイプは通常出荷の国産パイプに比べて、若干寸法のバラつき、傷の付着が目立つ場合がございます。';
keppinMsg	[	89	]	='</li></ul>';

keppin_Msg = '';
for(i=0;i<msgCnt;i++){
	keppin_Msg = keppin_Msg + keppinMsg[i];
}

$(document).ready(
	function(){
		$('.detail__fullorder').after(keppin_Msg);
		$('#delivery_schedule').after(noukiDelay);
		$('.mainVisual__description').after(pipe_Msg);
	}
);
