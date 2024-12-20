/**
 * Block Widget: segment.js - Semantic UI Segment
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
        name: 'segment',
        title: 'UI Segment',
        rem_example: {
            attributes: { color: 'blue' }
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addBooleanAtts(info.atts, ['raised', 'stacked', 'vertical', 'clearing', 'inverted']);
    BlockEditor.addStringAtts(info.atts, ['color', 'size', 'attached', 'alignment', 'basic', 'margin', 'padding', 'classes']);

    var tmpClassSpecs = {
        boolean: ['raised', 'stacked', 'vertical', 'basic', 'clearing', 'inverted', 'margin', 'padding'],
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
        

        var tmpPropAtts = theProps.attributes;
        if( tmpPropAtts.classes ){
            tmpClass += ' ' + tmpPropAtts.classes;
        }
        var tmpAtts = { className: tmpClass };

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
                BlockEditor.getStandardProperty(props, 'color', 'Segment Color', 'color'),
                BlockEditor.getStandardProperty(props, 'size', 'Size', 'size'),
                BlockEditor.getStandardProperty(props, 'basic', 'No Border', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'attached', 'Attached', 'attached'),
                BlockEditor.getStandardProperty(props, 'raised', 'Raised', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'stacked', 'Stacked', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'vertical', 'Fitted', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'inverted', 'Inverted', 'checkbox' ),
                BlockEditor.getStandardProperty(props, 'clearing', 'Contain Floaters', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'alignment', 'Alignment', 'alignment')
            ];
            var tmpFormatProperties = [
                BlockEditor.getStandardProperty(props,'padding', 'Padding', 'padding' ),
                BlockEditor.getStandardProperty(props,'margin', 'Margin', 'margin'),
                BlockEditor.getStandardProperty(props,'classes', 'Additional Classes', 'text' )
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
                tmpBarContent.push(el('span', {className:'toright'}, el(wp.blockEditor.InnerBlocks.ButtonBlockAppender, {className: 'actappappender'})));
                tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'header' }, 'Header'));
                //tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'corecolumns' }, 'Columns'));
                tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'message' }, 'Message'));
                //tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'image' }, 'Image'));
                tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'cards' }, 'Cards'));
            
                tmpBtnBar = el('div',{},[el('div',{className:'ui fluid center aligned label blue'},'Segment'),el('div',{className:'ui segment raised slim'},tmpBarContent,el('div',{className:'endfloat'}))]);
            }

            return el(
                'div',
                {},
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


