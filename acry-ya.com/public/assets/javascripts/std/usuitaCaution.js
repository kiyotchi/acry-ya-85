document.addEventListener('DOMContentLoaded', () => {
    const sizeSelect = document.getElementById('size_s');
    const notesList = document.querySelector('.p-notes .c-list--disc');

    // 追加する要素の作成
    const newLi = document.createElement('li');
    newLi.className = 'list__item';
    newLi.textContent = '1mm厚や6mm厚の板が入る場合があります。';

    function toggleNotice() {
        if (!sizeSelect || !notesList) return;

        // 選択されている値が「薄板セット（板厚2～5mm）」の場合
        if (sizeSelect.value === '薄板セット（板厚2～5mm）') {
            // まだ追加されていなければ末尾に追加
            if (!notesList.contains(newLi)) {
                notesList.appendChild(newLi);
            }
        } else {
            // それ以外（厚板など）が選ばれたら削除
            if (notesList.contains(newLi)) {
                newLi.remove();
            }
        }
    }

    // 初期実行（ページ読み込み時の状態チェック）
    toggleNotice();

    // セレクトボックス変更時に実行
    sizeSelect.addEventListener('change', toggleNotice);
});