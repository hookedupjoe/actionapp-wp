/**
 * Action App Blocks Controller - Client Side Entrypoint: BlocksController.js
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
    
    var BlocksController = {
        parts: {}
    };

    function init(){
        var tmpBaseURL = ActionAppCore.BlockManagerConfig.catalogURL;
       
        ActionAppCore.common = ActionAppCore.common || {};
        ActionAppCore.common.blocks = ActionAppCore.common.blocks || {};

        //--- Create entry point from Action App entrypoint
        ActionAppCore.common.blocks.Controller = BlocksController;
        
        window.ActAppBlocksController = BlocksController;


        BlocksController.loadFromMarkup = function(){
            var tmpFromMarkup = ThisApp.getByAttr$({appuse:'blockmarkup'});
            var tmpEach = function(theIndex,theEl){
                var tmpEachEl = $(theEl);
                var tmpSourceType = tmpEachEl.attr('sourcetype');
                var tmpSourceName = tmpEachEl.attr('sourcename');
                var tmpSourceCatalog = tmpEachEl.attr('catalog');
                var tmpSpotName = tmpEachEl.attr('spot');
                var tmpSourcePartName = tmpEachEl.attr('sourcepartname') || tmpSourceName;
                //ToDo: This doesn't recrete HTML in blocks editor, 
                // ... so only do this when not in block editor designing using controls
                // --> tmpEachEl.attr('appuse','blockmarkup_instance');
                ActAppBlocksController.getCatalogItem(tmpSourceType, tmpSourceName, tmpSourceCatalog).then(function(){
                    var tmpCtl = ThisApp.getResourceForType(tmpSourceType, tmpSourceName);
                    //console.log('tmpCtl',tmpCtl);
                    var tmpInstance = tmpCtl.create('preview');
                    tmpInstance.loadToElement(ThisApp.getSpot$(tmpSpotName).get(0)).then(function(){	
                        if( tmpSourcePartName ){
                            BlocksController.parts[tmpSourcePartName] = tmpInstance;
                        }
                        ThisApp.publish('partloaded', [this,tmpInstance,tmpSourcePartName]);
                    });

                });
            }
            //tmpFromMarkup.
            return tmpFromMarkup.each(tmpEach);
            

        }

        BlocksController.getCatalogItem = function(theType, theName, theOptionalCatalogName){
            var tmpType = theType || 'panels';
            
            var tmpName = theName || '';
            if( !(tmpName) ){
                return false;
            }
            var tmpMap = {};
            tmpMap[theName] = theName;
            var tmpRequestedItems = {}

            var tmpBaseCatalogURL = ActionAppCore.dir.catalogs._common;
            if( theOptionalCatalogName ){
                if( theOptionalCatalogName && ActionAppCore.dir.catalogs[theOptionalCatalogName]){
                    tmpBaseCatalogURL = ActionAppCore.dir.catalogs[theOptionalCatalogName];
                    tmpRequestedItems[tmpType] = {
                        baseURL: tmpBaseCatalogURL + tmpType + '/',
                        map: tmpMap
                    }
                } else {
                    //--- We have a name, but not found yet - try using WordPress catalog url
var tmpSingleType = "Panel";
if( tmpType == 'controls'){
    tmpSingleType = "Control"
}
                    tmpRequestedItems[tmpType] = {
                        baseURL: ActionAppCore.ActAppWP.rootPath + '/wp-json/actappdesigner/get-catalog-res.json?catname=' + theOptionalCatalogName + '&restype=' + tmpSingleType + '&resname=' + theName + '&altname=',
                        map: tmpMap
                    }
                    //console.log("tmpRequestedItems[tmpType]",tmpRequestedItems[tmpType]);
                }
            } else {
                tmpRequestedItems[tmpType] = {
                    baseURL: tmpBaseCatalogURL + tmpType + '/',
                    map: tmpMap
                }
            }
            
            
            
            return ThisApp.loadResources(tmpRequestedItems)
        }

        ActionAppCore.subscribe('app-loaded', function(){            
            ThisApp.actions.updatePreview = function(){
                ActAppBlocksController.loadFromMarkup();
            }
            ActAppBlocksController.loadFromMarkup();
        })

        
    }


    

    //--- Initialize common block functionality for the editor
    init();

} )( window.wp, window.ActionAppCore );
