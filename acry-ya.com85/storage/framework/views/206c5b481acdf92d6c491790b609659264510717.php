let totalPrice = 0;
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

<?php if( !empty($discount_rates) ): ?>
let discountRates = [
    <?php $__currentLoopData = $discount_rates; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $discount_rate): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        {
            'number_of_lower_limit' : <?php echo e($discount_rate->number_of_lower_limit); ?>,
            'number_of_upper_limit' : <?php echo e($discount_rate->number_of_upper_limit); ?>,
            'discount_rate' : <?php echo e($discount_rate->discount_rate); ?>

        }<?php if(!$loop->last): ?>,<?php endif; ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
]
<?php endif; ?>

<?php if( !empty($product->productSetting->quantity_html_tag_id) ): ?>
let quantityTagID = '<?php echo e($product->productSetting->quantity_html_tag_id); ?>';
<?php endif; ?>

// 金額計算処理
$(function () {
    let price = $('#base_price').val();
    let quantity = $('#'+quantityTagID).val();
    <?php if( !empty($product->productSetting->is_auto_calculation_valid) ): ?>
    calcPrice();
    window.addEventListener('pageshow', function() {
        calcPrice();
    });
    $(document).on('click', '.number__button--plus, .number__button--minus', function(){
        calcPrice();
    });
    $(document).on('change', '#'+quantityTagID, function(){
        calcPrice();
    });
    function calcPrice() {
        let quantity = $('#'+quantityTagID).val();
        if( discountRates.length > 0 ) {
            let discountRate = 0;
            for( var i = 0; i < discountRates.length; i++ ) {
                if( discountRates[i].number_of_lower_limit <= quantity && discountRates[i].number_of_upper_limit >= quantity ) {
                    discountRate = discountRates[i].discount_rate;
                    break;
                }
            }
            discountRatePercentage = 100 - discountRate;
            //unitPrice = Math.round( Math.round(price * taxRateValue) * discountRatePercentage / 100);
            unitPrice = Math.round(price * discountRatePercentage / 100);
            totalPrice = unitPrice * quantity;
            totalPriceTax = Math.round(totalPrice * taxRateValue);
            //regularTotalPrice = Math.round(price * taxRateValue) * quantity;
            regularTotalPrice = price * quantity;
            //discountPrice = regularTotalPrice - totalPrice;
            discountPrice = Math.round((regularTotalPrice - totalPrice) * taxRateValue);
            $('#discount_rate').text(discountRate);
        } else {
            //unitPrice = Math.round(price * taxRateValue);
            unitPrice = price;
            totalPrice = unitPrice * quantity;
            totalPriceTax = Math.round(totalPrice * taxRateValue);
        }
        displayUnitPrice = String(unitPrice).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        displayTotalPrice = String(totalPrice).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        displayTotalPriceTax = String(totalPriceTax).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        $('#unit_price').text(displayUnitPrice);
        $('#total').text(displayTotalPrice);
        $('#total_tax').text(displayTotalPriceTax);
        $('#price').val(unitPrice);
        $('#total_value').val(totalPrice);
        $('#total_value_tax').val(totalPriceTax);
        $('#sipri').val('::'+unitPrice);
    }
    <?php endif; ?>
});

