
<?php
/**
 * Action App Designer - Template - Developer Design Document Viewer
 * 
 * Copyright (c) 2021-2022 Joseph Francis / hookedup, inc. 
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

$tmpSUID = ActAppDesigner::getSUID();
$tmpVersion = ActAppDesigner::getPluginSetupVersion();
$tmpRootPath = ActAppCommon::getRootPath();
echo ('Plugin Data Version: ' . $tmpVersion . '<br />  SUID: ' . $tmpSUID  );
echo ('<br/>Root: ' . $tmpRootPath );

the_post();
$tmpID = get_the_ID();
global $post;
$post_slug = $post->post_name;

$doctype = get_post_meta($tmpID, '__doctype', true);
$docauthor = get_post_field('post_author');

echo ('<br/>slug: ' . $post_slug  );
echo ('<br/>GUID: ' . get_the_guid() );
echo ('<br/>Title: ' . get_the_title() );
echo ('<br/>Status: ' . get_post_status($tmpID) );
echo ('<br/>doctype: ' . $doctype  );
echo ('<br/>author id: ' . $docauthor  );

$tmpDocJson = get_post_meta($tmpID);
$tmpTopic = get_post_meta($tmpID, 'topic');
echo ('<br/>topic: ' . json_encode($tmpTopic) );
foreach( $tmpDocJson as $iFieldName => $iVal){
  if( count($iVal) == 1 ){
    $tmpVal = $iVal[0];
    var_dump($tmpVal);
    echo ('<br/>' . $iFieldName . ' ===> ' . ($tmpVal) );
  }
  
}
$tmpDocJson = json_encode($tmpDocJson);
echo ('<br/>JSON: ' .$tmpDocJson );
$current_user = wp_get_current_user();
$tmpID = $current_user->ID;

// $tmpLastPos = get_user_meta( $tmpID, 'mock_data_pos', true ); 
// if( $tmpLastPos == ''){
//     $pos = 1;
// } else {
//     $pos = intval(''.$tmpLastPos) + 1;
// }

//   for ($x = 0; $x <= 10; $x++) {
//     echo "The number is: $x <br>";
//   }
//   for ($iPos = 0; $iPos <= 10; $x++) {
//     echo "The number is: $x <br>";
//   }

  //$json = json_encode($array);
  //echo($json);


?>

