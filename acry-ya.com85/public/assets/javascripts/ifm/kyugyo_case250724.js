let kyugyo_info1='<table class="c-table" id="kyugyo_info_tbl"><tbody><tr><th>配送に関するご案内</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let kyugyo_info2='8月8日(金)より運送会社の夏季休業のため、大型商品（製品サイズ合計が1750mm超）の出荷は8月18日(月)以降となります。大型商品は表示の出荷目安と異なる場合がありますので、ご了承ください。';
let kyugyo_info3='</li></ul></td></tr></tbody></table><br>';

let kyugyo_info10='<div id="cartInfo"><span class="form__input"><p class="c-text--sm-danger" id="cartInfo_text"></p><span class="c-label--md--noukiInfo">';
let kyugyo_info11='「配送に関するご案内」をご確認下さい';
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
  if(Number(now_date) < 20250731){
    $('.mainVisual__description').after(kyugyo_info1 + kyugyo_info2 + kyugyo_info3);
    $('#kyugyo_info_tbl').css('color','red');
    $('#kyugyo_info_tbl.c-table th').css('background-color', '#ffdbdb');
    $('#cartInfo').after(kyugyo_info10+kyugyo_info11+kyugyo_info12);
  };
});
