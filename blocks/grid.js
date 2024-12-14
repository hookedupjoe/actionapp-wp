/**
 * Block Widget: grid.js - Semantic UI Grid Container
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
        name: 'grid',
        title: 'UI Grid Container',
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addNumberAtts(info.atts, ['minColWidth']);
    BlockEditor.addStringAtts(info.atts, ['columns','gridspacing']);
    BlockEditor.addBooleanAtts(info.atts, ['centered']);

    var tmpClassSpecs = {
        boolean: ['centered'],
        string: ['gridspacing']
    }
    function getClass(theProps, theIsEditMode) {
        var tmpClass = BlockEditor.getStandardClass('ui grid ', tmpClassSpecs, theProps, theIsEditMode);
        if (theProps.attributes.slimspacing) {
            tmpClass += ' slim';
        }
        return tmpClass;
    }

    function getDisplayValue(theProps, theIsEditMode) {
        var props = theProps;
        var tmpClass = getClass(props, true);
        
        if (theIsEditMode) {
            var tmpUIColor = ''; //was props.attributes.color || 
            var tmpHeaderText = 'UI Grid';
            var tmpIcon = BlockEditor.getControlImage();
            var tmpHeaderMsg = el('div',{className: 'ui larger bolder'}, tmpHeaderText)

            // if (props.attributes.columns) {
            //     tmpHeaderMsg += " (" + props.attributes.columns + " columns)";
            // } else {
            //     tmpHeaderMsg += " (columns auto-adjust )";
            // }
          

            // if( theIsEditMode ){
            //     var tmpMe = BlockEditor.getBlockInEditor(props);
            //     var tmpBlocks = tmpMe.innerBlocks;
            //     //---> Use if tracking info: var tmpBlocksLinks = [];
                
            //     if(tmpBlocks.length){
            //         for( var iPos in tmpBlocks){
            //             var tmpBlock = tmpBlocks[iPos];
            //             var tmpBlockAtts = tmpBlock.attributes;
            //             tmpBlockAtts.colpos = iPos;
            //         }
                    
            //         //---> Use if tracking info: tmpAtts.blocksinfo = JSON.stringify(tmpBlocksLinks);
            //     } else {
            //         //---> Use if tracking info: tmpAtts.blocksinfo = '[]';
            //     }
    
            // }


            var tmpAddBtn = '';
            var tmpBtnBar = ''
            if (props.isSelected) {
                tmpAddBtn = el('div', { className: 'ui compact button basic grey ', action: 'beAddGridColumn' }, 'Add Column');
                tmpBtnBar = el('div', { className: 'ui segment raised slim' }, [
                    tmpAddBtn
                ], el('div', { className: 'endfloat' }));
                
            }
            tmpUIColor = 'grey';
            var tmpHdr = el('div', { className: 'ui mar2 pad5 segment inverted center aligned fluid ' + tmpUIColor }, tmpIcon, tmpHeaderMsg, tmpBtnBar);

            return el('div', { className: 'ui segment ' + theProps.attributes.color || '' }, null,
                tmpHdr,
                el('div', { className: 'edit-grid' + props.attributes.color + ' ' + props.attributes.columns },
                    [
                        el(wp.blockEditor.InnerBlocks, { allowedBlocks: ['actappui/gridcolumn'], renderAppender: false }),
                    ]
                )

            )
        } else {
            return BlockEditor.el('div', tmpClass, el(wp.blockEditor.InnerBlocks.Content));
        }

    }


    wp.blocks.registerBlockType('actappui/grid', {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        edit: function (props) {

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props, 'columns', 'Columns', 'columns'),
                BlockEditor.getStandardProperty(props, 'minColWidth', 'Minimum Column Width', 'number'),
                BlockEditor.getStandardProperty(props, 'gridspacing', 'Space Between Columns', 'slimwidespacing'),
                BlockEditor.getStandardProperty(props, 'centered', 'Centered', 'checkbox'),
            ];
            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Columns Container Options', tmpStandardProperties)
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
            // *** using blockProps, need clean HTML
            var tmpProps = {className: ''};

            if (props.attributes.columns == '') {
                tmpProps["auto-adapt"] = "grid";
            } else {
                tmpProps["columns"] = props.attributes.columns;
            }
            if (props.attributes.minColWidth) {
                tmpProps["mincolwidth"] = props.attributes.minColWidth;
            }

            var tmpClasses = getClass(props, true);
            if (props.attributes.columns != '') {
                tmpClasses += ' stackable ' + (props.attributes.columns || '') + ' column';
            }
            
            tmpProps.className = tmpProps.className || '';
            tmpProps.className += ' ' + tmpClasses;

            return el(
                'div',
                tmpProps,
                el(wp.blockEditor.InnerBlocks.Content)

            );
        },
    });
})(window.wp, window.ActionAppCore);


