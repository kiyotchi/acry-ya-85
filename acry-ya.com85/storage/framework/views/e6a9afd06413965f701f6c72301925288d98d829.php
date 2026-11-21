                <?php if( !empty($product->product_code) ): ?>
                    <!-- 品番-->
                    <dl class="overview__productNumber">
                        <dt>品番：</dt>
                        <dd><?php echo e($product->product_code); ?></dd>
                    </dl>
                <?php endif; ?>
                <!-- 商品名-->
                <h1 class="overview__title c-heading--sm"><?php echo e($product->product_name); ?></h1>
                <div class="semiorder-star-area"></div>
                <?php if( !empty($product->maker_name) ): ?>
                    <!-- メーカー-->
                    <dl class="overview__manufacturer">
                        <dt>メーカー：</dt>
                        <dd><?php echo e($product->maker_name); ?></dd>
                    </dl>
                <?php endif; ?>
                <?php if( !empty($product->productFeatureTag) ): ?>
                    <!-- タグ-->
                    <div class="overview__tag">
                        <?php $__currentLoopData = $product->productFeatureTag; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $tag): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <a class="tag__label c-label--md-black js-anchorScroll" href="#tagSection"><?php echo e($tag->product_feature_tag_name); ?></a>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                <?php endif; ?>
<?php /**PATH /var/www/acry-ya.com85/resources/views/products/components/product_title.blade.php ENDPATH**/ ?>