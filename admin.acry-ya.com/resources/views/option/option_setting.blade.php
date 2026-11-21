@extends('layouts.base')
@section('title', 'オプション設定')
@section('breadcrumbs')
    @parent
    <li>オプション設定</li>
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

        <div id="current_product">
            <dl>
                <dt>商品コード</dt>
                <dd>{{$products->product_code}}</dd>
                <dt>商品名</dt>
                <dd>{{$products->product_name}}</dd>
            </dl>
        </div>

        {!! Form::open(['method'=>'POST', 'route'=>array('option.setting.update', $products->product_id)]) !!}
        <dl>
            @isset($option_settings)
                <dt class="required">オプション名</dt>
                <dd>
                    {!! Form::text('option_name', old('option_name', isset($option_settings->option_name) ? $option_settings->option_name : null)) !!}
                    @if ($errors->first('option_name'))
                        <div class="validate">{{$errors->first('option_name')}}</div>
                    @endif
                </dd>
                <dt class="required">HTMLタグ name</dt>
                <dd>
                    {!! Form::text('html_tag_name', old('html_tag_name', isset($option_settings->html_tag_name) ? $option_settings->html_tag_name : null)) !!}
                    @if ($errors->first('html_tag_name'))
                        <div class="validate">{{$errors->first('html_tag_name')}}</div>
                    @endif
                    {!! Form::hidden('product_id', old('product_id', isset($products->product_id) ? $products->product_id : null)) !!}
                    {!! Form::hidden('product_option_id', old('product_option_id', isset($option_settings->product_option_id) ? $option_settings->product_option_id : null)) !!}
                </dd>
                <dt>HTMLタグID</dt>
                <dd>
                    {!! Form::text('html_tag_id', old('html_tag_id', isset($option_settings->html_tag_id) ? $option_settings->html_tag_id : null)) !!}
                    @if ($errors->first('html_tag_id'))
                        <div class="validate">{{$errors->first('html_tag_id')}}</div>
                    @endif
                </dd>
            @else
                <dt class="required">オプション名</dt>
                <dd>
                    {!! Form::text('option_name', old('option_name')) !!}
                    @if ($errors->first('option_name'))
                        <div class="validate">{{$errors->first('option_name')}}</div>
                    @endif
                </dd>
                <dt class="required">HTMLタグ name</dt>
                <dd>
                    {!! Form::text('html_tag_name', old('html_tag_name')) !!}
                    {!! Form::hidden('product_id', old('product_id', $products->product_id)) !!}
                    {!! Form::hidden('product_option_id', old('product_option_id')) !!}
                    @if ($errors->first('html_tag_name'))
                        <div class="validate">{{$errors->first('html_tag_name')}}</div>
                    @endif
                </dd>
                <dt class="required">HTMLタグID</dt>
                <dd>
                    {!! Form::text('html_tag_id', old('html_tag_id')) !!}
                    @if ($errors->first('html_tag_id'))
                        <div class="validate">{{$errors->first('html_tag_id')}}</div>
                    @endif
                </dd>
            @endisset

            <dt>オプション内容</dt>
            {{-- 同一のバリデーションが複数発生するため各バリデーション値の先頭のみ表示する --}}
            @if ( !empty($errors->first('value.*')) || !empty($errors->first('display_name.*'))
            || !empty($errors->first('value')) || !empty($errors->first('display_name')) )
                <div class="attention">
                    <ul>
                        @if ($errors->first('value.*'))
                            <li>{{$errors->first('value.*')}}</li>
                        @endif
                        @if ($errors->first('display_name.*'))
                            <li>{{$errors->first('display_name.*')}}</li>
                        @endif
                        @if ($errors->first('value'))
                            <li>{{$errors->first('value')}}</li>
                        @endif
                        @if ($errors->first('display_name'))
                            <li>{{$errors->first('display_name')}}</li>
                        @endif
                    </ul>
                </div>
            @endif
            <dd class="dynamic-table-area">
                <div class="table-block">
                    <table id="optionSettingTable">
                        <thead id="list">
                        <tr>
                            <th class="required">value</th>
                            <th class="required">表示名</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody id="option_setting_tbody">
                        @if (!is_null(old('list_length')))
                            {{-- バリデーションエラーが発生した場合 --}}
                            @for ($i = 0; $i < old('list_length'); $i++)
                                <tr>
                                    <td> {!! Form::text('value[]', old('value.'.$i)) !!}</td>
                                    <td>{!! Form::text('display_name[]', old('display_name.'.$i)) !!}</td>
                                    {!! Form::hidden('product_option_content_id[]', old('product_option_content_id' . $i), ['class'=>'product_option_content_id']) !!}
                                    <td>
                                        <button type="button" class="btnDelete" name="rows_delete"
                                                onclick="removeList(this)">
                                            削除
                                        </button>
                                    </td>
                                </tr>
                            @endfor
                        @else
                            @isset($option_contents)
                                @foreach($option_contents as $key => $item)
                                    <tr>
                                        <td>
                                            {!! Form::text('value[]', old('value', isset($item->value) ? $item->value : null)) !!}
                                        </td>
                                        <td>
                                            {!! Form::text('display_name[]', old('display_name', isset($item->display_name) ? $item->display_name : null)) !!}
                                        </td>
                                        <td>
                                            <button type="button" class="btnDelete" name="rows_delete"
                                                    onclick="removeList(this)">
                                                削除
                                            </button>
                                        </td>
                                        {!! Form::hidden('product_option_content_id[]', isset($item->product_option_content_id) ? $item->product_option_content_id : null, ['class'=>'product_option_content_id']) !!}
                                    </tr>
                                @endforeach
                            @else
                                <tr>
                                    <td> {!! Form::text('value[]') !!}</td>
                                    <td>{!! Form::text('display_name[]') !!}</td>
                                    <td>
                                        <button type="button" class="btnDelete" name="rows_delete"
                                                onclick="removeList(this)">削除
                                        </button>
                                    </td>
                                </tr>
                            @endisset
                        @endif
                        </tbody>
                        {!! Form::hidden('list_length', isset($option_contents) ? count($option_contents) : 1, ['id'=>'list_length']) !!}
                        @if(old('delete_id_list') > 0)
                            {{--バリデーションエラーが発生した場合--}}
                            @for ($i = 0; $i < count(old('delete_id_list')); $i++)
                                {!! Form::hidden('delete_id_list[' . $i . ']', old('delete_id_list.' . $i), ['class'=>'delete_id_list']) !!}
                            @endfor
                        @else
                            {!! Form::hidden('delete_id_list[]', old('delete_id_list[]'), ['class'=>'delete_id_list']) !!}
                        @endif
                    </table>
                </div>
                <p>
                    <button type="button" id="rowsAdd" name="rowsAdd">追加</button>
                </p>
            </dd>
            <div class="procArea">
                {!! Form::submit('更新') !!}
                <a href="{{ route('product.standard.edit', $products->product_id) }}" class="btn btn-back">戻る</a>
            </div>
            {!! Form::close() !!}
        </dl>

        {{--
            コピー用の行
            specificationTableのテーブル内に存在するとPOSTした際に、データが飛んでしまうためこちらに記述
        --}}
        <div style="display:none">
            <table id="copyTable">
                <tbody id="copyTbody">
                <tr>
                    <td> {!! Form::text('value[]') !!}</td>
                    <td>{!! Form::text('display_name[]') !!}</td>
                    <td>
                        <button type="button" class="btnDelete" name="rows_delete" onclick="removeList(this)">削除
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
@endsection

