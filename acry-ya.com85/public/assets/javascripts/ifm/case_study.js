let cs_start='<div class="content__article c-cardGroup--4">';

let cs1_1='<a href="/case_study/case/mikio.htm" class="c-card--sm">';
let cs1_2='<div class="card__head"><div class="card__image"><img src="/storage/images/example/case/mikio/mikio1.jpg"></div>';
let cs1_3='</div><div class="card__body"><p class="card__category c-text--sm">2020/03/12</p>';
let cs1_4='<p class="card__title c-heading--xs">ALESSI マジックバニーケース</p></div></a>';

let cs1 = cs1_1 + cs1_2 + cs1_3 + cs1_4;

let cs2_1='<a href="/case_study/kag_za_hako/tomo_cl.htm" class="c-card--sm">';
let cs2_2='<div class="card__head"><div class="card__image"><img src="/storage/images/example/kag_za_hako/tomo_cl/tomo_cl.jpg"></div>';
let cs2_3='</div><div class="card__body"><p class="card__category c-text--sm">2020/03/09</p>';
let cs2_4='<p class="card__title c-heading--xs">バキューム式レコードクリーナーダストカバー</p></div></a>';

let cs2 = cs2_1 + cs2_2 + cs2_3 + cs2_4;

let cs3_1='<a href="/case_study/kag_za_hako/tomo_ge.htm" class="c-card--sm">';
let cs3_2='<div class="card__head"><div class="card__image"><img src="/storage/images/example/kag_za_hako/tomo_ge/tomo.jpg"></div>';
let cs3_3='</div><div class="card__body"><p class="card__category c-text--sm">2020/03/05</p>';
let cs3_4='<p class="card__title c-heading--xs">レコードプレーヤーダストカバー</p></div></a>';

let cs3 = cs3_1 + cs3_2 + cs3_3 + cs3_4;

let cs4_1='<a href="/case_study/kag_za_hako/turibaka.htm" class="c-card--sm">';
let cs4_2='<div class="card__head"><div class="card__image"><img src="/storage/images/example/kag_za_hako/turibaka/turibaka.jpg"></div>';
let cs4_3='</div><div class="card__body"><p class="card__category c-text--sm">2020/02/25</p>';
let cs4_4='<p class="card__title c-heading--xs">海水魚水槽の蓋</p></div></a>';

let cs4 = cs4_1 + cs4_2 + cs4_3 + cs4_4;

let cs_end='</div>';
window.onload = function() {$('#case_study').append(cs_start+ cs1 + cs2 + cs3 + cs4 + cs_end);};
