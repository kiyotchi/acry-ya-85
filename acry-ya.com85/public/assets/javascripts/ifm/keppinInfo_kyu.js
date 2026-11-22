msgCnt = 20;
let keppinMsg=new Array(msgCnt);
keppinMsg[0]=	'	<div id="keppinInfo">	'	;
keppinMsg[1]=	'	<table>	'	;
keppinMsg[2]=	'	  <tr>	'	;
keppinMsg[3]=	'	    <td><h3 class="section__caption c-heading--sm">欠品情報</h3></td>	'	;
keppinMsg[4]=	'	    <td><h3 class="section__caption c-heading--xs">20/7/8 現在</h3></td>	'	;
keppinMsg[5]=	'	  </tr>	'	;
keppinMsg[6]=	'	  <tr>	'	;
keppinMsg[7]=	'	    <td colspan="2"><table border="0" class="c-table">	'	;
keppinMsg[8]=	'	      <tr>	'	;
keppinMsg[9]=	'	        <th>サイズ</th>	'	;
keppinMsg[10]=	'	        <th>入荷予定</th>	'	;
keppinMsg[11]=	'	      </tr>	'	;
keppinMsg[12]=	'	      <tr>	'	;
keppinMsg[13]=	'	        <td>70mm</td>	'	;
keppinMsg[14]=	'	        <td>8月下旬</td>	'	;
keppinMsg[15]=	'	      </tr>	'	;
keppinMsg[16]=	'	    </table></td>	'	;
keppinMsg[17]=	'	  </tr>	'	;
keppinMsg[18]=	'	</table>	'	;
keppinMsg[19]=	'	</div>	'	;


keppin_Msg = '';
for(i=0;i<msgCnt;i++){
	keppin_Msg = keppin_Msg + keppinMsg[i];
}

$(document).ready(
	function(){
		$('.mainVisual__description').after(keppin_Msg);
	}
);
