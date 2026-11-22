@extends('layouts.base')
@section('title', 'レビュー一覧')
@section('breadcrumbs')
    @parent
    <li>レビュー一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="search">
        <form method="GET">
            <ul>
                <li>
                    <label>キーワード</label>
                    <input type="text" name="s[keyword]" value="{{ request('s.keyword') }}">
                    　<label>ニックネーム</label>
                    <input type="text" name="s[(like)name]" value="{{ request('s.(like)name') }}">
                    　<label>タイトル</label>
                    <input type="text" name="s[(like)title]" value="{{ request('s.(like)title') }}">
                </li>
                <li>
                    <label>inputkey</label>
                    <input type="text" name="s[(like)inputkey]" value="{{ request('s.(like)inputkey') }}">
                    <label>　公開設定　</label>
                    <select name="s[status]">
                        @php($value = request('s.status'))
                        <option @if ($value == '' && $value != 0 ) selected @endif value="">選択してください</option>
                        <option @if ($value == 1) selected @endif value="1">公開</option>
                        <option @if ($value != '' && $value == 0) selected @endif value="0">非公開</option>
                    </select>
                </li>
                <li>
                    <label>評価　　</label>
                    <select name="s[(ge)star]">
                        <option value="">未選択</option>
                        @for( $x = 1; $x < 6; $x ++ ):
                        <option value="{!! $x !!}" @if( request('s.(ge)star')==$x ) selected="selected" @endif>{!! $x !!}</option>
                        @endfor
                    </select>
                    <!--
                    <input type="number" name="s[(ge)star]" class="numeric" min="0" max="5" value="{{ request('s.(ge)star') }}">
                    -->
                    　〜　
                    <select name="s[(le)star]">
                        <option value="">未選択</option>
                        @for( $x = 1; $x < 6; $x ++ ):
                        <option value="{!! $x !!}" @if( request('s.(le)star')==$x ) selected="selected" @endif>{!! $x !!}</option>
                        @endfor
                    </select>
                    <!--
                    <input type="number" name="s[(le)star]" class="numeric" min="0" max="5" value="{{ request('s.(le)star') }}">
                    -->
                </li>
            </ul>
            <div class="procArea">
                <button type="submit">検索</button>
                <button type="button" class="btn-clear">クリア</button>
            </div>
        </form>
    </section>

    <section class="list">
        <div class="search-result-info">
            <div class="search-result-count">
                @if (isset($reviews))
                    検索結果：{{ $reviews->total() }} 件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>

        {{ $reviews->appends(request()->input())->links() }}
        <!-- 検索結果 可変 -->
        @isset ($reviews)
            <table>
                <colgroup width="50"/>
                <colgroup width="150"/>
                <colgroup width=""/>
                <colgroup width="150"/>
                <colgroup width="180"/>
                <colgroup width="100"/>
                <colgroup width="180"/>
                <colgroup width="80"/>
                <tr>
                    <th>ID</th>
                    <th>inputkey</th>
                    <th>キーワード</th>
                    <th>ニックネーム</th>
                    <th>タイトル</th>
                    <th>公開設定</th>
                    <th>作成日時</th>
                    <th>処理</th>
                </tr>
                @foreach ($reviews as $item)
                    <tr>
                        <td>{{ data_get($item, 'id') }}</td>
                        <td>{{ data_get($item, 'inputkey') }}</td>
                        <td>
                            <?php
                                // キーワードは1だけでよいが、念の為存在したらくっつけて出しておく
                                $tmp = [];
                                for ($i = 1; $i <= 5; $i++) {
                                    if (!empty(with($k = data_get($item, 'keyword' . (string) $i)))) {
                                        $tmp[] = $k;
                                    }
                                }
                                $val = implode(', ', $tmp);
                            ?>
                            {{ $val }}
                        </td>
                        <td>{{ data_get($item, 'name') }}</td>
                        <td>{{ data_get($item, 'title') }}</td>
                        <td>
                            @if ((int) data_get($item, 'status') === 1)
                                公開
                            @else
                                非公開
                            @endif
                        </td>
                        <td>{{ data_get($item, 'updated_at') }}</td>
                        <td>
                            <a href="{{ route('reviews.edit', ['review' => data_get($item, 'id')]) }}">編集</a><br>
                        </td>
                    </tr>
                @endforeach
            </table>
            {{ $reviews->appends(request()->input())->links() }}
        @endisset

    </section>
@endsection
