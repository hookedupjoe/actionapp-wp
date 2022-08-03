/**
 * Block Widget: ActAppDesignElement.js - Root object for Design Elements
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
        name: 'actappelemdesigncontrol',
        title: 'Design Element',
        example: {
            attributes: { color: 'violet' }
        },
        category: 'actappdesign',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    var controlDetails = {};
    var controlDetailsLoaded = false;
    var controlDirty = false;

    BlockEditor.addBooleanAtts(info.atts, ['hasdropindicator','devonly']);
    BlockEditor.addStringAtts(info.atts, ['designtype']);

    var tmpClassSpecs = {
        boolean: [],
        string: []
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

        if (typeof(tmpPropAtts.devonly) == 'boolean') {
            console.log( 'tmpPropAtts.devonly', tmpPropAtts.devonly);
            controlDetails['devonly'] = tmpPropAtts.devonly;
        }
        if (tmpPropAtts.designtype) {
            controlDetails['designtype'] = tmpPropAtts.designtype;
        }

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
            if (tmpMe) {
                var tmpChildren = tmpMe.innerBlocks;
                if (!(tmpChildren && tmpChildren.length)) {
                    //--- What to do when no children
                } else {
                    //Loop children to do
                    if (tmpChildren.length > 1) {
                        var tmpPos = -1;
                        for (var iPos = 0; iPos < tmpChildren.length; iPos++) {
                            var tmpChild = tmpChildren[iPos];
                            //You have a child: (i.e. tmpChild.name); 
                        }
                    }
                }
            }
            tmpEls.push(el(wp.blockEditor.InnerBlocks));
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

            controlDirty = true;
            if( controlDetailsLoaded === false){
                controlDetailsLoaded = wp.data.select('core/editor').getEditedPostAttribute('meta').__design_props || '{}'
                controlDetails = JSON.parse(controlDetailsLoaded);
                console.log('loaded controlDetailsLoaded',controlDetailsLoaded)
            }
            
  
            var tmpDesignTypes = ['Default|','Form|form','View|view','Panel|panel','Control|control','HTML|html','Template|template'];

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props, 'designtype', 'Design Type', 'dropdown', false, tmpDesignTypes),
                BlockEditor.getStandardProperty(props, 'devonly', 'Developer Access Only?', 'checkbox'),
            ];

            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Designer Options', tmpStandardProperties)
            ];

            var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);

            var tmpDisplayObject = getDisplayValue(props, true);

            var tmpBtnBar = '';
            if (props.isSelected) {
                var tmpBarContent = [];
                //tmpBarContent.push(el('div',{className:'ui fluid label violet mar5'},'UI Designer')),
                tmpBarContent.push(el('div', { className: 'ui compact button violet basic ', action: 'beAddElement', elementname: 'header' }, 'Header'));
                tmpBarContent.push(el('div', { className: 'ui compact button violet basic ', action: 'beAddElement', elementname: 'corecolumns' }, 'Columns'));
                tmpBarContent.push(el('div', { className: 'ui compact button violet basic ', action: 'beAddElement', elementname: 'message' }, 'Message'));
                tmpBtnBar = el('div', {}, [el('div', { className: 'ui fluid label violet mar5' }, 'UI Designer'), el('div', { className: 'ui segment raised slim' }, tmpBarContent, el('div', { className: 'endfloat' }))]);
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
            var tmpDetails = JSON.stringify(controlDetails);
            
            console.log('controlDetailsLoaded',controlDetailsLoaded);
            console.log('tmpDetails',tmpDetails);
            console.log( 'controlDetails', controlDetails);
            console.log( 'controlDirty', controlDirty);

            //__design_props
            var tmpDesignProps = {

            }
            
            if( controlDirty && (controlDetailsLoaded != tmpDetails)){
                //console.log('Saving tmpDetails',tmpDetails);
                //wp.data.dispatch('core/editor').editPost({meta: {__doctype:"manual",details:tmpDetails}});
                wp.data.dispatch('core/editor').editPost({meta: {__doctype:"manual",__design_props:tmpDetails}});
                
                //console.log('SAVED tmpDetails',tmpDetails);
                controlDirty = false;
            }
            return getDisplayValue(props, false);
        },
    });
})(window.wp, window.ActionAppCore);


