/**
 * Block Widget: cards.js - Semantic UI Cards Container
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
        name: 'cards',
        title: 'UI Card Container',
        example: {
            attributes: {color: 'green'}
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addNumberAtts(info.atts,['maxImageHeight','minColWidth']);
    BlockEditor.addStringAtts(info.atts,['columns','color','margin']);
    BlockEditor.addBooleanAtts(info.atts,['centered']);

    var tmpClassSpecs = {
        boolean: ['centered'],
        string: ['color']
    }
    function getClass(theProps, theIsEditMode){
        return BlockEditor.getStandardClass( 'ui cards ', tmpClassSpecs, theProps, theIsEditMode);
    }

   function onSelectionChange( theEvent ) {
        var tmpObjAtts = {};
        var tmpVal = (theEvent.target.value);
        
        tmpObjAtts[this.attName] = tmpVal;
        this.props.setAttributes( tmpObjAtts );
        //--- The below refresh cause issues with editor in widgets area
        BlockEditor.refreshBlockEditor();
        //--- ToDo: Review usage / initial need of the above call
    }

	function getDisplayValue(theProps,theIsEditMode){
        var props = theProps;
        var tmpClass = getClass(props, true);
       
        if( theIsEditMode ){
        var tmpUIColor = ''; //was props.attributes.color || 
        var tmpHeaderMsg = 'Cards Container';
        if( props.attributes.columns ){
            tmpHeaderMsg += " (" + props.attributes.columns + " columns)";
        } else {
            tmpHeaderMsg += " (columns auto-adjust )";
        }
        var tmpAddBtn = '';
        var tmpBtnBar = ''
        if( props.isSelected ){
            tmpAddBtn = el('div',{className:'ui compact button basic blue ',action:'beAddCard'}, 'Add Card');
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
            el(wp.blockEditor.InnerBlocks,{allowedBlocks: ['actappui/card'], renderAppender:false}),
        ]
        )
        
        )
           // return BlockEditor.el('div', tmpClass,  [el( wp.blockEditor.InnerBlocks )]);
        } else {
            return BlockEditor.el('div', tmpClass, el( wp.blockEditor.InnerBlocks.Content ));
        }
        
    }
    

    wp.blocks.registerBlockType( 'actappui/cards', {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        edit: function ( props ) {

            var tmpMargins = ['Default|','1px|mar1','2px|mar2','3px|mar3','4px|mar4','5px|mar5'];
            

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props,'color', 'All Cards Color', 'color', onSelectionChange ),
                BlockEditor.getStandardProperty(props,'columns', 'Columns', 'columns' ),
                BlockEditor.getStandardProperty(props,'maxImageHeight', 'Max Image Height', 'number', onSelectionChange ),
                BlockEditor.getStandardProperty(props,'minColWidth', 'Minimum Column Width', 'number' ),
                BlockEditor.getStandardProperty(props,'margin', 'Margin', 'margin', onSelectionChange ),
                BlockEditor.getStandardProperty(props,'centered', 'Centered', 'checkbox' )
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
            var tmpProps = {};
            
            if( props.attributes.columns == '' ){
               tmpProps["auto-adapt"] = "cards";
            } else {
                tmpProps["columns"] = props.attributes.columns;
            }
            if( props.attributes.minColWidth ){
                tmpProps["mincolwidth"] = props.attributes.minColWidth;
            }
                //props.attributes
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


