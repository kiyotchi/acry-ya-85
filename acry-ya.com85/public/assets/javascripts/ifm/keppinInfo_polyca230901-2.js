let noukiDelay='<a href="#keppinInfo" class="c-link js-anchorScroll"><span class="c-label--xl--noukiDelay">欠品情報があります</span></a>';

msgCnt = 27;
let keppinMsg=new Array(msgCnt);
keppinMsg[0]='<br><div id="keppinInfo">';
keppinMsg	[	1	]	='<table>';
keppinMsg	[	2	]	='  <tr>';
keppinMsg	[	3	]	='    <td><h3 class="section__caption c-heading--sm" id="tagOutOfStock">欠品情報</h3></td>';
keppinMsg	[	4	]	='    <td><h3 class="section__caption c-heading--xs">2023/9/1 現在</h3></td>';
keppinMsg	[	5	]	='  </tr>';
keppinMsg	[	6	]	='  <tr>';
keppinMsg	[	7	]	='    <td colspan="2"><table border="0" class="c-table">';
keppinMsg	[	8	]	='      <tr>';
keppinMsg	[	9	]	='        <th>色調</th>';
keppinMsg	[	10	]	='        <th>板厚（mm）</th>';
keppinMsg	[	11	]	='        <th>入荷予定</th>';
keppinMsg	[	12	]	='      </tr>';
keppinMsg	[	13	]	='      <tr>';
keppinMsg	[	14	]	='        <td>グレースモーク片面マット(熱線カット・両面耐候)</td>';
keppinMsg	[	15	]	='        <td>2</td>';
keppinMsg	[	16	]	='        <td>2023年10月中旬以降</td>';
keppinMsg	[	17	]	='      </tr>';
keppinMsg	[	18	]	='      <tr>';
keppinMsg	[	19	]	='        <td>ブラウンスモーク片面マット(熱線カット・両面耐候)</td>';
keppinMsg	[	20	]	='        <td>2</td>';
keppinMsg	[	21	]	='        <td>2023年10月中旬以降</td>';
keppinMsg	[	22	]	='      </tr>';
keppinMsg	[	23	]	='    </table></td>';
keppinMsg	[	24	]	='  </tr>';
keppinMsg	[	25	]	='</table>';
keppinMsg	[	26	]	='</div>';
keppinMsg	[	27	]	='<ul class="c-list--note--sm"><li class="list__item">';
keppinMsg	[	28	]	='欠品製品はメーカー生産が追い付いておらず、記載の入荷予定通りに出荷できない場合もございます。';
keppinMsg	[	29	]	='</li>';
keppinMsg	[	30	]	='<li class="list__item">';
keppinMsg	[	31	]	='サイズによっては対応できる可能性がございます。お急ぎの場合は<a href="/support/contact/" target="_blank">お問い合わせ</a>ください。';
keppinMsg	[	32	]	='</li>';

keppin_Msg = '';
for(i=0;i<msgCnt;i++){
	keppin_Msg = keppin_Msg + keppinMsg[i];
}

$(document).ready(
	function(){
		$('.detail__fullorder').after(keppin_Msg);
		$('#delivery_schedule').after(noukiDelay);
	}
);
