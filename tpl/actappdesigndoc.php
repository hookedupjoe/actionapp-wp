
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

?>

<head>
<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />
  <?php
  //ToDo: Create common plain page header output

  wp_head(); ?>
</head>


<?php

$tmpSUID = ActAppDesigner::getSUID();
$tmpVersion = ActAppDesigner::getPluginSetupVersion();
$tmpRootPath = ActAppCommon::getRootPath();

the_post();
$tmpDoc = ActAppDesigner::get_post_as_doc(null,'(export)', true);


//echo ('Plugin Data Version: ' . $tmpVersion . '<br />  SUID: ' . $tmpSUID  );
//echo ('<br/>Root: ' . $tmpRootPath );

$tmpID = get_the_ID();
global $post;
$post_slug = $post->post_name;

$doctype = get_post_meta($tmpID, '__doctype', true);
$docauthor = get_post_field('post_author');

// echo ('<br/>slug: ' . $post_slug  );
// echo ('<br/>GUID: ' . get_the_guid() );
// echo ('<br/>Title: ' . get_the_title() );
// echo ('<br/>Status: ' . get_post_status($tmpID) );
// echo ('<br/>doctype: ' . $doctype  );
// echo ('<br/>author id: ' . $docauthor  );

// var_dump($tmpDoc);
//'post_content','post_title',
$tmpPostFields = array('post_author','post_date','post_date_gmt','post_excerpt','post_status','comment_status','ping_status','post_password','post_name','to_ping','pinged','post_modified','post_modified_gmt','post_content_filtered','post_parent','guid','menu_order','post_type','post_mime_type','comment_count');
$tmpPostFieldLookup = array("___post_author" => "Author",
"___post_date" => "Post Date",
"___post_date_gmt" => "Post Date (GMT)",
"___post_content" => "Content",
"___post_title" => "Title",
"___post_excerpt" => "Excerpt",
"___post_status" => "Status",
"___comment_status" => "Commend Status",
"___ping_status" => "Ping Status",
"___post_password" => "Password",
"___post_name" => "Post Name",
"___to_ping" => "To Ping",
"___pinged" => "Pinged",
"___post_modified" => "Modified",
"___post_modified_gmt" => "Modified GMT",
"___post_content_filtered" => "Content Filtered",
"___post_parent" => "Post Parent",
"___guid" => "GUID",
"___menu_order" => "Menu Order",
"___post_type" => "Post Type",
"___post_mime_type" => "Mime Type",
"___comment_count" => "Comment Count"
);

echo('<div class="ui segment basic pad7 mar5">');
echo ('<div class="ui center aligned header blue large">Developer Document Viewer</div>');
echo('<div class="ui center aligned header medium black">'.$tmpDoc['___post_title'].'</div>');
echo('</div>');
echo ('<div class="ui stackable two column grid">');
echo('<div class="column">');
echo ('<div class="ui segment pad7 mar5">');
echo('<div class="ui header large black">Post Fields</div>');
echo('<table class="ui table">');
echo('<tr><th>Field</th><th>Value</th></tr>');
foreach ($tmpPostFields as $iFieldName) {
  echo('<tr>');
  $tmpExportFN = '___'.$iFieldName;
  $tmpPFVal = $tmpDoc[$tmpExportFN];
  $tmpPFLab = $tmpPostFieldLookup[$tmpExportFN].' ('.$iFieldName.')';
  if( 'guid' == $iFieldName || 'post_name' == $iFieldName ){
    echo('<td><b>'.$tmpPFLab.'</b></td><td><input readonly="" value="'.$tmpPFVal.'" /></td>');  
  } else {
    echo('<td><b>'.$tmpPFLab.'</b></td><td>'.$tmpPFVal.'</td>');
  }
  

  
  //echo('<td><div class="ui header small">' . $tmpPFLab . '</div></td>');
  //echo('<td><div class="ui bolder">' . $tmpPFVal . '</div></td>');
  echo('</tr>');
}
echo('</table>');
echo ('</div>'); //end of segment wrapper
echo ('</div>'); //End of column 1
echo('<div class="column">');
echo ('<div class="ui segment form pad7 mar5">');
echo('<div class="ui header large black">Meta Fields</div>');
echo('<table class="ui table">');
echo('<tr><th>Field</th><th>Value</th></tr>');
foreach ($tmpDoc as $iFieldName => $iVal) {
  
  if( !str_starts_with($iFieldName, '___') ){
    
    echo('<tr>');
    $tmpPFVal = $iVal;
    if( is_array($tmpPFVal)){
      $tmpPFVal = implode(", ",$tmpPFVal);
    }

    $tmpPFLab = ''.$iFieldName.'';
    if( '__design_props' == $iFieldName || 'source' == $iFieldName ){
//ToDo: Review - Need to still do this?      
$tmpPFVal = html_entity_decode((''.$tmpPFVal));
      echo('<td><b>'.$tmpPFLab.'</b></td><td><textarea class="ui textarea" style="width:100%;height:150px;">'.$tmpPFVal.'</textarea></td>');
    } else if( '__uid' == $iFieldName || '__url' == $iFieldName ){
      echo('<td><b>'.$tmpPFLab.'</b></td><td><input readonly="" value="'.$tmpPFVal.'" /></td>');  
    } else {
      echo('<td><b>'.$tmpPFLab.'</b></td><td>'.$tmpPFVal.'</td>');
      //echo('<td><b>'.$tmpPFLab.'</b></td><td><input readonly="" value="'.$tmpPFVal.'" /></td>');
    }
    //echo('<td><div class="ui header small">' . $tmpPFLab . '</div></td>');
    //echo('<td><div class="ui bolder">' . $tmpPFVal . '</div></td>');
    echo('</tr>');
  }
}
echo('</table>');

echo ('</div>'); //end of segment wrapper



echo ('</div>'); //End of column 2

echo ('</div>'); //End of grid

echo ('<div class="ui segment">');
echo('<div class="ui header small black">Content</div><div class="ui segment raised">'.$tmpDoc['___post_content'].'</div>');
echo ('</div>'); //end of segment wrapper

?>
  <!-- OPTIONAL - Dev-Libraries -->
  <script src="<?php echo ACTIONAPP_WP_CORE_LIB_URL ?>/lib/ace/ace.js"></script>
  <script src="<?php echo ACTIONAPP_WP_CORE_LIB_URL ?>/lib/ace/addons/actapp-ace-plugin.js"></script>  
  <script src="<?php echo ACTIONAPP_WP_CORE_LIB_URL ?>/lib/ace/ext-language_tools.js"></script>
  <script src="<?php echo ACTIONAPP_WP_CORE_LIB_URL ?>/lib/ace/ext-beautify.js"></script>

