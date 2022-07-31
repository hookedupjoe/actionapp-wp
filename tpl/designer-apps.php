<?php
/**
 * Action App Designer - Template - Applications UI Interface for WordPress Admin Page
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


 echo ('<div spot="appout">Applications go here</div>');
?>
<script>

//--- Base module and simple module system --- --- --- --- --- --- --- --- --- --- --- --- 
(function (ActionAppCore, $) {
    
    function initOnLoad(){
        
            
        var tmpPanelSpec = { 
            options: {
                padding: false
            },
            content: [
            {
                "ctl": "button",
                "color": "blue",
                "basic": true,
                "size": "large",
                "onClick": {
                    "run": "publish",
                    "event": "hello"
                },
                "name": "btn-hello",
                "text": "My Application"
            },
            {
                ctl: "spot",
                name: "hellobody",
                text: ""
            }
            ]
        }

        var tmpControl = ThisApp.common.newControl || ThisApp.controls.newControl(tmpPanelSpec, {parent:this});
        ThisApp.common.newControl = tmpControl;

        var tmpName = 'onthefly1';
        var tmpInstance = tmpControl.create(tmpName);
        var tmpSpot = ThisApp.getSpot$('appout');
        tmpInstance.loadToElement(tmpSpot);

        tmpInstance.subscribe('hello', function(){
            console.log('said hello');
        });


    }

    ActionAppCore.subscribe('app-loaded',initOnLoad);


})(ActionAppCore, $);



</script>