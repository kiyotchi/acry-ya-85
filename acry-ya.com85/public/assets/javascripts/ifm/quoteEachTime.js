$(function () {

  function toggleCartButton() {
    // メッセージの初期化
    $('#suu_limit_msg').remove();

    // 既にメッセージがなければ追加
    if ($('#suu_limit_msg').length === 0) {
      $('#suu').closest('.form__item').after(
        '<div class="l-article--column-1" id="suu_limit_msg">' +
        '<p class="c-text--md-danger--center">メンテナンス中</p>' +
        '<p class="c-text--md-center">お急ぎの場合は<a href="/full_order/web/" target="_blank">お問合せ</a>下さい。</p>' +
        '</div>'
      );
    }

    $('.overview__price').hide();
    $('.overview__order').hide();
  }

  // --- 初期実行処理 ---
  // ページ読み込み時
  toggleCartButton();

  // 他の初期化スクリプトによる要素書き換え対策
  setTimeout(toggleCartButton, 300);
});
