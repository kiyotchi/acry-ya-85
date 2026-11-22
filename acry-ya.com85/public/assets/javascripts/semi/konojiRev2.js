/************************************************/
/*                                              */
/*     コの字ディスプレイ台＜セミオーダー＞     */
/*                                              */
/*     14/02/13 消費税8%対応                    */
/*     16/09/14 送料計算変更                    */
/*     16/12/26 GS⇔BS 仕入れ値統一             */
/*     17/02/10 ヤマト便対応                    */
/*     17/06/09 ヤマト便対応                    */
/*     18/02/21 材料代を板セミと統一            */
/*     18/03/07 最大サイズ設定ミス              */
/*     19/01/05 キャスト価格改定                */
/*     20/04/24 EX価格改定                      */
/*     21/03/08 価格改定                        */
/************************************************/
var division = new Array; //分割用変数
var division_f = new Array; //たわみ分割用変数
var thickness_list = new Array; //板厚リスト用変数

//色係数
var color_coefficient_list = new Array(2);
color_coefficient_list[0] = 1.3; //クリアー
color_coefficient_list[1] = 1.6; //クリアー以外

//送料(総重量1kg(端数切捨)毎に加算)
var shipping_cost_list = new Array(4);
shipping_cost_list[0] = 40; //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 1mm以上～500mm未満
shipping_cost_list[1] = 50; //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 500mm以上～1500mm未満
shipping_cost_list[2] = 60; //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 1500mm以上～2500mm未満
shipping_cost_list[3] = 80; //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 2500mm以上


//曲げ工賃リスト
bend_cost_list_cnt = 11;
var bend_cost_list = new Array(bend_cost_list_cnt);
//板厚 = 2mm
bend_cost_list[0] = new Array(3);
bend_cost_list[0][0] = 670; //幅300mm以下
bend_cost_list[0][1] = 1560; //幅600mm以下
bend_cost_list[0][2] = 3120; //幅900mm以下
//板厚 = 3mm
bend_cost_list[1] = new Array(3);
bend_cost_list[1][0] = 670; //幅300mm以下
bend_cost_list[1][1] = 1560; //幅600mm以下
bend_cost_list[1][2] = 3120; //幅900mm以下
//板厚 = 5mm
bend_cost_list[2] = new Array(3);
bend_cost_list[2][0] = 890; //幅300mm以下
bend_cost_list[2][1] = 1780; //幅600mm以下
bend_cost_list[2][2] = 3120; //幅900mm以下
//板厚 = 8mm
bend_cost_list[3] = new Array(3);
bend_cost_list[3][0] = 1340; //幅300mm以下
bend_cost_list[3][1] = 2230; //幅600mm以下
bend_cost_list[3][2] = 3120; //幅900mm以下
//板厚 = 10mm
bend_cost_list[4] = new Array(3);
bend_cost_list[4][0] = 2000; //幅300mm以下
bend_cost_list[4][1] = 2670; //幅600mm以下
bend_cost_list[4][2] = 3560; //幅900mm以下
//板厚 = 13mm
bend_cost_list[5] = new Array(3);
bend_cost_list[5][0] = 2230; //幅300mm以下
bend_cost_list[5][1] = 2890; //幅600mm以下
bend_cost_list[5][2] = 3780; //幅900mm以下
//板厚 = 15mm
bend_cost_list[6] = new Array(3);
bend_cost_list[6][0] = 2230; //幅300mm以下
bend_cost_list[6][1] = 3550; //幅600mm以下
bend_cost_list[6][2] = 4450; //幅900mm以下
//--------  角度曲げ  --------//
//板厚 = 2mm
bend_cost_list[7] = new Array(3);
bend_cost_list[7][0] = 890; //幅300mm以下
bend_cost_list[7][1] = 2220; //幅600mm以下
bend_cost_list[7][2] = 3780; //幅900mm以下
//板厚 = 3mm
bend_cost_list[8] = new Array(3);
bend_cost_list[8][0] = 890; //幅300mm以下
bend_cost_list[8][1] = 2220; //幅600mm以下
bend_cost_list[8][2] = 3780; //幅900mm以下
//板厚 = 5mm
bend_cost_list[9] = new Array(3);
bend_cost_list[9][0] = 1120; //幅300mm以下
bend_cost_list[9][1] = 2670; //幅600mm以下
bend_cost_list[9][2] = 3780; //幅900mm以下
//板厚 = 8mm
bend_cost_list[10] = new Array(3);
bend_cost_list[10][0] = 1340; //幅300mm以下
bend_cost_list[10][1] = 2670; //幅600mm以下
bend_cost_list[10][2] = 4890; //幅900mm以下


//曲げ　数量割引
var b_process_discount_list = new Array(2);
//横幅 = 1mm以上～400mm未満
b_process_discount_list[0] = new Array(5);
b_process_discount_list[0][0] = 1; //数量 = 1～4ヶ
b_process_discount_list[0][1] = 0.8; //数量 = 5～9ヶ
b_process_discount_list[0][2] = 0.75; //数量 = 10～30ヶ
b_process_discount_list[0][3] = 0.7; //数量 = 30～100ヶ
b_process_discount_list[0][4] = 0.5; //数量 = 100ヶ以上
//横幅 = 400mm以上
b_process_discount_list[1] = new Array(5);
b_process_discount_list[1][0] = 1; //数量 = 1～4ヶ
b_process_discount_list[1][1] = 0.9; //数量 = 5～9ヶ
b_process_discount_list[1][2] = 0.9; //数量 = 10～30ヶ
b_process_discount_list[1][3] = 0.9; //数量 = 30～100ヶ
b_process_discount_list[1][4] = 0.9; //数量 = 100ヶ以上


