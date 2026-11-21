@extends('layouts.base')
@section('title', 'カラー一覧')
@section('breadcrumbs')
    @parent
    <li>カラー一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="search">
        {!! Form::open(['method'=>'GET', 'route'=>'color.list']) !!}
        <ul>
            <li>
                <label>カラー名</label>
                {!! Form::text('color_name', old('color_name', isset($color_name) ? $color_name : null)) !!}
            </li>
            <li>
                <label>カラーグループ</label>
                {!! Form::select(
                'color_group_id',
                array_pluck($color_group, 'color_group_name', 'color_group_id'),
                old('color_group_id', isset($color_group_id) ? $color_group_id : null),
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
                <a href="{{ route('color.new') }}" class="btn">新規登録</a>
            </div>
            <div class="search-result-count">
                @if (isset($colors))
                    検索結果：{{$colors->total()}}件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>
        {{$colors->appends(request()->input())->links()}}
        @isset ($colors)
            <table>
                <colgroup width="80"/>
                <colgroup width="300"/>
                <colgroup width=""/>
                <colgroup width="180"/>
                <colgroup width="80"/>
                <tr>
                    <th>ID</th>
                    <th>カラーグループ</th>
                    <th>カラー</th>
                    <th>更新日時</th>
                    <th>処理</th>
                </tr>
                @foreach ($colors as $item)
                    <tr>
                        <td>{{$item['color_id']}}</td>
                        <td>{{$color_group->where('color_group_id', $item['color_group_id'])->pluck('color_group_name')->first()}}</td>
                        <td>{{$item['color_name']}}</td>
                        <td>{{$item['updated_at']}}</td>
                        <td><a href={{ route('color.edit', ['id' => $item['color_id']])}}>編集</a></td>
                    </tr>
                @endforeach
            </table>
            {{$colors->appends(request()->input())->links()}}
        @endisset
    </section>
@endsection