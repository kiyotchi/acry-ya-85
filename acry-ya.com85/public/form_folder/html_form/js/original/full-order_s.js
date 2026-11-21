/*------------------------------------------------------------------------------
// フォーム内容保存
------------------------------------------------------------------------------*/

$(document).ready( function(){
	
	//cookie保持日数
	var saveDays = 31;
	
	//保存するフォームのリスト
	var saveList = [
		'お名前',
		'お名前(かな)',
		'email',
		'email2',
		'法人名',
		'法人名かな',
		'部署名',
		'電話番号',
		'ＦＡＸ',
		'郵便番号',
		'都道府県',
		'住所'
	];
	
	//データ取得
	
	var m = 0;
	var v = 0;
	var f = $('#sendform').get();f = f[0];
	while( true ){
		var getCookie = $.cookie( ('ORDERS_' + m) );
		if( getCookie == null ){ break; }
		getCookie = decodeURIComponent(getCookie);
		var l = getCookie.split('::');
		for( k in l ){
			f.elements[saveList[v]].value = l[k];
			v ++ ;
		}
		m ++ ;
	}
	
	if( $.cookie('ORDERS_CHECK') == 1 ){
		$('#f_cookie').attr('checked',true);
	}
	
	
	//送信処理
	$('#sendform').submit( function(){
		//cookie保存
		if( $('#f_cookie').attr('checked') ){
			var cookieList = {};
			var setList = [];
			var x = 0;
			var i = 0;
			for( var n in saveList ){
				if( x == 5 ){
					x = 0;
					cookieList['ORDERS_' + i] = encodeURIComponent( setList.join('::'));
					setList = [];
					i ++ ;
				}
				setList.push( this.elements[saveList[n]].value );
				x ++ ;
			}
			if( setList.length > 0 ){
				cookieList['ORDERS_' + i] = encodeURIComponent(setList.join('::'));
				setList = [];
				i ++ ;
			}
			for( var n in cookieList ){
				$.cookie(
					n, 
					cookieList[n],
					{ 'expires' : saveDays }
				);
			}
		}
		//cookie削除
		else{
			var m = 0;
			while( true ){
				var getCookie = $.cookie( ('ORDERS_' + m) );
				if( getCookie == null ){ break; }
				$.cookie(
					'ORDERS_' + m, 
					'',
					{ 'expires' : -1 }
				);
				m ++ ;
			}
		}
		
		//cookie保存のチェック保存
		if( $('#f_cookie').attr('checked') ){
				$.cookie(
					'ORDERS_CHECK', 
					1,
					{ 'expires' : saveDays }
				);
		}
		else{
				$.cookie(
					'ORDERS_CHECK', 
					1,
					{ 'expires' : -1 }
				);
		}
		
		return true;
	});
	
	
});