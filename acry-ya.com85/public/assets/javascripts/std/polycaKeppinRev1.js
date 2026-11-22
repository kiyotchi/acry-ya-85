$(function () {

  function toggleCartButton() {

    // カラー取得
    var color = $('#iro').val();

    // 板厚取得
    var thickness = $('#thickness').val();

    // 対象ボタン
    var $btn = $('.action__button.c-button--xl-cart.js-modal__trigger--open');

    // 条件一致
    $('#suu_limit_msg').remove();
    if (
      (
        color === 'クリアー(両面耐候)' &&
        ['2', '3', '4'].includes(thickness)
      ) ||
      (
        color === 'ブラウンスモーク(熱線カット・両面耐候)' &&
        ['2', '3'].includes(thickness)
      )
    ) {
      $('#suu').closest('.form__item').after(
        '<div class="l-article--column-1" id="suu_limit_msg">' +
        '<p class="c-text--md-danger--center">欠品中です</p>' +
        '</div>'
      );
      $('.overview__price').hide();
      $('.overview__order').hide();
    } else {
      $('#suu_limit_msg').remove();
      $('.overview__price').show();
      $('.overview__order').show();

    }
  }

  // 初期実行
  toggleCartButton();

  // カラー変更
  $(document).on('change', '#iro', function () {

    toggleCartButton();

    // 他JSの更新対策
    setTimeout(toggleCartButton, 300);

  });

  // 板厚変更
  $(document).on('change', '#thickness', function () {

    toggleCartButton();

    // 他JSの更新対策
    setTimeout(toggleCartButton, 300);

  });

});