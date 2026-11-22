/***************************************/
/*                                     */
/*        アクリル説教台               */
/*                                     */
/*        17/03/16 キャスター発売      */
/*        17/06/14 ヤマト便対応        */
/*        23/07/01 インボイス対応      */
/*        24/02/09 復元機能実装        */
/***************************************/

//0:色、1:キャスター、2:価格（税抜き）、3:品番、4:品名
item_cnt = 4;
var item_list = new Array(item_cnt);
item_list[0] = "クリアー,なし,155800,OAL-C,アクリル説教台クリアー（ネジNo110）";
item_list[1] = "クリアー,あり,168800,OAL-C-C,アクリル説教台クリアー キャスター付き";
item_list[2] = "ガラスエッジ,なし,189600,OAL-GE,アクリル説教台ガラスエッジ（ネジNo110）";
item_list[3] = "ガラスエッジ,あり,202600,OAL-GE-C,アクリル説教台ガラスエッジ キャスター付き";

function SipriSet(){
	let iro = document.form1.iro.value;
	let caster = document.form1.caster.value;
	let suu = document.form1.suu.value;
	let tanka = 0;
	let gokei = 0;
	let waribiki = 1;
	let hinban = "";
	let hinmei = "";
	
	// 品番、価格(単価)を取得
	for(i = 0; i < item_cnt; i++){
		let division = item_list[i].split(",");
		if(division[0] == iro && division[1] == caster){
			hinban = division[3];
			hinmei = division[4];
			tanka = Math.round(Number(division[2]) * taxRateValue);
			break;
		}
	}
	
	// イメージ切替
	img_chg(iro,caster);

	// 品番を表示
	$('.overview__productNumber').children('dd').text(hinban);
	
	tanka = Math.round(tanka * waribiki);
	tanka = taxExcludedPrice(tanka);
	gokei = tanka * suu;
	
	// アラート
	$('#suryo_ng_txt').text('');
	if(suu.search(/[^0-9]/i) != -1 || suu==0){
		$('#suryo_ng_txt').text("半角数字で入力して下さい。");
		tanka=0;
	}
	if(Number(suu) > 400){
		$('#suryo_ng_txt').text("数量は最大400個までとなります。");
		tanka=0;
	}
	
	// カート用変数にセット
	if(tanka > 0){
		document.form1.price.value = String(tanka).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,');
		document.form1.total.value = String(gokei).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,');
		document.form1.total_tax.value = String(Math.round(gokei * taxRateValue)).replace(/(\d)(?=(\d\d\d)+(?!\d))/g,'$1,');
		document.form1.itemna.value = hinmei;
		document.form1.itemno.value = hinban;
		document.form1.suryo.value = suu;
		document.form1.sipri.value = "::" + tanka;
	}else{
		document.form1.price.value = 0;
		document.form1.total.value = 0;
		document.form1.total_tax.value = 0;
		document.form1.itemna.value = "";
		document.form1.itemno.value = "";
		document.form1.sipri.value = "";
	}
}

// カートボタンクリック
function SubmitCheck()
{
	if(Number(document.form1.price.value) == 0){
		alert("ご注文内容が適正に入力されておりません。\n入力項目をお確かめください。\n合計金額が表示されている状態で\nカートに商品を入れてください。");
	} else {
		//document.form1.submit();
		if( typeof(submitToCart) == 'function' ){
			submitToCart();
		} else {
			document.form1.submit();
		}
	}
}

// イメージ切替
function img_chg(color,option){
	let productimage1 = new Image();
	
	switch(color){
	case "クリアー":
		if(option == "なし"){
			productimage1.src = "/storage/images/catalog/acrylic_lectern/normal.jpg";
		}else{
			productimage1.src = "/storage/images/catalog/acrylic_lectern/caster.jpg";
		}
		break;
	case "ガラスエッジ":
		if(option == "なし"){
			productimage1.src = "/storage/images/catalog/acrylic_lectern/normal_ge.jpg";
		}else{
			productimage1.src = "/storage/images/catalog/acrylic_lectern/caster_ge.jpg";
		}
		break;
	}
	
	$('#product_pic_1').attr('src', productimage1.src);
	$('#product_caption_1').text(color + " キャスター" + option);
	$('.js-imageSwitch__thumbnail').children('[data-num="1"]').children('img').attr('src', productimage1.src);

}
