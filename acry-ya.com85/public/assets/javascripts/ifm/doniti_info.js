today = new Date();

yy = today.getFullYear();
mm = today.getMonth()+1;
dd = today.getDate();
hh = today.getHours();
mnt = today.getMinutes();


if (yy < 2000) { yy += 1900; }
if (mm < 10) { mm = "0" + mm; }
if (dd < 10) { dd = "0" + dd; }
if (hh < 10) { hh = "0" + hh; }
if (mnt < 10) { mnt = "0" + mnt; }

let kyugyo_btn='<span class="c-label--xl--stpSelling">販売停止中</span>';

$(document).ready(function(){
  now_date = String(yy) + String(mm) + String(dd) + String(hh) + String(mnt);
  $('#cartInfo_text').text("");
  if ((now_date > Number(202004281730) ) && (now_date < Number(202005270900) )){
    $('#cartInfo_text').text("4月28日営業終了（PM5：30）以降、ご注文を停止させて頂きます。注文再開は休業明けの5月7日(AM9:00)より再開と致します。");
    document.getElementById('add_to_cart').style.display = "none";

    $('#cartInfo_text').after(kyugyo_btn);
  };
});
