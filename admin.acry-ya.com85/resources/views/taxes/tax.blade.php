@extends('layouts.base')
@section('title', '消費税設定')
@section('breadcrumbs')
    @parent
    <li>消費税設定</li>
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

        {!! Form::open(['method'=>'POST', 'route'=>array('tax.register', isset($tax_id) ? $tax_id : null)]) !!}
        <dl>
            <dt class="required">消費税</dt>
            <dd>
                {!! Form::text('tax', old('tax', isset($tax) ? $tax : null), ['class'=>'numeric']) !!}<span class="unit">%</span>
                @if ($errors->first('tax'))
                    <div class="validate">{{$errors->first('tax')}}</div>
                @endif
            </dd>
        </dl>

        <div class="procArea">
            {!! Form::submit('登録') !!}
        </div>
        {!! Form::close() !!}
    </section>
@endsection
