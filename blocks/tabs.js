/**
 * Block Widget: tabs.js - Semantic UI Tabs Container
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
        name: 'tabs',
        title: 'UI Tab Container',
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addNumberAtts(info.atts, []);
    BlockEditor.addStringAtts(info.atts, ['groupname','tabsinfo']);
    BlockEditor.addBooleanAtts(info.atts, []);
    BlockEditor.addOjectAtts(info.atts, []);
    

    var tmpClassSpecs = {
        boolean: [],
        string: []
    }

    function getClass(theProps, theIsEditMode) {
        return BlockEditor.getStandardClass('ui tabs ', tmpClassSpecs, theProps, theIsEditMode);
    }

    function getDisplayValue(theProps, theIsEditMode) {
        var props = theProps;
        var tmpAtts = props.attributes;
        var tmpClass = getClass(props, true);
        //console.log('wp.blockEditor.InnerBlocks',wp.blockEditor.InnerBlocks);

        var tmpTabsColor = 'blue';

       // console.log( tmpThis,  'we have ' + tmpIBs.length + ' tabs' ); // This will log all the inner blocks on your browser console
       var tmpTablinksEl = (el('div',{},''));
        if( theIsEditMode ){
            var tmpMe = BlockEditor.getBlockInEditor(props);
            var tmpTabs = tmpMe.innerBlocks;
            var tmpTabCount = tmpTabs.length;
            var tmpTabLinks = [];
            
            if(tmpTabCount){
                for( var iPos in tmpTabs){
                    var tmpTab = tmpTabs[iPos];
                    var tmpTabAtts = tmpTab.attributes;
                    tmpTabAtts.groupname = tmpAtts.groupname;
                    tmpTabAtts.tabpos = iPos;

                    var tmpTabGroup = tmpTabAtts.groupname;
                    var tmpTabItem = tmpTabAtts.itemname || 'tab-' + (iPos+1);
                    var tmpTabLabel = tmpTabAtts.tablabel || ('Tab: ' + tmpTabItem)
                    var tmpExtraClasses = '';
                    if( iPos == 0){
                        tmpExtraClasses += 'active'
                    }
//                    console.log('tmpExtraClasses',tmpExtraClasses);
                    var tmpAddAtts = {
                        item: tmpTabItem,
                        group: tmpTabGroup,
                        appuse: 'tablinks',
                        action: "showSubPage",
                        className: "item " + tmpTabsColor + ' ' + tmpExtraClasses,
                        label: tmpTabLabel,
                        position: iPos
                    };

                    //appuse="tablinks" group="maintabs" item="maintab1" action="showSubPage" class="item blue active "
                    tmpTabLinks.push(tmpAddAtts)
    // console.log('tmpTab',tmpTab);
                }
                
                tmpAtts.tabsinfo = JSON.stringify(tmpTabLinks);
            } else {
                tmpAtts.tabsinfo = '[]';
            }

        }
        

        //console.log('tmpAtts.tabsinfo',tmpAtts.tabsinfo);
        //--> REBUILD --> tmpTablinksEl = el('div',{className: 'mar0 pad0 ui top attached tabular menu'}, tmpAtts.tabsinfo);

        //console.log('Tabs: ',tmpTabs, tmpTabCount);
        
        if (theIsEditMode) {
            
            var tmpUIColor = ''; 
            var tmpHeaderMsg = 'Tab Container';
           
            var tmpAddBtn = '';
            var tmpBtnBar = ''
            if (props.isSelected) {
                tmpAddBtn = el('div', { className: 'ui compact button basic brown ', elementname: 'tab', action: 'beAddElement' }, 'Add New Tab');
                tmpBtnBar = el('div', { className: 'ui segment raised slim' }, [
                    tmpAddBtn
                ], el('div', { className: 'endfloat' }));
                tmpUIColor = 'brown';
            }
            var tmpHdr = el('div', { className: 'ui header top attached center aligned fluid ' + tmpUIColor }, tmpHeaderMsg, tmpBtnBar);
            var tmpRetEl = el('div', { className: 'ui segment ' + theProps.attributes.color || '' }, null,
                tmpHdr,
                el('div', { className: 'edit-tabs' + props.attributes.color + ' ' + props.attributes.columns },
                    [
                        el(wp.blockEditor.InnerBlocks, { allowedBlocks: ['actappui/tab'], renderAppender: false }),
                    ]
                ));
                
                //console.log('on edit',props.attributes.tabsinfo);
                return el('div',{}, tmpRetEl); 

            
        } else {
            
            var tmpTabsInfo = props.attributes.tabsinfo ? JSON.parse(props.attributes.tabsinfo) : '';
            var tmpTabLinkEls = [];

            for( var iPos in tmpTabsInfo ){
                var tmpTabInfo = tmpTabsInfo[iPos];
                tmpTabLinkEls.push(el('div',tmpTabInfo,tmpTabInfo.label));
            }
            //---> Can add slim as an option
            tmpTablinksEl = el('div',{className: 'mar0 pad0 ui top attached tabular menu'}, tmpTabLinkEls);
            var tmpTabsEl = el('div',{className: 'ui  bottom attached slim blue segment'}, BlockEditor.el('div', tmpClass, el(wp.blockEditor.InnerBlocks.Content)));

            return el('div',{}, tmpTablinksEl, tmpTabsEl);
        }

    }

    wp.blocks.registerBlockType('actappui/tabs', {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        edit: function (props) {

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props, 'groupname', 'Group Name', 'text'),
            ];

            var tmpFormatProperties = [
                BlockEditor.getStandardProperty(props,'classes', 'Additional Classes', 'text' )
            ];
            
            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Columns Container Options', tmpStandardProperties),
                BlockEditor.getSidebarPanel('Formatting Options', tmpFormatProperties)
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
            var tmpEl = getDisplayValue(props, false)
            return tmpEl;
            // // *** using blockProps, need clean HTML
            // var tmpProps = {className: ''};
            


            // var tmpClasses = getClass(props, true);
           
            // tmpProps.className += ' ' + tmpClasses.trim();

            // return el(
            //     'div',
            //     tmpProps,
            //     el(wp.blockEditor.InnerBlocks.Content)

            // );
        },
    });
})(window.wp, window.ActionAppCore);


