@extends('layouts.base')
@section('title', 'レビュー編集')
@section('breadcrumbs')
    @parent
    <li>レビュー編集</li>
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

        <form method="POST" action="{{ route('reviews.update', ['id' => data_get($review, 'id')]) }}">
            @csrf @method('PUT')
            <dl>
                <dt>ID</dt>
                <dd>{{ data_get($review, 'id') }}</dt>
                <dt>Inputkey</dt>
                <dd>{{ data_get($review, 'inputkey') }}</dd>
                <dt class="required">公開設定</dt>
                <dd>
                    <select name="review[status]" required>
                      @php($value = (string) data_get($review, 'status', old('review.status')))
                      <option value="">選択して下さい</option>
                      <option value="1" @if ($value === "1") selected @endif >公開</option>
                      <option value="0" @if ($value === "0") selected @endif >非公開</option>
                    </select>
                    @if ($errors->first('review.status'))
                        <div class="validate">{{ $errors->first('review.status') }}</div>
                    @endif
                </dd>
                <dt class="required">商品キーワード</dt>
                <dd>
                    <input type="text" name="review[keyword1]" value="{{ data_get($review, 'keyword1', old('review.keyword1')) }}">
                    @if ($errors->first('review.keyword1'))
                        <div class="validate">{{ $errors->first('review.keyword1') }}</div>
                    @endif
                </dd>
                <dt class="required">ニックネーム</dt>
                <dd>
                    <input type="text" name="review[name]" value="{{ data_get($review, 'name', old('review.name')) }}">
                    @if ($errors->first('review.name'))
                        <div class="validate">{{ $errors->first('review.name') }}</div>
                    @endif
                </dd>
                <dt class="required">タイトル</dt>
                <dd>
                    <input type="text" name="review[title]" value="{{ data_get($review, 'title', old('review.title')) }}">
                    @if ($errors->first('review.title'))
                        <div class="validate">{{ $errors->first('review.title') }}</div>
                    @endif
                </dd>
                <dt class="required">本文</dt>
                <dd>
                    <textarea name="review[content]">{{ data_get($review, 'content', old('review.content')) }}</textarea>
                    @if ($errors->first('review.content'))
                        <div class="validate">{{ $errors->first('review.content') }}</div>
                    @endif
                </dd>
                <dt class="required">評価</dt>
                <dd>
                    <select name="review[star]" required>
                      @php($value = (string) data_get($review, 'star', old('review.star')))
                      <option value="">選択して下さい</option>
                      <option value="5" @if ($value === "5") selected @endif >★ ★ ★ ★ ★  非常に良い</option>
                      <option value="4" @if ($value === "4") selected @endif >★ ★ ★ ★  良い</option>
                      <option value="3" @if ($value === "3") selected @endif >★ ★ ★  普通</option>
                      <option value="2" @if ($value === "2") selected @endif >★ ★  少し悪い</option>
                      <option value="1" @if ($value === "1") selected @endif >★  悪い</option>
                    </select>
                    @if ($errors->first('review.star'))
                        <div class="validate">{{ $errors->first('review.star') }}</div>
                    @endif
                </dd>
                <dt>画像ファイル</dt>
                <dd>
                    @if (!empty(with($val = data_get($review, 'file'))))
                        <div>パス: {{ $val }}</div>
                        <img src="{{ rtrim(env('FRONT_REVIEW_IMAGES_DIR'), '/') . '/' . ltrim($val, '/') }}">
                    @endif
                </dd>
                <dt>社内メモ</dt>
                <dd>
                    <textarea name="review[note]">{{ data_get($review, 'note', old('review.note')) }}</textarea>
                    @if ($errors->first('review.note'))
                        <div class="validate">{{ $errors->first('review.note') }}</div>
                    @endif
                </dd>

                <dt>IPアドレス / ホスト</dt>
                <dd>{{ data_get($review, 'ip') }} / {{ data_get($review, 'host') }}</dd>
                <dt>User-Agent</dt>
                <dd>{{ data_get($review, 'user_agent') }}</dd>
                <dt>作成日時</dt>
                <dd>{{ data_get($review, 'created_at') }}</dd>
                <dt>更新日時</dt>
                <dd>{{ data_get($review, 'updated_at') }}</dd>
            </dl>
            <div class="procArea">
                <input type="submit" value="更新">
                <a href="/reviews" class="btn">戻る</a>
            </div>
        </form>

        <div class="procArea-delete">
            <form method="POST" action="{{ route('reviews.destroy', ['id' => data_get($review, 'id')]) }}">
                @csrf @method('DELETE')
                <input type="submit" value="削除">
            </form>
        </div>
    </section>
@endsection
