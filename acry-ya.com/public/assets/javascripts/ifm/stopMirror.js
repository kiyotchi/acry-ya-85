let kyugyo_btn='<a href="/products/detail/1/" class="contact__button c-button--primary-xl">ご購入はこちらから</a>';

$(document).ready(function(){
  $('.overview__order').remove();
  $('.overview__price').remove();
  $('.overview__relation').prepend(kyugyo_btn);
});
