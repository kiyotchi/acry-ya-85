/***************************************************/
/*                                                 */
/*        ポリスチレン型板 フリーカット            */
/*                                                 */
/*        13/11/05 最大サイズ変更（1500x910）      */
/*        13/11/20 バグ改修                        */
/*        14/02/12 消費税8%対応                    */
/*        14/05/10 ヤマト運輸対応                  */
/*        15/12/14 2t追加                          */
/*        17/06/20 ヤマト便対応                    */
/*        18/04/05 配送便対応                      */
/*        18/07/10 ミリ単位アラート表示            */
/*        19/04/16 カンマ区切り対応                */
/*        20/09/02 品名変更                       */
/***************************************************/

var bun = new Array; //split関数用(分割)
var h_x_size = new Array(1);
var h_y_size = new Array(1);
var tori_suu = new Array(1);

var uri_tanka;

var alert_check = new Array(1);

var zairyou_flag = new Array(1);

var ita_tanka = new Array(1);
ita_tanka = 0;
var kihon_tanka = new Array(1);
kihon_tanka = 0;

//値が小さいときのチェック用
var check_min = 0;

var hijuu = new Array(1); //材料比重
hijuu = 1.05;

var yamato_kei = 1.025;	//ヤマト

//色,横サイズ,縦サイズ,板厚,仕入値
var h_zairyou_list = new Array(2);
h_zairyou_list[0] = "S589(細目模様),1836,921,2,3780";
h_zairyou_list[1] = "S589(細目模様),1836,921,3,5807";


//材料単価係数
var h_zairyou_k = new Array(15);
h_zairyou_k[0] = 3; //取数単価 * 数量 = 1円以上～250円未満
h_zairyou_k[1] = 2.6; //取数単価 * 数量 = 250円以上～500円未満
h_zairyou_k[2] = 2.3; //取数単価 * 数量 = 500円以上～1000円未満
h_zairyou_k[3] = 2.2; //取数単価 * 数量 = 1000円以上～1500円未満
h_zairyou_k[4] = 2; //取数単価 * 数量 = 1500円以上～2000円未満
h_zairyou_k[5] = 1.86; //取数単価 * 数量 = 2000円以上～2500円未満
h_zairyou_k[6] = 1.78; //取数単価 * 数量 = 2500円以上～3000円未満
h_zairyou_k[7] = 1.7; //取数単価 * 数量 = 3000円以上～5000円未満
h_zairyou_k[8] = 1.6; //取数単価 * 数量 = 5000円以上～8000円未満
h_zairyou_k[9] = 1.5; //取数単価 * 数量 = 8000円以上～11000円未満
h_zairyou_k[10] = 1.45; //取数単価 * 数量 = 11000円以上～15000円未満
h_zairyou_k[11] = 1.4; //取数単価 * 数量 = 15000円以上～40000円未満
h_zairyou_k[12] = 1.3; //取数単価 * 数量 = 40000円以上～100000円未満
h_zairyou_k[13] = 1.25; //取数単価 * 数量 = 100000円以上～500000円未満
h_zairyou_k[14] = 1.22; //取数単価 * 数量 = 500000円以上



//カット単価
var h_kihon_t = new Array(4);
h_kihon_t[0] = 300; //横 + 縦 = 300mm未満
h_kihon_t[1] = 450; //横 + 縦 = 300以上～500mm未満
h_kihon_t[2] = 600; //横 + 縦 = 500以上～1000mm未満
h_kihon_t[3] = 900; //横 + 縦 = 1000mm以上



//加工割引
var h_kakou_waribiki = new Array(10);
h_kakou_waribiki[0] = 1; //数量1ヶ
h_kakou_waribiki[1] = 0.75; //数量2ヶ
h_kakou_waribiki[2] = 0.65; //数量3～4ヶ
h_kakou_waribiki[3] = 0.5; //数量5～9ヶ
h_kakou_waribiki[4] = 0.4; //数量10～19ヶ
h_kakou_waribiki[5] = 0.35; //数量20～29ヶ
h_kakou_waribiki[6] = 0.3; //数量30～99ヶ
h_kakou_waribiki[7] = 0.26; //数量100～199ヶ
h_kakou_waribiki[8] = 0.22; //数量200～299ヶ
h_kakou_waribiki[9] = 0.18; //数量300ヶまで


