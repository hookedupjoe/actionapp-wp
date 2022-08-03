/**
 * Block Widget: segment.js - Semantic UI Segment
 * 
 * Copyright (c) 2021-2022 Joseph Francis / hookedup, inc. 
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
    var be = wp.data.dispatch('core/editor');

    var info = {
        name: 'segment',
        title: 'UI Segment',
        example: {
            attributes: { color: 'blue' }
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addBooleanAtts(info.atts, ['raised', 'stacked', 'vertical', 'clearing', 'hasdropindicator']);
    BlockEditor.addStringAtts(info.atts, ['color', 'size', 'attached', 'alignment', 'basic']);

    var tmpClassSpecs = {
        boolean: ['raised', 'stacked', 'vertical', 'basic', 'clearing'],
        string: ['color', 'size', 'attached', 'alignment']
    }
    function getClass(theProps, theIsEditMode) {
        return BlockEditor.getStandardClass('ui segment', tmpClassSpecs, theProps, theIsEditMode);
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
        // if (tmpPropAtts.spotname && tmpPropAtts.spotname != '') {
        //     var tmpSpotTopAtts = { spot: tmpPropAtts.spotname };
        //     if (tmpPropAtts.spotsourcetype) {
        //         tmpSpotTopAtts.sourcetype = tmpPropAtts.spotsourcetype;
        //         tmpSpotTopAtts.appuse = 'blockmarkup';
        //     }
        //     if (tmpPropAtts.spotsourcename) {
        //         tmpSpotTopAtts.sourcename = tmpPropAtts.spotsourcename;
        //     }
        //     if (tmpPropAtts.spotsourcepartname) {
        //         tmpSpotTopAtts.sourcepartname = tmpPropAtts.spotsourcepartname;
        //     }

        //     tmpEls.push(el('div', tmpSpotTopAtts, ''));
        // }

        if (theIsEditMode) {
            var tmpMe = wp.data.select('core/block-editor').getBlock(props.clientId);
            //--- If doing a preview, there is no active block in the editor
            if (tmpMe) {
                var tmpChildren = tmpMe.innerBlocks;
                if (!(tmpChildren && tmpChildren.length)) {
                    //--- This assures the drag and drop feature allows a drop in a new unselected segment
                    var tmpToAddElement = BlockEditor.getCommonBlock('dropindicator');
                    tmpPropAtts.hasdropindicator = true;
                    be.insertBlocks(tmpToAddElement, 0, props.clientId);
                } else {
                    //Find and remove drop indicator
                    if (tmpPropAtts.hasdropindicator && tmpChildren.length > 1) {
                        var tmpPos = -1;
                        for (var iPos = 0; iPos < tmpChildren.length; iPos++) {
                            var tmpChild = tmpChildren[iPos];
                            if (tmpChild.name == 'actappui/dropindicator') {
                                tmpPos = iPos;
                                break;
                            }
                        }
                        if (tmpPos > -1) {
                            tmpMe.innerBlocks.splice(tmpPos, 1);
                            tmpPropAtts.hasdropindicator = false;
                            ActAppBlockEditor.refreshBlockEditor();
                        }
                    }
                }
            }
            tmpEls.push(el(wp.blockEditor.InnerBlocks, {renderAppender:false}));
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
        attributes: info.atts,
        edit: function (props) {

            var tmpPropAtts = props.attributes;
            if (tmpPropAtts.spotname) {

            }
            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props, 'color', 'Segment Color', 'color'),
                BlockEditor.getStandardProperty(props, 'size', 'Size', 'size'),
                BlockEditor.getStandardProperty(props, 'basic', 'No Border', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'attached', 'Attached', 'attached'),
                BlockEditor.getStandardProperty(props, 'raised', 'Raised', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'stacked', 'Stacked', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'vertical', 'Vertical', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'clearing', 'Contain Floaters', 'checkbox')
            ];
            var tmpFormatProperties = [
                BlockEditor.getStandardProperty(props, 'alignment', 'Alignment', 'alignment')
            ];

            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Segment Options', tmpStandardProperties),
                BlockEditor.getSidebarPanel('Formatting Options', tmpFormatProperties)
            ];

            var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);

            var tmpDisplayObject = getDisplayValue(props, true);

            var tmpBtnBar = '';
            if (props.isSelected) {
                var tmpBarContent = [];
                //tmpBarContent.push(el('div',{className:'ui fluid label blue mar5'},'UI Segment')),
                tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'header' }, 'Header'));
                tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'corecolumns' }, 'Columns'));
                tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'message' }, 'Message'));
                tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'image' }, 'Image'));
                tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'cards' }, 'Cards'));
                tmpBarContent.push(el('span', {className:'toright'}, el(wp.blockEditor.InnerBlocks.ButtonBlockAppender, {className: 'actappappender'})));
                tmpBtnBar = el('div', {}, [el('div', { className: 'ui fluid label blue mar5' }, 'UI Segment'), el('div', { className: 'ui segment raised slim' }, tmpBarContent, el('div', { className: 'endfloat' }))]);
            }

            return el(
                'div',
                useBlockProps(),
                [
                    tmpBtnBar,
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


