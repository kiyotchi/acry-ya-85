@extends('layouts.base')
@section('title', '補修部品設定')
@section('breadcrumbs')
    @parent
    <li>補修部品設定</li>
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
                <dd>{{$product->product_code}}</dd>
                <dt>商品名</dt>
                <dd>{{$product->product_name}}</dd>
            </dl>
        </div>

            @if(!empty($errors->first()))
                <div class="attention">
                    <ul>
                        @if($errors->first('repair_part_groups_id.*'))
                            <li>{{$errors->first('repair_part_groups_id.*')}}</li>
                        @endif
                    </ul>
                </div>
            @endif
            <section class="list">
        {!! Form::open(['method'=>'POST', 'route'=>array('repair.part.setting.register', $product->product_id)]) !!}

            <table>
                <colgroup width="400"/>
                <colgroup width=""/>
                <tr>
                    <th>サイズ</th>
                    <th>補修部品グループ</th>
                </tr>
                @isset($settings)
                    @foreach($settings as $setting)
                        <tr>
                            @if(isset($setting->size))
                                @if($setting->size['size_type']==2)
                                    <td>{{$setting->size['size']}}</td>
                                @else
                                    {{-- 仮対応 サイズが数値種別の場合に文字列として持っていないため --}}
                                    <td>{{$setting->size['width_size']}}×{{$setting->size['height_size']}}</td>
                                @endif
                            @else
                                <td>共通</td>
                            @endif
                            {!! Form::hidden('size_id[]', $setting->size['size_id']) !!}
                            <td>{!! Form::select('repair_part_groups_id[]', array_pluck($repair_part_groups, 'repair_part_group_name', 'repair_part_groups_id'), old('repair_part_groups_id[]', isset($setting->repairPartGroup['repair_part_groups_id']) ? $setting->repairPartGroup['repair_part_groups_id'] : null), ['placeholder' => '選択してください']) !!}</td>
                        </tr>
                    @endforeach
                @else
                    <tr>
                        <td>共通</td>
                        {!! Form::hidden('size_id[]', null) !!}
                        <td>{!! Form::select('repair_part_groups_id[]', array_pluck($repair_part_groups, 'repair_part_group_name', 'repair_part_groups_id'), old('repair_part_groups_id[]'), ['placeholder' => '選択してください']) !!}</td>
                    </tr>
                    {{-- 可変 --}}
                    @isset($sizes)
                        @foreach($sizes as $size)
                            <tr>
                                <td>{{$size['size_name']}}</td>
                                {!! Form::hidden('size_id[]', $size['size_id']) !!}
                                <td>{!! Form::select('repair_part_groups_id[]', array_pluck($repair_part_groups, 'repair_part_group_name', 'repair_part_groups_id'), old('repair_part_groups_id[]'), ['placeholder' => '選択してください']) !!}</td>
                            </tr>
                        @endforeach
                    @endisset
                @endisset

            </table>

            <div class="procArea">
                {!! Form::submit('更新') !!}
                <a href="{{ route('product.' . $product->product_type_code . '.edit', $product->product_id) }}" class="btn btn-back">戻る</a>
            </div>
        {!! Form::close() !!}
            </section>

    </section>
@endsection

@section('script_foot')

@endsection
