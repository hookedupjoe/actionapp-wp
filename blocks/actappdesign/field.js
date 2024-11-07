/**
 * Block Widget: field.js - Semantic UI Field  
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
 * @since actionappwp 1.0.12
 */
( function ( wp, ActionAppCore ) {
    
    var el = wp.element.createElement;
    var useBlockProps = wp.blockEditor.useBlockProps;
    var BlockEditor = ActionAppCore.common.blocks.Editor;
    
    var info = {
        name: 'field',
        title: 'UI Field',
        example: {
            attributes: {text: 'This is some more field text',title:'What a field'}
        },
        category: 'actappdesign',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addNumberAtts(info.atts,['gridwidth']);
    BlockEditor.addBooleanAtts(info.atts,['req', 'hidden']);
    BlockEditor.addStringAtts(info.atts,['name','label', 'note']);

    var tmpClassSpecs = {
        boolean: ['fluid','raised'],
        string: []
    }
    function getClass(theProps, theIsEditMode){
        return BlockEditor.getStandardClass( 'ui segment raised link pad7 mar0', tmpClassSpecs, theProps, theIsEditMode);
    }
	
    var newEl = BlockEditor.el;

    function getDisplayValue(theProps,theIsEditMode){
        var tmpAtts = theProps.attributes;
        var props = theProps;

        var tmpContent = [];
        var tmpClass = getClass(theProps,theIsEditMode);
        var tmpTitle = '';
        var tmpAtt = props.attributes;

        tmpContent.push( newEl('div',{}, 'Field Name: ' + tmpAtt.name));
        tmpContent.push( newEl('div',{}, 'Field Label: ' + tmpAtt.label));
        tmpContent.push( newEl('div',{}, 'Required?: ' + ( tmpAtt.req === true ? 'Yes' : 'No')));

        return newEl('div',tmpClass,tmpContent);

    }
 
    wp.blocks.registerBlockType( 'actappdesign/field', {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        supports: {
            inserter: true,
        },
        edit: function ( props ) {
            var tmpAtts = props.attributes;
            var tmpParentAttributes = BlockEditor.getParentAttributes(props.clientId);
            props.attributes.parentColor = tmpParentAttributes.color || '';
            props.attributes.parentMaxImgHeight = tmpParentAttributes.maxImageHeight || 0;

            var tmpParentColor = tmpParentAttributes.color || '';

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props,'name', 'Unique Name'),
                BlockEditor.getStandardProperty(props,'label', 'Label' ),
                BlockEditor.getStandardProperty(props,'req', 'Requied?' , 'checkbox'),
            ];

            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Field Options', tmpStandardProperties)
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
            //not using blockProps, need clean HTML
            var tmpEl = getDisplayValue(props,false)
            return tmpEl;
        },

    } );
} )( window.wp, window.ActionAppCore );


