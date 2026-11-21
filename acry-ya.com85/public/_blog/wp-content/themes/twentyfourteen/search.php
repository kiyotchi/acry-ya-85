<?php
/**
 * The template for displaying Search Results pages
 *
 * @package WordPress
 * @subpackage Twenty_Fourteen
 * @since Twenty Fourteen 1.0
 */

get_header(); ?>

  <div class="main__sub--white">
    <nav class="c-pankuzu--scroll">
      <ul class="pankuzu__list">
        <li><a href="/">HOME</a></li>
        <li><a href="/blog/">アクリ屋ブログ</a></li>
        <li><?php echo get_search_query(); ?></li>
      </ul>
    </nav>
    <h1 class="main__title c-heading--xl"><?php printf( __( 'Search Results for: %s', 'twentyfourteen' ), get_search_query() ); ?></h1>
            <div class="l-toolbar c-toolbar p-blog--form">
              <form class="toolbar__search c-form u-margin--right-0" action="<?php echo esc_url( home_url( '/' ) ); ?>"><span class="search__input form__input">
                  <input type="text" id="" name="s" placeholder="フリーワード検索" value="<?php echo get_search_query(); ?>"></span>
                <button type="send" id="" class="search__button c-button--md-primary"><i class="button__icon"><img src="/assets/images/icon/icon_search_w.svg"></i></button>
              </form>
            </div>
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
    $max_pages = $wp_query->max_num_pages;
    $paged = ( get_query_var('paged') ) ? get_query_var('paged') : 1;
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
          get_template_part('content', get_post_format());

      endwhile;
      echo '</div>';
      // Previous/next post navigation.
    pagination_acry_ya($max_pages, $paged, $found_posts, $max_posts, 2, true);

  else :
?>
            <div class="l-notFound">
              <h2 class="c-heading--md">"<?php echo get_search_query(); ?>" に該当する検索結果は見つかりませんでした。</h2>
            </div>
<?php
  endif;
?>

				</div>
			</div>
<?php
get_footer();
