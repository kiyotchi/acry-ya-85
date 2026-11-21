@extends('layouts.simple')

@section('title', '403エラー')
@section('mainId', 'under')

@section('content')
    <section class="error">
        <div>
            <h2>403 Forbidden</h2>
            @if( $exception->getMessage() )
            <p class="message">{{ $exception->getMessage() }}</p>
            @endif
        </div>
    </section>
@endsection