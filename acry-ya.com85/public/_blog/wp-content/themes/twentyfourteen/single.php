<?php
/**
 * The Template for displaying all single posts
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>
<?php
	// Start the Loop.
	while ( have_posts() ) : the_post();
	$this_cat = get_the_category();
?>
  <div class="main__sub--white">
    <nav class="c-pankuzu--scroll">
      <ul class="pankuzu__list">
        <li><a href="/">HOME</a></li>
        <li><a href="/blog/">アクリ屋ブログ</a></li>
        <li><a href="<?php echo get_category_link($this_cat[0]->term_id) ?>"><?php echo $this_cat[0]->name; ?></a></li>
        <li><?php the_title(); ?></li>
      </ul>
    </nav>
<?php
		/*
		 * Include the post format-specific template for the content. If you want to
		 * use this in a child theme, then include a file called content-___.php
		 * (where ___ is the post format) and that will be used instead.
		 */
		get_template_part( 'content', 'single' );


		// If comments are open or we have at least one comment, load up the comment template.
		// if ( comments_open() || get_comments_number() ) {
		// 	comments_template();
		// }
	endwhile;
?>
  </div>
<?php
get_footer();
?>
