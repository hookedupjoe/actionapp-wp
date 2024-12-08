/**
 * Block Widget: tab.js - Semantic UI Tab  
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
(function (wp, ActionAppCore) {

    var el = wp.element.createElement;
    var useBlockProps = wp.blockEditor.useBlockProps;
    var BlockEditor = ActionAppCore.common.blocks.Editor;

    var info = {
        name: 'tab',
        title: 'UI Tab',
        rem_example: {
            attributes: { text: 'This is some more tab text', title: 'What a tab' }
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addNumberAtts(info.atts, []);
    BlockEditor.addBooleanAtts(info.atts, []);
    BlockEditor.addStringAtts(info.atts, ['itemname', 'groupname', 'tablabel']);

    var tmpClassSpecs = {
        boolean: [],
        string: []
    }

    function getClass(theProps, theIsEditMode) {
        return BlockEditor.getStandardClass('ui column', tmpClassSpecs, theProps, theIsEditMode);
    }

    var newEl = BlockEditor.el;

    function BAD____getDisplayValue(theProps, theIsEditMode) {
        var props = theProps;
        var tmpAtts = props.attributes;
        var tmpContent = [];

        var tmpItemName = tmpAtts.itemname || ''
        var tmpTabLabel = tmpAtts.tablabel || '';

        var tmpClass = getClass(theProps, theIsEditMode);
        if( !theIsEditMode ){
            tmpClass += 'tempnot_hidden ';
        }
      
        if( tmpAtts.classes ){
            tmpClass += tmpAtts.classes + ' ';
        }
        var tmpTabPrefix = el('div',{className: 'ui label brown right pointing small compact'}, 'Tab:');
        var tmpTabNameLabel = el('div',{className: 'ui label brown basic toright padr10'}, tmpItemName);

        var tmpHM = tmpTabLabel;
        var tmpEditHeader = el('div', {className:"ui message bolder center aligned pad8 brown small"}, tmpTabPrefix, tmpHM,tmpTabNameLabel);
        tmpContent.push(tmpEditHeader)


        if (theIsEditMode) {
            tmpContent.push(newEl('div', '', el(wp.blockEditor.InnerBlocks,{})));
        } else {
            tmpContent.push(el(wp.blockEditor.InnerBlocks.Content));
        }

        var tmpAttrs = {
            classname: tmpClass,
            appuse: 'cards',
            item: tmpItemName,
            group: tmpAtts.groupname || '',
        }


        if (theIsEditMode) {
            if (props.isSelected) {
                tmpAddBtn = el('div', { className: 'ui compact button basic brown ', action: 'beAddCard' }, 'Add Card');
                tmpBtnBar = el('div', { className: 'ui segment raised slim' }, [
                    tmpAddBtn
                ], el('div', { className: 'endfloat' }));
                tmpUIColor = 'brown';
            }
            var tmpEditorClass = '';
            if( props.isSelected ){
                tmpEditorClass += ' actapp-block-is-selected';
            } else {
                tmpEditorClass += ' actapp-block-box';
            }

            return el('div', {}, [newEl('div', tmpAttrs, [tmpContent])]);
        }
        el('div', {}, [newEl('div', tmpAttrs, [tmpContent])])
       // return newEl('div', tmpClass, tmpContent);
    }

    function getDisplayValue(theProps, theIsEditMode) {

        var props = theProps;
        var tmpAtts = props.attributes;
        var tmpContent = [];

        var tmpItemName = tmpAtts.itemname || ''
        var tmpTabLabel = tmpAtts.tablabel || '';
        var tmpContent = [];
        var tmpClass = getClass(theProps, theIsEditMode);
        if( theIsEditMode ){
            tmpClass += ' fluid';
        }
      
        if( tmpAtts.classes ){
            tmpClass += ' ' + tmpAtts.classes;
        }

        if (theIsEditMode) {
            tmpContent.push(newEl('div', '', el(wp.blockEditor.InnerBlocks,{})));
        } else {
            tmpContent.push(el(wp.blockEditor.InnerBlocks.Content));
        }

        var tmpExtraContent = [];
       
        tmpContent.push(tmpExtraContent);

        var tmpNewElAtts = {
            classname: tmpClass,
            appuse: 'cards',
            item: tmpItemName,
            group: tmpAtts.groupname || '',
        }

        if (theIsEditMode) {
            return el('div', tmpNewElAtts, [newEl('div', tmpClass, [tmpContent])]);
        }

        return el('div', tmpNewElAtts, tmpContent);
    }

    var tmpSupports = BlockEditor.defaultSupports;
    tmpSupports.inserter = true

    wp.blocks.registerBlockType('actappui/tab', {
        title: info.title,
        icon: iconEl,
        category: info.category,
        rem_example: info.example,
        supports: tmpSupports,
        parent: 'actappui/tabs',
        supports: {
            inserter: false,
        },
        attributes: info.atts,
        edit: function (props) {
            var tmpAtts = props.attributes;

            var tmpItemName = tmpAtts.itemname || ''
            var tmpTabLabel = tmpAtts.tablabel || '';

            var tmpParentAttributes = BlockEditor.getParentAttributes(props.clientId);
            props.attributes.parentMaxImgHeight = tmpParentAttributes.imageheight || '';
            props.attributes.parentHeaderType = tmpParentAttributes.headerType || 'default';

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props, 'itemname', 'Unique Item Name (Required)', 'text'),
                BlockEditor.getStandardProperty(props, 'tablabel', 'Tab Label', 'text'),
                BlockEditor.getStandardProperty(props, 'groupname', 'Group Name', 'text'),
            ];

            var tmpFormatProperties = [
                BlockEditor.getStandardProperty(props,'classes', 'Additional Classes', 'text' )
            ];

            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Column Options', tmpStandardProperties),
                BlockEditor.getSidebarPanel('Formatting Options', tmpFormatProperties)
            ];

            var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);

            var tmpDisplayObject = getDisplayValue(props, true);
            var tmpEditorClass = '';
            if( props.isSelected ){
                tmpEditorClass += ' actapp-block-is-selected';
            } else {
                tmpEditorClass += ' actapp-block-box';
            }

  
            
            var tmpTabPrefix = el('div',{className: 'ui label brown right pointing small compact'}, 'Tab:');
            var tmpTabNameLabel = el('div',{className: 'ui label brown basic toright padr10'}, tmpAtts.itemname);
    
            var tmpHM = tmpTabLabel;
            var tmpEditHeader = el('div', {className:"ui message bolder center aligned pad8 brown small"}, tmpTabPrefix, tmpHM,tmpTabNameLabel);
           // tmpContent.push(tmpEditHeader)
            var tmpContent = [];
            tmpContent.push(tmpEditHeader);
            
            var tmpRetEl = el(
                'div',
                {className: tmpEditorClass},
                [
                    tmpSidebarControls,
                    tmpDisplayObject
                ]
            );

            return el('div',{},tmpEditHeader, tmpRetEl);
        },

        save: function (props) {
            //*** Not using blockProps, need clean HTML
            var tmpEl = getDisplayValue(props, false)
            return tmpEl;
        },

    });
})(window.wp, window.ActionAppCore);



