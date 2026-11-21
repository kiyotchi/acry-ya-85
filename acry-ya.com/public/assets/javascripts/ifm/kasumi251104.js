let kyugyo_info1 = '<table class="c-table" id="kyugyo_info_tbl"><tbody><tr><th>かすみ型模様板 規格サイズ品 終了のお知らせ</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let kyugyo_info2 = 'AGC製ポリカーボネート板「かすみ型模様」は、メーカー譲渡に伴い廃番となりました。現在は、住友ベークライト製「コナミ」シリーズのみの取り扱いとなっております。規格サイズ品の販売は終了いたしましたが、<a href="/products/detail/136/" target="_blank">フリーカット</a>にて類似品をご注文いただけます。ご希望のサイズ・仕様に合わせてお見積り・ご購入が可能です。';
let kyugyo_info3 = '</li></ul></td></tr></tbody></table>';


$(document).ready(function () {
  $('.mainVisual__description').after(kyugyo_info1 + kyugyo_info2 + kyugyo_info3);
  $('#kyugyo_info_tbl').css('color', 'red');
  $('#kyugyo_info_tbl.c-table th').css('background-color', '#ffdbdb');
  $('#delivery_schedule').hide();
});