@section('script_foot')
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        jQuery(function ($) {

            // 追加
            $("#rowsAdd").on("click", function () {
                // // コピー用のテーブルの行をクローンしてメインテーブルの最終行に追加する
                $("#copyTable tbody tr:first-child").clone(true).appendTo("#optionSettingTable tbody").show();
                // tbodyの長さを取得してセット
                let len = $("#optionSettingTable tbody").children().length;
                let list_length = document.getElementById("list_length");
                list_length.value = len;

                $('.dynamic-table-area div').animate({scrollTop: $('.dynamic-table-area div')[0].scrollHeight}, 'fast');
            });
            // 削除
            $(".btnDelete").on("click", function () {
                $(this).parent().parent().remove();
                let len = $("#optionSettingTable tbody").children().length;
                let list_length = document.getElementById("list_length");
                list_length.value = len;
            });
        });

        function removeList(obj) {
            // tbody要素に指定したIDを取得し、変数「tbody」に代入
            let tbody = document.getElementById('option_setting_tbody');
            // objの親の親のノードを取得し（つまりtr要素）、変数「tr」に代入
            let tr = obj.parentNode.parentNode;
            let id = tr.getElementsByClassName('product_option_content_id');
            if (id.length != 0) {
                $("#optionSettingTable .delete_id_list:last-child").clone(true).appendTo("#optionSettingTable");
                $("#optionSettingTable .delete_id_list:last-child").val(id.item(0).getAttribute('value'));
            }
            // 「tbody」の子ノード「tr」を削除
            tbody.removeChild(tr);
            // tbodyの長さを取得してセット
            let len = $("#optionSettingTable tbody").children().length;
            let list_length = document.getElementById("list_length");
            list_length.value = len;
        }
    </script>
@endsection
