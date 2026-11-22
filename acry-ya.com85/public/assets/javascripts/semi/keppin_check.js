var chk_flg = 0; //確認チェックなし
//var chk_flg = 1;	//確認チェックあり

function doui_chk() {
  doui_flg = 0;

  if (chk_flg == 1) {
    if (document.form_semiorder.doui.checked != true) {
      alert("下記のメーカー欠品情報をご確認の上、\n「欠品情報チェック」 にチェックを入れてください");
      doui_flg = 1;
    };
  };

  return doui_flg;
}

function doui_chk2() {
  doui_flg = 0;

  if (chk_flg == 1) {
    if (document.form_semiorder.doui2.checked != true) {
      alert("下記のメーカー欠品情報をご確認の上、\n「欠品情報チェック」 にチェックを入れてください");
      doui_flg = 1;
    };
  };

  return doui_flg;
}


function doui_chk_nasi() {
  if (chk_flg != 1) {
    document.getElementById('doui_kakunin').style.display = "none"
    document.getElementById('doui_kakunin2').style.display = "none"
  };
}
