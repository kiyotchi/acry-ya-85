<?php if($paginator->hasPages()): ?>
    <div class="listNavigation__pagenation c-pagenation">
        <?php if($paginator->onFirstPage()): ?>
        <?php else: ?>
            <a href="<?php echo e($paginator->previousPageUrl()); ?>"
               class="pagenation__prev <?php echo e(($paginator->currentPage() == 1) ? ' disabled' : ''); ?>"><i
                        class="c-icon--arrow-l-black"></i></a>
        <?php endif; ?>

        <ol>
        <?php $__currentLoopData = $elements; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $element): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <!-- "Three Dots" Separator -->
                <?php if(is_string($element)): ?>
                    <li class="disabled"><span><?php echo e($element); ?></span></li>
                <?php endif; ?>

            <!-- Array Of Links -->
                <?php if(is_array($element)): ?>
                    <?php $__currentLoopData = $element; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $page => $url): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <li>
                            <?php if($page == $paginator->currentPage()): ?>
                                <p class="is-active"><?php echo e($page); ?></p>
                            <?php else: ?>
                                <a href="<?php echo e($url); ?>"><?php echo e($page); ?></a>
                            <?php endif; ?>
                        </li>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                <?php endif; ?>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ol>

        <?php if($paginator->hasMorePages()): ?>
            <a href="<?php echo e($paginator->nextPageUrl()); ?>" class="pagenation__next"><i class="c-icon--arrow-r-black"></i></a>
        <?php else: ?>
        <?php endif; ?>
    </div>
<?php endif; ?>
<?php /**PATH /var/www/acry-ya.com/resources/views/vendor/pagination/default.blade.php ENDPATH**/ ?>