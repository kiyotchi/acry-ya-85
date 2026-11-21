let kyugyo_btn='<span class="c-label--xl--stpSelling">販売停止中</span>';

$(document).ready(function(){
  $('.overview__title').after(kyugyo_btn);
  $('.action__button').hide();
  $('.overview__form').hide();
  $('.overview__price').hide();
  $('.overview__order').hide();
  $('.overview__tag').hide();
});
