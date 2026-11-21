<!doctype html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <?php echo $__env->yieldContent('head'); ?>
    <?php echo $__env->yieldContent('script_head'); ?>
</head>
<body>
<?php echo $__env->yieldContent('header'); ?>
<main id="<?php echo $__env->yieldContent('main_id'); ?>">
    <article>
        <?php echo $__env->yieldContent('content'); ?>
    </article>
</main>
<?php echo $__env->yieldContent('footer'); ?>
<?php echo $__env->yieldContent('script_foot'); ?>
</body>
</html>
<?php /**PATH /var/www/admin.acry-ya.com85/resources/views/layouts/simple.blade.php ENDPATH**/ ?>