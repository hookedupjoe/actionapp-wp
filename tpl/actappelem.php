<?php
/**
 * The template for displaying element pages
 *
 * Created by developers and used in application and as site pages.
 *
 * @package actionappwp
 */
?>


<?php

//--- If both are true and there is not framed control, it will look funny on resize
//--- For content sites not in a frame, set $includeFrame = false.
//--- For sites with a framed contro, set $includeFrame = true if $includeSite is true also.
$includeSite = false;
$includeFrame = false;
// Summary:  ANY-F for unframed; ANY-T for framed 
// Note: If there is a control with a frame, use a frame always

if( $includeSite ){
	get_header();
} else {
	wp_head();
}

//
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

<?php
if( $includeFrame ){
	echo '<div appuse="website-frame-border" ctlcomp="layout"  class="ui-layout-pane" style="height:100%;padding:0;margin:0;"><div class="ui-layout-center" >';
}
?>

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

		 
<?php
if( $includeFrame ){
	echo '</div> ';
}
?>


	</div>

	<script>		
		<?php echo ActAppDesigner::get_code_bubble_start(); ?>
		<?php echo ActAppDesigner::get_app_loader_script(); ?>	
		function onThisAppLoaded(){
			ThisApp.subscribe("resize", function(){
				var tmpFrame = ThisApp.getByAttr$({appuse:"website-frame-border"});
				var tmpWPHeader = $("#primary");
				if( tmpWPHeader && tmpWPHeader.length ){
					var tmpH = window.innerHeight - tmpWPHeader.offset().top - 40;
					if( tmpFrame.height() != tmpH ){
						tmpFrame.height(tmpH);
					};
				}
				$(window).trigger("resize");
				ThisApp.publish("resized");
			});
		}
		window.ActAppLoader.ready(onThisAppLoaded);
		<?php echo ActAppDesigner::get_code_bubble_end(); ?>
	</script>

<?php 

if( $includeSite ){
	get_footer(); 
} else {
	ActAppDesigner::getAppOnlyFooter();
}



?>

