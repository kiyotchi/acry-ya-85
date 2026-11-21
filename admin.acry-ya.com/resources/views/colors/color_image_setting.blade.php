@extends('layouts.base')
@section('title', 'カラー別画像設定')
@section('breadcrumbs')
    @parent
    <li>カラー別画像設定</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('script_head')
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
@endsection
@section('content')
    <section class="edit">
        <div id="current_product">
            <dl>
                <dt>商品コード</dt>
                <dd>{{$product->product_code}}</dd>
                <dt>商品名</dt>
                <dd>{{$product->product_name}}</dd>
            </dl>
        </div>

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

        {!! Form::open(['method' => 'POST', 'route'=>array('color.image.setting.register', $product->product_id), "enctype"=>"multipart/form-data"]) !!}

        <dl class="specification-image">
            @foreach($color_image_data as $color_image)
                <dt>{{$color_image['color_name']}}</dt>
                <dd class="image-list">
                    @for ($i = 0; $i < 7; $i++)
                        <div class="product_img_content" id="product_img_{{ $color_image['color_id'] . '_' . $i }}">
                            <div class="head">画像{{$i+1}}</div>
                            <div class="body">
                                <?php $empty = true; ?>

                                @isset($color_image['image_data'])
                                    @foreach ($color_image['image_data'] as $picture)
                                        @if ($picture->pivot["display_order"] === $i)
                                            <div class="left">
                                                <img id="color_image_{{$color_image['color_id'] . '_' .$i}}"
                                                     src="{{ $picture->picture_url }}"/>
                                            </div>
                                            <div class="right">
                                                <div>
                                                    <button type="button" class="image-selector" data-target="product_img_{{ $color_image['color_id'] . '_' . $i }}">選択</button>
                                                    <button type="button" class="image-clear" data-target="product_img_{{ $color_image['color_id'] . '_' . $i }}">クリア</button>
                                                    <div class="image-url">画像URL<span class="url">{{ $picture->picture_url }}</span></div>
                                                </div>
                                                <div class="field_head">説明文</div>
                                                <div>{!! Form::text('description_' . $color_image['color_id'] . '_' . $i, $picture->pivot["description"], old('description_' . $i)) !!}</div>
                                                {!! Form::hidden('picture_id_' . $color_image['color_id'] . '_' . $i, $picture->picture_id, ['class'=>'picture_id']) !!}
                                            </div>
                                            <?php $empty = false; break; ?>
                                        @endif
                                    @endforeach
                                @endisset

                                @if ($empty === true)
                                    <div class="left">
                                        <img id="product_img_{{$color_image['color_id'] . '_' .$i}}"
                                             src="{{ url('/') }}/assets/images/noimage.png"/>
                                    </div>
                                    <div class="right">
                                        <div>
                                            <button type="button" class="image-selector" data-target="product_img_{{ $color_image['color_id'] . '_' . $i }}">選択</button>
                                            <button type="button" class="image-clear" data-target="product_img_{{ $color_image['color_id'] . '_' . $i }}">クリア</button>
                                            <div class="image-url">画像URL<span class="url"></span></div>
                                        </div>
                                        <div class="field_head">説明文</div>
                                        <div>{!! Form::text('description_' . $color_image['color_id'] . '_' . $i, old('description_' . $color_image['color_id'] . '_' . $i)) !!}</div>
                                    </div>
                                    {!! Form::hidden('picture_id_' . $color_image['color_id'] . '_' . $i, null, ['class'=>'picture_id']) !!}
                                @endif
                            </div>
                        </div>
                    @endfor
                    {!! Form::hidden('color_ids[]', $color_image['color_id']) !!}
                </dd>
            @endforeach
        </dl>
        <div class="procArea">
            {!! Form::submit('登録') !!}
            <a href="{{ route('product.standard.edit', $product->product_id) }}" class="btn btn-back">戻る</a>
        </div>
        {!! Form::close() !!}
    </section>
@endsection

@section('script_foot')
    @include('common.image_uploader')
@endsection