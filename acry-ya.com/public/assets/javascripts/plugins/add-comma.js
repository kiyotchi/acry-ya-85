var basis      = '.js-products';
var comma      = '.js-products__comma';

var commaAdd = function() {
  // フォーカスアウト
  $(basis).find('input, select').on('change', function() {
    setTimeout(function() {
      $(comma).each(function() {
        var num = $(this).val();
        num = num.replace(/(\d)(?=(\d\d\d)+$)/g, '$1,');
        $(this).val(num);
      });
    }, 20);
  });
};

$(window).on('load', function() {
  commaAdd();
});
