@extends('layouts.base')
@section('title', '割引率一覧')
@section('breadcrumbs')
    @parent
    <li>割引率一覧</li>
@endsection
@include('layouts.head')
@include('layouts.header')
@include('layouts.sidebar')
@section('content')
    <section class="list">
        <div class="search-result-info">
            <div class="search-result-proc">
                <a href="{{ route('discount.rate.new') }}" class="btn">新規登録</a>
            </div>
            <div class="search-result-count">
                @if (isset($discount_rates))
                    検索結果：{{$discount_rates->total()}}件
                @else
                    検索結果：0件
                @endif
            </div>
        </div>
        {{$discount_rates->appends(request()->input())->links()}}
        @isset ($discount_rates)
            <table>
                <colgroup width="80"/>
                <colgroup width=""/>
                <colgroup width="180"/>
                <colgroup width="80"/>
                <tr>
                    <th>ID</th>
                    <th>タイトル</th>
                    <th>更新日時</th>
                    <th>処理</th>
                </tr>
                @foreach ($discount_rates as $item)
                    <tr>
                        <td>{{$item['discount_rate_id']}}</td>
                        <td>{{$item['discount_rate_title']}}</td>
                        <td>{{$item['updated_at']}}</td>
                        <td>
                            <a href={{ route('discount.rate.edit', [
                            'discount_rate_id' => $item['discount_rate_id'],
                            'discount_rate_item_id' => $discount_rate_items->where('discount_rate_id', $item['discount_rate_id'])])}}>編集</a>
                        </td>
                    </tr>
                @endforeach
            </table>
            {{$discount_rates->appends(request()->input())->links()}}
        @endisset
    </section>
@endsection
