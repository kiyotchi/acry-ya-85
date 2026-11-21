msgCnt = 23;
let keppinMsg=new Array(msgCnt);
keppinMsg[0]='<div id="keppinInfo">';
keppinMsg[	1]='<table>';
keppinMsg[	2]='  <tr>';
keppinMsg[	3]='    <td><h3 class="section__caption c-heading--sm" id="tagOutOfStock">欠品情報</h3></td>';
keppinMsg[	4]='    <td><h3 class="section__caption c-heading--xs">2021/8/26 現在</h3></td>';
keppinMsg[	5]='  </tr>';
keppinMsg[	6]='  <tr>';
keppinMsg[	7]='    <td colspan="2"><table border="0" class="c-table">';
keppinMsg[	8]='      <tr>';
keppinMsg[	9]='        <th>カラー</th>';
keppinMsg[	10	]='        <th>サイズ</th>';
keppinMsg[	11	]='        <th>板厚（mm）</th>';
keppinMsg[	12	]='        <th>入荷予定</th>';
keppinMsg[	13	]='      </tr>';
keppinMsg[	14	]='      <tr>';
keppinMsg[	15	]='        <td>クリアー制電(両面)SC</td>';
keppinMsg[	16	]='        <td>1300×1100mm</td>';
keppinMsg[	17	]='        <td>3</td>';
keppinMsg[	18	]='        <td>未定</td>';
keppinMsg[	19	]='      </tr>';
keppinMsg[	20	]='    </table></td>';
keppinMsg[	21	]='  </tr>';
keppinMsg[	22	]='</table></div>';


keppin_Msg = '';
for(i=0;i<msgCnt;i++){
	keppin_Msg = keppin_Msg + keppinMsg[i];
}

$(document).ready(
	function(){
		$('.mainVisual__description').after(keppin_Msg);
	}
);
