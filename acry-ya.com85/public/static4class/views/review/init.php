<?php
/* ===========================================================================
 * 埋め込みレビュー表示
 * @Author
 * ========================================================================= */
?>
<!-- 埋め込み版レビュー -->
<script>
var customer_feedback_pc_word = '<?= $keyword ?>';
</script>

<link rel="stylesheet" href="/assets/rating/css/style.css">

<?php if( $keyword != '' && $pageInfoList['allCount'] >0  ): ?>
<a name="reviews-area" id="reviews-area"></a>
<section class="p-voice c-section">
        <h2 class="section__title c-heading--lg-border">お客様の声 <br class="br-sp">（製品ご使用後のご感想）</h2>
        <div class="customer-review-header">
          <!-- 星平均 -->
          <div class="star-avarage">
            <div class="detail-rating" data-avarage="<?= $pageInfoList['avarage'] ?>">
              <div class="detail-rating-avarage-star"></div>
            </div>
            <div class="avarage">星5つ中の<?= $pageInfoList['avarage'] ?></div>
            <div class="count"><?= number_format( $pageInfoList['allCount'] ) ?>件</div>
          </div>
          <!-- /星平均 -->
          <!-- 星別合計 -->
          <div class="star-list">
            <table class="star-table">
              <tbody>
                <?php  $starCnt = 5; ?>
                <?php foreach($pageInfoList['stars'] as $star => $point ): ?>
                <tr class="list-item">
                  <td>
                    <div
                      class="list-rating list-rating<?= $starCnt ?> count"
                      data-star="<?= $starCnt ?>"
                      data-target-point="<?= $starCnt ?>"
                    >
                      <div class="detail-rating-avarage-star"></div>
                    </div>
                  </td>
                  <td>
                    <span class="count" data-target-point="<?= $starCnt ?>">(<?= number_format($point) ?>)</span>
                  </td>
                  <td>
                    <span
                      class="star-percentage star-percentage-<?= $starCnt ?>"
                      data-progress-all="<?= $pageInfoList['allCount'] ?>"
                      data-progress-this="<?= $point ?>"
                      data-progress-star="<?= $starCnt ?>"
                    ></span>
                  </td>
                </tr>
                <?php  $starCnt --; ?>
                <?php endforeach; ?>
              </tbody>
            </table>
          </div>
          <!-- /星別合計 -->
        </div>

        <!-- レビュー並び替え -->
        <div class="review-sort">
          <p class="review-sort-heading">並び替え</p>
          <div class="review-sort-inner">
            <form class="">
              <select class="review-sort-select" name="">
                <option value="新着順">新着順</option>
                <option value="古い順">古い順</option>
                <option value="評価が高い順">評価が高い順</option>
                <option value="評価が低い順">評価が低い順</option>
                <option value="写真付">写真付</option>
              </select>
            </form>
          </div>
        </div>
        <!-- /レビュー並び替え -->

        <!-- レビューリスト -->
        <div class="customer-review-list">
          <?php foreach( $reviews as $num => $reviewItem ): ?>
            <div class="customer-review-item">
              <img class="user-icon" src="/assets/images/icon/icon_user.svg">
              <p class="review-date">
                <?= date('Y年m月d日', strtotime( $reviewItem->created_at ) ) ?>
              </p>
              <div class="item-row review-star">
                <span class="text">製品評価</span>
                <div class="review-rating review-rating<?= $num ?>" data-star="<?= $reviewItem->star ?>" data-revire-val="star">
                  <div class="detail-rating-avarage-star"></div>
                </div>
                
              </div>
              <div class="item-row">
                <p class="review-name" data-revire-val="name"><?= $reviewItem->name ?>様</p>
                <p class="review-productname" data-revire-val="productname"><?= $reviewItem->keyword1 ?></p>
              </div>
              <p class="review-title" data-revire-val="title"><?= $reviewItem->title ?></p>
              <div class="review-content" data-revire-val="content">
                <?= nl2br(e($reviewItem->content)) ?>
              </div>
              <a href="javascript:void(0);" class="fold-btn">▼続きを読む</a>
              <div class="review-img-area <?php if(empty($reviewItem->file)): ?>rating-hidden<?php endif; ?>">
                <img
                  class="js-modal--image review-img"
                  <?php if( $reviewItem->file != ''): ?>
                    src="/storage/reviewimages<?= getenv('FRONT_REVIEW_IMAGES_DIR') ?><?= $reviewItem->file ?>"
                  <?php else: ?>
                    src=""
                  <?php endif; ?>
                  data-revire-val="image"
                >
              </div>
              
              <div class="review-good" data-review-count="<?= $reviewItem->id ?>">
                  <p data-good-count-area="<?= $reviewItem->id ?>" class="<?php if( $reviewItem->good_count == 0): ?>rating-hidden<?php endif; ?>"><span class="review-good-count c-text-weightBold" data-good-count="<?= $reviewItem->id ?>"><?= $reviewItem->good_count ?></span>人のお客様が参考になったと回答</p>
                  <p>
                      レビューは参考になりましたか？
                      <a
                        href="javascript:void(0)"
                        data-send-good="<?= $reviewItem->id ?>"
                        class="<?php if( $reviewItem->good === true ): ?>review-good-disabled<?php else: ?>review-good-enable<?php endif; ?>"
                      >
                        参考になった
                      </a>
                  </p>
             </div>
              
              
            </div>
          <?php endforeach; ?>
        </div>
        <!-- /レビューリスト -->

        <!-- ページネーション -->
        <div class="listNavigation__pagenation c-pagenation rating-pagination">
        </div>
        現在表示の評価: <span data-current-start="1">全て表示</span>
        <a href="javascript:void(0);" class="rating-hidden" data-star-reset="1">[選択解除]</a>　
        <a href="/review?s[keyword]=<?= $keyword ?>" target="_blank">すべてのレビューを参照します</a>
        <!-- /ページネーション -->
</section>
<?php endif; ?>
<script src="/assets/rating/js/progressbar.js?version=20211030"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.js?version=20211030"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/rateYo/2.3.2/jquery.rateyo.min.css?version=20211030">
<script src="/assets/rating/js/rating-detail.js?version=20211030"></script>
<script src="/assets/rating/js/review-ajax.js?version=20211030"></script>
<!-- /埋め込み版レビュー -->
