msgCnt = 33;
let infoMsg=new Array(msgCnt);

infoMsg[0]='<div class="l-article--column-1">';
infoMsg[1]='  <div  id="castToggle" class="article__content js-accordion"><a class="js-accordion__trigger" style="color:#ff0000;"><i class="c-icon--toggle--castInfo"></i>カーマイン、オレンジ、スカイブルー、レモン、メーカー変更に伴う色味について</span></a>';
infoMsg[2]='    <div class="js-accordion__content">';
infoMsg[3]='      <div class="l-article--column-1">';
infoMsg[4]='        <ul class="article__content c-list">';
infoMsg[5]='          <li class="list__item">現在スミペックスのものを提供しておりますが、メーカー製造設備不具合の関係で、材料がご用意出来なくなりました。</li>';
infoMsg[6]='          <li class="list__item">今後は在庫なくなり次第、順次カナセライトの製品に切り替えていきますので予めご了承ください。</li>';
infoMsg[7]='        </ul>';
infoMsg[8]='      </div>';
infoMsg[9]='      <p class="c-heading--sm">色味の違い</p>';
infoMsg[10]='      <div class="l-article--column-2">';
infoMsg[11]='        <div class="article__content"><img src="/storage/images/diy/acry_plate_semi/acry_plate_semi_carmine_hikaku.jpg"" class="js-modal--image">';
infoMsg[12]='          <p class="c-text--sm-center">カーマイン</p>';
infoMsg[13]='        </div>';
infoMsg[14]='        <div class="article__content"><img src="/storage/images/diy/acry_plate_semi/acry_plate_semi_orange_hikaku.jpg"" class="js-modal--image">';
infoMsg[15]='          <p class="c-text--sm-center">オレンジ</p>';
infoMsg[16]='        </div>';
infoMsg[17]='        <div class="article__content"><img src="/storage/images/diy/acry_plate_semi/acry_plate_semi_skyblue_hikaku.jpg"" class="js-modal--image">';
infoMsg[18]='          <p class="c-text--sm-center">スカイブルー</p>';
infoMsg[19]='        </div>';
infoMsg[20]='        <div class="article__content"><img src="/storage/images/diy/acry_plate_semi/acry_plate_semi_lemon_hikaku.jpg"" class="js-modal--image">';
infoMsg[21]='          <p class="c-text--sm-center">レモン</p>';
infoMsg[22]='        </div>';
infoMsg[23]='        <ul class="c-list--md-note">';
infoMsg[24]='          <li class="list__item">カナセライトの製品はスミペックスに比べ濃い色味となります。</li>';
infoMsg[25]='          <li class="list__item">表記は3mm厚の全光線透過率になります。</li>';
infoMsg[26]='          <li class="list__item">色味の比較には<a href="/sample_item/" target="_blank">無料サンプル請求</a>をご利用ください。</li>';
infoMsg[27]='          <li class="list__item">メーカーのご指定がある場合は<a href="/support/contact/" target="_blank">お問い合わせ</a>ください。</li>';
infoMsg[28]='        </ul>';
infoMsg[29]='      </div>';
infoMsg[30]='    </div>';
infoMsg[31]='  </div>';
infoMsg[32]='</div>';

$(document).ready(function(){
  castInfoMsg = '';
  for(i=0;i<msgCnt;i++){
    castInfoMsg = castInfoMsg + infoMsg[i];
  }
  $('.mainVisual__description').after(castInfoMsg);
});
