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
    BlockEditor.addStringAtts(info.atts,['color','size','attached']);

    var tmpClassSpecs = {
        boolean: ['floating','compact'],
        string: ['color','size', 'attached']
    }

    function getClass(theProps, theIsEditMode){
        return BlockEditor.getStandardClass( 'ui message', tmpClassSpecs, theProps, theIsEditMode);
    }
    function getDisplayValue(theProps,theIsEditMode){
        var props = theProps;
        var tmpClass = getClass(props, true);

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
        attributes: info.atts,
        edit: function ( props ) {

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props,'color', 'Message Color', 'color' ),
                BlockEditor.getStandardProperty(props,'size', 'Size', 'size' ),
                BlockEditor.getStandardProperty(props,'attached', 'Attached', 'attached' ),
                BlockEditor.getStandardProperty(props,'floating', 'Floating', 'checkbox' ),
                BlockEditor.getStandardProperty(props,'compact', 'Compact', 'checkbox' ),
            ];
            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Message Options', tmpStandardProperties)
            ];

            var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);

            var tmpDisplayObject = getDisplayValue(props,true);

            return el(
                'div',
                useBlockProps(),
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


