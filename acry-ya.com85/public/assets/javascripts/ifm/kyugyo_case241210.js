let kyugyo_info1='<table class="c-table" id="kyugyo_info_tbl"><tbody><tr><th>冬季休業のお知らせ</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let kyugyo_info2='2024年12月27日(金)〜2025年1月6日(月)は冬季休業となります。休業前のご注文に関し、休業明けのお届けになる場合もございます為、お早めのご注文をお願いいたします。';
let kyugyo_info3='</li></ul></td></tr></tbody></table><br>';

let kyugyo_info10='<div id="cartInfo"><span class="form__input"><p class="c-text--sm-danger" id="cartInfo_text"></p><span class="c-label--md--noukiInfo">';
let kyugyo_info11='「冬季休業のお知らせ」をご確認下さい';
let kyugyo_info12='</span></span></div>';

dd = new Date();
yy = dd.getYear();
mm = dd.getMonth() + 1;
dd = dd.getDate();

if (yy < 2000) { yy += 1900; }
if (mm < 10) { mm = "0" + mm; }
if (dd < 10) { dd = "0" + dd; }

now_date = String(yy) + String(mm) + String(dd);

$(document).ready(function(){
  if(Number(now_date) < 20250106){
    $('.mainVisual__description').after(kyugyo_info1 + kyugyo_info2 + kyugyo_info3);
    $('#kyugyo_info_tbl').css('color','red');
    $('#kyugyo_info_tbl.c-table th').css('background-color', '#ffdbdb');
    $('#cartInfo').after(kyugyo_info10+kyugyo_info11+kyugyo_info12);
  };
});