//送料(総重量1kg(端数切捨)毎に加算)
var h_souryou = new Array(4);
h_souryou[0] = 40; //横 + 縦 = 1以上～500mm未満
h_souryou[1] = 50; //横 + 縦 = 500以上～1500mm未満
h_souryou[2] = 60; //横 + 縦 = 1500以上～2500mm未満
h_souryou[3] = 80; //横 + 縦 = 2500mm以上

function ita_keisan()
{

	atu = Number(document.form_semiorder.atu.value);
	yoko = Number(document.form_semiorder.yoko.value);
	tate = Number(document.form_semiorder.tate.value);
	if(yoko != 0 && tate != 0){
		wd = yoko + tate;
	} else {
		wd = 0;
	};
	suu = Number(document.form_semiorder.suu.value);


	ita_tanka = 0;
	kihon_tanka = 0;


	//横サイズ・縦サイズ・材料単価取得
	if(yoko != 0 && tate != 0){
		j = 0;
		zairyou_flag = 0;
		h_x_size = 0;
		h_y_size = 0;
		var zairyou_tanka_list = new Array;
		var hh_x_size = new Array;
		var hh_y_size = new Array;
		for(i = 0; i < 2; i++){
			bun = h_zairyou_list[i].split(",");
			if(atu == bun[3]){
				//取数取得プログラムにキック
				torisuu_kaisi(yoko,tate,Number(bun[1]),Number(bun[2]));
				//取数単価取得
				if(tori_suu >= 1){
					zairyou_tanka_list[j] = Math.round(Number(bun[4]) / tori_suu);
					hh_x_size[j] = Number(bun[1]) - 6;
					hh_y_size[j] = Number(bun[2]) - 6;
					zairyou_flag = 1;
				} else if(tori_suu == 0){
					zairyou_tanka_list[j] = 0;
					hh_x_size[j] = 0;
					hh_y_size[j] = 0;
				};
				j = j + 1;
			};
		};

		zairyou_tanka = 0;
		if(zairyou_flag == 1){
			for(i = 0; i < j; i++){
				if(zairyou_tanka == 0){
					if(Number(zairyou_tanka_list[i]) != 0){
						zairyou_tanka = Number(zairyou_tanka_list[i]);
					};
				} else {
					if(Number(zairyou_tanka_list[i]) != 0){
						if(zairyou_tanka >= Number(zairyou_tanka_list[i])){
							zairyou_tanka = Number(zairyou_tanka_list[i]);
						};
					};
				};
			};
		};


		//材料単価係数取得
		if((zairyou_tanka * suu) > 0){
			if((zairyou_tanka * suu) >= 1 && (zairyou_tanka * suu) < 250){ //取数単価 * 数量 = 1円以上～250円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[0]);
			}
			else if((zairyou_tanka * suu) >= 250 && (zairyou_tanka * suu) < 500){ //取数単価 * 数量 = 250円以上～500円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[1]);
			}
			else if((zairyou_tanka * suu) >= 500 && (zairyou_tanka * suu) < 1000){ //取数単価 * 数量 = 500円以上～1000円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[2]);
			}
			else if((zairyou_tanka * suu) >= 1000 && (zairyou_tanka * suu) < 1500){ //取数単価 * 数量 = 1000円以上～1500円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[3]);
			}
			else if((zairyou_tanka * suu) >= 1500 && (zairyou_tanka * suu) < 2000){ //取数単価 * 数量 = 1500円以上～2000円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[4]);
			}
			else if((zairyou_tanka * suu) >= 2000 && (zairyou_tanka * suu) < 2500){ //取数単価 * 数量 = 2000円以上～2500円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[5]);
			}
			else if((zairyou_tanka * suu) >= 2500 && (zairyou_tanka * suu) < 3000){ //取数単価 * 数量 = 2500円以上～3000円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[6]);
			}
			else if((zairyou_tanka * suu) >= 3000 && (zairyou_tanka * suu) < 5000){ //取数単価 * 数量 = 3000円以上～5000円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[7]);
			}
			else if((zairyou_tanka * suu) >= 5000 && (zairyou_tanka * suu) < 8000){ //取数単価 * 数量 = 5000円以上～8000円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[8]);
			}
			else if((zairyou_tanka * suu) >= 8000 && (zairyou_tanka * suu) < 11000){ //取数単価 * 数量 = 8000円以上～11000円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[9]);
			}
			else if((zairyou_tanka * suu) >= 11000 && (zairyou_tanka * suu) < 15000){ //取数単価 * 数量 = 11000円以上～15000円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[10]);
			}
			else if((zairyou_tanka * suu) >= 15000 && (zairyou_tanka * suu) < 40000){ //取数単価 * 数量 = 15000円以上～40000円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[11]);
			}
			else if((zairyou_tanka * suu) >= 40000 && (zairyou_tanka * suu) < 100000){ //取数単価 * 数量 = 40000円以上～100000円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[12]);
			}
			else if((zairyou_tanka * suu) >= 100000 && (zairyou_tanka * suu) < 500000){ //取数単価 * 数量 = 100000円以上～500000円未満
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[13]);
			}
			else if((zairyou_tanka * suu) >= 500000){ //取数単価 * 数量 = 500000円以上
				ita_tanka = Math.round(zairyou_tanka * h_zairyou_k[14]);
			};
		}
		else {
			ita_tanka = 0;
		};
	}
	else {
		ita_tanka = 0;
	};


	if(atu == 2){
		ita_tanka = Math.round(ita_tanka * 1.1);	//2tは破損しやすいため、梱包費等を考慮
	};

	//送料計算
	//総重量
	juuryou = (Math.floor((yoko / 1000) * (tate / 1000) * hijuu * 3)) * suu;

	if(wd != 0 && juuryou != 0){
		if(wd >= 1 && wd < 500){ //横 + 縦 = 1以上～500未満
			souryou = Math.round(h_souryou[0] * juuryou / suu);
		} else if(wd >= 500 && wd < 1500){ //横 + 縦 = 500以上～1500未満
			souryou = Math.round(h_souryou[1] * juuryou / suu);
		} else if(wd >= 1500 && wd < 2500){ //横 + 縦 = 1500以上～2500未満
			souryou = Math.round(h_souryou[2] * juuryou / suu);
		} else if(wd >= 2500){ //横 + 縦 = 2500以上
			souryou = Math.round(h_souryou[3] * juuryou / suu);
		};
	} else {
		souryou = 0;
	};


	//加工数量割引取得
	kakou_waribiki = 1;
	if(suu != 0){
		if(suu == 1){ //数量1ヶ
			kakou_waribiki = h_kakou_waribiki[0];
		} else if(suu == 2){ //数量2ヶ
			kakou_waribiki = h_kakou_waribiki[1];
		} else if(suu >= 3 && suu <= 4){ //数量3～4ヶ
			kakou_waribiki = h_kakou_waribiki[2];
		} else if(suu >= 5 && suu <= 9){ //数量5～9ヶ
			kakou_waribiki = h_kakou_waribiki[3];
		} else if(suu >= 10 && suu <= 19){ //数量10～19ヶ
			kakou_waribiki = h_kakou_waribiki[4];
		} else if(suu >= 20 && suu <= 29){ //数量20～29ヶ
			kakou_waribiki = h_kakou_waribiki[5];
		} else if(suu >= 30 && suu <= 99){ //数量30～99ヶ
			kakou_waribiki = h_kakou_waribiki[6];
		} else if(suu >= 100 && suu <= 199){ //数量100～199ヶ
			kakou_waribiki = h_kakou_waribiki[7];
		} else if(suu >= 200 && suu <= 299){ //数量200～299ヶ
			kakou_waribiki = h_kakou_waribiki[8];
		} else if(suu == 300){ //数量300ヶまで
			kakou_waribiki = h_kakou_waribiki[9];
		};
	} else {
		kakou_waribiki = 1;
	};


	//カット単価
	if(wd != 0){
		if(wd >=1 && wd < 300){ //横 + 縦 = 1以上～300未満
			kihon_tanka = Math.round(h_kihon_t[0] * kakou_waribiki);
		} else if(wd >= 300 && wd < 500){ //横 + 縦 = 300以上～500未満
			kihon_tanka = Math.round(h_kihon_t[1] * kakou_waribiki);
		} else if(wd >= 500 && wd < 1000){ //横 + 縦 = 500以上～1000未満
			kihon_tanka = Math.round(h_kihon_t[2] * kakou_waribiki);
		} else if(wd >= 1000){ //横 + 縦 = 1000以上
			kihon_tanka = Math.round(h_kihon_t[3] * kakou_waribiki);
		} else {
			kihon_tnaka = 0;
		};
	} else {
		kihon_tanka = 0;
	};


	//入力時のアラート
	alert_check = 0;

	//板のサイズ
	$('#caution_wording3_txt').text('');
	if(document.form_semiorder.yoko.value.match(/[^0-9]/g)){
		$('#caution_wording3_txt').text("半角数字(小数点以下は不可)で入力してください。");
		alert_check = 1;
	};
	//板のサイズ
	if(yoko != 0){
		if(yoko < 50 || yoko > 1500){
			$('#caution_wording3_txt').text('縦のサイズは50～1500mmになります。');
			alert_check = 1;
		};
	};


	$('#caution_wording4_txt').text('');
	if(document.form_semiorder.tate.value.match(/[^0-9]/g)){
		$('#caution_wording4_txt').text("半角数字(小数点以下は不可)で入力してください。");
		alert_check = 1;
	};
	if(tate != 0){
		if(tate < 50 || tate > 910){
			$('#caution_wording4_txt').text('横のサイズは50～910mmになります。');
			alert_check = 1;
		};
	};

	//数量
	$('#suryo_ng_txt').text("");
	if(document.form_semiorder.suu.value.match(/[^0-9]/g)){
		$('#suryo_ng_txt').text("半角数字(小数点以下は不可)で入力してください。");
		alert_check = 1;
	};
	if(suu != 0){
		if(suu > 300){
			$('#suryo_ng_txt').text("301個以上は、別途お問い合わせください。");
			alert_check = 1;
		};
	};

	if((check_min == 0) && ((yoko != 0 && yoko <= 99) && (tate != 0 && tate <= 99))){
		if(alert_check == 0){
			$('#caution_wording4_txt').text('サイズが小さいようですが、入力はミリ単位です。');
			check_min = 1;
		};
	};

	haisou_chg();

	if(alert_check == 0 && suu != 0){
		/* 配送方補判断 */
		konpo_su = Math.ceil(( atu * suu ) / sagawa_atu);

		haisou_cost = 0;
		area_cost = 0;
		packing_opt = 0;

		haisou_method = "";
		haisou_no = "";
		enpo_deliver = "";

		wd = yoko + tate;

		//板単価合計
		$('#haisou_ng_txt').text("");
		if(wd < ymt_size){
			itemno = "semi_polystyrene";
			ymt_cost = 0;
		}
		else{
			itemno = "semi_polystyrene_B";
			ymt_cost = ymt_bin;

/**/
			if(document.form_semiorder.souhu_info.value == "個人"){
				haisou_method = "個人様向け配送料 一式";
				haisou_no = "KMD";
				enpo_deliver = "EPD_K";
				if(wd >= ymt_size && wd <= oogata_R){
					haisou_cost = haisou_cost_list[0];
					area_cost = area_cost_list[0];
				}
				else if(wd > oogata_R && wd <= oogata_M){
					itemno = itemno + "_R";

					haisou_cost = haisou_cost_list[1];
					area_cost = area_cost_list[1];
				}
				else if(wd > oogata_M && wd <= oogata_G){
					itemno = itemno + "_M";

					haisou_cost = haisou_cost_list[2];
					area_cost = area_cost_list[2];
				}
				else if(wd > oogata_G && wd <= oogata_O){
					itemno = itemno + "_G";

					haisou_cost = haisou_cost_list[3];
					area_cost = area_cost_list[3];
				}
				else{
					if(wd > oogata_O){
						$('#haisou_ng_txt').text("配送の都合上、個人のお客様には入力されたサイズは販売できません。\n横＋縦＝" + oogata_O + " 以下となるようにご入力下さい。");
						alert_check = 1;
					};
					itemno = "";
					haisou_cost = 0;
					area_cost = 0;
				};

				if(alert_check == 0){
					document.form_semiorder.haisou_cost.value = String(haisou_cost * konpo_su).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
					document.form_semiorder.area_cost.value = String(area_cost * konpo_su).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
				}
				else{
					document.form_semiorder.haisou_cost.value = 0;
					document.form_semiorder.area_cost.value = 0;
				};
			}
			else{
				if(wd > ymt_size_max){
					haisou_method = "法人様向け配送料 一式";
					haisou_no = "HMD";
					enpo_deliver = "EPD_H";
					itemno = itemno + "_H";
					haisou_cost = 0;
					area_cost = area_cost_list[4];
					document.form_semiorder.area_cost.value = String(area_cost * konpo_su).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
				}
				else{
					haisou_method = "";
					haisou_no = "";
					enpo_deliver = "";
					haisou_cost = 0;
					area_cost = 0;
					document.form_semiorder.area_cost.value = 0;
				};
			};
		};

		ita_tanka = Math.round((ita_tanka + kihon_tanka + souryou + ymt_cost) * yamato_kei * taxRateValue);
		document.form_semiorder.itemna[0].value = "ポリスチレン型板 S589(細目模様)" + " H:" + yoko + " x W:" + tate + "mm　板厚:" + atu + "mm　カットのみ";
		document.form_semiorder.itemna.value = "ポリスチレン型板 S589(細目模様)" + " H:" + yoko + " x W:" + tate + "mm　板厚:" + atu + "mm　カットのみ";
		document.form_semiorder.sipri.value = "::" + ita_tanka;

		//合計表示
		if(alert_check == 0){
			document.form_semiorder.price.value = String(ita_tanka).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
			document.form_semiorder.total.value = String(ita_tanka * suu).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
		}
		else{
			document.form_semiorder.price.value = 0;
			document.form_semiorder.total.value = 0;
		};

		document.form_semiorder.itemno[0].value = itemno;
		document.form_semiorder.suryo[0].value = suu;
		document.form_semiorder.sipri[0].value = "::" + ita_tanka;

		document.form_semiorder.itemna[1].value = haisou_method;
		document.form_semiorder.itemno[1].value = haisou_no;
		document.form_semiorder.suryo[1].value = 1;
		document.form_semiorder.sipri[1].value = "::" + haisou_cost * konpo_su;

		document.form_semiorder.itemna[2].value = "遠方配送料 一式（本州除く）";
		document.form_semiorder.itemno[2].value = enpo_deliver;
		document.form_semiorder.suryo[2].value = 1;
		document.form_semiorder.sipri[2].value = "::" + area_cost * konpo_su;

		document.form_semiorder.sipri.value = "::" + ita_tanka;
	}
	else {
		document.form_semiorder.price.value = 0;
		document.form_semiorder.total.value = 0;
	};


}

