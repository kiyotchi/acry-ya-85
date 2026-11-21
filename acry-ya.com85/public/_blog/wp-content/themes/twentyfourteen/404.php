<?php
/**
 * The template for displaying 404 pages (Not Found)
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
				<li>404 Page Not Found</li>
			</ul>
		</nav>
		<h1 class="main__title c-heading--xl">404 Page Not Found</h1>
		<section class="detail__section">
			<h2 class="c-heading--lg-border">お探しのページが見つかりませんでした。</h2>

			<section class="p-outline c-section">
				<p class="c-text--md">2020年7月1日にリニューアルいたしました。<br>
					お探しのページは、削除されたか、名前が変更された可能性があります。<br>
					<a href="/">HOME</a>から再度アクセスして下さい。
				</p>
			</section>

		</section>
	</div>
<?php
get_footer();
