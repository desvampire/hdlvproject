<?php
/*
 Template Name: Page full-width
 *
 * This is your custom page template. You can create as many of these as you need.
 * Simply name is "page-whatever.php" and in add the "Template Name" title at the
 * top, the same way it is here.
 *
 * When you create your page, you can just select the template and viola, you have
 * a custom page template to call your very own. Your mother would be so proud.
 *
 * For more info: http://codex.wordpress.org/Page_Templates
*/
?>

<?php get_header(); ?>

<div class="row">
	
	<main id="b_site__content" role="main" itemscope itemprop="mainContentOfPage" itemtype="http://schema.org/Blog">

		<?php if ( function_exists('yoast_breadcrumb') ) {yoast_breadcrumb('<p id="breadcrumbs">','</p>');} ?>

		<h1 class="page-title" itemprop="headline"><?php the_title(); ?></h1>

			<div class="entry-content" itemprop="articleBody">
				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

				<?php
										// the content (pretty self explanatory huh)
										the_content();
				?>

				<?php endwhile; endif; ?>	
			</div>
	</main>

</div><!-- ./row -->

<?php get_footer(); ?>
