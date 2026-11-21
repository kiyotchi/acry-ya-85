function check_hankaku(txt)
{

	alert_check = 0;
	kana = 0;
	
	hc = "｡､･㈱㈲ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ"
	
	for(i=0; i<txt.length; i++) {
    	if(hc.indexOf(txt.charAt(i),0) >= 0){
    		alert_check = 1;
		};
	};

	if(alert_check == 1){
		alert("半角カナや記号と（株）（有）は使用できませんので修正下さい");
		document.sendform.send.disabled = true;
	} else {
		document.sendform.send.disabled = false;
	};

	return true;

}


function input_check_c()
{
	alert_flg = 0;

	if(document.sendform.email.value == ""){
		alert("メールアドレスを入力して下さい");
		alert_flg = 1;
	};

	if(!document.sendform.email.value.match(/.+@.+\..+/) && alert_flg == 0){
		alert("メールアドレスをお確かめください。");
		alert_flg = 1;
	};

	if(document.sendform.email2.value == "" && alert_flg == 0){
		alert("メールアドレス（確認用）を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.email.value != document.sendform.email2.value  && alert_flg == 0){
		alert("メールアドレスとメールアドレス（確認用）が違います");
		alert_flg = 1;
	};

	if(document.sendform.お名前.value == "" && alert_flg == 0){
		alert("お名前（漢字）を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.お名前かな.value == "" && alert_flg == 0){
		alert("お名前（かな）を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.郵便番号.value == "" && alert_flg == 0){
		alert("郵便番号を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.都道府県.value == "" && alert_flg == 0){
		alert("都道府県を選択して下さい");
		alert_flg = 1;
	};

	if(document.sendform.住所.value == "" && alert_flg == 0){
		alert("住所を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.電話番号.value == "" && alert_flg == 0){
		alert("電話番号を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.弊社からの電話連絡[0].checked == false && document.sendform.弊社からの電話連絡[1].checked == false && alert_flg == 0){
		alert("弊社からの電話連絡を選択下さい");
		alert_flg = 1;
	}

	if(document.sendform.お問い合わせ内容.value == "" && alert_flg == 0){
		alert("お問い合わせ内容を入力下さい");
		alert_flg = 1;
	}



	if(alert_flg == 0){
		document.sendform.submit();
	};
}

function check_hankaku(txt)
{

	alert_check = 0;
	kana = 0;
	
	hc = "｡､･㈱㈲ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ"
	
	for(i=0; i<txt.length; i++) {
    	if(hc.indexOf(txt.charAt(i),0) >= 0){
    		alert_check = 1;
		};
	};

	if(alert_check == 1){
		alert("半角カナや記号と（株）（有）は使用できませんので修正下さい");
		document.sendform.send.disabled = true;
	} else {
		document.sendform.send.disabled = false;
	};

	return true;

}
function input_check_f()
{
	alert_flg = 0;

	if(document.sendform.email.value == ""){
		alert("メールアドレスを入力して下さい");
		alert_flg = 1;
	};


	if(!document.sendform.email.value.match(/.+@.+\..+/) && alert_flg == 0){
		alert("メールアドレスをお確かめください。");
		alert_flg = 1;
	};

	if(document.sendform.email2.value == "" && alert_flg == 0){
		alert("メールアドレス（確認用）を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.email.value != document.sendform.email2.value  && alert_flg == 0){
		alert("メールアドレスとメールアドレス（確認用）が違います");
		alert_flg = 1;
	};


	if(document.sendform.お名前.value == "" && alert_flg == 0){
		alert("お名前（漢字）を入力して下さい");
		alert_flg = 1;
	};


	if(document.sendform.お名前かな.value == "" && alert_flg == 0){
		alert("お名前（かな）を入力して下さい");
		alert_flg = 1;
	};


	if(document.sendform.郵便番号.value == "" && alert_flg == 0){
		alert("郵便番号を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.都道府県.value == "" && alert_flg == 0){
		alert("都道府県を選択して下さい");
		alert_flg = 1;
	};

	if(document.sendform.住所.value == "" && alert_flg == 0){
		alert("住所を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.電話番号.value == "" && alert_flg == 0){
		alert("電話番号を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.弊社からの電話連絡[0].checked == false && document.sendform.弊社からの電話連絡[1].checked == false && alert_flg == 0){
		alert("弊社からの電話連絡を選択下さい");
		alert_flg = 1;
	}

	if(document.sendform.問い合わせ商品.value == "" && alert_flg == 0){
		alert("問い合わせ商品を入力して下さい");
		alert_flg = 1;
	}

	if(document.sendform.ご使用用途.value == "" && alert_flg == 0){
		alert("ご使用用途を入力して下さい");
		alert_flg = 1;
	}

	if(document.sendform.製作数.value == "" && alert_flg == 0){
		alert("製作数を入力して下さい");
		alert_flg = 1;
	}

	if(document.sendform.全体横mm.value == "" && alert_flg == 0 || document.sendform.全体奥行きmm.value == "" && alert_flg == 0 || document.sendform.全体高さmm.value == "" && alert_flg == 0){
		alert("全体サイズを入力して下さい");
		alert_flg = 1;
	}

	if(document.sendform.色.value == "選択下さい" && alert_flg == 0 || document.sendform.厚さ.value == "選択下さい" && alert_flg == 0){
		alert("材料の色・厚さを入力して下さい");
		alert_flg = 1;
	}

	if(document.sendform.納品方法.value == "" && alert_flg == 0){
		alert("納品方法を選択して下さい");
		alert_flg = 1;
	}


	if(document.sendform.類似見積の有無.value == "" && alert_flg == 0){
		alert("類似見積の有無を選択して下さい");
		alert_flg = 1;
	}

	if(document.sendform.製作内容の詳細.value == "" && alert_flg == 0){
		alert("製作内容の詳細を入力して下さい");
		alert_flg = 1;
	}

	if(alert_flg == 0){
		document.sendform.submit();
	};

}


function input_check_sakura()
{
	alert_flg = 0;

	if(document.sendform.ご使用用途.value == "" && alert_flg == 0){
		alert("ご使用用途を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.製作数.value == "" && alert_flg == 0){
		alert("製作数を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.材料.value == "" && alert_flg == 0 || document.sendform.色.value == "" && alert_flg == 0){
		alert("材料の名前・色を入力して下さい");
		alert_flg = 1;
	}

	if(document.sendform.製作内容の詳細.value == "" && alert_flg == 0){
		alert("製作内容の詳細を入力して下さい");
		alert_flg = 1;
	}


	if(document.sendform.email.value == "" && alert_flg == 0){
		alert("メールアドレスを入力して下さい");
		alert_flg = 1;
	};


	if(!document.sendform.email.value.match(/.+@.+\..+/) && alert_flg == 0){
		alert("メールアドレスをお確かめください。");
		alert_flg = 1;
	};

	if(document.sendform.email2.value == "" && alert_flg == 0){
		alert("メールアドレス（確認用）を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.email.value != document.sendform.email2.value  && alert_flg == 0){
		alert("メールアドレスとメールアドレス（確認用）が違います");
		alert_flg = 1;
	};

	if(document.sendform.担当者様名.value == "" && alert_flg == 0){
		alert("担当者様名(漢字)を入力して下さい");
		alert_flg = 1;
	};


	if(document.sendform.担当者様ひらがな.value == "" && alert_flg == 0){
		alert("担当者様(ひらがな)を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.法人名.value == "" && alert_flg == 0){
		alert("法人名を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.法人名ひらがな.value == "" && alert_flg == 0){
		alert("法人名(ひらがな)を入力して下さい");
		alert_flg = 1;
	};


	if(document.sendform.郵便番号.value == "" && alert_flg == 0){
		alert("郵便番号を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.都道府県.value == "" && alert_flg == 0){
		alert("都道府県を選択して下さい");
		alert_flg = 1;
	};

	if(document.sendform.住所.value == "" && alert_flg == 0){
		alert("住所を入力して下さい");
		alert_flg = 1;
	};

	if(document.sendform.電話番号.value == "" && alert_flg == 0){
		alert("電話番号を入力して下さい");
		alert_flg = 1;
	};


	if(alert_flg == 0){
		document.sendform.submit();
	};
}


function input_check_cyokoku_ss()
{
	alert_flg = 0;

	if(document.sendform.本体品名.value == "" && alert_flg == 0){
		alert("本体品名を入力して下さい");
		alert_flg = 1;
	};







	if(alert_flg == 0){
		document.sendform.submit();
	};
}


