<?php $__env->startSection('header'); ?>
<header>
    <div>
        <h2><a href="<?php echo e(url('/')); ?>">アクリヤWEB管理画面</a></h2>
        <?php if(auth()->guard()->guest()): ?>
        <?php else: ?>
            <nav>

                <p><a href="<?php echo e(route('logout')); ?>" class="btn">ログアウト</a></p>
            </nav>
        <?php endif; ?>
    </div>
</header>
<?php $__env->stopSection(); ?><?php /**PATH /var/www/admin.acry-ya.com85/resources/views/layouts/header.blade.php ENDPATH**/ ?>