//梱包材費
var packing_cost_list = new Array(4);
//横幅 + 奥行き + 高さ = 1mm以上～600mm未満
packing_cost_list[0] = new Array(4);
packing_cost_list[0][0] = 180; //数量 = 1～2ヶ
packing_cost_list[0][1] = 90; //数量 = 3ヶ
packing_cost_list[0][2] = 60; //数量 = 4～5ヶ
packing_cost_list[0][3] = 30; //数量 = 6ヶ以上
//横幅 + 奥行き + 高さ = 600mm以上～1000mm未満
packing_cost_list[1] = new Array(4);
packing_cost_list[1][0] = 500; //数量 = 1～2ヶ
packing_cost_list[1][1] = 250; //数量 = 3ヶ
packing_cost_list[1][2] = 150; //数量 = 4～5ヶ
packing_cost_list[1][3] = 50; //数量 = 6ヶ以上
//横幅 + 奥行き + 高さ = 1000mm以上～1500mm未満
packing_cost_list[2] = new Array(4);
packing_cost_list[2][0] = 1800; //数量 = 1～2ヶ
packing_cost_list[2][1] = 1350; //数量 = 3ヶ
packing_cost_list[2][2] = 950; //数量 = 4～5ヶ
packing_cost_list[2][3] = 700; //数量 = 6ヶ以上
//横幅 + 奥行き + 高さ = 1500mm以上
packing_cost_list[3] = new Array(4);
packing_cost_list[3][0] = 3500; //数量 = 1～2ヶ
packing_cost_list[3][1] = 2600; //数量 = 3ヶ
packing_cost_list[3][2] = 2000; //数量 = 4～5ヶ
packing_cost_list[3][3] = 1000; //数量 = 6ヶ以上


//材料比重
var specific_gravity = new Array(1);
specific_gravity = 1.19;


//横幅最少,横幅最大,奥行最少,奥行最大,高さ最少,高さ最大
var process_max_size = new Array(7);
process_max_size[0] = "100,300,30,300,40,300" //板厚 = 2mm
process_max_size[1] = "100,500,50,500,40,500" //板厚 = 3mm
process_max_size[2] = "100,700,100,700,40,700" //板厚 = 5mm
process_max_size[3] = "150,700,150,700,150,700" //板厚 = 8mm
process_max_size[4] = "150,700,150,700,150,700" //板厚 = 10mm
process_max_size[5] = "200,900,200,900,200,700" //板厚 = 13mm
process_max_size[6] = "200,1000,200,900,200,700" //板厚 = 15mm

//高さ_たわみ警告,横幅_たわみ警告,奥行に対し、横の比率
var flexure_size = new Array(7);
flexure_size[0] = "151,251,2.5" //板厚 = 2mm
flexure_size[1] = "251,351,2.8" //板厚 = 3mm
flexure_size[2] = "251,451,3" //板厚 = 5mm
flexure_size[3] = "301,551,3.3" //板厚 = 8mm
flexure_size[4] = "301,601,3.5" //板厚 = 10mm
flexure_size[5] = "401,651,3.5" //板厚 = 13mm
flexure_size[6] = "0,0,3.5" //板厚 = 15mm

var color_old = new Array(1);
var thickness_old = new Array(1);


function Form_Reset() {
  document.form1.reset();
}


function C_color_thickness() {
  color_old = document.form1.color.value;
  thickness_old = document.form1.thickness.value;
}


