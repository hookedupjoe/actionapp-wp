<?php
/**
 * Debug entrypoint
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