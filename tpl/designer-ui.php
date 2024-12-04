<?php
/**
 * Action App Designer - Template - Designer UI for WordPress Admin Page
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

//$registeredBlocks = WP_Block_Type_Registry::get_instance()->get_all_registered();
// foreach($registeredBlocks as $i => $i_value) {
//     echo '<br /><b>' . $i_value->name . '</b>: ' . $i_value->title . ' (' . $i_value->category . ")";
// }

// $registeredPatterns = WP_Block_Patterns_Registry::get_instance()->get_all_registered();

// foreach($registeredPatterns as $i => $i_value) {
//     echo '<br /><b>' . $i_value['name'] . '</b>: ' . $i_value['title'];
// }

//var_dump($registeredPatterns);

echo '<img class="ui image medium marb10" src="'.ACTIONAPP_WP_IMAGE_PATH.'single-page-header.png" />';
echo ('<div spot="mainspot"></div>');

//--- Assure there is a data view definition so the dataview control can show dataviews
// $tmpDoc = (object) array(
//     "name" => "dataviews",
//     "title" => "Data View Definitions",
//     "sourceposttype" => "actappdesigndoc",
//     "sourcedoctype" => "dataview",
//     "formname" => "DataViewDefinition",
//     "catalog" => "design",
//     "writecaps" => "actappdesign",
//     "readcaps" => "actappapps",
//     "__doctype" => "dataview",
//     "__title" => "Data View Definitions",
//     "__uid" => "actappdesigndoc_dataviews",
//     "__posttype" => "actappdesigndoc",
//     "__doctitle" => "Data View Definitions",
//  );

// ActAppDesignerDataController::import_doc($tmpDoc);

?>
<script>

//--- Base module and simple module system --- --- --- --- --- --- --- --- --- --- --- --- 
(function (ActionAppCore, $) {
   
    
    var mainControl;

    function initOnLoad(){

        var tmpPanelSpec = {
            "options": {
                "padding": false
            },
            "content": [
                {
                    "ctl": "segment",
                    "basic": false,
                    "styles": "margin-top:15px;margin-right:15px;",
                    "content": [
                        {
                            "ctl": "button",
                            "color": "blue",
                            "basic": true,
                            hidden: true,
                            "size": "large",
                            "onClick": {
                                "run": "publish",
                                "event": "refresh"
                            },
                            "name": "btn-refresh",
                            "icon": "recycle",
                            "text": "Refresh"
                        },
                        {
                            "ctl": "spot",
                            "name": "body",
                            "text": ""
                        },
                        {
                            "ctl": "spot",
                            "name": "details",
                            "text": '<div class="ui message larger blue mart10">Use the link above to open the <b>Developer Console</b> in a new browser tab.</div>'
                        }
                    ]
                }
            ]
        }

        var tmpControl = ThisApp.common.newControl || ThisApp.controls.newControl(tmpPanelSpec, {parent:this});
        ThisApp.common.newControl = tmpControl;

        function doRefresh(){
            
            var tmpHTML = [];
            ThisApp.apiCall(ActionAppCore.ActAppWP.rootPath + '/wp-json/actappdesigner/alldocs?posttype=actappdesign').then(function(theReply){
                for( var iPos = 0 ; iPos < theReply.data.length ; iPos++){
                    var tmpDoc = theReply.data[iPos];
                    var tmpURL = tmpDoc['__url'];
                    var tmpID = tmpDoc['__id'];
                    var tmpTitle = tmpDoc['__doctitle'];
                    var tmpIsHidden = tmpDoc['hidden'] == 1;
                    if( !tmpIsHidden ){
                        var tmpOut = '<div class="pad5"></div><a class="ui button blue large basic fluid" target="_blank" href="' + tmpURL + '">' + tmpTitle + '</a>';
                        tmpHTML.push(tmpOut);
                    }
                }
                mainControl.loadSpot('body',tmpHTML.join('\n'));
            })

            //tmpHTML.push('<hr /><div class="ui header blue medium">Developer Portal</div><hr />');
            //tmpHTML.push('<div class="ui button blue compact" action="openArea" area="dashboard">Open Dashboard</a>');

            
        }
        
        var tmpName = 'maincontrol';
        var tmpInstance = tmpControl.create(tmpName);
        var tmpSpot = ThisApp.getSpot$('mainspot');
        tmpInstance.loadToElement(tmpSpot);
        mainControl = tmpInstance;
        tmpInstance.subscribe('refresh', doRefresh);
        ThisApp.actions.openArea = openArea;
        doRefresh();

        function openArea(theParams, theTarget){
            var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['area']);
            var tmpURL = '';
            if( tmpParams.area == 'dashboard' ){
                tmpURL = 'http://localhost/actappdev/actappdesign/dashboard/';
            }
            if( tmpURL ){
                window.open(tmpURL, 'devdashboard');
                return;
            }
            alert('Can not find: ' + tmpParams.area);

        }

        
    }
    
  
    ActionAppCore.subscribe('app-loaded',initOnLoad);


})(ActionAppCore, $);



</script>