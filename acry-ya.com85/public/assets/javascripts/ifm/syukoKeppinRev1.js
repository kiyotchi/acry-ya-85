$(function () {

  function toggleCartButton() {
    // カラー取得
    var color = $('#color').val();

    // メッセージの初期化
    $('#suu_limit_msg').remove();

    // 条件一致（集光ブルーの場合）
    if (color === '集光ブルー') {
      // 既にメッセージがなければ追加
      if ($('#suu_limit_msg').length === 0) {
        $('#suu').closest('.form__item').after(
          '<div class="l-article--column-1" id="suu_limit_msg">' +
          '<p class="c-text--md-danger--center">欠品中です</p>' +
          '</div>'
        );
      }
      $('.overview__price').hide();
      $('.overview__order').hide();
    } else {
      $('.overview__price').show();
      $('.overview__order').show();
    }
  }

  // --- イベント設定 ---

  // カラー変更時の処理
  $(document).on('change', '#color', function () {
    // HTML側のインラインonchange属性の処理（価格再計算など）が
    // 終わった直後に実行されるよう、わずかに遅延させる
    setTimeout(toggleCartButton, 50);
  });

  // --- 初期実行処理 ---
  // ページ読み込み時
  toggleCartButton();

  // 他の初期化スクリプトによる要素書き換え対策
  setTimeout(toggleCartButton, 300);
});