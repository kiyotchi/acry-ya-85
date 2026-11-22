/*******************************************/
/*                                         */
/*       キャストクリアー＜規格サイズ＞    */
/*                                         */
/*       17/12/22 新規作成                 */
/*       20/08/06 全角ダッシュ「〜」対応     */
/*******************************************/

//split関数用(分割)
var division = new Array();

//数量割引
var suryo_wari_cnt = 20;
var suryo_wari = new Array(suryo_wari_cnt);
suryo_wari[0] = 0;
suryo_wari[1] = 0.15;
suryo_wari[2] = 0.2;
suryo_wari[3] = 0.25;
suryo_wari[4] = 0.3;
suryo_wari[5] = 0.35;
suryo_wari[6] = 0.4;
suryo_wari[7] = 0.45;
suryo_wari[8] = 0.5;
suryo_wari[9] = 0.55;
suryo_wari[10] = 0.6;
suryo_wari[11] = 0.65;
suryo_wari[12] = 0.7;
suryo_wari[13] = 0.75;
suryo_wari[14] = 0.8;
suryo_wari[15] = 0.85;
suryo_wari[16] = 0.9;
suryo_wari[17] = 0.93;
suryo_wari[18] = 0.96;
suryo_wari[19] = 1;

arr1 = 0.27;
arr2 = 0.15;
//add
const hiju = 1.19;
const smtm_weight = 30;
const smtm_deliver = 2000;

let width=0;
let height=0;
let weight=0;
let deliver_price = 0;

/* re.add */
var tax = taxRateValue;
/* re.comment
var tax = 1.08;
*/

var itemno;
var ita_name;
var tanka;

var alert_check;

//アクリル板材の種類
var material_cnt = 51;
//色,横ｘ縦,板厚,仕入値
var material_list_s = new Array(material_cnt);

//品番、品名、板厚、仕入
material_list_s[0]="CAP4530-000,アクリル規格板・キャスト 000_クリア 450x300mm_2mm厚,2,4337,450x300,1860,930";
material_list_s[1]="CAP6045-000,アクリル規格板・キャスト 000_クリア 600x450mm_2mm厚,2,4337,600x450,1860,930";
material_list_s[2]="CAP9145-000,アクリル規格板・キャスト 000_クリア 910x450mm_2mm厚,2,4337,910x450,1860,930";
material_list_s[3]="CAP4530-000,アクリル規格板・キャスト 000_クリア 450x300mm_3mm厚,3,6514,450x300,1860,930";
material_list_s[4]="CAP6045-000,アクリル規格板・キャスト 000_クリア 600x450mm_3mm厚,3,6514,600x450,1860,930";
material_list_s[5]="CAP9145-000,アクリル規格板・キャスト 000_クリア 910x450mm_3mm厚,3,6514,910x450,1860,930";
material_list_s[6]="CAP4530-000,アクリル規格板・キャスト 000_クリア 450x300mm_5mm厚,5,10336,450x300,1860,930";
material_list_s[7]="CAP6045-000,アクリル規格板・キャスト 000_クリア 600x450mm_5mm厚,5,10336,600x450,1860,930";
material_list_s[8]="CAP9145-000,アクリル規格板・キャスト 000_クリア 910x450mm_5mm厚,5,10336,910x450,1860,930";
material_list_s[9]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1380x1100mm_1.5mm厚（※メーカー直送・公差0〜+9）,1.5,3666,1380x1100,1380,1100";
material_list_s[10]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1380x1100mm_2mm厚（※メーカー直送・公差0〜+9）,2,3697,1380x1100,1380,1100";
material_list_s[11]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1380x1100mm_3mm厚（※メーカー直送・公差0〜+9）,3,5540,1380x1100,1380,1100";
material_list_s[12]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1380x1100mm_4mm厚（※メーカー直送・公差0〜+9）,4,7035,1380x1100,1380,1100";
material_list_s[13]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1380x1100mm_5mm厚（※メーカー直送・公差0〜+9）,5,8779,1380x1100,1380,1100";
material_list_s[14]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1380x1100mm_6mm厚（※メーカー直送・公差0〜+9）,6,10553,1380x1100,1380,1100";
material_list_s[15]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1360x1090mm_8mm厚（※メーカー直送・公差0〜+9）,8,13555,1360x1090,1360,1090";
material_list_s[16]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1360x1090mm_10mm厚（※メーカー直送・公差0〜+9）,10,16856,1360x1090,1360,1090";
material_list_s[17]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1340x1080mm_13mm厚（※メーカー直送・公差0〜+9）,13,23854,1340x1080,1340,1080";
material_list_s[18]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1340x1080mm_15mm厚（※メーカー直送・公差0〜+9）,15,26093,1340x1080,1340,1080";
material_list_s[19]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1340x1080mm_18mm厚（※メーカー直送・公差0〜+9）,18,33582,1340x1080,1340,1080";
material_list_s[20]="CAP1311-000,アクリル規格板・キャスト 000_クリア 1340x1080mm_20mm厚（※メーカー直送・公差0〜+9）,20,37310,1340x1080,1340,1080";
material_list_s[21]="CAP1891-000,アクリル規格板・キャスト 000_クリア 1860x930mm_2mm厚（※メーカー直送・公差0〜+9）,2,4337,1860x930,1860,930";
material_list_s[22]="CAP1891-000,アクリル規格板・キャスト 000_クリア 1860x930mm_3mm厚（※メーカー直送・公差0〜+9）,3,6514,1860x930,1860,930";
material_list_s[23]="CAP1891-000,アクリル規格板・キャスト 000_クリア 1860x930mm_4mm厚（※メーカー直送・公差0〜+9）,4,8742,1860x930,1860,930";
material_list_s[24]="CAP1891-000,アクリル規格板・キャスト 000_クリア 1860x930mm_5mm厚（※メーカー直送・公差0〜+9）,5,10336,1860x930,1860,930";
material_list_s[25]="CAP1891-000,アクリル規格板・キャスト 000_クリア 1860x930mm_6mm厚（※メーカー直送・公差0〜+9）,6,13108,1860x930,1860,930";
material_list_s[26]="CAP1891-000,アクリル規格板・キャスト 000_クリア 1840x920mm_8mm厚（※メーカー直送・公差0〜+9）,8,17482,1840x920,1840,920";
material_list_s[27]="CAP1891-000,アクリル規格板・キャスト 000_クリア 1840x920mm_10mm厚（※メーカー直送・公差0〜+9）,10,21837,1840x920,1840,920";
material_list_s[28]="CAP1891-000,アクリル規格板・キャスト 000_クリア 1820x910mm_13mm厚（※メーカー直送・公差0〜+9）,13,29369,1820x910,1820,910";
material_list_s[29]="CAP1891-000,アクリル規格板・キャスト 000_クリア 1820x910mm_15mm厚（※メーカー直送・公差0〜+9）,15,31999,1820x910,1820,910";
material_list_s[30]="CAP1891-000,アクリル規格板・キャスト 000_クリア 1820x910mm_18mm厚（※メーカー直送・公差0〜+9）,18,38402,1820x910,1820,910";
material_list_s[31]="CAP1891-000,アクリル規格板・キャスト 000_クリア 1820x910mm_20mm厚（※メーカー直送・公差0〜+9）,20,48352,1820x910,1820,910";
material_list_s[32]="CAP2010-000,アクリル規格板・キャスト 000_クリア 2040x1040mm_2mm厚（※メーカー直送・公差0〜+9）,2,5217,2040x1040,2040,1040";
material_list_s[33]="CAP2010-000,アクリル規格板・キャスト 000_クリア 2040x1040mm_3mm厚（※メーカー直送・公差0〜+9）,3,7804,2040x1040,2040,1040";
material_list_s[34]="CAP2010-000,アクリル規格板・キャスト 000_クリア 2040x1040mm_4mm厚（※メーカー直送・公差0〜+9）,4,9926,2040x1040,2040,1040";
material_list_s[35]="CAP2010-000,アクリル規格板・キャスト 000_クリア 2040x1040mm_5mm厚（※メーカー直送・公差0〜+9）,5,12401,2040x1040,2040,1040";
material_list_s[36]="CAP2010-000,アクリル規格板・キャスト 000_クリア 2040x1040mm_6mm厚（※メーカー直送・公差0〜+9）,6,14871,2040x1040,2040,1040";
material_list_s[37]="CAP2010-000,アクリル規格板・キャスト 000_クリア 2020x1030mm_8mm厚（※メーカー直送・公差0〜+9）,8,19871,2020x1030,2020,1030";
material_list_s[38]="CAP2010-000,アクリル規格板・キャスト 000_クリア 2020x1030mm_10mm厚（※メーカー直送・公差0〜+9）,10,24828,2020x1030,2020,1030";
material_list_s[39]="CAP2010-000,アクリル規格板・キャスト 000_クリア 2000x1020mm_13mm厚（※メーカー直送・公差0〜+9）,13,35101,2000x1020,2000,1020";
material_list_s[40]="CAP2010-000,アクリル規格板・キャスト 000_クリア 2000x1020mm_15mm厚（※メーカー直送・公差0〜+9）,15,38321,2000x1020,2000,1020";
material_list_s[41]="CAP2010-000,アクリル規格板・キャスト 000_クリア 2000x1020mm_18mm厚（※メーカー直送・公差0〜+9）,18,51963,2000x1020,2000,1020";
material_list_s[42]="CAP2010-000,アクリル規格板・キャスト 000_クリア 2000x1020mm_20mm厚（※メーカー直送・公差0〜+9）,20,54618,2000x1020,2000,1020";
material_list_s[43]="CAP2412-000,アクリル規格板・キャスト 000_クリア 2430x1220mm_25mm厚（※メーカー直送・公差0〜+9）,25,93820,2430x1220,2430,1220";
material_list_s[44]="CAP2311-000,アクリル規格板・キャスト 000_クリア 2380x1180mm_30mm厚（※メーカー直送・公差0〜+9）,30,112599,2380x1180,2380,1180";
material_list_s[45]="CAP2311-000,アクリル規格板・キャスト 000_クリア 2310x1120mm_40mm厚（※メーカー直送・公差0〜+9）,40,211426,2310x1120,2310,1120";
material_list_s[46]="CAP2211-000,アクリル規格板・キャスト 000_クリア 2260x1100mm_50mm厚（※メーカー直送・公差0〜+9）,50,264231,2260x1100,2260,1100";
material_list_s[47]="CAP1212-000,アクリル規格板・キャスト 000_クリア 1220x1210mm_25mm厚（※メーカー直送・公差0〜+9）,25,46907,1220x1210,1220,1210";
material_list_s[48]="CAP1111-000,アクリル規格板・キャスト 000_クリア 1185x1180mm_30mm厚（※メーカー直送・公差0〜+9）,30,56300,1185x1180,1185,1180";
material_list_s[49]="CAP1111-000,アクリル規格板・キャスト 000_クリア 1150x1120mm_40mm厚（※メーカー直送・公差0〜+9）,40,105713,1150x1120,1150,1120";
material_list_s[50]="CAP1111-000,アクリル規格板・キャスト 000_クリア 1125x1100mm_50mm厚（※メーカー直送・公差0〜+9）,50,132116,1125x1100,1125,1100";

