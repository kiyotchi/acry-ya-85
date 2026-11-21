<?php
/**
 * The template used for displaying page content
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>

<?php
	$this_cat = get_the_category();
	$this_link = get_permalink();
?>
<div class="main__title--blog">
  <p class="title__category"><?php echo $this_cat[0]->name; ?></p>
  <h1 class="c-heading--xl"><?php the_title(); ?></h1>
  <time datetime="2019-00-00" class="title__date"><?php the_date('Y/m/d'); ?></time>
  <div class="title__sns">
    <p class="c-heading--xs">この記事をシェア : </p>
		<a href="http://www.facebook.com/share.php?u=<?php echo $this_link; ?>" target="_blank" class="sns__icon">
			<img src="/assets/images/icon/icon_facebook.svg" alt="facebook">
		</a>
		<a href="https://twitter.com/share?url=<?php echo $this_link; ?>" target="_blank" class="sns__icon">
			<img src="/assets/images/icon/icon_twitter.svg" alt="twitter">
		</a>
		<a href="https://social-plugins.line.me/lineit/share?url=<?php echo $this_link; ?>" target="_blank" class="sns__icon">
			<img src="/assets/images/icon/icon_line.svg" alt="line">
		</a>
  </div>
</div>
<div class="p-content">
  <div class="content__detail">
    <section class="detail__section">
      <p class="c-text--md">
      	<?php the_content(); ?>
      </p>
    </section>
<?php
  $tags = get_the_tags();
	if(!empty($tags)) {
	  echo '<div class="detail__tag">';
	  foreach ( $tags as $tag ) {
			$tag_permalink = get_tag_link($tag->term_id);
	    echo '<a href="'.$tag_permalink.'" class="tag__item c-label--md-gray">'.$tag->name.'</a>';
	  }
		echo '</div>';
	}
?>
    <div class="detail__pagenation">
<?php
	$prevpost = get_adjacent_post(false, '', true); //前の記事
	$nextpost = get_adjacent_post(false, '', false); //次の記事
?>
<?php
	if(!empty($prevpost)) :
?>
			<a href="<?php echo $prevpost->guid; ?>" class="pagenation__prev"><i class="c-icon--triangle-l"></i>前の投稿<span class="c-heading--sm"><?php echo $prevpost->post_title; ?></span></a>
<?php
	endif;
	if(!empty($nextpost)) :
?>
			<a href="<?php echo $nextpost->guid; ?>" class="pagenation__next">次の投稿<i class="c-icon--triangle-r"></i><span class="c-heading--sm"><?php echo $nextpost->post_title; ?></span></a>
<?php endif; ?>
		</div>
  </div>

  <div class="content__information">
    <section class="information__section">
      <h3 class="section__title c-heading--md">関連する記事</h3>
      <div class="section__blogList">
<?php
	$args = array(
		'posts_per_page' => 5,
		'cat' => $this_cat[0]->term_id,
		'post__not_in' => array($post->ID),
		//'orderby' => 'rand'
		'orderby' => 'date'
	);
	$relation_posts = new WP_Query( $args );
	if($relation_posts->have_posts()) :
		while($relation_posts->have_posts()) :
			$relation_posts->the_post();

?>
        <div class="blogList__item">
					<a href="<?php the_permalink(); ?>" class="c-card--blog-sm">
            <div class="card__head">
<?php
	$relation_post_time = get_the_time('U');
	$relation_days = 30; //New!を表示させる日数
	$relation_last = time() - ($relation_days * 24 * 60 * 60);
	if ($relation_post_time > $relation_last) {
		echo '<div class="card__new">NEW</div>';
	}
	$relation_thum = get_the_post_thumbnail_url();
	if(empty($relation_thum)) {
		$relation_thum = catch_that_image($relation_posts);
	}
	if(empty($relation_thum)) {
		$relation_thum = '/blog/bn_products_thumbnail.jpg';
	}


?>
              <div class="card__image"><img src="<?php echo $relation_thum; ?>"></div>
            </div>
            <div class="card__body">
              <time class="card__time c-text--sm"><?php the_date('Y/m/d') ?></time>
              <p class="card__title c-heading--sm"><?php the_title(); ?></p>
              <p class="card__category c-text--sm"><?php echo $this_cat[0]->name; ?></p>
            </div>
					</a>
				</div>
<?php
			endwhile;
		wp_reset_postdata();
	endif;
?>
      </div>
    </section>
  </div>

</div>
