let mainteInfo='<ul class="c-list--note--sm"><li class="list__item__danger">10/29(火)22：00～翌00:00、サーバーメンテナンスのため一時的にシミュレーター画面が閲覧出来なくなります。</li></ul>';

now  = new Date();
yy = now.getYear();
mm = now.getMonth() + 1;
dd = now.getDate();
hh = now.getHours();

if (yy < 2000) { yy += 1900; }
if (mm < 10) { mm = "0" + mm; }
if (dd < 10) { dd = "0" + dd; }

now_date = String(yy) + String(mm) + String(dd) + String(hh);

$(document).ready(function(){

  if(Number(now_date) < 2024103001){
    $('#detailChk').after(mainteInfo);
  }
});
