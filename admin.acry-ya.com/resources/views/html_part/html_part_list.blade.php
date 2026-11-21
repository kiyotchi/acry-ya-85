@extends('layouts.base')
@section('title', 'HTMLパーツ一覧')
@section('breadcrumbs')
    @parent
    <li>HTMLパーツ一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="search">
        {!! Form::open(['method'=>'GET', 'route'=>'html.part.list']) !!}
        <ul>
            <li>
                <label>タイトル</label>
                {!! Form::text('title', old('title', isset($title) ? $title : null)) !!}
            </li>
            <li>
                <label>種別</label>
                {!! Form::select(
                    'product_html_part_type_id',
                    array_pluck($html_part_types, 'product_html_part_type_name', 'product_html_part_type_id'),
                    old('product_html_part_type_id', isset($product_html_part_type_id) ? $product_html_part_type_id : null),
                    ['placeholder' => '選択してください']
                )!!}
            </li>
            <li>
                <label>HTML</label>
                {!! Form::text('html_part', old('html_part', isset($html_part) ? $html_part : null)) !!}
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
                <a href="{{ route('html.part.new') }}" class="btn">新規登録</a>
            </div>
            <div class="search-result-count">
                @if (isset($html_parts))
                    検索結果：{{$html_parts->total()}}件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>
    {{$html_parts->appends(request()->input())->links()}}
    <!-- 検索結果 可変 -->
        @isset ($html_parts)
            <table>
                <colgroup width="80"/>
                <colgroup width="300"/>
                <colgroup width=""/>
                <colgroup width="180"/>
                <colgroup width="80"/>
                <tr>
                    <th>ID</th>
                    <th>種別</th>
                    <th>タイトル</th>
                    <th>更新日時</th>
                    <th>処理</th>
                </tr>
                @foreach ($html_parts as $item)
                    <tr>
                        <td>{{$item['product_html_part_id']}}</td>
                        <td>{{$item->productHtmlPartType->product_html_part_type_name}}</td>
                        <td>{{$item['part_title']}}</td>
                        <td>{{$item['updated_at']}}</td>
                        <td><a href="{{ route('html.part.edit', ['id'=>$item['product_html_part_id']])}}">編集</a></td>
                    </tr>
                @endforeach
            </table>
            {{$html_parts->appends(request()->input())->links()}}
        @endisset
    </section>
@endsection