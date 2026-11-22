document.addEventListener('DOMContentLoaded', () => {
  const suryoInput = document.getElementById('suryo');
  const plusButton = document.querySelector('.number__button--plus');
  const noticeText = document.querySelector('#suryoInfo .c-text--md-danger');

  if (!suryoInput || !noticeText) return;

  // 数量をチェックして表示と要素の状態（disabled）を変更する関数
  function checkQuantity() {
    const currentVal = parseInt(suryoInput.value, 10) || 0;

    if (currentVal >= 21) {
      noticeText.innerHTML = '21台以上は<a href="/full_order/">お問合せ</a>下さい';
      suryoInput.disabled = true; // 数量入力欄を無効化
      if (plusButton) plusButton.disabled = true; // ＋ボタンを無効化
    } else {
      noticeText.textContent = '複数ご購入で割引価格に!';
      suryoInput.disabled = false; // 数量入力欄を有効化
      if (plusButton) plusButton.disabled = false; // ＋ボタンを有効化
    }
  }

  // 手入力時・値変更時に判定
  suryoInput.addEventListener('input', checkQuantity);
  suryoInput.addEventListener('change', checkQuantity);

  // ＋ボタン・－ボタン押下時にも判定（既存処理の直後に実行）
  const buttons = document.querySelectorAll('.number__button--plus, .number__button--minus');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      setTimeout(checkQuantity, 0);
    });
  });

  // ページ読み込み時の初期状態チェック
  checkQuantity();
});