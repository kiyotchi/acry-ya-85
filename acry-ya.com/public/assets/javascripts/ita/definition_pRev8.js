/******************************************************/
/*                                                    */
/*       ポリカ加工＜セミオーダー＞                   */
/*                                                    */
/*       17/04/10 新規作成                            */
/*       17/09/07 Raquaシリーズ廃番                   */
/*       17/10/10 ECA960UU 2tサイズ規制               */
/*       17/10/30 ECA960UU 2tサイズ復活               */
/*       18/01/31 CGWPP20追加＆メーカー送料変更       */
/*       18/09/01 過少サイズ購入可能に変更            */
/*       18/09/25 価格改定                            */
/*       19/04/23 AGC送料変更（￥3000）               */
/*       21/02/18 AGC最大サイズ変更                   */
/*       21/05/11 ベークライト製品価格改定            */
/*       22/08/16 ベークライト製品価格改定            */
/*       22/10/14 AGC製品価格改定                     */
/*       23/04/19 クリアー片面マット(両面耐候)2t追加  */
/*       23/09/14 価格改定                            */
/*       24/09/13 価格改定                            */
/******************************************************/

var userAgent = window.navigator.userAgent.toLowerCase();
var bun = new Array; //split関数用(分割)
var h_atu_list = new Array; //厚みリスト作成用
var h_atu = new Array; //厚み参照用
var h_x_size = new Array(1);
var h_y_size = new Array(1);
var tori_suu = new Array(1);
var iro = new Array(1);
var hinban = new Array(1);
var fraise_flg = new Array(1);
var nonglea_flg = new Array(1);
var torisuTanka = 0;
var juryoTanka = 0;

xx = 0;

xxx = 0;

yyy = 0;

var alert_check = new Array(1);

var zairyou_flag = 1;

ita_tanka = 0;

kakou_tanka = 0;

//社内加工発生時の手間賃
process_kei = 0.1;

//材料単価計算　クリアー時適用係数
clear_k = 1.3;

//材料値上率
neage = 1.05;

//材料単価計算　色板時適用係数
iro_k = 1.6;

//基本係数
kihon_keisuu = 2.2;

var hijuu = new Array(1); //材料比重
hijuu = 1.2;

//消費税と値上率を掛けた数値
//ita_zei = 1.07;
ita_zei = 1;

//社内加工調整最低金額
min_cost = 300;

//鋭角判断値
angle_c = 1.74;

//AGCメーカー送料
send = 3000;
agcPostage = 3000;

// ベークライト送料
bakelitePostage = 2000;

var ana_kei = new Array;
var ana_m_x = new Array;
var ana_m_y = new Array;
var nuki_x1 = new Array;
var nuki_y1 = new Array;
var nuki_x2 = new Array;
var nuki_y2 = new Array;
var nuki_r = new Array;
var m_ana_kei = new Array;
var m_ana_m_x = new Array;
var m_ana_m_y = new Array;
var flag = new Array;



