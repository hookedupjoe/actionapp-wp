<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package SemActionStandardPage
 */
?>

<?php
get_header();
//wp_head();
// $tmpLoc = ActAppCommon::getCurrentLocation();
// $tmpRoot = ActAppCommon::getRootPath();
// //echo '$menu: '.$menu;

// $tmpData = get_post_meta($post->ID);
				
// foreach($tmpData as $iField => $iVal) {
// 	if( count($iVal) == 1){
// 		$tmpVal = $iVal[0];
// 		$tmpData[$iField] = maybe_unserialize($tmpVal);
// 	}
// }
// $tmpJson = $tmpData['details'];
// $tmpObj = json_decode($tmpJson);
// var_dump($tmpObj);
?>
<div appuse="website-frame-border" ctlcomp="layout"  class="ui-layout-pane" style="height:400px;padding:0;margin:0;">
<div class="ui-layout-center" >
		<?php
		while ( have_posts() ) :
			the_post();
			get_template_part( 'template-parts/content', 'page' );
			// // If comments are open or we have at least one comment, load up the comment template.
			// if ( comments_open() || get_comments_number() ) :
			// 	comments_template();
			// endif;

		endwhile; // End of the loop.
		?>
		
		 <?php // End Content ?>
		 
</div> 
	</div>

<script>
function waitForApp(callback, maxTimes = false) {
	if (typeof(ThisApp) == 'object') {
	callback();
	} else {
		if (maxTimes === false || maxTimes > 0) {
			(maxTimes != false) && maxTimes-- ;
			setTimeout(function () {
				waitForApp(callback, maxTimes);
			}, 100);
		}
	}
};	

function whenReady(){
	ThisApp.subscribe('resize', function(){
		var tmpFrame = ThisApp.getByAttr$({appuse:"website-frame-border"});
		var tmpH = window.innerHeight - $('#primary').offset().top - 10;
		if( tmpFrame.height() != tmpH ){
			tmpFrame.height(tmpH);
			$(window).trigger('resize');
		};
	});
}

waitForApp(whenReady,100);

	</script>
<?php // End Row ?>
<?php get_footer(); ?>