//リスト分割用変数
var division = new Array;
var v_size = new Array(1);

//品番用
var itemno = new Array(1);

//消費税と値上率を掛けた数値
var material_tax = 1.07;

//比重
var specific_gravity = 1.19;

var hijuu = 1.19;

//色特性のチェック用
var check_color_s = 0;

//アラートチェック用
var alert_check_s = new Array(1);

//定尺_余白チェック用
var size_check = 0;

//var yamato_kei = 1.025;  //ヤマト


//材料種類係数
var material_coefficient_list_s = new Array(2);
material_coefficient_list_s[0] = 1.3; //クリアー
material_coefficient_list_s[1] = 1.6; //クリアー以外

/*
//材料合計単価係数
var material_cost_coefficient_list_s = new Array(2);
//横 + 縦 = 2000mm未満
material_cost_coefficient_list_s[0] = new Array(15);
material_cost_coefficient_list_s[0][0] = 1.57; //取数単価 * 数量 = 1円以上〜250円未満
material_cost_coefficient_list_s[0][1] = 1.45; //取数単価 * 数量 = 250円以上〜500円未満
material_cost_coefficient_list_s[0][2] = 1.43; //取数単価 * 数量 = 500円以上〜1000円未満
material_cost_coefficient_list_s[0][3] = 1.39; //取数単価 * 数量 = 1000円以上〜1500円未満
material_cost_coefficient_list_s[0][4] = 1.3; //取数単価 * 数量 = 1500円以上〜2000円未満
material_cost_coefficient_list_s[0][5] = 1.28; //取数単価 * 数量 = 2000円以上〜2500円未満
material_cost_coefficient_list_s[0][6] = 1.25; //取数単価 * 数量 = 2500円以上〜3000円未満
material_cost_coefficient_list_s[0][7] = 1.25; //取数単価 * 数量 = 3000円以上〜5000円未満
material_cost_coefficient_list_s[0][8] = 1.25; //取数単価 * 数量 = 5000円以上〜8000円未満
material_cost_coefficient_list_s[0][9] = 1.25; //取数単価 * 数量 = 8000円以上〜11000円未満
material_cost_coefficient_list_s[0][10] = 1.25; //取数単価 * 数量 = 11000円以上〜15000円未満
material_cost_coefficient_list_s[0][11] = 1.22; //取数単価 * 数量 = 15000円以上〜40000円未満
material_cost_coefficient_list_s[0][12] = 1.22; //取数単価 * 数量 = 40000円以上〜100000円未満
material_cost_coefficient_list_s[0][13] = 1.2; //取数単価 * 数量 = 100000円以上〜500000円未満
material_cost_coefficient_list_s[0][14] = 1.2; //取数単価 * 数量 = 500000円以上
//横 + 縦 = 2000mm以上
material_cost_coefficient_list_s[1] = new Array(15);
material_cost_coefficient_list_s[1][0] = 1.7; //取数単価 * 数量 = 1円以上〜250円未満
material_cost_coefficient_list_s[1][1] = 1.6; //取数単価 * 数量 = 250円以上〜500円未満
material_cost_coefficient_list_s[1][2] = 1.57; //取数単価 * 数量 = 500円以上〜1000円未満
material_cost_coefficient_list_s[1][3] = 1.52; //取数単価 * 数量 = 1000円以上〜1500円未満
material_cost_coefficient_list_s[1][4] = 1.5; //取数単価 * 数量 = 1500円以上〜2000円未満
material_cost_coefficient_list_s[1][5] = 1.45; //取数単価 * 数量 = 2000円以上〜2500円未満
material_cost_coefficient_list_s[1][6] = 1.4; //取数単価 * 数量 = 2500円以上〜3000円未満
material_cost_coefficient_list_s[1][7] = 1.35; //取数単価 * 数量 = 3000円以上〜5000円未満
material_cost_coefficient_list_s[1][8] = 1.3; //取数単価 * 数量 = 5000円以上〜8000円未満
material_cost_coefficient_list_s[1][9] = 1.3; //取数単価 * 数量 = 8000円以上〜11000円未満
material_cost_coefficient_list_s[1][10] = 1.25; //取数単価 * 数量 = 11000円以上〜15000円未満
material_cost_coefficient_list_s[1][11] = 1.22; //取数単価 * 数量 = 15000円以上〜40000円未満
material_cost_coefficient_list_s[1][12] = 1.22; //取数単価 * 数量 = 40000円以上〜100000円未満
material_cost_coefficient_list_s[1][13] = 1.2; //取数単価 * 数量 = 100000円以上〜500000円未満
material_cost_coefficient_list_s[1][14] = 1.2; //取数単価 * 数量 = 500000円以上
*/

