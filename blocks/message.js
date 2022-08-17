/**
 * Block Widget: message.js - Semantic UI Message  
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

( function ( wp, ActionAppCore ) {
    
    var el = wp.element.createElement;
    var useBlockProps = wp.blockEditor.useBlockProps;
    var BlockEditor = ActionAppCore.common.blocks.Editor;
    
    var info = {
        name: 'message',
        title: 'UI Message',
        example: {
            attributes: {color: 'blue'}
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addBooleanAtts(info.atts,['floating', 'compact']);
    BlockEditor.addStringAtts(info.atts,['name','ctl','color','size','attached']);
  
    BlockEditor.addAtt(info.atts,'text',{type: 'string',source: 'html'})
    var tmpClassSpecs = {
        boolean: ['floating','compact'],
        string: ['color','size', 'attached']
    }

    function getClass(theProps, theIsEditMode){
        return BlockEditor.getStandardClass( 'ui message', tmpClassSpecs, theProps, theIsEditMode);
    }

    function getDisplayValue(theProps,theIsEditMode){
        var props = theProps;
        theProps.attributes.ctl = 'message';
        var tmpClass = getClass(props, true);


        var tmpMe = wp.data.select('core/block-editor').getBlock(props.clientId);
        theProps.attributes.text = '';
        if (tmpMe) {
            var tmpChildren = tmpMe.innerBlocks;
            if (!(tmpChildren && tmpChildren.length)) {
                //--- What to do when no children
                
            } else {
                //Loop children rescursive, move to function to recall
               if (tmpChildren.length > 0) {
                    var tmpContent = [];
                    for (var iPosChildPos in tmpChildren) {
                        var tmpChild = tmpChildren[iPosChildPos];
                        if( tmpChild && tmpChild.attributes && tmpChild.attributes.content){
                            if( theProps.attributes.text != ''){
                                //ToDo: Wrap in div with class instead?  Wrap in p?
                                theProps.attributes.text += "<br />";
                            }
                            theProps.attributes.text += tmpChild.attributes.content;
                        }
                    }
                }
            }
        }
  
        

        if( theIsEditMode ){

          
            return BlockEditor.el('div', tmpClass,  [el( wp.blockEditor.InnerBlocks )]);
        } else {
            return BlockEditor.el('div', tmpClass, el( wp.blockEditor.InnerBlocks.Content ));
        }
        
    }

    wp.blocks.registerBlockType( info.category + '/' + info.name, {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        edit: function ( props ) {

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props,'color', 'Message Color', 'color' ),
                BlockEditor.getStandardProperty(props,'size', 'Size', 'size' ),
                BlockEditor.getStandardProperty(props,'attached', 'Attached', 'attached' ),
                BlockEditor.getStandardProperty(props,'floating', 'Floating', 'checkbox' ),
                BlockEditor.getStandardProperty(props,'compact', 'Compact', 'checkbox' ),
                BlockEditor.getStandardProperty(props,'name', 'Unique Name')
            ];
            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Message Options', tmpStandardProperties)
            ];

            var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);

            var tmpDisplayObject = getDisplayValue(props,true);

            return el(
                'div',
                {},
                [
                    tmpSidebarControls,               
                    tmpDisplayObject
                ]
            );
        },
 
        save: function ( props ) {
            return getDisplayValue(props,false);
        },
    } );
} )( window.wp, window.ActionAppCore );


