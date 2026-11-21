let semiPage='<span class="c-label--xl--stpSelling">メンテナンス中</span><span class="c-text--md" id="mainte">現在こちらの製品はメンテナンス中のためご購入出来ません。</span>';

$(document).ready(function(){
  $('.overview__relation').before(semiPage);
  $('.c-label--xl--stpSelling').css('margin-top','3rem');
  $('.c-label--xl--stpSelling').css('margin-bottom','1rem');
  $('.overview__relation').css('margin-top','5rem');
  $('.action__button').hide();
  $('.overview__form').hide();
  $('.overview__price').hide();
  $('.overview__order').hide();
  $('.overview__tag').hide();
});
