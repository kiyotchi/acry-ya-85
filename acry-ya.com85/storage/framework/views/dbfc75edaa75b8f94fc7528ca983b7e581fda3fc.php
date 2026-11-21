<!DOCTYPE html>
<html lang="ja" prefix="og: http://ogp.me/ns#">
<head>
    <?php echo $__env->yieldContent('headStart'); ?>
    <?php echo $__env->make('common.head_start', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('common.meta', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->yieldContent('headEnd'); ?>
</head>
<body id="<?php echo $__env->yieldContent('bodyId'); ?>">
<?php echo $__env->yieldContent('bodyStart'); ?>
<div id="wrapper" class="l-column js-menu">
    <?php echo $__env->make('common.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <?php echo $__env->make('common.sidemenu', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <div class="column__right">
        <div class="l-loading js-loading"><img src="/assets/images/loading.png" class="loading__image is-animated fx-infinite"></div>
        
        <main class="l-main">
            <?php echo $__env->yieldContent('content'); ?>
        </main>
        <?php echo $__env->make('common.footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    </div>
</div>
<?php echo $__env->yieldContent('bodyEnd'); ?>
<?php echo $__env->make('common.body_end', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
</body>
</html>
<?php /**PATH /var/www/acry-ya.com85/resources/views/layouts/base.blade.php ENDPATH**/ ?>