// リダイレクト
$(function () {
    <?php if( !empty($product->productSetting->is_color_valid) && !empty($product->productSetting->color_html_tag_id) ): ?>
    $('[name=<?php echo e($product->productSetting->color_html_tag_id); ?>]').on('change', function () {
        redirect();
    });
    <?php endif; ?>
    <?php if( !empty($product->productSetting->is_size_valid) && $product->productSetting->specify_size === \App\ValueObject\SizeType::SIZE_OF_NUMERIC ): ?>
    <?php if( !empty($product->productSetting->specification_size_numerical_html_tag_id) ): ?>
    $('[name=<?php echo e($product->productSetting->specification_size_numerical_html_tag_id); ?>]').on('change', function () {
        redirect();
    });
    <?php endif; ?>
    <?php endif; ?>
    <?php if( !empty($product->productSetting->is_size_valid) && $product->productSetting->specify_size === \App\ValueObject\SizeType::SIZE_OF_STRING): ?>
    <?php if( !empty($product->productSetting->specification_size_string_html_tag_id) ): ?>
    $('[name=<?php echo e($product->productSetting->specification_size_string_html_tag_id); ?>]').on('change', function () {
        redirect();
    });
    <?php endif; ?>
    <?php endif; ?>
    <?php if( !empty($product->productSetting->is_plate_thickness_valid) && !empty($product->productSetting->plate_thickness_html_tag_id) ): ?>
    $('[name=<?php echo e($product->productSetting->plate_thickness_html_tag_id); ?>]').on('change', function () {
        redirect();
    });
    <?php endif; ?>
    <?php if( !empty($product->productSetting->is_product_option_valid) ): ?>
    $('[name=<?php echo e($product->productOption->html_tag_name); ?>]').on('change', function () {
        redirect();
    });
    <?php endif; ?>

    <?php if( !empty($product->productSetting->is_quantity_valid) && !empty($product->productSetting->price_calculation_function) ): ?>
    <?php echo $product->productSetting->price_calculation_function; ?>

    $('[name=<?php echo e($product->productSetting->quantity_html_tag_id); ?>]').on('change', function () {
        <?php echo $product->productSetting->price_calculation_function; ?>

    });
    <?php endif; ?>

    <?php if( !empty($product->productSetting->is_quantity_valid) ): ?>
        <?php if( empty($product->productSetting->is_auto_calculation_valid) ): ?>
            // 自動計算処理がOFFの場合
            reflectFixedPrice();
            reflectUnitPrice();
            reflectTotalPrice();
            reflectTotalTaxPrice();
            $('[name=<?php echo e($product->productSetting->quantity_html_tag_id); ?>]').on('change', function () {
                reflectUnitPrice();
                reflectTotalPrice();
                reflectTotalTaxPrice();
                reflectDeliveryPrivatePrice();
                reflectDeliveryFarawayPrice();
            });
        <?php else: ?>
            // 自動計算処理がONの場合
            $('[name=<?php echo e($product->productSetting->quantity_html_tag_id); ?>]').on('change', function () {
                reflectDeliveryPrivatePrice();
                reflectDeliveryFarawayPrice();
            });
        <?php endif; ?>
    <?php endif; ?>

    reflectDeliveryPrivatePrice();
    reflectDeliveryFarawayPrice();
    $('#total').on('DOMSubtreeModified propertychange', function () {
        let total = $('#total').text();
        $('#total_value').val(total);
    });
    $('#total_tax').on('DOMSubtreeModified propertychange', function () {
        let total_tax = $('#total_tax').text();
        $('#total_value_tax').val(total_tax);
    });
    
    <?php if($product->productSetting->specify_size === \App\ValueObject\SizeType::SIZE_OF_FREE): ?>
    $('[name=<?php echo e($product->productSetting->free_input_width_html_tag_id); ?>]').on('change', function () {
        reflectUnitPrice();
        reflectTotalPrice();
        reflectTotalTaxPrice();
        reflectDeliveryPrivatePrice();
        reflectDeliveryFarawayPrice();
    });
    $('[name=<?php echo e($product->productSetting->free_input_height_html_tag_id); ?>]').on('change', function () {
        reflectUnitPrice();
        reflectTotalPrice();
        reflectTotalTaxPrice();
        reflectDeliveryPrivatePrice();
        reflectDeliveryFarawayPrice();
    });
    <?php if( !empty($product->productSetting->is_free_input_depth_valid) && !empty($product->productSetting->free_input_depth_html_tag_id) ): ?>
    $('[name=<?php echo e($product->productSetting->free_input_depth_html_tag_id); ?>]').on('change', function () {
        reflectUnitPrice();
        reflectTotalPrice();
        reflectTotalTaxPrice();
        reflectDeliveryPrivatePrice();
        reflectDeliveryFarawayPrice();
    });
    <?php endif; ?>
    <?php endif; ?>

    <?php if( !empty($product->productSetting->is_destination_valid) ): ?>
    $('[name=<?php echo e($product->productSetting->destination_html_tag_id); ?>]').on('change', function () {
        reflectUnitPrice();
        reflectTotalPrice();
        reflectTotalTaxPrice();
        reflectDeliveryPrivatePrice();
        reflectDeliveryFarawayPrice();
        souhu_info = document.getElementById("<?php echo e($product->productSetting->destination_html_tag_id); ?>");
        document.cookie = "souhu_info=" + encodeURI(souhu_info.value);
    });
    <?php endif; ?>
    <?php if($product->productSetting->specify_size === \App\ValueObject\SizeType::SIZE_OF_FREE): ?>
    $('[name=<?php echo e($product->productSetting->free_input_width_html_tag_id); ?>]').on('change', function () {
        width = document.getElementById("<?php echo e($product->productSetting->free_input_width_html_tag_id); ?>");
        document.cookie = "width=" + width.value;
    });
    $('[name=<?php echo e($product->productSetting->free_input_height_html_tag_id); ?>]').on('change', function () {
        height = document.getElementById("<?php echo e($product->productSetting->free_input_height_html_tag_id); ?>");
        document.cookie = "height=" + height.value;
    });
    <?php endif; ?>
    <?php if( !empty($product->productSetting->is_quantity_valid) ): ?>
    $('[name=<?php echo e($product->productSetting->quantity_html_tag_id); ?>]').on('change', function () {
        suu = document.getElementById("<?php echo e($product->productSetting->quantity_html_tag_id); ?>");
        document.cookie = "suu=" + suu.value;
    });
    <?php endif; ?>

    <?php if( !empty($product->productSetting->add_cart_function) ): ?>
    $(document).on('click', '#add_to_cart', function () {
        return <?php echo e($product->productSetting->add_cart_function); ?>

    });
    <?php endif; ?>

    // カート追加時のCookie削除
    $(document).on('click', '#add_to_cart', function () {
        cookieClear();
    });
});

