$(document).ready(function () {
  iro = document.form_semiorder.iro.value;
  cautionMsg = '<p class="c-text--md-danger">クリアー（片面/両面耐擦傷・耐候）は廃盤のため在庫限りとなります。申し訳ございませんが、欠品時はキャンセルとさせていただきます。</p>';

  $('#step-02 .c-list').before(cautionMsg);
});
