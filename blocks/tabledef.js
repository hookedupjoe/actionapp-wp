/**
 * Block Widget: tabledef.js - A table define object
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
        name: 'tabledef',
        title: 'Report Table',
        rem_example: {
            attributes: {color: 'green'}
        },
        category: 'actappdesign',
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
        return BlockEditor.getStandardClass( 'actapp table', tmpClassSpecs, theProps, theIsEditMode);
    }
	function getDisplayValue(theProps,theIsEditMode){
        var props = theProps;
        var tmpClass = getClass(props, true);
       
        if( theIsEditMode ){
        var tmpUIColor = ''; //was props.attributes.color || 
        var tmpHeaderMsg = 'Table Setup';
        if( props.attributes.columns ){
            tmpHeaderMsg += " (" + props.attributes.columns + " columns)";
        } else {
            tmpHeaderMsg += " (columns auto-adjust )";
        }
        var tmpAddBtn = '';
        var tmpBtnBar = ''
        if( props.isSelected ){
            tmpAddBtn = el('div',{className:'ui compact button basic blue ',action:'beAddField'}, 'Add Field');
            tmpBtnBar = el('div',{className:'ui segment raised slim'},[
                tmpAddBtn
            ],el('div',{className:'endfloat'}));
            tmpUIColor = 'blue';
        }
        var tmpHdr = el('div',{className:'ui header top attached center aligned fluid ' + tmpUIColor},tmpHeaderMsg,tmpBtnBar);
        
        return el('div', {className:'ui segment ' + theProps.attributes.color || ''},null, 
        tmpHdr,     
        el('div',{className:'edit-cards' + props.attributes.color + ' ' + props.attributes.columns},
        [
            el(wp.blockEditor.InnerBlocks,{renderAppender:false}),
        ]
        )
        
        )
           // return BlockEditor.el('div', tmpClass,  [el( wp.blockEditor.InnerBlocks )]);
        } else {
            return BlockEditor.el('div', tmpClass, el( wp.blockEditor.InnerBlocks.Content ));
        }
        
    }
    

    wp.blocks.registerBlockType( 'actappdesign/tabledef', {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        edit: function ( props ) {

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props,'color', 'All Table Color', 'color' ),
                BlockEditor.getStandardProperty(props,'columns', 'Columns', 'columns' ),
                BlockEditor.getStandardProperty(props,'maxImageHeight', 'Max Image Height', 'number' ),
            ];
            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Cards Container Options', tmpStandardProperties)
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
                tmpProps["auto-adapt"] = "cards";
            } else {
                tmpProps["columns"] = props.attributes.columns;
            }


            var tmpClasses = 'ui cards';
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