//仕入値 ＝ 【【メーカー価格 * 掛率】 * 値上率】
//ポリカ板材の種類
var material_list_p_cnt = 76;
var h_atu_list = new Array(material_list_p_cnt); //厚みリスト作成用
var material_list_p = new Array();
//ベークライト用(重量計算)
//色,横サイズ,縦サイズ,板厚,仕入値,品番
material_list_p.push('クリアー(両面耐候),2,1350,2500,1000,ECK100UU');
material_list_p.push('クリアー(両面耐候),3,1350,2500,1200,ECK100UU');
material_list_p.push('クリアー(両面耐候),4,1350,2500,1200,ECK100UU');
material_list_p.push('クリアー(両面耐候),5,1350,2500,1200,ECK100UU');
material_list_p.push('クリアー(両面耐候),6,1350,2500,1200,ECK100UU');
material_list_p.push('クリアー(両面耐候),8,1350,2500,1200,ECK100UU');
material_list_p.push('クリアー(両面耐候),10,1350,2000,1200,ECK100UU');
material_list_p.push('クリアー(一般),12,1958,2000,1000,CGCPPC0');
material_list_p.push('クリアー(片面耐擦傷・耐候),3,3106,2500,2000,CGCPP30H');
material_list_p.push('クリアー(片面耐擦傷・耐候),5,2810,2500,2000,CGCPP50H');
material_list_p.push('クリアー(片面耐擦傷・耐候),8,2643,2500,2000,CGCPP80H');
material_list_p.push('クリアー(両面耐擦傷・耐候),3,3628,2500,2000,CGCPP30HH');
material_list_p.push('クリアー(両面耐擦傷・耐候),5,3202,2500,2000,CGCPP50HH');
material_list_p.push('クリアー(両面耐擦傷・耐候),8,2885,2500,2000,CGCPP80HH');
material_list_p.push('クリアー片面マット(両面耐候),2,1418,2500,1000,ECK100SUU');
material_list_p.push('クリアー片面マット(両面耐候),3,1418,2500,1200,ECK100SUU');
material_list_p.push('クリアー片面マット(両面耐候),5,1418,2500,1200,ECK100SUU');
material_list_p.push('クリアー片面マット(両面耐候),6,1418,2500,1200,ECK100SUU');
material_list_p.push('クリアー片面マット(熱線カット・両面耐候),2,1553,2500,1000,ECA107SUU');
material_list_p.push('クリアー片面マット(熱線カット・両面耐候),3,1553,2500,1200,ECA107SUU');
material_list_p.push('クリアー片面マット(熱線カット・両面耐候),5,1553,2500,1200,ECA107SUU');
material_list_p.push('クリアー両面マット(両面耐候),3,1418,2500,1200,ECK100MUU');
material_list_p.push('クリアー両面マット(両面耐候),4,1418,2500,1200,ECK100MUU');
material_list_p.push('クリアー両面マット(両面耐候),5,1418,2500,1200,ECK100MUU');
material_list_p.push('クリアー両面マット(両面耐候),8,1418,2500,1200,ECK100MUU');
material_list_p.push('シルク調クリアー両面マット（両面耐候）,2,1418,2500,1200,ECK100GUU');
material_list_p.push('シルク調クリアー両面マット（両面耐候）,3,1418,2500,1200,ECK100GUU');
material_list_p.push('シルク調クリアー両面マット（両面耐候）,4,1418,2500,1200,ECK100GUU');
material_list_p.push('シルク調クリアー両面マット（両面耐候）,5,1418,2500,1200,ECK100GUU');
material_list_p.push('シルク調クリアー両面マット（両面耐候）,8,1418,2500,1200,ECK100GUU');
material_list_p.push('ガラスクリアー(両面耐候),3,1485,2500,1200,ECK2309UU');
material_list_p.push('ガラスクリアー(両面耐候),5,1485,2500,1200,ECK2309UU');
material_list_p.push('ガラスクリアー(両面耐候),8,1485,2500,1200,ECK2309UU');
material_list_p.push('ガラスクリアー両面マット(両面耐候),3,1553,2500,1200,ECK2309MUU');
material_list_p.push('ガラスクリアー両面マット(両面耐候),4,1553,2500,1200,ECK2309MUU');
material_list_p.push('ガラスクリアー両面マット(両面耐候),5,1553,2500,1200,ECK2309MUU');
material_list_p.push('シルク調ガラス色両面マット（両面耐候）,2,1553,2500,1200,ECK2309GUU');
material_list_p.push('シルク調ガラス色両面マット（両面耐候）,3,1553,2500,1200,ECK2309GUU');
material_list_p.push('シルク調ガラス色両面マット（両面耐候）,4,1553,2500,1200,ECK2309GUU');
material_list_p.push('シルク調ガラス色両面マット（両面耐候）,5,1553,2500,1200,ECK2309GUU');
material_list_p.push('シルク調ガラス色両面マット（両面耐候）,8,1553,2500,1200,ECK2309GUU');
material_list_p.push('オパール(両面耐候),2,1620,2500,1200,ECD3031UU');
material_list_p.push('オパール(両面耐候),3,1620,2500,1200,ECD3031UU');
material_list_p.push('オパール(両面耐候),5,1620,2500,1200,ECD3031UU');
material_list_p.push('ブルースモーク(両面耐候),3,1485,2500,1200,ECK941UU');
material_list_p.push('ブルースモーク(両面耐候),5,1485,2500,1200,ECK941UU');
material_list_p.push('ブルースモーク両面マット(両面耐候),3,1553,2500,1200,ECK941M');
material_list_p.push('ブルースモーク両面マット(両面耐候),5,1553,2500,1200,ECK941M');
material_list_p.push('グレースモーク(熱線カット・両面耐候),2,1485,2500,1000,ECA943UU');
material_list_p.push('グレースモーク(熱線カット・両面耐候),3,1485,2500,1200,ECA943UU');
material_list_p.push('グレースモーク(熱線カット・両面耐候),5,1485,2500,1200,ECA943UU');
material_list_p.push('グレースモーク(熱線カット・両面耐候),8,1485,2500,1200,ECA943UU');
material_list_p.push('グレースモーク片面マット(熱線カット・両面耐候),2,1553,2500,1000,ECA943SUU');
material_list_p.push('グレースモーク片面マット(熱線カット・両面耐候),3,1553,2500,1200,ECA943SUU');
material_list_p.push('グレースモーク片面マット(熱線カット・両面耐候),5,1553,2500,1200,ECA943SUU');
material_list_p.push('ブラウンスモーク(熱線カット・両面耐候),2,1485,2500,1000,ECA960UU');
material_list_p.push('ブラウンスモーク(熱線カット・両面耐候),3,1485,2500,1200,ECA960UU');
material_list_p.push('ブラウンスモーク(熱線カット・両面耐候),5,1485,2500,1200,ECA960UU');
material_list_p.push('ブラウンスモーク(熱線カット・両面耐候),6,1485,2500,1200,ECA960UU');
material_list_p.push('ブラウンスモーク(熱線カット・両面耐候),8,1485,2500,1200,ECA960UU');
material_list_p.push('ブラウンスモーク片面マット(熱線カット・両面耐候),2,1553,2500,1000,ECA960SUU');
material_list_p.push('ブラウンスモーク片面マット(熱線カット・両面耐候),3,1553,2500,1200,ECA960SUU');
material_list_p.push('ブラウンスモーク片面マット(熱線カット・両面耐候),5,1553,2500,1200,ECA960SUU');
material_list_p.push('ブラウンスモーク両面マット(両面耐候),3,1553,2500,1200,ECK960M');
material_list_p.push('ブラウンスモーク両面マット(両面耐候),5,1553,2500,1200,ECK960M');
material_list_p.push('ブロンズ(両面耐候),3,1485,2500,1200,ECK961UU');
material_list_p.push('ブロンズ(両面耐候),5,1485,2500,1200,ECK961UU');
material_list_p.push('ブロンズ(両面耐候),8,1485,2500,1200,ECK961UU');
material_list_p.push('ブロンズ片面マット(両面耐候),3,1553,2500,1200,ECK961SUU');
material_list_p.push('ブロンズ片面マット(両面耐候),5,1553,2500,1200,ECK961SUU');
material_list_p.push('ポリッシュホワイト,2,2158,2500,1000,CGWPP20');
material_list_p.push('ポリッシュホワイト,3,2152,2500,2000,CGWPP30');
material_list_p.push('ポリッシュホワイト,5,2155,2500,2000,CGWPP50');
//ポリッシュ黒だけ規格サイズ単価
material_list_p.push('ポリッシュ黒(一般),2,2940,2006,1006,CGZPP20');
material_list_p.push('ポリッシュ黒(一般),3,2940,2006,1006,CGZPP30');
material_list_p.push('ポリッシュ黒(一般),5,2940,2006,1006,CGZPP50');

