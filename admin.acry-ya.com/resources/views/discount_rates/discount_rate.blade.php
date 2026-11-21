@extends('layouts.base')
@section('title', '割引率編集')
@section('breadcrumbs')
    @parent
    <li>割引率編集</li>
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

        @if (isset($discount_rate))
            {!! Form::open(['method'=>'POST', 'route'=>array('discount.rate.update', $discount_rate->discount_rate_id)]) !!}
        @else
            {!! Form::open(['method'=>'POST', 'route'=>'discount.rate.register']) !!}
        @endisset
        <dl>
            @if (isset($discount_rate))
                <dt class="required">タイトル</dt>
                <dd>
                    {!! Form::text('discount_rate_title', old('discount_rate_title', isset($discount_rate->discount_rate_title) ? $discount_rate->discount_rate_title : null)) !!}
                    @if ($errors->first('discount_rate_title'))
                        <div class="validate">{{ $errors->first('discount_rate_title') }}</div>
                    @endif
                </dd>
            @else
                <dt class="required">タイトル</dt>
                <dd>
                    {!! Form::text('discount_rate_title', old('discount_rate_title')) !!}
                    @if ($errors->first('discount_rate_title'))
                        <div class="validate">{{ $errors->first('discount_rate_title') }}</div>
                    @endif
                </dd>
            @endisset

            <dt>割引率設定</dt>
            {{-- 同一のバリデーションが複数発生するため各バリデーション値の先頭のみ表示する --}}
            @if ( !empty($errors->first('number_of_lower_limit.*')) || $errors->first('number_of_upper_limit.*') || $errors->first('discount_rate.*')
             || $errors->first('number_of_lower_limit') || $errors->first('number_of_upper_limit') || $errors->first('discount_rate'))
                <div class="attention">
                    <ul>
                        @if ($errors->first('number_of_lower_limit.*'))
                            <li>{{$errors->first('number_of_lower_limit.*')}}</li>
                        @endif
                        @if ($errors->first('number_of_upper_limit.*'))
                            <li>{{$errors->first('number_of_upper_limit.*')}}</li>
                        @endif
                        @if ($errors->first('discount_rate.*'))
                            <li>{{$errors->first('discount_rate.*')}}</li>
                        @endif
                        @if ($errors->first('number_of_lower_limit'))
                            <li>{{$errors->first('number_of_lower_limit')}}</li>
                        @endif
                        @if ($errors->first('number_of_upper_limit'))
                            <li>{{$errors->first('number_of_upper_limit')}}</li>
                        @endif
                        @if ($errors->first('discount_rate'))
                            <li>{{$errors->first('discount_rate')}}</li>
                        @endif
                    </ul>
                </div>
            @endif
            <dd class="dynamic-table-area">
                <div class="table-block">
                    <table id="discountRateTable">
                        <thead>
                        <tr>
                            <th class="required">個数</th>
                            <th class="required">割引率</th>
                            <th>&nbsp;</th>
                        </tr>
                        </thead>
                        <tbody id="discountRate_tbody">
                        @if (!is_null(old('list_length')))
                            {{-- バリデーションエラーが発生した場合 --}}
                            @for ($i = 0; $i < old('list_length'); $i++)
                                <tr>
                                    <td>
                                        {!! Form::text('number_of_lower_limit[]', old('number_of_lower_limit.'.$i), ['class'=>'numeric']) !!}
                                        ～
                                        {!! Form::text('number_of_upper_limit[]', old('number_of_upper_limit.'.$i), ['class'=>'numeric']) !!}
                                    </td>
                                    <td>
                                        {!! Form::text('discount_rate[]', old('discount_rate.'.$i), ['class'=>'numeric']) !!}
                                        <span class="unit">%</span>
                                    </td>
                                    <td>
                                        <button type="button" class="btnDelete" name="rows_delete"
                                                onclick="removeList(this)">
                                            削除
                                        </button>
                                    </td>
                                </tr>
                            @endfor
                        @else
                            @isset($discount_rate_item)
                                @foreach($discount_rate_item as $key => $item)
                                    <tr>
                                        <td>
                                            {!! Form::text('number_of_lower_limit[]', old('number_of_lower_limit', isset($item->number_of_lower_limit) ? $item->number_of_lower_limit : null), ['class'=>'numeric']) !!}
                                            ～
                                            {!! Form::text('number_of_upper_limit[]', old('number_of_upper_limit', isset($item->number_of_upper_limit) ? $item->number_of_upper_limit : null), ['class'=>'numeric']) !!}
                                        </td>
                                        <td>
                                            {!! Form::text('discount_rate[]', old('discount_rate', isset($item->discount_rate) ? $item->discount_rate : null), ['class'=>'numeric']) !!}
                                            <span class="unit">%</span>
                                        </td>
                                        <td>
                                            <button type="button" class="del" name="rows_delete"
                                                    onclick="removeList(this)">
                                                削除
                                            </button>
                                            {!! Form::hidden('discount_rate_item_id[]', $item->discount_rate_item_id, ['class'=>'discount_rate_item_id']) !!}
                                        </td>
                                    </tr>
                                @endforeach
                            @else
                                <tr>
                                    <td>
                                        {!! Form::text('number_of_lower_limit[]', null, ['class'=>'numeric']) !!}
                                        ～
                                        {!! Form::text('number_of_upper_limit[]', null, ['class'=>'numeric']) !!}
                                    </td>
                                    <td>
                                        {!! Form::text('discount_rate[]', null, ['class'=>'numeric']) !!}
                                        <span class="unit">%</span>
                                    </td>
                                    <td>
                                        <button type="button" class="del" name="rows_delete" onclick="removeList(this)">
                                            削除
                                        </button>
                                        {!! Form::hidden('discount_rate_item_id[]') !!}
                                    </td>
                                </tr>
                            @endisset
                        @endif
                        </tbody>
                        {!! Form::hidden('list_length', isset($discount_rate_item) ? count($discount_rate_item) : 1, ['id'=>'list_length']) !!}
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
                    <button type="button" id="rowsAdd" class="add" name="rowsAdd">追加</button>
                </p>
            </dd>

            @isset($used_products)
                <dt>この割引率を使用している商品</dt>
                <dd>
                    @foreach ($used_products as $used_product)
                        <p>
                            {{ $used_product->product_id . ' ' . $used_product->product_name }}　
                            <a href="{{ route('product.' . $used_product->product_type_code . '.edit', ['id'=>$used_product->product_id])}}" target="_blank">[編集する]</a>　
                            <a href={{env('SITE_URL') . '/products/detail/' . $used_product->product_id . '/'}} target="_blank">[商品ページを見る]</a>
                        </p>
                    @endforeach
                </dd>
            @endisset
        </dl>
        <div class="procArea">
            {!! Form::submit('登録') !!}
        </div>
        {!! Form::close() !!}
        @if (isset($discount_rate))
            <div class="procArea-delete">
                {!! Form::open(['method'=>'POST', 'route'=>array('discount.rate.delete', $discount_rate->discount_rate_id)]) !!}
                {!! Form::submit('削除') !!}
                {!! Form::hidden('discount_rate_id', isset($discount_rate->discount_rate_id) ? $discount_rate->discount_rate_id : null) !!}
                {!! Form::close() !!}
            </div>
        @endisset

        {{--
            コピー用の行
            specificationTableのテーブル内に存在するとPOSTした際に、データが飛んでしまうためこちらに記述
        --}}
        <div style="display:none">
            <table id="copyTable">
                <tbody id="copyTbody">
                <tr>
                    <td>
                        {!! Form::text('number_of_lower_limit[]', null, ['class'=>'numeric']) !!}
                        ～
                        {!! Form::text('number_of_upper_limit[]', null, ['class'=>'numeric']) !!}
                    </td>
                    <td>
                        {!! Form::text('discount_rate[]', null, ['class'=>'numeric']) !!}
                        <span class="unit">%</span>
                    </td>
                    <td>
                        <button type="button" class="del" name="rows_delete" onclick="removeList(this)">削除</button>
                        {!! Form::hidden('discount_rate_item_id[]') !!}
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </section>
@endsection