function haisou_chg()
{
	if(Number(document.form_semiorder.yoko.value) + Number(document.form_semiorder.tate.value) <= ymt_size_max){
		document.getElementById('kojin_deliver').style.display = "none";
		document.getElementById('area_deliver').style.display = "none";
	}
	else{
		if(document.form_semiorder.souhu_info.value == "個人"){
			document.getElementById('kojin_deliver').style.display = "";
		}
		else{
			document.getElementById('kojin_deliver').style.display = "none";
		};
		document.getElementById('area_deliver').style.display = "";
	};
}

function Check()
{

	atu = document.form_semiorder.atu.value;
	yoko = Number(document.form_semiorder.yoko.value);
	tate = Number(document.form_semiorder.tate.value);
	suu = Number(document.form_semiorder.suu.value);


	//カートボタンクリック時アラート
	alert_check = 0;

	//縦
	$('#caution_wording3_txt').text('');
	if(document.form_semiorder.yoko.value.match(/[^0-9]/g)){
		$('#caution_wording3_txt').text('半角数字(小数点以下は不可)で入力してください。');
		alert_check = 1;
	};
	if(yoko != 0){
		if(yoko < 50 || yoko > 1500){
			$('#caution_wording3_txt').text('サイズは50～1500mmになります。');
			alert_check = 1;
		};
	};

	//横
	$('#caution_wording4_txt').text('');
	if(document.form_semiorder.tate.value.match(/[^0-9]/g)){
		$('#caution_wording4_txt').text('半角数字(小数点以下は不可)で入力してください。');
		alert_check = 1;
	};
	if(tate != 0){
		if(tate < 50 || tate > 910){
			$('#caution_wording4_txt').text('サイズは50～910mmになります。');
			alert_check = 1;
		};
	};


	//数量
	$('#suryo_ng_txt').text('');
	if(document.form_semiorder.suu.value.match(/[^0-9]/g)){
		$('#suryo_ng_txt').text('半角数字(小数点以下は不可)で入力してください。');
		alert_check = 1;
	};
	if(suu != 0){
		if(suu > 300){
			$('#suryo_ng_txt').text('301個以上は、別途お問い合わせください。');
			alert_check = 1;
		};
	};

	if(document.form_semiorder.souhu_info.value == "個人" && tate + yoko > oogata_O){
		alert_check = 1;
	};

	if(alert_check == 0 && ita_tanka != 0){
		document.form_semiorder.submit();
	}
	else{
		alert("ご注文内容が適正に入力されておりません。\n入力項目をお確かめください。\n合計金額が表示されている状態で\nカートに商品を入れてください。");
	};

}


