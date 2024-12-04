/**
 * Block Widget: header.js - Semantic UI Header
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
        name: 'header',
        title: 'UI Header',
        rem_example: {
            attributes: {color: 'blue',text: 'Header Text', size: 'large'}
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);
    BlockEditor.addStringAtts(info.atts,['name', 'ctl', 'text', 'color', 'size', 'subtext', 'attached', 'alignment', 'margin', 'padding', 'classes']);
    BlockEditor.addBooleanAtts(info.atts,['dividing', 'block', 'inverted']);
    var tmpClassSpecs = {
        boolean: ['dividing','block','inverted'],
        string: ['color','size', 'attached', 'alignment','margin','padding']
    }
    
    function getContent(theProps, theIsEditMode){
        var tmpAtts = theProps.attributes;
        tmpAtts.ctl = 'header';
        var tmpContent = [];
        if( tmpAtts.subtext != '' ){
            tmpContent.push( BlockEditor.el('div','sub header',tmpAtts.subtext) );
        }
        return tmpContent;
    }
    function getClass(theProps, theIsEditMode){
        return BlockEditor.getStandardClass( 'ui header', tmpClassSpecs, theProps, theIsEditMode);
    }
    wp.blocks.registerBlockType( info.category + '/' + info.name, {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        edit: function ( props ) {
            var tmpAtts = props.attributes;

            var tmpCN = getClass(props, true);
            if( tmpAtts.classes ){
                tmpCN += ' ' + tmpAtts.classes;
            }
            var tmpContent = getContent(props, true);
            
            var tmpText = tmpAtts.text;
            if(  (!(tmpAtts.text || tmpAtts.subtext))){
                tmpText = 'Blank Header: Enter details on the sidebar **';
            }
           
            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props,'text', 'Header Text'),
                BlockEditor.getStandardProperty(props,'subtext', 'Sub Text' ),
                BlockEditor.getStandardProperty(props,'color', 'Header Color', 'color' ),
                BlockEditor.getStandardProperty(props,'size', 'Size', 'sizeheader' ),
                BlockEditor.getStandardProperty(props,'inverted', 'Inverted', 'checkbox' ),
                BlockEditor.getStandardProperty(props,'dividing', 'Line at bottom', 'checkbox' ),
                BlockEditor.getStandardProperty(props,'block', 'Show as block', 'checkbox' ),
                BlockEditor.getStandardProperty(props,'attached', 'Attached', 'attached' ),
                BlockEditor.getStandardProperty(props,'alignment', 'Alignment', 'alignment' )
            ];

            var tmpFormatProperties = [
                BlockEditor.getStandardProperty(props,'padding', 'Padding', 'padding' ),
                BlockEditor.getStandardProperty(props,'margin', 'Margin', 'margin'),
                BlockEditor.getStandardProperty(props,'classes', 'Additional Classes', 'text' )
            ];


            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Header Options', tmpStandardProperties),
                BlockEditor.getSidebarPanel('Formatting Options', tmpFormatProperties)
            ];

            var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);

            var tmpDisplayObject = el('div',{className:tmpCN},[tmpText,tmpContent]);

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
            var tmpCN = getClass(props, false);
            var tmpContent = getContent(props, false);
            return el('div',
                {className:tmpCN},
                [
                    props.attributes.text,
                    tmpContent
                ]
            );
        },
    } );
} )( window.wp, window.ActionAppCore );

