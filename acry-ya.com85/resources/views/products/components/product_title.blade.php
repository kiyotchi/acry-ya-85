                @if( !empty($product->product_code) )
                    <!-- 品番-->
                    <dl class="overview__productNumber">
                        <dt>品番：</dt>
                        <dd>{{ $product->product_code }}</dd>
                    </dl>
                @endif
                <!-- 商品名-->
                <h1 class="overview__title c-heading--sm">{{ $product->product_name }}</h1>
                <div class="semiorder-star-area"></div>
                @if( !empty($product->maker_name) )
                    <!-- メーカー-->
                    <dl class="overview__manufacturer">
                        <dt>メーカー：</dt>
                        <dd>{{ $product->maker_name }}</dd>
                    </dl>
                @endif
                @if( !empty($product->productFeatureTag) )
                    <!-- タグ-->
                    <div class="overview__tag">
                        @foreach($product->productFeatureTag as $tag)
                            <a class="tag__label c-label--md-black js-anchorScroll" href="#tagSection">{{ $tag->product_feature_tag_name }}</a>
                        @endforeach
                    </div>
                @endif
