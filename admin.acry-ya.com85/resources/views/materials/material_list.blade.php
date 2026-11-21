@extends('layouts.base')
@section('title', '素材一覧')
@section('breadcrumbs')
    @parent
    <li>素材一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="search">
        {!! Form::open(['method'=>'GET', 'route'=>'material.list']) !!}
        <ul>
            <li>
                <label>素材名</label>
                {!! Form::text('material_name', old('color_name', isset($material_name) ? $material_name : null)) !!}
            </li>
            <li>
                <label>素材コード</label>
                {!! Form::text('material_code', old('material_code', isset($material_code) ? $material_code : null)) !!}
            </li>
            <li>
                <label>カラー</label>
                {!! Form::select(
                'color_id',
                array_pluck($colors, 'color_name', 'color_id'),
                old('color_id', isset($color_id) ? $color_id : null),
                ['placeholder' => '選択してください']
                ) !!}
            </li>
            <li>
                <label>板厚</label>
                {!! Form::select('plate_thickness_id',
                array_pluck($plate_thicknesses, 'plate_thickness', 'plate_thickness_id'),
                old('plate_thickness_id', isset($plate_thickness_id) ? $plate_thickness_id : null),
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
                <a href="{{ route('material.new') }}" class="btn">新規登録</a>
            </div>
            <div class="search-result-count">
                @if (isset($materials))
                    検索結果：{{$materials->total()}}件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>
        {{$materials->appends(request()->input())->links()}}
        @isset ($materials)
            <table>
                <colgroup width="200"/>
                <colgroup width=""/>
                <colgroup width="120"/>
                <colgroup width="120"/>
                <colgroup width="120"/>
                <colgroup width="120"/>
                <colgroup width="180"/>
                <colgroup width="80"/>
                <tr>
                    <th>素材コード</th>
                    <th>素材名</th>
                    <th>カラー</th>
                    <th>横サイズ</th>
                    <th>縦サイズ</th>
                    <th>板厚</th>
                    <th>更新日時</th>
                    <th>処理</th>
                </tr>
                @foreach ($materials as $item)
                    <tr>
                        <td>{{$item['material_code']}}</td>
                        <td>{{$item['material_name']}}</td>
                        <td>{{$colors->where('color_id', $item['color_id'])->pluck('color_name')->first()}}</td>
                        <td>{{$item['width_size']}}</td>
                        <td>{{$item['height_size']}}</td>
                        <td>{{$plate_thicknesses->where('plate_thickness_id', $item['plate_thickness_id'])->pluck('plate_thickness')->first()}}</td>
                        <td>{{$item['updated_at']}}</td>
                        <td><a href={{ route('material.edit', ['id' => $item['material_id']])}}>編集</a></td>
                    </tr>
                @endforeach
            </table>
            {{$materials->appends(request()->input())->links()}}
        @endisset
    </section>
@endsection