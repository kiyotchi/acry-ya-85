var inportantNews = (function() {
  var trigger =     '.js-cookie--inportantNews';
  var target =      '.c-inportantNews';
  var hide =        'is-hide';
  var cookieName =  'inportantNews'
  var cookieValue = 'watched';

  // 重要なお知らせ
  $(document).on('click', trigger, function() {
    $(target).addClass(hide);
    $.cookie(cookieName, cookieValue, {
      expires: 1
    });
  });

  $(window).on('load', function() {
    if($.cookie(cookieName) !== cookieValue) {
      $(target).removeClass(hide);
    }
  });
}());
