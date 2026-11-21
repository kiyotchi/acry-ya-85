let kyugyo_info1 = '<table class="c-table" id="kyugyo_info_tbl"><tbody><tr><th>メーカーGW休業に伴う出荷スケジュールのお知らせ</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let kyugyo_info2 = '4月24日（金）までのご注文：4月28日（火）までの出荷';
let kyugyo_info3 = '</li><li class="list__item">';
let kyugyo_info4 = '4月25日（土）以降のご注文：5月7日（木）以降の出荷';
let kyugyo_info5 = '</li>';
let kyugyo_info6 = '<li class="list__item">ご不在予定日や受取不可日は、必ずコメント欄にご入力ください。</li>';
let kyugyo_info7 = '<li class="list__item">休業明けは運送会社の繁忙期により、お届けが1～3日遅れる場合がございます。</li>';
let kyugyo_info8 = '</li></ul></td></tr></tbody></table>';

let kyugyo_info9 = '<div id="cartInfo"><span class="form__input"><p class="c-text--sm-danger" id="cartInfo_text"></p><span class="c-label--md--noukiInfo">';
let kyugyo_info10 = '「メーカー冬季休業に伴う出荷スケジュールのお知らせ季休業のお知らせ」をご確認下さい';
let kyugyo_info11 = '</span></span></div>';

dd = new Date();
yy = dd.getYear();
mm = dd.getMonth() + 1;
dd = dd.getDate();

if (yy < 2000) { yy += 1900; }
if (mm < 10) { mm = "0" + mm; }
if (dd < 10) { dd = "0" + dd; }

now_date = String(yy) + String(mm) + String(dd);

$(document).ready(function () {
  if (Number(now_date) < 20260508) {
    $('.mainVisual__description').after(kyugyo_info1 + kyugyo_info2 + kyugyo_info3 + kyugyo_info4 + kyugyo_info5 + kyugyo_info6 + kyugyo_info7 + kyugyo_info8);
    $('#kyugyo_info_tbl').css('color', 'red');
    $('#kyugyo_info_tbl.c-table th').css('background-color', '#ffdbdb');
    $('#delivery_schedule').hide();
  };
});
