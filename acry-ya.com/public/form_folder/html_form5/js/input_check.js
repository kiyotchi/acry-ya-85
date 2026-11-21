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