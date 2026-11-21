<?php
    $excludedHosts = ['test.acry-ya.com', 'dev.acry-ya.com'];
    $currentHost = request()->getHost();
?>

<script>const start = performance.now()</script>

<?php if(!in_array($currentHost, $excludedHosts)): ?>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-34LEFGWJK1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-34LEFGWJK1');
</script>
<!-- Global site tag (gtag.js) - Google Ads: 1062272325 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-1062272325"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-1062272325');
</script>
<!-- Yahoo サイトジェネラルタグ -->
<script async src="https://s.yimg.jp/images/listing/tool/cv/ytag.js"></script>
<script>
window.yjDataLayer = window.yjDataLayer || [];
function ytag() { yjDataLayer.push(arguments); }
ytag({"type":"ycl_cookie"});
</script>
<!-- google アナリティクス -->
<script src="/assets/javascripts/analytics.js"></script>
<?php endif; ?><?php /**PATH /var/www/acry-ya.com/resources/views/common/head_start.blade.php ENDPATH**/ ?>