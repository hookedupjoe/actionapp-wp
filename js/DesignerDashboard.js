/**
 * Action App Designer Dashboard - Developer Entrypoint: DesignerDashboard.js
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
 * @since actapp 1.0.22
 */

( function ( wp,  ActionAppCore) {
    var DesignerDashboard = {};

    ActionAppCore.common = ActionAppCore.common || {};
    ActionAppCore.common.designer = ActionAppCore.common.designer || {};

    DesignerDashboard.runTest = function(){
        console.log('Test Complete');
    }

    function initDesignerDashboard(){
        var tmpBaseURL = ActionAppCore.DesignerConfig.catalogURL;
        //--- Load stuff we need on startup, can load dynamically as needed, 
        //      so only use this for suff needed on startup
        var tmpRequired = {
            // panels: {
            //     baseURL: tmpBaseURL + '/panels/',
            //     map: {'nested':'nested'}
            // },
            // templates: {
            //     baseURL: tmpBaseURL + '/templates/',
            //     map: {"demo1":"demo1"}
            // }
        };

        ActionAppCore.config = ActionAppCore.config || {};
        ActionAppCore.config.required = ActionAppCore.config.required || {};
        
		ActionAppCore.config.required = tmpRequired;
        $.extend(ActionAppCore.config.required, tmpRequired);

        //--- Create entry point from Action App entrypoint
        ActionAppCore.common.designer.Dashboard = DesignerDashboard;
        window.ActAppDesignerDashboard = DesignerDashboard;

    }


    ActionAppCore.subscribe('app-loaded', function(){
        ThisApp.delay(1000).then(function(){
            //Do Designer Setup Stuff
        });
    })

    //--- Initialize common block functionality for the editor
    initDesignerDashboard();

} )( window.wp, window.ActionAppCore );



