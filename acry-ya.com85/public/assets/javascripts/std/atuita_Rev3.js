/************************************************/
/*                                              */
/*        アクリル厚板 フリーカット             */
/*                                              */
/*        2014/02/07 消費税8%対応               */
/*        2016/04/05 価格改定に伴う大幅修正     */
/*        2017/06/21 ヤマト便対応               */
/*        2019/05/09 価格改定                   */
/*        2021/01/29 価格改定                   */
/*        2021/02/16 社内出荷対応               */
/************************************************/

//参照用
var div_prev;

//計算用
var div_next;
var division;

// 初回フラグ
let first_flg=0;

function keisan1()
{
  // 出荷目安補足を表示
  $('#delivery_supplementation_txt').html("※板厚55mm以上はお問い合わせ下さい");

  let tanmen = document.formAtsu.tanmen.value;

  // カラー写真切替
  img_chg(tanmen);
  if(tanmen=="磨き仕上"){
    document.getElementById('makerdirect').style.display = "none";
    // メーカ直送タグを削除
    if($('#tag_makerdirect').length){
      $('#tag_makerdirect').remove();
    }
  }
  else{
    document.getElementById('makerdirect').style.display = "";
    // メーカ直送タグを表示(既に表示されている場合は何もしない)
    if(!$('#tag_makerdirect').length){
      $('.overview__tag').append('<a class="tag__label c-label--md-black js-anchorScroll" name="tag_makerdirect" id="tag_makerdirect" href="#makerdirect">メーカー直送</a>');
    }
  }

//材料価格改定のめ55mm以上止める
  if(Number(document.formAtsu.atu.value)>50){
    document.getElementById('add_to_cart').style.display = "none";
    $('#delivery_supplementation_txt').css('color', '#DE1816');
    $('.overview__price').hide();
}
  else{
    document.getElementById('add_to_cart').style.display = "";
    $('#delivery_supplementation_txt').css('color', '#333');
    $('.overview__price').show();
  }

  if(tanmen=="磨き仕上"){
    keisan2();
    return;
  }

  itemno = "semi_atuita";
  // 品番を表示
  $('.overview__productNumber').children('dd').text(itemno);

  document.getElementById('global').style.display = "none";
  document.getElementById('kojin_deliver').style.display = "none";
  document.getElementById('area_deliver').style.display = "none";

  base_cost = 0;
  //原価
  g_price = 0;
  //比較用原価
  g_price_next = 0;

  width = Number(document.formAtsu.yoko.value);
  height = Number(document.formAtsu.tate.value);
  thickness = Number(document.formAtsu.atu.value);
  suryo = Number(document.formAtsu.suu.value);

  $('#caution_wording2_txt').text('');
  $('#caution_wording3_txt').text('');
  $('#caution_wording4_txt').text('');
  $('#caution_wording5_txt').text('');
  $('#suryo_ng_txt').text('');
  //document.formAtsu.omosa.value = "一枚当たり：";
  $('#omosa').text("一枚当たり：約 0.00 kg");

  /* 一時的なアラート 山宗さんの機械が直ったら外す #682にもあり */
  if(thickness >= 45 && thickness <= 50){
    $('#caution_wording2_txt').text("現在、板厚45mmおよび50mmは下記納期からプラス1週間程度かかります。");
  }

  //アラート
  alert_check = 0;
  if(document.formAtsu.yoko.value.match(/[^0-9]/g)){
    //			alert("半角数字(小数点以下は不可)で入力してください。\n（全角文字を入力すると見積りシートが正しく動作しません）" );
    $('#caution_wording3_txt').text("半角数字(小数点以下は不可)で入力してください。");
    alert_check = 1;
  };
  if(document.formAtsu.tate.value.match(/[^0-9]/g)){
    //		alert("半角数字(小数点以下は不可)で入力してください。\n（全角文字を入力すると見積りシートが正しく動作しません）" );
    $('#caution_wording4_txt').text("半角数字(小数点以下は不可)で入力してください。");
    alert_check = 1;
  };
  if(document.formAtsu.suu.value.match(/[^0-9]/g)){
    //		alert("半角数字(小数点以下は不可)で入力してください。\n（全角文字を入力すると見積りシートが正しく動作しません）" );
    $('#suryo_ng_txt').text("半角数字(小数点以下は不可)で入力してください。");
    alert_check = 1;
  };
  if(suryo > 300){
    //		alert("数量が300以上の場合は、別途お問い合わせください。");
    $('#suryo_ng_txt').text("数量が301以上の場合は、別途お問い合わせください。");
    alert_check = 1;
  };

  document.formAtsu.price.value = 0;
  document.formAtsu.total.value = 0;
  document.formAtsu.itemna[0].value = "";
  document.formAtsu.sipri[0].value = "";

  if(width != 0 && height != 0 && thickness != 0){
    wh = width + height;
    area = width * height;
    weight = Math.round(((area / 1000000) * thickness * specific_gravity) * 100) / 100;
    if(isNaN(weight)){
      weight=0;
    }
    $('#omosa').text("一枚当たり：約 " + weight + " kg");

    if(width < thickness || height < thickness){
      if(xxx == 0){
        //				alert("板厚より縦と横のサイズを長くして下さい。");
        $('#caution_wording4_txt').text("板厚より縦と横のサイズを長くして下さい。");
        //xxx = 1;
      };
      alert_check = 1;
    };

    if(width != 0 && width < 30){
      //			alert("最小サイズは縦横共に30mmになります。");
      $('#caution_wording3_txt').text("最小サイズは縦横共に30mmになります。");
      alert_check = 1;
    };
    if(height != 0 && height < 30){
      $('#caution_wording4_txt').text("最小サイズは縦横共に30mmになります。");
      alert_check = 1;
    }

    if(thickness <= 50){
      if(weight > 20){
        $('#caution_wording2_txt').text("板厚50mm以下で重量が20kgを超える場合はご購入頂けません。ご希望の方はお問い合わせ下さい。");
        alert_check = 1;
      };
    }
    else{
      if(weight > 60){
        $('#caution_wording5_txt').text("重量が 60kg を超える場合はご購入頂けません。");
        alert_check = 1;
      };
    };

    wdh = width + thickness + height;

    if(wdh > max_size + max_size){
      $('#caution_wording4_txt').text("「板厚 ＋ 横 ＋ 縦」 が" + max_size * 2 + "mm を超える場合はご購入頂けません。");
      alert_check = 1;
    };


    if((width > max_size) || (height > max_size)){
      //			alert("最大サイズは縦横ともに" + max_size + "mmになります");
      $('#caution_wording4_txt').text("最大サイズは縦横ともに" + max_size + "mmになります。");
      alert_check = 1;
    };

    //価格計算
    g_price1 = 0;
    g_price2 = 0;
    base_cost2 = 0;

    if(thickness > 50){
      for(i = 0; i < material_list_cnt; i++){
        div_prev = material_list[i].split(",");

        if(thickness == div_prev[0]){
          //次のデータ取得
          if(i < material_list_cnt-1){
            div_next = material_list[i + 1].split(",");
          };

          //厚みが同じ場合、面積比較を行い、仕入れ値の元となる物を取得
          if(thickness == div_next[0]){
            if(area < min_size * min_size){
              base_cost = div_prev[2];
              base_area = div_prev[3];
              break;
            }
            else if(area >= div_prev[3] && area < div_next[3]){
              base_cost = Number(div_prev[2]);
              base_area = Number(div_prev[3]);

              base_cost2 = (area - base_area) / (div_next[3] - base_area) * (div_next[2] - base_cost) + base_cost;

              base_cost_next = div_next[2];
              g_price_next = base_cost_next * suryo;
              break;
            }
            //900角以上
            else{
              if(max_size * max_size == div_prev[3] && area >= max_size * max_size){
                base_cost = div_prev[2];
                base_area = div_prev[3];
                break;
              };
            };
          }
          else{
            base_cost = div_prev[2];
            base_area = div_prev[3];
            break;
          };
        };
      };

      g_price1 = base_cost * area / base_area * suryo;
      g_price2 = base_cost2 * suryo;

      if(g_price2 > g_price1){
        g_price = g_price2;
      }
      else{
        g_price = g_price1;
      };

      //面積により価格が逆転する場合
      if(g_price_next > 0 && g_price > g_price_next){
        g_price = g_price_next;
      };

      if(g_price < 5000){
        g_price = g_price + cyosei_cost;
      };

      //粗利係数取得
      if(g_price >= 1 && g_price < 5000){
        profit = profit_list[0];
      }
      else if(g_price >= 5000 && g_price < 10000){
        profit = profit_list[1];
      }
      else if(g_price >= 10000 && g_price < 30000){
        profit = profit_list[2];
      }
      else if(g_price >= 30000 && g_price < 50000){
        profit = profit_list[3];
      }
      else if(g_price >= 50000 && g_price < 100000){
        profit = profit_list[4];
      }
      else if(g_price >= 100000 && g_price < 300000){
        profit = profit_list[5];
      }
      else if(g_price >= 300000){
        profit = profit_list[6];
      };

      total = g_price / profit;
    }
    else{
      total = get_torisu_price(thickness,width,height,suryo);
    };

    //単価
    sale_price = Math.round(total / suryo * tax);
    //合計金額
    total_sale_price = sale_price * suryo;

    makerInfo="（※メーカー直送品）";
    if(thickness<=50){
      makerInfo="";
      if(weight>=20){
        makerInfo="";
      };
    };

    if(suryo != 0 && alert_check == 0){
      document.formAtsu.price.value = String(sale_price).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      document.formAtsu.total.value = String(total_sale_price).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      document.formAtsu.itemna[0].value = "アクリル板クリアーキャスト材_W:" + width + " × H:" + height + "mm_板厚:" + thickness + "mm_カットのみ " + makerInfo;
      document.formAtsu.sipri[0].value = "::" + sale_price;
      document.formAtsu.itemno[0].value = "semi_atuita";
      document.formAtsu.suryo[0].value = suryo;

      document.formAtsu.itemna[1].value = "";
      document.formAtsu.itemno[1].value = "";
      document.formAtsu.suryo[1].value = 0;
      document.formAtsu.sipri[1].value = "::";

      document.formAtsu.itemna[2].value = "";
      document.formAtsu.itemno[2].value = "";
      document.formAtsu.suryo[2].value = 0;
      document.formAtsu.sipri[2].value = "::";
    }
    else {
      document.formAtsu.price.value = 0;
      document.formAtsu.total.value = 0;
      document.formAtsu.itemna[0].value = "";
      document.formAtsu.sipri[0].value = "";
    };
  };

}

