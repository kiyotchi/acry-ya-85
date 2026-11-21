<?php
/**
 * The default template for displaying content
 *
 * Used for both single and index/archive/search.
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */
?>
<div class="blogList__item">
	<a href="<?php the_permalink(); ?>" class="c-card--blog">
    <div class="card__head">
<?php
$post_time = get_the_time('U');
$days = 30; //New!を表示させる日数
$last = time() - ($days * 24 * 60 * 60);
if ($post_time > $last) {
echo '<div class="card__new">NEW</div>';
}

	$this_thum = get_the_post_thumbnail_url();
	if(empty($this_thum)) {
		$this_thum = catch_that_image();
	}
	if(empty($this_thum)) {
		$this_thum = '/blog/bn_products_thumbnail.jpg';
	}
?>
      <div class="card__image"><img src="<?php echo  $this_thum; ?>"></div>
    </div>
    <div class="card__body">
      <time class="card__time c-text--sm"><?php the_time('Y/m/d'); ?></time>
      <p class="card__title c-heading--sm"><?php the_title(); ?></p>
      <p class="card__discription c-text--sm"><?php the_excerpt(); ?></p>
      <p class="card__category c-text--sm"><?php the_category(); ?></p>
    </div>
	</a>
</div>
<!-- #post-## -->
