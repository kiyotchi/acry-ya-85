@section('head')
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>@yield('title')</title>
<link rel="shortcut icon" href="{{ asset('/assets/images/favicon.ico') }}" type="image/x-icon">
<link rel="apple-touch-icon" href="{{ asset('/assets/images/favicon.png') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/base.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/style.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('assets/css/dev-acry-ya.css') }}">
<link rel="stylesheet" href="{{asset('/css/custom.css')}}">
<script src="{{ asset('assets/js/jquery-1.11.0.min.js') }}"></script>
<script src="{{ asset('assets/js/common.js') }}"></script>
<script src="{{ asset('assets/js/lazysizes.min.js') }}"></script>
<meta name="csrf-token" content="{{ csrf_token() }}">
@endsection
