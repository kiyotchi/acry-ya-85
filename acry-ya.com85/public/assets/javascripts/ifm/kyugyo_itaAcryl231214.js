let kyugyo_info1='<table class="c-table" id="kyugyo_info_tbl"><tbody><tr><th>メーカー冬季休業のお知らせ</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let kyugyo_info2='メーカー冬季休業のため、2023年12月20日（水）までに正式注文となったオーダーが休業前の出荷となり、それ以降のご注文は2024年1月5日（金）以降の出荷になる可能性があります。予めご了承願います。';
let kyugyo_info3='</li><li class="list__item">';
let kyugyo_info4='休業明けのご注文は運送会社が繁忙期となるため、商品お届け予定日より1～3日程度遅れる場合がございます。';
let kyugyo_info5='</li></ul></td></tr></tbody></table>';

let kyugyo_info10='<div id="cartInfo"><span class="form__input"><p class="c-text--sm-danger" id="cartInfo_text"></p><span class="c-label--md--noukiInfo">';
let kyugyo_info11='「メーカー冬季休業のお知らせ」をご確認下さい';
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
  if(Number(now_date) < 20240105){
    $('.mainVisual__description').after(kyugyo_info1 + kyugyo_info2 + kyugyo_info3 + kyugyo_info4 + kyugyo_info5);
    $('#kyugyo_info_tbl').css('color','red');
    $('#kyugyo_info_tbl.c-table th').css('background-color', '#ffdbdb');
    $('#delivery_schedule').hide();
  };
});
