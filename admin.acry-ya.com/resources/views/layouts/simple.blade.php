<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @yield('head')
    @yield('script_head')
</head>
<body>
@yield('header')
<main id="@yield('main_id')">
    <article>
        @yield('content')
    </article>
</main>
@yield('footer')
@yield('script_foot')
</body>
</html>
