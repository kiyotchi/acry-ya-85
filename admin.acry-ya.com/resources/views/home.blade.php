@extends('layouts.base')
@section('title', 'メインメニュー')
@section('mainId', 'under')
@section('breadcrumbs')
    @parent
    <li>メインメニュー</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="mainMenu">
        <h3>メインメニュー</h3>
        <nav>
            <h3>商品管理</h3>
            <ul>
                <li><a href="{{ route('product.list') }}">商品一覧</a></li>
                <li><a href="{{ route('feature.tag.list') }}">商品タグ一覧</a></li>
                <li><a href="{{ route('html.part.list') }}">HTMLパーツ一覧</a></li>
                <li><a href="{{ route('discount.rate.list') }}">割引率一覧</a></li>
            </ul>
        </nav>
        <nav>
            <h3>カテゴリ管理</h3>
            <ul>
                <li><a href="{{ route('product.category.list') }}">カテゴリ一覧</a></li>
            </ul>
        </nav>
        <nav>
            <h3>規格管理</h3>
            <ul>
                <li><a href="{{ route('color.list') }}">カラー一覧</a></li>
                <li><a href="{{ route('size.list') }}">サイズ一覧</a></li>
                <li><a href="{{ route('plate.thickness.list') }}">板厚一覧</a></li>
            </ul>
        </nav>
<!--
        <nav>
            <h3>素材管理</h3>
            <ul>
                <li><a href="{{ route('material.list') }}">素材一覧</a></li>
            </ul>
        </nav>
-->
        <nav>
            <h3>補修部品管理</h3>
            <ul>
                <li><a href="{{ route('repair.part.list')  }}">補修部品一覧</a></li>
                <li><a href="{{ route('repair.part.group.list')  }}">補修部品グループ一覧</a></li>
            </ul>
        </nav>
        <nav>
            <h3>リソース管理</h3>
            <ul>
                <li><a href="{{ route('resource.image')  }}">画像編集</a></li>
            </ul>
        </nav>
        <nav>
            <h3>サイト管理</h3>
            <ul>
                <li><a href="{{ route('tax.setting') }}">消費税設定</a></li>
                <li><a href="{{ route('notice.setting') }}">告知情報設定</a></li>
            </ul>
        </nav>
        <nav>
            <h3>レビュー管理</h3>
            <ul>
                <li><a href="{{ route('reviews.index') }}">レビュー一覧</a></li>
            </ul>
        </nav>
    </section>
@endsection
