<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta meta http-equiv="Expires" content="604800">
<meta name="format-detection" content="telephone=no">
<meta name="description" content="<?php echo $__env->yieldContent('description'); ?>">
<meta name="keywords" content="アクリ屋,<?php echo $__env->yieldContent('keywords'); ?>">
<title><?php if(View::hasSection('title')): ?><?php echo $__env->yieldContent('title'); ?> | <?php endif; ?>アクリ屋ドットコム</title>
<meta property="og:title" content="<?php if(View::hasSection('title')): ?><?php echo $__env->yieldContent('title'); ?> | <?php endif; ?>アクリ屋ドットコム">
<meta property="og:type" content="website">
<meta property="og:url" content="<?php echo e(( !empty($current_url) ) ? $current_url : request()->fullUrl()); ?>">
<meta property="og:image" content="<?php if(View::hasSection('ogpUrl')): ?><?php echo $__env->yieldContent('ogpUrl'); ?><?php else: ?> <?php echo e(asset('assets/images/ogp.jpg')); ?> <?php endif; ?>">
<meta property="og:site_name" content="アクリ屋ドットコム">
<meta property="og:description" content="<?php echo $__env->yieldContent('description'); ?>">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="<?php if(View::hasSection('title')): ?><?php echo $__env->yieldContent('title'); ?> | <?php endif; ?>アクリ屋ドットコム">
<meta name="twitter:description" content="<?php echo $__env->yieldContent('description'); ?>">
<meta name="twitter:image" content="<?php if(View::hasSection('twitterUrl')): ?><?php echo $__env->yieldContent('twitterUrl'); ?><?php else: ?> <?php echo e(asset('assets/images/ogp.jpg')); ?> <?php endif; ?>">
<meta itemprop="image" content="<?php if(View::hasSection('ogpUrl')): ?><?php echo $__env->yieldContent('ogpUrl'); ?><?php else: ?> <?php echo e(asset('assets/images/ogp.jpg')); ?> <?php endif; ?>">
<link rel="shortcut icon" href="<?php echo e(asset('assets/images/favicon.ico')); ?>" type="image/x-icon">
<link rel="apple-touch-icon" href="<?php echo e(asset('assets/images/favicon.png')); ?>">
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
<link rel="stylesheet" href="/assets/stylesheets/base.css">
<link rel="stylesheet" href="/assets/stylesheets/layout.css?ver=20220722">
<link rel="stylesheet" href="/assets/stylesheets/style.css">
<?php echo $__env->yieldContent('headCss'); ?>
<link rel="stylesheet" href="/assets/stylesheets/acry-ya.css?ver=20260710">
<link rel="stylesheet" href="/assets/stylesheets/environmentcolor.css">
<script>window.Promise || document.write('<script src="//www.promisejs.org/polyfills/promise-7.0.4.min.js"><\/script>')</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
<script src="<?php echo e(asset('assets/javascripts/common.js')); ?>"></script>
<script src="<?php echo e(asset('assets/javascripts/function.js?ver=20230701')); ?>"></script>
<script src="<?php echo e(asset('assets/javascripts/plugins/cookie.js')); ?>"></script>
<script src="<?php echo e(asset('assets/javascripts/plugins/add-comma.js')); ?>"></script>
<meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
<?php /**PATH /var/www/acry-ya.com85/resources/views/common/meta.blade.php ENDPATH**/ ?>