msgCnt = 26;
let keppinMsg=new Array(msgCnt);
keppinMsg[0]='<div id="keppinInfo">';
keppinMsg[	1	]='<table>';
keppinMsg[	2	]='  <tr>';
keppinMsg[	3	]='    <td><h3 class="section__caption c-heading--sm">欠品情報</h3></td>';
keppinMsg[	4	]='    <td><h3 class="section__caption c-heading--xs">20/7/28 現在</h3></td>';
keppinMsg[	5	]='  </tr>';
keppinMsg[	6	]='  <tr>';
keppinMsg[	7	]='    <td colspan="2"><table border="0" class="c-table">';
keppinMsg[	8	]='      <tr>';
keppinMsg[	9	]='        <th>製法</th>';
keppinMsg[	10	]='        <th>色調（サイズ）</th>';
keppinMsg[	11	]='        <th>板厚（mm）</th>';
keppinMsg[	12	]='      </tr>';
keppinMsg[	13	]='      <tr>';
keppinMsg[	14	]='        <td>押出</td>';
keppinMsg[	15	]='        <td>クリアー 1380x1100mm</td>';
keppinMsg[	16	]='        <td>8</td>';
keppinMsg[	17	]='      </tr>';
keppinMsg[	18	]='      <tr>';
keppinMsg[	19	]='        <td>キャスト</td>';
keppinMsg[	20	]='        <td>クリアー耐擦傷(両面)MR</td>';
keppinMsg[	21	]='        <td>8</td>';
keppinMsg[	22	]='      </tr>';
keppinMsg[	23	]='    </table></td>';
keppinMsg[	24	]='  </tr>';
keppinMsg[	25	]='</table><p>※MR板に関しては、ご対応できる場合がございますので、<a href="/support/contact/" target="_blank">お問い合わせ</a>ください。</p><br></div>';


keppin_Msg = '';
for(i=0;i<msgCnt;i++){
	keppin_Msg = keppin_Msg + keppinMsg[i];
}

$(document).ready(
	function(){
		$('.mainVisual__description').after(keppin_Msg);
	}
);
