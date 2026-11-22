$(function () {
  // ===== 日付取得（YYYYMMDD）=====
  const now = new Date();
  const nowDate = Number(
    now.getFullYear().toString() +
    String(now.getMonth() + 1).padStart(2, '0') +
    String(now.getDate()).padStart(2, '0')
  );

  // ===== 表示期限 =====
  const LIMIT_DATE = 20260731;

  // ===== HTMLテンプレ =====
  const kyugyoHtml = `
  <div class="l-article--column-1">
    <div class="c-flame--sm--gray">
      <p class="c-heading--sm">納期に関するお知らせ</p>
      <p class="c-text--md">
        メーカー機器故障による納期遅延について、現在は復旧により正常化しております。
        <br>ただし、一部の色（乳半）や大口案件（大判で50枚以上等）に関しては原材料供給状況により通常より納期を頂く場合がございます。
        <br>お急ぎの場合やまとまった数量をご検討の場合は、事前にお問い合わせください。
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