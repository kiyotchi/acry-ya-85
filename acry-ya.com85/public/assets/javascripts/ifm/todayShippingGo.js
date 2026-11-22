MsgCnt = 3;
let todayShipping=new Array(MsgCnt);
todayShipping[0]='<div><div><div class="c-flame--xs-todayShipping" id="todayShipping"><p class="c-heading--sm">翌日配送サービス承ります</p>';
todayShipping[1]='<p>午前9～11時までの電話予約に限り、在庫がある場合、翌日配送サービスに対応致します。</p><p><a href="/guide/next-day-delivery/" class="c-button--todayShipping--early">詳細はこちら</a></p>';
todayShipping[2]='</div></div></div>';

shipMsg=todayShipping[0]+todayShipping[1]+todayShipping[2];

$(document).ready(function(){
  $(shipMsg).insertAfter('.mainVisual__description');
});