//カット工賃リスト
var cut_cost_list_s = new Array(2);
//板厚2〜5mm
cut_cost_list_s[0] = new Array(4);
cut_cost_list_s[0][0] = 300; //横 + 縦 = 300mm未満
cut_cost_list_s[0][1] = 450; //横 + 縦 = 300以上〜500mm未満
cut_cost_list_s[0][2] = 600; //横 + 縦 = 500以上〜1000mm未満
cut_cost_list_s[0][3] = 900; //横 + 縦 = 1000mm以上
//板厚8〜15mm
cut_cost_list_s[1] = new Array(4);
cut_cost_list_s[1][0] = 400; //横 + 縦 = 300mm未満
cut_cost_list_s[1][1] = 600; //横 + 縦 = 300以上〜500mm未満
cut_cost_list_s[1][2] = 700; //横 + 縦 = 500以上〜1000mm未満
cut_cost_list_s[1][3] = 1000; //横 + 縦 = 1000mm以上


//加工割引
var process_discount_list_s = new Array(2);
//通常
process_discount_list_s[0] = new Array(2);
//横 + 縦 = 2000mm未満
process_discount_list_s[0][0] = new Array(10);
process_discount_list_s[0][0][0] = 0.3; //数量1ヶ
process_discount_list_s[0][0][1] = 0.3; //数量2ヶ
process_discount_list_s[0][0][2] = 0.3; //数量3〜4ヶ
process_discount_list_s[0][0][3] = 0.3; //数量5〜9ヶ
process_discount_list_s[0][0][4] = 0.3; //数量10〜19ヶ
process_discount_list_s[0][0][5] = 0.3; //数量20〜29ヶ
process_discount_list_s[0][0][6] = 0.3; //数量30〜99ヶ
process_discount_list_s[0][0][7] = 0.21; //数量100〜199ヶ
process_discount_list_s[0][0][8] = 0.18; //数量200〜299ヶ
process_discount_list_s[0][0][9] = 0.16; //数量300ヶまで
//横 + 縦 = 2000mm以上
process_discount_list_s[0][1] = new Array(10);
process_discount_list_s[0][1][0] = 0.5; //数量1ヶ
process_discount_list_s[0][1][1] = 0.49; //数量2ヶ
process_discount_list_s[0][1][2] = 0.48; //数量3〜4ヶ
process_discount_list_s[0][1][3] = 0.47; //数量5〜9ヶ
process_discount_list_s[0][1][4] = 0.39; //数量10〜19ヶ
process_discount_list_s[0][1][5] = 0.34; //数量20〜29ヶ
process_discount_list_s[0][1][6] = 0.29; //数量30〜99ヶ
process_discount_list_s[0][1][7] = 0.23; //数量100〜199ヶ
process_discount_list_s[0][1][8] = 0.2; //数量200〜299ヶ
process_discount_list_s[0][1][9] = 0.18; //数量300ヶまで

//ミラーの時
process_discount_list_s[1] = new Array(2);
//横 + 縦 = 2000mm未満
process_discount_list_s[1][0] = new Array(10);
process_discount_list_s[1][0][0] = 0.32; //数量1ヶ
process_discount_list_s[1][0][1] = 0.32; //数量2ヶ
process_discount_list_s[1][0][2] = 0.32; //数量3〜4ヶ
process_discount_list_s[1][0][3] = 0.32; //数量5〜9ヶ
process_discount_list_s[1][0][4] = 0.32; //数量10〜19ヶ
process_discount_list_s[1][0][5] = 0.32; //数量20〜29ヶ
process_discount_list_s[1][0][6] = 0.32; //数量30〜99ヶ
process_discount_list_s[1][0][7] = 0.26; //数量100〜199ヶ
process_discount_list_s[1][0][8] = 0.23; //数量200〜299ヶ
process_discount_list_s[1][0][9] = 0.21; //数量300ヶまで
//横 + 縦 = 2000mm以上
process_discount_list_s[1][1] = new Array(10);
process_discount_list_s[1][1][0] = 0.5; //数量1ヶ
process_discount_list_s[1][1][1] = 0.49; //数量2ヶ
process_discount_list_s[1][1][2] = 0.48; //数量3〜4ヶ
process_discount_list_s[1][1][3] = 0.47; //数量5〜9ヶ
process_discount_list_s[1][1][4] = 0.44; //数量10〜19ヶ
process_discount_list_s[1][1][5] = 0.39; //数量20〜29ヶ
process_discount_list_s[1][1][6] = 0.34; //数量30〜99ヶ
process_discount_list_s[1][1][7] = 0.27; //数量100〜199ヶ
process_discount_list_s[1][1][8] = 0.24; //数量200〜299ヶ
process_discount_list_s[1][1][9] = 0.22; //数量300ヶまで


//送料(総重量1kg(端数切捨)毎に加算)
var shipping_cost_list_s = new Array(3);
shipping_cost_list_s[0] = 40; //横 + 縦 = 1以上〜500mm未満
shipping_cost_list_s[1] = 50; //横 + 縦 = 500以上〜1500mm未満
shipping_cost_list_s[2] = 60; //横 + 縦 = 1500以上〜2000mm未満
//shipping_cost_list_s[3] = 2415; //横 + 縦 = 2000mm以上


//梱包手数料（横 + 縦 = 2000mm以上時に発生）
var shipping_packing_list = new Array(7);
shipping_packing_list[0] = 2415;  //数量1〜2個
shipping_packing_list[1] = 1660;  //数量3〜5個
shipping_packing_list[2] = 1449;  //数量6〜10個
shipping_packing_list[3] = 1317;  //数量11〜15個
shipping_packing_list[4] = 1265;  //数量16〜50個
shipping_packing_list[5] = 1230;  //数量51〜100個
shipping_packing_list[6] = 1220;  //数量101〜400個


