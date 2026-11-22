let kyugyo_info1 = '<table class="c-table" id="kyugyo_info_tbl"><tbody><tr><th>リニューアルのお知らせ</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let kyugyo_info2 = '「フォトフレーム テーブルトップ」は在庫限りで販売を終了し、カラーバリエーションを増やした<a href="/products/detail/450/" target="_blank">「L判フォトフレーム カラーズフィット」</a>へリニューアルいたします。これまでの仕様で購入をご希望の場合は、<a href="/full_order/web/" target="_blank">お問い合わせ</a>ください。';
let kyugyo_info3 = '</li></ul></td></tr></tbody></table>';


$(document).ready(function () {
  $('.mainVisual__description').after(kyugyo_info1 + kyugyo_info2 + kyugyo_info3);
  $('#delivery_schedule').hide();
});
