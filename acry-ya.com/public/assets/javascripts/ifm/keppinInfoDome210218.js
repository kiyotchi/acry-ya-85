msgCnt = 36;
let keppinMsg=new Array(msgCnt);
keppinMsg[0]='<div id="keppinInfo">';
keppinMsg	[	1	]	='<table>';
keppinMsg	[	2	]	='  <tr>';
keppinMsg	[	3	]	='    <td><h3 class="section__caption c-heading--sm" id="tagOutOfStock">欠品情報</h3></td>';
keppinMsg	[	4	]	='    <td><h3 class="section__caption c-heading--xs">2021/2/18 現在</h3></td>';
keppinMsg	[	5	]	='  </tr>';
keppinMsg	[	6	]	='  <tr>';
keppinMsg	[	7	]	='    <td colspan="2"><table border="0" class="c-table">';
keppinMsg	[	8	]	='      <tr>';
keppinMsg	[	9	]	='        <th>カラー</th>';
keppinMsg	[	10	]	='        <th>外径</th>';
keppinMsg	[	11	]	='        <th>板厚（mm）</th>';
keppinMsg	[	12	]	='        <th>フランジ</th>';
keppinMsg	[	13	]	='        <th>状態</th>';
keppinMsg	[	14	]	='      </tr>';
keppinMsg	[	15	]	='      <tr>';
keppinMsg	[	16	]	='        <td>クリアー</td>';
keppinMsg	[	17	]	='        <td>400</td>';
keppinMsg	[	18	]	='        <td>3</td>';
keppinMsg	[	19	]	='        <td>あり</td>';
keppinMsg	[	20	]	='        <td>入荷未定</td>';
keppinMsg	[	21	]	='      </tr>';
keppinMsg	[	22	]	='      <tr>';
keppinMsg	[	23	]	='        <td>クリアー</td>';
keppinMsg	[	24	]	='        <td>400</td>';
keppinMsg	[	25	]	='        <td>3</td>';
keppinMsg	[	26	]	='        <td>なし</td>';
keppinMsg	[	27	]	='        <td>品薄</td>';
keppinMsg	[	28	]	='      </tr>';
keppinMsg	[	29	]	='    </table></td>';
keppinMsg	[	30	]	='  </tr>';
keppinMsg	[	31	]	='</table>';
keppinMsg	[	32	]	='<ul class="c-list--note--xs">';
keppinMsg	[	33	]	='<li class="list__item">材料品薄のものに関しては、ご注文時に欠品となる恐れもありますのでご了承ください。</li>';
keppinMsg	[	34	]	='</ul>';
keppinMsg	[	35	]	='</div>';


keppin_Msg = '';
for(i=0;i<msgCnt;i++){
	keppin_Msg = keppin_Msg + keppinMsg[i];
}

$(document).ready(
	function(){
		$('.mainVisual__description').after(keppin_Msg);
	}
);
