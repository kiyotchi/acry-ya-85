$(function() {
    // 追記：overview__tagの中に「受注色」という文字がある場合のみ実行
    if ($('.overview__tag:contains("受注色")').length > 0) {

$(function () {
  // ===== 日付取得（YYYYMMDD）=====
  const now = new Date();
  const nowDate = Number(
    now.getFullYear().toString() +
    String(now.getMonth() + 1).padStart(2, '0') +
    String(now.getDate()).padStart(2, '0')
  );

  // ===== 表示期限 =====
  const LIMIT_DATE = 20500106;

  // ===== HTMLテンプレ =====
  const kyugyoHtml = `
  <div class="l-article--column-1">
    <div class="c-flame--sm--gray">
      <p class="c-heading--sm">受注色の在庫・納期について</p>
      <p class="c-text--md">
        受注色はメーカーの製造ロット（トン単位）が非常に大きく、メーカー在庫が欠品した場合は「次回入荷未定」となり、数ヶ月〜1年以上手配ができない可能性がございます。
      </p>
      <p class="c-text--md">
        ご検討の際は、必ずご注文前に<a href="/full_order/web/" target="_blank">「お問い合わせ」</a>より最新の在庫状況をご確認ください。
      </p>
    </div>
  </div>
  `;

  // ===== 表示制御 =====
  if (nowDate < LIMIT_DATE) {
    $('.mainVisual__description').after(kyugyoHtml);

    //    $('#kyugyo_info_tbl').css('color', 'red');
    //    $('#kyugyo_info_tbl th').css('background-color', '#ffdbdb');
    //    $('#delivery_schedule').hide();
  }
});

} else {
        // 受注色でない場合は、枠自体が表示されないように非表示にする
        $('.product-order-color-title, .product-order-color-text').hide();
    }
});