var S_color_old = new Array(1);
var S_thickness_old = new Array(1);
var S_size_s_old = new Array(1);


//数量割引
var suryo_wari_cnt = 20;
var suryo_wari = new Array(suryo_wari_cnt);
suryo_wari[0] = 0;
suryo_wari[1] = 0.15;
suryo_wari[2] = 0.2;
suryo_wari[3] = 0.25;
suryo_wari[4] = 0.3;
suryo_wari[5] = 0.35;
suryo_wari[6] = 0.4;
suryo_wari[7] = 0.45;
suryo_wari[8] = 0.5;
suryo_wari[9] = 0.55;
suryo_wari[10] = 0.6;
suryo_wari[11] = 0.65;
suryo_wari[12] = 0.7;
suryo_wari[13] = 0.75;
suryo_wari[14] = 0.8;
suryo_wari[15] = 0.85;
suryo_wari[16] = 0.9;
suryo_wari[17] = 0.93;
suryo_wari[18] = 0.96;
suryo_wari[19] = 1;

//調整係数
var chosei_coefficient_list = new Array(14);
chosei_coefficient_list[0] = 1;    //1円以上      500円未満
chosei_coefficient_list[1] = 1;    //500円以上    1000円未満
chosei_coefficient_list[2] = 1;    //1000円以上   1500円未満
chosei_coefficient_list[3] = 1;    //1500円以上   2000円未満
chosei_coefficient_list[4] = 1;    //2000円以上   2500円未満
chosei_coefficient_list[5] = 1;    //2500円以上   3000円未満
chosei_coefficient_list[6] = 1;    //3000円以上   5000円未満
chosei_coefficient_list[7] = 0.95;  //5000円以上   8000円未満
chosei_coefficient_list[8] = 0.95;  //8000円以上   11000円未満
chosei_coefficient_list[9] = 0.95;  //11000円以上  15000円未満
chosei_coefficient_list[10] = 0.9;  //15000円以上  40000円未満
chosei_coefficient_list[11] = 0.9;  //40000円以上  100000円未満
chosei_coefficient_list[12] = 0.9;  //100000円以上 500000円未満
chosei_coefficient_list[13] = 0.9;  //500000円以上


var arr1 = 0.27;
var arr2 = 0.15;

var tax = taxRateValue;

maker_point = 0.51;

var riritu_list_cnt = 2;
riritu_list = new Array(riritu_list_cnt);
riritu_list[0] = 1.15;
riritu_list[1] = 1.2;

var wari_list_cnt = 2;
wari_list = new Array(wari_list_cnt);
wari_list[0] = new Array(3);
wari_list[0][1] = 0.9;
wari_list[0][2] = 0.8;
wari_list[0][3] = 0.75;
wari_list[1] = new Array(3);
wari_list[1][1] = 0.95;
wari_list[1][2] = 0.9;
wari_list[1][3] = 0.85;


function size_change(){
	var TargetForm = document.form1;
	if(TargetForm.size_s.value != "選択"){
		if(TargetForm.size_s.value == "450x300" || TargetForm.size_s.value == "600x450" || TargetForm.size_s.value == "910x450" ){
			document.getElementById('clear_maker').style.display = "none";
			document.getElementById('clear_common').style.display = "";
			document.getElementById('caution_m').style.display = "none";
			document.getElementById('caution_a').style.display = "";
		}
		else{
			document.getElementById('clear_maker').style.display = "";
			document.getElementById('clear_common').style.display = "";
			document.getElementById('caution_m').style.display = "";
			document.getElementById('caution_a').style.display = "none";
		};
	}
	else{
		document.getElementById('clear_common').style.display = "none";
		document.getElementById('clear_maker').style.display = "none";
		document.getElementById('caution_m').style.display = "none";
		document.getElementById('caution_a').style.display = "none";
	};
}

function size_change2(){
	var TargetForm = document.form1;
	if(TargetForm.size_s.value != "選択"){
		if(TargetForm.size_s.value == "450x300" || TargetForm.size_s.value == "600x450" || TargetForm.size_s.value == "910x450" ){
			document.getElementById('makerdirect').style.display = "none";
		}else{
			document.getElementById('makerdirect').style.display = "";
		}
	}
}

function calculation()
{
	Make_list();
	SipriSet();
	size_change2();
}

function Make_list()
{
	var division = new Array;
	var size_list = new Array;

	size_list[0] = "選択";

	atu = Number(document.form1.atu.value);

	element = 1;
	for(i = 0; i < material_cnt; i++){
		division = material_list_s[i].split(",");
		if(atu == division[2]){
				size_list[element] = division[4];
				element++;
		};
	};

	document.form1.size_s.length = element;
	for(i = 0; i < element; i++){
		document.form1.size_s[i].value = size_list[i];
		document.form1.size_s[i].text = size_list[i];
	};

}


function Form_Reset()
{
	document.form1.reset();
}

