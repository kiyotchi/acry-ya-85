msgCnt = 51;
let keppinMsg=new Array(msgCnt);
keppinMsg[0]='<div id="keppinInfo">';
keppinMsg[	1	]='<table>';
keppinMsg[	2	]='  <tr>';
keppinMsg[	3	]='    <td><h3 class="section__caption c-heading--sm">欠品情報</h3></td>';
keppinMsg[	4	]='    <td><h3 class="section__caption c-heading--xs">20/7/20 現在</h3></td>';
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
keppinMsg[	15	]='        <td>クリアー 1380x1100mm<sup>※</sup></td>';
keppinMsg[	16	]='        <td>2</td>';
keppinMsg[	17	]='      </tr>';
keppinMsg[	18	]='      <tr>';
keppinMsg[	19	]='        <td>押出</td>';
keppinMsg[	20	]='        <td>クリアー 2000ｘ1000mm<sup>※</sup></td>';
keppinMsg[	21	]='        <td>2</td>';
keppinMsg[	22	]='      </tr>';
keppinMsg[	23	]='      <tr>';
keppinMsg[	24	]='        <td>押出</td>';
keppinMsg[	25	]='        <td>クリアー 1380x1100mm<sup>※</sup></td>';
keppinMsg[	26	]='        <td>5</td>';
keppinMsg[	27	]='      </tr>';
keppinMsg[	28	]='      <tr>';
keppinMsg[	29	]='        <td>押出</td>';
keppinMsg[	30	]='        <td>クリアー 2000ｘ1000mm<sup>※</sup></td>';
keppinMsg[	31	]='        <td>5</td>';
keppinMsg[	32	]='      </tr>';
keppinMsg[	33	]='      <tr>';
keppinMsg[	34	]='        <td>押出</td>';
keppinMsg[	35	]='        <td>クリアー 1380x1100mm</td>';
keppinMsg[	36	]='        <td>8</td>';
keppinMsg[	37	]='      </tr>';
keppinMsg[	38	]='      <tr>';
keppinMsg[	39	]='        <td>キャスト</td>';
keppinMsg[	40	]='        <td>クリアー</td>';
keppinMsg[	41	]='        <td>3 / 5</td>';
keppinMsg[	42	]='      </tr>';
keppinMsg[	43	]='      <tr>';
keppinMsg[	44	]='        <td>キャスト</td>';
keppinMsg[	45	]='        <td>ミスティスモーク</td>';
keppinMsg[	46	]='        <td>3</td>';
keppinMsg[	47	]='      </tr>';
keppinMsg[	48	]='    </table></td>';
keppinMsg[	49	]='  </tr>';
keppinMsg[	50	]='</table>';
keppinMsg[	51	]='<p>※：元板サイズが1830x915mmのみとなります。</p><br></div>';


keppin_Msg = '';
for(i=0;i<msgCnt;i++){
	keppin_Msg = keppin_Msg + keppinMsg[i];
}

$(document).ready(
	function(){
		$('.mainVisual__description').after(keppin_Msg);
	}
);