function get_torisu_price(thickness,width,height,suryo)
{
  if(width != 0 && height != 0){
    wh = width + height;
  } else {
    wh = 0;
  };


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
  w_max_size = 0;
  h_max_size = 0;
  color = "クリアー";
  let v_wh=0;

  if(thickness != "選択下さい" && wh != 0 && suryo != 0){
    for(i = 0; i < material_list_cnt_a; i++){
      division = material_list_a[i].split(",");
      if(color == division[0] && thickness == Number(division[3])){
        ///数取得プログラム起動
        torisuu_calculation(width,height,Number(division[1]),Number(division[2]));
        //材料使用率
        material_rate = (width * height) / (Number(division[1]) * Number(division[2]));

        if(torisuu >= 2){
          material_cost_list[n] = Math.round(Number(division[4]) / torisuu);
          w_max_size_list[n] = Number(division[1]) - 6;
          h_max_size_list[n] = Number(division[2]) - 6;
          material_flag = 1;
        } else if(torisuu == 1){
          if(color == "クリアー"){
            material_coefficient = 1.3;
          } else {
            material_coefficient = 1.6;
          };
          if(material_rate <= 0.75){
            material_cost_list[n] = Math.round(Number(division[4]) * material_rate * material_coefficient);
            if(material_cost_list[n] > Number(division[4])){
              material_cost_list[n] = Number(division[4]);
              w_max_size_list[n] = Number(division[1]) - 6;
              h_max_size_list[n] = Number(division[2]) - 6;
            } else {
              material_cost_list[n] = Math.round(Number(division[4]) * material_rate * material_coefficient);
              w_max_size_list[n] = Number(division[1]) - 6;
              h_max_size_list[n] = Number(division[2]) - 6;
            };
            material_flag = 1;
          } else if(material_rate > 0.75){
            material_cost_list[n] = Number(division[4]);
            w_max_size_list[n] = Number(division[1]) - 6;
            h_max_size_list[n] = Number(division[2]) - 6;
            material_flag = 1;
          };
        } else if(torisuu == 0){
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
          };
        } else if(Number(material_cost_list[i]) != 0){
          if(material_cost >= Number(material_cost_list[i])){
            material_cost = Number(material_cost_list[i]);
          };
        };

        //最大サイズ取得
        if(w_max_size_list[i] != 0 && h_max_size_list[i] != 0){
          if(w_max_size == 0 && h_max_size == 0){
            w_max_size = w_max_size_list[i];
            h_max_size = h_max_size_list[i];
          } else {
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
      material_price = get_ita_tanka(material_cost, suryo);
    }

    //総重量計算→１枚当たりの重量へ変更
    weight = (width / 1000) * (height / 1000) * thickness * hijuu;

    //送料計算
    if(wh != 0 && weight != 0){
      if(wh >= 1 && wh < 500){ //横 + 縦 = 1以上～500未満
        shipping_cost = Math.ceil(shipping_cost_list[0] * weight);
      }
      else if(wh >= 500 && wh < 1500){ //横 + 縦 = 500以上～1500未満
        shipping_cost = Math.ceil(shipping_cost_list[1] * weight);
      }
      else if(wh >= 1500 && wh < 2500){ //横 + 縦 = 1500以上～2500未満
        shipping_cost = Math.ceil(shipping_cost_list[2] * weight);
      }
      else if(wh >= 2500){ //横 + 縦 = 2500以上
        shipping_cost = Math.ceil(shipping_cost_list[3] * weight);
      };
    }
    else {
      shipping_cost = 0;
    };

    //板厚別の係数フラグ
    if(thickness <= 5){
      v_thickness = 0;
    }
    else if(thickness > 5  && thickness <= 10){
      v_thickness = 1;
    }
    else if(thickness > 10  && thickness <= 20){
      v_thickness = 2;
    }
    else if(thickness > 20  && thickness <= 30){
      v_thickness = 3;
    }
    else if(thickness > 30  && thickness <= 40){
      v_thickness = 4;
    }
    else if(thickness > 40){
      v_thickness = 5;
    };

    //カット工賃取得
    cut_cost = 0;
    if(wh >= 1 && wh < 300){ //横 + 縦 = 1以上～300未満
      cut_cost = cut_cost_list[v_thickness][0];
    }
    else if(wh >= 300 && wh < 500){ //横 + 縦 = 300以上～500未満
      cut_cost = cut_cost_list[v_thickness][1];
    }
    else if(wh >= 500 && wh < 1000){ //横 + 縦 = 500以上～1000未満
      cut_cost = cut_cost_list[v_thickness][2];
    }
    else if(wh >= 1000){ //横 + 縦 = 1000以上
      cut_cost = cut_cost_list[v_thickness][3];
    }
    else {
      cut_cost = 0;
    };


    //加工数量割引取得
    process_discount = 1;

    //色の変数代入
    v_color = 0;

    //横 + 縦の変数代入
    if(wh < 300){
      v_wh = 0;
    }
    else if(wh >= 300 && wh < 500){
      v_wh = 1;
    }
    else if(wh >= 500 && wh < 1500){
      v_wh = 2;
    }
    else if(wh >= 1500){
      v_wh = 3;
    };

    if(suryo != 0){
      //数量1ヶ
      if(suryo == 1){
        process_discount = process_discount_list[v_color][v_wh][0];
      }
      //数量2ヶ
      else if(suryo == 2){
        process_discount = process_discount_list[v_color][v_wh][1];
      }
      //数量3～4ヶ
      else if(suryo >= 3 && suryo <= 4){
        process_discount = process_discount_list[v_color][v_wh][2];
      }
      //数量5～6ヶ
      else if(suryo >= 5 && suryo <= 6){
        process_discount = process_discount_list[v_color][v_wh][3];
      }
      //数量7～9ヶ
      else if(suryo >= 7 && suryo <= 9){
        process_discount = process_discount_list[v_color][v_wh][4];
      }
      //数量10～14ヶ
      else if(suryo >= 10 && suryo <= 14){
        process_discount = process_discount_list[v_color][v_wh][5];
      }
      //数量15～19ヶ
      else if(suryo >= 15 && suryo <= 19){
        process_discount = process_discount_list[v_color][v_wh][6];
      }
      //数量20～29ヶ
      else if(suryo >= 20 && suryo <= 29){
        process_discount = process_discount_list[v_color][v_wh][7];
      }
      //数量30～44ヶ
      else if(suryo >= 30 && suryo <= 44){
        process_discount = process_discount_list[v_color][v_wh][8];
      }
      //数量45～59ヶ
      else if(suryo >= 45 && suryo <= 59){
        process_discount = process_discount_list[v_color][v_wh][9];
      }
      //数量60～79ヶ
      else if(suryo >= 60 && suryo <= 79){
        process_discount = process_discount_list[v_color][v_wh][10];
      }
      //数量80～99ヶ
      else if(suryo >= 80 && suryo <= 99){
        process_discount = process_discount_list[v_color][v_wh][11];
      }
      //数量100～199ヶ
      else if(suryo >= 100 && suryo <= 199){
        process_discount = process_discount_list[v_color][v_wh][12];
      }
      //数量200～299ヶ
      else if(suryo >= 200 && suryo <= 299){
        process_discount = process_discount_list[v_color][v_wh][13];
      }
      //数量300ヶ～
      else if(suryo >= 300){
        process_discount = process_discount_list[v_color][v_wh][14];
      };
    }
    else {
      process_discount = 1;
    };

    //合算
    // ROUND(ROUND(ROUND((材料原価 + 送料 + ROUND(カット費 * 数量割)) * 材料値上げ係数1.07) * ヤマト係数1.025) / 1.05)
    bbb = 100;
    price = Math.round(Math.round(Math.round((material_price + shipping_cost + Math.round(Math.round(cut_cost * process_discount * bbb) / bbb)) * material_tax) * yamato_kei) / 1.05);
    price = price * suryo;

    return price;
  };
}

function ClickButton1(){
  alert_check = 0;
  nedan = Number(document.formAtsu.price.value);
  if(alert_check == 0 && nedan != 0){
    document.formAtsu.submit();
  }
  else{
    alert("ご注文内容が適正に入力されておりません。\n入力項目をお確かめください。\n合計金額が表示されている状態で\nカートに商品を入れてください。");
  }
}

function keisan2()
{
  base_cost = 0;
  //原価
  g_price = 0;
  //比較用原価
  g_price_next = 0;

  // 出荷目安補足を表示
  $('#delivery_supplementation_txt').html("※板厚55mm以上はお問い合わせ下さい。");

  /* re.memo 下記の「form2」を「formAtsu」に変更 */
  width = Number(document.formAtsu.yoko.value);
  height = Number(document.formAtsu.tate.value);
  thickness = Number(document.formAtsu.atu.value);
  suryo = Number(document.formAtsu.suu.value);
  itemno = "semi_atuita_p";
  // 品番を表示
  $('.overview__productNumber').children('dd').text(itemno);

  wh = width + height;
  if(isNaN(wh)){
    wh=0;
  }
  haisou_chg(wh);

  $('#haisou_ng_txt').text('');
  $('#caution_wording2_txt').text('');
  $('#caution_wording3_txt').text('');
  $('#caution_wording4_txt').text('');
  $('#caution_wording5_txt').text('');
  $('#suryo_ng_txt').text('');
  $('#omosa').text("一枚当たり：約 0.00 kg");

  /* 一時的なアラート 山宗さんの機械が直ったら外す #88にもあり*/
  if(thickness >= 45 && thickness <= 50){
    $('#caution_wording2_txt').text("現在、板厚45mmおよび50mmは下記納期からプラス1週間程度かかります。");
  }

  //アラート
  alert_check = 0;
  if(document.formAtsu.yoko.value.match(/[^0-9]/g)){
    $('#caution_wording3_txt').text("半角数字(小数点以下は不可)で入力してください。");
    alert_check = 1;
  }
  if(document.formAtsu.tate.value.match(/[^0-9]/g)){
    $('#caution_wording4_txt').text("半角数字(小数点以下は不可)で入力してください。");
    alert_check = 1;
  }
  if(document.formAtsu.suu.value.match(/[^0-9]/g)){
    $('#suryo_ng_txt').text("半角数字(小数点以下は不可)で入力してください。");
    alert_check = 1;
  }
  if(suryo > 300){
    $('#suryo_ng_txt').text("数量が301以上の場合は、別途お問い合わせください。");
    alert_check = 1;
  }

  if(width != 0 && height != 0 && thickness != 0){
    area = width * height;
    weight = Math.round(((area / 1000000) * thickness * specific_gravity) * 100) / 100;
    if(isNaN(weight)){
      weight=0;
    }

    $('#omosa').text("一枚当たり：約 " + weight + " kg");

    if(width < thickness || height < thickness){
      if(xxx2 == 0){
        $('#caution_wording4_txt').text("板厚より縦と横のサイズを長くして下さい。");
      };
      alert_check = 1;
    };

    if(width != 0 && width < 30){
      $('#caution_wording3_txt').text("最小サイズは縦横共に30mmになります。");
      alert_check = 1;
    };
    if(height != 0 && height < 30){
      $('#caution_wording4_txt').text("最小サイズは縦横共に30mmになります。");
      alert_check = 1;
    }
    if((width > max_size) || (height > max_size)){
      $('#caution_wording4_txt').text("最大サイズは縦横ともに" + max_size + "mmになります。");
      alert_check = 1;
    };

    if(weight > 20){
      $('#caution_wording5_txt').text("重量が20kgを超えるサイズは磨き加工が出来ません。");
      alert_check = 1;
    };

    //価格計算
    g_price1 = 0;
    g_price2 = 0;
    base_cost2 = 0;

    if(thickness > 50){
      for(i = 0; i < material_list_cnt; i++){
        div_prev = material_list[i].split(",");

        if(thickness == div_prev[0]){
          //次のデータ取得
          if(i < material_list_cnt-1){
            div_next = material_list[i + 1].split(",");
          };

          //厚みが同じ場合、面積比較を行い、仕入れ値の元となる物を取得
          if(thickness == div_next[0]){
            if(area < min_size * min_size){
              base_cost = div_prev[2];
              base_area = div_prev[3];
              break;
            }
            else if(area >= div_prev[3] && area < div_next[3]){
              base_cost = Number(div_prev[2]);
              base_area = Number(div_prev[3]);

              base_cost2 = (area - base_area) / (div_next[3] - base_area) * (div_next[2] - base_cost) + base_cost;

              base_cost_next = div_next[2];
              g_price_next = base_cost_next * suryo;
              break;
            }
            //900角以上
            else{
              if(max_size * max_size == div_prev[3] && area >= max_size * max_size){
                base_cost = div_prev[2];
                base_area = div_prev[3];
                break;
              };
            };
          }
          else{
            base_cost = div_prev[2];
            base_area = div_prev[3];
            break;
          };
        };
      };

      g_price1 = base_cost * area / base_area * suryo;
      g_price2 = base_cost2 * suryo;

      if(g_price2 > g_price1){
        g_price = g_price2;
      }
      else{
        g_price = g_price1;
      };

      //面積により価格が逆転する場合
      if(g_price_next > 0 && g_price > g_price_next){
        g_price = g_price_next;
      };

      if(g_price < 5000){
        g_price = g_price + cyosei_cost;
      };

      //粗利係数取得
      if(g_price >= 1 && g_price < 5000){
        profit = profit_list[0];
      }
      else if(g_price >= 5000 && g_price < 10000){
        profit = profit_list[1];
      }
      else if(g_price >= 10000 && g_price < 30000){
        profit = profit_list[2];
      }
      else if(g_price >= 30000 && g_price < 50000){
        profit = profit_list[3];
      }
      else if(g_price >= 50000 && g_price < 100000){
        profit = profit_list[4];
      }
      else if(g_price >= 100000 && g_price < 300000){
        profit = profit_list[5];
      }
      else if(g_price >= 300000){
        profit = profit_list[6];
      };

      total = g_price / profit;
    }
    else{
      total = get_torisu_price(thickness,width,height,suryo);
    };


    //磨き仕上工賃リスト
    f_thickness = 0;
    f_wh = 0;
    fraise_discount = 1;

    //磨き加工費算出用 板厚係数
    //板厚20～60mm
    if(thickness < 30){
      fc_thickness = 0;
    }
    else if(thickness >= 30 && thickness < 40){
      fc_thickness = 1;
    }
    else if(thickness >= 40 && thickness < 55){
      fc_thickness = 2;
    }
    else if(thickness >= 55 && thickness < 70){
      fc_thickness = 3;
    }
    else if(thickness >= 70 && thickness < 90){
      fc_thickness = 4;
    }
    else if(thickness >= 90){
      fc_thickness = 5;
    };

    //磨き加工数料割引用 板厚係数
    //板厚20～60mm
    if(thickness < 30){
      f_thickness = 0;
    }
    else if(thickness >= 30 && thickness < 40){
      f_thickness = 1;
    }
    else if(thickness >= 40 && thickness < 50){
      f_thickness = 2;
    }
    else if(thickness >= 50){
      f_thickness = 3;
    };

    if(wh < 200){
      f_wh = 0;
    }
    else if(wh >= 200 && wh < 400){
      f_wh = 1;
    }
    else if(wh >= 400 && wh < 800){
      f_wh = 2;
    }
    else if(wh >= 800 && wh < 1500){
      f_wh = 3;
    }
    else if(wh >= 1500){
      f_wh = 4;
    };
    fraise_price = fraise_price_list[fc_thickness][f_wh];

    if(suryo != 0){
      //数量1ヶ
      if(suryo == 1){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][0];
      }
      //数量2ヶ
      else if(suryo == 2){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][1];
      }
      //数量3～4ヶ
      else if(suryo >= 3 && suryo <= 4){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][2];
      }
      //数量5～6ヶ
      else if(suryo >= 5 && suryo <= 6){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][3];
      }
      //数量7～9ヶ
      else if(suryo >= 7 && suryo <= 9){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][4];
      }
      //数量10～14ヶ
      else if(suryo >= 10 && suryo <= 14){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][5];
      }
      //数量15～19ヶ
      else if(suryo >= 15 && suryo <= 19){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][6];
      }
      //数量20～29ヶ
      else if(suryo >= 20 && suryo <= 29){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][7];
      }
      //数量30～44ヶ
      else if(suryo >= 30 && suryo <= 44){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][8];
      }
      //数量45～59ヶ
      else if(suryo >= 45 && suryo <= 59){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][9];
      }
      //数量60～79ヶ
      else if(suryo >= 60 && suryo <= 79){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][10];
      }
      //数量80～99ヶ
      else if(suryo >= 80 && suryo <= 99){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][11];
      }
      //数量100～199ヶ
      else if(suryo >= 100 && suryo <= 199){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][12];
      }
      //数量200～299ヶ
      else if(suryo >= 200 && suryo <= 299){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][13];
      }
      //数量300ヶ～
      else if(suryo >= 300){
        fraise_discount = fraise_discount_list[f_thickness][f_wh][14];
      };
    }
    else {
      fraise_discount = 1;
    };

    //単価
    /* 配送方補判断 */
    konpo_su = Math.ceil(( thickness * suryo ) / sagawa_atu);

    haisou_cost = 0;
    area_cost = 0;
    packing_opt = 0;

    haisou_method = "";
    haisou_no = "";
    enpo_deliver = "";

    packing_opt = 0;

    if(wh >= ymt_size){
      packing_opt = Math.round(ymt_bin * tax);	//ヤマト対応
      itemno = itemno + "_B"
      /**/
      if(document.formAtsu.souhu_info.value == "個人"){
        haisou_method = "個人様向け配送料 一式";
        haisou_no = "KMD";
        enpo_deliver = "EPD_K";
        if(wh >= ymt_size && wh <= oogata_R){
          haisou_cost = haisou_cost_list[0];
          area_cost = area_cost_list[0];
        }
        else if(wh > oogata_R && wh <= oogata_M){
          itemno = itemno + "_R";

          haisou_cost = haisou_cost_list[1];
          area_cost = area_cost_list[1];
        }
        else if(wh > oogata_M && wh <= oogata_G){
          itemno = itemno + "_M";

          haisou_cost = haisou_cost_list[2];
          area_cost = area_cost_list[2];
        }
        else if(wh > oogata_G && wh <= oogata_O){
          itemno = itemno + "_G";

          haisou_cost = haisou_cost_list[3];
          area_cost = area_cost_list[3];
        }
        else{
          if(wh > oogata_O){
            //						alert("配送の都合上、個人のお客様には入力されたサイズは販売できません。\nW＋H＝" + oogata_O + " 以下となるようにご入力下さい。");
            $('#haisou_ng_txt').text("配送の都合上、個人のお客様には入力されたサイズは販売できません。\n横＋縦＝" + oogata_O + " 以下となるようにご入力下さい。");
            alert_check = 1;
          };
          itemno = "";
          haisou_cost = 0;
          area_cost = 0;
        };
        document.formAtsu.haisou_cost.value = String(haisou_cost * konpo_su).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        document.formAtsu.area_cost.value = String(area_cost * konpo_su).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      }
      else{
        if(wh > ymt_size_max){
          haisou_method = "法人様向け配送料 一式";
          haisou_no = "HMD";
          enpo_deliver = "EPD_H";
          itemno = itemno + "_H";
          haisou_cost = 0;
          area_cost = area_cost_list[4];
          document.formAtsu.area_cost.value = String(area_cost * konpo_su).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        }
        else{
          haisou_method = "";
          haisou_no = "";
          enpo_deliver = "";
          haisou_cost = 0;
          area_cost = 0;
          document.formAtsu.area_cost.value = 0;
        };
      };
    };
    sale_price = Math.round((total / suryo + (fraise_price * fraise_discount) + packing_opt) * tax);
    //合計金額
    total_sale_price = sale_price * suryo;

    if(suryo != 0 && alert_check == 0){
      document.formAtsu.price.value = String(sale_price).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      document.formAtsu.total.value = String(total_sale_price).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      document.formAtsu.itemna[0].value = "アクリル板クリアーキャスト材_W:" + width + " × H:" + height + "mm_板厚:" + thickness + "mm_磨き仕上";
      document.formAtsu.sipri[0].value = "::" + sale_price;
      document.formAtsu.itemno[0].value = itemno;
      document.formAtsu.suryo[0].value = suryo;

      document.formAtsu.itemna[1].value = haisou_method;
      document.formAtsu.itemno[1].value = haisou_no;
      document.formAtsu.suryo[1].value = 1;
      document.formAtsu.sipri[1].value = "::" + haisou_cost * konpo_su;

      document.formAtsu.itemna[2].value = "遠方配送料 一式（本州除く）";
      document.formAtsu.itemno[2].value = enpo_deliver;
      document.formAtsu.suryo[2].value = 1;
      document.formAtsu.sipri[2].value = "::" + area_cost * konpo_su;
    }
    else {
      document.formAtsu.price.value = 0;
      document.formAtsu.total.value = 0;
      document.formAtsu.itemna[0].value = "";
      document.formAtsu.sipri[0].value = "";
    };
  };

}

