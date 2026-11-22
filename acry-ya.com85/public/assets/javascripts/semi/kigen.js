
<!--
//------------------------------------------------//
//
// Newアイコン表示スクリプト
// ・特定のアイコンを期限付きで表示する
// ・異なる階層からの呼び出しもOK
// ・limitday --- 表示停止年月日（8桁数字）
// ・iDiff --- jsファイルからの階層数（同階層は0）
//------------------------------------------------//

function newstamp( limitday, iDiff ){
	// 初期設定（書き換え部分はここだけです）
	//アイコンのURLを、このファイルからの相対パスで設定して下さい。
	var img_url = "/acry-ya_new/img/top_img/nyukai-campaign245.jpg";

	//変数宣言
	var day,month,year,today,ymt;

	//日付取得
	today = new Date();
	day = "0"+today.getDate();
	day = day.substring(day.length-2,day.length+1);
	month = "0"+(1+today.getMonth());
	month = month.substring(month.length-2,month.length+1);
	year = today.getFullYear();

	//階層調整
	var sDir = "";
	for ( i = 0; i < iDiff; i++ ) {
		sDir = sDir + "../";
	}

	//メイン部
	ymt = year + month + day;
	if ( ymt < limitday ) {
		document.write("<IMG SRC=\"" + sDir + img_url + "\">");
	} else {
		document.write("");
	}
}
//-->