function SipriSet()
{
	//form_nameの代入
	var TargetForm = document.form1;

	itemno = TargetForm.itemno.value;
	atu = Number(TargetForm.atu.value);
	suryo = Number(TargetForm.suryo.value);
	size = document.form1.size_s.value;

	material_price = 0;		//仕入値
	price_max = 0;
	price_min = 0;
	shipping_cost = 0;
	alert_check = 0;
	width = 0;
	height = 0;


	for(i = 0; i < material_cnt; i++){
		division = material_list_s[i].split(",");
		if(atu == division[2]){
			if(size == division[4]){
				itemno = division[0];
				ita_name = division[1];
				material_price = Number(division[3]);
//add
				width = division[5];
				height = division[6];
			};
		};
	};


	$('.overview__productNumber').children('dd').text(itemno + "-" + Number(TargetForm.atu.value));

	if(size == "450x300" || size == "600x450" || size == "910x450" ){
		document.getElementById('makerdirect').style.display = "none";
		// メーカ直送タグを削除
		if($('#tag_makerdirect').length){
			$('#tag_makerdirect').remove();
		}
		sale_price = standard_calculation(atu,size,suryo);
	}
	else{
		document.getElementById('makerdirect').style.display = "";
		// メーカ直送タグを表示(既に表示されている場合は何もしない)
		if(!$('#tag_makerdirect').length){
			$('.overview__tag').append('<a class="tag__label c-label--md-black js-anchorScroll" name="tag_makerdirect" id="tag_makerdirect" href="#makerdirect">メーカー直送</a>');
		}

		price_max = Math.round((material_price + shipping_cost) / (1 - arr1) * tax, 0);		//販売価格（1枚）
		price_min = Math.round(material_price / (1 - arr2) * tax, 0);						//販売価格（割引限度額）

		sale_price = 0;
		for(k = 0; k < suryo; k++){
			if(k > suryo_wari_cnt - 1){		//数量がsuryo_wari_cnt以上は同じ割引率
				n = suryo_wari_cnt - 1;
			}
			else{
				n = k;
			};
			sale_price = sale_price + (price_max - (price_max - price_min) * suryo_wari[n]);		//最終販売価格
		};
//		sale_price = Math.round(sale_price / suryo);

		sale_price_pr = 0;

		for(k = 0; k < 100; k++){
			if(k > suryo_wari_cnt - 1){		//数量がsuryo_wari_cnt以上は同じ割引率
				n = suryo_wari_cnt - 1;
			}
			else{
				n = k;
			};
			sale_price_pr = sale_price_pr + (price_max - (price_max - price_min) * suryo_wari[n]);		//最終販売価格
//add
			deliver_price = 0;
			deliver_price = smtm_deliver_chk(width,height,atu,k+1);

			if(k==0){
				sale_price1=Math.round((sale_price_pr + deliver_price)/ (k+1));
			}
			else if(k==4){
				sale_price5=Math.round((sale_price_pr + deliver_price)/ (k+1));
			}
			else if(k==9){
				sale_price10=Math.round((sale_price_pr + deliver_price)/ (k+1));
			}
			else if(k==19){
				sale_price20=Math.round((sale_price_pr + deliver_price)/ (k+1));
			}
			else if(k==49){
				sale_price50=Math.round((sale_price_pr + deliver_price)/ (k+1));
			}
			else if(k==99){
				sale_price100=Math.round((sale_price_pr + deliver_price)/ (k+1));
			};
		};
//add
		deliver_price = 0;
		deliver_price = smtm_deliver_chk(width,height,atu,suryo);
		sale_price=Math.round((sale_price + deliver_price)/ suryo);
	};

	$('#haisou_ng_txt').text('');
	$('#suryo_ng_txt').text('');
	if(size == "450x300" || size == "600x450" || size == "910x450" ){
		if(suryo > 400){
			alert("401枚以上は、別途お問い合わせください。");
			alert_check = 1;
		};
	}
	else{
		if((document.form1.souhu_info.value == "個人宅" || document.form1.souhu_info.value == "個人") && document.form1.size_s.value != "選択"){
			$('#haisou_ng_txt').text('こちらの製品は配送の都合上、個人宅へのお届けが出来ません。');
			alert_check = 1;
		};

		if(suryo > 100){
			$('#suryo_ng_txt').text('101枚以上は、別途お問い合わせください。');
			alert_check = 1;
		};
	};

	if(size != "選択" && alert_check != 1){
	}
	else{
		sale_price = 0;
	};
	if(suryo != "" && TargetForm.atu.value != "選択"){
		TargetForm.itemno.value = itemno;
		TargetForm.itemna.value = ita_name;
		tanka = sale_price;

		TargetForm.price.value = tanka;
		TargetForm.total.value = tanka * suryo;
	}
	else{
		TargetForm.itemno.value = "";
		TargetForm.itemna.value = "";
		TargetForm.price.value = "";
		TargetForm.total.value = "";
	};

}

function smtm_deliver_chk(width,height,atu,suryo)
{
	weight = (width / 1000) * (height / 1000) * hiju * atu * suryo;
	deliver_price = 0;
	if(weight < smtm_weight){
		if(sale_price_pr != 0){
			deliver_price = Math.round(smtm_deliver * tax);
		};
	};
	return deliver_price;
}

function SubmitCheck(FormNo)
{

	SipriSet();

	//form_nameの代入
	if(FormNo == "1"){
		var TargetForm = document.form1;
	};

	itemno = TargetForm.itemno.value;
	TargetForm.itemna.value = ita_name;
	TargetForm.itemno.value = itemno + "-" + Number(TargetForm.atu.value);
	TargetForm.sipri.value =  "::" + tanka;
	size = TargetForm.size_s.value;

	var suryo = TargetForm.suryo.value;

	//アラート
//	alert_check = 0;
	if(TargetForm.atu.value == "選択"){
		alert("板厚を選択して下さい。");
		alert_check = 1;
	};
	if(suryo == 0){
		alert("数量を入力して下さい。");
		alert_check = 1;
	};

	if(size == "450x300" || size == "600x450" || size == "910x450" ){
		if(suryo > 400){
			alert("401枚以上は、別途お問い合わせください。");
			alert_check = 1;
		};
	}
	else{
		if(suryo > 100){
			alert("101枚以上は、別途お問い合わせください。");
			alert_check = 1;
		};
	};

	if(suryo.search(/[^0-9]/i) != -1 ){
		alert("半角数字で入力して下さい。");
		alert_check = 1;
	};
	if(alert_check == 1){
		TargetForm.itemno.value = itemno;
	};

	//フォームの送信
	if(alert_check == 0 && tanka > 0){
		TargetForm.submit();
	};

	if(Number(document.form1.price.value) == 0){
		alert("ご注文内容が適正に入力されておりません。\n入力項目をお確かめください。\n合計金額が表示されている状態で\nカートに商品を入れてください。");
	} else {
		document.form1.submit();
	};

}

