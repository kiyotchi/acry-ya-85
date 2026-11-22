let noukiDelay = '<a href="#keppinInfo" class="c-link js-anchorScroll"><span class="c-label--xl--noukiDelay">欠品情報があります</span></a>';

MsgCnt = 7;
let pipe = new Array(MsgCnt);
pipe[0] = '<div class="c-flame--sm-danger">';
pipe[1] = '<p class="c-heading--md">アクリルキャストパイプ品薄に伴う代替品のお知らせ</p>';
pipe[2] = '<p class="c-text--md">現在メーカーでの在庫切れが続いており、ご注文内容によって納期を通常よりお待ち頂く場合がございます。外径20mm～300mmまでは輸入パイプで代替出来る場合がございます。ご希望のお客様は別途<a href="/support/contact/" target="_blank">お問い合わせ</a>下さい。</p>';
pipe[3] = '<ul class="c-list--note--sm"><li class="list__item">';
pipe[4] = '輸入パイプは通常出荷の国産パイプに比べて、若干寸法のバラつき、傷の付着が目立つ場合がございます。';
pipe[5] = '</li></ul>';
pipe[6] = '</div>';

pipe_Msg = '';
for (i = 0; i < MsgCnt; i++) {
	pipe_Msg = pipe_Msg + pipe[i];
}

//msgCnt = 39;
let keppinMsg = new Array();
keppinMsg.push('<br><div id="keppinInfo">');
keppinMsg.push('<table>');
keppinMsg.push('  <tr>');
keppinMsg.push('    <td><h3 class="section__caption c-heading--sm" id="tagOutOfStock">欠品情報</h3></td>');
keppinMsg.push('    <td><h3 class="section__caption c-heading--xs">2026/6/18 現在</h3></td>');
keppinMsg.push('  </tr>');
keppinMsg.push('  <tr>');
keppinMsg.push('    <td colspan="2"><table border="0" class="c-table">');
keppinMsg.push('      <tr>');
keppinMsg.push('        <th>材料</th>');
keppinMsg.push('        <th>外径（mm）</th>');
keppinMsg.push('        <th>板厚（mm）</th>');
keppinMsg.push('        <th>入荷予定</th>');
keppinMsg.push('      </tr>');
keppinMsg.push('      <tr>');
keppinMsg.push('        <td>キャストパイプ</td>');
keppinMsg.push('        <td>230</td>');
keppinMsg.push('        <td>12</td>');
keppinMsg.push('        <td>9月下旬予定</td>');
keppinMsg.push('      </tr>');
keppinMsg.push('      <tr>');
keppinMsg.push('        <td>キャストパイプ</td>');
keppinMsg.push('        <td>370</td>');
keppinMsg.push('        <td>6</td>');
keppinMsg.push('        <td>納期未定</td>');
keppinMsg.push('      </tr>');
keppinMsg.push('      <tr>');
keppinMsg.push('        <td>キャストパイプ</td>');
keppinMsg.push('        <td>48</td>');
keppinMsg.push('        <td>2</td>');
keppinMsg.push('        <td>10月予定</td>');
keppinMsg.push('      </tr>');
keppinMsg.push('      <tr>');
keppinMsg.push('        <td>キャストパイプ</td>');
keppinMsg.push('        <td>86</td>');
keppinMsg.push('        <td>5</td>');
keppinMsg.push('        <td>6月下旬頃</td>');
keppinMsg.push('      </tr>');
keppinMsg.push('      <tr>');
keppinMsg.push('        <td>キャストパイプ</td>');
keppinMsg.push('        <td>150</td>');
keppinMsg.push('        <td>3</td>');
keppinMsg.push('        <td>6月下旬頃</td>');
keppinMsg.push('      </tr>');
keppinMsg.push('    </table></td>');
keppinMsg.push('  </tr>');
keppinMsg.push('</table>');
keppinMsg.push('</div>');
keppinMsg.push('<ul class="c-list--note--sm"><li class="list__item">');
keppinMsg.push('現在メーカーでの在庫切れが続いており、ご注文内容によって納期を通常よりお待ち頂く場合がございます。外径20mm～300mmまでは輸入パイプで代替出来る場合がございます。ご希望のお客様は別途<a href="/support/contact/" target="_blank">お問い合わせ</a>下さい。');
keppinMsg.push('</li>');
keppinMsg.push('<li class="list__item">');
keppinMsg.push('輸入パイプは通常出荷の国産パイプに比べて、若干寸法のバラつき、傷の付着が目立つ場合がございます。');
keppinMsg.push('</li>');
keppinMsg.push('<li class="list__item">');
keppinMsg.push('受注生産品ご希望のお客様は<a href="/support/contact/" target="_blank">お問い合わせ</a>下さい。');
keppinMsg.push('</li></ul>');

keppin_Msg = '';
for (i = 0; i < keppinMsg.length; i++) {
	keppin_Msg = keppin_Msg + keppinMsg[i];
}

$(document).ready(
	function () {
		$('.detail__fullorder').after(keppin_Msg);
		$('#delivery_schedule').after(noukiDelay);
		//		$('.mainVisual__description').after(pipe_Msg);
	}
);
