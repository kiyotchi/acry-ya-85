let mojiBox1='<table class="c-table" id="mojiBox_tbl"><tbody><tr><th>材料欠品のお知らせ</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let mojiBox2='住化アクリル販売株式会社製キャスト板（スミペックス）に関しては、メーカー製造設備不具合の関係で、ご注文後に材料がご用意できない場合がございます。申し訳ございませんが、予めご了承ください。';
let mojiBox3='</li><li class="list__item">';
let mojiBox4='休業明けのご注文は運送会社が繁忙期となるため、商品お届け予定日より1～3日程度遅れる場合がございます。';
let mojiBox5='</li></ul></td></tr></tbody></table>';

let mojiBox10='<div id="cartInfo"><span class="form__input"><p class="c-text--sm-danger" id="cartInfo_text"></p><span class="c-label--md--noukiInfo">';
let mojiBox11='「材料欠品のお知らせ」をご確認下さい';
let mojiBox12='</span></span></div>';

$(document).ready(function(){
    $('.mainVisual__description').after(mojiBox1 + mojiBox2 + mojiBox5);
    $('#mojiBox_tbl').css('color','red');
    $('#mojiBox_tbl.c-table th').css('background-color', '#ffdbdb');
});
