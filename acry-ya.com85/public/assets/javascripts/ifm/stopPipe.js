let kyugyo_btn='<span class="c-label--xl--stpSelling">メンテナンス中</span>';

let kyugyo_info1='<table class="c-table" id="kyugyo_info_tbl"><tbody><tr><th>製品のご購入について</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let kyugyo_info2='現在販売停止中のため、お手数ですがご注文をご希望の方は<a href="/full_order/web/">フルオーダー</a>よりご連絡下さい。';
let kyugyo_info3='</li></ul></td></tr></tbody></table>';


$(document).ready(function(){
  $('.overview__order').remove();
  $('.overview__price').remove();
  $('.mainVisual__description').after(kyugyo_info1 + kyugyo_info2 + kyugyo_info3);
  $('#kyugyo_info_tbl').css('color','red');
  $('#kyugyo_info_tbl.c-table th').css('background-color', '#ffdbdb');
  $('#kyugyo_info_tbl.c-table li').css('color', '#333');
  $('.overview__relation').prepend(kyugyo_btn);

});
