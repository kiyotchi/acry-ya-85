<script>
  $(function(){
    console.log('loading - ready');
    $.when(
      loadingDirection()
    ).done(function(){
      loadingStop();
    });

    // 5秒後に強制的に実行
    setTimeout(function() {
      if(!$('.js-loading').hasClass('is-active')) {
        loadingFlag = true;
        loadingStop();
        console.log('loading - end 2');
      }
    }, 5000);
  });
</script>
<script>
  console.log('html.parsed ', performance.now() - start)
  $(function () {
    console.log('document.ready', performance.now() - start)
  })
  $(window).load(function () {
    console.log('window.onload ', performance.now() - start)
  })
</script>
