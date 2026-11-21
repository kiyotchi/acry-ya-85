/************************************************/
/*                                              */
/*         ①アクリル板の重量計算               */
/*         ②ポリカーボネート板の重量計算       */
/*         ③アクリルパイプの耐圧計算           */
/*         ④アクリル板のたわみ計算             */
/*                                              */
/************************************************/

function keisan()
{

	yokov = 0;
	tatev = 0;
	atuv = 0;

	yokov = Number(document.form1.yoko.value) / 1000;
	tatev = Number(document.form1.tate.value) / 1000;
	atuv = Number(document.form1.atu.value);
	hijuu = 1.19;

	document.form1.omosa.value = Math.round((yokov * tatev * atuv * hijuu) * 100) / 100;

	return true;

}
function keisan2()
{

	yokov2 = 0;
	tatev2 = 0;
	atuv2 = 0;

	yokov2 = Number(document.form2.yoko2.value) / 1000;
	tatev2 = Number(document.form2.tate2.value) / 1000;
	atuv2 = Number(document.form2.atu2.value);
	hijuu2 = 1.2;

	document.form2.omosa2.value = Math.round((yokov2 * tatev2 * atuv2 * hijuu2) * 100) / 100;

	return true;

}

function keisan3()
{
	cyokkeiv = 0;
	atuv = 0;
	taiatuv = 0;

	cyokkeiv = Number(document.form3.cyokkei.value);
	atuv = Number(document.form3.atusa.value);
	hijuu = 1.19;
	
	taiatuv = Math.round((2 * atuv / 10 * 49)) /( cyokkeiv * 0.1) * 0.1;
	
	document.form3.taiatu.value = taiatuv.toFixed(2);	//小数点第２位の表示

	return true;
}

function tawami_cal()
{
	var zai = 1.2;	 // 比重
	var yan = 3140;	 // ヤング率
	var long = eval(document.form4.width.value);		 // 幅
	var power = eval(document.form4.weight.value) * 10;	 // 荷重（kg）
	var okuyuki = eval(document.form4.depth.value);		 // 奥行
	var atsu = eval(document.form4.thickness.value);	 // 板厚
	
	var h1 = 0.000000001;
	
	var b1 = h1 + h1;
	var p4 = h1 - b1;

	var e1 = ((h1 * h1 * h1) / (h1 * h1)) * 0.5;
	var e2 = h1 - e1;
	var e5 = ((b1 * h1 * h1 + p4 * h1 * h1) / (b1 * h1 + p4 * h1)) * 0.5;
	var e4 = h1 - e5;
	var e5 = e5 - h1;
	
	var ajro = ((atsu * okuyuki) + (h1 * h1) + (h1 * h1)) * long * zai / 1000000;
	var ajro2 = ajro * 9.8;
	
	var aniji1 = (okuyuki * atsu * atsu * atsu) / 12;
	var aniji2 = ((h1 * e1 * e1 * e1)  + (h1 * e2 * e2 * e2)) / 3;
	var aniji3 = ((h1 * e5 * e5 * e5) - (p4 * e5 * e5 * e5) + (b1 * e4 * e4 * e4)) / 3;
	
	var aniji = aniji1 + aniji2 + aniji3;
	
	var ak0 = ((power * long * long * long) / ( 48 * yan * aniji));
	var ak0 = (ak0 * 1000000000);
	var akh1 = Math.round(ak0);
	
	var akt = (akh1  /  1000000000);
	
	var aj0 = ((ajro2 * long * long * long * 5) / ( 384 * yan * aniji));
	var aj0 = (aj0 * 1000000000);
	var ajh1 = Math.round(aj0);
	
	var ajt = (ajh1  /  1000000000);
	
	if(isNaN(ajt + akt) == true)
	{
		ajt = 0;
		akt = 0;
	};
	document.form4.tawami.value = (ajt + akt).toFixed(2);	 // 小数点第２位の表示

	return true;
}

function mage_calc()
{
	alert_flg = 0;
	nagasa = document.form_mage.nagasa.value;
	haba = document.form_mage.haba.value;
	atu = Number(document.form_mage.atu.value);
	
	n_h = nagasa / haba;
	
	if(nagasa == 0){
		alert("長さを入力して下さい。");
		alert_flg = 1;
	};	
	
	if(haba == 0 && alert_flg == 0){
		alert("幅を入力して下さい。");
		alert_flg = 1;
	};	
	
	if(atu == 0 && alert_flg == 0){
		alert("板厚を入力して下さい。");
		alert_flg = 1;
	};	
	
	if(0.5 <= n_h && n_h <= 3.0){
		document.form_mage.hankei.value = atu * 180;
	}
	else if(0.5 < n_h && alert_flg == 0){
		alert("長さに対し、幅が小さすぎます");
		document.form_mage.hankei.value = 0;
	}
	else if(n_h < 3.0 && alert_flg == 0){
		alert("長さに対し、幅が大きすぎます");
		document.form_mage.hankei.value = 0;
	};

}
