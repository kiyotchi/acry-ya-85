@extends('layouts.base')
@section('title', 'HTMLパーツ編集')
@section('breadcrumbs')
    @parent
    <li>HTMLパーツ編集</li>
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

        @isset($product_html_part)
            {!! Form::open(['method' => 'POST', 'route'=>array('html.part.update', $product_html_part->product_html_part_id)]) !!}
        @else
            {!! Form::open(['method' => 'POST', 'route'=>'html.part.register']) !!}
        @endisset
        <dl>
            <dt class="required">タイトル</dt>
            <dd>
                {!! Form::text('part_title', old('part_title', isset($product_html_part->part_title) ? $product_html_part->part_title : null)) !!}
                @if ($errors->first('part_title'))
                    <div class="validate">{{$errors->first('part_title')}}</div>
                @endif
            </dd>
            <dt class="required">種別</dt>
            <dd>
                {!! Form::select(
                    'product_html_part_type_id',
                    array_pluck($html_part_types, 'product_html_part_type_name', 'product_html_part_type_id'),
                    old('product_html_part_type_id', isset($product_html_part->product_html_part_type_id) ? $product_html_part->product_html_part_type_id : null),
                    ['placeholder' => '選択してください']
                ) !!}
                @if ($errors->first('product_html_part_type_id'))
                    <div class="validate">{{$errors->first('product_html_part_type_id')}}</div>
                @endif
            </dd>
            <dt class="required">HTML
                <button type="button" class="image-selector btn-min"
                        data-target="html_part"
                        data-type="html">画像追加
                </button>
            </dt>
            <dd>
                {!! Form::textarea('html_part', old('html_part', isset($product_html_part->html_part) ? $product_html_part->html_part : null), ['id'=>'html_part']) !!}
                @if ($errors->first('html_part'))
                    <div class="validate">{{$errors->first('html_part')}}</div>
                @endif
            </dd>
            
            @isset($used_products)
                <dt>このパーツを使用している商品</dt>
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
        {!! Form::close() !!}

        @if (isset($product_html_part))
            <div class="procArea-delete">
                {!! Form::open(['method' => 'POST', 'route'=>array('html.part.delete', $product_html_part->product_html_part_id)]) !!}
                {!! Form::submit('削除') !!}
                {!! Form::close() !!}
            </div>
        @endif
    </section>
@endsection

@section('script_foot')
    @include('common.image_uploader')
@endsection