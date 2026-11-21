@extends('layouts.base')
@section('title', 'サイズ一覧')
@section('breadcrumbs')
    @parent
    <li>サイズ一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="search">
        {!! Form::open(['method'=>'GET', 'route'=>'size.list']) !!}
        <ul>
            <li>
                <label>サイズ</label>
                {!! Form::text('size', old('size', isset($size) ? $size : null)) !!}
            </li>
            <li>
                <label>サイズグループ</label>
                {!! Form::select(
                'size_group_id',
                array_pluck($size_groups, 'size_group_name', 'size_group_id'),
                old('size_group_id', isset($size_group_id) ? $size_group_id : null),
                ['placeholder' => '選択してください']
                ) !!}
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
                <a href="{{ route('size.new') }}" class="btn">新規登録</a>
            </div>
            <div class="search-result-count">
                @if (isset($sizes))
                    検索結果：{{$sizes->total()}}件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>
        {{$sizes->appends(request()->input())->links()}}
        @isset ($sizes)
            <table>
                <colgroup width="80"/>
                <colgroup width="200"/>
                <colgroup width="80"/>
                <colgroup width=""/>
                <colgroup width="80"/>
                <colgroup width="180"/>
                <colgroup width="80"/>
                <tr>
                    <th>ID</th>
                    <th>サイズグループ</th>
                    <th>種別</th>
                    <th>サイズ</th>
                    <th>表示順</th>
                    <th>更新日時</th>
                    <th>処理</th>
                </tr>
                @foreach ($sizes as $item)
                    <tr>
                        <td>{{$item['size_id']}}</td>
                        <td>{{$size_groups->where('size_group_id', $item['size_group_id'])->pluck('size_group_name')->first()}}</td>
                        @if (($item['size_type']) == \App\Services\SizeService::SIZE_TYPE_NUMERIC)
                            <td>数値</td>
                            <td>{{$item['width_size']}}×{{$item['height_size']}}</td>
                        @elseif(($item['size_type']) == \App\Services\SizeService::SIZE_TYPE_STRING)
                            <td>文字列</td>
                            <td>{{$item['size']}}</td>
                        @endif
                        <td>{{$item['display_order']}}</td>
                        <td>{{$item['updated_at']}}</td>
                        <td><a href="{{route('size.edit', ['id'=>$item['size_id']])}}">編集</a></td>
                    </tr>
                @endforeach
            </table>
            {{$sizes->appends(request()->input())->links()}}
        @endisset
    </section>
@endsection
