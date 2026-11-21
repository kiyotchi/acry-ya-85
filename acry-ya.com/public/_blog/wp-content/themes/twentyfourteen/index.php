<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme and one
 * of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query,
 * e.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
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
        <li>アクリ屋ブログ</li>
      </ul>
    </nav>
    <h1 class="main__title c-heading--xl">アクリ屋ブログ</h1>
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
					<a href="/blog" class="c-button--tab is-active">すべて</a>
<?php
if(!empty($categories)) :
foreach($categories as $category) :
?>
					<a href="<?php echo get_category_link( $category->term_id ) ?>" class="c-button--tab"><?php echo $category->name; ?></a>
<?php
endforeach;
endif;
?>
				</div>
		<?php
            if (have_posts()) :
                $max_pages = $wp_query->max_num_pages;
                $paged = get_query_var('paged');
                $found_posts = $wp_query->found_posts;
                $max_posts = get_option('posts_per_page');

                pagination_acry_ya($max_pages, $paged, $found_posts, $max_posts, 2, false);
                // Start the Loop.
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
