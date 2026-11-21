$(function(){

  $('.detail-rating').rateYo({
    rating: Number($('.detail-rating').data('avarage')),
    starWidth: "22px",
    normalFill: "#dcdcdc",
    ratedFill: "#fbc83b",
    readOnly: true
  });

  $('.list-rating').each(function(index) {
    index = index + 1;
    var raringid =  ".list-rating" + index;
    $(raringid).rateYo({
      rating: Number($(raringid).data('star')),
      starWidth: "14px",
      normalFill: "#dcdcdc",
      ratedFill: "#fbc83b",
      readOnly: true
    });
  });


  $('.review-rating').each(function(index) {
    var raringid =  ".review-rating" + index
    $(raringid).rateYo({
      rating: Number($(raringid).data('star')),
      starWidth: "14px",
      normalFill: "#dcdcdc",
      ratedFill: "#fbc83b",
      readOnly: true
    });
  });

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

  /**
   * 率を表示
   */
  for( let x = 0; x < $('.star-percentage').length; x ++ ){
    var target = $('.star-percentage').eq(x);
    var allcount = $(target).attr('data-progress-all');
    var thisCount = $(target).attr('data-progress-this');
    var star =  $(target).attr('data-progress-star');
    var bar = new ProgressBar.Line(
      '.star-percentage-'+star,
      {
        strokeWidth: 3,
        easing: 'easeInOut',
        duration: 1400,
        color: '#fbc83b',
        trailColor: '#f3f3f3',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      }
    );
    bar.animate( thisCount/allcount );
  }

});
