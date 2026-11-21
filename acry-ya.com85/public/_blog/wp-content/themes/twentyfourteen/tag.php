<?php
/**
 * The template for displaying Tag pages
 *
 * Used to display archive-type pages for posts in a tag.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>
<?php
		$this_tags = get_queried_object() ;
		$this_tags_id = $this_tags->term_id;
		$this_tags_name = $this_tags->name;
?>

  <div class="main__sub--white">
    <nav class="c-pankuzu--scroll">
      <ul class="pankuzu__list">
        <li><a href="/">HOME</a></li>
        <li><a href="/blog/">acry-ya ブログ</a></li>
        <li><?php echo $this_tags_name ?></li>
      </ul>
    </nav>
    <h1 class="main__title c-heading--xl"><?php echo $this_tags_name ?> 一覧</h1>
      <div class="l-list--card p-blog">
				<div class="blog__navigation--tag">
          <div class="tag__list">
<?php
  $posttags = get_tags();
  if ($posttags) {
    foreach($posttags as $tag) {
			if($tag->term_id !== $this_tags_id) {
	      echo '<a href="'. get_tag_link($tag->term_id) .'" class="list__item c-label--md-gray">' . $tag->name . '</a>';
			}
    }
  }
?>
          </div>
        </div>

				<?php
					// Show an optional term description.
					// $term_description = term_description();
					// if ( ! empty( $term_description ) ) :
					// 	printf( '<div class="taxonomy-description">%s</div>', $term_description );
					// endif;
				?>

			<?php if ( have_posts() ) : ?>
			<?php
					// Start the Loop.
    $max_pages = $wp_query->max_num_pages;
    $paged = get_query_var('paged');
    $found_posts = $wp_query->found_posts;
    $max_posts = get_option('posts_per_page');

    pagination_acry_ya($max_pages, $paged, $found_posts, $max_posts, 2, true);
    echo '<div class="list__content c-cardGroup--3">';
      while (have_posts()) : the_post();

						/*
						 * Include the post format-specific template for the content. If you want to
						 * use this in a child theme, then include a file called content-___.php
						 * (where ___ is the post format) and that will be used instead.
						 */
						get_template_part( 'content', get_post_format() );

					endwhile;
      echo '</div>';
					// Previous/next page navigation.
    pagination_acry_ya($max_pages, $paged, $found_posts, $max_posts, 2, true);

				else :
					// If no content, include the "No posts found" template.
					get_template_part( 'content', 'none' );

				endif;
			?>
		</div><!-- #content -->
	</div><!-- #primary -->

<?php
get_footer();
