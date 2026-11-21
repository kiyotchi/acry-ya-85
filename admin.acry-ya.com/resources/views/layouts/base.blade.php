<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    @yield('head')
    @yield('script_head')
</head>
<body id="body">
@yield('header')
@yield('sidebar')
<main id="@section('mainId', 'under')">
    <article>
        @section('breadcrumbs')
            <ul id="pageTitle">
                @show
            </ul>
        @yield('content')
        @yield('footer')
    </article>
</main>
@yield('script_foot')
</body>
</html>