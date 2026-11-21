@extends('layouts.base')
@section('title', 'カテゴリ編集')
@section('breadcrumbs')
    @parent
    <li>カテゴリ編集</li>
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
        
        @if (isset($product_category))
            {!! Form::open(['method'=>'POST', 'route'=>array('product.category.update', $product_category->product_category_id)]) !!}
            <dl>
                <dt class="required">カテゴリID</dt>
                <dd>
                    {!! Form::text('product_category_id', old('product_category_id', $product_category->product_category_id), ['disabled' => 'disabled']) !!}
        			{{ $errors->first('product_category_id') }}
        		</dd>
               	 
               	<dt>カテゴリ名</dt>
                <dd >
                    {!! Form::text('product_category_name', old('product_category_name', $product_category->product_category_name)) !!}
        			{{ $errors->first('product_category_name') }}
                </dd> 
            	
	        	<dt >親カテゴリー（画面左に表示させる場合は何も選択しない）</dt>
	            <dd>
	                {!! Form::select(
	                    'parent_category_id',
	                    array_pluck($product_category_list, 'product_category_name','product_category_id'),
	                    old('parent_category_id', isset($product_category->parent_category_id) ? $product_category->parent_category_id : 0),
	                    ['placeholder' => '選択してください']
	                )!!}
	            </dd>
               
                <dt>サムネイル画像（パスを直接記入。例：/storage/images/share/icon_free.svg）</dt>
                <dd class="thumbnail" id="thumbnail">
                    {!! Form::text('thumbnail_path', old('thumbnail_path', $product_category->thumbnail_path)) !!}
                    <p>画像イメージ</p>
        	        {{ $errors->first('thumbnail_path') }}
                    <div>
                        @isset($product_category->thumbnail_path)
                            <img src="{{ $product_category->thumbnail_path }}"/>
                        @else
                            <img src="{{ url('/') }}/assets/images/noimage.png"/>
                        @endisset
                    </div>
                </dd>
            
                <dt>表示順</dt>
                <dd>
                    {!! Form::text('display_order', old('display_order', $product_category->display_order)) !!}
                    {{ $errors->first('display_order') }}
                </dd>
            
                <dt>リンクURL（パスを直接記入。例：/products/detail/106/）</dt>
                <dd>
                    {!! Form::text('link_url', old('link_url', $product_category->link_url)) !!}
        	        {{ $errors->first('link_url') }}
                </dd>
                
                <dt>カテゴリ概要（descriptionにも登録されます）</dt>
                <dd>
                    {!! Form::textarea('list_summary', old('list_summary', isset($product_category->list_summary) ? $product_category->list_summary : null), ['rows'=>5]) !!}
                </dd>
            </dl>
            <div class="procArea">
                {!! Form::submit('登録') !!}
                <a href="{{ route('product.category.list') }}" class="btn">戻る</a>
            </div>
            {!! Form::hidden('product_category_id', $product_category->product_category_id) !!}
            {!! Form::close() !!}
            <div class="procArea-delete">
                {!! Form::open(['method'=>'POST', 'route'=>array('product.category.delete', $product_category->product_category_id)]) !!}
                {!! Form::submit('削除') !!}
                {!! Form::close() !!}
            </div>
        @else
            {!! Form::open(['method'=>'POST', 'route'=>'product.category.register']) !!}
            <dl>
                <dt>カテゴリ名</dt>
                <dd >
                    {!! Form::text('product_category_name', old('product_category_name')) !!}
        			{{ $errors->first('product_category_name') }}
                </dd>
                <dt>親カテゴリー</dt>
                <dd >
                    {!! Form::select(
	                    'parent_category_id',
	                    array_pluck($product_category_list, 'product_category_name','product_category_id'),
	                    old('parent_category_id', isset($product_category->parent_category_id) ? $product_category->parent_category_id : 0),
	                    ['placeholder' => '選択してください']
	                )!!}
                </dd>
                
                <dt>サムネイル画像（パスを直接記入 例：/storage/images/share/icon_free.svg）</dt>
                <dd class="thumbnail" id="thumbnail">
                    <div>
                        @isset($product_category->thumbnail_path)
                            <img src="{{ $product_category->thumbnail_path }}"/>
                        @else
                            <img src="{{ url('/') }}/assets/images/noimage.png"/>
                        @endisset
                    </div>

                    {!! Form::text('thumbnail_path') !!}
        	        {{ $errors->first('thumbnail_path') }}
                </dd>
                
                <dt>表示順</dt>
                <dd >
                    {!! Form::text('display_order', old('display_order')) !!}
        			{{ $errors->first('display_order') }}
                </dd>
                
                <dt>リンクURL（パスを直接記入 例：/products/detail/106/）</dt>
                <dd >
                    {!! Form::text('link_url', old('link_url')) !!}
        			{{ $errors->first('link_url') }}
                </dd>
                
                <dt>カテゴリ概要（descriptionにも登録されます）</dt>
                <dd >
                    {!! Form::textarea('list_summary', old('list_summary'), ['rows'=>5]) !!}
        			{{ $errors->first('list_summary') }}
                </dd>            
            </dl>
            <div class="procArea">
                {!! Form::submit('登録') !!}
                <a href="{{ route('product.category.list') }}" class="btn">戻る</a>
            </div>
            {!! Form::close() !!}
        @endif
    </section>
@endsection
