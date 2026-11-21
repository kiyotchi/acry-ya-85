@extends('layouts.base')
@section('title', '板厚編集')
@section('breadcrumbs')
    @parent
    <li>板厚編集</li>
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

        @if (isset($plate_thickness))
            {!! Form::open(['method'=>'POST', 'route'=>array('plate.thickness.update', $plate_thickness->plate_thickness_id)]) !!}
        @else
            {!! Form::open(['method'=>'POST', 'route'=>'plate.thickness.register']) !!}
        @endisset
        <dl>
            <dt class="required">板厚</dt>
            <dd>
                {!! Form::text('plate_thickness', old('plate_thickness', isset($plate_thickness->plate_thickness) ? $plate_thickness->plate_thickness : null), ['class'=>'numeric']) !!}
                @if ($errors->first('plate_thickness'))
                    <div class="validate">{{$errors->first('plate_thickness')}}</div>
                @endif
            </dd>
            <dt>表示順</dt>
            <dd>
                {!! Form::text('display_order', old('display_order', isset($plate_thickness->display_order) ? $plate_thickness->display_order : null), ['class'=>'numeric']) !!}
                @if ($errors->first('display_order'))
                    <div class="validate">{{$errors->first('display_order')}}</div>
                @endif
            </dd>
        </dl>

        <div class="procArea">
            {!! Form::submit('登録') !!}
        </div>
        {!! Form::hidden('plate_thickness_id', isset($plate_thickness->plate_thickness_id) ? $plate_thickness->plate_thickness_id : null) !!}
        {!! Form::close() !!}

        @if (isset($plate_thickness))
            <div class="procArea-delete">
                {!! Form::open(['method'=>'POST', 'route'=>array('plate.thickness.delete', $plate_thickness->plate_thickness_id)]) !!}
                {!! Form::submit('削除') !!}
                {!! Form::hidden('plate_thickness_id', isset($plate_thickness->plate_thickness_id) ? $plate_thickness->plate_thickness_id : null) !!}
                {!! Form::close() !!}
            </div>
        @endif
    </section>
@endsection
