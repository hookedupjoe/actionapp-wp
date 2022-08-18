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
 * @since actionappwp 1.0.0
 */
( function ( wp,  ActionAppCore) {
    //--- If in React environment already, attach to it instead
    if(typeof(React) == 'object'&& typeof(ReactDOM) == 'object'){
        window.$R = React;
        window.$RD = ReactDOM;
        console.log("Attached to existing React", $R.version);
    } else {
        console.log("Kept my own React", $R.version);
    }

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
           
            //--ToDo: Provide customize option for these
            if( wp && wp.domReady){
                wp.domReady( function () {
                    //"core/file","core/html","core/paragraph","core/video","core/loginout"
                    var tmpExludedBlocks = ["core/archives","core/avatar","core/block","core/calendar","core/categories","core/comment-author-name","core/comment-content","core/comment-date","core/comment-edit-link","core/comment-reply-link","core/comment-template","core/comments-pagination-next","core/comments-pagination-numbers","core/comments-pagination-previous","core/comments-pagination","core/comments-title","core/cover","core/gallery","core/home-link","core/image","core/latest-comments","core/latest-posts","core/navigation-link","core/navigation-submenu","core/navigation","core/page-list","core/pattern","core/post-author-biography","core/post-author","core/post-comments","core/post-comments-form","core/post-content","core/post-date","core/post-excerpt","core/post-featured-image","core/post-navigation-link","core/post-template","core/post-terms","core/post-title","core/query-no-results","core/query-pagination-next","core/query-pagination-numbers","core/query-pagination-previous","core/query-pagination","core/query-title","core/query","core/read-more","core/rss","core/search","core/shortcode","core/site-logo","core/site-tagline","core/site-title","core/social-link","core/tag-cloud","core/template-part","core/term-description","core/audio","core/button","core/buttons","core/code","core/column","core/columns","core/comments-query-loop","core/embed","core/freeform","core/group","core/heading","core/list","core/media-text","core/missing","core/more","core/nextpage","core/preformatted","core/pullquote","core/quote","core/separator","core/social-links","core/spacer","core/table","core/text-columns","core/verse"];
                    for( var iPos in tmpExludedBlocks ){
                        var tmpEntry = tmpExludedBlocks[iPos];
                        try {
//                           wp.blocks.unregisterBlockType(tmpEntry);    
                        } catch (error) {}
                    }
                } );
            }
        })
    }


    //--- Initialize common block functionality for the editor
    init();

} )( window.wp, window.ActionAppCore );
