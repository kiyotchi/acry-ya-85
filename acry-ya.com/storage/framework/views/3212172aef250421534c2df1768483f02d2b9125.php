<?php if( !empty($product->delivery_schedule_id) && isset($delivery_dates[$product->delivery_schedule_id]) ): ?>
    <dl class="order__item" id="delivery_schedule">
        <dt><a data-target="deliveryComment" class="c-label--md-meyasu js-modal__trigger--open">出荷目安</a>
          <div id="deliveryComment" class="c-window--md js-modal__content">
            <p class="c-heading--md">出荷目安について</p>
            <p>出荷目安は正式注文後、土日祝日と弊社休業日を除いた出荷の目安です。<br>数がまとまる場合は日数が異なります。<br>万が一の場合には予定通りに出荷出来なくなる場合がありますのでご了承の程お願い申し上げます。</p>
          </div>
        </dt>
        <dd><?php echo e($delivery_dates[$product->delivery_schedule_id]); ?></dd>
    </dl>
<?php endif; ?>
<dl class="order__item">
    <dt></dt>
    <dd id="delivery_supplementation_txt"></dd>
</dl>
<?php /**PATH /var/www/acry-ya.com/resources/views/products/components/delivery_schedule.blade.php ENDPATH**/ ?>