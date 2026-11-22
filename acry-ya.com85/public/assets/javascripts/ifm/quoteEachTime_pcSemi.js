$(function () {

  // 現在の選択状態を見て、表示/非表示を切り替える
  function apply() {
    const iro = $.trim($('#iro option:selected').text() || $('#iro').val());

    // メッセージ重複防止
    $('#suu_limit_msg').remove();

    if (iro === 'ポリッシュホワイト') {
      // 価格・注文エリアを隠す
      $('.overview__price, .overview__order').hide();

      // 数量欄の下に案内を追加
      $('#suu').closest('.form__item').after(
        '<div class="l-article--column-1" id="suu_limit_msg">' +
        '<p class="c-text--md-danger--center">販売停止中</p>' +
        '<p class="c-text--md-center">在庫残小の為、<br>ご入用の際は<a href="/full_order/web/" target="_blank">お問合せ</a>下さい。</p>' +
        '</div>'
      );
    } else {
      // 対象色以外なら元に戻す
      $('.overview__price, .overview__order').show();
    }
  }

  // ページ側JSの価格再計算・表示更新後に再判定する
  function applyLater() {
    setTimeout(apply, 100);
    setTimeout(apply, 500);
  }

  // 色以外のフォーム操作でも、ページ側JSが表示を戻す可能性があるので再判定
  $(document).on('change input click', 'select, input, button, a', applyLater);

  // 初期表示時にも判定
  applyLater();

});