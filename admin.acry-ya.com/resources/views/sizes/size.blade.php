@extends('layouts.base')
@section('title', 'サイズ編集')
@section('breadcrumbs')
    @parent
    <li>サイズ編集</li>
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

        @if (isset($size))
            {!! Form::open(['method'=>'POST', 'route'=>array('size.update', $size->size_id)]) !!}
        @else
            {!! Form::open(['method'=>'POST', 'route'=>'size.register']) !!}
        @endisset
        <dl>
            <dt class="required">サイズグループ</dt>
            <dd>
                {!! Form::select(
                'size_group_id',
                array_pluck($size_group, 'size_group_name', 'size_group_id'),
                old('size_group_id', isset($size->size_group_id) ? $size->size_group_id : null),
                ['placeholder' => '選択してください']
                ) !!}
                @if ($errors->first('size_group_id'))
                    <div class="validate">{{$errors->first('size_group_id')}}</div>
                @endif
            </dd>
            <dt class="required">種別</dt>
            <dd>
                <label>{!! Form::radio('size_type', \App\Services\SizeService::SIZE_TYPE_NUMERIC, old('size_type', isset($size->size_type) ? $size->size_type == \App\Services\SizeService::SIZE_TYPE_NUMERIC : null)) !!}
                    数値</label>
                <label> {!! Form::radio('size_type', \App\Services\SizeService::SIZE_TYPE_STRING, old('size_type', isset($size->size_type) ? $size->size_type == \App\Services\SizeService::SIZE_TYPE_STRING : null)) !!}
                    文字列</label>
                @if ($errors->first('size_type'))
                    <div class="validate">{{$errors->first('size_type')}}</div>
                @endif
            </dd>
            <dt>サイズ</dt>
            <dd id="numeric">
                <p>横</p>
                {!! Form::text('width_size', old('width_size', isset($size->width_size) ? $size->width_size : null), ['class'=>'numeric']) !!}
                @if ($errors->first('width_size'))
                    <div class="validate">{{$errors->first('width_size')}}</div>
                @endif
                <p>縦</p>
                {!! Form::text('height_size', old('height_size', isset($size->height_size) ? $size->height_size : null), ['class'=>'numeric']) !!}
                @if ($errors->first('height_size'))
                    <div class="validate">{{$errors->first('height_size')}}</div>
                @endif
            </dd>
            <dd id="character">
                {!! Form::text('size', old('size', isset($size->size) ? $size->size : null)) !!}
                @if ($errors->first('size'))
                    <div class="validate">{{$errors->first('size')}}</div>
                @endif
            </dd>
            <dt>表示順</dt>
            <dd>
                {!! Form::text('display_order', old('display_order', isset($size->display_order) ? $size->display_order : null), ['class'=>'numeric']) !!}
                @if ($errors->first('display_order'))
                    <div class="validate">{{$errors->first('display_order')}}</div>
                @endif
            </dd>

        </dl>

        <div class="procArea">
            {!! Form::submit('登録') !!}
        </div>
        {!! Form::hidden('size_id', isset($size->size_id) ? $size->size_id : null) !!}
        {!! Form::close() !!}

        @if (isset($size))
            <div class="procArea-delete">
                {!! Form::open(['method'=>'POST', 'route'=>array('size.delete', $size->size_id)]) !!}
                {!! Form::submit('削除') !!}
                {!! Form::hidden('size_id', isset($size->size_id) ? $size->size_id : null) !!}
                {!! Form::close() !!}
            </div>
        @endif
    </section>
@endsection

@section('script_foot')
    <script type="text/javascript">
        $(function () {
            formChange();
            $('[name=size_type]').on('click', function () {
                formChange();
            });
        });

        function formChange() {
            radio = document.getElementsByName('size_type')
            if (radio[0].checked) {
                //種別が数値の場合
                document.getElementById('numeric').style.display = "";
                document.getElementById('character').style.display = "none";
            } else if (radio[1].checked) {
                //種別が数値の場合
                document.getElementById('numeric').style.display = "none";
                document.getElementById('character').style.display = "";
            }
        }
    </script>
@endsection
