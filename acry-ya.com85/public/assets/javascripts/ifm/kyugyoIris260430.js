$(function () {
  // ===== 日付取得（YYYYMMDD）=====
  const now = new Date();
  const nowDate = Number(
    now.getFullYear().toString() +
    String(now.getMonth() + 1).padStart(2, '0') +
    String(now.getDate()).padStart(2, '0')
  );

  // ===== 表示期限 =====
  const LIMIT_DATE = 20300106;

  // ===== HTMLテンプレ =====
  const kyugyoHtml = `
  <div class="l-article--column-1">
    <div class="c-flame--sm--gray">
      <p class="c-heading--sm">納期遅延に関してのお詫び</p>
      <p class="c-text--md">
        メーカーの機器トラブルと世界情勢による需要増が重なり、一部製品が品薄となっております。
        納品までお時間をいただく場合がございますが、5月中旬以降に安定する見込みです。
      </p>
      <p class="c-text--md">
        お急ぎの際は、類似品の<a href="/products/detail/131/" target="_blank">ポリカーボネート板 フリーカット</a>もご検討ください。
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