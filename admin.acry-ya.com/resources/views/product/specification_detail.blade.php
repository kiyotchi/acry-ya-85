@extends('layouts.base')
@section('title', '規格詳細設定')
@section('breadcrumbs')
    @parent
    <li>規格詳細設定</li>
@endsection
@section('script_head')
    <script src="http://code.jquery.com/jquery-3.2.1.min.js"></script>
    <script>
        jQuery(function ($) {
            $("#copyTable input").val("");
            $("#copyTable input:checkbox").attr("checked", false);
            $("#copyTable option").attr("selected", false);
            $("#copyTableDataValid input").val("");
            $("#copyTableDataValid input:checkbox").attr("checked", false);
            $("#copyTableDataValid option").attr("selected", false);

            // 追加
            $("#rowsAdd").on("click", function () {
                // 最終行のチェックボックスのvalue値を取得する（valueが配列インデックス要素になっているため）
                let last_index = $("#specificationTable tbody tr:last-child input:checkbox").val();
                // 規格詳細のデータが存在する場合、商品タグボタンのせいで列数がずれてしまうためコピーするテーブル業を別にして対応している
                let specification_details = '<?php echo($specification_details); ?>';
                if (specification_details == '') {
                    // コピー用のテーブルの行をクローンしてメインテーブルの最終行に追加する
                    $("#copyTable tbody tr:first-child").clone(true).appendTo("#specificationTable tbody").show();
                } else {
                    $("#copyTableDataValid tbody tr:first-child").clone(true).appendTo("#specificationTable tbody").show();
                }

                // コピーした場合、規格詳細設定ID、各種テキスト入力行を削除する
                // TODO:商品コードは除くか？
                // tbodyの長さを取得してセット
                let len = $("#specificationTable tbody").children().length;
                let list_length = document.getElementById("list_length");
                list_length.value = len;

                $('.dynamic-table-area div').animate({scrollTop: $('.dynamic-table-area div')[0].scrollHeight}, 'fast');
            });
        });

        function removeList(obj) {
            // tbody要素に指定したIDを取得し、変数「tbody」に代入
            let tbody = document.getElementById('specification_tbody');
            // objの親の親のノードを取得し（つまりtr要素）、変数「tr」に代入
            let tr = obj.parentNode.parentNode;
            let id = tr.getElementsByClassName('specification_detail_individual_id');
            if (id.length != 0) {
                $(".delete_id_list:last-child").clone(true).appendTo("div.specification");
                $(".delete_id_list:last-child").val(id.item(0).getAttribute('value'));
            }
            // 「tbody」の子ノード「tr」を削除
            tbody.removeChild(tr);
            // tbodyの長さを取得してセット
            let len = $("#specificationTable tbody").children().length;
            let list_length = document.getElementById("list_length");
            list_length.value = len;

            // チェックボックスのvalueを振り直す
            $("#specification_tbody tr").each(function (index, elm) {
                console.log(elm);
                $(elm).find("input:checkbox").val(index);
            });

        }
    </script>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="edit">
        <div id="current_product">
            <dl>
                <dt>商品コード</dt>
                <dd>{{$product->product_code}}</dd>
                <dt>商品名</dt>
                <dd>{{$product->product_name}}</dd>
            </dl>
        </div>
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
        {{-- 同一のバリデーションが複数発生するため各バリデーション値の先頭のみ表示する --}}
        @if ( !empty($errors->first()) )
            <div class="attention">
                <ul>
                    @if ($errors->first('color_id.*'))
                        <li>{{$errors->first('color_id.*')}}</li>
                    @endif
                    @if ($errors->first('size_id.*'))
                        <li>{{$errors->first('size_id.*')}}</li>
                    @endif
                    @if ($errors->first('plate_thickness_id.*'))
                        <li>{{$errors->first('plate_thickness_id.*')}}</li>
                    @endif
                    @if ($errors->first('product_option_content_id.*'))
                        <li>{{$errors->first('product_option_content_id.*')}}</li>
                    @endif
                    @if ($errors->first('product_code.*'))
                        <li>{{$errors->first('product_code.*')}}</li>
                    @endif
                    @if ($errors->first('delivery_schedule_id.*'))
                        <li>{{$errors->first('delivery_schedule_id.*')}}</li>
                    @endif
                </ul>
            </div>
        @endif

        {!! Form::open(['method'=>'POST', 'route'=>array('specification.update', $product->product_id)]) !!}
        <dl>
            <dd class="dynamic-table-area">
                <div class="table-block specification">
                    <table id="specificationTable">
                        <thead>
                        <tr>
                            <th>&nbsp;</th>
                            <th>初期</th>
                            @isset($colors)
                                <th class="required">カラー</th>
                            @endisset
                            @isset($sizes)
                                <th class="required">サイズ</th>
                            @endisset
                            @isset($plate_thickness)
                                <th class="required">板厚</th>
                            @endisset
                            @isset($product_options)
                                <th>オプション</th>
                            @endisset
                            <th>商品コード</th>
                            @isset($specification_details)
                                <th>商品タグ</th>
                            @endisset
                            <th>定価</th>
                            <th>カート内表示用商品名</th>
                            <th>出荷目安</th>
                            <th>お届け先</th>
                            <th>特大配送便</th>
                            <th>大型便</th>
                        </tr>
                        </thead>
                        <tbody id="specification_tbody">
                        @if (old('list_length') > 0)
                            {{-- バリデーションエラーが発生した場合 --}}
                            @for ($i = 0; $i < old('list_length'); $i++)
                                <tr>
                                    <td>
                                        <button type="button" name="rows_delete" onclick="removeList(this)">削除</button>
                                    </td>

                                    {{-- checkboxのみnameに配列インデックスを付与すると、oldが効かないため下記の通り記述する --}}
                                    <td>{!! Form::checkbox('is_default_display[]', $i, ['class'=>'singleCheck']) !!}</td>
                                    @isset($colors)
                                        <td>{!! Form::select('color_id['.$i.']', array_pluck($colors, 'color_name', 'color_id'), old('color_id.' . $i), ['placeholder' => '未選択']) !!}</td>
                                    @endisset
                                    @isset($sizes)
                                        <td>{!! Form::select('size_id['.$i.']', $sizes, old('size_id.'.$i), ['placeholder' => '未選択']) !!}</td>
                                    @endisset
                                    @isset($plate_thickness)
                                        <td>{!! Form::select('plate_thickness_id['.$i.']', array_pluck($plate_thickness, 'plate_thickness', 'plate_thickness_id'), old('plate_thickness_id[]'), ['placeholder' => '未選択']) !!}</td>
                                    @endisset
                                    @isset($product_options)
                                        <td>{!! Form::select('product_option_content_id['.$i.']', array_pluck($product_options, 'display_name', 'product_option_content_id'), old('product_option_content_id[]'), ['placeholder' => '未選択']) !!}</td>
                                    @endisset
                                    <td>{!! Form::text('product_code[]', old('product_code.'.$i)) !!}</td>
                                    @if (old('specification_detail_individual_id.'.$i) != null)
                                        <td><a href="{{ route('specification.feature.tag', ['id' => old('specification_detail_individual_id.' . $i)])}}" class="btn">商品タグ設定</a></td>
                                    @else
                                        <td></td>
                                    @endif

                                    <td>{!! Form::text('price[]', old('price[]'), ['class'=>'numeric']) !!}</td>
                                    <td>{!! Form::text('product_name_displayed_cart[]', old('product_name_displayed_cart[]')) !!}</td>
                                    <td>{!! Form::select('delivery_schedule_id['.$i.']', $deliveries,   old('delivery_schedule_id[]'), ['placeholder' => '未選択']) !!}</td>
                                    <td>{!! Form::select('is_destination_valid['.$i.']', array('0' => '無効', '1' => '有効'), old('is_destination_valid[]')); !!}</td>
                                    <td>{!! Form::select('is_delivery_charge_valid['.$i.']', array('0' => '無効', '1' => '有効'), old('is_destination_valid[]')); !!}</td>
                                    <td>{!! Form::select('is_large_delivery_valid['.$i.']', array('0' => '無効', '1' => '有効'), old('is_large_delivery_valid[]')); !!}</td>
                                    {!! Form::hidden('specification_detail_individual_id[]', old('specification_detail_individual_id' . $i), ['class'=>'specification_detail_individual_id']) !!}
                                </tr>
                            @endfor
                        @else
                            @isset($specification_details)
                                <!-- データあり -->
                                @foreach($specification_details as $item)
                                    <tr>
                                        <td>
                                            <button type="button" name="rows_delete" onclick="removeList(this)"
                                                    class="btnDelete">削除
                                            </button>
                                        </td>
                                        @if($item->is_default_display == 1)
                                            <td>{!! Form::checkbox('is_default_display[]', $loop->index, true, ['class'=>'singleCheck']) !!}</td>
                                        @else
                                            <td>{!! Form::checkbox('is_default_display[]', $loop->index, false, ['class'=>'singleCheck']) !!}</td>
                                        @endisset
                                        @isset($colors)
                                            <td>{!! Form::select('color_id[]', array_pluck($colors, 'color_name', 'color_id'), old('color_id[]', isset($item->color_id) ? $item->color_id : null), ['placeholder' => '未選択']) !!}</td>
                                        @endisset
                                        @isset($sizes)
                                            <td>{!! Form::select('size_id[]', $sizes, old('size_id[]', isset($item->size_id) ? $item->size_id : null), ['placeholder' => '未選択']) !!}</td>
                                        @endisset
                                        @isset($plate_thickness)
                                            <td>{!! Form::select('plate_thickness_id[]', array_pluck($plate_thickness, 'plate_thickness', 'plate_thickness_id'), old('plate_thickness_id[]', isset($item->plate_thickness_id) ? $item->plate_thickness_id : null), ['placeholder' => '未選択']) !!}</td>
                                        @endisset
                                        @isset($product_options)
                                            <td>{!! Form::select('product_option_content_id[]', array_pluck($product_options, 'display_name', 'product_option_content_id'), old('product_option_content_id[]', isset($item->product_option_content_id) ? $item->product_option_content_id : null), ['placeholder' => '未選択']) !!}</td>
                                        @endisset
                                        <td>{!! Form::text('product_code[]', old('product_code[]', isset($item->product_code) ? $item->product_code : null), ['class' => 'product_code']) !!}</td>
                                        <td><a href="{{ route('specification.feature.tag', $item->specification_detail_individual_id) }}" class="btn">商品タグ設定</a></td>
                                        <td>{!! Form::text('price[]', old('price[]', isset($item->price) ? $item->price : null), ['class' => 'numeric']) !!}</td>
                                        <td>{!! Form::text('product_name_displayed_cart[]', old('product_name_displayed_cart[]', isset($item->product_name_displayed_cart) ? $item->product_name_displayed_cart : null), ['class'=>'product_name_displayed_cart']) !!}</td>
                                        <td>{!! Form::select('delivery_schedule_id[]', $deliveries,  old('delivery_schedule_id[]', isset($item->delivery_schedule_id) ? $item->delivery_schedule_id : null), ['placeholder' => '未選択']) !!}</td>
                                        <td>{!! Form::select('is_destination_valid[]', array('0' => '無効', '1' => '有効'), old('is_destination_valid[]', isset($item->is_destination_valid) ? $item->is_destination_valid : null)); !!}</td>
                                        <td>{!! Form::select('is_delivery_charge_valid[]', array('0' => '無効', '1' => '有効'), old('is_destination_valid[]', isset($item->is_delivery_charge_valid) ? $item->is_delivery_charge_valid : null)); !!}</td>
                                        <td>{!! Form::select('is_large_delivery_valid[]', array('0' => '無効', '1' => '有効'), old('is_large_delivery_valid[]', isset($item->is_large_delivery_valid) ? $item->is_large_delivery_valid : null)); !!}</td>
                                        {!! Form::hidden('specification_detail_individual_id[]', $item->specification_detail_individual_id, ['class'=>'specification_detail_individual_id']) !!}
                                    </tr>
                                @endforeach
                            @else
                                <!-- データなし -->
                                <tr>
                                    <td>
                                        <button type="button" name="rows_delete" onclick="removeList(this)">削除</button>
                                    </td>
                                    <td>{!! Form::checkbox('is_default_display[]', 0, false) !!}</td>
                                    @isset($colors)
                                        <td>{!! Form::select('color_id[]', array_pluck($colors, 'color_name', 'color_id'), old('color_id'), ['placeholder' => '未選択']) !!}</td>
                                    @endisset
                                    @isset($sizes)
                                        <td>{!! Form::select('size_id[]', $sizes, old('size_id[]'), ['placeholder' => '未選択']) !!}</td>
                                    @endisset
                                    @isset($plate_thickness)
                                        <td>{!! Form::select('plate_thickness_id[]', array_pluck($plate_thickness, 'plate_thickness', 'plate_thickness_id'), old('plate_thickness_id[]'), ['placeholder' => '未選択']) !!}</td>
                                    @endisset
                                    @isset($product_options)
                                        <td>{!! Form::select('product_option_content_id[]', array_pluck($product_options, 'display_name', 'product_option_content_id'), old('product_option_content_id[]'), ['placeholder' => '未選択']) !!}</td>
                                    @endisset
                                    <td>{!! Form::text('product_code[]', old('product_code[]', $product->product_code)) !!}</td>
                                    <td>{!! Form::text('price[]', old('price[]'), ['class' => 'numeric']) !!}</td>
                                    <td>{!! Form::text('product_name_displayed_cart[]', old('product_name_displayed_cart[]')) !!}</td>
                                    <td>{!! Form::select('delivery_schedule_id[]', $deliveries,   old('delivery_schedule_id[]'), ['placeholder' => '未選択']) !!}</td>
                                    <td>{!! Form::select('is_destination_valid[]', array('0' => '無効', '1' => '有効'), old('is_destination_valid[]')); !!}</td>
                                    <td>{!! Form::select('is_delivery_charge_valid[]', array('0' => '無効', '1' => '有効'), old('is_destination_valid[]')); !!}</td>
                                    <td>{!! Form::select('is_large_delivery_valid[]', array('0' => '無効', '1' => '有効'), old('is_large_delivery_valid[]')); !!}</td>
                                </tr>
                            @endisset
                        @endif
                        </tbody>
                    </table>
                    {!! Form::hidden('list_length', isset($specification_details) ? count($specification_details) : 1, ['id'=>'list_length']) !!}
                    @if(old('delete_id_list') > 0)
                        {{-- バリデーションエラーが発生した場合 --}}
                        @for ($i = 0; $i < count(old('delete_id_list')); $i++)
                            {!! Form::hidden('delete_id_list[' . $i . ']', old('delete_id_list.' . $i), ['class'=>'delete_id_list']) !!}
                        @endfor
                    @else
                        {!! Form::hidden('delete_id_list[]', old('delete_id_list[]'), ['class'=>'delete_id_list']) !!}
                    @endif
                </div>
                <p>
                    <button type="button" id="rowsAdd" name="rowsAdd">追加</button>
                </p>
            </dd>
        </dl>
        <div class="procArea">
            {!! Form::submit('更新') !!}
            <a href="{{ route('product.standard.edit', $product->product_id) }}" class="btn">戻る</a>
        </div>
        {!! Form::close() !!}
        {{--
            コピー用の行
            specificationTableのテーブル内に存在するとPOSTした際に、データが飛んでしまうためこちらに記述
        --}}
        <div style="display:none">
            <table id="copyTable">
                <tbody id="copyTbody">
                <tr>
                    <td>
                        <button type="button" name="rows_delete" onclick="removeList(this)">削除</button>
                    </td>
                    <td>{!! Form::checkbox('is_default_display[]', 0, false) !!}</td>
                    @isset($colors)
                        <td>{!! Form::select('color_id[]', array_pluck($colors, 'color_name', 'color_id'), null, ['placeholder' => '未選択']) !!}</td>
                    @endisset
                    @isset($sizes)
                        <td>{!! Form::select('size_id[]', $sizes, null, ['placeholder' => '未選択']) !!}</td>
                    @endisset
                    @isset($plate_thickness)
                        <td>{!! Form::select('plate_thickness_id[]', array_pluck($plate_thickness, 'plate_thickness', 'plate_thickness_id'), null, ['placeholder' => '未選択']) !!}</td>
                    @endisset
                    @isset($product_options)
                        <td>{!! Form::select('product_option_content_id[]', array_pluck($product_options, 'display_name', 'product_option_content_id'), null, ['placeholder' => '未選択']) !!}</td>
                    @endisset
                    <td>{!! Form::text('product_code[]') !!}</td>
                    <td>{!! Form::text('price[]', null, ['class' => 'numeric']) !!}</td>
                    <td>{!! Form::text('product_name_displayed_cart[]') !!}</td>
                    <td>{!! Form::select('delivery_schedule_id[]', $deliveries,   null, ['placeholder' => '未選択']) !!}</td>
                    <td>{!! Form::select('is_destination_valid[]', array('0' => '無効', '1' => '有効')); !!}</td>
                    <td>{!! Form::select('is_delivery_charge_valid[]', array('0' => '無効', '1' => '有効')); !!}</td>
                    <td>{!! Form::select('is_large_delivery_valid[]', array('0' => '無効', '1' => '有効')); !!}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div style="display:none">
            <table id="copyTableDataValid">
                <tbody id="copyTbodyDataValid">
                <tr>
                    <td>
                        <button type="button" name="rows_delete" onclick="removeList(this)">削除</button>
                    </td>
                    <td>{!! Form::checkbox('is_default_display[]', 0, false) !!}</td>
                    @isset($colors)
                        <td>{!! Form::select('color_id[]', array_pluck($colors, 'color_name', 'color_id'), null, ['placeholder' => '未選択']) !!}</td>
                    @endisset
                    @isset($sizes)
                        <td>{!! Form::select('size_id[]', $sizes, null, ['placeholder' => '未選択']) !!}</td>
                    @endisset
                    @isset($plate_thickness)
                        <td>{!! Form::select('plate_thickness_id[]', array_pluck($plate_thickness, 'plate_thickness', 'plate_thickness_id'), null, ['placeholder' => '未選択']) !!}</td>
                    @endisset
                    @isset($product_options)
                        <td>{!! Form::select('product_option_content_id[]', array_pluck($product_options, 'display_name', 'product_option_content_id'), null, ['placeholder' => '未選択']) !!}</td>
                    @endisset
                    <td>{!! Form::text('product_code[]') !!}</td>
                    <td></td>
                    <td>{!! Form::text('price[]', null, ['class' => 'numeric']) !!}</td>
                    <td>{!! Form::text('product_name_displayed_cart[]') !!}</td>
                    <td>{!! Form::select('delivery_schedule_id[]', $deliveries,   null, ['placeholder' => '未選択']) !!}</td>
                    <td>{!! Form::select('is_destination_valid[]', array('0' => '無効', '1' => '有効')); !!}</td>
                    <td>{!! Form::select('is_delivery_charge_valid[]', array('0' => '無効', '1' => '有効')); !!}</td>
                    <td>{!! Form::select('is_large_delivery_valid[]', array('0' => '無効', '1' => '有効')); !!}</td>
                </tr>
                </tbody>
            </table>
        </div>

    </section>
@endsection