/**
 * Block Widget: card-section.js - Semantic UI Card Inner Section
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
( function ( wp, ActionAppCore ) {
    
    var el = wp.element.createElement;
    var useBlockProps = wp.blockEditor.useBlockProps;
    var BlockEditor = ActionAppCore.common.blocks.Editor;
    
    var info = {
        name: 'cardsection',
        title: 'UI Card Section',
        example: {
            
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);
    const defaultPadding = 'pad8';

    BlockEditor.addNumberAtts(info.atts, []);
    BlockEditor.addBooleanAtts(info.atts, []);
    BlockEditor.addStringAtts(info.atts, ['padding','margin','classes']);

    var tmpClassSpecs = {
        boolean: [],
        string: ['padding','margin']
    }
    function getClass(theProps, theIsEditMode){
        return BlockEditor.getStandardClass( 'content', tmpClassSpecs, theProps, theIsEditMode);
    }

	
    function getDisplayValue(theProps,theIsEditMode){
        var tmpAtts = theProps.attributes;
        var props = theProps;

        var tmpContent = [];
        var tmpClass = getClass(theProps,theIsEditMode);
        var tmpAtt = props.attributes;
        if( tmpAtt.classes ){
            tmpClass += ' ' + tmpAtt.classes;
        }

        if( theIsEditMode ){
            
            if( props.isSelected ){
                tmpClass += ' actapp-block-is-selected';
            } else {
                tmpClass += ' actapp-block-box';
            }
            tmpContent.push( el( wp.blockEditor.InnerBlocks ));
        } else {
            tmpContent.push( el( wp.blockEditor.InnerBlocks.Content ));
        }
        return el('div',{className:tmpClass},tmpContent);


    }

    wp.blocks.registerBlockType( info.category + '/' + info.name, {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        parent: 'actappui/card',
        supports: {
            inserter: false,
        },
        edit: function ( props ) {

            var tmpStandardProperties = [
            ];
            var tmpFormatProperties = [
                BlockEditor.getStandardProperty(props,'padding', 'Padding', 'padding' ),
                BlockEditor.getStandardProperty(props,'margin', 'Margin', 'margin'),
                BlockEditor.getStandardProperty(props,'classes', 'Additional Classes', 'text' )
            ];


            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Formatting Options', tmpFormatProperties)
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
            //not using blockProps, need clean HTML
            var tmpEl = getDisplayValue(props,false)
            return tmpEl;
        },

    } );
} )( window.wp, window.ActionAppCore );


