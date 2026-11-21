let kyugyo_info1 = '<table class="c-table" id="kyugyo_info_tbl"><tbody><tr><th>AGC製品（ツインカーボ・霞型模様）移行に伴う納期未定のお知らせ</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let kyugyo_info2 = 'AGC(株)製ポリカーボネート事業が住友ベークライト(株)に譲渡となりました。一部製品の廃盤、類似色への移行を予定しております。移行期間の安定供給には時間を要しており、現在納期は未定となっております。ご迷惑をお掛けいたしますが、よろしくお願いいたします。';
let kyugyo_info3 = '</li></ul></td></tr></tbody></table>';


$(document).ready(function () {
  $('.mainVisual__description').after(kyugyo_info1 + kyugyo_info2 + kyugyo_info3);
  $('#kyugyo_info_tbl').css('color', 'red');
  $('#kyugyo_info_tbl.c-table th').css('background-color', '#ffdbdb');
});