function standard_calculation(thickness,size,suryo)
{

	alert_check_s = 0;

	//板厚リスト作成
	var thickness_list = new Array;
	t = 1;
	thickness_list[0] = "選択下さい";
	flg1 = 0;
	flg2 = 0;
	flg3 = 0;

	//サイズの分割
	width = Number(size.substr(0,3));
	height = Number(size.substr(4,3));

	//  suryo = Number(document.form1.suryo.value);

	if(width != 0 && height != 0){
		wh = width + height;
	} else {
		wh = 0;
	};


	//板厚別の係数フラグ
	if(thickness <= 5){
		v_thickness = 0;
	} else if(thickness > 5){
		v_thickness = 1;
	};

	//横 + 縦の変数代入
	if(wh < 2000){
		v_wh = 0;
	} else if(wh >= 2000){
		v_wh = 1;
	};

	//色の変数代入
	v_color = 0;


	//材料単価取得
	var material_cost_list = new Array;
	var w_max_size_list = new Array;
	var h_max_size_list = new Array;
	var maker_cost_list = new Array;

	n = 0;
	price = 0;
	material_price = 0;
	material_cost = 0;
	material_flag = 0;
	weight = 0;
	shipping_cost = 0;
	w_max_size = 0;
	h_max_size = 0;
	maker_cost = 0;

	if(thickness != 0 && wh != 0 && suryo != 0){
		for(i = 0; i < material_cnt; i++){
			division = material_list_s[i].split(",");
			if(thickness == Number(division[2])){
				///数取得プログラム起動
				torisuu_calculation(width,height,Number(division[5]),Number(division[6]));
				//材料使用率
				material_rate = (width * height) / (Number(division[5]) * Number(division[6]));

				if(torisuu >= 2){
					material_cost_list[n] = Math.round(Number(division[3]) / torisuu);
					w_max_size_list[n] = Number(division[5]) - 6;
					h_max_size_list[n] = Number(division[6]) - 6;
					material_flag = 1;
				}
				else if(torisuu == 1){
					//規格板の場合、上代取得
					maker_cost_list[n] = Number(division[5]);

					if(material_rate <= 0.75){
						material_cost_list[n] = Math.round(Number(division[3]) * material_rate * material_coefficient_list_s[v_color]);
						if(material_cost_list[n] > Number(division[3])){
							material_cost_list[n] = Number(division[3]);
							w_max_size_list[n] = Number(division[1]) - 6;
							h_max_size_list[n] = Number(division[2]) - 6;
						}
						else {
							material_cost_list[n] = Math.round(Number(division[3]) * material_rate * material_coefficient_list_s[v_color]);
							w_max_size_list[n] = Number(division[1]) - 6;
							h_max_size_list[n] = Number(division[2]) - 6;
						};
						material_flag = 1;
					}
					else if(material_rate > 0.75){
						material_cost_list[n] = Number(division[3]);
						w_max_size_list[n] = Number(division[1]) - 6;
						h_max_size_list[n] = Number(division[2]) - 6;
						material_flag = 1;
					};
				}
				else if(torisuu == 0){
					material_cost_list[n] = 0;
					w_max_size_list[n] = 0;
					h_max_size_list[n] = 0;
				};
				n++;
			};
		};

		if(material_flag == 1){
			for(i = 0; i < n; i++){
				if(material_cost == 0){
					if(Number(material_cost_list[i]) != 0){
						material_cost = Number(material_cost_list[i]);
						maker_cost = Number(maker_cost_list[i]);
					};
				}
				else if(Number(material_cost_list[i]) != 0){
					if(material_cost >= Number(material_cost_list[i])){
						material_cost = Number(material_cost_list[i]);
						maker_cost = Number(maker_cost_list[i]);
					};
				};

				//最大サイズ取得
				if(w_max_size_list[i] != 0 && h_max_size_list[i] != 0){
					if(w_max_size == 0 && h_max_size == 0){
						w_max_size = w_max_size_list[i];
						h_max_size = h_max_size_list[i];
					}
					else {
						if(height < 1000){
							if(w_max_size <= w_max_size_list[i]){
								w_max_size = w_max_size_list[i];
								h_max_size = h_max_size_list[i];
							};
						};
						if(width > 1000 && height > 1000){
							if(h_max_size_list[i] > 1000){
								w_max_size = w_max_size_list[i];
								h_max_size = h_max_size_list[i];
							};
						};
					};
				};
			};
		};


		//材料単価係数取得
		if((material_cost * suryo) > 0){
			/*
			if((material_cost * suryo) >= 1 && (material_cost * suryo) < 250){ //取数単価 * 数量 = 1円以上〜250円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][0]);
			}
			else if((material_cost * suryo) >= 250 && (material_cost * suryo) < 500){ //取数単価 * 数量 = 250円以上〜500円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][1]);
			}
			else if((material_cost * suryo) >= 500 && (material_cost * suryo) < 1000){ //取数単価 * 数量 = 500円以上〜1000円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][2]);
			}
			else if((material_cost * suryo) >= 1000 && (material_cost * suryo) < 1500){ //取数単価 * 数量 = 1000円以上〜1500円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][3]);
			}
			else if((material_cost * suryo) >= 1500 && (material_cost * suryo) < 2000){ //取数単価 * 数量 = 1500円以上〜2000円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][4]);
			}
			else if((material_cost * suryo) >= 2000 && (material_cost * suryo) < 2500){ //取数単価 * 数量 = 2000円以上〜2500円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][5]);
			}
			else if((material_cost * suryo) >= 2500 && (material_cost * suryo) < 3000){ //取数単価 * 数量 = 2500円以上〜3000円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][6]);
			}
			else if((material_cost * suryo) >= 3000 && (material_cost * suryo) < 5000){ //取数単価 * 数量 = 3000円以上〜5000円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][7]);
			}
			else if((material_cost * suryo) >= 5000 && (material_cost * suryo) < 8000){ //取数単価 * 数量 = 5000円以上〜8000円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][8]);
			}
			else if((material_cost * suryo) >= 8000 && (material_cost * suryo) < 11000){ //取数単価 * 数量 = 8000円以上〜11000円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][9]);
			}
			else if((material_cost * suryo) >= 11000 && (material_cost * suryo) < 15000){ //取数単価 * 数量 = 11000円以上〜15000円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][10]);
			}
			else if((material_cost * suryo) >= 15000 && (material_cost * suryo) < 40000){ //取数単価 * 数量 = 15000円以上〜40000円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][11]);
			}
			else if((material_cost * suryo) >= 40000 && (material_cost * suryo) < 100000){ //取数単価 * 数量 = 40000円以上〜100000円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][12]);
			}
			else if((material_cost * suryo) >= 100000 && (material_cost * suryo) < 500000){ //取数単価 * 数量 = 100000円以上〜500000円未満
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][13]);
			}
			else if((material_cost * suryo) >= 500000){ //取数単価 * 数量 = 500000円以上
				material_price = Math.round(material_cost * material_cost_coefficient_list_s[v_wh][14]);
			};
			*/
			material_price = get_ita_tanka(material_cost, suryo);
		}
		else {
			material_price = 0;
		};

		//総重量計算→１枚当たりの重量へ変更
		weight = (width / 1000) * (height / 1000) * thickness * hijuu;

		//送料計算
		if(wh != 0 && weight != 0){
			if(wh >= 1 && wh < 500){ //横 + 縦 = 1以上〜500未満
				shipping_cost = Math.ceil(shipping_cost_list_s[0] * weight);
			}
			else if(wh >= 500 && wh < 1500){ //横 + 縦 = 500以上〜1500未満
				shipping_cost = Math.ceil(shipping_cost_list_s[1] * weight);
			}
			else if(wh >= 1500 && wh < 2000){ //横 + 縦 = 1500以上〜2000未満
				shipping_cost = Math.ceil(shipping_cost_list_s[2] * weight);
			}
			else if(wh >= 2000){ //横 + 縦 = 2000以上の場合は梱包手数料発生
				if(thickness <= 5){
					if(suryo <= 2){
						shipping_cost = shipping_packing_list[0];
					}
					else if(suryo >= 3 &&  suryo <= 5){
						shipping_cost = shipping_packing_list[1];
					}
					else if(suryo >= 6 &&  suryo <= 10){
						shipping_cost = shipping_packing_list[2];
					}
					else if(suryo >= 11 &&  suryo <= 15){
						shipping_cost = shipping_packing_list[3];
					}
					else if(suryo >= 16 &&  suryo <= 50){
						shipping_cost = shipping_packing_list[4];
					}
					else if(suryo >= 51 &&  suryo <= 100){
						shipping_cost = shipping_packing_list[5];
					}
					else if(suryo >= 101 &&  suryo <= 400){
						shipping_cost = shipping_packing_list[6];
					};
				}
				else{
					shipping_cost = shipping_packing_list[0];
				};
			};
		}
		else {
			shipping_cost = 0;
		};
	}
	else {
		material_price = 0;
		shipping_cost = 0;
	};

	//カット工賃取得
	cut_cost = 0;
	if(wh >= 1 && wh < 300){ //横 + 縦 = 1以上〜300未満
		cut_cost = cut_cost_list_s[v_thickness][0];
	}
	else if(wh >= 300 && wh < 500){ //横 + 縦 = 300以上〜500未満
		cut_cost = cut_cost_list_s[v_thickness][1];
	}
	else if(wh >= 500 && wh < 1000){ //横 + 縦 = 500以上〜1000未満
		cut_cost = cut_cost_list_s[v_thickness][2];
	}
	else if(wh >= 1000){ //横 + 縦 = 1000以上
		cut_cost = cut_cost_list_s[v_thickness][3];
	}
	else {
		cut_cost = 0;
	};


	//加工数量割引取得
	process_discount = 1;
	/*
	if(suryo == 1){ //数量1ヶ
		process_discount = process_discount_list_s[v_color][v_wh][0];
	}
	else if(suryo == 2){ //数量2ヶ
		process_discount = process_discount_list_s[v_color][v_wh][1];
	}
	else if(suryo >= 3 && suryo <= 4){ //数量3〜4ヶ
		process_discount = process_discount_list_s[v_color][v_wh][2];
	}
	else if(suryo >= 5 && suryo <= 9){ //数量5〜9ヶ
		process_discount = process_discount_list_s[v_color][v_wh][3];
	}
	else if(suryo >= 10 && suryo <= 19){ //数量10〜19ヶ
		process_discount = process_discount_list_s[v_color][v_wh][4];
	}
	else if(suryo >= 20 && suryo <= 29){ //数量20〜29ヶ
		process_discount = process_discount_list_s[v_color][v_wh][5];
	}
	else if(suryo >= 30 && suryo <= 99){ //数量30〜99ヶ
		process_discount = process_discount_list_s[v_color][v_wh][6];
	}
	else if(suryo >= 100 && suryo <= 199){ //数量100〜199ヶ
		process_discount = process_discount_list_s[v_color][v_wh][7];
	}
	else if(suryo >= 200 && suryo <= 299){ //数量200〜299ヶ
		process_discount = process_discount_list_s[v_color][v_wh][8];
	}
	else if(suryo >= 300 && suryo <= 400){ //数量400ヶまで
		process_discount = process_discount_list_s[v_color][v_wh][9];
	}
	else {
		process_discount = 1;
	};*/
	if(suryo==1){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][0];
	}else if(suryo==2){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][1];
	}else if(suryo>=3 && suryo<=4){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][2];
	}else if(suryo>=5 && suryo<=6){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][3];
	}else if(suryo>=7 && suryo<=9){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][4];
	}else if(suryo>=10 && suryo<=14){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][5];
	}else if(suryo>=15 && suryo<=19){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][6];
	}else if(suryo>=20 && suryo<=29){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][7];
	}else if(suryo>=30 && suryo<=44){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][8];
	}else if(suryo>=45 && suryo<=59){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][9];
	}else if(suryo>=60 && suryo<=79){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][10];
	}else if(suryo>=80 && suryo<=99){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][11];
	}else if(suryo>=100 && suryo<=199){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][12];
	}else if(suryo>=200 && suryo<=299){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][13];
	}else if(suryo>=300){
		process_discount=h_kakou_waribiki[v_itemno][v_wh][14];
	}

	//合算
	price = Math.round(((material_price + shipping_cost) + Math.round(cut_cost * process_discount)) * material_tax);
	/* re.add */
	//price = Math.round(price * yamato_kei / 1.05  * tax);  //消費税8%対応
	price = Math.round(price / 1.05  * tax);  //消費税8%対応


	chosei_coefficient = 1;
	if(v_wh == 0){
		if((price * suryo) >= 1 && (price * suryo) < 500){
			chosei_coefficient = chosei_coefficient_list[0];
		}
		else if((price * suryo) >= 500 && (price * suryo) < 1000){
			chosei_coefficient = chosei_coefficient_list[1];
		}
		else if((price * suryo) >= 1000 && (price * suryo) < 1500){
			chosei_coefficient = chosei_coefficient_list[2];
		}
		else if((price * suryo) >= 1500 && (price * suryo) < 2000){
			chosei_coefficient = chosei_coefficient_list[3];
		}
		else if((price * suryo) >= 2000 && (price * suryo) < 2500){
			chosei_coefficient = chosei_coefficient_list[4];
		}
		else if((price * suryo) >= 2500 && (price * suryo) < 3000){
			chosei_coefficient = chosei_coefficient_list[5];
		}
		else if((price * suryo) >= 3000 && (price * suryo) < 5000){
			chosei_coefficient = chosei_coefficient_list[6];
		}
		else if((price * suryo) >= 5000 && (price * suryo) < 8000){
			chosei_coefficient = chosei_coefficient_list[7];
		}
		else if((price * suryo) >= 8000 && (price * suryo) < 11000){
			chosei_coefficient = chosei_coefficient_list[8];
		}
		else if((price * suryo) >= 11000 && (price * suryo) < 15000){
			chosei_coefficient = chosei_coefficient_list[9];
		}
		else if((price * suryo) >= 15000 && (price * suryo) < 40000){
			chosei_coefficient = chosei_coefficient_list[10];
		}
		else if((price * suryo) >= 40000 && (price * suryo) < 100000){
			chosei_coefficient = chosei_coefficient_list[11];
		}
		else if((price * suryo) >= 100000 && (price * suryo) < 500000){
			chosei_coefficient = chosei_coefficient_list[12];
		}
		else if((price * suryo) >= 500000){
			chosei_coefficient = chosei_coefficient_list[13];
		};

		price = Math.round(price * chosei_coefficient);
	}
	else{
		price = maker_price(maker_cost,thickness,suryo);
	};

	return price;
}

