@extends('layouts.base')
@section('title', '補修部品編集')
@section('breadcrumbs')
    @parent
    <li>補修部品編集</li>
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

        @isset($repair_part)
            {!! Form::open(['method' => 'POST', 'route'=>array('repair.part.update', $repair_part->repair_parts_id), "enctype"=>"multipart/form-data"]) !!}
        @else
            {!! Form::open(['method' => 'POST', 'route'=>'repair.part.register', "enctype"=>"multipart/form-data"]) !!}
        @endisset

        <dl>

            <dt>商品コード</dt>
            <dd>
                {!! Form::text('product_code', old('product_code', isset($repair_part->product_code) ? $repair_part->product_code : null)) !!}
            </dd>

            <dt class="required">商品名</dt>
            <dd>
                {!! Form::text('product_name', old('product_name', isset($repair_part->product_name) ? $repair_part->product_name : null)) !!}
                @if ($errors->first('product_name'))
                    <div class="validate">{{$errors->first('product_name')}}</div>
                @endif
            </dd>

            <dt>セット名</dt>
            <dd>{!! Form::text('set_name', old('set_name', isset($repair_part->set_name) ? $repair_part->set_name : null)) !!}</dd>

            <dt>詳細</dt>
            <dd>{!! Form::text('product_detail', old('product_detail', isset($repair_part->product_detail) ? $repair_part->product_detail : null)) !!}</dd>

            <dt>カート内表示用商品名</dt>
            <dd>{!! Form::text('product_name_displayed_cart', old('product_name_displayed_cart', isset($repair_part->product_name_displayed_cart) ? $repair_part->product_name_displayed_cart : null)) !!}</dd>

            <dt class="required">サムネイル画像</dt>
            <dd class="thumbnail" id="thumbnail">
                <div>
                    @isset($repair_part->thumbnailPicture)
                        <img src="{{ $repair_part->thumbnailPicture->picture_url }}"/>
                    @else
                        <img src="{{ url('/') }}/assets/images/noimage.png"/>
                    @endisset
                    {!! Form::hidden('thumbnail_picture_id', isset($repair_part->thumbnail_picture_id) ? $repair_part->thumbnail_picture_id : null, ['class'=>'picture_id']) !!}
                </div>
                <button type="button" class="image-selector" data-target="thumbnail">選択</button>

                @isset($repair_part->thumbnailPicture)
                    <button type="button" class="image-clear" data-target="thumbnail">クリア</button>
                    <div class="image-url">画像URL<span class="url">{{ $repair_part->thumbnailPicture->picture_url }}</span></div>
                @endisset

                @if ($errors->first('picture_id'))
                    <div class="validate">{{$errors->first('picture_id')}}</div>
                @endif
            </dd>

            <dt>定価</dt>
            <dd>
                {!! Form::text('price', old('price', isset($repair_part->price) ? $repair_part->price : null)) !!}
            </dd>

            <dt>出荷目安</dt>
            <dd>
                {!! Form::select(
                    'delivery_schedule_id',
                    $deliveries,
                    old('delivery_schedule_id', isset($repair_part->delivery_schedule_id) ? $repair_part->delivery_schedule_id : null),
                    ['placeholder' => '選択してください']
                ) !!}
            </dd>

            <dt>表示順</dt>
            <dd>
                {!! Form::text('display_order', old('display_order', isset($repair_part->display_order) ? $repair_part->display_order : null), ['class'=>'numeric']) !!}
                @if ($errors->first('display_order'))
                    <div class="validate">{{$errors->first('display_order')}}</div>
                @endif
            </dd>

            @isset($repair_parts_groups)
                <dt>この補修部品を登録している補修部品グループ</dt>
                <dd>
                    @foreach ($repair_parts_groups as $repair_parts_group)
                        <p>
                            {{ $repair_parts_group->repair_part_groups_id . ' ' . $repair_parts_group->repair_part_group_name}}<b>{{' 【メニューに表示：' . $repair_parts_group->is_menu_display . '】' }}</b>　
                            <a href="{{ route('repair.part.group.edit', ['id'=>$repair_parts_group->repair_part_groups_id])}}" target="_blank">[グループを編集する]</a>　
                            <a href={{env('SITE_URL') . '/parts/' . $repair_parts_group->repair_part_groups_id . '/'}} target="_blank">[商品ページを見る]</a>
                        </p>
                    @endforeach
                </dd>
            @endisset

        </dl>
        <div class="procArea">
            {!! Form::submit('登録') !!}
        </div>
        {!! Form::close() !!}

        @if (isset($repair_part))
            <div class="procArea-delete">
                {!! Form::open(['method' => 'POST', 'route'=>array('repair.part.delete', $repair_part->repair_parts_id)]) !!}
                {!! Form::submit('削除') !!}
                {!! Form::close() !!}
            </div>
        @endif
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