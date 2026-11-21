@extends('layouts.base')
@section('title', 'カテゴリ一覧')
@section('breadcrumbs')
    @parent
    <li>カテゴリ一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="search">
        {!! Form::open(['method'=>'GET', 'route'=>'product.category.list']) !!}
        <ul>
            <li>
                <label>親カテゴリ</label>
                {!! Form::select(
                'product_category_id',
                array_pluck($product_category_list_parent_only, 'product_category_name', 'product_category_id'),
                old('product_category_id', isset($product_category_id) ? $product_category_id : null),
                ['placeholder' => '選択してください']
                ) !!}
            </li>
            <li>
                <label>カテゴリ名</label>
                {!! Form::text('product_category_name', old('product_category_name', isset($product_category_name) ? $product_category_name : null)) !!}
            </li>
        </ul>
        <div class="procArea">
            {!! Form::submit('検索') !!}
            <button type="button" class="btn-clear">クリア</button>
        </div>
        {!! Form::close() !!}
    </section>
    <section class="list">
        <div class="search-result-info">
            <div class="search-result-proc">
                <a href="{{ route('product.category.new') }}" class="btn">新規登録</a>
            </div>
            <div class="search-result-count">
                @if (isset($product_categories))
                    検索結果：{{$product_categories->total()}}件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>
        {{$product_categories->appends(request()->input())->links()}}
            <table>
                <colgroup width="50"/>
                <colgroup width="80"/>
                <colgroup width="200"/>
                <colgroup width="50"/>
                <colgroup width="200"/>
                <colgroup width="50"/>
                <tr>
                    <th>ID</th>
                    <th>親カテゴリID</th>
                    <th>カテゴリ名</th>
                    <th>表示順</th>
                    <th>リンクURL</th>
                    <th>処理</th>
                </tr>
                @foreach ($product_categories as $item)
                    <tr>
                        <td>{{$item['product_category_id']}}</td>
                        <td>{{$item['parent_category_id']}}</td>
                        <td>{{$item['product_category_name']}}</td>
                        <td>{{$item['display_order']}}</td>
                        <td>{{$item['link_url']}}</td>
                        <td><a href="{{route('product.category.edit', ['id'=>$item['product_category_id']])}}">編集</a></td>
                    </tr>
                @endforeach
            </table>
            {{$product_categories->appends(request()->input())->links()}}
        
    </section>
@endsection