function torisuu_kaisi(h_yoko,h_tate,hhh_x_size,hhh_y_size)
{
    //切りシロ3mmプラス
    h_yoko = h_yoko + 3;
    h_tate = h_tate + 3;

	Xx_Yy_yoko(h_yoko,h_tate,hhh_x_size,hhh_y_size);
    Xx_Yy_tate(h_yoko,h_tate,hhh_x_size,hhh_y_size);
    Xy_Yx_yoko(h_yoko,h_tate,hhh_x_size,hhh_y_size);
    Xy_Yx_tate(h_yoko,h_tate,hhh_x_size,hhh_y_size);

    tori_suu = Math.max(Xx_Yy_yoko_torisuu,Xx_Yy_tate_torisuu,Xy_Yx_yoko_torisuu,Xy_Yx_tate_torisuu);

}


function Xx_Yy_yoko(h_yoko,h_tate,hhh_x_size,hhh_y_size)
{
	//通常方向　横方向余りから計算
    X_x = Math.floor(hhh_x_size / h_yoko);
    Y_y = Math.floor(hhh_y_size / h_tate);

    torisuu = X_x * Y_y;

    if(torisuu == 0){
        Xx_Yy_yoko_torisuu = 0;
    } else {
		ita_yoko = hhh_x_size - X_x * h_yoko;
		ita_tate = hhh_y_size;

		if((ita_yoko >= h_yoko && ita_tate >= h_tate) || (ita_yoko >= h_tate && ita_tate >= h_yoko)){
			//通常方向取数
			X_x = Math.floor(ita_yoko / h_yoko);
			Y_y = Math.floor(ita_tate / h_tate);
			Xx_Yy_torisuu = X_x * Y_y;
			//逆方向取数
			X_y = Math.floor(ita_yoko / h_tate);
			Y_x = Math.floor(ita_tate / h_yoko);
			Xy_Yx_torisuu = X_y * Y_x;

			if(Xx_Yy_torisuu >= Xy_Yx_torisuu){
				torisuu = torisuu + Xx_Yy_torisuu;
			} else {
				torisuu = torisuu + Xy_Yx_torisuu;
			};
		};
		Xx_Yy_yoko_torisuu = torisuu;
	};

}


