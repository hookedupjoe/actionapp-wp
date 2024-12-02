<?php
/**
 * Action App Designer - Template - Elements 
 * 
 * Copyright (c) 2021-2024 Joseph Francis / hookedup, inc. 
 *
 * This code is released under the GNU General Public License.
 * See COPYRIGHT.txt and LICENSE.txt.
 *
 * This code is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * This header and all notices must be kept intact.
 *
 * @author Joseph Francis
 * @package actionappwp
 * @since actionappwp 1.0.0
 */

?>

<?php ActAppDesigner::load_doc_post(); ?>

<?php
$tmpDoc = ActAppDesigner::get_post_as_doc();
$tmpDetails = $tmpDoc['details'];
if( is_string($tmpDetails) ){
	$tmpDetails = (json_decode($tmpDetails));
}
//--- If both are true and there is not framed control, it will look funny on resize
//--- For content sites not in a frame, set $includeFrame = false.
//--- For sites with a framed control, set $includeFrame = true if $includeSite is true also.
$includeSite = true;
$includeFrame = true;
$tmpNoSiteParam = $_GET['nosite'];
if( $tmpNoSiteParam ){
	$includeSite = false;
}

$tmpNoFrameParam = $_GET['noframe'];
if( $tmpNoFrameParam ){
	$includeFrame = false;
}


$hideFrame = isset($_GET['fullscreen']) ? true : false;






// Summary:  ANY-F for unframed; ANY-T for framed 
// Note: If there is a control with a frame, use a frame always

if( $includeSite && $includeFrame ){
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
			get_template_part( 'template-parts/content', 'page' );
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

		
		var tmpShowFooter = true;
		var tmpShowHeader = true;
		<?php
			if( !( $includeSite && $includeFrame) || $hideFrame == true){
				echo 'tmpShowFooter = false; tmpShowHeader=false;';
			}
		?>

		if( tmpShowFooter == false || tmpShowHeader == false){
			setTimeout(function(){
				if(!tmpShowHeader){
					$('.page-header').addClass('hidden');
				}
				if(!tmpShowFooter){
					$('.page-footer').addClass('hidden');
				}
				ThisApp.publish('resize');
			}, 100)
		}
			

		function onThisAppLoaded(){

			//--- For console debug
			ThisApp.delay(1000).then(function(){
				window.activeControl = ActAppBlocksController.parts.main || ActAppBlocksController.parts.form;
			});
			
			ThisApp.subscribe("resize", function(){
				
				var tmpFrame = ThisApp.getByAttr$({appuse:"website-frame-border"});
				var tmpWPHeader = $("#primary");
				
				if( tmpWPHeader && tmpWPHeader.length ){
					var tmpH = window.innerHeight - tmpWPHeader.offset().top - 10;
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

if( $includeSite && $includeFrame){
	get_footer(); 
} else {
	//ActAppDesigner::getAppOnlyFooter();
	get_footer(); 
}



?>

