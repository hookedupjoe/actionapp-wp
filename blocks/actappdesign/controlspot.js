/**
 * Block Widget: controlspot.js - Action App Control Spot
 * - A spot for a control or panel
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
    //var be = wp.data.dispatch('core/editor');
    
    var info = {
        name: 'controlspot',
        title: 'Control Spot',
        example: {},
        category: 'actappdesign',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    var controlDetails = {};
    var controlDetailsLoaded = false;
    //---> To Write To Post Doc: var controlDirty = false;
    //BlockEditor.addBooleanAtts(info.atts, []);
    BlockEditor.addStringAtts(info.atts, ['spotname', 'spotsourcetype', 'spotsourcename', 'spotsourcecatalog', 'spotsourcepartname', 'spotcontent']);

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
         console.log('getDisplayValue', theProps, theIsEditMode);
         var props = theProps;
         var tmpAttr = props.attributes;
         if (tmpAttr.spotcontent) {
             if (theIsEditMode) {
                // return el('div', {
                //     className: 'clear-both-after ui message pad5 mar5', dangerouslySetInnerHTML: {
                //         __html: tmpAttr.spotcontent
                //     }
                // });
                return el('div', {
                    dangerouslySetInnerHTML: {
                        __html: tmpAttr.spotcontent
                    }
                });
            } else {
                return el('div', {
                    dangerouslySetInnerHTML: {
                        __html: tmpAttr.spotcontent
                    }
                });
             }
         }
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
                 tmpEls.push(el('div', { className: 'ui message orange small compact' }, 'Every spot needs a name, set it using the side bar panel option'));
             } else {
                 tmpEls.push(el('div', { className: 'ui message blue small' }, 'Spot: ' + tmpPropAtts.spotname + ' spotsourcetype:' + (tmpPropAtts.spotsourcetype || '(none)')));
                 //tmpEls.push(el('div',{spotname: tmpPropAtts.spotname, className:'ui button fluid blue circular'},'Select Control or Panel ...') );
             }
             //tmpEls.push(el(wp.blockEditor.InnerBlocks));
         } else {
             //tmpEls.push(el(wp.blockEditor.InnerBlocks.Content));
         }

         return el('div', tmpAtts, tmpEls);

     }

    function onSelectControl(theParams, theTarget) {
        var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['spotname','clientid']);
        var tmpTargetBlock = wp.data.select('core/block-editor').getBlocksByClientId(tmpParams.clientid);
        var tmpAttr = tmpTargetBlock[0].attributes;
        console.log( 'onSelectControl', tmpParams);
        console.log( 'tmpTargetBlock', tmpTargetBlock);
        tmpAttr.spotsourcetype = 'html'; //controls //panels
        ThisApp.input('Enter something','Can be HTML').then(function(theValue){
            tmpAttr.spotcontent = theValue;
            wp.data.dispatch('core/editor').synchronizeTemplate();
            wp.data.dispatch( 'core/block-editor' ).selectBlock( tmpParams.clientid )
        })
    }

    function initControl(){
        ThisApp.actions['ControlSpot:selectControl'] = onSelectControl;
    }
    console.log('load spot control',typeof(ThisApp));
    ActionAppCore.subscribe('app-loaded', initControl);
    
    wp.blocks.registerBlockType(info.category + '/' + info.name, {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        attributes: info.atts,
        edit: function (props) {
            // if( (this._autoRendered !== true)){
            //     this._autoRendered = true;
            //     ThisApp.delay(1).then(function(){
            //         ActAppBlocksController.loadFromMarkup();
            //     });
            // }
            //---> To Write To Post Doc: controlDirty = true;
            //---> To Write To Post Doc: if( controlDetailsLoaded === false){
            //---> To Write To Post Doc:     controlDetailsLoaded = wp.data.select('core/editor').getEditedPostAttribute('meta').details || ''
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
                el('div',{action: 'ControlSpot:selectControl', clientid: props.clientId, spotname: tmpPropAtts.spotname, className:'ui button fluid blue circular'},'Select ...'),
                el('div',{action: 'ControlSpot:previewControl', clientid: props.clientId, spotname: tmpPropAtts.spotname, className:'ui button fluid blue basic circular'},'Preview'),
                //,
                // !(tmpPropAtts.spotname != '') ? '' : BlockEditor.getStandardProperty(props, 'spotsourcetype', 'Spot Source Type', 'text'),
                // !(tmpPropAtts.spotname != '') ? '' : BlockEditor.getStandardProperty(props, 'spotsourcename', 'Spot Source Name', 'text'),
                // !(tmpPropAtts.spotname != '') ? '' : BlockEditor.getStandardProperty(props, 'spotsourcecatalog', 'Spot Source Catalog', 'text'),
                // !(tmpPropAtts.spotname != '') ? '' : BlockEditor.getStandardProperty(props, 'spotsourcepartname', 'Part Name (Optional)', 'text'),
                // !(tmpPropAtts.spotsourcename != '') ? '' : el('div', { className: 'ui button circular blue fluid', action: 'updatePreview' }, 'Refresh Preview')
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
                // var tmpBarContent = [];
                // tmpBarContent.push(el('div', { className: 'ui compact button blue basic ', action: 'beAddElement', elementname: 'header' }, 'Header'));
                // tmpBtnBar = el('div', {}, [el('div', { className: 'ui fluid label blue mar5' }, 'UI Spot'), el('div', { className: 'ui spot raised slim' }, tmpBarContent, el('div', { className: 'endfloat' }))]);
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
            //---> To Write To Post Doc: var tmpDetails = JSON.stringify(controlDetails);
            
            //---> To Write To Post Doc: console.log('controlDetailsLoaded',controlDetailsLoaded);
            //---> To Write To Post Doc: console.log('tmpDetails',tmpDetails);

            //---> To Write To Post Doc: 
            // if( controlDirty && (controlDetailsLoaded != tmpDetails)){
            //     //console.log('Saving tmpDetails',tmpDetails);
            //     wp.data.dispatch('core/editor').editPost({meta: {__doctype:"manual",details:tmpDetails}});
            //     //console.log('SAVED tmpDetails',tmpDetails);
            //     controlDirty = false;
            // }


            //console.log('Demo saving of HTML is backend meta data');
            //var tmpDetails = '<b>Test</b> HTML is working.';
            //console.log( 'tmpDetails', tmpDetails);
            //wp.data.dispatch('core/editor').editPost({meta: {__design_source:tmpDetails}});
            
            //window.tmpCE = window.tmpCE || wp.data.dispatch('core/editor');
            //return getDisplayValue(props, false);
            //--- DO NOT set any attributes at top level
            //     pass everything as children
            return el('div',false,[getDisplayValue(props, false)]);
        },
    });
})(window.wp, window.ActionAppCore);
