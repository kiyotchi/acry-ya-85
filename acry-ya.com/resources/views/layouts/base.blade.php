<!DOCTYPE html>
<html lang="ja" prefix="og: http://ogp.me/ns#">
<head>
    @yield('headStart')
    @include('common.head_start')
    @include('common.meta')
    @yield('headEnd')
</head>
<body id="@yield('bodyId')">
@yield('bodyStart')
<div id="wrapper" class="l-column js-menu">
    @include('common.header')
    @include('common.sidemenu')
    <div class="column__right">
        <div class="l-loading js-loading"><img src="/assets/images/loading.png" class="loading__image is-animated fx-infinite"></div>
        
        <main class="l-main">
            @yield('content')
        </main>
        @include('common.footer')
    </div>
</div>
@yield('bodyEnd')
@include('common.body_end')
</body>
</html>
