document.addEventListener('DOMContentLoaded', function() {
    // 1. まず ID="productSpec" を消す（前回のコード）
    const target = document.getElementById('productSpec');
    if (target && target.textContent.includes('製品仕様')) {

        // 2. 【追加】消す要素の「すぐ次」にある要素を取得する
        const nextElement = target.nextElementSibling;

        // 3. もし次の要素が存在して、見出し（印刷できます。）を含んでいたら、その線を消す
        if (nextElement && nextElement.textContent.includes('印刷できます')) {
            // 線（border）を消し、余白（padding/margin）も調整して詰める
            nextElement.style.borderTop = 'none';
            nextElement.style.paddingTop = '0';
            nextElement.style.marginTop = '0';
        }

        // 最後に productSpec 自体を消去
        target.remove();
    }
});
