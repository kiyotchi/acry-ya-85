var division_c = new Array; //split関数用(分割)
var division_t = new Array; //split関数用(分割)
var zairyou_tanka = new Array(1);
var kiri_flag = new Array(1);
var hon_suu = new Array(1);


//材料数
material_cnt = 24;
//ポリカorアクリル他，板厚
var material_list = new Array(material_cnt);
material_list[0] = "A,1";
material_list[1] = "A,2";
material_list[2] = "A,3";
material_list[3] = "A,5";
material_list[4] = "A,8";
material_list[5] = "A,10";
material_list[6] = "A,13";
material_list[7] = "A,15";
material_list[8] = "A,20";
material_list[9] = "A,25";
material_list[10] = "A,30";
material_list[11] = "A,35";
material_list[12] = "A,40";
material_list[13] = "A,45";
material_list[14] = "A,50";
material_list[15] = "P,2";
material_list[16] = "P,3";
material_list[17] = "P,4";
material_list[18] = "P,5";
material_list[19] = "P,6";
material_list[20] = "P,8";
material_list[21] = "P,10";
material_list[22] = "P,12";
material_list[23] = "P,15";


//色数
color_cnt = 40;
//ポリカorアクリル他，色
var color_list = new Array(color_cnt);
color_list[0] = "A,クリアー";
color_list[1] = "A,グレースモーク";
color_list[2] = "A,ブラウンスモーク";
color_list[3] = "A,ブラック";
color_list[4] = "A,ホワイト";
color_list[5] = "A,オパール";
color_list[6] = "A,クリアー両面マット";
color_list[7] = "A,ブラック両面マット";
color_list[8] = "A,ホワイト両面マット";
color_list[9] = "A,ピンクエッジ";
color_list[10] = "A,ブルーエッジ";
color_list[11] = "A,ガラスエッジ";
color_list[12] = "A,蛍光オレンジエッジ";
color_list[13] = "A,蛍光グリーンエッジ";
color_list[14] = "A,蛍光バイオレットエッジ";
color_list[15] = "A,蛍光ピンクエッジ";
color_list[16] = "A,オレンジ";
color_list[17] = "A,カーマイン";
color_list[18] = "A,スカイブルー";
color_list[19] = "A,レモン";
color_list[20] = "A,ミラー";
color_list[21] = "A,ハーフミラー(MRH001T30)";
color_list[22] = "A,UVカットクリアー";
color_list[23] = "A,クリアー耐擦傷(両面)MR";
color_list[24] = "A,クリアーノングレア(片面)No1";
color_list[25] = "A,クリアー制電(両面)SC";
color_list[26] = "P,クリアー";
color_list[27] = "P,クリアーマット";
color_list[28] = "P,オパール(乳半)";
color_list[29] = "P,ホワイト";
color_list[30] = "P,ガラスクリアー";
color_list[31] = "P,ガラスクリアーマット";
color_list[32] = "P,ブルースモーク";
color_list[33] = "P,ブルースモークマット";
color_list[34] = "P,ブラウンスモーク";
color_list[35] = "P,ブラウンスモークマット";
color_list[36] = "P,グレースモーク";
color_list[37] = "P,グレースモークマット";
color_list[38] = "P,ブロンズ";
color_list[39] = "P,ブロンズマット";


function Chg()
{
	n = 0;

	//色リスト作成
	var iro_list = new Array;
	c = 1;		//色リスト項番
	iro_list[0] = "選択下さい";

	for(i = 0; i < color_cnt; i++){
		division_c = color_list[i].split(",");
		if(document.sendform.材料.value == "ポリカーボネート"){
			//ポリカのリスト作成
			if(division_c[0] == "P"){
				if(c == 1){
					iro_list[c] = division_c[1];
					c++;
				}
				else if(iro_list[n - 1] != division_c[1]){
					iro_list[c] = division_c[1];
					c++;
				};
			}
		}
		else{
			//アクリル・他のリスト作成
			if(division_c[0] == "A"){
				if(n == 1){
					iro_list[c] = division_c[1];
					c++;
				}
				else if(iro_list[n - 1] != division_c[1]){
					iro_list[c] = division_c[1];
					c++;
				};
			};
		};
	};

	//色リスト代入
	document.sendform.色.length = c;
	for(i = 0; i < c; i++){
		document.sendform.色[i].text = iro_list[i];
		document.sendform.色[i].value = iro_list[i];
	};

	//板厚リスト作成
	var thickness_list = new Array;
	n = 1;		//板厚リスト項番
	thickness_list[0] = "選択下さい";

	for(i = 0; i < material_cnt; i++){
		division_t = material_list[i].split(",");
		if(document.sendform.材料.value == "ポリカーボネート"){
			//ポリカのリスト作成
			if(division_t[0] == "P"){
				if(n == 1){
					thickness_list[n] = division_t[1];
					n++;
				}
				else if(thickness_list[n - 1] != division_t[1]){
					thickness_list[n] = division_t[1];
					n++;
				};
			}
		}
		else{
			//アクリル・他のリスト作成
			if(division_t[0] == "A"){
				if(n == 1){
					thickness_list[n] = division_t[1];
					n++;
				}
				else if(thickness_list[n - 1] != division_t[1]){
					thickness_list[n] = division_t[1];
					n++;
				};
			};
		};
	};

	//板厚リスト代入
	document.sendform.厚さ.length = n;
	for(i = 0; i < n; i++){
		document.sendform.厚さ[i].text = thickness_list[i];
		document.sendform.厚さ[i].value = thickness_list[i];
	};

}

