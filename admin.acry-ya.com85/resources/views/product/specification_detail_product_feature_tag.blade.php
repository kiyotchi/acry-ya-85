@extends('layouts.base')
@section('title', '商品一覧')
@section('breadcrumbs')
    @parent
    <li>商品タグ　規格詳細個別設定</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="edit">
        <div id="current_product">
            <dl>
                <dt>商品コード</dt>
                <dd>{{$specification_detail->product_code}}</dd>
                <dt>商品名</dt>
                <dd>{{$specification_detail->product->product_name}}</dd>
                @if ($product_setting->is_color_valid == 1)
                    <dt>カラー</dt>
                    <dd>{{$specification_detail->color->color_name}}</dd>
                @endif
                @if ($product_setting->is_size_valid == 1)
                    <dt>サイズ</dt>
                    <dd>{{$size_display_name}}</dd>
                @endif
                @if ($product_setting->is_plate_thickness_valid == 1)
                    <dt>板厚</dt>
                    <dd>{{isset($specification_detail->plateThickness) ? $specification_detail->plateThickness->plate_thickness : null}}</dd>
                @endif
                @if ($product_setting->is_product_option_valid == 1)
                    <dt>オプション</dt>
                    <dd>{{isset($specification_detail->option) ? $specification_detail->option->display_name : null}}</dd>
                @endif
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
        {!! Form::open(['method'=>'POST', 'route'=>array('specification.feature.tag.update', $specification_detail->specification_detail_individual_id)]) !!}
        <section class="edit">
            <dl>
                <dt>商品タグ</dt>
                <dd>
                    @foreach ($product_feature_tags as $tag)
                        <?php $empty = true; ?>
                        <p>
                            @isset($check_tag_ids)
                                @foreach($check_tag_ids as $item)
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
            </dl>
        </section>
        <div class="procArea">
            {!! Form::submit('更新') !!}
            <a href="{{ route('specification', $specification_detail->product_id) }}" class="btn">戻る</a>
        </div>
        {!! Form::close() !!}
    </section>
@endsection