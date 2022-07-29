<?php
/**
 * Debug entrypoint
 */

echo '<img class="ui image medium" src="'.ACTIONAPP_WP_IMAGE_PATH.'single-page-header.png" />';
 echo ('<div spot="mainspot">out here</div>');
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