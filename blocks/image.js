/**
 * Block Widget: image.js - Semantic UI Image
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
 * This image and all notices must be kept intact.
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
        name: 'image',
        title: 'UI Image',
        rem_example: {
            attributes: { color: 'blue', text: 'Image Text', size: 'large' }
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addBooleanAtts(info.atts, ['fluid', 'avatar', 'rounded', 'circular', 'urlopentab', 'bordered', 'centered']);
    BlockEditor.addStringAtts(info.atts, ['text', 'color', 'size', 'alignmentvertical', 'url', 'mediaURL', 'float','margin','padding', 'classes']);
    BlockEditor.addNumberAtts(info.atts, ['mediaID']);

    var tmpClassSpecs = {
        boolean: ['fluid', 'avatar', 'rounded', 'circular', 'bordered', 'centered'],
        string: ['color', 'size', 'alignmentvertical','margin','padding']
    }

    function getContent(theProps, theIsEditMode) {
        var props = theProps;
        var tmpAtts = theProps.attributes;
        var tmpContent = [];
        var tmpNotes = '';
        var tmpCN = getClass(props, true);
        if( tmpAtts.classes ){
            tmpCN += ' ' + tmpAtts.classes;
        }
        if (tmpAtts.float) {
            if (theIsEditMode) {
                tmpNotes = '** ' + tmpAtts.float
            } else {
                tmpCN += ' ' + tmpAtts.float;
            }

        }
        var tmpEl = el('img', { className: tmpCN, src: tmpAtts.mediaURL });
        if (theIsEditMode) {
            if (tmpAtts.float) {
                tmpEl = el('div', { className: 'clear-both-after' }, tmpEl);
            }
            if (!(tmpAtts.mediaURL)) {
                //                tmpEl = el('div',{className:'ui message compact small orange'},'Select image on sidebar');

                var onSelectImage = function (media) {
                    tmpToSet = {};
                    tmpToSet[attNamesDef['mediaURL']] = media.url;
                    tmpToSet[attNamesDef['mediaID']] = media.id;
                    return theProps.setAttributes(tmpToSet);

                };

                tmpEl = el(wp.blockEditor.MediaUpload, {
                    onSelect: onSelectImage,
                    type: 'image',
                    value: '',
                    render: function (obj) {
                        if (!theProps.attributes.mediaID) {
                            return el('div', { className: 'pad2' },
                                el('div', { className: 'ui button blue basic', onClick: obj.open }, 'Select Image')
                            )
                        } else {
                            return el('div', { className: 'pad2' },
                                el('div', { className: 'ui button blue basic', onClick: obj.open }, 'Replace'),
                                el('div', { className: 'ui button blue basic', onClick: function () { } }, 'Remove'),
                                el('div', { className: 'pad2' }),
                                el('img', { className: 'ui image rounded fluid', src: tmpAtts.mediaURL })
                            )
                        }
                    }
                })
            }
            tmpContent.push(tmpEl)
        } else {
            if (tmpAtts.url) {
                var tmpOpts = { className: tmpCN, href: tmpAtts.url };
                if (tmpAtts.urlopentab) {
                    tmpOpts.target = "_blank";
                    //--- Important, without this it shows 
                    tmpOpts.rel = "noopener";
                }
                tmpEl = el('a', tmpOpts, tmpEl);
            }
            tmpContent = tmpEl
        }
        return tmpContent;
    }
    function getClass(theProps, theIsEditMode) {
        return BlockEditor.getStandardClass('ui image', tmpClassSpecs, theProps, theIsEditMode);
    }

    var attNamesDef = { mediaID: 'mediaID', mediaURL: 'mediaURL' };
    wp.blocks.registerBlockType(info.category + '/' + info.name, {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        edit: function (props) {
            var tmpAtts = props.attributes;
            var tmpCN = getClass(props, true);
            var tmpContent = getContent(props, true);
            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props, attNamesDef, 'Image', 'image'),
                (tmpAtts.avatar || tmpAtts.rounded) ? '' : BlockEditor.getStandardProperty(props, 'circular', 'Circular', 'checkbox'),
                (tmpAtts.avatar || tmpAtts.circular) ? '' : BlockEditor.getStandardProperty(props, 'rounded', 'Rounded', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'bordered', 'Bordered', 'checkbox'),
                (tmpAtts.avatar || tmpAtts.fluid) ? '' : BlockEditor.getStandardProperty(props, 'size', 'Size', 'size'),
                (tmpAtts.avatar || tmpAtts.size) ? '' : BlockEditor.getStandardProperty(props, 'fluid', 'Full width', 'checkbox'),
                (tmpAtts.size) ? '' : BlockEditor.getStandardProperty(props, 'avatar', 'Show as icon', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'url', 'Target Content or Link', 'url'),
                !(tmpAtts.url) ? '' : BlockEditor.getStandardProperty(props, 'urlopentab', 'Open link in new tab?', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'spaced', 'Add spacing to link?', 'checkbox'),
                (tmpAtts.float) ? '' : BlockEditor.getStandardProperty(props, 'centered', 'Centered', 'checkbox'),
                (tmpAtts.centered) ? '' : BlockEditor.getStandardProperty(props, 'float', 'Float', 'floatleftright'),
                BlockEditor.getStandardProperty(props, 'alignmentvertical', 'Veritcal Alignment', 'alignmentvertical'),
            ];
            var tmpFormatProperties = [
                BlockEditor.getStandardProperty(props,'margin', 'Margin', 'margin'),
                BlockEditor.getStandardProperty(props,'padding', 'Padding', 'padding' ),                
                BlockEditor.getStandardProperty(props,'classes', 'Additional Classes', 'text' ),
            ];
            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Image Options', tmpStandardProperties),
                (tmpAtts.avatar) ? '' : BlockEditor.getSidebarPanel('Formatting Options', tmpFormatProperties),
            ];
            var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);
            var tmpDisplayObject = tmpContent;

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
            return getContent(props, false);
        },
    });
})(window.wp, window.ActionAppCore);

