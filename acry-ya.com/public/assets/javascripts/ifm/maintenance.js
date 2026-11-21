let msg='<span class="c-label--xl--stpSelling">メンテナンス中</span>';
let msgToiawase='<p class="c-text--sm">ご注文希望の方は<a href="/support/contact/" target="_blank">お問い合わせ</a>ください。</p>';


$(document).ready(function(){
  $('.overview__title').after(msg);
  $('.action__button').hide();
  $('.overview__price').hide();
  $('.overview__form').hide();
  $('#delivery_schedule').hide();
  $('#delivery_schedule').after(msgToiawase);
});
