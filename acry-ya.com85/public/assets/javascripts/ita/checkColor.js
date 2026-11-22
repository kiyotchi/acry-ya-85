document.addEventListener('DOMContentLoaded', () => {

    // ★ 1. アラート（非表示）を出したい「色と板厚」の組み合わせ
    const alertTargets = [
        { color: '蛍光バイオレットエッジ', thickness: '3' },
        { color: '表裏蛍光バイオレットエッジ', thickness: '3' },
        { color: '裏表蛍光バイオレットエッジ', thickness: '3' }
    ];

    // ★ 2. ページによって異なる可能性のある「色」セレクトボックスのIDやname
    const colorIdentifiers = ['asi_iro', 'body_color', 'color', 'colour', 'door_color', 'iro', 'iro_hidari', 'iro_mae', 'iro_migi', 'iro_naka', 'iro_sikiri1', 'iro_sikiri2', 'iro_uesita', 'iro_ura', 'iro1', 'iro2', 'iro3', 'iro4', 'kind', 'pedestal_color', 'tana1_iro1', 'tana1_iro2', 'top_color'];

    // ★ 3. ページによって異なる可能性のある「板厚」セレクトボックスのIDやname
    const thickIdentifiers = ['thickness', 'atu', 'body_thickness', 'pedestal_thickness'];


    // ページ全体の「色」と「厚み」を一括チェックする関数
    function checkCombination() {
        let colorSelect = null;
        let thickSelect = null;

        // 配列から、ページ内に存在する「色」のセレクトボックスを自動走査
        for (const id of colorIdentifiers) {
            const el = document.getElementById(id) || document.querySelector(`select[name="${id}"]`);
            if (el) {
                colorSelect = el;
                break; // 見つかったらループを抜ける
            }
        }

        // 配列から、ページ内に存在する「板厚」のセレクトボックスを自動走査
        for (const id of thickIdentifiers) {
            const el = document.getElementById(id) || document.querySelector(`select[name="${id}"]`);
            if (el) {
                thickSelect = el;
                break; // 見つかったらループを抜ける
            }
        }

        // 色セレクトボックスすら無いページは何もしない
        if (!colorSelect) return;

        // 現在選択されている色を取得
        const currentColor = colorSelect.options[colorSelect.selectedIndex]?.text.trim();

        let isMatched = false;

        // --- 分岐処理 ---
        if (thickSelect) {
            // ① 板厚リストがあるページ：色と板厚の両方が一致するかチェック
            const currentThick = thickSelect.options[thickSelect.selectedIndex]?.text.trim();

            isMatched = alertTargets.some(target => {
                return target.color === currentColor && target.thickness === currentThick;
            });
        } else {
            // ② 板厚リストがないページ：色だけでチェック
            isMatched = alertTargets.some(target => {
                return target.color === currentColor;
            });
        }

        // メッセージ削除
        $('#suu_limit_msg').remove();

        // 一致した場合（廃盤の組み合わせ、または廃盤の色）
        if (isMatched) {
            $('#suu').closest('.form__item').after(
                '<div class="l-article--column-1" id="suu_limit_msg">' +
                '<p class="c-text--md-danger--center">この板は廃盤となりました</p>' +
                '</div>'
            );

            $('.overview__price').hide();
            $('.overview__order').hide();

        } else {
            // 一致しない場合は通常通り表示
            $('.overview__price').show();
            $('.overview__order').show();
        }
    }

    // --- ① ページ読み込み時のチェック ---
    checkCombination();

    // --- ② 各セレクトボックスへのイベント紐付け ---
    document.querySelectorAll('select').forEach(select => {
        // 既存のonchange属性よりも確実に先回りして動かす（キャプチャリングモード: true）
        select.addEventListener('change', () => {
            checkCombination();
        }, true);
    });
});