function Xx_Yy_tate(h_yoko,h_tate,hhh_x_size,hhh_y_size)
{
	//通常方向　縦方向余りから計算
    X_x = Math.floor(hhh_x_size / h_yoko);
    Y_y = Math.floor(hhh_y_size / h_tate);

    torisuu = X_x * Y_y;

    if(torisuu == 0){
        Xx_Yy_tate_torisuu = 0;
	} else {
		ita_yoko = hhh_x_size;
		ita_tate = hhh_y_size - Y_y * h_tate;

		if((ita_yoko >= h_yoko && ita_tate >= h_tate) || (ita_yoko >= h_tate && ita_tate >= h_yoko)){
			//通常方向取数
			X_x = Math.floor(ita_yoko / h_yoko);
			Y_y = Math.floor(ita_tate / h_tate);
			Xx_Yy_torisuu = X_x * Y_y;
			//逆方向取数
			X_y = Math.floor(ita_yoko / h_tate);
			Y_x = Math.floor(ita_tate / h_yoko);
			Xy_Yx_torisuu = X_y * Y_x;

			if(Xx_Yy_torisuu >= Xy_Yx_torisuu){
				torisuu = torisuu + Xx_Yy_torisuu;
			} else {
				torisuu = torisuu + Xy_Yx_torisuu;
			};
		};
		Xx_Yy_tate_torisuu = torisuu;
	};

}