@section('script_foot')
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
        jQuery(function ($) {
            // 追加
            $('#rowsAdd').on("click", function () {
                // コピー用のテーブルの行をクローンしてメインテーブルの最終行に追加する
                $("#copyTable  tbody tr:first-child").clone(true).appendTo("#discountRateTable tbody").show();
                // 長さを取得してセット
                let len = $("#discountRateTable tbody").children().length;
                let list_length = document.getElementById("list_length");
                list_length.value = len;

                $('.dynamic-table-area div').animate({scrollTop: $('.dynamic-table-area div')[0].scrollHeight}, 'fast');
            });
            // 削除
            $(".btnDelete").on("click", function () {
                $(this).parent().parent().remove();
                let len = $("#discountRateTable tbody").children().length;
                let list_length = document.getElementById("list_length");
                list_length.value = len;
            });
        });

        function removeList(obj) {
            // tbody要素に指定したIDを取得し、変数「tbody」に代入
            let tbody = document.getElementById('discountRate_tbody');
            // objの親の親のノードを取得し（つまりtr要素）、変数「tr」に代入
            let tr = obj.parentNode.parentNode;
            let id = tr.getElementsByClassName('discount_rate_item_id');
            if (id.length != 0) {
                $("#discountRateTable .delete_id_list:last-child").clone(true).appendTo("#discountRateTable");
                $("#discountRateTable .delete_id_list:last-child").val(id.item(0).getAttribute('value'));
            }
            // 「tbody」の子ノード「tr」を削除
            tbody.removeChild(tr);
            // tbodyの長さを取得してセット
            let len = $("#discountRateTable tbody").children().length;
            let list_length = document.getElementById("list_length");
            list_length.value = len;
        }
    </script>
@endsection