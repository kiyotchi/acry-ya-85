@section('header')
<header>
    <div>
        <h2><a href="{{ url('/') }}">アクリヤWEB管理画面</a></h2>
        @guest
        @else
            <nav>
{{--
                <p id="login-id">ログインユーザ：{{ Auth::user()->name }}</p>
--}}
                <p><a href="{{ route('logout') }}" class="btn">ログアウト</a></p>
            </nav>
        @endguest
    </div>
</header>
@endsection