function Xy_Yx_yoko(h_yoko,h_tate,hhh_x_size,hhh_y_size)
{
	//逆方向　横方向余りから計算
    X_y = Math.floor(hhh_x_size / h_tate);
    Y_x = Math.floor(hhh_y_size / h_yoko);

    torisuu = X_y * Y_x;

    if(torisuu == 0){
		Xy_Yx_yoko_torisuu = 0;
    } else {
		ita_yoko = hhh_x_size - X_y * h_tate;
		ita_tate = hhh_y_size;

		if((ita_yoko >= h_yoko && ita_tate >= h_tate) || (ita_yoko >= h_tate && ita_tate >= h_yoko)){
			//通常方向取数
			X_x = Math.floor(ita_yoko / h_yoko);
			Y_y = Math.floor(ita_tate / h_tate);
			Xx_Yy_torisuu = X_x * Y_y;
			//逆方向取数
			X_y = Math.floor(ita_yoko / h_tate);
			Y_x = Math.floor(ita_tate / h_yoko);
			Xy_Yx_torisuu = X_y * Y_x;

			if(Xx_Yy_torisuu >= Xy_Yx_torisuu){
				torisuu = torisuu + Xx_Yy_torisuu;
			} else {
				torisuu = torisuu + Xy_Yx_torisuu;
			};
		};
		Xy_Yx_yoko_torisuu = torisuu;
	};

};


