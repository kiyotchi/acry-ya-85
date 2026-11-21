@extends('layouts.base')
@section('title', 'カラー編集')
@section('breadcrumbs')
    @parent
    <li>カラー編集</li>
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
            <div class=" attention">
                <ul>
                    <li>{{session('application_error_message')}}</li>
                </ul>
            </div>
        @endif

        @if (isset($color))
            {!! Form::open(['method'=>'POST', 'route'=>array('color.update', $color->color_id)]) !!}
        @else
            {!! Form::open(['method'=>'POST', 'route'=>'color.register']) !!}
        @endisset
        <dl>
            <dt class="required">カラー名</dt>
            <dd>
                {!! Form::text('color_name', old('color_name', isset($color->color_name) ? $color->color_name : null)) !!}
                @if ($errors->first('color_name'))
                    <div class="validate">{{$errors->first('color_name')}}</div>
                @endif
            </dd>
            <dt class="required">カラーグループ</dt>
            <dd>
                {!! Form::select(
                'color_group_id',
                array_pluck($color_group, 'color_group_name', 'color_group_id'),
                old('color_group_id', isset($color->color_group_id) ? $color->color_group_id : null),
                ['placeholder' => '選択してください']
                ) !!}
                @if ($errors->first('color_group_id'))
                    <div class="validate">{{$errors->first('color_group_id')}}</div>
                @endif
            </dd>
            <dt>表示順</dt>
            <dd>
                {!! Form::text('display_order', old('display_order', isset($color->display_order) ? $color->display_order : null), ['class'=>'numeric']) !!}
                @if ($errors->first('display_order'))
                    <div class="validate">{{$errors->first('display_order')}}</div>
                @endif
            </dd>
        </dl>

        <div class="procArea">
            {!! Form::submit('登録') !!}
        </div>
        {!! Form::hidden('color_id', isset($color->color_id) ? $color->color_id : null) !!}
        {!! Form::close() !!}

        @if (isset($color))
            <div class="procArea-delete">
                {!! Form::open(['method'=>'POST', 'route'=>array('color.delete', $color->color_id)]) !!}
                {!! Form::submit('削除') !!}
                {!! Form::hidden('color_id', isset($color->color_id) ? $color->color_id : null) !!}
                {!! Form::close() !!}
            </div>
        @endif
    </section>
@endsection