/**
 * Block Widget: spot.js - Action App Spot
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
        name: 'spot',
        title: 'UI Spot',
        example: {
            attributes: { color: 'blue' }
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    var controlDetails = {};
    var controlDetailsLoaded = false;
    //---> To Write To Post Doc: var controlDirty = false;
    //BlockEditor.addBooleanAtts(info.atts, []);
    BlockEditor.addStringAtts(info.atts, ['spotname', 'spotsourcetype', 'spotsourcename', 'spotsourcecatalog', 'spotsourcepartname']);

    var tmpClassSpecs = {
        boolean: [],
        string: []
    }
    function getClass(theProps, theIsEditMode) {
        if( typeof(theProps.className) == 'string' ){
            return theProps.className;
        }
        return '';
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
        if (tmpPropAtts.spotname && tmpPropAtts.spotname != '') {
            var tmpSpotTopAtts = { spot: tmpPropAtts.spotname };
            if (tmpPropAtts.spotsourcetype) {
                tmpSpotTopAtts.sourcetype = tmpPropAtts.spotsourcetype;
                tmpSpotTopAtts.appuse = 'blockmarkup';
            }
            if (tmpPropAtts.spotsourcename) {
                tmpSpotTopAtts.sourcename = tmpPropAtts.spotsourcename;
            }
            if (tmpPropAtts.spotsourcecatalog) {
                tmpSpotTopAtts.catalog = tmpPropAtts.spotsourcecatalog;
            }
            if (tmpPropAtts.spotsourcepartname) {
                tmpSpotTopAtts.sourcepartname = tmpPropAtts.spotsourcepartname;
            }

            tmpEls.push(el('div', tmpSpotTopAtts, ''));
        }

        if (theIsEditMode) {
            var tmpMe = wp.data.select('core/block-editor').getBlock(props.clientId);
            if (tmpMe) {
                //-- optional action                
            }
            if (tmpPropAtts.spotname == '') {
                tmpEls.push(el('div',{className:'ui message orange small compact'},'Every spot needs a name, set it using the side bar panel option' ) );
            } else {
                if( tmpPropAtts.spotsourcetype == ''){
                    tmpEls.push(el('div',{className:'ui message blue small'},'Spot: ' +  tmpPropAtts.spotname) );
                } else {
                    //
                }
            }
            //tmpEls.push(el(wp.blockEditor.InnerBlocks));
        } else {
            //tmpEls.push(el(wp.blockEditor.InnerBlocks.Content));
        }

        return el('div', tmpAtts, tmpEls);

    }

    wp.blocks.registerBlockType(info.category + '/' + info.name, {
        title: info.title,
        icon: iconEl,
        category: info.category,
        rem_example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        edit: function (props) {
            if( (this._autoRendered !== true)){
                this._autoRendered = true;
                ThisApp.delay(1).then(function(){
                    ActAppBlocksController.loadFromMarkup();
                });
            }
            //---> To Write To Post Doc: controlDirty = true;
            //---> To Write To Post Doc: if( controlDetailsLoaded === false){
            //---> To Write To Post Doc:     controlDetailsLoaded = wp.data.select('core/block-editor').getEditedPostAttribute('meta').details || ''
            //---> To Write To Post Doc: }
            
            //controlDetails['working'] = true;
            var tmpPropAtts = props.attributes;

            if (tmpPropAtts.spotname) {
                controlDetails['spotname'] = tmpPropAtts.spotname;
            }
            if (tmpPropAtts.spotsourcename) {
                controlDetails['spotsourcename'] = tmpPropAtts.spotsourcename;
            }

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props, 'spotname', 'Spot Name', 'text'),
                !(tmpPropAtts.spotname != '') ? '' : BlockEditor.getStandardProperty(props, 'spotsourcetype', 'Spot Source Type', 'text'),
                !(tmpPropAtts.spotname != '') ? '' : BlockEditor.getStandardProperty(props, 'spotsourcename', 'Spot Source Name', 'text'),
                !(tmpPropAtts.spotname != '') ? '' : BlockEditor.getStandardProperty(props, 'spotsourcecatalog', 'Spot Source Catalog', 'text'),
                !(tmpPropAtts.spotname != '') ? '' : BlockEditor.getStandardProperty(props, 'spotsourcepartname', 'Part Name (Optional)', 'text'),
                !(tmpPropAtts.spotsourcename != '') ? '' : el('div', { className: 'ui button circular blue fluid', action: 'updatePreview' }, 'Refresh Preview')
            ];

            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Spot Options', tmpStandardProperties)
            ];

            var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);

            var tmpDisplayObject = getDisplayValue(props, true);

            var tmpBtnBar = '';
            if (props.isSelected) {
                //example: -> var tmpBarContent = [];
                //example: -> tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'header' }, 'Header'));
                //example: -> tmpBtnBar = el('div', {}, [el('div', { className: 'ui fluid label blue mar5' }, 'UI Spot'), el('div', { className: 'ui spot raised slim' }, tmpBarContent, el('div', { className: 'endfloat' }))]);
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
            //---> To Write To Post Doc: var tmpDetails = JSON.stringify(controlDetails);
            
            //---> To Write To Post Doc: console.log('controlDetailsLoaded',controlDetailsLoaded);
            //---> To Write To Post Doc: console.log('tmpDetails',tmpDetails);

            //---> To Write To Post Doc: 
            // if( controlDirty && (controlDetailsLoaded != tmpDetails)){
            //     //console.log('Saving tmpDetails',tmpDetails);
            //     wp.data.dispatch('core/block-editor').editPost({meta: {__doctype:"manual",details:tmpDetails}});
            //     //console.log('SAVED tmpDetails',tmpDetails);
            //     controlDirty = false;
            // }
            
            return getDisplayValue(props, false);
        },
    });
})(window.wp, window.ActionAppCore);