function Xy_Yx_tate(h_yoko,h_tate,hhh_x_size,hhh_y_size)
{
	//逆方向　縦方向余りから計算
    X_y = Math.floor(hhh_x_size / h_tate);
    Y_x = Math.floor(hhh_y_size / h_yoko);

    torisuu = X_y * Y_x;

    if(torisuu == 0){
		Xy_Yx_tate_torisuu = 0;
	} else {
		ita_yoko = hhh_x_size;
		ita_tate = hhh_y_size - Y_x * h_yoko;

		if((ita_yoko >= h_yoko && ita_tate >= h_tate) || (ita_yoko >= h_tate && ita_tate >= h_yoko)){
			//通常方向取数
			X_x = Math.floor(ita_yoko / h_yoko);
			Y_y = Math.floor(ita_tate / h_tate);
			Xx_Yy_torisuu = X_x * Y_y;
			//逆方向取数
			X_y = Math.floor(ita_yoko / h_tate);
			Y_x = Math.floor(ita_tate / h_yoko);
			Xy_Yx_torisuu = X_y * Y_x;

			if(Xx_Yy_torisuu >= Xy_Yx_torisuu){
				torisuu = torisuu + Xx_Yy_torisuu;
			} else {
				torisuu = torisuu + Xy_Yx_torisuu;
			};
		};
		Xy_Yx_tate_torisuu = torisuu;
	};
}

function Focus_Action_Polystyrene(txt) {
	// 最後の入力項目でエンターが押された時
	if(event.keyCode == 13){
		if (txt == "yoko") {
			//キー入力を無効にする
			event.returnValue = false;
			//最初の入力項目にフォーカス当てる
			document.form_semiorder.yoko.focus();
		}
		else if (txt == "tate") {
			//キー入力を無効にする
			event.returnValue = false;
			//最初の入力項目にフォーカス当てる
			document.form_semiorder.tate.focus();
		}
		else if (txt == "suryo") {
			//キー入力を無効にする
			event.returnValue = false;
			//最初の入力項目にフォーカス当てる
			document.form_semiorder.suu.focus();
		}
		else if (txt == "tanka") {
			//キー入力を無効にする
			event.returnValue = false;
			//最初の入力項目にフォーカス当てる
			document.form_semiorder.tanka.focus();
		}
		else if (txt == "goukei") {
			//キー入力を無効にする
			event.returnValue = false;
			//最初の入力項目にフォーカス当てる
			document.form_semiorder.goukei.focus();
		};
	};
}
