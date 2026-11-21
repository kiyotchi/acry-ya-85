@extends('layouts.base')
@section('title', '画像編集')
@section('breadcrumbs')
    @parent
    <li>画像編集</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('script_head')
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
@endsection
@section('content')
    <section class="edit" id="top">
        <button type="button" class="image-selector" data-target="">ウィンドウを開く</button>
    </section>
@endsection

@section('script_foot')
    <script>
        jQuery(function ($) {
			openModal();
			displayInformation();
			displayImageList();
		});
    </script>
    @include('common.image_uploader')
@endsection