function haisou_chg(wh)
{
  document.getElementById('global').style.display = "";
  if(wh <= ymt_size_max){
    document.getElementById('kojin_deliver').style.display = "none";
    document.getElementById('area_deliver').style.display = "none";
    if(wh < ymt_size){
      document.getElementById('global').style.display = "none";
    };
  }
  else{
    if(document.formAtsu.souhu_info.value == "個人"){
      document.getElementById('kojin_deliver').style.display = "";
    }
    else{
      document.getElementById('kojin_deliver').style.display = "none";
    };
    document.getElementById('area_deliver').style.display = "";
  };
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
  }
  else {
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
  }
  else {
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
      }
      else {
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
  }
  else {
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
      }
      else {
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
  }
  else {
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

function img_chg(color){
  let productimage = new Image();

  switch(color){
    case "カットのみ":
    productimage.src = "/storage/images/acrylic/acry_atuita/acry_atuita_1.jpg";
    break;
    case "磨き仕上":
    productimage.src = "/storage/images/acrylic/acry_atuita/acry_atuita_2.jpg";
    break;

  }
  $('#product_pic_0').attr('src', productimage.src);

  // caption
  $('#product_caption_0').text(color);
}

function get_ita_tanka(material_cost,suryo){
  aaa = 100; //エクセルとの整合性用
  material_cost_sum = 0;
  material_cost_sum = material_cost * suryo;
  if (material_cost_sum > 0) {
    for (i = 0; i < keisu_cnt; i++) {
      if(material_cost_sum < orgTanka[keisu_cnt-1]){
        if((material_cost_sum >= orgTanka[i]) && (material_cost_sum < orgTanka[i+1])){
          zairyou_kei = (h_zairyou_k[i] * aaa - h_zairyou_k[i+1] * aaa) / (orgTanka[i+1] - orgTanka[i]) / aaa;
          zairyou_kei = Math.round(((h_zairyou_k[i+1] * aaa + (orgTanka[i+1] - material_cost_sum) * zairyou_kei * aaa) / aaa) * 100) / 100;
        }
      }
      else{
        if(material_cost_sum >= orgTanka[i]){
          zairyou_kei=h_zairyou_k[i];
        }
      }
    }
    return Math.round(material_cost * zairyou_kei);;
  }
  else{
    return 0;
  }
}
