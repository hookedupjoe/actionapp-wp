/**
 * Block Widget: buttons.js - Semantic UI Buttons Container
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
        name: 'buttons',
        title: 'UI Button Container',
        example: {
            attributes: {color: 'green'}
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addNumberAtts(info.atts,['maxImageHeight']);
    BlockEditor.addStringAtts(info.atts,['columns','color']);

    var tmpClassSpecs = {
        boolean: [],
        string: ['color']
    }
    function getClass(theProps, theIsEditMode){
        return BlockEditor.getStandardClass( 'ui buttons', tmpClassSpecs, theProps, theIsEditMode);
    }
	function getDisplayValue(theProps,theIsEditMode){
        var props = theProps;
        var tmpClass = getClass(props, true);
       

        if( theIsEditMode ){
        var tmpUIColor = props.attributes.color || '';
        var tmpHeaderMsg = 'BUTTONS CONTAINER:';
        if( props.attributes.columns ){
            tmpHeaderMsg += " (" + props.attributes.columns + " columns)";
        } else {
            tmpHeaderMsg += " (columns auto-adjust )";
        }
        var tmpHdr = el('div',{className:'ui label fluid large ' + tmpUIColor},tmpHeaderMsg);
        return el('div', {className:'ui segment ' + theProps.attributes.color || ''},null, 
        tmpHdr ,    
        el('div',{className:'edit-buttons' + props.attributes.color + ' ' + props.attributes.columns},
        [
            el(wp.blockEditor.InnerBlocks),
        ]
        ))
           // return BlockEditor.el('div', tmpClass,  [el( wp.blockEditor.InnerBlocks )]);
        } else {
            return BlockEditor.el('div', tmpClass, el( wp.blockEditor.InnerBlocks.Content ));
        }
        
    }

    wp.blocks.registerBlockType( 'actappui/buttons', {
        title: info.title,
        icon: iconEl,
        category: info.category,
        rem_example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        edit: function ( props ) {

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props,'color', 'All Buttons Color', 'color' ),
                BlockEditor.getStandardProperty(props,'columns', 'Columns', 'columns' ),
                BlockEditor.getStandardProperty(props,'maxImageHeight', 'Max Image Height', 'number' ),
            ];
            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Buttons Container Options', tmpStandardProperties)
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
            var tmpProps = {className: ''};
            
            if( props.attributes.columns == '' ){
                tmpProps["auto-adapt"] = "buttons";
            } else {
                tmpProps["columns"] = props.attributes.columns;
            }


            var tmpClasses = 'ui buttons';
            var tmpClasses = getClass(props, true);
            if( props.attributes.columns != ''){
                tmpClasses += ' stackable ' + props.attributes.columns;
            }

            tmpProps.className += ' ' + tmpClasses;

            return el(
                'div',                
                tmpProps,                               
                el( wp.blockEditor.InnerBlocks.Content )
                
            );
        },
    } );
} )( window.wp, window.ActionAppCore );


