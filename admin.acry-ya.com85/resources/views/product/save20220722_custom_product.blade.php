@extends('layouts.base')
@section('title', '編集 - セミオーダー')
@section('breadcrumbs')
    @parent
    <li>編集 - セミオーダー</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('script_head')
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        $(function () {
            // 関連商品の表示処理
            checkRelatedProduct(0);
            $('.related-product [type=radio]').on('change', function () {
                checkRelatedProduct(100, this);
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
    </script>
@endsection
@section('content')
    <section class="edit">
        @isset($product)
            <div class="product-menu">
                <a href="{{route('repair.part.setting', ['id' => $product->product_id])}}" class="btn">補修部品設定</a>
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
            {!! Form::open(['method' => 'POST', 'route'=>array('product.custom.update', $product->product_id), "enctype"=>"multipart/form-data"]) !!}
        @else
            {!! Form::open(['method' => 'POST', 'route'=>'product.custom.register', "enctype"=>"multipart/form-data"]) !!}
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
            </dd>

            <dt class="required">商品名</dt>
            <dd>
                {!! Form::text('product_name', old('product_name', isset($product->product_name) ? $product->product_name : null)) !!}
                @if ($errors->first('product_name'))
                    <div class="validate">{{$errors->first('product_name')}}</div>
                @endif
            </dd>

            <dt>カート内表示用商品名</dt>
            <dd>{!! Form::text('product_name_displayed_cart', old('product_name_displayed_cart', isset($product->product_name_displayed_cart) ? $product->product_name_displayed_cart : null)) !!}</dd>

            <dt class="required">商品カテゴリー</dt>
            <dd>
                {!! Form::select(
                        'product_category_id',
                        array_pluck($product_categories, 'product_category_name', 'product_category_id'),
                        old('product_category_id', isset($product->product_category_id) ? $product->product_category_id : null),
                        ['placeholder' => '選択してください']
                ) !!}
                @if ($errors->first('product_category_id'))
                    <div class="validate">{{$errors->first('product_category_id')}}</div>
                @endif
            </dd>
            <dt>タグ</dt>
            <dd>{!! Form::text('product_tag', old('product_tag', isset($product_tag) ? $product_tag : null)) !!}</dd>
            <dt>メーカー名</dt>
            <dd>{!! Form::text('maker_name', old('maker_name', isset($product->maker_name) ? $product->maker_name : null)) !!}</dd>
            <dt class="required">商品概要</dt>
            <dd>
                {!! Form::textarea('product_summary', old('product_summary', isset($product->product_summary) ? $product->product_summary : null), ['rows'=>5]) !!}
                @if ($errors->first('product_summary'))
                    <div class="validate">{{$errors->first('product_summary')}}</div>
                @endif
            </dd>
            
            <dt>定価(JSON-LD用 ※価格改定時は最低金額を設定すること)</dt>
            <dd>
                {!! Form::text('price', old('price', isset($product->price) ? $product->price : null), ['class'=>'numeric']) !!}
                @if ($errors->first('price'))
                    <div class="validate">{{$errors->first('price')}}</div>
                @endif
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
                        data-type="html">画像追加
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
                    <div class="image-url">画像URL<span class="url">{{ $product->thumbnailPicture->picture_url }}</span></div>
                @endisset

                @if ($errors->first('picture_id'))
                    <div class="validate">{{$errors->first('picture_id')}}</div>
                @endif
            </dd>

            <h4 id="hl_detail_html">詳細ページHTML</h4>

            <dt>詳細ページHTML</dt>
            <dd>{!! Form::textarea('html', old('html', isset($product->semiOrderHtmlContent->html) ? $product->semiOrderHtmlContent->html : null), ['rows'=>30]) !!}</dd>

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
                    {!! Form::label('related_product_free', "自由選択") !!}
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
            <li><a href="#hl_detail_html">詳細ページHTML</a></li>
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