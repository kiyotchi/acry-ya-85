function calc01a() {
//２辺支持・集中荷重　適した板厚計算
//メッセージ
	var msg='';
//幅の最小
	var haba_min = 200.0;
//幅の最大
	var haba_max = 2000.0;
//奥行の最小
	var okuyuki_min = 200.0;
//奥行の最大
	var okuyuki_max = 1000.0;
//荷重の最大
	var kazyu_max = 70.0;
//たわみ上限値
	var tawami = 5.0;
//フォーム変数初期化
	document.forms['f01a'].elements['sigmae11a'].value = String('') ;
	document.forms['f01a'].elements['deltae11a'].value = String('') ;
	document.forms['f01a'].elements['sigmae21a'].value = String('') ;
	document.forms['f01a'].elements['deltae21a'].value = String('') ;
	document.forms['f01a'].elements['sigmae01a'].value = String('') ;
	document.forms['f01a'].elements['deltae01a'].value = String('') ;
	document.forms['f01a'].elements['msg01a'].value = String('');
	document.forms['f01a'].elements['s01a'].value = String('') ;
//幅
	var haba = document.forms['f01a'].elements['a01a'].value;
//奥行
	var okuyuki = document.forms['f01a'].elements['b01a'].value;
//荷重
	var kazyu = document.forms['f01a'].elements['w01a'].value;
//幅・奥行・荷重の半角数字チェック
	if( haba.match( /[^0-9.]+/ ) ){ alert("幅は、半角数字で入力して下さい。");return 1; }		
	if( okuyuki.match( /[^0-9.]+/ ) ){ alert("奥行は、半角数字で入力して下さい。");return 1; }	
	if( kazyu.match(/[^0-9.]+/)){alert("荷重は、半角数字で入力して下さい。");return 1;}
	if( kazyu == '' ){alert("荷重を入力して下さい。");return 1;}	
//幅
	haba = Number(document.forms['f01a'].elements['a01a'].value);
//奥行
	okuyuki = Number(document.forms['f01a'].elements['b01a'].value);
//板厚
	var atu = 0.0;
//荷重
	kazyu = Number(document.forms['f01a'].elements['w01a'].value);
//荷重下限値ゼロ設定
	if( kazyu < 0.0) kazyu=0.0;
//幅・奥行・荷重の最小・最大値チェック	
if(haba_min > haba || haba_max < haba || okuyuki_min > okuyuki || okuyuki_max < okuyuki || kazyu_max < kazyu) {
	if(haba_min > haba){msg= msg + '幅は'+haba_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(haba_max < haba){msg= msg + '幅は'+haba_max.toFixed(0)+'ミリ以下の値を入力してください。';}
	if(okuyuki_min > okuyuki){msg= msg + '奥行は'+okuyuki_min.toFixed(0)+'ミリ以上の値を入力してください。';}	
	if(okuyuki_max < okuyuki){msg= msg + '奥行は'+okuyuki_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(kazyu_max < kazyu){msg= msg + '荷重は'+kazyu_max.toFixed(0)+'kg以下の値を入力してください。';}	
	document.forms['f01a'].elements['msg01a'].value = msg ;
	return 1;		
}	
else {	
//材料（アクリル、ポリカ、ガラス）
	var mate = Number(document.forms['f01a'].elements['mate01a'].value);
//弾性率
	var e ;
//比重
	var hizeyu ;
//破断応力
	var tenstr ;
//材料物性値設定	
	switch(mate){
//アクリル
		case 0:
		e = 3200;
		hizeyu = 1.2;
		tenstr = 75.0/3.0;
		break;
//ポリカ
		case 1:
		e = 2350;
		hizeyu = 1.2;
		tenstr = 63.7/3.0;
		break;
//ガラス
		case 2:
		e = 7160;
		hizeyu = 2.5;
		tenstr = 24.5/3.0;
		break;
	}
//板重量計算
	var gyu ;
//板荷重
	var w1 = (gyu/(haba*okuyuki))*9.80665;
//負荷集中荷重
	var w2 = kazyu*9.80665;
//奥行/幅の比
	var ba ;
//入力データ下限値チェック
	var eps = 0.1;
//奥行/幅の比設定
	if( haba > eps){
		ba = okuyuki/haba;		
	}
	else {
		ba = 0.0;
	}
//奥行/幅の比係数テーブル
	var ba4 = [0.10,0.20,0.30,0.40,0.50,0.60,0.70,0.80,0.90,1.00,1.20,1.40,1.60,1.80,2.00,0.00];
//応力係数テーブル
	var beta4 = [0.750,0.753,0.756,0.760,0.765,0.769,0.773,0.776,0.779,0.781,0.785,0.787,0.789,0.790,0.790,0.791];
//たわみ係数テーブル
	var alpha4 = [0.156,0.157,0.158,0.159,0.159,0.160,0.161,0.162,0.162,0.163,0.164,0.164,0.164,0.165,0.165,0.165];
//板自重たわみ
	var sigmae1 = 0.0;
//板自重応力
	var deltae1 = 0.0;
//負荷荷重たわみ
	var sigmae2 = 0.0;
//負荷荷重応力
	var deltae2 = 0.0;
//合計たわみ
	var sigmae = 0.0;
//合計応力
	var deltae = 0.0;
//応力係数
	var beta = 0.0;
//たわみ係数
	var alpha = 0.0;
//カウンター
	var i;
//板上限板厚
	var tm;
//フラグ
	var fl;
//適した板厚が製品板厚内の板厚
	var s;
//奥行/幅の比が下限値、幅、奥行の計算可能判断
		if( (ba4[0] <= ba) && (haba > eps) && (okuyuki > eps) ) {
//奥行/幅の比が上限値の設定
		if( ba4[14] <= ba ){
		alpha = alpha4[15];
		beta = beta4[15];			
		}
		else {
//奥行/幅の比からたわみ係数、応力係数計算
		for(i = 1; i <= 14; i = i +1){
			if( ba4[i] >= ba){
			alpha = alpha4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(alpha4[i]-alpha4[i-1]);
			beta = beta4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(beta4[i]-beta4[i-1]);
			break;
			}
		}
		}
//板厚が入力している場合
		if( atu > eps ) {
		fl=0;
		}
//板厚が入力していない場合
		else {
//初期化
		s = 0.0;
		fl=1;
		document.forms['f01a'].elements['s01a'].value = String('') ;
//カウンター
		var j;
//材料
		switch(mate){
//アクリル
		case 0:
//製品板厚テーブル
		var ss0 = [1.0,2.0,3.0,5.0,8.0,10.0,13.0,15.0,20.0,25.0,30.0,35.0,40.0,45.0,50.0,55.0,60.0,65.0,70.0,75.0,80.0,85.0,90.0,100.0];
//板上限板厚設定
		tm = ss0[23];
//適した板厚計算
		for(j=0;j<=23;j++){
//板厚設定
		atu=ss0[j];
//板重量計算
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算
		deltae1 = beta*w1*haba*haba/(atu*atu);
//小数点２桁四捨五入	
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算
		sigmae2 = (w2*2*haba/(9*e*haba*okuyuki*atu*atu*atu))*Math.sqrt(3*(haba*haba-0.25*haba*haba)*(haba*haba-0.25*haba*haba)*(haba*haba-0.25*haba*haba));
//負荷荷重応力計算
		deltae2 = w2*6*0.25*haba*haba/(haba*okuyuki*atu*atu);
//小数点２桁四捨五入
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断
		if( (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定
			document.forms['f01a'].elements['s01a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定
			s = atu;
			break;
		}
		}	
		break;
//ポリカ
		case 1:
//製品板厚テーブル
		var ss1 = [2.0,3.0,4.0,5.0,6.0,8.0,10.0,12.0,15.0];
//板上限板厚設定
		tm = ss1[8];
//適した板厚計算
		for(j=0;j<=8;j++){
//板厚設定
		atu=ss1[j];
//板重量計算
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算
		deltae1 = beta*w1*haba*haba/(atu*atu);
//小数点２桁四捨五入	
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算
		sigmae2 = (w2*2*haba/(9*e*haba*okuyuki*atu*atu*atu))*Math.sqrt(3*(haba*haba-0.25*haba*haba)*(haba*haba-0.25*haba*haba)*(haba*haba-0.25*haba*haba));
//負荷荷重応力計算
		deltae2 = w2*6*0.25*haba*haba/(haba*okuyuki*atu*atu);
//小数点２桁四捨五入
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断
		if( (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定
			document.forms['f01a'].elements['s01a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定
			s = atu;
			break;
		}
		}	
		break;
//ガラス
		case 2:
//製品板厚テーブル
		var ss2 = [1.0,2.0,3.0,4.0,5.0,6.0,8.0,10.0,12.0,15.0];
//板上限板厚設定
		tm = ss2[9];
//適した板厚計算
		for(j=0;j<=9;j++){
//板厚設定
		atu=ss2[j];
//板重量計算
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算
		deltae1 = beta*w1*haba*haba/(atu*atu);
//小数点２桁四捨五入	
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算
		sigmae2 = (w2*2*haba/(9*e*haba*okuyuki*atu*atu*atu))*Math.sqrt(3*(haba*haba-0.25*haba*haba)*(haba*haba-0.25*haba*haba)*(haba*haba-0.25*haba*haba));
//負荷荷重応力計算
		deltae2 = w2*6*0.25*haba*haba/(haba*okuyuki*atu*atu);
//小数点２桁四捨五入
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断
		if(  (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定
			document.forms['f01a'].elements['s01a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定
			s = atu;
			break;
		}
		}	
		break;
		}
		}
		}
		else {
			s=1.0;
//入力データ下限値チェック、メッセージ設定
			if( (haba < eps) || (okuyuki < eps) || (kazyu<-eps)){
			msg = msg + '幅・奥行・荷重が、入力範囲下限値以下です。';					
			}
//奥行/幅の比が範囲外、メッセージ設定
			else {
//入力可能幅、奥行計算
			var a1;
			var b1;
			a1=okuyuki/ba4[0];
			b1=ba4[0]*haba;
			msg = msg + '幅・奥行の範囲が計算範囲外ですので、幅を'+Math.floor(a1)+'ミリ以下または奥行を'+Math.ceil(b1)+'ミリ以上に変更してください。';						
			}
		}
		if( fl == 0){
		}
		else {
//適した板厚が製品板厚み範囲内、結果設定
		if( s > eps ) {
//たわみ・応力設定
		document.forms['f01a'].elements['sigmae11a'].value = String(sigmae1) ;
		document.forms['f01a'].elements['deltae11a'].value = String(deltae1) ;
		document.forms['f01a'].elements['sigmae21a'].value = String(sigmae2) ;
		document.forms['f01a'].elements['deltae21a'].value = String(deltae2) ;
		document.forms['f01a'].elements['sigmae01a'].value = String(sigmae) ;
		document.forms['f01a'].elements['deltae01a'].value = String(deltae) ;
		document.forms['f01a'].elements['msg01a'].value = msg ;
		}
//適した板厚が製品板厚み範囲外、メッセージ設定
		else {
		document.forms['f01a'].elements['sigmae11a'].value = String('') ;
		document.forms['f01a'].elements['deltae11a'].value = String('') ;
		document.forms['f01a'].elements['sigmae21a'].value = String('') ;
		document.forms['f01a'].elements['deltae21a'].value = String('') ;
		document.forms['f01a'].elements['sigmae01a'].value = String('') ;
		document.forms['f01a'].elements['deltae01a'].value = String('') ;
		document.forms['f01a'].elements['msg01a'].value = String('適した板厚が、製品板厚の上限の'+tm.toFixed(0)+'ミリを超えています。') ;			
		}			
		}
}
}

function calc01b() {
//２辺支持・集中荷重　たわみ計算
//メッセージ	
	var msg='';
//幅の最小
	var haba_min = 200.0;
//幅の最大
	var haba_max = 2000.0;
//奥行の最小
	var okuyuki_min = 200.0;
//奥行の最大
	var okuyuki_max = 1000.0;
//荷重の最大
	var kazyu_max = 70.0;
//たわみ上限値
	var tawami = 5.0;
//フォーム変数初期化
	document.forms['f01b'].elements['sigmae11b'].value = String('');
	document.forms['f01b'].elements['deltae11b'].value = String('');
	document.forms['f01b'].elements['sigmae21b'].value = String('');
	document.forms['f01b'].elements['deltae21b'].value = String('');
	document.forms['f01b'].elements['sigmae01b'].value = String('');
	document.forms['f01b'].elements['deltae01b'].value = String('');
	document.forms['f01b'].elements['msg01b'].value =  String('');
	document.forms['f01b'].elements['s01b'].value = String('') ;
//幅
	var haba = document.forms['f01b'].elements['a01b'].value;
//奥行
	var okuyuki = document.forms['f01b'].elements['b01b'].value;
//板厚
	var atu = document.forms['f01b'].elements['t01b'].value;
//荷重
	var kazyu = document.forms['f01b'].elements['w01b'].value;
//幅・奥行・板厚・荷重の半角数字チェック
	if( haba.match( /[^0-9.]+/ ) ){ alert("幅は、半角数字で入力して下さい。");return 1; }		
	if( okuyuki.match( /[^0-9.]+/ ) ){ alert("奥行は、半角数字で入力して下さい。");return 1; }	
	if( atu.match( /[^0-9.]+/ ) ){ alert("板厚は、半角数字で入力して下さい。");return 1; }		
	if( kazyu.match( /[^0-9.]+/ ) ){ alert("荷重は、半角数字で入力して下さい。");return 1; }	
	if( kazyu == '' ){alert("荷重を入力して下さい。");return 1;}	
//幅
	haba = Number(document.forms['f01b'].elements['a01b'].value);
//奥行
	okuyuki = Number(document.forms['f01b'].elements['b01b'].value);
//板厚
	atu = Number(document.forms['f01b'].elements['t01b'].value);
//荷重
	kazyu = Number(document.forms['f01b'].elements['w01b'].value);
//荷重下限値ゼロ設定
	if( kazyu < 0.0) kazyu=0.0;
//材料（アクリル、ポリカ、ガラス）
	var mate = Number(document.forms['f01b'].elements['mate01b'].value);
//板厚の最小
	var atu_min ;
//板厚の最大
	var atu_max ;
	switch(mate){
//アクリル
		case 0:
		atu_min=1.0;
		atu_max=100.0;
		break;
//ポリカ
		case 1:
		atu_min=1.0;
		atu_max=15.0;
		break;
//ガラス
		case 2:
		atu_min=1.0;
		atu_max=15.0;
		break;
	}	
//幅・奥行・荷重の最小・最大値チェック	
if(haba_min > haba || haba_max < haba || okuyuki_min > okuyuki || okuyuki_max < okuyuki || kazyu_max < kazyu || atu_min > atu || atu_max < atu) {
	if(haba_min > haba){msg= msg + '幅は'+haba_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(haba_max < haba){msg= msg + '幅は'+haba_max.toFixed(0)+'ミリ以下の値を入力してください。';}
	if(okuyuki_min > okuyuki){msg= msg + '奥行は'+okuyuki_min.toFixed(0)+'ミリ以上の値を入力してください。';}	
	if(okuyuki_max < okuyuki){msg= msg + '奥行は'+okuyuki_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(atu_min > atu){msg= msg + '板厚は'+atu_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(atu_max < atu){msg= msg + '板厚は'+atu_max.toFixed(0)+'ミリ以下の値を入力してください。';}		
	if(kazyu_max < kazyu){msg= msg + '荷重は'+kazyu_max.toFixed(0)+'kg以下の値を入力してください。';}	
	document.forms['f01b'].elements['msg01b'].value = msg ;
	return 1;		
}	
else {
//弾性率
	var e ;
//比重
	var hizeyu ;
//破断応力
	var tenstr ;
//材料物性値設定	
	switch(mate){
//アクリル
		case 0:
		e = 3200;
		hizeyu = 1.2;
		tenstr = 75.0/3.0;
		break;
//ポリカ
		case 1:
		e = 2350;
		hizeyu = 1.2;
		tenstr = 63.7/3.0;
		break;
//ガラス
		case 2:
		e = 7160;
		hizeyu = 2.5;
		tenstr = 24.5/3.0;
		break;
	}
//板重量計算
	var gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重
	var w1 = (gyu/(haba*okuyuki))*9.80665;
//負荷集中荷重
	var w2 = kazyu*9.80665;
//奥行/幅の比
	var ba ;
//入力データ下限値チェック
	var eps = 0.1;
//奥行/幅の比設定
	if( haba > eps){
		ba = okuyuki/haba;		
	}
	else {
		ba = 0.0;
	}
//奥行/幅の比係数テーブル
	var ba4 = [0.10,0.20,0.30,0.40,0.50,0.60,0.70,0.80,0.90,1.00,1.20,1.40,1.60,1.80,2.00,0.00];
//応力係数テーブル
	var beta4 = [0.750,0.753,0.756,0.760,0.765,0.769,0.773,0.776,0.779,0.781,0.785,0.787,0.789,0.790,0.790,0.791];
//たわみ係数テーブル
	var alpha4 = [0.156,0.157,0.158,0.159,0.159,0.160,0.161,0.162,0.162,0.163,0.164,0.164,0.164,0.165,0.165,0.165];
//板自重たわみ
	var sigmae1 = 0.0;
//板自重応力	
	var deltae1 = 0.0;
//負荷荷重たわみ	
	var sigmae2 = 0.0;
//負荷荷重応力	
	var deltae2 = 0.0;
//合計たわみ	
	var sigmae = 0.0;
//合計応力	
	var deltae = 0.0;
//応力係数	
	var beta = 0.0;
//たわみ係数	
	var alpha = 0.0;
//カウンター	
	var i;
//奥行/幅の比が下限値、幅、奥行の計算可能判断
		if( (ba4[0] <= ba) && (haba > eps) && (okuyuki > eps) &&(atu >eps)) {
//奥行/幅の比が上限値の設定
		if( ba4[14] <= ba ){
		alpha = alpha4[15];
		beta = beta4[15];			
		}
		else {
//奥行/幅の比からたわみ係数、応力係数計算
		for(i = 1; i <= 14; i = i +1){
			if( ba4[i] >= ba){
			alpha = alpha4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(alpha4[i]-alpha4[i-1]);
			beta = beta4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(beta4[i]-beta4[i-1]);
			break;
			}
		}
		}
//板自重たわみ計算
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算
		deltae1 = beta*w1*haba*haba/(atu*atu);
//小数点２桁四捨五入	
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算
		sigmae2 = (w2*2*haba/(9*e*haba*okuyuki*atu*atu*atu))*Math.sqrt(3*(haba*haba-0.25*haba*haba)*(haba*haba-0.25*haba*haba)*(haba*haba-0.25*haba*haba));
//負荷荷重応力計算
		deltae2 = w2*6*0.25*haba*haba/(haba*okuyuki*atu*atu);
//小数点２桁四捨五入
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);	
		}
		else {
//入力データ下限値チェック、メッセージ設定
			if( (haba < eps) || (okuyuki < eps) || (atu <eps) || (kazyu< -eps)){
			msg = msg + '幅・奥行・板厚・荷重が、入力範囲下限値以下です。';					
			}
//奥行/幅の比が範囲外、メッセージ設定
			else {
			var a1;
			var b1;
			a1=okuyuki/ba4[0];
			b1=ba4[0]*haba;
			msg = msg + '幅・奥行の範囲が計算範囲外ですので、幅を'+Math.floor(a1)+'ミリ以下または奥行を'+Math.ceil(b1)+'ミリ以上に変更してください。';			
			}
		}
//破損応力判断
		if( tenstr < deltae ) {
			msg= msg + '破損の恐れが有りますので、板厚を大きくするか補強が必要と思われます。';	
//結果設定
//たわみ・応力設定
		document.forms['f01b'].elements['sigmae11b'].value = String('') ;
		document.forms['f01b'].elements['deltae11b'].value = String('') ;
		document.forms['f01b'].elements['sigmae21b'].value = String('') ;
		document.forms['f01b'].elements['deltae21b'].value = String('') ;
		document.forms['f01b'].elements['sigmae01b'].value = String('') ;
		document.forms['f01b'].elements['deltae01b'].value = String('') ;
		document.forms['f01b'].elements['msg01b'].value = msg ;		
		}
		else {
//合計たわみ上限値以上、メッセージ設定
		if( sigmae > tawami ){
			msg= msg + 'たわみ量が大きいので、板厚を大きくするか補強が必要と思われます。';			
		}
//結果設定
//たわみ・応力設定
		document.forms['f01b'].elements['sigmae11b'].value = String(sigmae1) ;
		document.forms['f01b'].elements['deltae11b'].value = String(deltae1) ;
		document.forms['f01b'].elements['sigmae21b'].value = String(sigmae2) ;
		document.forms['f01b'].elements['deltae21b'].value = String(deltae2) ;
		document.forms['f01b'].elements['sigmae01b'].value = String(sigmae) ;
		document.forms['f01b'].elements['deltae01b'].value = String(deltae) ;
		document.forms['f01b'].elements['msg01b'].value = msg ;
		}
}
}


function calc02() {
//４辺固定・等分布荷重　適した板厚計算
//メッセージ	
	var msg='';
//幅の最小
	var haba_min = 200.0;
//幅の最大
	var haba_max = 2000.0;
//奥行の最小
	var okuyuki_min = 200.0;
//奥行の最大
	var okuyuki_max = 1000.0;
//荷重の最大
	var kazyu_max = 70.0;
//たわみ上限値
	var tawami = 4.0;
//フォーム変数初期化	
	document.forms['f02'].elements['sigmae12a'].value = String('') ;
	document.forms['f02'].elements['deltae12a'].value = String('') ;
	document.forms['f02'].elements['sigmae22a'].value = String('') ;
	document.forms['f02'].elements['deltae22a'].value = String('') ;
	document.forms['f02'].elements['sigmae02a'].value = String('') ;
	document.forms['f02'].elements['deltae02a'].value = String('') ;
	document.forms['f02'].elements['msg02a'].value = String('') ;
	document.forms['f02'].elements['s02a'].value = String('') ;
//幅	
	var haba = document.forms['f02'].elements['a02a'].value;
//奥行	
	var okuyuki = document.forms['f02'].elements['b02a'].value;
//荷重	
	var kazyu = document.forms['f02'].elements['w02a'].value;
//幅・奥行・荷重の半角数字チェック
	if( haba.match( /[^0-9.]+/ ) ){ alert("幅は、半角数字で入力して下さい。");return 1; }		
	if( okuyuki.match( /[^0-9.]+/ ) ){ alert("奥行は、半角数字で入力して下さい。");return 1; }	
	if( kazyu.match( /[^0-9.]+/ ) ){ alert("荷重は、半角数字で入力して下さい。");return 1; }
	if( kazyu == '' ){alert("荷重を入力して下さい。");return 1;}	
//幅	
	haba = Number(document.forms['f02'].elements['a02a'].value);
//奥行	
	okuyuki = Number(document.forms['f02'].elements['b02a'].value);
//板厚	
	var atu = 0.0;
//荷重	
	kazyu = Number(document.forms['f02'].elements['w02a'].value);
//荷重下限値ゼロ設定	
	if( kazyu < 0.0) kazyu=0.0;
//幅・奥行・荷重の最小・最大値チェック	
if(haba_min > haba || haba_max < haba || okuyuki_min > okuyuki || okuyuki_max < okuyuki || kazyu_max < kazyu) {
	if(haba_min > haba){msg= msg + '幅は'+haba_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(haba_max < haba){msg= msg + '幅は'+haba_max.toFixed(0)+'ミリ以下の値を入力してください。';}
	if(okuyuki_min > okuyuki){msg= msg + '奥行は'+okuyuki_min.toFixed(0)+'ミリ以上の値を入力してください。';}	
	if(okuyuki_max < okuyuki){msg= msg + '奥行は'+okuyuki_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(kazyu_max < kazyu){msg= msg + '荷重は'+kazyu_max.toFixed(0)+'kg以下の値を入力してください。';}	
	document.forms['f02'].elements['msg02a'].value = msg ;
	return 1;		
}	
else {		
//材料（アクリル、ポリカ、ガラス）	
	var mate = Number(document.forms['f02'].elements['mate02a'].value);
//弾性率	
	var e ;
//比重	
	var hizeyu ;
//破断応力	
	var tenstr ;
//材料物性値設定		
	switch(mate){
//アクリル	
		case 0:
		e = 3200;
		hizeyu = 1.2;
		tenstr = 4.0*10.7/3.0;
		break;
//ポリカ		
		case 1:
		e = 2350;
		hizeyu = 1.2;
		tenstr = 4.0*10.7/3.0;
		break;
//ガラス		
		case 2:
		e = 7160;
		hizeyu = 2.5;
		tenstr = 4.0*24.5/3.0;
		break;
	}
//板重量計算	
	var gyu ;
//板荷重	
	var w1 = (gyu/(haba*okuyuki))*9.80665;
//負荷等分布荷重	
	var w2 = (kazyu/(haba*okuyuki))*9.80665;
//奥行/幅の比	
	var ba ;
//適した板厚が製品板厚内の板厚	
	var s;
//入力データ下限値チェック
	var eps = 0.1;
//幅、奥行の計算可能判断	
	if( haba > eps && okuyuki > eps ){
//奥行/幅の比設定
		if( okuyuki > haba ){
			ba = okuyuki/haba;				
		}
		else {
			ba = haba/okuyuki;				
		}
	}
	else {
		ba = 0.0;
	}
//奥行/幅の比係数テーブル	
	var ba4 = [1.0,1.2,1.4,1.6,1.8,2.0,2.5,3.0,0.0];
//応力係数テーブル	
	var beta4 = [0.315,0.380,0.430,0.460,0.480,0.500,0.500,0.500,0.500];
//たわみ係数テーブル	
	var alpha4 = [0.013,0.018,0.021,0.023,0.025,0.026,0.026,0.026,0.026];
//板自重たわみ	
	var sigmae1 = 0.0;
//板自重応力	
	var deltae1 = 0.0;
//負荷荷重たわみ	
	var sigmae2 = 0.0;
//負荷荷重応力	
	var deltae2 = 0.0;
//合計たわみ	
	var sigmae = 0.0;
//合計応力	
	var deltae = 0.0;
//応力係数	
	var beta = 0.0;
//たわみ係数	
	var alpha = 0.0;
//カウンター	
	var i;
//板上限板厚	
	var tm;
//フラグ	
	var fl;
//奥行/幅の比が下限値、幅、奥行の計算可能判断	
		if( (ba4[0] <= ba) && (haba > eps) && (okuyuki > eps) ) {
//奥行/幅の比が上限値の設定
		if( ba4[7] <= ba){
			alpha = alpha4[8];
			beta = beta4[8];	
		}
		else {
//奥行/幅の比からたわみ係数、応力係数計算
		for(i = 1; i <= 7; i = i +1){
			if( ba4[i] >= ba){
			alpha = alpha4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(alpha4[i]-alpha4[i-1]);
			beta = beta4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(beta4[i]-beta4[i-1]);
			break;
			}
		}
		}
//板厚が入力している場合
		if( atu > eps ) {	
		fl=0;	
		}
//板厚が入力していない場合
		else {
//初期化
		s = 0.0;
		fl = 1;
		document.forms['f02'].elements['s02a'].value = String('') ;
//カウンター
		var j;
//材料
		switch(mate){
//アクリル
		case 0:
//製品板厚テーブル
		var ss0 = [1.0,2.0,3.0,5.0,8.0,10.0,13.0,15.0,20.0,25.0,30.0,35.0,40.0,45.0,50.0,55.0,60.0,65.0,70.0,75.0,80.0,85.0,90.0,100.0];
//板上限板厚設定
		tm = ss0[23];
//適した板厚計算
		for(j=0;j<=23;j++){
//板厚設定
		atu=ss0[j];
//板重量計算
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板幅、奥行比較
		if( haba < okuyuki ){
//板自重たわみ計算			
			sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算			
			deltae1 = beta*w1*haba*haba/(atu*atu);
//負荷荷重たわみ計算				
			sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算			
			deltae2 = beta*w2*haba*haba/(atu*atu);
		}
		else {
//板自重たわみ計算				
			sigmae1 = alpha*w1*okuyuki*okuyuki*okuyuki*okuyuki/(e*atu*atu*atu);
//板自重応力計算			
			deltae1 = beta*w1*okuyuki*okuyuki/(atu*atu);
//負荷荷重たわみ計算				
			sigmae2 = alpha*w2*okuyuki*okuyuki*okuyuki*okuyuki/(e*atu*atu*atu);
//負荷荷重応力計算				
			deltae2 = beta*w2*okuyuki*okuyuki/(atu*atu);			
		}
//小数点２桁四捨五入				
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算		
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断		
		if(  (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定
			document.forms['f02'].elements['s02a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定
			s = atu;
			break;
		}
		}	
		break;
//ポリカ		
		case 1:
//製品板厚テーブル
		var ss1 = [2.0,3.0,4.0,5.0,6.0,8.0,10.0,12.0,15.0];
//板上限板厚設定
		tm = ss1[8];
//適した板厚計算
		for(j=0;j<=8;j++){
//板厚設定
		atu=ss1[j];
//板重量計算
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板幅、奥行比較
		if( haba < okuyuki ){
//板自重たわみ計算				
			sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算			
			deltae1 = beta*w1*haba*haba/(atu*atu);	
//負荷荷重たわみ計算			
			sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算			
			deltae2 = beta*w2*haba*haba/(atu*atu);
		}
		else {
//板自重たわみ計算				
			sigmae1 = alpha*w1*okuyuki*okuyuki*okuyuki*okuyuki/(e*atu*atu*atu);
//板自重応力計算			
			deltae1 = beta*w1*okuyuki*okuyuki/(atu*atu);
//負荷荷重たわみ計算				
			sigmae2 = alpha*w2*okuyuki*okuyuki*okuyuki*okuyuki/(e*atu*atu*atu);
//負荷荷重応力計算			
			deltae2 = beta*w2*okuyuki*okuyuki/(atu*atu);			
		}
//小数点２桁四捨五入				
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算		
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断		
		if(  (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定			
			document.forms['f02'].elements['s02a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定			
			s = atu;
			break;
		}
		}	
		break;
//ガラス
		case 2:
//製品板厚テーブル
		var ss2 = [1.0,2.0,3.0,4.0,5.0,6.0,8.0,10.0,12.0,15.0];
//板上限板厚設定
		tm = ss2[9];
//適した板厚計算
		for(j=0;j<=9;j++){
//板厚設定
		atu=ss2[j];
//板重量計算		
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算		
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板幅、奥行比較
		if( haba <  okuyuki ){
//板自重たわみ計算				
			sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算			
			deltae1 = beta*w1*haba*haba/(atu*atu);
//負荷荷重たわみ計算				
			sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算			
			deltae2 = beta*w2*haba*haba/(atu*atu);
		}
		else {
//板自重たわみ計算				
			sigmae1 = alpha*w1*okuyuki*okuyuki*okuyuki*okuyuki/(e*atu*atu*atu);
//板自重応力計算			
			deltae1 = beta*w1*okuyuki*okuyuki/(atu*atu);
//負荷荷重たわみ計算				
			sigmae2 = alpha*w2*okuyuki*okuyuki*okuyuki*okuyuki/(e*atu*atu*atu);
//負荷荷重応力計算			
			deltae2 = beta*w2*okuyuki*okuyuki/(atu*atu);			
		}
//小数点２桁四捨五入				
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算		
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断		
		if(  (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定			
			document.forms['f02'].elements['s02a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定			
			s = atu;
			break;
		}
		}	
		break;
		}
		}		
		}
//入力データ下限値チェック、メッセージ設定
		else {
		s=1.0;
			if( (haba < eps) || (okuyuki < eps) || (kazyu<-eps)){
			msg = msg + '幅・奥行・荷重が、入力範囲下限値以下です。';					
			}
			else {
			}
		}
		if( fl == 0 ){
		}
		else {
//適した板厚が製品板厚み範囲内、結果設定
		if( s > eps ){
//たわみ・応力設定
		document.forms['f02'].elements['sigmae12a'].value = String(sigmae1) ;
		document.forms['f02'].elements['deltae12a'].value = String(deltae1) ;
		document.forms['f02'].elements['sigmae22a'].value = String(sigmae2) ;
		document.forms['f02'].elements['deltae22a'].value = String(deltae2) ;
		document.forms['f02'].elements['sigmae02a'].value = String(sigmae) ;
		document.forms['f02'].elements['deltae02a'].value = String(deltae) ;
		document.forms['f02'].elements['msg02a'].value = msg ;
		}
//適した板厚が製品板厚み範囲外、メッセージ設定
		else{
		document.forms['f02'].elements['sigmae12a'].value = String('') ;
		document.forms['f02'].elements['deltae12a'].value = String('') ;
		document.forms['f02'].elements['sigmae22a'].value = String('') ;
		document.forms['f02'].elements['deltae22a'].value = String('') ;
		document.forms['f02'].elements['sigmae02a'].value = String('') ;
		document.forms['f02'].elements['deltae02a'].value = String('') ;
		document.forms['f02'].elements['msg02a'].value = String('適した板厚が、製品板厚の上限の'+tm.toFixed(0)+'ミリを超えています。')  ;			
		}			
		}
}
}
function calc04() {
//４辺固定・等分布荷重　たわみ計算
//メッセージ	
	var msg='';
//幅の最小
	var haba_min = 200.0;
//幅の最大
	var haba_max = 2000.0;
//奥行の最小
	var okuyuki_min = 200.0;
//奥行の最大
	var okuyuki_max = 1000.0;
//荷重の最大
	var kazyu_max = 70.0;
//たわみ上限値
	var tawami = 4.0;
//フォーム変数初期化	
	document.forms['f04'].elements['sigmae12b'].value = String('') ;
	document.forms['f04'].elements['deltae12b'].value = String('') ; 
	document.forms['f04'].elements['sigmae22b'].value = String('') ; 
	document.forms['f04'].elements['deltae22b'].value = String('') ; 
	document.forms['f04'].elements['sigmae02b'].value = String('') ; 
	document.forms['f04'].elements['deltae02b'].value = String('') ; 
	document.forms['f04'].elements['msg02b'].value =  String('') ;
//幅	
	var haba = document.forms['f04'].elements['a02b'].value;
//奥行	
	var okuyuki = document.forms['f04'].elements['b02b'].value;
//板厚	
	var atu = document.forms['f04'].elements['t02b'].value;
//荷重	
	var kazyu = document.forms['f04'].elements['w02b'].value;	
//幅・奥行・板厚・荷重の半角数字チェック
	if( haba.match( /[^0-9.]+/ ) ){ alert("幅は、半角数字で入力して下さい。");return 1; }		
	if( okuyuki.match( /[^0-9.]+/ ) ){ alert("奥行は、半角数字で入力して下さい。");return 1; }	
	if( atu.match( /[^0-9.]+/ ) ){ alert("板厚は、半角数字で入力して下さい。");return 1; }		
	if( kazyu.match( /[^0-9.]+/ ) ){ alert("荷重は、半角数字で入力して下さい。");return 1; }		
	if( kazyu == '' ){alert("荷重を入力して下さい。");return 1;}	
//幅	
	haba = Number(document.forms['f04'].elements['a02b'].value);
//奥行	
	okuyuki = Number(document.forms['f04'].elements['b02b'].value);
//板厚	
	atu = Number(document.forms['f04'].elements['t02b'].value);
//荷重	
	kazyu = Number(document.forms['f04'].elements['w02b'].value);
//荷重下限値ゼロ設定	
	if( kazyu < 0.0) kazyu=0.0;
//板厚の最小
	var atu_min ;
//板厚の最大
	var atu_max ;
//材料（アクリル、ポリカ、ガラス）	
	var mate = Number(document.forms['f04'].elements['mate02b'].value);
	switch(mate){
//アクリル
		case 0:
		atu_min=1.0;
		atu_max=100.0;
		break;
//ポリカ
		case 1:
		atu_min=1.0;
		atu_max=15.0;
		break;
//ガラス
		case 2:
		atu_min=1.0;
		atu_max=15.0;
		break;
	}	
//幅・奥行・荷重の最小・最大値チェック	
if(haba_min > haba || haba_max < haba || okuyuki_min > okuyuki || okuyuki_max < okuyuki || kazyu_max < kazyu || atu_min > atu || atu_max < atu) {
	if(haba_min > haba){msg= msg + '幅は'+haba_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(haba_max < haba){msg= msg + '幅は'+haba_max.toFixed(0)+'ミリ以下の値を入力してください。';}
	if(okuyuki_min > okuyuki){msg= msg + '奥行は'+okuyuki_min.toFixed(0)+'ミリ以上の値を入力してください。';}	
	if(okuyuki_max < okuyuki){msg= msg + '奥行は'+okuyuki_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(atu_min > atu){msg= msg + '板厚は'+atu_min.toFixed(0)+'ミリ以上の値を入力してください。';}	
	if(atu_max < atu){msg= msg + '板厚は'+atu_max.toFixed(0)+'ミリ以下の値を入力してください。';}		
	if(kazyu_max < kazyu){msg= msg + '荷重は'+kazyu_max.toFixed(0)+'kg以下の値を入力してください。';}	
	document.forms['f04'].elements['msg02b'].value = msg ;
	return 1;		
}	
else {		
//弾性率	
	var e ;
//比重	
	var hizeyu ;
//破断応力	
	var tenstr ;
//材料物性値設定		
	switch(mate){
//アクリル		
		case 0:
		e = 3200;
		hizeyu = 1.2;
		tenstr = 4.0*10.7/3.0;
		break;
//ポリカ		
		case 1:
		e = 2350;
		hizeyu = 1.2;
		tenstr = 4.0*10.7/3.0;
		break;
//ガラス		
		case 2:
		e = 7160;
		hizeyu = 2.5;
		tenstr = 4.0*24.5/3.0;
		break;
	}
//板重量計算	
	var gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重	
	var w1 = (gyu/(haba*okuyuki))*9.80665;
//負荷等分布荷重	
	var w2 = (kazyu/(haba*okuyuki))*9.80665;
//奥行/幅の比
	var ba ;
//入力データ下限値チェック
	var eps = 0.1;
//幅、奥行の計算可能判断
	if( haba > eps && okuyuki > eps ){
//奥行/幅の比設定		
		if( okuyuki > haba ){
			ba = okuyuki/haba;				
		}
		else {
			ba = haba/okuyuki;				
		}
	}
	else {
		ba = 0.0;
	}
//奥行/幅の比係数テーブル	
	var ba4 = [1.0,1.2,1.4,1.6,1.8,2.0,2.5,3.0,0.0];
//応力係数テーブル	
	var beta4 = [0.315,0.380,0.430,0.460,0.480,0.500,0.500,0.500,0.500];
//たわみ係数テーブル	
	var alpha4 = [0.013,0.018,0.021,0.023,0.025,0.026,0.026,0.026,0.026];
//板自重たわみ	
	var sigmae1 = 0.0;
//板自重応力
	var deltae1 = 0.0;
//負荷荷重たわみ	
	var sigmae2 = 0.0;
//負荷荷重応力	
	var deltae2 = 0.0;
//合計たわみ	
	var sigmae = 0.0;
//合計応力	
	var deltae = 0.0;
//応力係数	
	var beta = 0.0;
//たわみ係数	
	var alpha = 0.0;
//カウンター	
	var i;
//板上限板厚	
	var tm;
//フラグ	
	var fl;
//奥行/幅の比が下限値、幅、奥行の計算可能判断	
		if( (ba4[0] <= ba) && (haba > eps) && (okuyuki > eps) && (atu >eps)) {
//奥行/幅の比が上限値の設定
		if( ba4[7] <= ba){
			alpha = alpha4[8];
			beta = beta4[8];	
		}
		else {
//奥行/幅の比からたわみ係数、応力係数計算			
		for(i = 1; i <= 7; i = i +1){
			if( ba4[i] >= ba){
			alpha = alpha4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(alpha4[i]-alpha4[i-1]);
			beta = beta4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(beta4[i]-beta4[i-1]);
			break;
			}
		}
		}
		fl=0;
//板幅、奥行比較	
		if( haba < okuyuki ){
//板自重たわみ計算			
			sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算			
			deltae1 = beta*w1*haba*haba/(atu*atu);
//負荷荷重たわみ計算				
			sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算			
			deltae2 = beta*w2*haba*haba/(atu*atu);
		}
		else {
//板自重たわみ計算			
			sigmae1 = alpha*w1*okuyuki*okuyuki*okuyuki*okuyuki/(e*atu*atu*atu);
//板自重応力計算			
			deltae1 = beta*w1*okuyuki*okuyuki/(atu*atu);
//負荷荷重たわみ計算				
			sigmae2 = alpha*w2*okuyuki*okuyuki*okuyuki*okuyuki/(e*atu*atu*atu);
//負荷荷重応力計算			
			deltae2 = beta*w2*okuyuki*okuyuki/(atu*atu);			
		}
//小数点２桁四捨五入				
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算		
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
		}
		else {
//入力データ下限値チェック、メッセージ設定			
			if( (haba < eps) || (okuyuki < eps) || (atu <eps) || (kazyu< -eps)){
							msg = msg + '幅・奥行・板厚・荷重が、入力範囲下限値以下です。';					
			}
			else {
			}
		}
//破損判断
		if( tenstr < deltae ) {
			msg= msg + '破損の恐れが有りますので、板厚を大きくするか補強が必要と思われます。';
//結果設定
//たわみ・応力設定
		document.forms['f04'].elements['sigmae12b'].value = String('') ;
		document.forms['f04'].elements['deltae12b'].value = String('') ;
		document.forms['f04'].elements['sigmae22b'].value = String('') ;
		document.forms['f04'].elements['deltae22b'].value = String('') ;
		document.forms['f04'].elements['sigmae02b'].value = String('') ;
		document.forms['f04'].elements['deltae02b'].value = String('') ;
		document.forms['f04'].elements['msg02b'].value = msg ;			
		}
		else {
//合計たわみ上限値以上、メッセージ設定
		if( sigmae > tawami ){
			msg= msg + 'たわみ量が大きいので、板厚を大きくするか補強が必要と思われます。';			
		}
//結果設定
//たわみ・応力設定
		document.forms['f04'].elements['sigmae12b'].value = String(sigmae1) ;
		document.forms['f04'].elements['deltae12b'].value = String(deltae1) ;
		document.forms['f04'].elements['sigmae22b'].value = String(sigmae2) ;
		document.forms['f04'].elements['deltae22b'].value = String(deltae2) ;
		document.forms['f04'].elements['sigmae02b'].value = String(sigmae) ;
		document.forms['f04'].elements['deltae02b'].value = String(deltae) ;
		document.forms['f04'].elements['msg02b'].value = msg ;
		}
}
}

function calc05a() {
//２辺支持・等分布荷重 適した板厚計算
//メッセージ	
	var msg='';
//幅の最小
	var haba_min = 200.0;
//幅の最大
	var haba_max = 2000.0;
//奥行の最小
	var okuyuki_min = 200.0;
//奥行の最大
	var okuyuki_max = 1000.0;
//荷重の最大
	var kazyu_max = 70.0;
//たわみ上限値
	var tawami = 5.0;
//フォーム変数初期化	
	document.forms['f05a'].elements['sigmae15a'].value = String('') ;
	document.forms['f05a'].elements['deltae15a'].value = String('') ;
	document.forms['f05a'].elements['sigmae25a'].value = String('') ;
	document.forms['f05a'].elements['deltae25a'].value = String('') ;
	document.forms['f05a'].elements['sigmae05a'].value = String('') ;
	document.forms['f05a'].elements['deltae05a'].value = String('') ;
	document.forms['f05a'].elements['msg05a'].value = String('');
	document.forms['f05a'].elements['s05a'].value = String('') ;
//幅	
	var haba = document.forms['f05a'].elements['a05a'].value;
//奥行	
	var okuyuki = document.forms['f05a'].elements['b05a'].value;
//荷重	
	var kazyu = document.forms['f05a'].elements['w05a'].value;
//幅・奥行・荷重の半角数字チェック
	if( haba.match( /[^0-9.]+/ ) ){ alert("幅は、半角数字で入力して下さい。");return 1; }		
	if( okuyuki.match( /[^0-9.]+/ ) ){ alert("奥行は、半角数字で入力して下さい。");return 1; }	
	if( kazyu.match(/[^0-9.]+/)){alert("荷重は、半角数字で入力して下さい。");return 1;}
	if( kazyu == '' ){alert("荷重を入力して下さい。");return 1;}	
//幅	
	haba = Number(document.forms['f05a'].elements['a05a'].value);
//奥行	
	okuyuki = Number(document.forms['f05a'].elements['b05a'].value);
//板厚	
	var atu = 0.0;
//荷重	
	kazyu = Number(document.forms['f05a'].elements['w05a'].value);
//荷重下限値ゼロ設定	
	if( kazyu < 0.0) kazyu=0.0;
//幅・奥行・荷重の最小・最大値チェック	
if(haba_min > haba || haba_max < haba || okuyuki_min > okuyuki || okuyuki_max < okuyuki || kazyu_max < kazyu) {
	if(haba_min > haba){msg= msg + '幅は'+haba_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(haba_max < haba){msg= msg + '幅は'+haba_max.toFixed(0)+'ミリ以下の値を入力してください。';}
	if(okuyuki_min > okuyuki){msg= msg + '奥行は'+okuyuki_min.toFixed(0)+'ミリ以上の値を入力してください。';}	
	if(okuyuki_max < okuyuki){msg= msg + '奥行は'+okuyuki_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(kazyu_max < kazyu){msg= msg + '荷重は'+kazyu_max.toFixed(0)+'kg以下の値を入力してください。';}	
	document.forms['f05a'].elements['msg05a'].value = msg ;
	return 1;		
}	
else {	
//材料（アクリル、ポリカ、ガラス）	
	var mate = Number(document.forms['f05a'].elements['mate05a'].value);
//弾性率	
	var e ;
//比重	
	var hizeyu ;
//破断応力	
	var tenstr ;
//材料物性値設定		
	switch(mate){
//アクリル		
		case 0:
		e = 3200;
		hizeyu = 1.2;
		tenstr = 75.0/3.0;
		break;
//ポリカ		
		case 1:
		e = 2350;
		hizeyu = 1.2;
		tenstr = 63.7/3.0;
		break;
//ガラス		
		case 2:
		e = 7160;
		hizeyu = 2.5;
		tenstr = 24.5/3.0;
		break;
	}
//板重量計算	
	var gyu ;
//板荷重	
	var w1 ;
//負荷等分布荷重	
	var w2 = (kazyu/(haba*okuyuki))*9.80665;
//奥行/幅の比	
	var ba ;
//入力データ下限値チェック
	var eps = 0.1;
//奥行/幅の比設定
	if( haba > eps){
		ba = okuyuki/haba;		
	}
	else {
		ba = 0.0;
	}
//奥行/幅の比係数テーブル	
	var ba4 = [0.10,0.20,0.30,0.40,0.50,0.60,0.70,0.80,0.90,1.00,1.20,1.40,1.60,1.80,2.00,0.00];
//応力係数テーブル	
	var beta4 = [0.750,0.753,0.756,0.760,0.765,0.769,0.773,0.776,0.779,0.781,0.785,0.787,0.789,0.790,0.790,0.791];
//たわみ係数テーブル	
	var alpha4 = [0.156,0.157,0.158,0.159,0.159,0.160,0.161,0.162,0.162,0.163,0.164,0.164,0.164,0.165,0.165,0.165];
//板自重たわみ	
	var sigmae1 = 0.0;
//板自重応力	
	var deltae1 = 0.0;
//負荷荷重たわみ	
	var sigmae2 = 0.0;
//負荷荷重応力	
	var deltae2 = 0.0;
//合計たわみ	
	var sigmae = 0.0;
//合計応力	
	var deltae = 0.0;
//応力係数	
	var beta = 0.0;
//たわみ係数	
	var alpha = 0.0;
//カウンター	
	var i;
//板上限板厚	
	var tm;
//フラグ	
	var fl;
//適した板厚が製品板厚内の板厚
	var s;
//奥行/幅の比が下限値、幅、奥行の計算可能判断	
		if( (ba4[0] <= ba) && (haba > eps) && (okuyuki > eps) ) {
//奥行/幅の比が上限値の設定			
		if( ba4[14] <= ba ){
		alpha = alpha4[15];
		beta = beta4[15];			
		}
		else {
//奥行/幅の比からたわみ係数、応力係数計算
		for(i = 1; i <= 14; i = i +1){
			if( ba4[i] >= ba){
			alpha = alpha4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(alpha4[i]-alpha4[i-1]);
			beta = beta4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(beta4[i]-beta4[i-1]);
			break;
			}
		}
		}
//板厚が入力している場合
		if( atu > eps ) {
		fl=0;
		}
//板厚が入力していない場合
		else {
//初期化
		s = 0.0;
		fl=1;
		document.forms['f05a'].elements['s05a'].value = String('') ;
//カウンター
		var j;
//材料
		switch(mate){
//アクリル			
		case 0:
//製品板厚テーブル
		var ss0 = [1.0,2.0,3.0,5.0,8.0,10.0,13.0,15.0,20.0,25.0,30.0,35.0,40.0,45.0,50.0,55.0,60.0,65.0,70.0,75.0,80.0,85.0,90.0,100.0];
//板上限板厚設定
		tm = ss0[23];
//適した板厚計算
		for(j=0;j<=23;j++){
//板厚設定			
		atu=ss0[j];
//板重量計算		
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算		
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算		
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算		
		deltae1 = beta*w1*haba*haba/(atu*atu);	
//小数点２桁四捨五入		
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算		
		sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算		
		deltae2 = beta*w2*haba*haba/(atu*atu);
//小数点２桁四捨五入		
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算		
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断		
		if( (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定			
			document.forms['f05a'].elements['s05a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定			
			s = atu;
			break;
		}
		}	
		break;
//ポリカ		
		case 1:
//製品板厚テーブル		
		var ss1 = [2.0,3.0,4.0,5.0,6.0,8.0,10.0,12.0,15.0];
//板上限板厚設定		
		tm = ss1[8];
//適した板厚計算		
		for(j=0;j<=8;j++){
//板厚設定			
		atu=ss1[j];
//板重量計算		
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算		
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算		
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算		
		deltae1 = beta*w1*haba*haba/(atu*atu);	
//小数点２桁四捨五入		
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算		
		sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算		
		deltae2 = beta*w2*haba*haba/(atu*atu);
//小数点２桁四捨五入		
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算		
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断		
		if( (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定			
			document.forms['f05a'].elements['s05a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定			
			s = atu;
			break;
		}
		}	
		break;
//ガラス
		case 2:
//製品板厚テーブル		
		var ss2 = [1.0,2.0,3.0,4.0,5.0,6.0,8.0,10.0,12.0,15.0];
//板上限板厚設定		
		tm = ss2[9];
//適した板厚計算		
		for(j=0;j<=9;j++){
//板厚設定			
		atu=ss2[j];
//板重量計算		
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算		
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算		
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算		
		deltae1 = beta*w1*haba*haba/(atu*atu);	
//小数点２桁四捨五入		
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算		
		sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算		
		deltae2 = beta*w2*haba*haba/(atu*atu);
//小数点２桁四捨五入		
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算		
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断		
		if( (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定			
			document.forms['f05a'].elements['s05a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定			
			s = atu;
			break;
		}
		}	
		break;
		}
		}
		}
		else {
			s=1.0;
//入力データ下限値チェック、メッセージ設定
			if( (haba < eps) || (okuyuki < eps) || (kazyu<-eps)){
			msg = msg + '幅・奥行・荷重が、入力範囲下限値以下です。';					
			}
//奥行/幅の比が範囲外、メッセージ設定
			else {
//入力可能幅、奥行計算
			var a1;
			var b1;
			a1=okuyuki/ba4[0];
			b1=ba4[0]*haba;
			msg = msg + '幅・奥行の範囲が計算範囲外ですので、幅を'+Math.floor(a1)+'ミリ以下または奥行を'+Math.ceil(b1)+'ミリ以上に変更してください。';						
			}
		}
		if( fl == 0){
		}
		else {
//適した板厚が製品板厚み範囲内、結果設定
		if( s > eps ) {
//たわみ・応力設定
		document.forms['f05a'].elements['sigmae15a'].value = String(sigmae1) ;
		document.forms['f05a'].elements['deltae15a'].value = String(deltae1) ;
		document.forms['f05a'].elements['sigmae25a'].value = String(sigmae2) ;
		document.forms['f05a'].elements['deltae25a'].value = String(deltae2) ;
		document.forms['f05a'].elements['sigmae05a'].value = String(sigmae) ;
		document.forms['f05a'].elements['deltae05a'].value = String(deltae) ;
		document.forms['f05a'].elements['msg05a'].value = msg ;
		}
//適した板厚が製品板厚み範囲外、メッセージ設定
		else {
		document.forms['f05a'].elements['sigmae15a'].value = String('') ;
		document.forms['f05a'].elements['deltae15a'].value = String('') ;
		document.forms['f05a'].elements['sigmae25a'].value = String('') ;
		document.forms['f05a'].elements['deltae25a'].value = String('') ;
		document.forms['f05a'].elements['sigmae05a'].value = String('') ;
		document.forms['f05a'].elements['deltae05a'].value = String('') ;
		document.forms['f05a'].elements['msg05a'].value = String('適した板厚が、製品板厚の上限の'+tm.toFixed(0)+'ミリを超えています。') ;			
		}			
		}
}
}
function calc05b() {
//２辺支持・等分布荷重 たわみ計算
//メッセージ
	var msg='';
//幅の最小
	var haba_min = 200.0;
//幅の最大
	var haba_max = 2000.0;
//奥行の最小
	var okuyuki_min = 200.0;
//奥行の最大
	var okuyuki_max = 1000.0;
//荷重の最大
	var kazyu_max = 70.0;
//たわみ上限値	
	var tawami=5.0;
//フォーム変数初期化	
	document.forms['f05b'].elements['sigmae15b'].value = String('');
	document.forms['f05b'].elements['deltae15b'].value = String('');
	document.forms['f05b'].elements['sigmae25b'].value = String('');
	document.forms['f05b'].elements['deltae25b'].value = String('');
	document.forms['f05b'].elements['sigmae05b'].value = String('');
	document.forms['f05b'].elements['deltae05b'].value = String('');
	document.forms['f05b'].elements['msg05b'].value =  String('');
	document.forms['f05b'].elements['s05b'].value = String('') ;
//幅	
	var haba = document.forms['f05b'].elements['a05b'].value;
//奥行	
	var okuyuki = document.forms['f05b'].elements['b05b'].value;
//板厚	
	var atu = document.forms['f05b'].elements['t05b'].value;
//荷重	
	var kazyu = document.forms['f05b'].elements['w05b'].value;	
//幅・奥行・板厚・荷重の半角数字チェック
	if( haba.match( /[^0-9.]+/ ) ){ alert("幅は、半角数字で入力して下さい。");return 1; }		
	if( okuyuki.match( /[^0-9.]+/ ) ){ alert("奥行は、半角数字で入力して下さい。");return 1; }	
	if( atu.match( /[^0-9.]+/ ) ){ alert("板厚は、半角数字で入力して下さい。");return 1; }		
	if( kazyu.match( /[^0-9.]+/ ) ){ alert("荷重は、半角数字で入力して下さい。");return 1; }	
	if( kazyu == '' ){alert("荷重を入力して下さい。");return 1;}	
//幅	
	haba = Number(document.forms['f05b'].elements['a05b'].value);
//奥行	
	okuyuki = Number(document.forms['f05b'].elements['b05b'].value);
//板厚	
	atu = Number(document.forms['f05b'].elements['t05b'].value);
//荷重	
	kazyu = Number(document.forms['f05b'].elements['w05b'].value);
//荷重下限値ゼロ設定	
	if( kazyu < 0.0) kazyu=0.0;
//材料（アクリル、ポリカ、ガラス）	
	var mate = Number(document.forms['f05b'].elements['mate05b'].value);
//板厚の最小
	var atu_min ;
//板厚の最大
	var atu_max ;
	switch(mate){
//アクリル
		case 0:
		atu_min=1.0;
		atu_max=100.0;
		break;
//ポリカ
		case 1:
		atu_min=1.0;
		atu_max=15.0;
		break;
//ガラス
		case 2:
		atu_min=1.0;
		atu_max=15.0;
		break;
	}
//幅・奥行・荷重の最小・最大値チェック	
if(haba_min > haba || haba_max < haba || okuyuki_min > okuyuki || okuyuki_max < okuyuki || kazyu_max < kazyu || atu_min > atu|| atu_max < atu) {
	if(haba_min > haba){msg= msg + '幅は'+haba_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(haba_max < haba){msg= msg + '幅は'+haba_max.toFixed(0)+'ミリ以下の値を入力してください。';}
	if(okuyuki_min > okuyuki){msg= msg + '奥行は'+okuyuki_min.toFixed(0)+'ミリ以上の値を入力してください。';}	
	if(okuyuki_max < okuyuki){msg= msg + '奥行は'+okuyuki_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(atu_min > atu){msg= msg + '板厚は'+atu_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(atu_max < atu){msg= msg + '板厚は'+atu_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(kazyu_max < kazyu){msg= msg + '荷重は'+kazyu_max.toFixed(0)+'kg以下の値を入力してください。';}	
	document.forms['f05b'].elements['msg05b'].value = msg ;
	return 1;		
}	
else {
//弾性率	
	var e ;
//比重	
	var hizeyu ;
//破断応力	
	var tenstr ;
//材料物性値設定		
	switch(mate){
//アクリル		
		case 0:
		e = 3200;
		hizeyu = 1.2;
		tenstr = 75.0/3.0;
		break;
//ポリカ		
		case 1:
		e = 2350;
		hizeyu = 1.2;
		tenstr = 63.7/3.0;
		break;
//ガラス		
		case 2:
		e = 7160;
		hizeyu = 2.5;
		tenstr = 24.5/3.0;
		break;
	}
//板重量計算
	var gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重	
	var w1 = (gyu/(haba*okuyuki))*9.80665;
//負荷等分布荷重	
	var w2 = (kazyu/(haba*okuyuki))*9.80665;
//奥行/幅の比	
	var ba ;
//入力データ下限値チェック
	var eps = 0.1;
//奥行/幅の比設定	
	if( haba > eps){
		ba = okuyuki/haba;		
	}
	else {
		ba = 0.0;
	}
//奥行/幅の比係数テーブル	
	var ba4 = [0.10,0.20,0.30,0.40,0.50,0.60,0.70,0.80,0.90,1.00,1.20,1.40,1.60,1.80,2.00,0.00];
//応力係数テーブル
	var beta4 = [0.750,0.753,0.756,0.760,0.765,0.769,0.773,0.776,0.779,0.781,0.785,0.787,0.789,0.790,0.790,0.791];
//たわみ係数テーブル
	var alpha4 = [0.156,0.157,0.158,0.159,0.159,0.160,0.161,0.162,0.162,0.163,0.164,0.164,0.164,0.165,0.165,0.165];
//板自重たわみ
	var sigmae1 = 0.0;
//板自重応力
	var deltae1 = 0.0;
//負荷荷重たわみ
	var sigmae2 = 0.0;
//負荷荷重応力
	var deltae2 = 0.0;
//合計たわみ
	var sigmae = 0.0;
//合計応力
	var deltae = 0.0;
//応力係数
	var beta = 0.0;
//たわみ係数
	var alpha = 0.0;
//カウンター
	var i;
//奥行/幅の比が下限値、幅、奥行の計算可能判断
		if( (ba4[0] <= ba) && (haba > eps) && (okuyuki > eps) &&(atu >eps)) {
//奥行/幅の比が上限値の設定			
		if( ba4[14] <= ba ){
		alpha = alpha4[15];
		beta = beta4[15];			
		}
		else {
//奥行/幅の比からたわみ係数、応力係数計算
		for(i = 1; i <= 14; i = i +1){
			if( ba4[i] >= ba){
			alpha = alpha4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(alpha4[i]-alpha4[i-1]);
			beta = beta4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(beta4[i]-beta4[i-1]);
			break;
			}
		}
		}
//板自重たわみ計算		
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算
		deltae1 = beta*w1*haba*haba/(atu*atu);	
//小数点２桁四捨五入
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算
		sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算
		deltae2 = beta*w2*haba*haba/(atu*atu);
//小数点２桁四捨五入
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);	
		}
		else {
//入力データ下限値チェック、メッセージ設定
			if( (haba < eps) || (okuyuki < eps) || (atu <eps) || (kazyu< -eps)){
			msg = msg + '幅・奥行・板厚・荷重が、入力範囲下限値以下です。';					
			}
//奥行/幅の比が範囲外、メッセージ設定
			else {
			var a1;
			var b1;
			a1=okuyuki/ba4[0];
			b1=ba4[0]*haba;
			msg = msg + '幅・奥行の範囲が計算範囲外ですので、幅を'+Math.floor(a1)+'ミリ以下または奥行を'+Math.ceil(b1)+'ミリ以上に変更してください。';			
			}
		}
//破損応力判断
		if( tenstr < deltae ) {
			msg= msg + '破損の恐れが有りますので、板厚を大きくするか補強が必要と思われます。';	
//結果設定
//たわみ・応力設定
		document.forms['f05b'].elements['sigmae15b'].value = String('') ;
		document.forms['f05b'].elements['deltae15b'].value = String('') ;
		document.forms['f05b'].elements['sigmae25b'].value = String('') ;
		document.forms['f05b'].elements['deltae25b'].value = String('') ;
		document.forms['f05b'].elements['sigmae05b'].value = String('') ;
		document.forms['f05b'].elements['deltae05b'].value = String('') ;
		document.forms['f05b'].elements['msg05b'].value = msg ;
		}
		else {
//合計たわみ上限値以上、メッセージ設定
		if( sigmae > tawami ){
			msg= msg + 'たわみ量が大きいので、板厚を大きくするか補強が必要と思われます。';			
		}
//結果設定
//たわみ・応力設定
		document.forms['f05b'].elements['sigmae15b'].value = String(sigmae1) ;
		document.forms['f05b'].elements['deltae15b'].value = String(deltae1) ;
		document.forms['f05b'].elements['sigmae25b'].value = String(sigmae2) ;
		document.forms['f05b'].elements['deltae25b'].value = String(deltae2) ;
		document.forms['f05b'].elements['sigmae05b'].value = String(sigmae) ;
		document.forms['f05b'].elements['deltae05b'].value = String(deltae) ;
		document.forms['f05b'].elements['msg05b'].value = msg ;
		}
}
}

function calc07a() {
//２辺固定・等分布荷重 適した板厚計算
//メッセージ
	var msg='';
//幅の最小
	var haba_min = 200.0;
//幅の最大
	var haba_max = 2000.0;
//奥行の最小
	var okuyuki_min = 200.0;
//奥行の最大
	var okuyuki_max = 1000.0;
//荷重の最大
	var kazyu_max = 70.0;
//たわみ上限値
	var tawami = 5.0;
//フォーム変数初期化
	document.forms['f07a'].elements['sigmae17a'].value = String('') ;
	document.forms['f07a'].elements['deltae17a'].value = String('') ;
	document.forms['f07a'].elements['sigmae27a'].value = String('') ;
	document.forms['f07a'].elements['deltae27a'].value = String('') ;
	document.forms['f07a'].elements['sigmae07a'].value = String('') ;
	document.forms['f07a'].elements['deltae07a'].value = String('') ;
	document.forms['f07a'].elements['msg07a'].value = String('');
	document.forms['f07a'].elements['s07a'].value = String('') ;
//幅	
	var haba = document.forms['f07a'].elements['a07a'].value;
//奥行	
	var okuyuki = document.forms['f07a'].elements['b07a'].value;
//荷重
	var kazyu = document.forms['f07a'].elements['w07a'].value;
//幅・奥行・荷重の半角数字チェック
	if( haba.match( /[^0-9.]+/ ) ){ alert("幅は、半角数字で入力して下さい。");return 1; }		
	if( okuyuki.match( /[^0-9.]+/ ) ){ alert("奥行は、半角数字で入力して下さい。");return 1; }	
	if( kazyu.match(/[^0-9.]+/)){alert("荷重は、半角数字で入力して下さい。");return 1;}
	if( kazyu == '' ){alert("荷重を入力して下さい。");return 1;}	
//幅		
	haba = Number(document.forms['f07a'].elements['a07a'].value);
//奥行	
	okuyuki = Number(document.forms['f07a'].elements['b07a'].value);
//板厚	
	var atu = 0.0;
//荷重	
	kazyu = Number(document.forms['f07a'].elements['w07a'].value);	
//荷重下限値ゼロ設定	
	if( kazyu < 0.0) kazyu=0.0;
//幅・奥行・荷重の最小・最大値チェック	
if(haba_min > haba || haba_max < haba || okuyuki_min > okuyuki || okuyuki_max < okuyuki || kazyu_max < kazyu) {
	if(haba_min > haba){msg= msg + '幅は'+haba_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(haba_max < haba){msg= msg + '幅は'+haba_max.toFixed(0)+'ミリ以下の値を入力してください。';}
	if(okuyuki_min > okuyuki){msg= msg + '奥行は'+okuyuki_min.toFixed(0)+'ミリ以上の値を入力してください。';}	
	if(okuyuki_max < okuyuki){msg= msg + '奥行は'+okuyuki_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(kazyu_max < kazyu){msg= msg + '荷重は'+kazyu_max.toFixed(0)+'kg以下の値を入力してください。';}	
	document.forms['f07a'].elements['msg07a'].value = msg ;
	return 1;		
}	
else {
//材料（アクリル、ポリカ、ガラス）		
	var mate = Number(document.forms['f07a'].elements['mate07a'].value);
//弾性率
	var e ;
//比重	
	var hizeyu ;
//破断応力	
	var tenstr ;
//材料物性値設定		
	switch(mate){
//アクリル		
		case 0:
		e = 3200;
		hizeyu = 1.2;
		tenstr = 2.0*10.7/3.0;
		break;
//ポリカ		
		case 1:
		e = 2350;
		hizeyu = 1.2;
		tenstr = 2.0*10.7/3.0;
		break;
//ガラス		
		case 2:
		e = 7160;
		hizeyu = 2.5;
		tenstr = 2.0*24.5/3.0;
		break;
	}
//板重量計算	
	var gyu ;
//板荷重	
	var w1 ;
//負荷等分布荷重	
	var w2 = (kazyu/(haba*okuyuki))*9.80665;
//板自重たわみ	
	var sigmae1 = 0.0;
//板自重応力	
	var deltae1 = 0.0;
//負荷荷重たわみ	
	var sigmae2 = 0.0;
//負荷荷重応力	
	var deltae2 = 0.0;
//合計たわみ	
	var sigmae = 0.0;
//合計応力	
	var deltae = 0.0;
//応力係数	
	var beta = 0.0;
//たわみ係数	
	var alpha = 0.0;
//カウンター	
	var i;
//板上限板厚
	var tm;
//フラグ	
	var fl;
//適した板厚が製品板厚内の板厚	
	var s;
//入力データ下限値チェック	
	var eps = 0.1;
//幅、奥行の計算可能判断		
		if( (haba > eps) && (okuyuki > eps) ) {
		alpha = 0.0313;
		beta = 0.5;	
//板厚が入力している場合		
		if( atu > eps ) {
		fl=0;
		}
//板厚が入力していない場合		
		else {
//初期化
		s = 0.0;
		fl=1;
		document.forms['f07a'].elements['s07a'].value = String('') ;
//カウンター
		var j;
//材料
		switch(mate){
//アクリル
		case 0:
//製品板厚テーブル
		var ss0 = [1.0,2.0,3.0,5.0,8.0,10.0,13.0,15.0,20.0,25.0,30.0,35.0,40.0,45.0,50.0,55.0,60.0,65.0,70.0,75.0,80.0,85.0,90.0,100.0];
//板上限板厚設定
		tm = ss0[23];
//適した板厚計算
		for(j=0;j<=23;j++){
//板厚設定			
		atu=ss0[j];
//板重量計算		
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算		
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算		
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算		
		deltae1 = beta*w1*haba*haba/(atu*atu);	
//小数点２桁四捨五入		
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算		
		sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算		
		deltae2 = beta*w2*haba*haba/(atu*atu);
//小数点２桁四捨五入		
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算		
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断		
		if( (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定			
			document.forms['f07a'].elements['s07a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定			
			s = atu;
			break;
		}
		}	
		break;
//ポリカ
		case 1:
//製品板厚テーブル		
		var ss1 = [2.0,3.0,4.0,5.0,6.0,8.0,10.0,12.0,15.0];
//板上限板厚設定		
		tm = ss1[8];
//適した板厚計算		
		for(j=0;j<=8;j++){
//板厚設定			
		atu=ss1[j];
//板重量計算		
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算		
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算		
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算		
		deltae1 = beta*w1*haba*haba/(atu*atu);
//小数点２桁四捨五入			
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算		
		sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算			
		deltae2 = beta*w2*haba*haba/(atu*atu);
//小数点２桁四捨五入		
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算		
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断		
		if( (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定			
			document.forms['f07a'].elements['s07a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定			
			s = atu;
			break;
		}
		}	
		break;
//ガラス
		case 2:
//製品板厚テーブル		
		var ss2 = [1.0,2.0,3.0,4.0,5.0,6.0,8.0,10.0,12.0,15.0];
//板上限板厚設定		
		tm = ss2[9];
//適した板厚計算		
		for(j=0;j<=9;j++){
//板厚設定			
		atu=ss2[j];
//板重量計算		
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算		
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算		
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算		
		deltae1 = beta*w1*haba*haba/(atu*atu);
//小数点２桁四捨五入			
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算		
		sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算			
		deltae2 = beta*w2*haba*haba/(atu*atu);
//小数点２桁四捨五入		
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算		
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);
//たわみ・破損上限値判断		
		if( (sigmae < tawami) && (tenstr > deltae) ) {
//適した板厚設定			
			document.forms['f07a'].elements['s07a'].value = String(atu) ;
//適した板厚が製品板厚内の板厚設定			
			s = atu;
			break;
		}
		}	
		break;
		}
		}
		}
		else {
//入力データ下限値チェック、メッセージ設定
			s=1.0;
			if( (haba < eps) || (okuyuki < eps) || (kazyu<-eps)){
			msg = msg + '幅・奥行・荷重が、入力範囲下限値以下です。';					
			}
			else {
			}
		}
		if( fl == 0){
		}
		else {
//適した板厚が製品板厚み範囲内、結果設定			
		if( s > eps ) {
//たわみ・応力設定	
		document.forms['f07a'].elements['sigmae17a'].value = String(sigmae1) ;
		document.forms['f07a'].elements['deltae17a'].value = String(deltae1) ;
		document.forms['f07a'].elements['sigmae27a'].value = String(sigmae2) ;
		document.forms['f07a'].elements['deltae27a'].value = String(deltae2) ;
		document.forms['f07a'].elements['sigmae07a'].value = String(sigmae) ;
		document.forms['f07a'].elements['deltae07a'].value = String(deltae) ;
		document.forms['f07a'].elements['msg07a'].value = msg ;
		}
//適した板厚が製品板厚み範囲外、メッセージ設定
		else {
		document.forms['f07a'].elements['sigmae17a'].value = String('') ;
		document.forms['f07a'].elements['deltae17a'].value = String('') ;
		document.forms['f07a'].elements['sigmae27a'].value = String('') ;
		document.forms['f07a'].elements['deltae27a'].value = String('') ;
		document.forms['f07a'].elements['sigmae07a'].value = String('') ;
		document.forms['f07a'].elements['deltae07a'].value = String('') ;
		document.forms['f07a'].elements['msg07a'].value = String('適した板厚が、製品板厚の上限の'+tm.toFixed(0)+'ミリを超えています。') ;			
		}			
		}
}
}
function calc07b() {
//２辺固定・等分布荷重  たわみ計算
//メッセージ
	var msg='';
//幅の最小
	var haba_min = 200.0;
//幅の最大
	var haba_max = 2000.0;
//奥行の最小
	var okuyuki_min = 200.0;
//奥行の最大
	var okuyuki_max = 1000.0;
//荷重の最大
	var kazyu_max = 70.0;
//たわみ上限値
	var tawami = 5.0;
//フォーム変数初期化
	document.forms['f07b'].elements['sigmae17b'].value = String('');
	document.forms['f07b'].elements['deltae17b'].value = String('');
	document.forms['f07b'].elements['sigmae27b'].value = String('');
	document.forms['f07b'].elements['deltae27b'].value = String('');
	document.forms['f07b'].elements['sigmae07b'].value = String('');
	document.forms['f07b'].elements['deltae07b'].value = String('');
	document.forms['f07b'].elements['msg07b'].value =  String('');
	document.forms['f07b'].elements['s07b'].value = String('') ;
//幅
	var haba = document.forms['f07b'].elements['a07b'].value;
//奥行	
	var okuyuki = document.forms['f07b'].elements['b07b'].value;
//板厚	
	var atu = document.forms['f07b'].elements['t07b'].value;
//荷重	
	var kazyu = document.forms['f07b'].elements['w07b'].value;
//幅・奥行・板厚・荷重の半角数字チェック
	if( haba.match( /[^0-9.]+/ ) ){ alert("幅は、半角数字で入力して下さい。");return 1; }		
	if( okuyuki.match( /[^0-9.]+/ ) ){ alert("奥行は、半角数字で入力して下さい。");return 1; }	
	if( atu.match( /[^0-9.]+/ ) ){ alert("板厚は、半角数字で入力して下さい。");return 1; }		
	if( kazyu.match( /[^0-9.]+/ ) ){ alert("荷重は、半角数字で入力して下さい。");return 1; }	
	if( kazyu == '' ){alert("荷重を入力して下さい。");return 1;}	
//幅
	haba = Number(document.forms['f07b'].elements['a07b'].value);
//奥行	
	okuyuki = Number(document.forms['f07b'].elements['b07b'].value);
//板厚	
	atu = Number(document.forms['f07b'].elements['t07b'].value);
//荷重	
	kazyu = Number(document.forms['f07b'].elements['w07b'].value);
//荷重下限値ゼロ設定	
	if( kazyu < 0.0) kazyu=0.0;
//材料（アクリル、ポリカ、ガラス）	
	var mate = Number(document.forms['f07b'].elements['mate07b'].value);
//板厚の最小
	var atu_min ;
//板厚の最大
	var atu_max ;
	switch(mate){
//アクリル
		case 0:
		atu_min=1.0;
		atu_max=100.0;
		break;
//ポリカ
		case 1:
		atu_min=1.0;
		atu_max=15.0;
		break;
//ガラス
		case 2:
		atu_min=1.0;
		atu_max=15.0;
		break;
	}
//幅・奥行・荷重の最小・最大値チェック	
if(haba_min > haba || haba_max < haba || okuyuki_min > okuyuki || okuyuki_max < okuyuki || kazyu_max < kazyu || atu_min > atu|| atu_max < atu) {
	if(haba_min > haba){msg= msg + '幅は'+haba_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(haba_max < haba){msg= msg + '幅は'+haba_max.toFixed(0)+'ミリ以下の値を入力してください。';}
	if(okuyuki_min > okuyuki){msg= msg + '奥行は'+okuyuki_min.toFixed(0)+'ミリ以上の値を入力してください。';}	
	if(okuyuki_max < okuyuki){msg= msg + '奥行は'+okuyuki_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(atu_min > atu){msg= msg + '板厚は'+atu_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(atu_max < atu){msg= msg + '板厚は'+atu_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(kazyu_max < kazyu){msg= msg + '荷重は'+kazyu_max.toFixed(0)+'kg以下の値を入力してください。';}	
	document.forms['f07b'].elements['msg07b'].value = msg ;
	return 1;		
}	
else {
//弾性率	
	var e ;
//比重	
	var hizeyu ;
//破断応力	
	var tenstr ;
//材料物性値設定	
	switch(mate){
//アクリル		
		case 0:
		e = 3200;
		hizeyu = 1.2;
		tenstr = 2.0*10.7/3.0;
		break;
//ポリカ		
		case 1:
		e = 2350;
		hizeyu = 1.2;
		tenstr = 2.0*10.7/3.0;
		break;
//ガラス		
		case 2:
		e = 7160;
		hizeyu = 2.5;
		tenstr = 2.0*24.5/3.0;
		break;
	}
//板重量計算
	var gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重	
	var w1 = (gyu/(haba*okuyuki))*9.80665;
//負荷等分布荷重	
	var w2 = (kazyu/(haba*okuyuki))*9.80665;
//板自重たわみ	
	var sigmae1 = 0.0;
//板自重応力	
	var deltae1 = 0.0;
//負荷荷重たわみ	
	var sigmae2 = 0.0;
//負荷荷重応力	
	var deltae2 = 0.0;
//合計たわみ	
	var sigmae = 0.0;
//合計応力	
	var deltae = 0.0;
//応力係数	
	var beta = 0.0;
//たわみ係数	
	var alpha = 0.0;
//カウンター	
	var i;
//入力データ下限値チェック
	var eps = 0.1;
//幅、奥行、板厚の計算可能判断	
		if( (haba > eps) && (okuyuki > eps) &&(atu >eps)) {
//たわみ係数			
		alpha = 0.0313;
//応力係数		
		beta = 0.5;	
//板自重たわみ計算		
		sigmae1 = alpha*w1*haba*haba*haba*haba/(e*atu*atu*atu);
//板自重応力計算		
		deltae1 = beta*w1*haba*haba/(atu*atu);	
//小数点２桁四捨五入		
		sigmae1 = sigmae1.toFixed(2);
		deltae1 = deltae1.toFixed(2);
//負荷荷重たわみ計算		
		sigmae2 = alpha*w2*haba*haba*haba*haba/(e*atu*atu*atu);
//負荷荷重応力計算		
		deltae2 = beta*w2*haba*haba/(atu*atu);
//小数点２桁四捨五入		
		sigmae2 = sigmae2.toFixed(2);
		deltae2 = deltae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//合計応力計算		
		deltae = Number(deltae1) + Number(deltae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		deltae = deltae.toFixed(2);	
		}
		else {
//入力データ下限値チェック、メッセージ設定			
			if( (haba < eps) || (okuyuki < eps) || (atu <eps) || (kazyu< -eps)){
			msg = msg + '幅・奥行・板厚・荷重が、入力範囲下限値以下です。';					
			}
			else {
			}
		}
//破損応力判断
		if( tenstr < deltae ) {
			msg= msg + '破損の恐れが有りますので、板厚を大きくするか補強が必要と思われます。';	
//結果設定
//たわみ・応力設定
		document.forms['f07b'].elements['sigmae17b'].value = String('') ;
		document.forms['f07b'].elements['deltae17b'].value = String('') ;
		document.forms['f07b'].elements['sigmae27b'].value = String('') ;
		document.forms['f07b'].elements['deltae27b'].value = String('') ;
		document.forms['f07b'].elements['sigmae07b'].value = String('') ;
		document.forms['f07b'].elements['deltae07b'].value = String('') ;
		document.forms['f07b'].elements['msg07b'].value = msg ;
		}
		else {	
//合計たわみ上限値以上、メッセージ設定	
		if( sigmae > tawami ){
			msg= msg + 'たわみ量が大きいので、板厚を大きくするか補強が必要と思われます。';			
		}
//結果設定
//たわみ・応力設定
		document.forms['f07b'].elements['sigmae17b'].value = String(sigmae1) ;
		document.forms['f07b'].elements['deltae17b'].value = String(deltae1) ;
		document.forms['f07b'].elements['sigmae27b'].value = String(sigmae2) ;
		document.forms['f07b'].elements['deltae27b'].value = String(deltae2) ;
		document.forms['f07b'].elements['sigmae07b'].value = String(sigmae) ;
		document.forms['f07b'].elements['deltae07b'].value = String(deltae) ;
		document.forms['f07b'].elements['msg07b'].value = msg ;
}
}
}
function calc06a() {
//３辺固定・等分布荷重 適した板厚計算
//メッセージ
	var msg='';
//幅の最小
	var haba_min = 200.0;
//幅の最大
	var haba_max = 2000.0;
//奥行の最小
	var okuyuki_min = 200.0;
//奥行の最大
	var okuyuki_max = 1000.0;
//荷重の最大
	var kazyu_max = 70.0;
//たわみ上限値
	var tawami = 5.0;
//フォーム変数初期化
	document.forms['f06a'].elements['sigmae16a'].value = String('') ;
	document.forms['f06a'].elements['sigmae26a'].value = String('') ;
	document.forms['f06a'].elements['sigmae06a'].value = String('') ;
	document.forms['f06a'].elements['msg06a'].value = String('') ;
	document.forms['f06a'].elements['s06a'].value = String('') ;
//幅	
	var haba = document.forms['f06a'].elements['a06a'].value;
//奥行	
	var okuyuki = document.forms['f06a'].elements['b06a'].value;
//荷重	
	var kazyu = document.forms['f06a'].elements['w06a'].value;	
//幅・奥行・荷重の半角数字チェック
	if( haba.match( /[^0-9.]+/ ) ){ alert("幅は、半角数字で入力して下さい。");return 1; }		
	if( okuyuki.match( /[^0-9.]+/ ) ){ alert("奥行は、半角数字で入力して下さい。");return 1; }	
	if( kazyu.match(/[^0-9.]+/)){alert("荷重は、半角数字で入力して下さい。");return 1;}
	if( kazyu == '' ){alert("荷重を入力して下さい。");return 1;}	
//幅		
	haba = Number(document.forms['f06a'].elements['a06a'].value);
//奥行	
	okuyuki = Number(document.forms['f06a'].elements['b06a'].value);
//板厚	
	var atu = 0.0;
//荷重	
	kazyu = Number(document.forms['f06a'].elements['w06a'].value);
//荷重下限値ゼロ設定	
	if( kazyu < 0.0) kazyu=0.0;
//幅・奥行・荷重の最小・最大値チェック	
if(haba_min > haba || haba_max < haba || okuyuki_min > okuyuki || okuyuki_max < okuyuki || kazyu_max < kazyu) {
	if(haba_min > haba){msg= msg + '幅は'+haba_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(haba_max < haba){msg= msg + '幅は'+haba_max.toFixed(0)+'ミリ以下の値を入力してください。';}
	if(okuyuki_min > okuyuki){msg= msg + '奥行は'+okuyuki_min.toFixed(0)+'ミリ以上の値を入力してください。';}	
	if(okuyuki_max < okuyuki){msg= msg + '奥行は'+okuyuki_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(kazyu_max < kazyu){msg= msg + '荷重は'+kazyu_max.toFixed(0)+'kg以下の値を入力してください。';}	
	document.forms['f06a'].elements['msg06a'].value = msg ;
	return 1;		
}	
else {	
//材料（アクリル、ポリカ、ガラス）	
	var mate = Number(document.forms['f06a'].elements['mate06a'].value);
//弾性率
	var e ;
//比重	
	var hizeyu ;
//材料ポアソン比
	var prs ;
//テーブルポアソン比
	var prsb = 1.0/6.0;	
//材料物性値設定	
	switch(mate){
//アクリル		
		case 0:
		e = 3200;
		hizeyu = 1.2;
		prs = 0.39;
		break;
//ポリカ		
		case 1:
		e = 2350;
		hizeyu = 1.2;
		prs = 0.38;
		break;
//ガラス		
		case 2:
		e = 7160;
		hizeyu = 2.5;
		prs = 0.23;
		break;
	}
//ポアソン比補正
	var hos = ( 1.0 - prs*prs )/( 1.0 - prsb*prsb );
//板重量計算	
	var gyu ;
//板荷重	
	var w1 ;
//負荷等分布荷重	
	var w2 = (kazyu/(haba*okuyuki))*9.80665;
//奥行/幅の比	
	var ba ;
//適した板厚が製品板厚内の板厚
	var s;	
//入力データ下限値チェック	
	var eps = 0.1;
//幅、奥行の計算可能判断	
	if( haba > eps && okuyuki > eps ){
		ba = okuyuki/haba;				
	}
	else {
		ba = 0.0;
	}
//奥行/幅の比係数テーブル	
	var ba4 = [0.6,0.7,0.8,0.9,1.0,1.25,1.5,0.0];
//たわみ係数テーブル
	var alpha4 = [0.00271,0.00292,0.00308,0.00323,0.00333,0.00345,0.00335,0.00335];
//板自重たわみ
	var sigmae1 = 0.0;
//負荷荷重たわみ
	var sigmae2 = 0.0;
//合計たわみ
	var sigmae = 0.0;
//たわみ係数
	var alpha = 0.0;
//カウンター
	var i;
//板上限板厚
	var tm;
//フラグ
	var fl;
//奥行/幅の比が下限値、幅、奥行の計算可能判断
		if( (ba4[0] <= ba) && (haba > eps) && (okuyuki > eps) ) {
//奥行/幅の比が上限値の設定			
		if( ba4[6] <= ba){
			alpha = alpha4[7];
		}
		else {
//奥行/幅の比からたわみ係数、応力係数計算
		for(i = 1; i <= 6; i = i +1){
			if( ba4[i] >= ba ){
			alpha = alpha4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(alpha4[i]-alpha4[i-1]);
			break;
			}
		}
		}
//板厚が入力している場合		
		if( atu > eps ) {	
		fl=0;	
		}
//板厚が入力していない場合
		else {
//初期化			
		s = 0.0;
		fl = 1;
		document.forms['f06a'].elements['s06a'].value = String('') ;
//カウンター		
		var j;
//材料
		switch(mate){
//アクリル
		case 0:
//製品板厚テーブル
		var ss0 = [1.0,2.0,3.0,5.0,8.0,10.0,13.0,15.0,20.0,25.0,30.0,35.0,40.0,45.0,50.0,55.0,60.0,65.0,70.0,75.0,80.0,85.0,90.0,100.0];
//板上限板厚設定
		tm = ss0[23];
//適した板厚計算
		for(j=0;j<=23;j++){
//板厚設定			
		atu=ss0[j];
//板重量計算		
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算		
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算		
		sigmae1 = hos*alpha*w1*haba*haba*haba*haba/((e*atu*atu*atu)/(12.0*(1.0-prs*prs)));
//負荷荷重たわみ計算		
		sigmae2 = hos*alpha*w2*haba*haba*haba*haba/((e*atu*atu*atu)/(12.0*(1.0-prs*prs)));	
//小数点２桁四捨五入
		sigmae1 = sigmae1.toFixed(2);
		sigmae2 = sigmae2.toFixed(2);
//合計たわみ計算
		sigmae = Number(sigmae1) + Number(sigmae2);
//小数点２桁四捨五入
		sigmae = sigmae.toFixed(2);
//たわみ上限値判断
		if( sigmae < tawami ) {
//適した板厚設定			
			document.forms['f06a'].elements['s06a'].value = String(atu) ;
			s = atu;
			break;
		}
		}	
		break;
//ポリカ
		case 1:
//製品板厚テーブル		
		var ss1 = [2.0,3.0,4.0,5.0,6.0,8.0,10.0,12.0,15.0];
//板上限板厚設定		
		tm = ss1[8];
//適した板厚計算		
		for(j=0;j<=8;j++){
//板厚設定			
		atu=ss1[j];
//板重量計算	
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算		
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算		
		sigmae1 = hos*alpha*w1*haba*haba*haba*haba/((e*atu*atu*atu)/(12.0*(1.0-prs*prs)));
//負荷荷重たわみ計算		
		sigmae2 = hos*alpha*w2*haba*haba*haba*haba/((e*atu*atu*atu)/(12.0*(1.0-prs*prs)));
//小数点２桁四捨五入			
		sigmae1 = sigmae1.toFixed(2);
		sigmae2 = sigmae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
//たわみ上限値判断		
		if( sigmae < tawami ) {
//適した板厚設定			
			document.forms['f06a'].elements['s06a'].value = String(atu) ;
			s = atu;
			break;
		}
		}	
		break;
//ガラス
		case 2:
//製品板厚テーブル		
		var ss2 = [1.0,2.0,3.0,4.0,5.0,6.0,8.0,10.0,12.0,15.0];
//板上限板厚設定		
		tm = ss2[9];
//適した板厚計算		
		for(j=0;j<=9;j++){
//板厚設定			
		atu=ss2[j];
//板重量計算	
		gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重計算		
		w1 = (gyu/(haba*okuyuki))*9.80665;
//板自重たわみ計算		
		sigmae1 = hos*alpha*w1*haba*haba*haba*haba/((e*atu*atu*atu)/(12.0*(1.0-prs*prs)));
//負荷荷重たわみ計算		
		sigmae2 = hos*alpha*w2*haba*haba*haba*haba/((e*atu*atu*atu)/(12.0*(1.0-prs*prs)));
//小数点２桁四捨五入			
		sigmae1 = sigmae1.toFixed(2);
		sigmae2 = sigmae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
//たわみ上限値判断		
		if( sigmae < tawami) {
//適した板厚設定			
			document.forms['f06a'].elements['s06a'].value = String(atu) ;
			s = atu;
			break;
		}
		}	
		break;
		}
		}		
		}
		else {
		s=1.0;
//入力データ下限値チェック、メッセージ設定
			if( (haba < eps) || (okuyuki < eps) || (kazyu < -eps)){
			msg = msg + '幅・奥行・荷重が、入力範囲下限値以下です。';					
			}
//奥行/幅の比が範囲外、メッセージ設定
			else {
//幅・奥行の範囲範囲外
			msg = msg + '幅に対し奥行きが60%以上ないと本システムでは計算できません。恐れ入りますが二辺固定・等分布荷重を参考下さい。';	
			}
		}
		if( fl == 0 ){
		}
		else {
//適した板厚が製品板厚み範囲内、結果設定
		if( s > eps ){
//たわみ設定			
		document.forms['f06a'].elements['sigmae16a'].value = String(sigmae1) ;
		document.forms['f06a'].elements['sigmae26a'].value = String(sigmae2) ;
		document.forms['f06a'].elements['sigmae06a'].value = String(sigmae) ;
		document.forms['f06a'].elements['msg06a'].value = msg ;
		}
//適した板厚が製品板厚み範囲外、メッセージ設定		
		else{
		document.forms['f06a'].elements['sigmae16a'].value = String('') ;
		document.forms['f06a'].elements['sigmae26a'].value = String('') ;
		document.forms['f06a'].elements['sigmae06a'].value = String('') ;
		document.forms['f06a'].elements['msg06a'].value = String('適した板厚が、製品板厚の上限の'+tm.toFixed(0)+'ミリを超えています。')  ;			
		}			
		}
}
}
function calc06b() {
//３辺固定・等分布荷重  たわみ計算
//メッセージ
	var msg='';
//幅の最小
	var haba_min = 200.0;
//幅の最大
	var haba_max = 2000.0;
//奥行の最小
	var okuyuki_min = 200.0;
//奥行の最大
	var okuyuki_max = 1000.0;
//荷重の最大
	var kazyu_max = 70.0;
//たわみ上限値
	var tawami = 5.0;
//フォーム変数初期化
	document.forms['f06b'].elements['sigmae16b'].value = String('') ;
	document.forms['f06b'].elements['sigmae26b'].value = String('') ; 
	document.forms['f06b'].elements['sigmae06b'].value = String('') ; 
	document.forms['f06b'].elements['msg06b'].value =  String('') ;
//幅	
	var haba = document.forms['f06b'].elements['a06b'].value;
//奥行	
	var okuyuki = document.forms['f06b'].elements['b06b'].value;
//板厚	
	var atu = document.forms['f06b'].elements['t06b'].value;
//荷重	
	var kazyu = document.forms['f06b'].elements['w06b'].value;
//幅・奥行・板厚・荷重の半角数字チェック
	if( haba.match( /[^0-9.]+/ ) ){ alert("幅は、半角数字で入力して下さい。");return 1; }		
	if( okuyuki.match( /[^0-9.]+/ ) ){ alert("奥行は、半角数字で入力して下さい。");return 1; }	
	if( atu.match( /[^0-9.]+/ ) ){ alert("板厚は、半角数字で入力して下さい。");return 1; }		
	if( kazyu.match( /[^0-9.]+/ ) ){ alert("荷重は、半角数字で入力して下さい。");return 1; }
	if( kazyu == '' ){alert("荷重を入力して下さい。");return 1;}	
//幅	
	haba = Number(document.forms['f06b'].elements['a06b'].value);
//奥行	
	okuyuki = Number(document.forms['f06b'].elements['b06b'].value);
//板厚	
	atu = Number(document.forms['f06b'].elements['t06b'].value);
//荷重	
	kazyu = Number(document.forms['f06b'].elements['w06b'].value);
//荷重下限値ゼロ設定	
	if( kazyu < 0.0) kazyu=0.0;
//材料（アクリル、ポリカ、ガラス）	
	var mate = Number(document.forms['f06b'].elements['mate06b'].value);
//板厚の最小
	var atu_min ;
//板厚の最大
	var atu_max ;
	switch(mate){
//アクリル
		case 0:
		atu_min=1.0;
		atu_max=100.0;
		break;
//ポリカ
		case 1:
		atu_min=1.0;
		atu_max=15.0;
		break;
//ガラス
		case 2:
		atu_min=1.0;
		atu_max=15.0;
		break;
	}	
//幅・奥行・荷重の最小・最大値チェック	
if(haba_min > haba || haba_max < haba || okuyuki_min > okuyuki || okuyuki_max < okuyuki || kazyu_max < kazyu || atu_min > atu || atu_max < atu) {
	if(haba_min > haba){msg= msg + '幅は'+haba_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(haba_max < haba){msg= msg + '幅は'+haba_max.toFixed(0)+'ミリ以下の値を入力してください。';}
	if(okuyuki_min > okuyuki){msg= msg + '奥行は'+okuyuki_min.toFixed(0)+'ミリ以上の値を入力してください。';}	
	if(okuyuki_max < okuyuki){msg= msg + '奥行は'+okuyuki_max.toFixed(0)+'ミリ以下の値を入力してください。';}	
	if(atu_min > atu){msg= msg + '板厚は'+atu_min.toFixed(0)+'ミリ以上の値を入力してください。';}
	if(atu_max < atu){msg= msg + '板厚は'+atu_max.toFixed(0)+'ミリ以下の値を入力してください。';}		
	if(kazyu_max < kazyu){msg= msg + '荷重は'+kazyu_max.toFixed(0)+'kg以下の値を入力してください。';}	
	document.forms['f06b'].elements['msg06b'].value = msg ;
	return 1;		
}	
else {
//弾性率	
	var e ;
//比重		
	var hizeyu ;
//材料ポアソン比
	var prs ;
//テーブルポアソン比
	var prsb = 1.0/6.0;	
//破断応力	
	var tenstr ;	
//材料物性値設定	
	switch(mate){
//アクリル		
		case 0:
		e = 3200;
		hizeyu = 1.2;
		prs = 0.39;
		tenstr = 10.7/3.0;
		break;
//ポリカ		
		case 1:
		e = 2350;
		hizeyu = 1.2;
		prs = 0.38;
		tenstr = 10.7/3.0;
		break;
//ガラス		
		case 2:
		e = 7160;
		hizeyu = 2.5;
		prs = 0.23;
		tenstr = 24.5/3.0;
		break;
	}
//ポアソン比補正
	var hos = ( 1.0 - prs*prs )/( 1.0 - prsb*prsb );
//板重量計算	
	var gyu  = hizeyu*haba*okuyuki*atu/1000000;
//板荷重	
	var w1 = (gyu/(haba*okuyuki))*9.80665;
//負荷等分布荷重
	var w2 = (kazyu/(haba*okuyuki))*9.80665;
//奥行/幅の比	
	var ba ;
//入力データ下限値チェック	
	var eps = 0.1;
//幅、奥行の計算可能判断	
	if( haba > eps && okuyuki > eps ){
//奥行/幅の比設定		
		ba = okuyuki/haba;				
	}
	else {
		ba = 0.0;
	}
//奥行/幅の比係数テーブル	
	var ba4 = [0.6,0.7,0.8,0.9,1.0,1.25,1.5,0.0];
//たわみ係数テーブル	
	var alpha4 = [0.00271,0.00292,0.00308,0.00323,0.00333,0.00345,0.00335,0.00335];
//板自重たわみ	
	var sigmae1 = 0.0;
//負荷荷重たわみ	
	var sigmae2 = 0.0;
//合計たわみ	
	var sigmae = 0.0;
//たわみ係数	
	var alpha = 0.0;
//カウンター	
	var i;
//奥行/幅の比が下限値、幅、奥行の計算可能判断
		if( (ba4[0] <= ba) && (haba > eps) && (okuyuki > eps) && (atu >eps)) {
//奥行/幅の比が上限値の設定			
		if( ba4[6] <= ba){
			alpha = alpha4[7];
		}
		else {
//奥行/幅の比からたわみ係数、応力係数計算			
		for(i = 1; i <= 6; i = i +1){
			if( ba4[i] >= ba){
			alpha = alpha4[i-1]+((ba-ba4[i-1])/(ba4[i]-ba4[i-1]))*(alpha4[i]-alpha4[i-1]);
			break;
			}
		}
		}
//板自重たわみ計算		
		sigmae1 = hos*alpha*w1*haba*haba*haba*haba/((e*atu*atu*atu)/(12.0*(1.0-prs*prs)));
//負荷荷重たわみ計算		
		sigmae2 = hos*alpha*w2*haba*haba*haba*haba/((e*atu*atu*atu)/(12.0*(1.0-prs*prs)));
//小数点２桁四捨五入			
		sigmae1 = sigmae1.toFixed(2);
		sigmae2 = sigmae2.toFixed(2);
//合計たわみ計算		
		sigmae = Number(sigmae1) + Number(sigmae2);
//小数点２桁四捨五入		
		sigmae = sigmae.toFixed(2);
		}
		else {
//入力データ下限値チェック、メッセージ設定			
			if( (haba < eps) || (okuyuki < eps) || (atu < eps) || (kazyu< -eps)){
							msg = msg + '幅・奥行・板厚・荷重が、入力範囲下限値以下です。';					
			}
//奥行/幅の比が範囲外、メッセージ設定			
			else {
//幅・奥行の範囲範囲外
			msg = msg + '幅に対し奥行きが60%以上ないと本システムでは計算できません。恐れ入りますが二辺固定・等分布荷重を参考下さい。';	
			}
		}

//破損判断無

//合計たわみ上限値以上、メッセージ設定		
		if( sigmae > tawami ){
			msg= msg + 'たわみ量が大きいので、板厚を大きくするか補強が必要と思われます。';			
		}
//結果設定
//たわみ設定		
		document.forms['f06b'].elements['sigmae16b'].value = String(sigmae1) ;
		document.forms['f06b'].elements['sigmae26b'].value = String(sigmae2) ;
		document.forms['f06b'].elements['sigmae06b'].value = String(sigmae) ;
		document.forms['f06b'].elements['msg06b'].value = msg ;
}
}