function calculate(i_a_flag) {

  width = Number(document.form1.width.value);
  depth = Number(document.form1.depth.value);
  height = Number(document.form1.height.value);
  color = document.form1.color.value;
  suryo = Number(document.form1.suu.value);
  suryo = (suryo=="0")?"1":suryo;

  ratio = 0; //奥行に対する幅の比率
  alert_check = 0; //アラートフラグ
  alert_flag = 0; //たわみ・グラ付き警告用

  document.form1.width_cm.value = width / 10;
  document.form1.depth_cm.value = depth / 10;
  document.form1.height_cm.value = height / 10;

  //板厚取得
  j = 1;
  thickness_list[0] = "選択下さい"
  for (i = 0; i < material_list_cnt; i++) {
    division = material_list[i].split(",");
    if (color == division[0]) {
      if (division[3]>=2) {
        if (j == 0) {
          thickness_list[j] = division[3];
          j = j + 1;
        }
        else if (thickness_list[j - 1] != division[3]) {
          thickness_list[j] = division[3];
          j = j + 1;
        };
      };
    };
  };

  //板厚代入
  document.form1.thickness.length = j;

  for (i = 0; i < j; i++) {
    document.form1.thickness[i].value = thickness_list[i];
    document.form1.thickness[i].text = thickness_list[i];
  };


  //前データの保管プログラム呼び出し
  if (i_a_flag == 1) {
    C_color_thickness();
  };

  atu_flg = 0;
  if (color_old == color) {
    atu_flg = 1;
  }
  else {
    for (i = 0; i < j; i++) {
      if (thickness_old == thickness_list[i]) {
        document.form1.thickness.value = thickness_old;
        atu_flg = 1;
      };
    };

    if ((thickness_old != "選択下さい") || (document.form1.thickness.value != "選択下さい")) {
      if (atu_flg == 0) {
        document.form1.thickness.value = "選択下さい";
        alert("ご希望色に選択されていた板の厚さの材料がありません。\n板の厚さを再選択してください。");
        alert_check = 1;
        //前データの保管プログラム呼び出し(アラート後の書き換え)
        C_color_thickness();
      };
    };
  };

  thickness = document.form1.thickness.value;

  //材料単価取得
  var material_cost_list = new Array;
  var w_max_size_list = new Array;
  var h_max_size_list = new Array;
  n = 0;
  price = 0;
  material_price = 0;
  material_cost = 0;
  material_flag = 0;
  weight = 0;
  shipping_cost = 0;
  max_w_size = 0;
  max_d_size = 0;
  wdh = 0;
  h_thickness=0;

  konoji_width = (width - thickness * 2) + (height - thickness) * 2;

  //WDH計算・重量計算
  if (width != 0 && depth != 0 && height != 0 && thickness != "選択下さい") {
    //		wdh = width + depth + height * 2 - thickness * 4;
//    wdh = (width - thickness * 2) + (height - thickness) * 2 + depth;
    wdh = konoji_width + depth;
    weight = Math.round(((width - thickness * 2) + (height - thickness) * 2) * depth * thickness * specific_gravity / 1000000 * 100) / 100;
  }
  else {
    wdh = 0;
    weight = 0;
  };

  document.form1.weight.value = weight;

  //横サイズ・縦サイズ・材料単価取得
  if (width != 0 && depth != 0 && height != 0 && thickness != "選択下さい" && suryo != 0) {
    j = 0;
    for (i = 0; i < material_list_cnt; i++) {
      division = material_list[i].split(",");
      if (color == division[0] && thickness == division[3]) {
        //取数取得プログラムにキック
        torisuu_calculation(konoji_width, depth, Number(division[1]), Number(division[2]));
        //取数単価取得
        material_rate = (konoji_width * depth) / (Number(division[1]) * Number(division[2]));
        if (torisuu >= 2) {
          material_cost_list[j] = Math.round(Number(division[4]) / torisuu);
          w_max_size_list[j] = Number(division[1]) - 6;
          h_max_size_list[j] = Number(division[2]) - 6;
          material_flag = 1;
        }
        else if (torisuu == 1) {
          if (color == "クリアー") {
            if (material_rate <= 0.75) {
              material_cost_list[j] = Math.round(Number(division[4]) * material_rate * clear_k);
              w_max_size_list[j] = Number(division[1]) - 6;
              h_max_size_list[j] = Number(division[2]) - 6;
              if (material_cost_list[j] > Number(division[4])) {
                material_cost_list[j] = Number(division[4]);
              }
              else {
                material_cost_list[j] = Math.round(Number(division[4]) * material_rate * clear_k);
              };
              material_flag = 1;
            }
            else if (material_rate > 0.75) {
              material_cost_list[j] = Number(division[4]);
              w_max_size_list[j] = Number(division[1]) - 6;
              h_max_size_list[j] = Number(division[2]) - 6;
              material_flag = 1;
            };
          }
          else {
            if (material_rate <= 0.75) {
              material_cost_list[j] = Math.round(Number(division[4]) * material_rate * iro_k);
              w_max_size_list[j] = Number(division[1]) - 6;
              h_max_size_list[j] = Number(division[2]) - 6;
              if (material_cost_list[j] > Number(division[4])) {
                material_cost_list[j] = Number(division[4]);
              }
              else {
                material_cost_list[j] = Math.round(Number(division[4]) * material_rate * iro_k);
              };
              material_flag = 1;
            }
            else if (material_rate > 0.75) {
              material_cost_list[j] = Number(division[4]);
              w_max_size_list[j] = Number(division[1]) - 6;
              h_max_size_list[j] = Number(division[2]) - 6;
              material_flag = 1;
            };
          };
        }
        else if (torisuu == 0) {
          material_cost_list[j] = 0;
          w_max_size_list[j] = 0;
          h_max_size_list[j] = 0;
        };
        j++;
      };
    };

    material_cost = 0;
    if (material_flag == 1) {
      for (i = 0; i < j; i++) {
        if (material_cost == 0) {
          if (Number(material_cost_list[i]) != 0) {
            material_cost = Number(material_cost_list[i]);
          };
        } else {
          if (Number(material_cost_list[i]) != 0) {
            if (material_cost >= Number(material_cost_list[i])) {
              material_cost = Number(material_cost_list[i]);
            };
          };
        };

        //最大サイズ
        if (w_max_size_list[i] != 0 && h_max_size_list[i] != 0) {
          if (h_x_size == 0 && h_y_size == 0) {
            h_x_size = w_max_size_list[i];
            h_y_size = h_max_size_list[i];
          } else {
            if (depth < 1000) {
              if (h_x_size <= w_max_size_list[i]) {
                h_x_size = w_max_size_list[i];
                h_y_size = h_max_size_list[i];
              };
            };
            if (konoji_width > 1000 && depth > 1000) {
              if (h_max_size_list[i] > 1000) {
                h_x_size = w_max_size_list[i];
                h_y_size = h_max_size_list[i];
              };
            };
          };
        };
      };
    };

    //材料単価係数
    get_ita_tanka(material_cost,suryo);
  }
  else {
    material_price = 0;
  };


  //送料計算
  //総重量
  weight_all = Math.floor(weight) * suryo;

  if (wdh != 0 && weight != 0) {
    if (wdh >= 1 && wdh < 500) {
      shipping_cost = Math.ceil(shipping_cost_list[0] * weight);
    }
    else if (wdh >= 500 && wdh < 1500) {
      shipping_cost = Math.ceil(shipping_cost_list[1] * weight);
    }
    else if (wdh >= 1500 && wdh < 2500) {
      shipping_cost = Math.ceil(shipping_cost_list[2] * weight);
    }
    else if (wdh >= 2500) {
      shipping_cost = Math.ceil(shipping_cost_list[3] * weight);
    }
    else {
      shipping_cost = 0;
    };

    if (shipping_cost == 0) {
      shipping_cost = 1;
    };
  }
  else {
    shipping_cost = 0;
  };

  ////カット・磨き仕上　数量割引
  if (wdh != 0 && suryo != 0) {
    h_wdh = 0
    if (wdh >= 1 && wdh < 100) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 1mm以上～100mm未満
      h_wdh = 0;
    }
    else if (wdh >= 100 && wdh < 500) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 100mm以上～500mm未満
      h_wdh = 1;
    }
    else if (wdh >= 500 && wdh < 1500) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 500mm以上～1500mm未満
      h_wdh = 2;
    }
    else if (wdh >= 1500) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 1500mm以上
      h_wdh = 3;
    };

    if(color != "ミラー"){
      h_iro = 0;
    }
    else {
      h_iro = 1;
    };

    //横 + 縦 の値変更
    if(wdh < 300){
      vv = 0;
    }
    else if(wdh >= 300 && wdh < 500){
      vv = 1;
    }
    else if(wdh >= 500 && wdh < 1500){
      vv = 2;
    }
    else if(wdh >= 1500){
      vv = 3;
    };

    //数量1ヶ
    if(suryo == 1){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][0];
    }
    //数量2ヶ
    else if(suryo == 2){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][1];
    }
    //数量3～4ヶ
    else if(suryo >= 3 && suryo <= 4){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][2];
    }
    //数量5～6ヶ
    else if(suryo >= 5 && suryo <= 6){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][3];
    }
    //数量7～9ヶ
    else if(suryo >= 7 && suryo <= 9){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][4];
    }
    //数量10～14ヶ
    else if(suryo >= 10 && suryo <= 14){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][5];
    }
    //数量15～19ヶ
    else if(suryo >= 15 && suryo <= 19){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][6];
    }
    //数量20～29ヶ
    else if(suryo >= 20 && suryo <= 29){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][7];
    }
    //数量30～44ヶ
    else if(suryo >= 30 && suryo <= 44){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][8];
    }
    //数量45～59ヶ
    else if(suryo >= 45 && suryo <= 59){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][9];
    }
    //数量60～79ヶ
    else if(suryo >= 60 && suryo <= 79){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][10];
    }
    //数量80～99ヶ
    else if(suryo >= 80 && suryo <= 99){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][11];
    }
    //数量100～199ヶ
    else if(suryo >= 100 && suryo <= 199){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][12];
    }
    //数量200～299ヶ
    else if(suryo >= 200 && suryo <= 299){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][13];
    }
    //数量300ヶ～
    else if(suryo >= 300){
      kakou_waribiki = h_kakou_waribiki[h_iro][vv][14];
    };
  }
  else {
    kakou_waribiki = 0;
  };

  //カット工賃
  if (wdh != 0) {
    if(thickness<=5){
      h_thickness=0;
    }
    else if(thickness>5&&thickness<=10){
      h_thickness=1;
    }
    else {
      h_thickness=2;
    };

    if (wdh >= 1 && wdh < 300) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 1mm以上～300mm未満
      cut_cost = h_kihon_t[h_thickness][0];
    }
    else if (wdh >= 300 && wdh < 500) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 300mm以上～500mm未満
      cut_cost = h_kihon_t[h_thickness][1];
    }
    else if (wdh >= 500 && wdh < 1000) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 500mm以上～1000mm未満
      cut_cost = h_kihon_t[h_thickness][2];
    }
    else if (wdh >= 1000) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 1000mm以上
      cut_cost = h_kihon_t[h_thickness][3];
    }
    else {
      cut_cost = 0;
    };
  }
  else {
    cut_cost = 0;
  };

  //端面処理工賃
  h_fraise_atu=h_thickness+3;
  if (wdh != 0) {
    //磨き仕上げ
    if (wdh >= 1 && wdh < 200) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 1mm以上～200mm未満
      finishing_cost = h_fraise_t[h_fraise_atu][0];
    }
    else if (wdh >= 200 && wdh < 400) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 200mm以上～400mm未満
      finishing_cost = h_fraise_t[h_fraise_atu][1];
    }
    else if (wdh >= 400 && wdh < 800) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 400mm以上～800mm未満
      finishing_cost = h_fraise_t[h_fraise_atu][2];
    }
    else if (wdh >= 800 && wdh < 1400) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 800mm以上～1400mm未満
      finishing_cost = h_fraise_t[h_fraise_atu][3];
    }
    else if (wdh >= 1400 && wdh < 2000) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 1400mm以上～2000mm未満
      finishing_cost = h_fraise_t[h_fraise_atu][4];
    }
    else if (wdh >= 2000 && wdh < 3000) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 2000mm以上～3000mm未満
      finishing_cost = h_fraise_t[h_fraise_atu][5];
    }
    else if (wdh >= 3000) { //横幅 + 奥行き + 高さ * 2 - 板厚 * 4 = 3000mm以上
      finishing_cost = h_fraise_t[h_fraise_atu][6];
    }
    else {
      finishing_cost = 0;
    };
  }
  else {
    finishing_cost = 0;
  };


  //カット工賃 + 端面処理工賃 & 数量割引
  cf_process_price = Math.round((cut_cost + finishing_cost) * kakou_waribiki);


  //板単価
  plate_price = Math.round(material_price * adjustKei * taxRateValue) + Math.round((cf_process_price + shipping_cost) * adjustKei  * taxRateValue);


  //曲げ工賃
  w_bend = 0;
  if (width > 0 && width <= 300) {
    w_bend = 0;
  }
  else if (width > 300 && width <= 600) {
    w_bend = 1;
  }
  else if (width > 600 && width <= 900) {
    w_bend = 2;
  };

  if (thickness != "選択下さい") {
    if (thickness == 2) { //板厚 = 2mm
      bend_cost = bend_cost_list[0][w_bend];
    }
    else if (thickness == 3) { //板厚 = 3mm
      bend_cost = bend_cost_list[1][w_bend];
    }
    else if (thickness == 5) { //板厚 = 5mm
      bend_cost = bend_cost_list[2][w_bend];
    }
    else if (thickness == 8) { //板厚 = 8mm
      bend_cost = bend_cost_list[3][w_bend];
    }
    else if (thickness == 10) { //板厚 = 10mm
      bend_cost = bend_cost_list[4][w_bend];
    }
    else if (thickness == 13) { //板厚 = 13mm
      bend_cost = bend_cost_list[5][w_bend];
    }
    else if (thickness == 15) { //板厚 = 15mm
      bend_cost = bend_cost_list[6][w_bend];
    }
    else {
      bend_cost = 0;
    };
  }
  else {
    bend_cost = 0;
  };


  //曲げ　数量割引
  if (width != 0 && suryo != 0) {
    if (width < 400) {
      h_width = 0;
    }
    else {
      h_width = 1;
    };

    if (suryo >= 1 && suryo <= 4) { //数量 = 1～4ヶ
      b_process_discount = b_process_discount_list[h_width][0];
    }
    else if (suryo >= 5 && suryo <= 9) { //数量 = 5～9ヶ
      b_process_discount = b_process_discount_list[h_width][1];
    }
    else if (suryo >= 10 && suryo <= 29) { //数量 = 10～30ヶ
      b_process_discount = b_process_discount_list[h_width][2];
    }
    else if (suryo >= 30 && suryo <= 99) { //数量 = 30～100ヶ
      b_process_discount = b_process_discount_list[h_width][3];
    }
    else if (suryo >= 100) { //数量 = 100ヶ以上
      b_process_discount = b_process_discount_list[h_width][4];
    }
    else {
      b_process_discount = 0;
    };
  }
  else {
    b_process_discount = 0;
  };


  //曲げ工賃 & 曲げ数量割引
  bend_price = Math.round(bend_cost * b_process_discount);


  //梱包材費
  if (width != 0 && depth != 0 && height != 0) {
    wdh = width + depth + height;
  }
  else {
    wdh = 0;
  };

  h_wdh = 0;
  if (wdh >= 1 && wdh < 600) { //横幅 + 奥行き + 高さ = 1mm以上～600mm未満
    h_wdh = 0;
  }
  else if (wdh >= 600 && wdh < 1000) { //横幅 + 奥行き + 高さ = 600mm以上～1000mm未満
    h_wdh = 1;
  }
  else if (wdh >= 1000 && wdh < 1500) { //横幅 + 奥行き + 高さ = 1000mm以上～1500mm未満
    h_wdh = 2;
  }
  else if (wdh >= 1500) { //横幅 + 奥行き + 高さ = 1500mm以上
    h_wdh = 3;
  };


  if (suryo != 0) {
    if (suryo >= 1 && suryo < 3) { //数量 = 1～2ヶ
      packing_cost = packing_cost_list[h_wdh][0];
    }
    else if (suryo >= 3 && suryo < 5) { //数量 = 3～4ヶ
      packing_cost = packing_cost_list[h_wdh][1];
    }
    else if (suryo == 5) { //数量 = 5ヶ
      packing_cost = packing_cost_list[h_wdh][2];
    }
    else if (suryo >= 6) { //数量 = 6ヶ以上
      packing_cost = packing_cost_list[h_wdh][3];
    }
    else {
      packing_cost = 0;
    };
  }
  else {
    packing_cost = 0;
  };


  if (wdh >= ymt_size) {
    packing_cost = packing_cost + ymt_bin;
  };

  //単価計
  price = plate_price + Math.round((bend_price + packing_cost) * taxRateValue);

  //アラート
  if (document.form1.width.value.match(/[^0-9]/g)) {
    alert("半角数字(小数点以下は不可)で入力してください。\n（全角文字を入力すると見積りシートが正しく動作しません）");
    alert_check = 1;
  };

  if (document.form1.depth.value.match(/[^0-9]/g)) {
    alert("半角数字(小数点以下は不可)で入力してください。\n（全角文字を入力すると見積りシートが正しく動作しません）");
    alert_check = 1;
  };

  if (document.form1.height.value.match(/[^0-9]/g)) {
    alert("半角数字(小数点以下は不可)で入力してください。\n（全角文字を入力すると見積りシートが正しく動作しません）");
    alert_check = 1;
  };

  if (document.form1.suu.value.match(/[^0-9]/g)) {
    alert("半角数字(小数点以下は不可)で入力してください。\n（全角文字を入力すると見積りシートが正しく動作しません）");
    alert_check = 1;
  };


  //サイズ関連
  switch (Number(thickness)) {
    case 2:
    division = process_max_size[0].split(",");
    division_f = flexure_size[0].split(","); //板厚 = 2mm"151,251"
    break;
    case 3:
    division = process_max_size[1].split(",");
    division_f = flexure_size[1].split(","); //板厚 = 3mm"251,351"
    break;
    case 5:
    division = process_max_size[2].split(",");
    division_f = flexure_size[2].split(","); //板厚 = 5mm"251,451"
    break;
    case 8:
    division = process_max_size[3].split(",");
    division_f = flexure_size[3].split(","); //板厚 = 8mm"301,551"
    break;
    case 10:
    division = process_max_size[4].split(",");
    division_f = flexure_size[4].split(","); //板厚 = 10mm"301,601"
    break;
    case 13:
    division = process_max_size[5].split(",");
    division_f = flexure_size[5].split(","); //板厚 = 13mm"401,651"
    break;
    case 15:
    division = process_max_size[6].split(",");
    division_f = flexure_size[6].split(","); //板厚 = 15mm
    break;
    default:
    break;
  };


  if (thickness != "選択下さい") {
    if (width != 0) {
      if (width < Number(division[0]) || width > Number(division[1])) {
        alert("横幅が加工範囲を超えております。\n「厚さ別 加工範囲に関する詳細」をご確認ください。");
        alert_check = 1;
      };
    };

    if (depth != 0) {
      if (depth < Number(division[2]) || depth > Number(division[3])) {
        alert("奥行が加工範囲を超えております。\n「厚さ別 加工範囲に関する詳細」をご確認ください。");
        alert_check = 1;
      };
    };

    if (height != 0) {
      if (height < Number(division[4]) || height > Number(division[5])) {
        alert("高さが加工範囲を超えております。\n「厚さ別 加工範囲に関する詳細」をご確認ください。");
        alert_check = 1;
      };
    };
  };

  //色ごとに最大サイズ判定
  max_size = 0;
  sum_size = width + height * 2;

  if (color.indexOf("マット") != -1 || color.indexOf("エッジ") != -1) {
    max_size = 1830;
  }
  else if (color.indexOf("集光") != -1) {
    max_size = 1000;
  }
  else {
    max_size = 2000;
  };

  if (width != 0 && depth != 0 && height != 0 && thickness != "選択下さい" && suryo != 0) {
    if (max_size < sum_size) {
      alert("アクリルの色別加工範囲を超えております。\n「厚さ別 加工範囲に関する詳細」をご確認ください。");
      alert_check = 1;
    };
  };

  if (depth != 0 && height != 0) {
    if (height > (depth * 4)) {
      alert("高さは、奥行きの4倍以内の長さにしてください。");
      alert_check = 1;
    };
  };

  //たわみ・グラ付き警告
  if (width != 0 && depth != 0 && height != 0 && thickness != "選択下さい" && suryo != 0 && alert_check != 1) {

    if (thickness != 15) {
      if (height >= division_f[0]) { //①高さアラート
        alert("台として使用する場合、脚がグラ付く可能性があり、\n厚さを増すことをお勧めします。");
        alert_flag = 1;
      };

      if (width >= division_f[1]) { //②幅アラート
        alert("台として使用する場合、天板がたわむ可能性があり、\n厚さを増すことをお勧めします。");
        alert_flag = 1;
      };
    };

    if ((width / depth) >= division_f[2]) { //③奥行に対し、幅の比率アラート
      alert("台として使用する場合、天板がたわむ可能性があり、\n奥行を広げることをお勧めします。");
      alert_flag = 1;
    };
  };

  //数量
  if (suryo != 0) {
    if(suryo> max_suryo_a){
      alert(max_suryo_a+1 + "個以上は、別途お問い合わせください。");
      alert_check = 1;
    };
  };

  //重量
  if (weight >= 15) {
    alert("1個あたりの重量が15kg以上はお受けできません。");
    alert_check = 1;
  };

  haisou_chg(wdh);

  /* 配送方補判断 */
  konpo_su = suryo;

  haisou_cost = 0;
  area_cost = 0;

  haisou_method = "";
  haisou_no = "";
  enpo_deliver = "";

  if (alert_check == 0 && width != 0 && depth != 0 && height != 0 && thickness != "選択下さい" && suryo != 0) {

    itemno = "semi_konoji";
    if (wdh >= ymt_size) {
      itemno = itemno + "_B";
      /**/
      if (document.form1.souhu_info.value == "個人") {
        haisou_method = "個人様向け配送料 一式";
        haisou_no = "KMD";
        enpo_deliver = "EPD_K";
        if (wdh >= ymt_size && wdh <= oogata_R) {
          haisou_cost = haisou_cost_list[0];
          area_cost = area_cost_list[0];
        }
        else if (wdh > oogata_R && wdh <= oogata_M) {
          itemno = itemno + "_R";

          haisou_cost = haisou_cost_list[1];
          area_cost = area_cost_list[1];
        }
        else if (wdh > oogata_M && wdh <= oogata_G) {
          itemno = itemno + "_M";

          haisou_cost = haisou_cost_list[2];
          area_cost = area_cost_list[2];
        }
        else if (wdh > oogata_G && wdh <= oogata_O) {
          itemno = itemno + "_G";

          haisou_cost = haisou_cost_list[3];
          area_cost = area_cost_list[3];
        }
        else {
          if (wdh > oogata_O) {
            alert("配送の都合上、個人のお客様には入力されたサイズは販売できません。\nW＋H＝" + oogata_O + " 以下となるようにご入力下さい。");
            alert_check = 1;
          };
          itemno = "";
          konpo_su = 0;
          haisou_cost = 0;
          area_cost = 0;
        };

        document.form1.haisou_cost.value = String(haisou_cost * konpo_su).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        document.form1.area_cost.value = String(area_cost * konpo_su).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      }
      else {
        if (wdh > ymt_size_max) {
          haisou_method = "法人様向け配送料 一式";
          haisou_no = "HMD";
          enpo_deliver = "EPD_H";
          itemno = itemno + "_H";
          haisou_cost = 0;
          area_cost = area_cost_list[4];
          document.form1.area_cost.value = String(area_cost * konpo_su).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        }
        else {
          haisou_method = "";
          haisou_no = "";
          enpo_deliver = "";
          haisou_cost = 0;
          area_cost = 0;
          document.form1.area_cost.value = 0;
        };
      };
      /**/
    };

    //document.form1.price.value = price;
    //document.form1.total.value = price * suryo;
    document.form1.price.value = String(price).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    document.form1.total.value = String(price * suryo).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    document.form1.sipri[0].value = "::" + price;
    document.form1.itemsh.value = "_横幅: " + width + "_mm　高さ: " + height + "_mm　奥行き: " + depth + "_mm　板厚: " + thickness + "_mm　色:";
    if (alert_flag == 1) {
      document.form1.opt1.value = "◆";
    }
    else {
      document.form1.opt1.value = "";
    };

    document.form1.itemno[0].value = itemno;
    document.form1.suryo[0].value = suryo;

    document.form1.itemna[1].value = haisou_method;
    document.form1.itemno[1].value = haisou_no;
    document.form1.suryo[1].value = 1;
    document.form1.sipri[1].value = "::" + haisou_cost * konpo_su;

    document.form1.itemna[2].value = "遠方配送料 一式（本州除く）";
    document.form1.itemno[2].value = enpo_deliver;
    document.form1.suryo[2].value = 1;
    document.form1.sipri[2].value = "::" + area_cost * konpo_su;
  }
  else {
    document.form1.price.value = 0;
    document.form1.total.value = 0;
    document.form1.sipri.value = "::" + 0;
    document.form1.itemsh.value = "";
  };
}



