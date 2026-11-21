@extends('layouts.simple')

@section('title', 'ログイン')
@section('mainId', 'login')

@include('layouts.head')
@include('layouts.header')
@section('content')
    <section class="login">
        <div id="login-box">
            {!! Form::open(['method'=>'POST', 'route'=>array('login'), 'class'=>'form-horizontal']) !!}
                <div>
                    <label>ユーザー</label>
                    <p class="form-group{{ $errors->has('email') ? ' has-error' : '' }}"><input id="email" type="text" class="form-control" name="email" value="{{ old('email') }}" placeholder="ユーザー" autofocus></p>
                    @if ($errors->has('email'))
                        <p class="error">{{ $errors->first('email') }}</p>
                    @endif
                    <label>パスワード</label>
                    <p class="form-group{{ $errors->has('password') ? ' has-error' : '' }}"><input id="password" type="password" class="form-control" name="password" placeholder="パスワード"></p>
                    @if ($errors->has('password'))
                        <p class="error">{{ $errors->first('password') }}</p>
                    @endif
                </div>
                <div class="procArea">
                    {!! Form::submit('ログイン') !!}
                </div>
            {!! Form::close() !!}
        </div>
    </section>
@endsection