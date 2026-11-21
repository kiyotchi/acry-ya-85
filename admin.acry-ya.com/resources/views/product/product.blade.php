@extends('layouts.base')
@section('title', '編集 - 標準商品')
@section('breadcrumbs')
    @parent
    <li>編集 - 標準商品</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('script_head')
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        $(function () {
            // 利用項目設定の表示処理
            checkSetting(0);
            $('.setting-area [type=radio]').on('change', function () {
                checkSetting(100, this);
            });

            // 関連商品の表示処理
            checkRelatedProduct(0);
            $('.related-product [type=radio]').on('change', function () {
                checkRelatedProduct(100, this);
            });

            // 欠品のお知らせの表示処理
            checkSoldOutNotice(0);
            $('.sold-out-notice [type=radio]').on('change', function () {
                checkSoldOutNotice(100, this);
            });

            $('.html_parts_link').on('click', function () {
                let selectHtmlParts = $(this).prev('select').val();
                if (selectHtmlParts.length > 0) {
                    let openPageUrl = '{{ route('html.part.edit') }}/' + selectHtmlParts;
                    window.open(openPageUrl, 'html_part');
                }
            });

        });
        jQuery(function ($) {
            $("#relatedProductRowsAdd").on("click", function () {
                // コピー用のセレクトボックスをコピー
                $("#cloneRelatedProduct tbody tr:first-child").clone(true).appendTo("#relatedProductTable tbody").show();
                //
                let len = $("#relatedProductTable tbody").children().length;
                document.getElementById('related_product_id_length').value = len;
            });
            $(".btnDelete").on("click", function () {
                $(this).parent().parent().parent().remove();
                //
                let len = $("#relatedProductTable tbody").children().length;
                document.getElementById('related_product_id_length').value = len;
            });
        });

        /**
         * 利用項目設定の表示処理
         */
        function checkSetting(speed, target) {
            $('.setting-area [type=radio]:checked').each(function (index, element) {
                let checkValue = $(element).val();
                let checkName = $(element).attr('name');
                let targetName = $(target).attr('name');
                if (checkName == 'specify_size') {
                    if (typeof targetName == 'undefined' || targetName == 'specify_size') {
                        $(element).parent().parent().children('dd, dl').hide(speed);
                        $(element).parent().next('dd, dl').show(speed);
                    }
                } else {
                    if (checkValue == 1) {
                        $(element).parent().next('dd, dl').show(speed);
                    } else {
                        $(element).parent().next('dd, dl').hide(speed);
                    }
                }
            });
        }

        /**
         * 関連商品の表示処理
         */
        function checkRelatedProduct(speed, target) {
            $('.related-product [type=radio]:checked').each(function (index, element) {
                let checkValue = $(element).val();
                if (checkValue == 1) {
                    $(element).parent().next('div').show(speed);
                } else {
                    $(element).parent().next('div').hide(speed);
                }
            });
        }

        /**
         * 欠品のお知らせの表示処理
         */
        function checkSoldOutNotice(speed, target) {
            $('.sold-out-notice [type=radio]:checked').each(function (index, element) {
                let checkValue = $(element).val();
                if (checkValue == 1) {
                    $(element).parent().next('div').show(speed);
                } else {
                    $(element).parent().next('div').hide(speed);
                }
            });
        }

    </script>
