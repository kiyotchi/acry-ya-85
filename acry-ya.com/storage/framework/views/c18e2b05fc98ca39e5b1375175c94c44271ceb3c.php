let taxRate = <?php echo e($tax_rate); ?>;
let taxRateValue = (100 + taxRate) / 100;

<?php if( !empty($delivery_dates) ): ?>
let delivery_dates = {
    <?php $__currentLoopData = $delivery_dates; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            '<?php echo e($key); ?>' : '<?php echo e($value); ?>'
        <?php if(!$loop->last): ?>,<?php endif; ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
};
<?php endif; ?>
<?php /**PATH /var/www/acry-ya.com/resources/views/products/const_js.blade.php ENDPATH**/ ?>