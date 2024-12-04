/**
 * Block Widget: gridcolumn.js - Semantic UI Grid Column  
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
        name: 'gridcolumn',
        title: 'UI Grid Column',
        rem_example: {
            attributes: { text: 'This is some more gridcolumn text', title: 'What a gridcolumn' }
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addNumberAtts(info.atts, []);
    BlockEditor.addBooleanAtts(info.atts, ['centered']);
    BlockEditor.addStringAtts(info.atts, []);
    //'text',

    var tmpClassSpecs = {
        boolean: ['centered'],
        string: []
    }
    function getClass(theProps, theIsEditMode) {
        return BlockEditor.getStandardClass('ui column', tmpClassSpecs, theProps, theIsEditMode);
    }

    var newEl = BlockEditor.el;

    function getDisplayValue(theProps, theIsEditMode) {

        var tmpAtts = theProps.attributes;
        var props = theProps;
        var tmpContent = [];
        var tmpClass = getClass(theProps, theIsEditMode);
        if( theIsEditMode ){
            tmpClass += ' fluid';
        }
        var tmpAtt = props.attributes;


        if (theIsEditMode) {
            tmpContent.push(newEl('div', '', el(wp.blockEditor.InnerBlocks,{})));
        } else {
            tmpContent.push(el(wp.blockEditor.InnerBlocks.Content));
        }

        var tmpExtraContent = [];
       
        tmpContent.push(tmpExtraContent);
        if (tmpAtts.parentPadding) {
            tmpClass += ' ' + tmpAtts.parentPadding;
        }

        if (theIsEditMode) {
            return el('div', { className: tmpClass }, [newEl('div', tmpClass, [tmpContent])]);
        }

        return newEl('div', tmpClass, tmpContent);
    }

    var tmpSupports = BlockEditor.defaultSupports;
    tmpSupports.inserter = true

    wp.blocks.registerBlockType('actappui/gridcolumn', {
        title: info.title,
        icon: iconEl,
        category: info.category,
        rem_example: info.example,
        supports: tmpSupports,
        parent: 'actappui/grid',
        supports: {
            inserter: false,
        },
        attributes: info.atts,
        edit: function (props) {
            var tmpAtts = props.attributes;
            var tmpParentAttributes = BlockEditor.getParentAttributes(props.clientId);
            props.attributes.parentMaxImgHeight = tmpParentAttributes.imageheight || '';
            props.attributes.parentHeaderType = tmpParentAttributes.headerType || 'default';

            if (tmpParentAttributes.padding) {
                props.attributes.parentPadding = tmpParentAttributes.padding || '';
            }

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props, 'centered', 'Centered', 'checkbox'),
            ];

            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Column Options', tmpStandardProperties)
            ];

            var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);

            var tmpDisplayObject = getDisplayValue(props, true);

            return el(
                'div',
                {},
                [
                    tmpSidebarControls,
                    tmpDisplayObject
                ]
            );

        },

        save: function (props) {
            //*** Not using blockProps, need clean HTML
            var tmpEl = getDisplayValue(props, false)
            return tmpEl;
        },

    });
})(window.wp, window.ActionAppCore);