//AGC用 ※クリアー(両面耐候)はベークライトだが取数計算用で配列に入れている
//色,横サイズ,縦サイズ,板厚,仕入値,品番
var material_list_pAgc = new Array();
material_list_pAgc.push('クリアー(両面耐候),2,5280,1990,996,ECK100UU');
material_list_pAgc.push('クリアー(両面耐候),3,7920,1990,996,ECK100UU');
material_list_pAgc.push('クリアー(両面耐候),4,10560,1990,996,ECK100UU');
material_list_pAgc.push('クリアー(両面耐候),5,13200,1990,996,ECK100UU');
material_list_pAgc.push('クリアー(両面耐候),6,15840,1990,996,ECK100UU');
material_list_pAgc.push('クリアー(両面耐候),8,21120,1990,996,ECK100UU');
material_list_pAgc.push('クリアー(両面耐候),10,26400,1990,996,ECK100UU');
material_list_pAgc.push('クリアー(一般),12,47010,2006,1006,CGCPPC0');
material_list_pAgc.push('クリアー(片面耐擦傷・耐候),3,23360,2006,1006,CGCPP30H');
material_list_pAgc.push('クリアー(片面耐擦傷・耐候),5,35220,2006,1006,CGCPP50H');
material_list_pAgc.push('クリアー(片面耐擦傷・耐候),8,43960,2006,1006,CGCPP80H');
material_list_pAgc.push('クリアー(両面耐擦傷・耐候),3,27120,2006,1006,CGCPP30HH');
material_list_pAgc.push('クリアー(両面耐擦傷・耐候),5,39920,2006,1006,CGCPP50HH');
material_list_pAgc.push('クリアー(両面耐擦傷・耐候),8,536400,2006,1006,CGCPP80HH');
material_list_pAgc.push('ポリッシュホワイト,2,9630,2006,1006,CGWPP20');
material_list_pAgc.push('ポリッシュホワイト,3,14430,2006,1006,CGWPP30');
material_list_pAgc.push('ポリッシュホワイト,5,24550,2006,1006,CGWPP50');
material_list_pAgc.push('ポリッシュ黒(一般),2,15100,2006,1006,CGZPP20');
material_list_pAgc.push('ポリッシュ黒(一般),3,22650,2006,1006,CGZPP30');
material_list_pAgc.push('ポリッシュ黒(一般),5,35770,2006,1006,CGZPP50');


var iro_old = new Array(1);
var atu_old = new Array(1);
var area_check1 = 0;
var area_check2 = 0;
var yoko_check = new Array(1);
var tate_check = new Array(1);
