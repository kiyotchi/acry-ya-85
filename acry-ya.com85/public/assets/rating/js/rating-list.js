$(function(){
  $('.js-rating').each(function(index) {
    var raringid =  "#" + $(this).attr('id');
    $(raringid).rateYo({
      rating: Number($(raringid).data('avarage')),
      starWidth: "14px",
      normalFill: "#dcdcdc",
      ratedFill: "#fbc83b",
      readOnly: true
    });
  });
});
