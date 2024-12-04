/**
 * Block Widget: container.js - Semantic UI Container
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
    var be = wp.data.dispatch('core/block-editor');

    var info = {
        name: 'container',
        title: 'UI Container',
        rem_example: {
            attributes: { color: 'blue' }
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addStringAtts(info.atts, ['margin','padding']);

    var tmpClassSpecs = {
        boolean: ['raised', 'stacked', 'vertical', 'basic', 'clearing', 'inverted'],
        string: ['color', 'size', 'attached', 'alignment','margin','padding']
    }
    function getClass(theProps, theIsEditMode) {
        return BlockEditor.getStandardClass('ui container', tmpClassSpecs, theProps, theIsEditMode);
    }
    function getDisplayValue(theProps, theIsEditMode) {
        var props = theProps;
        var tmpClass = getClass(props, true);
        if (theIsEditMode) { //&& !props.isSelected 
            tmpClass += ' actapp-block-box';
        }
        var tmpAtts = { className: tmpClass };
        var tmpPropAtts = theProps.attributes;

        var tmpEls = [];

        if (theIsEditMode) {
            var tmpMe = wp.data.select('core/block-editor').getBlock(props.clientId);
            //--- If doing a preview, there is no active block in the editor
            if (tmpMe) {
                tmpEls.push(el(wp.blockEditor.InnerBlocks));
            }
           
        } else {
            tmpEls.push(el(wp.blockEditor.InnerBlocks.Content));
        }

        return el('div', tmpAtts, tmpEls);

    }

    wp.blocks.registerBlockType(info.category + '/' + info.name, {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        edit: function (props) {

            var tmpPropAtts = props.attributes;
            if (tmpPropAtts.spotname) {

            }
            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props,'margin', 'Margin', 'margin'),
                BlockEditor.getStandardProperty(props,'padding', 'Padding', 'padding' ),

            ];

            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Container Options', tmpStandardProperties)
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
            return getDisplayValue(props, false);
        },
    });
})(window.wp, window.ActionAppCore);