function Form_Submit() {


  width = Number(document.form1.width.value);
  depth = Number(document.form1.depth.value);
  height = Number(document.form1.height.value);
  thickness = document.form1.thickness.value;
  color = document.form1.color.value;
  suryo = Number(document.form1.suu.value);


  //アラート
  alert_check = 0;

  if (document.form1.width.value.match(/[^0-9]/g)) {
    alert("半角数字(小数点以下は不可)で入力してください。\n（全角文字を入力すると見積りシートが正しく動作しません）");
    alert_check = 1;
  };

  if (document.form1.depth.value.match(/[^0-9]/g)) {
    alert("半角数字(小数点以下は不可)で入力してください。\n（全角文字を入力すると見積りシートが正しく動作しません）");
    alert_check = 1;
  };

  if (document.form1.height.value.match(/[^0-9]/g)) {
    alert("半角数字(小数点以下は不可)で入力してください。\n（全角文字を入力すると見積りシートが正しく動作しません）");
    alert_check = 1;
  };

  if (document.form1.suu.value.match(/[^0-9]/g)) {
    alert("半角数字(小数点以下は不可)で入力してください。\n（全角文字を入力すると見積りシートが正しく動作しません）");
    alert_check = 1;
  };


  //サイズ関連
  switch (Number(thickness)) {
    case 2:
    division = process_max_size[0].split(",");
    break;
    case 3:
    division = process_max_size[1].split(",");
    break;
    case 5:
    division = process_max_size[2].split(",");
    break;
    case 8:
    division = process_max_size[3].split(",");
    break;
    case 10:
    division = process_max_size[4].split(",");
    break;
    case 13:
    division = process_max_size[5].split(",");
    break;
    case 15:
    division = process_max_size[6].split(",");
    break;
    default:
    break;
  };

  if (thickness == "選択下さい") {
    alert("板厚を入力してください。");
    alert_check = 1;
  };

  if (thickness != "選択下さい") {
    if (width != 0) {
      if (width < Number(division[0]) || width > Number(division[1])) {
        alert("横幅が加工範囲を超えております。\n「厚さ別 加工範囲に関する詳細」をご確認ください。");
        alert_check = 1;
      };
    }
    else {
      alert("横幅を入力してください。");
      alert_check = 1;
    };

    if (depth != 0) {
      if (depth < Number(division[2]) || depth > Number(division[3])) {
        alert("奥行が加工範囲を超えております。\n「厚さ別 加工範囲に関する詳細」をご確認ください。");
        alert_check = 1;
      };
    }
    else {
      alert("奥行を入力してください。");
      alert_check = 1;
    };

    if (height != 0) {
      if (height < Number(division[4]) || height > Number(division[5])) {
        alert("高さが加工範囲を超えております。\n「厚さ別 加工範囲に関する詳細」をご確認ください。");
        alert_check = 1;
      };
    }
    else {
      alert("高さを入力してください。");
      alert_check = 1;
    };
  };

  //色ごとに最大サイズ判定
  max_size = 0;
  sum_size = width + height * 2;

  if (color.indexOf("マット") != -1 || color.indexOf("エッジ") != -1) {
    max_size = 1830;
  }
  else if (color.indexOf("集光") != -1) {
    max_size = 1000;
  }
  else {
    max_size = 2000;
  };

  if (width != 0 && depth != 0 && height != 0 && thickness != "選択下さい" && suryo != 0) {
    if (max_size < sum_size) {
      alert("アクリルの色別加工範囲を超えております。\n「厚さ別 加工範囲に関する詳細」をご確認ください。");
      alert_check = 1;
    };
  };

  if (depth != 0 && height != 0) {
    if (height > (depth * 4)) {
      alert("高さは、奥行きの4倍以内の長さにしてください。");
      alert_check = 1;
    };
  };

  //数量
  if (suryo != 0) {
    if(suryo> max_suryo_a){
      alert(max_suryo_a+1 + "個以上は、別途お問い合わせください。");
      alert_check = 1;
    };
  }
  else {
    alert("数量を入力してください。");
    alert_check = 1;
  };

  //重量
  if (weight >= 15) {
    alert("1個あたりの重量が15kg以上はお受けできません。");
    alert_check = 1;
  };

  if (alert_check == 0) {
    document.form1.submit();
  }
  else {
    document.form1.price.value = 0;
    document.form1.total.value = 0;
    document.form1.sipri.value = "::" + 0;
    document.form1.itemsh.value = "";
  };

}

