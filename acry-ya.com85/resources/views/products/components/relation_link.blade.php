<!-- その他リンク-->
<div class="overview__relation">
    @if( !empty($product->productSetting->is_fax_order_valid) )
        <a class="c-button--sm-gray" onclick="fax_open()">FAXでの注文</a>
    @endif
    @isset($html_parts[\App\Services\HtmlPartService::PART_TYPE_ID_REPAIR_PART]->html_part)
        {!! $html_parts[\App\Services\HtmlPartService::PART_TYPE_ID_REPAIR_PART]->html_part !!}
    @endisset

    @if( !empty($parts_settings) && count($parts_settings) > 0 )
        <a href="{{ route('products.detail.parts', ['id'=>$product->product_id]) }}@if( !empty($request->size) )?size={{ $request->size }}@endif" target="_blank" id="parts_link" class="c-button--sm-gray">補修部品</a>
    @endif

    <a href="/faq/" target="_blank" class="c-button--sm-gray">よくある質問はこちら</a>
</div>
<!-- サポート-->
<div class="overview__support">
  <ul class="support__list c-list--sm-icon">
    <li class="list__item"><a href="/guide/order/" target="_blank"><i class="c-icon--triangle-r"></i>商品の注文について</a></li>
    <li class="list__item"><a href="/guide/payment/" target="_blank"><i class="c-icon--triangle-r"></i>お支払いについて</a></li>
    <li class="list__item"><a href="/guide/delivery/" target="_blank"><i class="c-icon--triangle-r"></i>配送・送料について</a></li>
    <li class="list__item"><a href="/guide/change/" target="_blank"><i class="c-icon--triangle-r"></i>注文の内容の変更、返品、交換について</a></li>
  </ul>
</div>
