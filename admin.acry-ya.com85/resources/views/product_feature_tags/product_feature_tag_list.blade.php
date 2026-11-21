@extends('layouts.base')
@section('title', '商品タグ一覧')
@section('breadcrumbs')
    @parent
    <li>商品タグ一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="list">
        <div class="search-result-info">
            <div class="search-result-proc">
                <a href="{{ route('feature.tag.new') }}" class="btn">新規登録</a>
            </div>
            <div class="search-result-count">
                @if (isset($product_feature_tags))
                    検索結果：{{$product_feature_tags->total()}}件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>
        {{$product_feature_tags->links()}}
        @isset ($product_feature_tags)
            <table>
                <colgroup width="80"/>
                <colgroup width=""/>
                <colgroup width=""/>
                <colgroup width="180"/>
                <colgroup width="80"/>
                <tr>
                    <th>ID</th>
                    <th>商品タグ（内部認識用）</th>
                    <th>商品タグ</th>
                    <th>更新日時</th>
                    <th>処理</th>
                </tr>
                @foreach ($product_feature_tags as $item)
                    <tr>
                        <td>{{$item['product_feature_tag_id']}}</td>
                        <td>{{$item['product_feature_tag_name_inside']}}</td>
                        <td>{{$item['product_feature_tag_name']}}</td>
                        <td>{{$item['updated_at']}}</td>
                        <td><a href="{{ route('feature.tag.edit', ['id'=>$item['product_feature_tag_id']]) }}">編集</a>
                        </td>
                    </tr>
                @endforeach
            </table>
            {{$product_feature_tags->links()}}
        @endisset
    </section>
@endsection