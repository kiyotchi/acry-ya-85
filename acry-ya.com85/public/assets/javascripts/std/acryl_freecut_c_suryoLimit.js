$(function () {

  var LIMIT = 5;

  var suryoHtml =
    '<div class="l-article--column-1">' +
    '<div class="c-flame--sm--gray">' +
    '<p class="c-heading--sm">購入制限に関するお知らせ</p>' +
    '<p class="c-text--md">' +
    'アクリルキャスト板フリーカットに関して中東情勢の影響によりメーカー直送品の購入を制限させていただきます。' +
    '1回のご注文で同条件（色、板厚、サイズが同じ）の板については最大4枚までの購入となります。' +
    '安定供給のための措置となりますので申し訳ございませんがご了承ください。' +
    '</p>' +
    '</div>' +
    '</div>';
  // ===== 判定 =====
  function checkLimit() {

    var suu = Number($('#suu').val());
    var maker = $('#tag_makerdirect').length > 0
      || $('.overview__tag:contains("メーカー直送")').length > 0;

    if (maker && suu >= LIMIT) {

      if ($('#suu_limit_msg').length === 0) {
        $('#suu').closest('.form__item').after(
          '<dl class="form__item" id="suu_limit_msg">' +
          '<dt></dt><dd class="c-text--md-danger">' +
          '5枚以上購入できません' +
          '</dd></dl>'
        );
        $('.overview__price').hide();
        $('.overview__order').hide();
      }

      $('#add_to_cart').prop('disabled', true);

    } else {

      $('.overview__price').show();
      $('.overview__order').show();
      $('#suu_limit_msg').remove();
      $('#add_to_cart').prop('disabled', false);
    }
  }

  // ===== 初期表示 =====
  checkLimit();

  // 注意文（1回だけ）
  if ($('#suryoLimit').length === 0) {
    $('.mainVisual__description').after(suryoHtml);
  }

  // ===== 数量変更 =====
  $(document).on('input change', '#suu', function () {
    checkLimit();
  });

  // ===== +/- =====
  $(document).on('click', '.number__button--plus, .number__button--minus', function () {
    setTimeout(checkLimit, 100);
  });

  // ===== color変更（重要）=====
  $(document).on('change', '#color', function () {

    // 即時
    checkLimit();

    // DOM更新待ち（確実に拾う）
    var count = 0;
    var interval = setInterval(function () {
      checkLimit();
      count++;
      if (count >= 5) clearInterval(interval);
    }, 100);

  });

});