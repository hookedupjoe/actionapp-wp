/**
 * Block Widget: card.js - Semantic UI Card  
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
        name: 'card',
        title: 'UI Card',
        example: {
            attributes: { text: 'This is some more card text', title: 'What a card' }
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);
    const defaultPadding = 'pad8';

    BlockEditor.addNumberAtts(info.atts, ['mediaID']);
    BlockEditor.addBooleanAtts(info.atts, ['fluid', 'raised', 'urlopentab']);
    BlockEditor.addStringAtts(info.atts, ['text','parentMaxImgHeight', 'title', 'text', 'subtitle', 'color', 'headerColor', 'parentColor', 'parentHeaderType', 'parentPadding', 'url', 'mediaURL']);

    var tmpClassSpecs = {
        boolean: ['fluid', 'raised'],
        string: ['color'],
    }
    function getClass(theProps, theIsEditMode) {
        return BlockEditor.getStandardClass('ui card', tmpClassSpecs, theProps, theIsEditMode);
    }

    var newEl = BlockEditor.el;

    function getDisplayValue(theProps, theIsEditMode) {

        var tmpAtts = theProps.attributes;
        var props = theProps;
        var tmpAtt = props.attributes;

        var tmpContent = [];
        var tmpClass = getClass(theProps, theIsEditMode);
        if( theIsEditMode ){
            tmpClass += ' fluid';
        }
        var tmpTitle = '';

        if (tmpAtts.parentColor) {
            //tmpClass += ' ' + tmpAtts.parentColor;
        } else if (tmpAtt.color) {
            tmpClass += ' ' + tmpAtt.color;
        }




        if (tmpAtt.title) {
            tmpTitle = tmpAtt.title;
        }
        if (tmpAtt.mediaURL) {
            var tmpMediaAtts = { src: tmpAtt.mediaURL };
            if (tmpAtts.parentMaxImgHeight > 0) {
                tmpMediaAtts.style = { "max-height": tmpAtts.parentMaxImgHeight + "px", "object-fit": "cover" };
            }

            tmpContent.push(newEl('div', 'image', el('img', tmpMediaAtts)));
        }
        if (theIsEditMode && tmpTitle == '' && tmpAtt.mediaURL == '' && tmpAtt.subtitle == '' && tmpAtt.text == '') {
            //EDIT ONLY - Optionally include this?
            //tmpTitle = '** EDIT DETAILS ON SIDEBAR **';
        }
        var tmpMainContent = [];
        var tmpSub = [];
        var tmpHeaderSize = 'medium';
        var tmpHeaderColor = tmpAtts.color || tmpAtts.parentColor || '';
        var tmpInverted = '';

        tmpInverted = ' inverted ';
        if (tmpAtt.parentHeaderType == 'inverted') {
            var tmpItems = [];

            if (tmpAtt.subtitle) {
                tmpSub = newEl('div', 'subheader', tmpAtt.subtitle);
            }
            if (tmpTitle) {
                if (!(tmpHeaderColor)) {
                    tmpHeaderColor = 'black';
                }
                tmpItems.push(newEl('div', 'ui header inverted ' + ' ' + tmpHeaderSize, [tmpTitle, tmpSub]));
                tmpMainContent.push(newEl('div', 'ui label fluid pad10 mart0  ' + tmpInverted + tmpHeaderColor, [tmpItems]));
            }
           

        } else if (tmpAtt.parentHeaderType == 'light') {
            var tmpItems = [];

            if (tmpAtt.subtitle) {
                tmpSub = newEl('div', 'subheader', tmpAtt.subtitle);
            }
            if (tmpTitle) {
                tmpItems.push(newEl('div', 'ui header ' + tmpHeaderColor + ' ' + tmpHeaderSize, [tmpTitle, tmpSub]));
                tmpMainContent.push(newEl('div', 'ui message attached pad10 mart0 marb0  ' + tmpHeaderColor, [tmpItems]));

            }

        } else {
            var tmpItems = [];
            if (tmpAtt.subtitle) {
                tmpSub = newEl('div', 'subheader', tmpAtt.subtitle);
            }
            if (tmpTitle) {
                tmpItems.push(newEl('div', 'ui header ' + tmpHeaderColor + ' ' + tmpHeaderSize, [tmpTitle, tmpSub]));
                tmpMainContent.push(newEl('div', 'ui ' + tmpHeaderColor, [tmpItems]));
            }

        }

        if( tmpAtt.text ){
            tmpMainContent.push( newEl('div','pad10 description',tmpAtt.text) );
        }

        var tmpPadding = tmpAtt.parentPadding || defaultPadding;
        tmpClass += ' ' + tmpPadding;

        if (tmpMainContent.length > 0) {
            tmpContent.push(newEl('div', '', tmpMainContent));
        }

        if (theIsEditMode) {
            tmpContent.push(newEl('div', '', el(wp.blockEditor.InnerBlocks, {
                allowedBlocks: ['actappui/cardsection', 'actappui/cardsectionbottom'], renderAppender: false, norendetemplateLock: "insert",
                template: [
                    [
                        'actappui/cardsection',
                        {},
                        [

                        ]
                    ],
                    [
                        'actappui/cardsectionbottom',
                        {},
                        [

                        ]
                    ],
                ]
            })));
        } else {
            tmpContent.push(el(wp.blockEditor.InnerBlocks.Content));
        }

        var tmpExtraContent = [];
        // var tmpBtnBar = '';
        // if (theIsEditMode && props.isSelected) {
        //     var tmpBarContent = [];
        //     var tmpAddBtn = el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'cardsection' }, 'Add Section');
        //     tmpBarContent.push(tmpAddBtn);
        //     tmpBtnBar = el('div', {}, [el('div', { className: 'ui fluid center aligned label blue' }, 'Card Control'), el('div', { className: 'ui segment raised slim' }, tmpBarContent, el('div', { className: 'endfloat' }))]);
        // }
        tmpContent.push(tmpExtraContent);
        if (tmpAtt.url && !theIsEditMode) {
            var tmpOpts = { className: tmpClass, href: tmpAtts.url };
            if (tmpAtts.urlopentab) {
                tmpOpts.target = "_blank";
                //--- Important, without this it shows 
                tmpOpts.rel = "noopener";
            }
            return el('a', tmpOpts, tmpContent);
        } else {
            

            if (theIsEditMode) {
                return el('div', { className: tmpClass }, [newEl('div', tmpClass, [tmpContent])]);
            }

            return newEl('div', tmpClass, tmpContent);
        }
        
    }

    var tmpSupports = BlockEditor.defaultSupports;
    tmpSupports.inserter = true

    wp.blocks.registerBlockType('actappui/card', {
        title: info.title,
        icon: iconEl,
        category: info.category,
        rem_example: info.example,
        supports: tmpSupports,
        attributes: info.atts,
        edit: function (props) {
            var tmpAtts = props.attributes;
            var tmpParentAttributes = BlockEditor.getParentAttributes(props.clientId);
            props.attributes.parentColor = tmpParentAttributes.color || '';
            props.attributes.parentMaxImgHeight = tmpParentAttributes.imageheight || '';
            props.attributes.parentHeaderType = tmpParentAttributes.headerType || 'default';
            props.attributes.parentPadding = tmpParentAttributes.cardpadding || defaultPadding;
            
            


            //var tmpParentColor = tmpParentAttributes.color || '';
            //tmpParentColor ? '' : 

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props, 'title', 'Card Title'),
                BlockEditor.getStandardProperty(props, 'subtitle', 'Subtitle'),
                BlockEditor.getStandardProperty(props,'text', 'Text' ),
                BlockEditor.getStandardProperty(props, 'color', 'Card Color', 'color'),
                BlockEditor.getStandardProperty(props, { mediaID: 'mediaID', mediaURL: 'mediaURL' }, 'Card Image', 'image'),
                BlockEditor.getStandardProperty(props, 'url', 'Target Content or Link', 'url'),
                !(tmpAtts.url) ? '' : BlockEditor.getStandardProperty(props, 'urlopentab', 'Open link in new tab?', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'fluid', 'Full width', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'raised', 'Raised', 'checkbox'),
                BlockEditor.getStandardProperty(props, 'headerColor', 'Header Color', 'color'),

            ];

            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Card Options', tmpStandardProperties)
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



