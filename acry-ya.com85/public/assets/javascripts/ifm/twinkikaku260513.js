let stop_info1 = '<table class="c-table" id="stop_info_tbl"><tbody><tr><th>ツインカーボ スタンダード 規格サイズのお知らせ</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let stop_info2 = 'ツインカーボ スタンダード 規格サイズは一時的に販売を停止しております。<a href="/products/detail/134/">ツインカーボ・ポリカツイン（中空ポリカ板） フリーカット</a>にてご注文いただけます。ご希望のサイズ・仕様に合わせてお見積り・ご購入が可能です。';
let stop_info3 = '</li></ul></td></tr></tbody></table>';


$(document).ready(function () {
  $('.mainVisual__description').after(stop_info1 + stop_info2 + stop_info3);
  $('#stop_info_tbl').css('color', 'red');
  $('#stop_info_tbl.c-table th').css('background-color', '#ffdbdb');
  $('#delivery_schedule').hide();
});
