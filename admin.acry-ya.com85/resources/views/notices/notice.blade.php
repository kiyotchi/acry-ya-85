@extends('layouts.base')
@section('title', '告知情報設定')
@section('breadcrumbs')
    @parent
    <li>告知情報設定</li>
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

        {!! Form::open(['method'=>'POST', 'route'=>array('notice.register', isset($notice_id) ? $notice_id : null)]) !!}
        <dl>
            <dt>告知情報</dt>
            <dd>
                {!! Form::textarea('notice', old('notice', isset($notice->notice) ? $notice->notice : null)) !!}
                @if ($errors->first('notice'))
                    <div class="validate">{{$errors->first('notice')}}</div>
                @endif
            </dd>
                <dt class="required">表示設定</dt>
            <dd>
                <label>{!! Form::radio('is_display', 1, old('is_display', isset($notice->is_display) ? $notice->is_display == 1 : null)) !!}
                    表示する</label>
                <label> {!! Form::radio('is_display', 0, old('is_display', isset($notice->is_display) ? $notice->is_display == 0 : null)) !!}
                    表示しない</label>
                @if ($errors->first('is_display'))
                    <div class="validate">{{$errors->first('is_display')}}</div>
                @endif
            </dd>
        </dl>
        <div class="procArea">
            {!! Form::submit('登録') !!}
        </div>
        {!! Form::close() !!}
    </section>
@endsection
