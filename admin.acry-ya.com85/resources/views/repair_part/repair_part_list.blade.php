@extends('layouts.base')
@section('title', '補修部品一覧')
@section('breadcrumbs')
    @parent
    <li>補修部品一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="search">
        {!! Form::open(['method'=>'GET', 'route'=>'repair.part.list']) !!}
        <ul>
            <li>
                <label>商品コード</label>
                {!! Form::text('product_code', old('product_code', isset($product_code) ? $product_code : null)) !!}
            </li>
            <li>
                <label>商品名</label>
                {!! Form::text('product_name', old('product_name', isset($product_name) ? $product_name : null)) !!}
            </li>
            <li>
                <label>カート内表示用商品名</label>
                {!! Form::text('product_name_displayed_cart', old('product_name_displayed_cart', isset($product_name_displayed_cart) ? $product_name_displayed_cart : null)) !!}
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
                <a href="{{ route('repair.part.new') }}" class="btn">補修部品追加</a>
            </div>
            <div class="search-result-count">
                @if (isset($repair_parts))
                    検索結果：{{$repair_parts->total()}}件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>
    {{$repair_parts->appends(request()->input())->links()}}
    <!-- 検索結果 可変 -->
        @isset ($repair_parts)
            <table>
                <colgroup width="80"/>
                <colgroup width="120"/>
                <colgroup width=""/>
                <colgroup width="120"/>
                <colgroup width="80"/>
                <colgroup width="80"/>
                <tr>
                    <th>ID</th>
                    <th>商品コード</th>
                    <th>商品名</th>
                    <th>定価</th>
                    <th>表示順</th>
                    <th>処理</th>
                </tr>
                @foreach ($repair_parts as $item)
                    <tr>
                        <td>{{$item['repair_parts_id']}}</td>
                        <td>{{$item['product_code']}}</td>
                        <td>{{$item['product_name']}}</td>
                        <td>{{$item['price']}}</td>
                        <td>{{$item['display_order']}}</td>
                        <td>
                            <a href="{{ route('repair.part.edit', ['id'=>$item['repair_parts_id']])}}">編集</a>
                        </td>
                    </tr>
                @endforeach
            </table>
            {{$repair_parts->appends(request()->input())->links()}}
        @endisset
    </section>
@endsection