function chkColor() {
	blackFlg = 0;
	blackFlg = blackFlg + document.form_semiorder.iro_ue.value.indexOf("ブラック");
	blackFlg = blackFlg + document.form_semiorder.iro_back.value.indexOf("ブラック");
	blackFlg = blackFlg + document.form_semiorder.iro_sita.value.indexOf("ブラック");

	$('#orderCaution').hide();
	if (blackFlg != -3) {
		$('#orderCaution').show();
	}
	else {
		$('#orderCaution').hide();
	}
}

$(document).ready(function () {
	$('#orderCaution').hide();
});