function torisuu_calculation(v_width, v_height, v_w_max_size, v_h_max_size) {
  //切りシロ3mmプラス
  v_width = v_width + 3;
  v_height = v_height + 3;

  Ww_Hh_width(v_width, v_height, v_w_max_size, v_h_max_size);
  Ww_Hh_height(v_width, v_height, v_w_max_size, v_h_max_size);
  Wh_Hw_width(v_width, v_height, v_w_max_size, v_h_max_size);
  Wh_Hw_height(v_width, v_height, v_w_max_size, v_h_max_size);

  torisuu = Math.max(Ww_Hh_width_torisuu, Ww_Hh_height_torisuu, Wh_Hw_width_torisuu, Wh_Hw_height_torisuu);

}


function Ww_Hh_width(v_width, v_height, v_w_max_size, v_h_max_size) {
  //通常方向　横方向余りから計算
  W_w = Math.floor(v_w_max_size / v_width);
  H_h = Math.floor(v_h_max_size / v_height);

  torisuu = W_w * H_h;

  if (torisuu == 0) {
    Ww_Hh_width_torisuu = 0;
  }
  else {
    material_width = v_w_max_size - W_w * v_width;
    material_height = v_h_max_size;

    if ((material_width >= v_width && material_height >= v_height) || (material_width >= v_height && material_height >= v_width)) {
      //通常方向取数
      W_w = Math.floor(material_width / v_width);
      H_h = Math.floor(material_height / v_height);
      Ww_Hh_torisuu = W_w * H_h;
      //逆方向取数
      W_h = Math.floor(material_width / v_height);
      H_w = Math.floor(material_height / v_width);
      Wh_Hw_torisuu = W_h * H_w;

      if (Ww_Hh_torisuu >= Wh_Hw_torisuu) {
        torisuu = torisuu + Ww_Hh_torisuu;
      }
      else {
        torisuu = torisuu + Wh_Hw_torisuu;
      };
    };
    Ww_Hh_width_torisuu = torisuu;
  };

}


