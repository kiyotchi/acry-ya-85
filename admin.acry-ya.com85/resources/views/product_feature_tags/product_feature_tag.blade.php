@extends('layouts.base')
@section('title', '商品タグ編集')
@section('breadcrumbs')
    @parent
    <li>商品タグ編集</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
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
        @if (isset($product_feature_tag))
            {!! Form::open(['method'=>'POST', 'route'=>array('feature.tag.update', $product_feature_tag->product_feature_tag_id)]) !!}
            <dl>
                <dt class="required">商品タグ名（内部認識用）</dt>
                <dd>
                    {!! Form::text('product_feature_tag_name_inside', old('product_feature_tag_name_inside', $product_feature_tag->product_feature_tag_name_inside)) !!}
                    @if ($errors->first('product_feature_tag_name_inside'))
                        <div class="validate">{{$errors->first('product_feature_tag_name_inside')}}</div>
                    @endif
                </dd>
                <dt class="required">商品タグ名</dt>
                <dd>
                    {!! Form::text('product_feature_tag_name', old('product_feature_tag_name', $product_feature_tag->product_feature_tag_name)) !!}
                    @if ($errors->first('product_feature_tag_name'))
                        <div class="validate">{{$errors->first('product_feature_tag_name')}}</div>
                    @endif
                </dd>
                <dt class="required">詳細説明</dt>
                <dd>
                    {!! Form::textarea('product_feature_tag_content', old('product_feature_tag_content', $product_feature_tag->product_feature_tag_content)) !!}
                    @if ($errors->first('product_feature_tag_content'))
                        <div class="validate">{{$errors->first('product_feature_tag_content')}}</div>
                    @endif
                </dd>

                @isset($used_products)
                    <dt>このタグを使用している商品</dt>
                    <dd>
                        @foreach ($used_products as $used_product)
                            <p>
                                {{ $used_product->product_id . ' ' . $used_product->product_name }}　
                                <a href="{{ route('product.' . $used_product->product_type_code . '.edit', ['id'=>$used_product->product_id])}}" target="_blank">[編集する]</a>　
                                <a href={{env('SITE_URL') . '/products/detail/' . $used_product->product_id . '/'}} target="_blank">[商品ページを見る]</a>
                            </p>
                        @endforeach
                    </dd>
                @endisset

            </dl>
            <div class="procArea">
                {!! Form::submit('登録') !!}
            </div>
            {!! Form::hidden('product_feature_tag_id', $product_feature_tag->product_feature_tag_id) !!}
            {!! Form::close() !!}

            <div class="procArea-delete">
                {!! Form::open(['method'=>'POST', 'route'=>array('feature.tag.delete', $product_feature_tag->product_feature_tag_id)]) !!}
                {!! Form::submit('削除') !!}
                {!! Form::close() !!}
            </div>
        @else
            {!! Form::open(['method'=>'POST', 'route'=>'feature.tag.register']) !!}
            <dl>
                <dt class="required">商品タグ名（内部認識用）</dt>
                <dd>
                    {!! Form::text('product_feature_tag_name_inside', old('product_feature_tag_name_inside')) !!}
                    @if ($errors->first('product_feature_tag_name_inside'))
                        <div class="validate">{{$errors->first('product_feature_tag_name_inside')}}</div>
                    @endif
                </dd>
                <dt class="required">商品タグ名</dt>
                <dd>
                    {!! Form::text('product_feature_tag_name', old('product_feature_tag_name')) !!}
                    @if ($errors->first('product_feature_tag_name'))
                        <div class="validate">{{$errors->first('product_feature_tag_name')}}</div>
                    @endif
                </dd>
                <dt class="required">詳細説明</dt>
                <dd>
                    {!! Form::textarea('product_feature_tag_content', old('product_feature_tag_content')) !!}
                    @if ($errors->first('product_feature_tag_content'))
                        <div class="validate">{{$errors->first('product_feature_tag_content')}}</div>
                    @endif
                </dd>

            </dl>

            <div class="procArea">
                {!! Form::submit('登録') !!}
            </div>
            {!! Form::close() !!}
        @endif
    </section>
@endsection