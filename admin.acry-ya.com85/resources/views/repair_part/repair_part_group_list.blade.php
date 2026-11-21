@extends('layouts.base')
@section('title', '補修部品グループ一覧')
@section('breadcrumbs')
    @parent
    <li>補修部品グループ一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="search">
        {!! Form::open(['method'=>'GET', 'route'=>'repair.part.group.list']) !!}
        <ul>
            <li>
                <label>グループ名</label>
                {!! Form::text('repair_part_group_name', old('repair_part_group_name', isset($repair_part_group_name) ? $repair_part_group_name : null)) !!}
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
                <a href="{{ route('repair.part.group.new') }}" class="btn">補修部品グループ追加</a>
            </div>
            <div class="search-result-count">
                @if (isset($repair_part_groups))
                    検索結果：{{$repair_part_groups->total()}}件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>
    {{$repair_part_groups->appends(request()->input())->links()}}
    <!-- 検索結果 可変 -->
        @isset ($repair_part_groups)
            <table>
                <colgroup width="90"/>
                <colgroup width=""/>
                <colgroup width="120"/>
                <colgroup width="80"/>
                <colgroup width="80"/>
                <colgroup width="80"/>
                <colgroup width="80"/>
                <tr>
                    <th>ID</th>
                    <th>グループ名</th>
                    <th style="white-space:nowrap;">メニュー表示</th>
                    <th>カテゴリ</th>
                    <th>表示順</th>
                    <th>商品登録</th>
                    <th>処理</th>
                </tr>
                @foreach ($repair_part_groups as $item)
                    <tr>
                        <td>{{$item['repair_part_groups_id']}}</td>
                        <td>{{$item['repair_part_group_name']}}</td>
                        <td>{{ ($item['is_menu_display']) ? 'する' : null}}
                        <td>{{$item['product_category_id']}}</td>
                        <td>{{$item['display_order']}}</td>
                        <td>{{ in_array($item['repair_part_groups_id'], $products_repair_part_groups) ? 'あり' : null}}
                        </td>
                        <td>
                            <a href="{{ route('repair.part.group.edit', ['id'=>$item['repair_part_groups_id']])}}">編集</a>
                        </td>
                    </tr>
                @endforeach
            </table>
            {{$repair_part_groups->appends(request()->input())->links()}}
        @endisset
    </section>
@endsection