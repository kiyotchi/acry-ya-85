<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta meta http-equiv="Expires" content="604800">
<meta name="format-detection" content="telephone=no">
<meta name="description" content="@yield('description')">
<meta name="keywords" content="アクリ屋,@yield('keywords')">
<title>@if (View::hasSection('title'))@yield('title') | @endifアクリ屋ドットコム</title>
<meta property="og:title" content="@if (View::hasSection('title'))@yield('title') | @endifアクリ屋ドットコム">
<meta property="og:type" content="website">
<meta property="og:url" content="{{ ( !empty($current_url) ) ? $current_url : request()->fullUrl() }}">
<meta property="og:image" content="@if (View::hasSection('ogpUrl'))@yield('ogpUrl')@else {{ asset('assets/images/ogp.jpg') }} @endif">
<meta property="og:site_name" content="アクリ屋ドットコム">
<meta property="og:description" content="@yield('description')">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="@if (View::hasSection('title'))@yield('title') | @endifアクリ屋ドットコム">
<meta name="twitter:description" content="@yield('description')">
<meta name="twitter:image" content="@if (View::hasSection('twitterUrl'))@yield('twitterUrl')@else {{ asset('assets/images/ogp.jpg') }} @endif">
<meta itemprop="image" content="@if (View::hasSection('ogpUrl'))@yield('ogpUrl')@else {{ asset('assets/images/ogp.jpg') }} @endif">
<link rel="shortcut icon" href="{{ asset('assets/images/favicon.ico') }}" type="image/x-icon">
<link rel="apple-touch-icon" href="{{ asset('assets/images/favicon.png') }}">
<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
<link rel="stylesheet" href="/assets/stylesheets/base.css">
<link rel="stylesheet" href="/assets/stylesheets/layout.css?ver=20220722">
<link rel="stylesheet" href="/assets/stylesheets/style.css">
@yield('headCss')
<link rel="stylesheet" href="/assets/stylesheets/acry-ya.css?ver=20260710">
<link rel="stylesheet" href="/assets/stylesheets/environmentcolor.css">
<script>window.Promise || document.write('<script src="//www.promisejs.org/polyfills/promise-7.0.4.min.js"><\/script>')</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.js"></script>
<script src="{{ asset('assets/javascripts/common.js') }}"></script>
<script src="{{ asset('assets/javascripts/function.js?ver=20230701') }}"></script>
<script src="{{ asset('assets/javascripts/plugins/cookie.js') }}"></script>
<script src="{{ asset('assets/javascripts/plugins/add-comma.js') }}"></script>
<meta name="csrf-token" content="{{ csrf_token() }}">