// Cookie削除処理
function cookieClear() {
    document.cookie = "souhu_info=;";
    document.cookie = "width=;";
    document.cookie = "height=;";
    document.cookie = "suu=;";
}

function reflectTotalTaxPrice() {
    let totalTax = $('#total_value_tax').val();
    totalTax = Number(totalTax.replace(/,/g, ''));
    totalTax = String(totalTax).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    $('#total_tax').html(totalTax);
}

function reflectTotalPrice() {
    let total = $('#total_value').val();
    total = Number(total.replace(/,/g, ''));
    total = String(total).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    $('#total').html(total);
}

function reflectUnitPrice() {
    let unitPrice = $('#price').val();
    unitPrice = Number(unitPrice.replace(/,/g, ''));
    unitPrice = String(unitPrice).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    $('#unit_price').text(unitPrice);
}

function reflectFixedPrice() {
    let fixedPrice = $('#price').val();
    $('#fixed_price').text(fixedPrice);
    // $('#base_price').val(Number(fixedPrice.replace(/,/g, '')));
}

function reflectDeliveryPrivatePrice() {
<?php if( !empty($product->productSetting->delivery_private_price_html_tag_id) ): ?>
    let privatePrice = $('[name=<?php echo e($product->productSetting->delivery_private_price_html_tag_id); ?>]').val();
    $('#private_price').text(privatePrice);
<?php endif; ?>
}

function reflectDeliveryFarawayPrice() {
<?php if( !empty($product->productSetting->delivery_faraway_price_html_tag_id) ): ?>
    let farawayPrice = $('[name=<?php echo e($product->productSetting->delivery_faraway_price_html_tag_id); ?>]').val();
    $('#faraway_price').text(farawayPrice);
<?php endif; ?>
}

// 規格選択時のページ遷移処理
function redirect() {
    let redirectUrlArray = [];
<?php if( !empty($product->productSetting->is_color_valid) ): ?>
    if ($('[name=<?php echo e($product->productSetting->color_html_tag_id); ?>]').length) {
        let color = $('[name=<?php echo e($product->productSetting->color_html_tag_id); ?>] option:selected').data('id');
        if (color != '') {
            redirectUrlArray.push('color=' + color);
        }
    }
<?php endif; ?>
<?php if( !empty($product->productSetting->is_size_valid) ): ?>
    <?php if($product->productSetting->specify_size === \App\ValueObject\SizeType::SIZE_OF_NUMERIC ): ?>
    if ($('[name=<?php echo e($product->productSetting->specification_size_numerical_html_tag_id); ?>]').length) {
        let size = $('[name=<?php echo e($product->productSetting->specification_size_numerical_html_tag_id); ?>] option:selected').data('id');
        if (size != '') {
            redirectUrlArray.push('size=' + size);
        }
    }
    <?php endif; ?>
    <?php if($product->productSetting->specify_size === \App\ValueObject\SizeType::SIZE_OF_STRING): ?>
    if ($('[name=<?php echo e($product->productSetting->specification_size_string_html_tag_id); ?>]').length) {
        let size = $('[name=<?php echo e($product->productSetting->specification_size_string_html_tag_id); ?>] option:selected').data('id');
        if (size != '') {
            redirectUrlArray.push('size=' + size);
        }
    }
    <?php endif; ?>
<?php endif; ?>
<?php if( !empty($product->productSetting->is_plate_thickness_valid) ): ?>
    if ($('[name=<?php echo e($product->productSetting->plate_thickness_html_tag_id); ?>]').length) {
        let thickness = $('[name=<?php echo e($product->productSetting->plate_thickness_html_tag_id); ?>] option:selected').data('id');
        if (thickness != '') {
            redirectUrlArray.push('thickness=' + thickness);
        }
    }
<?php endif; ?>
<?php if( !empty($product->productSetting->is_product_option_valid) ): ?>
    if ($('[name=<?php echo e($product->productOption->html_tag_name); ?>]').length) {
        let option = $('[name=<?php echo e($product->productOption->html_tag_name); ?>] option:selected').data('id');
        if (option != '') {
            redirectUrlArray.push('option=' + option);
        }
    }
<?php endif; ?>
    let redirectUrl = '?' + redirectUrlArray.join('&');

    window.location.href = redirectUrl;
}<?php /**PATH /var/www/acry-ya.com85/resources/views/products/dynamic_js.blade.php ENDPATH**/ ?>