@endsection
@section('content')
    <section class="edit" id="top">
        @isset($product)
            <div class="product-menu">
                <a href="{{route('option.setting', ['id' => $product->product_id])}}" class="btn">オプション設定</a>
                <a href="{{route('specification', ['id' => $product->product_id])}}" class="btn">規格詳細設定</a>
                <a href="{{route('repair.part.setting', ['id' => $product->product_id])}}" class="btn">補修部品設定</a>
                @if ($product->productSetting->is_color_valid == 1)
                    <a href="{{route('color.image.setting', ['id' => $product->product_id])}}" class="btn">カラー別画像設定</a>
                @endif
                @if ($product->productSetting->is_size_valid == 1)
                    <a href="{{route('size.image.setting', ['id' => $product->product_id])}}" class="btn">サイズ別画像設定</a>
                @endif
                @if ($product->productSetting->is_product_option_valid == 1)
                    <a href="{{route('option.image.setting', ['id' => $product->product_id])}}"
                       class="btn">オプション別画像設定</a>
                @endif
            </div>
        @endisset
        @if (session('complete_message'))
            <div class="complete_message">
                <ul>
                    <li>{{ session('complete_message') }}</li>
                </ul>
            </div>
        @endif
        @if(session('application_error_message'))
            <div class="attention">
                <ul>
                    <li>{{session('application_error_message')}}</li>
                </ul>
            </div>
        @endif

        @isset($product)
            {!! Form::open(['method' => 'POST', 'route'=>array('product.standard.update', $product->product_id), "enctype"=>"multipart/form-data"]) !!}
        @else
            {!! Form::open(['method' => 'POST', 'route'=>'product.standard.register', "enctype"=>"multipart/form-data"]) !!}
        @endisset

        <dl>
            @isset($product)
                <dt>ページURL</dt>
                <dd>
                    <a href={{env('SITE_URL') . '/products/detail/' . $product->product_id . '/'}} target="_blank">{{env('SITE_URL') . '/products/detail/' . $product->product_id . '/'}}</a>
                </dd>
            @endisset

            <dt class="required">商品表示設定</dt>
            <dd>
                {!! Form::radio('is_display', 1, isset($product->is_display) ? $product->is_display === 1 : 1, array('id'=>'product_display')) !!}
                {!! Form::label('product_display', '表示する') !!}
                {!! Form::radio('is_display', 0, isset($product->is_display) ? $product->is_display === 0 : 0, array('id'=>'product_not_display')) !!}
                {!! Form::label('product_not_display', '表示しない') !!}
                @if ($errors->first('is_display'))
                    <div class="validate">{{$errors->first('is_display')}}</div>
                @endif
            </dd>

            <dt>表示順</dt>
            <dd>
                {!! Form::text('display_order', old('display_order', isset($product->display_order) ? $product->display_order : null), ['class'=>'numeric']) !!}
                @if ($errors->first('display_order'))
                    <div class="validate">{{$errors->first('display_order')}}</div>
                @endif
            </dd>

            <dt>商品コード</dt>
            <dd>
                {!! Form::text('product_code', old('product_code', isset($product->product_code) ? $product->product_code : null)) !!}
                @if ($errors->first('product_code'))
                    <div class="validate">{{$errors->first('product_code')}}</div>
                @endif
            </dd>

            <dt class="required">商品名</dt>
            <dd>
                {!! Form::text('product_name', old('product_name', isset($product->product_name) ? $product->product_name : null)) !!}
                @if ($errors->first('product_name'))
                    <div class="validate">{{$errors->first('product_name')}}</div>
                @endif
            </dd>

            <dt>カート内表示用商品名</dt>
            <dd>
                {!! Form::text('product_name_displayed_cart',
                    old('product_name_displayed_cart', isset($product->product_name_displayed_cart) ? $product->product_name_displayed_cart : null)) !!}
            </dd>

            <dt class="required">商品カテゴリー</dt>
            <dd>
                {!! Form::select(
                    'product_category_id',
                    array_pluck($product_categories, 'product_category_name', 'product_category_id'),
                    old('product_category_id', isset($product->product_category_id) ? $product->product_category_id : null),
                    ['placeholder' => '選択してください']
                )!!}
                @if ($errors->first('product_category_id'))
                    <div class="validate">{{$errors->first('product_category_id')}}</div>
                @endif
            </dd>

            <dt>タグ</dt>
            <dd>
                {!! Form::text('product_tag', old('product_tag', isset($product_tag) ? $product_tag : null)) !!}
            </dd>

            <dt>メーカー名</dt>
            <dd>
                {!! Form::text('maker_name', old('maker_name', isset($product->maker_name) ? $product->maker_name : null)) !!}
            </dd>

            <dt class="required">商品概要</dt>
            <dd>
                {!! Form::textarea('product_summary', old('product_summary', isset($product->product_summary) ? $product->product_summary : null), ['rows'=>5]) !!}
                @if ($errors->first('product_summary'))
                    <div class="validate">{{$errors->first('product_summary')}}</div>
                @endif
            </dd>

            <dt>定価</dt>
            <dd>
                {!! Form::text('price', old('price', isset($product->price) ? $product->price : null), ['class'=>'numeric']) !!}
                @if ($errors->first('price'))
                    <div class="validate">{{$errors->first('price')}}</div>
                @endif
            </dd>

            <dt>割引率</dt>
            <dd>
                {!! Form::select(
                    'discount_rate_id',
                    array_pluck($discount_rates, 'discount_rate_title', 'discount_rate_id'),
                    old('discount_rate_id', isset($product->discount_rate_id) ? $product->discount_rate_id : null),
                    ['placeholder' => '選択してください']
                ) !!}
            </dd>

            <dt>出荷目安</dt>
            <dd>
                {!! Form::select(
                    'delivery_schedule_id',
                    $deliveries,
                    old('delivery_schedule_id', isset($product->delivery_schedule_id) ? $product->delivery_schedule_id : null),
                    ['placeholder' => '選択してください']
                ) !!}
            </dd>

            <dt>検索ワード</dt>
            <dd>
                {!! Form::textarea('delivery_supplementations', old('delivery_supplementations', isset($product->delivery_supplementations) ? $product->delivery_supplementations : null), ['id'=>'delivery_supplementations', 'rows'=>5]) !!}
            </dd>

            <h4 id="hl_image">画像設定</h4>
            <dt >画像追加・編集</dt>
            <dd class="imageadd">
              <p>
                <button type="button" class="image-selector mgt10"
                        data-target="delivery_supplementations"
                        data-type="html">画像追加・編集
                </button>
              </p>
            </dd>

            <dt class="required">サムネイル画像</dt>
            <dd class="thumbnail" id="thumbnail">
                <div>
                    @isset($product->thumbnailPicture)
                        <img src="{{ $product->thumbnailPicture->picture_url }}"/>
                    @else
                        <img src="{{ url('/') }}/assets/images/noimage.png"/>
                    @endisset
                    {!! Form::hidden('picture_id', isset($product->picture_id) ? $product->picture_id : null, ['class'=>'picture_id']) !!}
                </div>
                <button type="button" class="image-selector" data-target="thumbnail">選択</button>

                @isset($product->thumbnailPicture)
                    <button type="button" class="image-clear" data-target="thumbnail">クリア</button>
                    <div class="image-url">画像URL<span class="url">{{ $product->thumbnailPicture->picture_url }}</span>
                    </div>
                @endisset

                @if ($errors->first('picture_id'))
                    <div class="validate">{{$errors->first('picture_id')}}</div>
                @endif
            </dd>

            @isset($product->productSpecificationDetailIndividual)
                @if(count($product->productSpecificationDetailIndividual) > 0)
                    <dt>商品写真優先設定</dt>
                    <dd>
                        {!! Form::radio('picture_priority', 0, isset($product->productSetting->picture_priority) ? $product->productSetting->picture_priority === 0 : 1, array('id'=>'not_set')) !!}
                        {!! Form::label('not_set', '未設定') !!}

                        {!! Form::radio('picture_priority', 1, isset($product->productSetting->picture_priority) ? $product->productSetting->picture_priority === 1 : 0, array('id'=>'set_color')) !!}
                        {!! Form::label('set_color', 'カラー別画像') !!}

                        {!! Form::radio('picture_priority', 2, isset($product->productSetting->picture_priority) ? $product->productSetting->picture_priority === 2 : 0, array('id'=>'set_size')) !!}
                        {!! Form::label('set_size', 'サイズ別画像') !!}

                        {!! Form::radio('picture_priority', 3, isset($product->productSetting->picture_priority) ? $product->productSetting->picture_priority === 3 : 0, array('id'=>'set_option')) !!}
                        {!! Form::label('set_option', 'オプション別画像') !!}
                    </dd>
                @endif
            @endisset

            <dt class="ogp">OGP画像</dt>
            <dd class="image-list" id="ogp_picture">
                <div class="product_img_content" id="ogp">
                    <?php
                        $ogp = [];
                        if (!empty($product)) {
                            $ogp = $product->ogpPicture;
                        }
                    ?>
                    <div class="head">OGP画像(デフォルト)</div>
                    <div class="body">
                        <div class="left">
                            <img src="{{ data_get($ogp, 'url', url('/assets/images/noimage.png')) }}" class="img_product_img" id="ogp_img">
                        </div>
                        <div class="right">
                            <div>
                                <button type="button" class="image-selector" data-target="ogp">選択 </button>
                                <button type="button" class="image-clear" data-target="ogp">クリア </button>
                                <div class="image-url">
                                    画像URL<span class="url">{{ data_get($ogp, 'url') }}</span>
                                </div>
                            </div>
                            <input type="hidden" name="ogp" class="picture_id" value="{{ data_get($ogp, 'picture_id') }}" >
                        </div>
                    </div>
                </div>

                <div class="product_img_content" id="twitter">
                    <?php
                        $ogp = [];
                        if (!empty($product)) {
                            $ogp = $product->twitterCard;
                        }
                    ?>
                    <div class="head">ツイッターカード</div>
                    <div class="body">
                        <div class="left">
                            <img src="{{ data_get($ogp, 'url', url('/assets/images/noimage.png')) }}" class="img_product_img" id="twitter_img">
                        </div>
                        <div class="right">
                            <div>
                                <button type="button" class="image-selector" data-target="twitter">選択 </button>
                                <button type="button" class="image-clear" data-target="twitter">クリア </button>
                                <div class="image-url">
                                    画像URL<span class="url">{{ data_get($ogp, 'url') }}</span>
                                </div>
                            </div>
                            <input type="hidden" name="twitter" class="picture_id" value="{{ data_get($ogp, 'picture_id') }}" >
                        </div>
                    </div>
                </div>
            </dd>

            <dt>商品写真</dt>
            <dd class="image-list">
                @for ($i = 0; $i < 7; $i++)
                    <div class="product_img_content" id="product_img_{{ $i }}">
                        <div class="head">商品画像{{$i+1}}</div>
                        <div class="body">
                            <?php $empty = true; ?>
                            @isset($product)
                                @foreach ($product->picture as $picture)
                                    @if ($picture->pivot["display_order"] === $i)
                                        <div class="left">
                                            <img id="product_img_{{$i}}"
                                                 class="img_product_img"
                                                 src="{{ $picture->picture_url }}"/>
                                        </div>
                                        <div class="right">
                                            <div>
                                                <button type="button" class="image-selector"
                                                        data-target="product_img_{{ $i }}">選択
                                                </button>
                                                <button type="button" class="image-clear"
                                                        data-target="product_img_{{ $i }}">クリア
                                                </button>
                                                <div class="image-url">画像URL<span
                                                            class="url">{{ $picture->picture_url }}</span></div>
                                            </div>
                                            <div class="field_head">説明文</div>
                                            <div>{!! Form::text('description_' . $i, old('description_' . $i, $picture->pivot["description"])) !!}</div>
                                            {!! Form::hidden('picture_id_' . $i, $picture->picture_id, ['class'=>'picture_id']) !!}
                                        </div>
                                        <?php $empty = false; break; ?>
                                    @endif
                                @endforeach
                            @endisset
                            @if ($empty === true)
                                <div class="left">
                                    <img id="product_img_{{$i}}" class="img_product_img"
                                         src="{{ url('/') }}/assets/images/noimage.png"/>
                                </div>
                                <div class="right">
                                    <div>
                                        <button type="button" class="image-selector" data-target="product_img_{{ $i }}">
                                            選択
                                        </button>
                                        <button type="button" class="image-clear" data-target="product_img_{{ $i }}">
                                            クリア
                                        </button>
                                        <div class="image-url">画像URL<span class="url"></span></div>
                                    </div>
                                    <div class="field_head">説明文</div>
                                    <div>{!! Form::text('description_' . $i, old('description_' . $i)) !!}</div>
                                </div>

                                {!! Form::hidden('picture_id_' . $i, null, ['class'=>'picture_id']) !!}
                            @endif
                        </div>
                    </div>
                @endfor
            </dd>

            <h4 id="hl_input">入力項目設定</h4>

            <dt>HTMLタグ設定</dt>
            <dd class="setting-area clearfix">
                <dl>
                    <dt>Form HTMLタグID：</dt>
                    <dd>
                        {!! Form::text('form_html_tag_id',  old('form_html_tag_id', isset($product->productSetting->form_html_tag_id) ? $product->productSetting->form_html_tag_id : null)) !!}
                    </dd>
                    <dt>カート追加時関数：</dt>
                    <dd>
                        {!! Form::text('add_cart_function',  old('add_cart_function', isset($product->productSetting->add_cart_function) ? $product->productSetting->add_cart_function : null)) !!}
                    </dd>
                    <dt>カート用パラメータ数：</dt>
                    <dd>
                        {!! Form::text('cart_parameter_quantity',  old('cart_parameter_quantity', isset($product->productSetting->cart_parameter_quantity) ? $product->productSetting->cart_parameter_quantity : null), ['class'=>'numeric']) !!}
                    </dd>
                </dl>
            </dd>

            <dt>利用項目設定</dt>
            <dd class="setting-area clearfix">
                <dl>
                    <dt>カラー</dt>
                    <dd>
                        {!! Form::radio('is_color_valid', 1, isset($product->productSetting->is_color_valid) ? $product->productSetting->is_color_valid === 1 : 1, array('id'=>'color_valid')) !!}
                        {!! Form::label('color_valid', '有効') !!}
                        {!! Form::radio('is_color_valid', 0, isset($product->productSetting->is_color_valid) ? $product->productSetting->is_color_valid === 0 : 0, array('id'=>'color_invalid')) !!}
                        {!! Form::label('color_invalid', '無効') !!}
                    </dd>
                    <dd>
                        <dl>
                            <dt>カラーグループ名：</dt>
                            <dd>
                                {!! Form::select(
                                    'color_group_id',
                                    array_pluck($color_groups, 'color_group_name', 'color_group_id'),
                                    old('color_group_id', isset($product->productSetting->color_group_id) ? $product->productSetting->color_group_id : null),
                                    ['placeholder' => '選択してください']
                                ) !!}
                            </dd>
                            <dt>表示項目名：</dt>
                            <dd>
                                {!! Form::text('color_display_name', old('color_display_name', isset($product->productSetting->color_display_name) ? $product->productSetting->color_display_name : null)) !!}
                            </dd>
                            <dt>HTMLタグID：</dt>
                            <dd>
                                {!! Form::text('color_html_tag_id', old('color_html_tag_id', isset($product->productSetting->color_html_tag_id) ? $product->productSetting->color_html_tag_id : null)) !!}
                            </dd>
                        </dl>
                    </dd>
                    <dt>サイズ</dt>
                    <dd>
                        {!! Form::radio('is_size_valid', 1, isset($product->productSetting->is_size_valid) ? $product->productSetting->is_size_valid === 1 : 1, array('id'=>'size_valid')) !!}
                        {!! Form::label('size_valid', '有効') !!}
                        {!! Form::radio('is_size_valid', 0, isset($product->productSetting->is_size_valid) ? $product->productSetting->is_size_valid === 0 : 0, array('id'=>'size_invalid')) !!}
                        {!! Form::label('size_invalid', '無効') !!}
                    </dd>
                    <dd>
                        <dl>
                            <dt>サイズ指定方法：</dt>
                            <dd>
                                <!-- 規格サイズ(数値) -->
                                <div>
                                    {!! Form::radio('specify_size', 1, isset($product->productSetting->specify_size) ? $product->productSetting->specify_size === 1 : 1, array('id'=>'specify_size_number')) !!}
                                    {!! Form::label('specify_size_number', '規格サイズ(数値)') !!}
                                </div>
                                <dl>
                                    <dt>表示項目名：</dt>
                                    <dd>
                                        {!! Form::text('specification_size_numerical_display', old('specification_size_numerical_display', isset($product->productSetting->specification_size_numerical_display) ? $product->productSetting->specification_size_numerical_display : null)) !!}
                                    </dd>
                                    <dt>HTMLタグID：</dt>
                                    <dd>
                                        {!! Form::text('specification_size_numerical_html_tag_id',  old('specification_size_numerical_html_tag_id', isset($product->productSetting->specification_size_numerical_html_tag_id) ? $product->productSetting->specification_size_numerical_html_tag_id : null)) !!}
                                    </dd>
                                    <dt>縦横合計値制限：</dt>
                                    <dd>
                                        {!! Form::text('specification_size_numerical_wh_limit', old('specification_size_numerical_wh_limit', isset($product->productSetting->specification_size_numerical_wh_limit) ? $product->productSetting->specification_size_numerical_wh_limit : null), ['class'=>'numeric']) !!}
                                        @if ($errors->first('specification_size_numerical_wh_limit'))
                                            <div class="validate">{{$errors->first('specification_size_numerical_wh_limit')}}</div>
                                        @endif
                                    </dd>
                                    <dt>サイズグループ名：</dt>
                                    <dd>
                                        {!! Form::select(
                                            'size_group_id_of_number',
                                            $size_groups_of_number,
                                            old('size_group_id_of_number', isset($product->productSetting->size_group_id) ? $product->productSetting->size_group_id : null),
                                            ['placeholder' => '選択してください']
                                        ) !!}
                                    </dd>
                                </dl>
                                <!-- 規格サイズ(文字列) -->
                                <div>
                                    {!! Form::radio('specify_size', 2, isset($product->productSetting->specify_size) ? $product->productSetting->specify_size === 2 : 0, array('id'=>'specify_size_string')) !!}
                                    {!! Form::label('specify_size_string', '規格サイズ（文字列)') !!}
                                </div>
                                <dl>
                                    <dt>表示項目名：</dt>
                                    <dd>
                                        {!! Form::text('specification_size_string_display', old('specification_size_string_display', isset($product->productSetting->specification_size_string_display) ? $product->productSetting->specification_size_string_display : null)) !!}
                                    </dd>
                                    <dt>HTMLタグID：</dt>
                                    <dd>
                                        {!! Form::text('specification_size_string_html_tag_id',  old('specification_size_string_html_tag_id', isset($product->productSetting->specification_size_string_html_tag_id) ? $product->productSetting->specification_size_string_html_tag_id : null)) !!}
                                    </dd>
                                    <dt>サイズグループ名：</dt>
                                    <dd>
                                        {!! Form::select(
                                            'size_group_id_of_string',
                                            $size_groups_of_string,
                                            old('size_group_id_of_string', isset($product->productSetting->size_group_id) ? $product->productSetting->size_group_id : null),
                                            ['placeholder' => '選択してください']
                                        ) !!}
                                    </dd>
                                </dl>
                                <!-- 自由入力 -->
                                <div>
                                    {!! Form::radio('specify_size', 3, isset($product->productSetting->specify_size) ? $product->productSetting->specify_size === 3 : 0, array('id'=>'specify_size_free')) !!}
                                    {!! Form::label('specify_size_free', '自由入力') !!}
                                </div>
                                <dl>
                                    <dt>横サイズ</dt>
                                    <dd>
                                        <dl>
                                            <dt>表示項目名：</dt>
                                            <dd>
                                                {!! Form::text('free_input_width_display', old('free_input_width_display', isset($product->productSetting->free_input_width_display) ? $product->productSetting->free_input_width_display : null)) !!}
                                            </dd>
                                            <dt>HTMLタグID：</dt>
                                            <dd>
                                                {!! Form::text('free_input_width_html_tag_id',  old('free_input_width_html_tag_id', isset($product->productSetting->free_input_width_html_tag_id) ? $product->productSetting->free_input_width_html_tag_id : null)) !!}
                                            </dd>
                                        </dl>
                                    </dd>
                                    <dt>縦サイズ</dt>
                                    <dd>
                                        <dl>
                                            <dt>表示項目名：</dt>
                                            <dd>
                                                {!! Form::text('free_input_height_display', old('free_input_height_display', isset($product->productSetting->free_input_height_display) ? $product->productSetting->free_input_height_display : null)) !!}
                                            </dd>
                                            <dt>HTMLタグID：</dt>
                                            <dd>
                                                {!! Form::text('free_input_height_html_tag_id', old('free_input_height_html_tag_id', isset($product->productSetting->free_input_height_html_tag_id) ? $product->productSetting->free_input_height_html_tag_id : null)) !!}
                                            </dd>
                                        </dl>
                                    </dd>
                                    <dt>奥サイズ</dt>
                                    <dd>
                                        <div>
                                            {!! Form::radio('is_free_input_depth_valid', 1, isset($product->productSetting->is_free_input_depth_valid) ? $product->productSetting->is_free_input_depth_valid === 1 : 1, array('id'=>'depth_valid')) !!}
                                            {!! Form::label('depth_valid', '有効') !!}
                                            {!! Form::radio('is_free_input_depth_valid', 0, isset($product->productSetting->is_free_input_depth_valid) ? $product->productSetting->is_free_input_depth_valid === 0 : 0, array('id'=>'depth_invalid')) !!}
                                            {!! Form::label('depth_invalid', '無効') !!}
                                        </div>
                                        <dl>
                                            <dt>表示項目名：</dt>
                                            <dd>
                                                {!! Form::text('free_input_depth_display', old('free_input_depth_display', isset($product->productSetting->free_input_depth_display) ? $product->productSetting->free_input_depth_display : null)) !!}
                                            </dd>
                                            <dt>HTMLタグID：</dt>
                                            <dd>
                                                {!! Form::text('free_input_depth_html_tag_id', old('free_input_depth_html_tag_id', isset($product->productSetting->free_input_depth_html_tag_id) ? $product->productSetting->free_input_depth_html_tag_id : null)) !!}
                                            </dd>
                                        </dl>
                                    </dd>
                                    <dt>縦横合計値制限：</dt>
                                    <dd>
                                        {!! Form::text('free_input_wdh_limit', old('free_input_wdh_limit', isset($product->productSetting->free_input_wdh_limit) ? $product->productSetting->free_input_wdh_limit : null), ['class'=>'numeric']) !!}
                                    </dd>
                                </dl>
                            </dd>
                        </dl>
                    </dd>
                    <dt>板厚</dt>
                    <dd>
                        {!! Form::radio('is_plate_thickness_valid', 1, isset($product->productSetting->is_plate_thickness_valid) ? $product->productSetting->is_plate_thickness_valid === 1 : 1, array('id'=>'plate_thickness_valid')) !!}
                        {!! Form::label('plate_thickness_valid', '有効') !!}
                        {!! Form::radio('is_plate_thickness_valid', 0, isset($product->productSetting->is_plate_thickness_valid) ? $product->productSetting->is_plate_thickness_valid === 0 : 0, array('id'=>'plate_thickness_invalid')) !!}
                        {!! Form::label('plate_thickness_invalid', '無効') !!}
                    </dd>
                    <dd>
                        <dl>
                            <dt>表示項目名：</dt>
                            <dd>
                                {!! Form::text('plate_thickness_display', old('plate_thickness_display', isset($product->productSetting->plate_thickness_display) ? $product->productSetting->plate_thickness_display : null)) !!}
                            </dd>
                            <dt>HTMLタグID：</dt>
                            <dd>
                                {!! Form::text('plate_thickness_html_tag_id', old('plate_thickness_html_tag_id', isset($product->productSetting->plate_thickness_html_tag_id) ? $product->productSetting->plate_thickness_html_tag_id : null)) !!}
                            </dd>
                        </dl>
                    </dd>
                    <dt>商品オプション</dt>
                    <dd>
                        {!! Form::radio('is_product_option_valid', 1, isset($product->productSetting->is_product_option_valid) ? $product->productSetting->is_product_option_valid === 1 : 1, array('id'=>'product_option_valid')) !!}
                        {!! Form::label('product_option_valid', '有効') !!}
                        {!! Form::radio('is_product_option_valid', 0, isset($product->productSetting->is_product_option_valid) ? $product->productSetting->is_product_option_valid === 0 : 0, array('id'=>'product_option_invalid')) !!}
                        {!! Form::label('product_option_invalid', '無効') !!}
                    </dd>
                    <dt>届先</dt>
                    <dd>
                        {!! Form::radio('is_destination_valid', 1, isset($product->productSetting->is_destination_valid) ? $product->productSetting->is_destination_valid === 1 : 1, array('id'=>'destination_valid')) !!}
                        {!! Form::label('destination_valid', '有効') !!}
                        {!! Form::radio('is_destination_valid', 0, isset($product->productSetting->is_destination_valid) ? $product->productSetting->is_destination_valid === 0 : 0, array('id'=>'destination_invalid')) !!}
                        {!! Form::label('destination_invalid', '無効') !!}
                    </dd>
                    <dd>
                        <dl>
                            <dt>HTMLタグID：</dt>
                            <dd>
                                {!! Form::text('destination_html_tag_id', old('destination_html_tag_id', isset($product->productSetting->destination_html_tag_id) ? $product->productSetting->destination_html_tag_id : null)) !!}
                            </dd>
                        </dl>
                    </dd>
                    <dd>
                        <dl>
                            <dt>初期表示</dt>
                            <dd>
                                {!! Form::radio('destination_initial', 1, isset($product->productSetting->destination_initial) ? $product->productSetting->destination_initial === 1 : 1, array('id'=>'private')) !!}
                                {!! Form::label('private', '個人') !!}
                                {!! Form::radio('destination_initial', 2, isset($product->productSetting->destination_initial) ? $product->productSetting->destination_initial === 2 : 0, array('id'=>'corporate')) !!}
                                {!! Form::label('corporate', '法人') !!}
                            </dd>
                        </dl>
                    </dd>
                    <dd>
                    <dt>数量</dt>
                    <dd>
                        {!! Form::radio('is_quantity_valid', 1, isset($product->productSetting->is_quantity_valid) ? $product->productSetting->is_quantity_valid === 1 : 1, array('id'=>'quantity_valid')) !!}
                        {!! Form::label('quantity_valid', '有効') !!}
                        {!! Form::radio('is_quantity_valid', 0, isset($product->productSetting->is_quantity_valid) ? $product->productSetting->is_quantity_valid === 0 : 0, array('id'=>'quantity_invalid')) !!}
                        {!! Form::label('quantity_invalid', '無効') !!}
                    </dd>
                    <dd>
                        <dl>
                            <dt>HTMLタグID：</dt>
                            <dd>
                                {!! Form::text('quantity_html_tag_id', old('quantity_html_tag_id', isset($product->productSetting->quantity_html_tag_id) ? $product->productSetting->quantity_html_tag_id : null)) !!}
                            </dd>
                            <dt>金額計算関数：</dt>
                            <dd>
                                {!! Form::text('price_calculation_function', old('price_calculation_function', isset($product->productSetting->price_calculation_function) ? $product->productSetting->price_calculation_function : null)) !!}
                            </dd>
                        </dl>
                    </dd>
                    <dt>在庫数</dt>
                    <dd>
                        {!! Form::radio('is_stock_valid', 1, isset($product->productSetting->is_stock_valid) ? $product->productSetting->is_stock_valid === 1 : 1, array('id'=>'stock_valid')) !!}
                        {!! Form::label('stock_valid', '有効') !!}
                        {!! Form::radio('is_stock_valid', 0, isset($product->productSetting->is_stock_valid) ? $product->productSetting->is_stock_valid === 0 : 0, array('id'=>'stock_invalid')) !!}
                        {!! Form::label('stock_invalid', '無効') !!}
                    </dd>
                    <dd>
                        <dl>
                            <dt>HTMLタグID：</dt>
                            <dd>
                                {!! Form::text('stock_html_tag_id', old('stock_html_tag_id', isset($product->productSetting->stock_html_tag_id) ? $product->productSetting->stock_html_tag_id : null)) !!}
                            </dd>
                        </dl>
                    </dd>
                    <dt>遠方配送料</dt>
                    <dd>
                        {!! Form::radio('is_delivery_charge_valid', 1, isset($product->productSetting->is_delivery_charge_valid) ? $product->productSetting->is_delivery_charge_valid === 1 : 1, array('id'=>'delivery_charge_valid')) !!}
                        {!! Form::label('delivery_charge_valid', '有効') !!}
                        {!! Form::radio('is_delivery_charge_valid', 0, isset($product->productSetting->is_delivery_charge_valid) ? $product->productSetting->is_delivery_charge_valid === 0 : 0, array('id'=>'delivery_charge_invalid')) !!}
                        {!! Form::label('delivery_charge_invalid', '無効') !!}
                    </dd>
                    <dd>
                        <dl>
                            <dt>個人宅配送料：</dt>
                            <dd>
                                <dl>
                                    <dt>HTMLタグID：</dt>
                                    <dd>
                                        {!! Form::text('delivery_private_html_tag_id', old('delivery_private_html_tag_id', isset($product->productSetting->delivery_private_html_tag_id) ? $product->productSetting->delivery_private_html_tag_id : null)) !!}
                                    </dd>
                                    <dt>タグID（金額）：</dt>
                                    <dd>
                                        {!! Form::text('delivery_private_price_html_tag_id', old('delivery_private_price_html_tag_id', isset($product->productSetting->delivery_private_price_html_tag_id) ? $product->productSetting->delivery_private_price_html_tag_id : null)) !!}
                                    </dd>
                                </dl>
                            </dd>
                        </dl>
                        <dl>
                            <dt>遠方配送料：</dt>
                            <dd>
                                <dl>
                                    <dt>HTMLタグID：</dt>
                                    <dd>
                                        {!! Form::text('delivery_faraway_html_tag_id', old('delivery_faraway_html_tag_id', isset($product->productSetting->delivery_faraway_html_tag_id) ? $product->productSetting->delivery_faraway_html_tag_id : null)) !!}
                                    </dd>
                                    <dt>タグID（金額）：</dt>
                                    <dd>
                                        {!! Form::text('delivery_faraway_price_html_tag_id', old('delivery_faraway_price_html_tag_id', isset($product->productSetting->delivery_faraway_price_html_tag_id) ? $product->productSetting->delivery_faraway_price_html_tag_id : null)) !!}
                                    </dd>
                                </dl>
                            </dd>
                        </dl>
                    </dd>
                    <dt>大型便</dt>
                    <dd>
                        {!! Form::radio('is_large_delivery_valid', 1, isset($product->productSetting->is_large_delivery_valid) ? $product->productSetting->is_large_delivery_valid === 1 : 1, array('id'=>'large_delivery_valid')) !!}
                        {!! Form::label('large_delivery_valid', "有効") !!}
                        {!! Form::radio('is_large_delivery_valid', 0, isset($product->productSetting->is_large_delivery_valid) ? $product->productSetting->is_large_delivery_valid === 0 : 0, array('id'=>'large_delivery_invalid')) !!}
                        {!! Form::label('large_delivery_invalid', "無効") !!}
                    </dd>
                    <dd>
                        <dl>
                            <dt>HTMLタグID：</dt>
                            <dd>
                                {!! Form::text('large_delivery_html_tag_id', old('large_delivery_html_tag_id', isset($product->productSetting->large_delivery_html_tag_id) ? $product->productSetting->large_delivery_html_tag_id : null)) !!}
                            </dd>
                        </dl>
                    </dd>
                    <dt>FAX注文</dt>
                    <dd>
                        {!! Form::radio('is_fax_order_valid', 1, isset($product->productSetting->is_fax_order_valid) ? $product->productSetting->is_fax_order_valid === 1 : 1, array('id'=>'fax_valid')) !!}
                        {!! Form::label('fax_valid', "有効") !!}
                        {!! Form::radio('is_fax_order_valid', 0, isset($product->productSetting->is_fax_order_valid) ? $product->productSetting->is_fax_order_valid === 0 : 0, array('id'=>'fax_invalid')) !!}
                        {!! Form::label('fax_invalid', "無効") !!}
                    </dd>
                    <dt>金額自動計算</dt>
                    <dd>
                        {!! Form::radio('is_auto_calculation_valid', 1, isset($product->productSetting->is_auto_calculation_valid) ? $product->productSetting->is_auto_calculation_valid === 1 : 1, array('id'=>'auto_calculation_valid')) !!}
                        {!! Form::label('auto_calculation_valid', "有効") !!}
                        {!! Form::radio('is_auto_calculation_valid', 0, isset($product->productSetting->is_auto_calculation_valid) ? $product->productSetting->is_auto_calculation_valid === 0 : 0, array('id'=>'auto_calculation_invalid')) !!}
                        {!! Form::label('auto_calculation_invalid', "無効") !!}
                    </dd>
                </dl>
            </dd>
            <!-- -->
            <h4 id="hl_html">HTMLパーツ設定</h4>

            <dt>headタグ追加HTML</dt>
            <dd>
                {!! Form::select(
                        'add_head_tag_html_part_id',
                        array_pluck(array_sort($add_head_tags, function ($value) {return $value['part_title'];
                        }), 'part_title', 'product_html_part_id'),
                        old('add_head_tag_html_part_id', isset($html_part_selected_ids[10]) ? $html_part_selected_ids[10] : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>

            <dt>商品情報選択項目 追加設定</dt>
            <dd>
                {!! Form::select(
                        'product_add_information_html_part_id',
                        array_pluck(array_sort($product_add_informations, function ($value) {return $value['part_title'];
                        }), 'part_title', 'product_html_part_id'),
                        old('product_add_information_html_part_id', isset($html_part_selected_ids[1]) ? $html_part_selected_ids[1] : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>

            <dt>商品特徴</dt>
            <dd>
                {!! Form::select(
                        'product_feature_html_part_id',
                        array_pluck(array_sort($product_features, function ($value) {return $value['part_title'];
                        }), 'part_title', 'product_html_part_id'),
                        old('product_feature_html_part_id', isset($html_part_selected_ids[2]) ? $html_part_selected_ids[2] : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>

            <dt>商品仕様</dt>
            <dd>
                {!! Form::select(
                        'product_specification_html_part_id',
                        array_pluck(array_sort($product_specifications, function ($value) {return $value['part_title'];
                        }), 'part_title', 'product_html_part_id'),
                        old('product_specification_html_part_id', isset($html_part_selected_ids[4]) ? $html_part_selected_ids[4] : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>

            <dt>注意事項</dt>
            <dd>
                {!! Form::select(
                        'product_precaution_html_part_id',
                        array_pluck(array_sort($product_precautions, function ($value) {return $value['part_title'];
                        }), 'part_title', 'product_html_part_id'),
                        old('product_precaution_html_part_id', isset($html_part_selected_ids[5]) ? $html_part_selected_ids[5] : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>

            <dt>メーカー欠品情報</dt>
            <dd>
                {!! Form::select(
                        'maker_sold_out_html_part_id',
                        array_pluck(array_sort($maker_sold_outs, function ($value) {return $value['part_title'];
                        }), 'part_title', 'product_html_part_id'),
                        old('maker_sold_out_html_part_id', isset($html_part_selected_ids[6]) ? $html_part_selected_ids[6] : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>

            <dt>配送に関する注意事項</dt>
            <dd>
                {!! Form::select(
                        'delivery_precaution_html_part_id',
                        array_pluck(array_sort($delivery_precautions, function ($value) {return $value['part_title'];
                        }), 'part_title', 'product_html_part_id'),
                        old('delivery_precaution_html_part_id', isset($html_part_selected_ids[7]) ? $html_part_selected_ids[7] : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>

            <dt>出荷目安について</dt>
            <dd>
                {!! Form::select(
                        'delivery_schedule_html_part_id',
                        array_pluck(array_sort($delivery_schedules, function ($value) {return $value['part_title'];
                        }), 'part_title', 'product_html_part_id'),
                        old('delivery_schedule_html_part_id', isset($html_part_selected_ids[8]) ? $html_part_selected_ids[8] : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>

            <dt>活用事例</dt>
            <dd>
                {!! Form::select(
                        'product_case_studie_html_part_id',
                        array_pluck(array_sort($product_case_studies, function ($value) {return $value['part_title'];
                        }), 'part_title', 'product_html_part_id'),
                        old('product_case_studie_html_part_id', isset($html_part_selected_ids[3]) ? $html_part_selected_ids[3] : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>

            <dt>関連コンテンツ</dt>
            <dd>
                {!! Form::select(
                        'related_content_html_part_id',
                        array_pluck(array_sort($related_content, function ($value) {return $value['part_title'];
                        }), 'part_title', 'product_html_part_id'),
                        old('related_content_html_part_id', isset($html_part_selected_ids[13]) ? $html_part_selected_ids[13] : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>
            
            <dt>補修部品</dt>
            <dd>
                {!! Form::select(
                        'repair_part_html_part_id',
                        array_pluck(array_sort($repair_parts, function ($value) {return $value['part_title'];
                        }), 'part_title', 'product_html_part_id'),
                        old('repair_part_html_part_id', isset($html_part_selected_ids[9]) ? $html_part_selected_ids[9] : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>

            <h4 id="hl_detail">追加情報設定</h4>

            <dt>商品タグ</dt>
            <dd>
                @foreach ($product_feature_tags as $tag)
                    <?php $empty = true; ?>
                    <p>
                        @isset($product)
                            @foreach($product->productFeatureTag as $item)
                                @if ($tag['product_feature_tag_id'] == $item->product_feature_tag_id)
                                    {!! Form::checkbox('product_feature_tags[]', $tag->product_feature_tag_id, true, array('id'=>'product_feature_tags_'.$tag->product_feature_tag_id)) !!}
                                    {!! Form::label('product_feature_tags_'.$tag->product_feature_tag_id, $tag->product_feature_tag_name_inside) !!}
                                    <?php $empty = false; break; ?>
                                @endif
                            @endforeach
                        @endisset
                        @if ($empty == true)
                            {!! Form::checkbox('product_feature_tags[]', $tag->product_feature_tag_id, false, array('id'=>'product_feature_tags_'.$tag->product_feature_tag_id)) !!}
                            {!! Form::label('product_feature_tags_'.$tag->product_feature_tag_id, $tag->product_feature_tag_name_inside) !!}
                        @endif
                    </p>
                @endforeach
            </dd>

            <dt>関連商品</dt>
            <dd class="dynamic-table-area related-product">
                <div class="select-block">
                    {!! Form::radio('related_product_option', 0, isset($product->related_product_option) ? $product->related_product_option === 0 : 1, array('id' => 'related_product_tag')) !!}
                    {!! Form::label('related_product_tag', "タグから表示") !!}
                    {!! Form::radio('related_product_option', 1, isset($product->related_product_option) ? $product->related_product_option === 1 : 0, array('id' => 'related_product_free')) !!}
                    {!! Form::label('related_product_free', "自由選択(リストは名前の順に表示されます)") !!}
                </div>
                <div>
                    <div class="table-block">
                        <table id="relatedProductTable">
                            <tbody>
                            {{-- old('related_product_id[]')で判定したいが、一旦バリデーションエラーが発生しているかどうかで判定する暫定対処 --}}
                            @if($errors->any())
                                @for ($i = 0; $i < old('related_product_id_length'); $i++)
                                    <tr>
                                        <td>
                                            <div>
                                                {!! Form::select(
                                                    'related_product_id['. $i .']',
                                                    array_pluck($related_products, 'product_name', 'product_id'),
                                                    old('related_product_id[]'),
                                                    ['placeholder' => '選択してください']
                                                ) !!}
                                                <button type="button" name="rows_delete" class="btnDelete">削除</button>
                                            </div>
                                        </td>
                                    </tr>
                                @endfor
                            @else
                                @isset($product)
                                    @if (count($product->relatedProduct) > 0)
                                        @foreach($product->relatedProduct as $item)
                                            <tr>
                                                <td>
                                                    <div>
                                                        {!! Form::select(
                                                            'related_product_id[]',
                                                            array_pluck($related_products, 'product_name', 'product_id'),
                                                            old('related_product_id[]', $item->related_product_id),
                                                            ['placeholder' => '選択してください']
                                                        )!!}
                                                        <button type="button" name="rows_delete" class="btnDelete">削除
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        @endforeach
                                    @else
                                        <tr>
                                            <td>
                                                <div>
                                                    {!! Form::select(
                                                        'related_product_id[]',
                                                        array_pluck($related_products, 'product_name', 'product_id'),
                                                        old('related_product_id[]'),
                                                        ['placeholder' => '選択してください']
                                                    )!!}
                                                    <button type="button" name="rows_delete" class="btnDelete">削除
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    @endif
                                @else
                                    <tr>
                                        <td>
                                            <div>
                                                {!! Form::select(
                                                    'related_product_id[]',
                                                    array_pluck($related_products, 'product_name', 'product_id'),
                                                    old('related_product_id[]'),
                                                    ['placeholder' => '選択してください']
                                                )!!}
                                                <button type="button" name="rows_delete" class="btnDelete">削除</button>
                                            </div>
                                        </td>
                                    </tr>
                                @endisset
                            @endif
                            </tbody>
                        </table>
                        <div style="display: none">
                            <table id="cloneRelatedProduct">
                                <tbody>
                                <tr>
                                    <td>
                                        <div>
                                            {!! Form::select(
                                                'related_product_id[]',
                                                array_pluck($related_products, 'product_name', 'product_id'),
                                                0,
                                                ['placeholder' => '選択してください']
                                            )!!}
                                            <button type="button" name="rows_delete" class="btnDelete">削除</button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p>
                        <button type="button" id="relatedProductRowsAdd" name="rowsAdd">追加</button>
                    </p>
                    {!! Form::hidden('related_product_id_length', isset($product->relatedProduct) ? count($product->relatedProduct) : 1, ['id'=>'related_product_id_length']) !!}
                </div>
            </dd>

            <dt>お客様の声</dt>
            <dd>
                <div class="mgb10">
                    @if ($errors->first('number_of_customer_feedback_pc_word'))
                        <div class="validate">{{$errors->first('number_of_customer_feedback_pc_word')}}</div>
                    @endif
                    キーワード：
                    {!! Form::text('customer_feedback_pc_word', old('customer_feedback_pc_word', isset($product->customer_feedback_pc_word) ? $product->customer_feedback_pc_word : null)) !!}
                </div>
            </dd>

            <dt>欠品のお知らせ</dt>
            <dd class="sold-out-notice">
                <div class="select-block">
                    {!! Form::radio('is_sold_out_notice_valid', 1, isset($product->is_sold_out_notice_valid) ? $product->is_sold_out_notice_valid === 1 : 1, array('id'=>'sold_out_notice_valid')) !!}
                    {!! Form::label('sold_out_notice_valid', '有効') !!}
                    {!! Form::radio('is_sold_out_notice_valid', 0, isset($product->is_sold_out_notice_valid) ? $product->is_sold_out_notice_valid === 0 : 0, array('id'=>'sold_out_notice_invalid')) !!}
                    {!! Form::label('sold_out_notice_invalid', '無効') !!}
                </div>
                <div>
                    カートメッセージ：
                    {!! Form::text('sold_out_notice', old('sold_out_notice', isset($product->sold_out_notice) ? $product->sold_out_notice : "ページ下部のメーカー欠品情報をご確認後、ご注文を行ってください。")) !!}
                </div>
            </dd>


            <dt>再構築／ページバージョン記述</dt>
            <dd class="sold-out-notice">
                <div class="select-block">
                    {!! Form::textarea('versions_string', old('versions_string', isset($product->versions_string) ? $product->versions_string : null), ['rows'=>5]) !!}
                </div>
            </dd>


            <dt>改定履歴</dt>
            <dd>
                {!! Form::textarea('history', old('history', isset($product->history) ? $product->history : null), ['rows'=>5]) !!}
            </dd>

            <dt>社内メモ(255文字まで)</dt>
            <dd>
                {!! Form::textarea('memo', old('memo', isset($product->memo) ? $product->memo : null), ['rows'=>3]) !!}
            </dd>
        </dl>
        <div class="procArea">
            {!! Form::submit('登録') !!}
        </div>
        {!! Form::close() !!}

        @if (isset($product))
            <div class="procArea-delete">
                {!! Form::open(['method' => 'POST', 'route'=>array('product.standard.delete', $product->product_id)]) !!}
                {!! Form::submit('削除') !!}
                {!! Form::close() !!}
            </div>
        @endif
    </section>
    <section class="inside_menu">
        <ul>
            <li class="head">スクロールメニュー</li>
            <li><a href="#">トップ</a></li>
            <li><a href="#hl_image">画像設定</a></li>
            <li><a href="#hl_input">入力項目設定</a></li>
            <li><a href="#hl_html">HTMLパーツ設定</a></li>
            <li><a href="#hl_detail">追加情報設定</a></li>
        </ul>
    </section>
@endsection

@section('script_foot')
    <script>
        jQuery(function ($) {
            // バリデーションが発生した際に、なぜかコピー用のセレクトボックスのoptionが全てselectedされているので外す
            $("#cloneRelatedProduct tbody tr:last-child select option").attr("selected", false);

            $('a[href^="#"]').on('click', function () {
                var speed = 150;
                var href = $(this).attr("href");
                var target = $(href == "#" || href == "" ? 'html' : href);
                var headerHeight = 50; //固定ヘッダーの高さ
                var position = target.offset().top - headerHeight; //ターゲットの座標からヘッダの高さ分引く
                $('body,html').animate({scrollTop: position}, speed, 'swing');
                return false;
            });

            let $menu = $('.inside_menu ul li a'),
                fixedClass = 'current';

            let idList = [];
            $menu.each(function (index, element) {
                let targetID = $(element).attr('href');
                let elementPos = 0;
                if (index > 0) {
                    elementPos = $(targetID).offset().top;
                }
                let tmp = {
                    index: index,
                    id: targetID,
                    elementPos: elementPos
                };
                idList.push(tmp);
            });

            $(window).on('load scroll', function () {
                let scrollPos = $(this).scrollTop() + 51;
                let targetIndex = 0;
                $.each(idList, function (index, record) {
                    if (scrollPos < record.elementPos) {
                        return;
                    }
                    targetIndex = record.index;
                });
                $menu.removeClass(fixedClass);
                $menu.eq(targetIndex).addClass(fixedClass);
            });

        });
    </script>
    @include('common.image_uploader')
@endsection
