let kyugyo_info1='<table class="c-table" id="kyugyo_info_tbl"><tbody><tr><th>販売停止中の製品について</th></tr><tr><td><ul class="c-list--disc"><li class="list__item">';
let kyugyo_info2='アクリル板の需要増に伴い、大板の規格板のご注文を停止させて頂いております。';
let kyugyo_info3='</li><li class="list__item">';
let kyugyo_info4='販売停止中のサイズは1300x1100mm、1830x915mm、2000x1000mmとなります。';
let kyugyo_info5='</li></ul></td></tr></tbody></table>';

$(document).ready(function(){
		$('.mainVisual__description').after(kyugyo_info1 + kyugyo_info2 + kyugyo_info3 + kyugyo_info4 + kyugyo_info5);
		$('#kyugyo_info_tbl').css('color','#000');
		$('#kyugyo_info_tbl.c-table th').css('background-color', '#FD9B5B');
		$('#kyugyo_info_tbl.c-table th').css('color', '#fff');
});
