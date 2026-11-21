@extends('layouts.base')
@section('title', '素材編集')
@section('breadcrumbs')
    @parent
    <li>素材編集</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="edit">
        @if (session('complete_message'))
            <div class="complete_message">
                <ul>
                    <li>{{ session('complete_message') }}</li>
                </ul>
            </div>
        @endif
        @if(session('application_error_message'))
            <div class="attention">
                <ul>
                    <li>{{session('application_error_message')}}</li>
                </ul>
            </div>
        @endif

        @if (isset($material))
            {!! Form::open(['method'=>'POST', 'route'=>array('material.update', $material->material_id)]) !!}
        @else
            {!! Form::open(['method'=>'POST', 'route'=>'material.register']) !!}
        @endisset
        <dl>
            <dt>素材コード</dt>
            <dd>
                {!! Form::text('material_code', old('material_code', isset($material->material_code) ? $material->material_code : null)) !!}
                @if ($errors->first('material_code'))
                    <div class="validate">{{$errors->first('material_code')}}</div>
                @endif
            </dd>
            <dt class="required">素材名</dt>
            <dd>
                {!! Form::text('material_name', old('material_name', isset($material->material_name) ? $material->material_name : null)) !!}
                @if ($errors->first('material_name'))
                    <div class="validate">{{$errors->first('material_name')}}</div>
                @endif
            </dd>
            <dt>メーカー名</dt>
            <dd>
                {!! Form::text('maker_name', old('maker_name', isset($material->maker_name) ? $material->maker_name : null)) !!}
                @if ($errors->first('maker_name'))
                    <div class="validate">{{$errors->first('maker_name')}}</div>
                @endif
            </dd>
            <dt>仕入値</dt>
            <dd>
                {!! Form::text('cost_price', old('cost_price', isset($material->cost_price) ? $material->cost_price : null), ['class'=>'numeric']) !!}
                @if ($errors->first('cost_price'))
                    <div class="validate">{{$errors->first('cost_price')}}</div>
                @endif
            </dd>
            <dt>平米単価</dt>
            <dd>
                {!! Form::text('square_meter_unit_price', old('square_meter_unit_price', isset($material->square_meter_unit_price) ? $material->square_meter_unit_price : null), ['class'=>'numeric']) !!}
                @if ($errors->first('square_meter_unit_price'))
                    <div class="validate">{{$errors->first('square_meter_unit_price')}}</div>
                @endif
            </dd>
            <dt>カラー</dt>
            <dd>
                {!! Form::select(
                'color_id',
                array_pluck($color, 'color_name', 'color_id'),
                old('color_id', isset($material->color_id) ? $material->color_id : null),
                ['placeholder' => '選択してください']
                ) !!}
                @if ($errors->first('color_id'))
                    <div class="validate">{{$errors->first('color_id')}}</div>
                @endif
            </dd>
            <dt>横サイズ</dt>
            <dd>
                {!! Form::text('width_size', old('width_size', isset($material->width_size) ? $material->width_size : null), ['class'=>'numeric']) !!}
                @if ($errors->first('width_size'))
                    <div class="validate">{{$errors->first('width_size')}}</div>
                @endif
            </dd>
            <dt>縦サイズ</dt>
            <dd>
                {!! Form::text('height_size', old('height_size', isset($material->height_size) ? $material->height_size : null), ['class'=>'numeric']) !!}
                @if ($errors->first('height_size'))
                    <div class="validate">{{$errors->first('height_size')}}</div>
                @endif
            </dd>
            <dt>板厚</dt>
            <dd>
                {!! Form::select(
                'plate_thickness_id',
                array_pluck($plate_thickness, 'plate_thickness', 'plate_thickness_id'),
                old('plate_thickness_id', isset($material->plate_thickness_id) ? $material->plate_thickness_id : null),
                ['placeholder' => '選択してください']
                ) !!}
                @if ($errors->first('plate_thickness_id'))
                    <div class="validate">{{$errors->first('plate_thickness_id')}}</div>
                @endif
            </dd>
            <dt>改訂履歴</dt>
            <dd>
                {!! Form::textarea('history', old('history', isset($material->history) ? $material->history : null)) !!}
                @if ($errors->first('history'))
                    <div class="validate">{{$errors->first('history')}}</div>
                @endif
            </dd>
        </dl>

        <div class="procArea">
            {!! Form::submit('登録') !!}
        </div>
        {!! Form::hidden('material_id', isset($material->material_id) ? $material->material_id : null) !!}
        {!! Form::close() !!}

        @if (isset($material))
            <div class="procArea-delete">
                {!! Form::open(['method'=>'POST', 'route'=>array('material.delete', $material->material_id)]) !!}
                {!! Form::submit('削除') !!}
                {!! Form::hidden('material_id', isset($material->material_id) ? $material->material_id : null) !!}
                {!! Form::close() !!}
            </div>
        @endif
    </section>
@endsection
