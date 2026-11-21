@extends('layouts.base')

@section('title', '只今メンテナンス中です')
@section('bodyId', '')

@section('content')
    <div class="main__sub--white">
        <nav class="c-pankuzu--scroll">
            <ul class="pankuzu__list">
                <li><a href="/">HOME</a></li>
                <li>只今メンテナンス中です</li>
            </ul>
        </nav>
        <h1 class="main__title c-heading--xl">只今メンテナンス中です</h1>
        <section class="detail__section">
            <h2 class="c-heading--lg-border">メンテナンス日時 2021年7月3日(土) AM9時からPM5時</h2>

            <section class="p-outline c-section">
              <p class="c-text--md">ただ今、システムメンテナンスのため、ホームページを停止させて頂いております。</p>
              <p class="c-text--md">※メンテナンス作業時間は若干前後する場合がございます。</p>
              <p class="c-text--md">上記時間帯はサイトへのアクセス、商品購入等、全てのサービスがご利用頂けません。</p>
              <p class="c-text--md">ご利用の皆様には多大なご迷惑をお掛け致しますが、何卒ご了承いただけますようお願い申し上げます。</p>
              <p class="c-text--md">規格品は<a href="https://store.shopping.yahoo.co.jp/acry-ya/">Yahoo!ショッピング</a>にも出品がございますので、お急ぎの方はそちらをご利用下さい。</p>
            </section>
        </section>
    </div>
@endsection
