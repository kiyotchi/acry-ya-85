let kyugyo_info1='<table class="c-table" id="kyugyo_info_tbl"><tbody><tr><th>メーカー夏季休業に伴う出荷スケジュールのお知らせ</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let kyugyo_info2='8月4日（月）までのご注文：8月8日（金）までの出荷';
let kyugyo_info3='</li><li class="list__item">';
let kyugyo_info4='8月5日（火）以降のご注文：8月18日（火）以降の出荷';
let kyugyo_info5='</li><li class="list__item">';
let kyugyo_info6='休業明けは運送会社の繁忙期により、お届けが1～3日遅れる場合がございます。';
let kyugyo_info7='</li></ul></td></tr></tbody></table>';

let kyugyo_info8='<div id="cartInfo"><span class="form__input"><p class="c-text--sm-danger" id="cartInfo_text"></p><span class="c-label--md--noukiInfo">';
let kyugyo_info9='「メーカー夏季休業のお知らせ」をご確認下さい';
let kyugyo_info10='</span></span></div>';

dd = new Date();
yy = dd.getYear();
mm = dd.getMonth() + 1;
dd = dd.getDate();

if (yy < 2000) { yy += 1900; }
if (mm < 10) { mm = "0" + mm; }
if (dd < 10) { dd = "0" + dd; }

now_date = String(yy) + String(mm) + String(dd);

$(document).ready(function(){
  if(Number(now_date) < 20250818){
    $('.mainVisual__description').after(kyugyo_info1 + kyugyo_info2 + kyugyo_info3 + kyugyo_info4 + kyugyo_info5+ kyugyo_info6+ kyugyo_info7);
    $('#kyugyo_info_tbl').css('color','red');
    $('#kyugyo_info_tbl.c-table th').css('background-color', '#ffdbdb');
    $('#delivery_schedule').hide();
  };
});
