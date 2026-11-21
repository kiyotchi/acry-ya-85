@extends('layouts.base')
@section('title', '板厚一覧')
@section('breadcrumbs')
    @parent
    <li>板厚一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="list">
        <div class="search-result-info">
            <div class="search-result-proc">
                <a href="{{ route('plate.thickness.new') }}" class="btn">新規登録</a>
            </div>
            <div class="search-result-count">
                @if (isset($plate_thicknesses))
                    検索結果：{{$plate_thicknesses->total()}}件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>
        <hr>
        {{$plate_thicknesses->appends(request()->input())->links()}}
        @isset ($plate_thicknesses)
            <table>
                <colgroup width="80"/>
                <colgroup width=""/>
                <colgroup width="180"/>
                <colgroup width="80"/>
                <tr>
                    <th>ID</th>
                    <th>板厚</th>
                    <th>更新日時</th>
                    <th>処理</th>
                </tr>
                @foreach ($plate_thicknesses as $item)
                    <tr>
                        <td>{{$item['plate_thickness_id']}}</td>
                        <td>{{$item['plate_thickness']}}</td>
                        <td>{{$item['updated_at']}}</td>
                        <td><a href="{{route('plate.thickness.edit', ['id'=>$item['plate_thickness_id']])}}">編集</a></td>
                    </tr>
                @endforeach
            </table>
            {{$plate_thicknesses->appends(request()->input())->links()}}
        @endisset
    </section>
@endsection
