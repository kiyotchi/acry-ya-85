<?php
/**
 * The template for displaying Category pages
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>
<?php
$this_cat = get_category($cat);
?>
  <div class="main__sub--white">
    <nav class="c-pankuzu--scroll">
      <ul class="pankuzu__list">
        <li><a href="/">HOME</a></li>
        <li><a href="/blog/">アクリ屋ブログ</a></li>
        <li><?php echo $this_cat->name; ?></li>
      </ul>
    </nav>
    <h1 class="main__title c-heading--xl"><?php echo $this_cat->name; ?></h1>
      <div class="l-list--card p-blog">
        <div class="blog__navigation c-buttonGroup--tab">
<?php
$categories = get_categories();
?>
					<a href="/blog/" class="c-button--tab">すべて</a>
<?php
if (!empty($categories)) :
foreach ($categories as $category) :
	$class_current = "";
	if ($category->term_id === $cat) {
	    $class_current = 'is-active';
	}
?>
					<a href="<?php echo get_category_link($category->term_id) ?>" class="c-button--tab <?php echo $class_current ?>"><?php echo $category->name; ?></a>
<?php
endforeach;
endif;
?>
				</div>
<?php if (have_posts()) : ?>

<?php
    // Show an optional term description.
    // $term_description = term_description();
    // if (! empty($term_description)) :
    //     printf('<div class="taxonomy-description">%s</div>', $term_description);
    // endif;
?>

<?php
    $max_pages = $wp_query->max_num_pages;
    $paged = get_query_var('paged');
    $found_posts = $wp_query->found_posts;
    $max_posts = get_option('posts_per_page');

    pagination_acry_ya($max_pages, $paged, $found_posts, $max_posts, 2, false);
    echo '<div class="list__content c-cardGroup--3">';
      while (have_posts()) : the_post();

          /*
           * Include the post format-specific template for the content. If you want to
           * use this in a child theme, then include a file called content-___.php
           * (where ___ is the post format) and that will be used instead.
           */
          get_template_part('content', get_post_format());

      endwhile;
      echo '</div>';
      // Previous/next post navigation.
    pagination_acry_ya($max_pages, $paged, $found_posts, $max_posts, 2, false);

  else :
      // If no content, include the "No posts found" template.
      get_template_part('content', 'none');

  endif;
?>

				</div>
			</div>

<?php
get_footer();
?>
