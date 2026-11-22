$(function () {

  function toggleOrderAction() {

    var color = $('#iro').val();
    var thickness = $('#atu').val();

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

  // 初期表示時
  toggleOrderAction();

  // 色変更時
  $('#iro').on('change', function () {
    toggleOrderAction();
  });

  // 厚み変更時
  $('#atu').on('change', function () {
    toggleOrderAction();
  });

});