function maker_price(maker_cost,thickness,suryo)
{
	sale_price = 0;
	must_cost = Number(maker_cost) * maker_point + maker_shipping_cost;
	riritu = 0;

	if(thickness < 5){
		riritu = riritu_list[0];
		wari2 = wari_list[0][1];
		wari3 = wari_list[0][2];
		wari5 = wari_list[0][3];
	}
	else{
		riritu = riritu_list[1];
		wari2 = wari_list[1][1];
		wari3 = wari_list[1][2];
		wari5 = wari_list[1][3];
	};

	wari = 0;
	if(suryo == 1){
		wari = 1;
	}
	else if(suryo == 2){
		wari = wari2;
	}
	else if(suryo >= 3 && suryo < 5){
		wari = wari3;
	}
	else if(suryo >= 5)  {
		wari = wari5;
	};

	sale_price = Math.round(must_cost * riritu * wari * tax);

	return sale_price;

}

function cast_price(material_cost,suryo)
{
	price_max = Math.round(material_cost / (1 - arr1) * tax, 0);    //販売価格（1枚）
	price_min = Math.round(material_cost / (1 - arr2) * tax, 0);    //販売価格（割引限度額）

	sale_price = 0;
	for(k = 0; k < suryo; k++){
		if(k > suryo_wari_cnt - 1){    //数量がsuryo_wari_cnt以上は同じ割引率
			n = suryo_wari_cnt - 1;
		}
		else{
			n = k;
		};
		sale_price = sale_price + (price_max - (price_max - price_min) * suryo_wari[n]);    //最終販売価格
	};
	sale_price = Math.round(sale_price / suryo);

	return sale_price;
}

function torisuu_calculation(v_width,v_height,v_w_max_size,v_h_max_size)
{
	//切りシロ3mmプラス
	v_width = v_width + 3;
	v_height = v_height + 3;

	Ww_Hh_width(v_width,v_height,v_w_max_size,v_h_max_size);
	Ww_Hh_height(v_width,v_height,v_w_max_size,v_h_max_size);
	Wh_Hw_width(v_width,v_height,v_w_max_size,v_h_max_size);
	Wh_Hw_height(v_width,v_height,v_w_max_size,v_h_max_size);

	torisuu = Math.max(Ww_Hh_width_torisuu,Ww_Hh_height_torisuu,Wh_Hw_width_torisuu,Wh_Hw_height_torisuu);

}


