<?php $__env->startSection('title', 'ログイン'); ?>
<?php $__env->startSection('mainId', 'login'); ?>

<?php echo $__env->make('layouts.head', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('layouts.header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php $__env->startSection('content'); ?>
    <section class="login">
        <div id="login-box">
            <?php echo Form::open(['method'=>'POST', 'route'=>array('login'), 'class'=>'form-horizontal']); ?>

                <div>
                    <label>ユーザー</label>
                    <p class="form-group<?php echo e($errors->has('email') ? ' has-error' : ''); ?>"><input id="email" type="text" class="form-control" name="email" value="<?php echo e(old('email')); ?>" placeholder="ユーザー" autofocus></p>
                    <?php if($errors->has('email')): ?>
                        <p class="error"><?php echo e($errors->first('email')); ?></p>
                    <?php endif; ?>
                    <label>パスワード</label>
                    <p class="form-group<?php echo e($errors->has('password') ? ' has-error' : ''); ?>"><input id="password" type="password" class="form-control" name="password" placeholder="パスワード"></p>
                    <?php if($errors->has('password')): ?>
                        <p class="error"><?php echo e($errors->first('password')); ?></p>
                    <?php endif; ?>
                </div>
                <div class="procArea">
                    <?php echo Form::submit('ログイン'); ?>

                </div>
            <?php echo Form::close(); ?>

        </div>
    </section>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.simple', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/admin.acry-ya.com85/resources/views/auth/login.blade.php ENDPATH**/ ?>