function Ww_Hh_height(v_width, v_height, v_w_max_size, v_h_max_size) {
  //通常方向　縦方向余りから計算
  W_w = Math.floor(v_w_max_size / v_width);
  H_h = Math.floor(v_h_max_size / v_height);

  torisuu = W_w * H_h;

  if (torisuu == 0) {
    Ww_Hh_height_torisuu = 0;
  }
  else {
    material_width = v_w_max_size;
    material_height = v_h_max_size - H_h * v_height;

    if ((material_width >= v_width && material_height >= v_height) || (material_width >= v_height && material_height >= v_width)) {
      //通常方向取数
      W_w = Math.floor(material_width / v_width);
      H_h = Math.floor(material_height / v_height);
      Ww_Hh_torisuu = W_w * H_h;
      //逆方向取数
      W_h = Math.floor(material_width / v_height);
      H_w = Math.floor(material_height / v_width);
      Wh_Hw_torisuu = W_h * H_w;

      if (Ww_Hh_torisuu >= Wh_Hw_torisuu) {
        torisuu = torisuu + Ww_Hh_torisuu;
      }
      else {
        torisuu = torisuu + Wh_Hw_torisuu;
      };
    };
    Ww_Hh_height_torisuu = torisuu;
  };
}


function Wh_Hw_width(v_width, v_height, v_w_max_size, v_h_max_size) {
  //逆方向　横方向余りから計算
  W_h = Math.floor(v_w_max_size / v_height);
  H_w = Math.floor(v_h_max_size / v_width);

  torisuu = W_h * H_w;

  if (torisuu == 0) {
    Wh_Hw_width_torisuu = 0;
  }
  else {
    material_width = v_w_max_size - W_h * v_height
    material_height = v_h_max_size

    if ((material_width >= v_width && material_height >= v_height) || (material_width >= v_height && material_height >= v_width)) {
      //通常方向取数
      W_w = Math.floor(material_width / v_width);
      H_h = Math.floor(material_height / v_height);
      Ww_Hh_torisuu = W_w * H_h;
      //逆方向取数
      W_h = Math.floor(material_width / v_height);
      H_w = Math.floor(material_height / v_width);
      Wh_Hw_torisuu = W_h * H_w;

      if (Ww_Hh_torisuu >= Wh_Hw_torisuu) {
        torisuu = torisuu + Ww_Hh_torisuu;
      }
      else {
        torisuu = torisuu + Wh_Hw_torisuu;
      };
    };
    Wh_Hw_width_torisuu = torisuu;
  };
};