function Ww_Hh_width(v_width,v_height,v_w_max_size,v_h_max_size)
{
	//通常方向　横方向余りから計算
	W_w = Math.floor(v_w_max_size / v_width);
	H_h = Math.floor(v_h_max_size / v_height);

	torisuu = W_w * H_h;

	if(torisuu == 0){
		Ww_Hh_width_torisuu = 0;
	} else {
		material_width = v_w_max_size - W_w * v_width;
		material_height = v_h_max_size;

		if((material_width >= v_width && material_height >= v_height) || (material_width >= v_height && material_height >= v_width)){
			//通常方向取数
			W_w = Math.floor(material_width / v_width);
			H_h = Math.floor(material_height / v_height);
			Ww_Hh_torisuu = W_w * H_h;
			//逆方向取数
			W_h = Math.floor(material_width / v_height);
			H_w = Math.floor(material_height / v_width);
			Wh_Hw_torisuu = W_h * H_w;

			if(Ww_Hh_torisuu >= Wh_Hw_torisuu){
				torisuu = torisuu + Ww_Hh_torisuu;
			} else {
				torisuu = torisuu + Wh_Hw_torisuu;
			};
		};
		Ww_Hh_width_torisuu = torisuu;
	};

}


function Ww_Hh_height(v_width,v_height,v_w_max_size,v_h_max_size)
{
	//通常方向　縦方向余りから計算
	W_w = Math.floor(v_w_max_size / v_width);
	H_h = Math.floor(v_h_max_size / v_height);

	torisuu = W_w * H_h;

	if(torisuu == 0){
		Ww_Hh_height_torisuu = 0;
	} else {
		material_width = v_w_max_size;
		material_height = v_h_max_size - H_h * v_height;

		if((material_width >= v_width && material_height >= v_height) || (material_width >= v_height && material_height >= v_width)){
			//通常方向取数
			W_w = Math.floor(material_width / v_width);
			H_h = Math.floor(material_height / v_height);
			Ww_Hh_torisuu = W_w * H_h;
			//逆方向取数
			W_h = Math.floor(material_width / v_height);
			H_w = Math.floor(material_height / v_width);
			Wh_Hw_torisuu = W_h * H_w;

			if(Ww_Hh_torisuu >= Wh_Hw_torisuu){
				torisuu = torisuu + Ww_Hh_torisuu;
			} else {
				torisuu = torisuu + Wh_Hw_torisuu;
			};
		};
		Ww_Hh_height_torisuu = torisuu;
	};
}


function Wh_Hw_width(v_width,v_height,v_w_max_size,v_h_max_size)
{
	//逆方向　横方向余りから計算
	W_h = Math.floor(v_w_max_size / v_height);
	H_w = Math.floor(v_h_max_size / v_width);

	torisuu = W_h * H_w;

	if(torisuu == 0){
		Wh_Hw_width_torisuu = 0;
	} else {
		material_width = v_w_max_size - W_h * v_height
		material_height = v_h_max_size

		if((material_width >= v_width && material_height >= v_height) || (material_width >= v_height && material_height >= v_width)){
			//通常方向取数
			W_w = Math.floor(material_width / v_width);
			H_h = Math.floor(material_height / v_height);
			Ww_Hh_torisuu = W_w * H_h;
			//逆方向取数
			W_h = Math.floor(material_width / v_height);
			H_w = Math.floor(material_height / v_width);
			Wh_Hw_torisuu = W_h * H_w;

			if(Ww_Hh_torisuu >= Wh_Hw_torisuu){
				torisuu = torisuu + Ww_Hh_torisuu;
			} else {
				torisuu = torisuu + Wh_Hw_torisuu;
			};
		};
		Wh_Hw_width_torisuu = torisuu;
	};
};


function Wh_Hw_height(v_width,v_height,v_w_max_size,v_h_max_size)
{
	//逆方向　縦方向余りから計算
	W_h = Math.floor(v_w_max_size / v_height);
	H_w = Math.floor(v_h_max_size / v_width);

	torisuu = W_h * H_w;

	if(torisuu == 0){
		Wh_Hw_height_torisuu = 0;
	} else {
		material_width = v_w_max_size
		material_height = v_h_max_size - H_w * v_width

		if((material_width >= v_width && material_height >= v_height) || (material_width >= v_height && material_height >= v_width)){
			//通常方向取数
			W_w = Math.floor(material_width / v_width);
			H_h = Math.floor(material_height / v_height);
			Ww_Hh_torisuu = W_w * H_h;
			//逆方向取数
			W_h = Math.floor(material_width / v_height);
			H_w = Math.floor(material_height / v_width);
			Wh_Hw_torisuu = W_h * H_w;

			if(Ww_Hh_torisuu >= Wh_Hw_torisuu){
				torisuu = torisuu + Ww_Hh_torisuu;
			} else {
				torisuu = torisuu + Wh_Hw_torisuu;
			};
		};
		Wh_Hw_height_torisuu = torisuu;
	};
}

/*
function standard_Submit()
{

	if(Number(document.form1.price.value) == 0){
		alert("ご注文内容が適正に入力されておりません。\n入力項目をお確かめください。\n合計金額が表示されている状態で\nカートに商品を入れてください。");
	} else {
		document.form1.submit();
	};

}
*/

function form1_Reset()
{

	document.form1.reset();

}

function Focus_Action_Teijaku(txt) {
	// 最後の入力項目でエンターが押された時
	if(event.keyCode == 13){
		if (txt == "suryo") {
			//キー入力を無効にする
			event.returnValue = false;
			//最初の入力項目にフォーカス当てる
			document.form1.suryo.focus();
		};
	};
}

function firstscript() {
	form1_Reset();
	calculation();
	reflectUnitPrice();
	reflectTotalPrice();
}
// ページの読み込み完了と同時に実行されるよう指定
window.onload = firstscript;

function get_ita_tanka(material_cost,suryo){
	aaa = 100;	//エクセルとの整合性用
	material_cost_sum = 0;
	material_cost_sum = material_cost * suryo;
	if (material_cost_sum > 0) {
		for (i = 0; i < keisu_cnt; i++) {
			if(material_cost_sum < orgTanka[keisu_cnt-1]){
				if((material_cost_sum >= orgTanka[i]) && (material_cost_sum < orgTanka[i+1])){
					zairyou_kei = (h_zairyou_k[i] * aaa - h_zairyou_k[i+1] * aaa) / (orgTanka[i+1] - orgTanka[i]) / aaa;
					zairyou_kei = Math.round(((h_zairyou_k[i+1] * aaa + (orgTanka[i+1] - material_cost_sum) * zairyou_kei * aaa) / aaa) * 100) / 100;
				};
			}
			else{
				if(material_cost_sum >= orgTanka[i]){
					zairyou_kei=h_zairyou_k[i];
				};
			};
		};
		material_price = Math.round(material_cost * zairyou_kei);;
	}
	else {
		material_price = 0;
	};
	return material_price;
}
