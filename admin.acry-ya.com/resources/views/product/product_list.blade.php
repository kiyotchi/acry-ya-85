@extends('layouts.base')
@section('title', '商品一覧')
@section('breadcrumbs')
    @parent
    <li>商品一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    @inject('ProductType', 'App\ValueObject\ProductType')
    <section class="search">
        {!! Form::open(['method'=>'GET', 'route'=>'product.list']) !!}
        <ul>
            <li>
                <label>商品名</label>
                {!! Form::text('product_name', old('product_name', isset($product_name) ? $product_name : null)) !!}
                　<label>商品コード</label>
                {!! Form::text('product_code', old('product_code', isset($product_code) ? $product_code : null)) !!}
                　<label>表示</label>
                {!! Form::select(
                    'is_display',
                    ['表示しない','表示する'],
                    old('is_display', isset($is_display) ? $is_display : null),
                    ['placeholder' => '選択してください']
                ) !!}
            </li>
            <li>
                <label>種別　</label>
                {!! Form::select(
                    'product_type_code',
                    $product_types,
                    old('product_type_code', isset($product_type_code) ? $product_type_code : null),
                    ['placeholder' => '選択してください']
                ) !!}
                　　　　　<label>カテゴリ</label>
                {!! Form::select(
                    'product_category_id',
                    array_pluck($product_cateogries, 'product_category_name', 'product_category_id'),
                    old('product_category_id', isset($product_category_id) ? $product_category_id : null),
                    ['placeholder' => '選択してください']
                ) !!}
            </li>
            <li>
                <label>セミオーダー詳細ページHTML</label>
                {!! Form::text('semi_html_part', old('semi_html_part', isset($semi_html_part) ? $semi_html_part : null)) !!}
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
                <a href="{{ route('product.standard.new') }}" class="btn">標準商品追加</a>
                <a href="{{ route('product.custom.new') }}" class="btn">セミオーダー商品追加</a>
            </div>
            <div class="search-result-count">
                @if (isset($products))
                    検索結果：{{$products->total()}}件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>
    {{$products->appends(request()->input())->links()}}
    <!-- 検索結果 可変 -->
        @isset ($products)
            <table>
                <colgroup width="50"/>
                <colgroup width="150"/>
                <colgroup width=""/>
                <colgroup width="150"/>
                <colgroup width="180"/>
                <colgroup width="100"/>
                <colgroup width="180"/>
                <colgroup width="80"/>
                <tr>
                    <th>ID</th>
                    <th>商品コード</th>
                    <th>商品名</th>
                    <th>カテゴリ</th>
                    <th>出荷目安</th>
                    <th>種別</th>
                    <th>更新日時</th>
                    <th>処理</th>
                </tr>
                @foreach ($products as $item)
                    <tr>
                        <td>{{$item['product_id']}}</td>
                        <td>{{$item['product_code']}}</td>
                        <td>{{$item['product_name']}}</td>
                        <td>
                            @isset($item->productCategory->product_category_name)
                                {{ $item->productCategory->product_category_name }}
                            @endisset
                        </td>
                        <td>{{ isset($deliveries[$item['delivery_schedule_id']]) ? $deliveries[$item['delivery_schedule_id']] : null}}</td>
                        <td>{{$ProductType->getTypeName($item["product_type_code"])}}</td>
                        <td>{{$item['updated_at']}}</td>
                        <td>
                            <a href="{{ route('product.' . $item['product_type_code'] . '.edit', ['id'=>$item['product_id']])}}">編集</a>
                        </td>
                    </tr>
                @endforeach
            </table>
            {{$products->appends(request()->input())->links()}}
        @endisset
    </section>
@endsection