function Wh_Hw_height(v_width, v_height, v_w_max_size, v_h_max_size) {
  //逆方向　縦方向余りから計算
  W_h = Math.floor(v_w_max_size / v_height);
  H_w = Math.floor(v_h_max_size / v_width);

  torisuu = W_h * H_w;

  if (torisuu == 0) {
    Wh_Hw_height_torisuu = 0;
  }
  else {
    material_width = v_w_max_size
    material_height = v_h_max_size - H_w * v_width

    if ((material_width >= v_width && material_height >= v_height) || (material_width >= v_height && material_height >= v_width)) {
      //通常方向取数
      W_w = Math.floor(material_width / v_width);
      H_h = Math.floor(material_height / v_height);
      Ww_Hh_torisuu = W_w * H_h;
      //逆方向取数
      W_h = Math.floor(material_width / v_height);
      H_w = Math.floor(material_height / v_width);
      Wh_Hw_torisuu = W_h * H_w;

      if (Ww_Hh_torisuu >= Wh_Hw_torisuu) {
        torisuu = torisuu + Ww_Hh_torisuu;
      }
      else {
        torisuu = torisuu + Wh_Hw_torisuu;
      };
    };
    Wh_Hw_height_torisuu = torisuu;
  };
}

function haisou_chg(wdh) {
  if (wdh <= ymt_size_max) {
    document.getElementById('haisou').style.display = "none";
    document.getElementById('kojin_deliver').style.display = "none";
    document.getElementById('area_deliver').style.display = "none";
  }
  else {
    document.getElementById('haisou').style.display = "";
    if (document.form1.souhu_info.value == "個人") {
      document.getElementById('kojin_deliver').style.display = "";
    }
    else {
      document.getElementById('kojin_deliver').style.display = "none";
    };
    document.getElementById('area_deliver').style.display = "";
  };
}

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
    material_price = Math.round(material_cost * zairyou_kei);
  }
  else {
    material_price = 0;
  };
  return material_price;
}
