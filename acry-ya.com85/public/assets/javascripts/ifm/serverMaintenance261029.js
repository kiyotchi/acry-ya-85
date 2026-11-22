document.addEventListener("DOMContentLoaded", function () {
    const orderAction = document.querySelector(".order__action");

    const mainteCart = `
    <div class="l-article--column-1" id="bakelitecost">
        <div class="article__content">
            <p class="c-text--xs--makerdirect">
                10月29日（木）0:00 ～ 8:00 はサーバーメンテナンスのためご注文ができません
            </p>
        </div>
    </div>
    `;
    const mainteDiscription = `
        <div class="l-article--column-1">
            <div class="c-flame--sm-border--ak">
                    <p class="c-heading--sm">システムメンテナンスのお知らせ</p>
                    <p class="c-text--weightBold">日時 10月29日（木）0:00 ～ 8:00</p>
                    <p class="c-text">メンテナンス作業時間はシミュレーターでのデザインおよび、このページからのご注文ができません。</p>
                    <p class="c-text">ご迷惑をおかけしますが、何卒よろしくお願いいたします。</p>
            </div>
        </div>
        `;

    const startDate = new Date("2026-10-29T00:00:00+09:00");
    const hideDate = new Date("2026-10-29T08:00:00+09:00");
    const now = new Date();

    if (orderAction && now >= startDate && now < hideDate) {
        orderAction.insertAdjacentHTML("afterend", mainteCart);
        $('.mainVisual__description').after(mainteDiscription);
    }
});