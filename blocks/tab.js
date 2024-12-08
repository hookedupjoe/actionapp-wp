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

    BlockEditor.addNumberAtts(info.atts, ['tabpos']);
    BlockEditor.addBooleanAtts(info.atts, []);
    BlockEditor.addStringAtts(info.atts, ['itemname', 'groupname', 'tablabel']);

    var tmpClassSpecs = {
        boolean: [],
        string: []
    }

    function getClass(theProps, theIsEditMode) {
        var tmpExtraClasses = '';

        return BlockEditor.getStandardClass('ui ' + tmpExtraClasses, tmpClassSpecs, theProps, theIsEditMode);
    }

    var newEl = BlockEditor.el;

    function getDisplayValue(theProps, theIsEditMode) {

        var props = theProps;
        var tmpAtts = props.attributes;

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
        
        var tmpTabPos = parseInt(tmpAtts.tabpos);

        var tmpNewElAtts = {
            className: tmpClass,
            appuse: 'cards',
            item: tmpItemName,
            group: tmpAtts.groupname || '',
        }

        if (theIsEditMode) {
            return el('div', tmpNewElAtts, [newEl('div', tmpClass, [tmpContent])]);
        }

        if(tmpTabPos > 0 ){
            tmpNewElAtts.className += ' hidden';
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


            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props, 'itemname', 'Unique Item Name (Required)', 'text'),
                BlockEditor.getStandardProperty(props, 'tablabel', 'Tab Label', 'text'),
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
            
            var tmpTabPrefix = el('div',{className: 'ui label brown'}, tmpTabLabel);
            var tmpTabNameLabel = el('div',{className: 'ui label brown basic  padr10'}, tmpItemName);
    
            //var tmpHM = tmpTabLabel;
            var tmpEditHeader = el('div', {className:"ui message bolder center aligned pad8 brown small"}, tmpTabPrefix,tmpTabNameLabel);
 

            
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



