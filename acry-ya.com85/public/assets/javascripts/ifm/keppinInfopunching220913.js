let noukiDelay='<a href="#keppinInfo" class="c-link js-anchorScroll"><span class="c-label--xl--noukiDelay">欠品情報があります</span></a>';

msgCnt = 25;
let keppinMsg=new Array(msgCnt);
keppinMsg[0]='<br><div id="keppinInfo">';
keppinMsg	[	1	]	='<table>';
keppinMsg	[	2	]	='  <tr>';
keppinMsg	[	3	]	='    <td><h3 class="section__caption c-heading--sm" id="tagOutOfStock">欠品情報</h3></td>';
keppinMsg	[	4	]	='    <td><h3 class="section__caption c-heading--xs">2022/9/13 現在</h3></td>';
keppinMsg	[	5	]	='  </tr>';
keppinMsg	[	6	]	='  <tr>';
keppinMsg	[	7	]	='    <td colspan="2">';
keppinMsg	[	8	]	='      <table border="0" class="c-table"><tr>';
keppinMsg	[	9	]	='          <th>材料</th>';
keppinMsg	[	10	]	='        <th>板厚（mm）</th>';
keppinMsg	[	11	]	='        <th>入荷予定</th>';
keppinMsg	[	12	]	='      </tr>';
keppinMsg	[	13	]	='      <tr>';
keppinMsg	[	14	]	='        <td>塩ビパンチング</td>';
keppinMsg	[	15	]	='        <td>3</td>';
keppinMsg	[	16	]	='        <td>未定</td>';
keppinMsg	[	17	]	='      </tr>';
keppinMsg	[	18	]	='    </table></td>';
keppinMsg	[	19	]	='  </tr>';
keppinMsg	[	20	]	='</table>';
keppinMsg	[	21	]	='</div>';
keppinMsg	[	22	]	='<ul class="c-list--note--sm"><li class="list__item">';
keppinMsg	[	23	]	='現在メーカーでの在庫切れが続いており、ご注文内容によって納期を通常よりお待ち頂く場合がございます。';
keppinMsg	[	24	]	='</li><br>';

keppin_Msg = '';
for(i=0;i<msgCnt;i++){
	keppin_Msg = keppin_Msg + keppinMsg[i];
}

$(document).ready(
	function(){
		$('.mainVisual__description').after(keppin_Msg);
    $('#delivery_schedule').after(noukiDelay);
	}
);
