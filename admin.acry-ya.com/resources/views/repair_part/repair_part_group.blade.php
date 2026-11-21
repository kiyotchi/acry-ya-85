@extends('layouts.base')
@section('title', '補修部品グループ編集')
@section('breadcrumbs')
    @parent
    <li>補修部品グループ編集</li>
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

        @isset($repair_part_group)
            {!! Form::open(['method'=>'POST', 'route'=>array('repair.part.group.update', $repair_part_group->repair_part_groups_id)]) !!}
        @else
            {!! Form::open(['method'=>'POST', 'route'=>'repair.part.group.register']) !!}
        @endisset
        <dl>
            <dt class="required">メニュー表示設定</dt>
            <dd>
                {!! Form::radio('is_menu_display', 1, isset($repair_part_group->is_menu_display) ? $repair_part_group->is_menu_display === 1 : 1, array('id'=>'menu_display')) !!}
                {!! Form::label('menu_display', '表示する') !!}
                {!! Form::radio('is_menu_display', 0, isset($repair_part_group->is_menu_display) ? $repair_part_group->is_menu_display === 0 : 0, array('id'=>'menu_not_display')) !!}
                {!! Form::label('menu_not_display', '表示しない') !!}
                @if ($errors->first('is_menu_display'))
                    <div class="validate">{{$errors->first('is_menu_display')}}</div>
                @endif
            </dd>

            <dt>商品カテゴリー(※メニューに表示する場合は必須です)</dt>
            <dd>
                {!! Form::select(
                    'product_category_id',
                    array_pluck($product_categories, 'product_category_name', 'product_category_id'),
                    old('product_category_id', isset($repair_part_group->product_category_id) ? $repair_part_group->product_category_id : null),
                    ['placeholder' => '選択してください']
                )!!}
                @if ($errors->first('product_category_id'))
                    <div class="validate">{{$errors->first('product_category_id')}}</div>
                @endif
            </dd>

            <dt class="required">グループ名</dt>
            <dd>
                {!! Form::text(
                    'repair_part_group_name',
                    old('repair_part_group_name', isset($repair_part_group->repair_part_group_name) ? $repair_part_group->repair_part_group_name : null))
                !!}
                @if ($errors->first('repair_part_group_name'))
                    <div class="validate">{{$errors->first('repair_part_group_name')}}</div>
                @endif
            </dd>
            <dt>注意書き</dt>
            <dd>
                {!! Form::select(
                        'product_html_part_id',
                        array_pluck(array_sort($repair_html_parts, function ($value) {return $value['part_title'];}), 'part_title', 'product_html_part_id'),
                        old('product_html_part_id', isset($repair_part_group->product_html_part_id) ? $repair_part_group->product_html_part_id : null),
                        ['placeholder' => '選択してください']
                ) !!}
                <button type="button" class="btn-min html_parts_link">編集</button>
            </dd>

            <dt>表示順</dt>
            <dd>
                {!! Form::text('display_order', old('display_order', isset($repair_part_group->display_order) ? $repair_part_group->display_order : null), ['class'=>'numeric']) !!}
                @if ($errors->first('display_order'))
                    <div class="validate">{{$errors->first('display_order')}}</div>
                @endif
            </dd>

            <dt>補修部品</dt>

            <dd class="dynamic-table-area">
                <div class="table-block">
                    <table id="optionSettingTable">
                        <thead id="list">
                        </thead>
                        <tbody id="option_setting_tbody">
                        @if (!is_null(old('list_length')))
                            {{-- バリデーションエラーが発生した場合 --}}
                            @for ($i = 0; $i < old('list_length'); $i++)
                                <tr>
                                    @isset($repair_parts)
                                        <td>{!! Form::select('repair_parts_id['.$i.']',array_pluck($repair_parts, 'product_name', 'repair_parts_id'), old('repair_parts_id.' . $i), ['placeholder' => '選択してください']) !!}</td>
                                    @endisset
                                    <td><button type="button" class="btnDelete" name="rows_delete" onclick="removeList(this)">削除</button></td>
                                </tr>
                            @endfor
                        @else
                            @isset($repair_part_group)
                                <!--　補修部品グループデータ有り -->
                                @foreach($repair_part_group->repairParts as $item)
                                    <tr>
                                        <td>{!! Form::select('repair_parts_id[]',array_pluck($repair_parts, 'product_name', 'repair_parts_id'), old('repair_parts_id[]', isset($item->repair_parts_id) ? $item->repair_parts_id : null ), ['placeholder' => '選択してください']) !!}</td>
                                        <td><button type="button" class="btnDelete" name="rows_delete"  onclick="removeList(this)">削除</button></td>
                                    </tr>
                                @endforeach
                            @else
                                <!--　補修部品グループデータ無し -->
                                <tr>
                                    <td>{!! Form::select('repair_parts_id[]',array_pluck($repair_parts, 'product_name', 'repair_parts_id'), old('repair_parts_id'), ['placeholder' => '選択してください']) !!}</td>
                                    <td><button type="button" class="btnDelete" name="rows_delete" onclick="removeList(this)">削除</button></td>
                                </tr>
                            @endisset
                        @endif
                        </tbody>
                        {!! Form::hidden('list_length', isset($repair_part_group) ? count($repair_part_group->repairParts) : 1, ['id'=>'list_length']) !!}
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
            
            @isset($products)
                <dt>この補修部品グループを登録している商品</dt>
                <dd>
                    @foreach ($products as $product)
                        <p>
                            {{ $product->product_id . ' ' . $product->product_name}}　
                            <a href="{{ route('product.' . $product->product_type_code . '.edit', ['id'=>$product->product_id])}}" target="_blank">[商品を編集する]</a>　
                            <a href={{env('SITE_URL') . '/products/detail/' . $product->product_id . '/'}} target="_blank">[商品ページを見る]</a>
                        </p>
                    @endforeach
                </dd>
            @endisset

            <div class="procArea">
                {!! Form::submit('登録') !!}
            </div>
            {!! Form::close() !!}
            @if (isset($repair_part_group))
                <div class="procArea-delete">
                    {!! Form::open(['method' => 'POST', 'route'=>array('repair.part.group.delete', $repair_part_group->repair_part_groups_id)]) !!}
                    {!! Form::submit('削除') !!}
                    {!! Form::close() !!}
                </div>
            @endif
        </dl>

        {{--
            コピー用の行
            テーブル内に存在するとPOSTした際に、データが飛んでしまうためこちらに記述
        --}}
        <div style="display:none">
            <table id="copyTable">
                <tbody id="copyTbody">
                <tr>
                    <td>{!! Form::select('repair_parts_id[]', array_pluck($repair_parts, 'product_name', 'repair_parts_id'), null, ['placeholder' => '選択してください']) !!}</td>
                    <td><button type="button" class="btnDelete" name="rows_delete" onclick="removeList(this)">削除</button></td>
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

            $("#copyTable option").attr("selected", false);

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
            /**
            $(".btnDelete").on("click", function () {
                $(this).parent().parent().remove();
                let len = $("#optionSettingTable tbody").children().length;
                let list_length = document.getElementById("list_length");
                list_length.value = len;
            });
             */
			$('.html_parts_link').on('click', function () {
				let selectHtmlParts = $(this).prev('select').val();
				if (selectHtmlParts.length > 0) {
					let openPageUrl = '{{ route('html.part.edit') }}/' + selectHtmlParts;
					window.open(openPageUrl, 'html_part');
				}
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
