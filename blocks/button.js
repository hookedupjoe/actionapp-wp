/**
 * Block Widget: button.js - Semantic UI Button
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
 * This button and all notices must be kept intact.
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
        name: 'button',
        title: 'UI Button',
        rem_example: {
            attributes: {color: 'blue',text: 'Button Text', size: 'large'}
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addBooleanAtts(info.atts,['fluid','compact','basic','circular','urlopentab']);
    BlockEditor.addStringAtts(info.atts,['text','color','size', 'attached', 'url', 'float']);
//removed 'alignment', 
    var tmpClassSpecs = {
        boolean: ['fluid','compact','basic','circular'],
        string: ['color','size', 'attached', 'float']
    }
    //removed  'alignment',
    
    function getContent(theProps, theIsEditMode){
        var tmpAtts = theProps.attributes;
        var tmpContent = [];
        return tmpContent;
    }
    function getClass(theProps, theIsEditMode){
        return BlockEditor.getStandardClass( 'ui button', tmpClassSpecs, theProps, theIsEditMode);
    }
    wp.blocks.registerBlockType( info.category + '/' + info.name, {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        // transforms: {
        //     to: [
        //         {
        //             type: "block",
        //             blocks: [info.category + '/' + info.name],
        //             transform: ({ content }) => {
        //                 console.log(content);
        //                 return wp.blocks.createBlock(info.category + '/' + info.name);
        //             },
        //         },
        //     ],
        // },
        attributes: info.atts,
        edit: function ( props ) {
            var tmpAtts = props.attributes;

            var tmpCN = getClass(props, true);
            var tmpContent = getContent(props, true);
            
            var tmpText = tmpAtts.text;
           
           
            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props,'text', 'Button Text'),
                BlockEditor.getStandardProperty(props,'color', 'Button Color', 'color' ),
                BlockEditor.getStandardProperty(props,'size', 'Size', 'size' ),
                BlockEditor.getStandardProperty(props,'circular', 'Circular', 'checkbox' ),
                BlockEditor.getStandardProperty(props,'basic', 'Outlined', 'checkbox' ),
                BlockEditor.getStandardProperty(props,'compact', 'Compact', 'checkbox' ),
                BlockEditor.getStandardProperty(props,'fluid', 'Full width', 'checkbox' ),
                BlockEditor.getStandardProperty(props,'float', 'Float Left/Right', 'tofloat'),
                BlockEditor.getStandardProperty(props,'attached', 'Attached', 'attached' ),
                BlockEditor.getStandardProperty(props,'url', 'Target Content or Link', 'url' ),
                !(tmpAtts.url) ? '' : BlockEditor.getStandardProperty(props,'urlopentab', 'Open link in new tab?', 'checkbox' ),
            ];
            // var tmpFormatProperties = [
            //     BlockEditor.getStandardProperty(props,'alignment', 'Alignment', 'alignmentleftright' ),
            // ];
            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Button Options', tmpStandardProperties),
//                BlockEditor.getSidebarPanel('Formatting Options', tmpFormatProperties),
            ];
            
            var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);
        var tmpDisplayObject = el('div',{className:'clear-both-after'},el('div',{className:tmpCN},[tmpText,tmpContent]));
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
            var tmpClass = getClass(props, false);
            var tmpContent = getContent(props, false);
            var tmpAtts = props.attributes;
            var tmpEls = [
                tmpAtts.text,
                tmpContent
            ]
            if( tmpAtts.url ){
                var tmpOpts = {className:tmpClass,href:tmpAtts.url};
                if( tmpAtts.urlopentab ){
                    tmpOpts.target = "_blank";
                    //--- Important, without this it shows 
                    tmpOpts.rel = "noopener";
                }
                return el('a',tmpOpts,tmpEls);
            } else {
                return el('div',{className:tmpClass},tmpEls);
            }

        },
    } );
} )( window.wp, window.ActionAppCore );

