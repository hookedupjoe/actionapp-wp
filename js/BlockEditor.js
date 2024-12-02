/**
 * Action App Block Editor - Content Editor Entrypoint: BlockEditor.js
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

( function ( wp,  ActionAppCore) {
    var BlockEditor = {
        defaultSupports: {className: false, typography: false, customClassName: false}
    };
    var el = wp.element.createElement;

    ActionAppCore.common = ActionAppCore.common || {};
    ActionAppCore.common.blocks = ActionAppCore.common.blocks || {};

    BlockEditor.editors = {};
    BlockEditor.setEditor = function(theID,theEditor){
        this.editors[theID] = theEditor;
    }
    BlockEditor.getEditor = function(theID){
        return this.editors[theID] || false;
    }
    BlockEditor.removeEditor = function(theID){
        delete this.editors[theID];
        return true;
    }

    function initBlockEditor(){
        
        var tmpBaseURL = ActionAppCore.BlockManagerConfig.catalogURL;
        //--- Load stuff we need on startup, can load dynamically as needed, 
        //      so only use this for stuff needed on startup
        // ** Loading demo objects not used **         
        var tmpRequired = {
            // panels: {
            //     baseURL: tmpBaseURL + '/panels/',
            //     map: {'nested':'nested'}
            // },
            // templates: {
            //     baseURL: tmpBaseURL + '/templates/',
            //     map: {"demo1":"demo1"}
            // }
        };

        ActionAppCore.config = ActionAppCore.config || {};
        ActionAppCore.config.required = ActionAppCore.config.required || {};
        
		ActionAppCore.config.required = tmpRequired;
        $.extend(ActionAppCore.config.required, tmpRequired);

        ActionAppCore.common = ActionAppCore.common || {};

        ActionAppCore.common.blocks = ActionAppCore.common.blocks || {};

        //--- Create entry point from Action App entrypoint
        ActionAppCore.common.blocks.Editor = BlockEditor;
        window.ActAppBlockEditor = BlockEditor;

        
        
        BlockEditor.refreshBlockEditor = function(){
            var tmpBlockClientId = '';
            var tmpThis = wp.data.select( 'core/block-editor' ).getSelectedBlock();
            if( tmpThis && tmpThis.clientId){
                tmpBlockClientId = tmpThis.clientId;
            }
            //console.log('tmpBlockClientId',tmpBlockClientId);
            wp.data.dispatch('core/block-editor').synchronizeTemplate();
            if( tmpBlockClientId ){
               // wp.data.dispatch( 'core/block-editor' ).selectBlock( tmpBlockClientId )
            }

        }

        BlockEditor.getSelectControl = function(theValue,theOnChange, theDropDownValues){
            return el("select", {className:'fluid-field', value:theValue, onChange: theOnChange},theDropDownValues)
        }
        BlockEditor.getTextControl = function(theValue,theOnChange){
            return el("input", {className:'fluid-field', value:theValue, onChange: theOnChange})
        }
        
        BlockEditor.getParentAttributes = function(theBlockID){
            var tmpParents = wp.data.select( 'core/block-editor' ).getBlockParents(theBlockID);

            var tmpParentAttributes = {};
            if( tmpParents && tmpParents.length > 0 ){
                //--- Get the direct parent ... 0 is top level
                var tmpParentID = tmpParents[tmpParents.length-1];
                var tmpParentBlock = wp.data.select('core/block-editor').getBlocksByClientId(tmpParentID);
                if( tmpParentBlock && tmpParentBlock.length > 0 ){
                    tmpParentAttributes = tmpParentBlock[0].attributes || {};
                }
            }
            return tmpParentAttributes;
        }


        //Todo: Review need for this ...
        BlockEditor.el = function (theType,theClass,theContent,theOptionalAtts){
            var tmpAtts = theOptionalAtts || {};
            if( theClass ){
                tmpAtts.className = theClass;
            }
            if( theContent ){
                return el(theType,tmpAtts,theContent);
            }
            return el(theType,tmpAtts);
        }


        BlockEditor.getCommonBlock = function(theElementName){
            return CommonBlocks.getBlock(theElementName);
        }

        BlockEditor.getColorListControl = function(theCurrentValue, theOnChangeEvent){
            return this.getListControl('color',theCurrentValue, theOnChangeEvent)
        }
        
        //--- Singleton cache of drop down selection objects
        BlockEditor._selcache = {};

        //--- Updated to use selection details from the core
        BlockEditor.getListControl = function(theProp, theCurrentValue, theOnChangeEvent){
            //--- Updated to use selection details from the core
            if( !(theProp)){
                console.error('no property passed to get list control');
                return el('select',{});
            }
            var tmpProp = theProp;
            var tmpList = ThisApp.controls.getSelListFor(tmpProp);
            var tmpSel = [];
            for( var iPos in tmpList ){
                var tmpEntry = tmpList[iPos];
                tmpSel.push(el("option",{value:tmpEntry.value}, tmpEntry.text));
            }
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSel);
        }
        BlockEditor.getAttachedListControl = function(theCurrentValue, theOnChangeEvent){
            return this.getListControl('attached',theCurrentValue, theOnChangeEvent)
        }
        BlockEditor.getHeaderSizeListControl = function(theCurrentValue, theOnChangeEvent){
            return this.getListControl('sizeheader',theCurrentValue, theOnChangeEvent)
        }

        BlockEditor.getSizeListControl = function(theCurrentValue, theOnChangeEvent){
            return this.getListControl('size',theCurrentValue, theOnChangeEvent)
        }

        BlockEditor.getAlignmentListControl = function(theCurrentValue, theOnChangeEvent){
            return this.getListControl('alignment',theCurrentValue, theOnChangeEvent)
        }
        
        BlockEditor.getVerticalAlignmentListControl = function(theCurrentValue, theOnChangeEvent){
            return this.getListControl('valignment',theCurrentValue, theOnChangeEvent)
        }
        BlockEditor.getLeftRightAlignmentListControl = function(theCurrentValue, theOnChangeEvent){
            return this.getListControl('lralignment',theCurrentValue, theOnChangeEvent)
        }
        BlockEditor.getLeftRighFloatListControl = function(theCurrentValue, theOnChangeEvent){
            return this.getListControl('float',theCurrentValue, theOnChangeEvent)
        }
        BlockEditor.getFloatControl = function(theCurrentValue, theOnChangeEvent){
            return this.getListControl('tofloat',theCurrentValue, theOnChangeEvent)
        }
        
        BlockEditor.NUMLOOKUPS = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen"];
        BlockEditor.getColumnListControl = function(theCurrentValue, theOnChangeEvent){
            var tmpSelection = [el("option", {value: ""}, "Auto")];
            var tmpMaxCards = 10; //16 is full max, 10 logical
            for( var i = 1 ; i <= tmpMaxCards ; i++){
                tmpSelection.push(el("option", {value: BlockEditor.NUMLOOKUPS[i]}, i));
            }
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSelection);
        }

        BlockEditor.getMarginListControl = function(theCurrentValue, theOnChangeEvent){
            var tmpSelection = [el("option", {value: "mardefault"}, "Default")];
            var tmpMax = 10; 
            for( var i = 1 ; i <= tmpMax ; i++){
                tmpSelection.push(el("option", {value: 'mar' + i}, i));
            }
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSelection);
        }

        BlockEditor.getDropDownListControl = function(theCurrentValue, theOnChangeEvent, theSelection){
            var tmpSelection = [];
            for( var iPos in theSelection){
                var tmpEntry = theSelection[iPos];
                var tmpEntryName = tmpEntry;
                var tmpEntryVal = tmpEntry;
                
                if( typeof(tmpEntry) == 'string' ){
                    var tmpPos = tmpEntry.indexOf('|');
                    if( tmpPos > -1){
                        var tmpEntries = tmpEntry.split("|");
                        if( tmpEntries.length == 2){
                            tmpEntryName = tmpEntries[0];
                            tmpEntryVal = tmpEntries[1];
                        }
                    }
                }
                tmpSelection.push(el("option", {value: tmpEntryVal}, tmpEntryName));
            }
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSelection);
        }
        
        BlockEditor.controlIcon = el('svg', { width: 24, height: 24 },
            el('path', { d: 'M 9.2168396,22.056624 C 5.4016493,21.203103 2.4804819,18.730221 1.1335267,15.213796 -1.2066276,9.1042875 2.257595,2.3634222 8.6275343,0.63156828 c 1.3129213,-0.35695577 4.1379757,-0.35695577 5.4508627,0 3.870732,1.05235442 6.817776,4.00748572 7.899552,7.92119802 0.365146,1.3209738 0.365146,4.1383537 0,5.4593277 -1.074721,3.888247 -4.024175,6.862477 -7.82591,7.891775 -1.258103,0.340679 -3.750703,0.417762 -4.9351994,0.152789 z m 4.6538464,-0.667937 c 2.247001,-0.570689 4.143309,-1.793279 5.610431,-3.617219 3.009881,-3.741893 3.022269,-9.1993622 0.03097,-12.9488259 C 15.329033,-0.41786036 7.4193975,-0.44786763 3.249005,4.7610446 0.21527627,8.5500821 0.19359677,13.979575 3.1970429,17.74239 5.7571942,20.949693 9.9552526,22.383676 13.872235,21.388859 Z M 4.8809956,18.276155 C 4.2569338,17.533372 3.3587793,15.512423 3.0186854,14.085873 2.6022313,12.338913 2.6734989,9.6223259 3.1773248,8.0363452 3.5881698,6.7432107 4.5574539,4.7955598 5.0214998,4.3308256 5.3969004,3.9548056 6.1230283,3.8497457 6.1230283,4.171498 c 0,0.105989 -0.2257428,0.7533133 -0.5012454,1.4385941 C 5.3461427,6.2953728 4.9732542,7.54563 4.7932794,8.3884489 4.514198,9.6945567 4.4773771,10.217482 4.5424158,11.929651 c 0.081901,2.157014 0.3441201,3.398943 1.1417217,5.409981 0.2415723,0.60868 0.4389596,1.171385 0.4389596,1.250429 0,0.07915 -0.1930514,0.143842 -0.4288769,0.143842 -0.2986962,0 -0.5454648,-0.13868 -0.8132246,-0.457507 z m 11.5545204,0.410157 c 0,-0.02753 0.259811,-0.73979 0.577296,-1.586153 0.826611,-2.20347 1.08126,-3.5624 1.076339,-5.74395 C 18.08571,9.2434497 17.872011,8.0919206 17.094472,5.9621958 16.324813,3.8540817 16.345426,3.978722 16.76687,3.978722 c 0.611054,0 1.116429,0.5512115 1.804669,1.9681948 0.948532,1.9530192 1.279748,3.3448474 1.287215,5.4092922 0.0069,2.092526 -0.25396,3.228948 -1.210442,5.257536 -0.808854,1.715645 -1.146539,2.119918 -1.770704,2.119918 -0.242949,0 -0.441988,-0.02065 -0.441988,-0.04749 z M 8.7165238,15.30072 C 7.32239,14.500194 7.2065592,12.300578 8.5134929,11.442962 8.7013825,11.319423 9.7156766,11.000561 10.767136,10.734109 l 1.911793,-0.484521 -0.02065,-0.5820447 c -0.02753,-0.8007674 -0.437548,-1.114777 -1.458863,-1.114777 -0.851215,0 -1.4294064,0.3448083 -1.8275534,1.0898627 C 9.1027612,10.146352 8.697632,10.256539 8.2338958,9.952337 7.9148995,9.742768 7.8685809,9.6257671 7.9372673,9.2009509 8.0556446,8.469558 8.5312185,7.8877198 9.3269616,7.5003094 10.275254,7.0386723 12.379958,7.0124159 13.257261,7.4514443 c 1.150669,0.5756785 1.400259,1.2936851 1.405521,4.0436867 0.0018,1.00951 0.08259,2.218542 0.178942,2.686786 0.158295,0.767939 0.149004,0.880776 -0.09635,1.15239 -0.415419,0.459744 -0.879434,0.376536 -1.395266,-0.250176 -0.425921,-0.517522 -0.473926,-0.538169 -0.78415,-0.336893 -1.508416,0.978161 -2.7906774,1.162575 -3.8508077,0.553861 z m 3.0185872,-1.222004 c 0.630084,-0.326226 1.016187,-1.03797 1.016841,-1.874113 3.78e-4,-0.464528 -0.0616,-0.69963 -0.183416,-0.697256 -0.523854,0.01032 -2.7054044,0.75173 -2.8683454,0.974961 -0.289405,0.396392 -0.226775,1.101081 0.131798,1.483364 0.3837984,0.409159 1.2340464,0.459641 1.9033294,0.112872 z' } )
        );   
        BlockEditor.getControlIcon = function(theControlName){
            //--- Potentially change based on control name (theControlName)
            return this.controlIcon;
        }

        BlockEditor.getOptionLabel = function(theTitle){
            var tmpRet = el("div", {className: 'ui label fluid black'},'' + theTitle);
            return tmpRet;
        }
        BlockEditor.getOptionNote = function(theText){
            var tmpRet = el("div", {className: 'ui label fluid basic'},'' + theText);
            return tmpRet;
        }
        BlockEditor.getOptionSep = function(){
            var tmpRet = el("div",{className:'pad2'});
            return tmpRet;
        }
        BlockEditor.addStringAtts = function(theAtts,theNames){
            for (var iPos = 0; iPos < theNames.length; iPos++) {
                var tmpName = theNames[iPos];
                BlockEditor.addAtt(theAtts,tmpName);       
            }
         }
         BlockEditor.addBooleanAtts = function(theAtts,theNames){
            for (var iPos = 0; iPos < theNames.length; iPos++) {
                var tmpName = theNames[iPos];
                theAtts[tmpName] = {type:'boolean'};
            }
         }
         BlockEditor.addNumberAtts = function(theAtts,theNames){
            for (var iPos = 0; iPos < theNames.length; iPos++) {
                var tmpName = theNames[iPos];
                theAtts[tmpName] = {type:'number',default:0};
            }
         }
         
         BlockEditor.addAtt = function(theAtts, theAttName, theOptions){
            var tmpOptions = theOptions;
            if(!(tmpOptions)){
                tmpOptions = {
                    type: 'string',
                    default: '',
                }
            }
            theAtts[theAttName] = tmpOptions;
        }
        
        function getFunctionForType(theControlType){
            var tmpCT = (theControlType||'').toLowerCase();
            if( tmpCT == 'text'  || tmpCT == 'number' ){
                return 'getTextControl';
            }
            if( tmpCT == 'color' ){
                return 'getColorListControl';
            }
            if( tmpCT == 'sizeheader' ){
                return 'getHeaderSizeListControl';
            }            
            if( tmpCT == 'size' ){
                return 'getSizeListControl';
            }            
            if( tmpCT == 'attached' ){
                return 'getAttachedListControl';
            }            
            if( tmpCT == 'alignment' ){
                return 'getAlignmentListControl';
            }            
            if( tmpCT == 'alignmentleftright' ){
                return 'getLeftRightAlignmentListControl';
            }            
            if( tmpCT == 'alignmentvertical' ){
                return 'getVerticalAlignmentListControl';
            }                        
            if( tmpCT == 'floatleftright' ){
                return 'getLeftRighFloatListControl';
            }            
            if( tmpCT == 'tofloat' ){
                return 'getFloatControl';
            }            
            
            
            if( tmpCT == 'columns' ){
                return 'getColumnListControl';
            }            
            if( tmpCT == 'margin' ){
                return 'getMarginListControl';
            }            
            
            

            if( tmpCT == 'dropdown' ){
                return 'getDropDownListControl';
            }            
            
            
            return 'getTextControl';
        }
        BlockEditor.getStandardClass = function(theTypeClass, theSpecs, theProps, theIsEditMode){
            var tmpAtts = theProps.attributes;
            var tmpCN = theTypeClass;
            var tmpSpecs = theSpecs;
    
            for (var iPos = 0; iPos < tmpSpecs.boolean.length; iPos++) {
                var tmpName = tmpSpecs.boolean[iPos];
                if( tmpAtts[tmpName] ){
                    tmpCN += ' ' + tmpName;    
                }
            }
    
            for (var iPos = 0; iPos < tmpSpecs.string.length; iPos++) {
                var tmpName = tmpSpecs.string[iPos];
                if( tmpAtts[tmpName] ){
                    tmpCN += ' ' + tmpAtts[tmpName];    
                }
            }
    
            return tmpCN;
        }

        BlockEditor.getSidebarPanel = function(theTitle, theProps){
            return wp.element.createElement(wp.components.PanelBody, {title: theTitle,initialOpen: true},theProps);
        }
        BlockEditor.getSidebarControls = function(theSidebarPanels){
            return el(
                wp.blockEditor.InspectorControls,
                null,
                theSidebarPanels
            );            
        }

        //---Note: Bind to object {controlType:'',props:{},attName:''}
        BlockEditor.standardOnChange = function ( theEvent ) {
            var tmpObjAtts = {};
            var tmpVal = (theEvent.target.value);
            if( this.controlType == 'number'){
               tmpVal = parseInt(tmpVal);
               if (!(tmpVal)){
                tmpVal = 0;
               }
            }
            tmpObjAtts[this.attName] = tmpVal;
            this.props.setAttributes( tmpObjAtts );
            //--- The below refresh cause issues with editor in widgets area
            //BlockEditor.refreshBlockEditor();
            //--- ToDo: Review usage / initial need of the above call
        }

        //--- Returns React element from universal DOM specs
        BlockEditor.elFromUDom = function(theSpecs){
            var tmpSpec = theSpecs;
            var tmpElProps = tmpSpec.attr || {};
            if( tmpSpec.className ){
                tmpElProps.className = tmpSpec.className;
            }
            var tmpStyles = tmpSpec.styles || tmpSpec.style;
            if( tmpStyles ){
                tmpElProps.style = tmpStyles;
            }
            var tmpType = tmpSpec.type || 'div';
            var tmpParams = [tmpType,tmpElProps];
            var tmpContent = tmpSpec.children || tmpSpec.content || tmpSpec.text || tmpSpec.html || '';
            
            if( tmpContent ){
                if( Array.isArray(tmpContent)){
                    for( var iPos in tmpContent ){
                        var tmpChild = tmpContent[iPos];
                        if(typeof(tmpChild) == 'object'){
                            var tmpCE = this.elFromUDom(tmpChild);
                            tmpParams.push(tmpCE);
                        }
                    }
                } else {
                    tmpParams.push(tmpContent);
                }
            }
            var tmpRet = el.apply(this,tmpParams);
            return tmpRet
        }

        BlockEditor.getStandardProperty = function(theProps, theAttName, theLabel, theControlType, theOnChange, theSelectionList){
            var tmpAtts = theProps.attributes;
            var tmpContents = [];
            
            if( theControlType !== 'checkbox' ){
                tmpContents.push(BlockEditor.getOptionLabel(theLabel));
            }
            var tmpBindDetails = {controlType:theControlType,props:theProps,attName:theAttName}
            var tmpOnChange = theOnChange || BlockEditor.standardOnChange;
            tmpOnChange = tmpOnChange.bind(tmpBindDetails);
            var tmpFunc = getFunctionForType(theControlType) || '';
            //--- Special Property Editors Used
            if( theControlType == 'dropdown' && theSelectionList ){ 
                tmpContents.push(BlockEditor[tmpFunc](tmpAtts[theAttName],tmpOnChange,theSelectionList));
                //tmpContents.push(BlockEditor.getOptionSep());

            } else if( theControlType == 'checkbox' ){
                var tmpOnChangeFunc = function (theValue){
                    tmpToSet = {};
                    tmpToSet[theAttName] = theValue;
                    theProps.setAttributes(tmpToSet);
                }
                var tmpIsChecked = tmpAtts[theAttName];
                var tmpEl = el(wp.components.ToggleControl,{label: theLabel, checked: tmpIsChecked, onChange: tmpOnChangeFunc});
                tmpContents.push(tmpEl);
            } else if( theControlType == 'url') {
                var tmpOnChangeFunc = function( theURL, thePost ) {
                    tmpToSet = {};
                    tmpToSet[theAttName] = theURL;
                    theProps.setAttributes(tmpToSet);
                }
                var tmpEl = el(wp.blockEditor.URLInput, {onChange: tmpOnChangeFunc, value: tmpAtts[theAttName] || ''},'Browse for Link');
                tmpContents.push(tmpEl);
            } else if( theControlType == 'image') {
                var onSelectImage = function( media ) {
                    tmpToSet = {};
                    tmpToSet[theAttName['mediaURL']] = media.url;
                    tmpToSet[theAttName['mediaID']] = media.id;
                    return theProps.setAttributes(tmpToSet);
                    
                };
    
                var onRemoveImage = function(){
                    tmpToSet = {};
                    tmpToSet[theAttName['mediaURL']] = '';
                    tmpToSet[theAttName['mediaID']] = '';
                    return theProps.setAttributes(tmpToSet);
                }

                var tmpMediaURL = tmpAtts[theAttName['mediaURL']];
    
                //var tmpEl = el('div',{className:'ui label black fluid'},'Card Image');
              //ToDo: Remove hard coded mediaID and mediaURL references
                var tmpMediaEl = el( wp.blockEditor.MediaUpload, {
                    onSelect: onSelectImage,
                    type: 'image',
                    value: theProps.attributes[theAttName['mediaID']],
                    render: function( obj ) {
                        
                        if( !theProps.attributes.mediaID ){
                            return el('div',{className:'pad2'},
                                el('div', {className:'ui button blue basic', onClick: obj.open}, 'Select Image')
                            )
                        } else {
                            return el('div',{className:'pad2'},
                                el('div', {className:'ui button blue basic', onClick: obj.open}, 'Replace'),
                                el('div', {className:'ui button blue basic', onClick: onRemoveImage}, 'Remove'),                                            
                                el('div',{className:'pad2'}),
                                el('img',{className:'ui image rounded fluid', src:tmpMediaURL})
                            )
                        }
                    }
                } )   
                tmpContents.push(tmpMediaEl);
            } else {
                //--- Call the dynamic function to get the type for this property
                tmpContents.push(BlockEditor[tmpFunc](tmpAtts[theAttName],tmpOnChange));
                //tmpContents.push(BlockEditor.getOptionSep());
            }
            
            return el('div',{className:'pad3'},tmpContents);
        }

    }

    function addBlockEditorActions(){

        ThisApp.actions.beAddCard = function(){
            var tmpThis = wp.data.select( 'core/block-editor' ).getSelectedBlock();
            var tmpPos = 0;
            if( tmpThis.innerBlocks && tmpThis.innerBlocks.length ){
                tmpPos = tmpThis.innerBlocks.length;
            }
            var tmpItemToAdd = 'card';
            var tmpToAddElement = BlockEditor.getCommonBlock(tmpItemToAdd);
            wp.data.dispatch('core/block-editor').insertBlocks(tmpToAddElement,tmpPos,tmpThis.clientId) 
        }

        ThisApp.actions.beAddField = function(){
            var tmpThis = wp.data.select( 'core/block-editor' ).getSelectedBlock();
            var tmpPos = 0;
            if( tmpThis.innerBlocks && tmpThis.innerBlocks.length ){
                tmpPos = tmpThis.innerBlocks.length;
            }
            var tmpItemToAdd = 'field';
            var tmpToAddElement = BlockEditor.getCommonBlock(tmpItemToAdd);
            wp.data.dispatch('core/block-editor').insertBlocks(tmpToAddElement,tmpPos,tmpThis.clientId) 
        }

        ThisApp.actions.beAddElement = function(theParams, theTarget){
            var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['elementname']);
            var tmpThis = wp.data.select( 'core/block-editor' ).getSelectedBlock();
            var tmpPos = 0;
            if( tmpThis.innerBlocks && tmpThis.innerBlocks.length ){
                tmpPos = tmpThis.innerBlocks.length;
            }
            var tmpItemToAdd = tmpParams.elementname;
            if( !(tmpItemToAdd) ){
                console.error("No elementname attribute found")
                return;
            }
            var tmpToAddElement = BlockEditor.getCommonBlock(tmpItemToAdd);
            wp.data.dispatch('core/block-editor').insertBlocks(tmpToAddElement,tmpPos,tmpThis.clientId) 
        }
        
    }

    
    ActionAppCore.subscribe('app-loaded', function(){
        ThisApp.delay(1000).then(function(){
            //wp.richText.unregisterFormatType('core/text-color');
            wp.richText.unregisterFormatType('core/image');
            
            //ThisApp.react
            //actappformat/blue-label
            
    
        var withSelect  = wp.data.withSelect;
        var ifCondition = wp.compose.ifCondition;
        var compose     = wp.compose.compose;
        
        var SemLabelPopOver = function(props){
            //wp.components.Popover
            return wp.element.createElement(
                wp.components.Popover, 
                {
                    children: wp.element.createElement('div',{},'hello popup'),
                    title: 'Label Options', 
                    onClose: function() {
                        console.log('onClose this,props',this,props)
                    }
                }
                
            );
        }
        var TextHighlightButton = function( props ) {
            return wp.element.createElement(
                wp.blockEditor.RichTextToolbarButton, 
                {
                    icon: BlockEditor.controlIcon, 
                    title: 'Bordered label', 
                    isActive: props.isActive,
                    onClick: function() {
                        props.onChange( 
                            wp.richText.toggleFormat(props.value, {
                                type: 'actappformat/inline-label',
                                attributes: {
                                    class: 'ui label'
                                }
                            })
                            
                        );
                        console.log('props',props)
                    }
                    
                }
            );
        }
    
        var ConditionalTextHighlightButton = compose(
            withSelect( function( select ) {
                return {
                    selectedBlock: select( 'core/block-editor' ).getSelectedBlock()
                }
            } ),
            ifCondition( function( props ) {
                return (
                    props.selectedBlock &&
                    (props.selectedBlock.name === 'core/paragraph' || props.selectedBlock.name === 'actappui/richtext')
                );
            } )
        )( TextHighlightButton );
    
    


            wp.richText.registerFormatType(
                'actappformat/inline-label', {
                    title: 'Bordered label',
                    tagName: 'span',
                    text: 'HL',
                    className: 'actapp-border-label',
                    edit: ConditionalTextHighlightButton,
                }
            );


            addBlockEditorActions();
            //--- Open the sidebar editor automatically due to that being where our settings live
            $tmpDispatch = wp.data.dispatch( 'core/edit-post' );
            if( $tmpDispatch ){
                $tmpDispatch.openGeneralSidebar( 'edit-post/block' );
            }
           
            var tmpWarnings = $('.block-editor-warning__action > .components-button.is-primary');
            //--- Open the sidebar editor automatically due to that being where our settings live

            
            if( tmpWarnings.length > 0){
                var tmpPromptToCleanupDesign = false; //ToDo: Profilize it
                var tmpPromise = true;
                if( tmpPromptToCleanupDesign ){
                    tmpPromise = ThisApp.confirm('Some stuff changed, refresh automatically?','Refresh Page?');
                }

    
                $.when(tmpPromise).then(function(theIsYes){
                    if( theIsYes ){
                        tmpWarnings.click();
                    }
                });
            }
        });
    })

    //--- Initialize common block functionality for the editor
    initBlockEditor();

    var CommonBlocks = {
        //order: ["standard-header","small-header","blue-message"],
        lookup: {
            "coreparagraph": {
                type: 'core/paragraph', 
                name: "Paragraph",
                attr: {}
            },
            "corecolumns": {
                type: 'core/columns', 
                name: "Columns",
                attr: {}
            },            
            "button": {
                type: 'actappui/button', 
                name: "Button",
                attr: {}
            },
            "header": {
                type: 'actappui/header', 
                name: "Message",
                attr: {}
            },
            "image": {
                type: 'actappui/image', 
                name: "Image",
                attr: {}
            },
            "message": {
                type: 'actappui/message', 
                name: "Message",
                attr: {}
            },
            "cards": {
                type: 'actappui/cards', 
                name: "Card",
                attr: {}
            },
            "card": {
                type: 'actappui/card', 
                name: "Card",
                attr: {}
            },            
            "cardsection": {
                type: 'actappui/cardsection', 
                name: "Card Section",
                attr: {}
            },
            "cardbutton": {
                type: 'actappui/button', 
                name: "Button",
                attr: {attached:'bottom',color:'blue',circular:true,basic:true}
            },
            "dropindicator": {
                type: 'actappui/dropindicator', 
                name: "Drop Indicator",
                attr: {}
            },            
            "standard-header": {
                type: 'actappui/header', 
                name: "Standard Header",
                attr: {
                    size: 'large',
                    color: 'blue'
                }
            },
            "small-header": {
                type: 'actappui/header', 
                name: "Small Header",
                attr: {
                    size: 'small',
                    color: 'blue'
                }
            },
            "blue-message": {
                type: 'actappui/message', 
                name: "Blue Message",
                attr: {
                    color: 'blue'
                }
            },
            "field": {
                type: 'actappdesign/field', 
                name: "Field",
                attr: {}
            },
            "fieldlist": {
                type: 'actappdesign/fieldlist', 
                name: "Field List",
                attr: {}
            },

        },
        getBlock: function(theName){
            var tmpItem = this.lookup[theName];
            if( !(tmpItem)){
                return false;
            }
            return wp.blocks.createBlock(tmpItem.type, tmpItem.attr);
        },
        getSelection: function(){
            var tmpRet = [
                el("option", {value: ""}, "Add ...")
            ];
            tmpRet.push(el("option", {value: "standard-header"}, "Standard Header"));
            tmpRet.push(el("option", {value: "blue-message"}, "Blue Message"));
            return tmpRet;
        }
    }


    //---- Demo removing supports options                
    function extendBlockQuoteBlock(settings, name) {
        if (name == 'core/paragraph') {
            //settings.supports = settings.supports || {};
            if( settings.supports && settings.supports ){
                settings.supports.anchor = false;
                settings.supports.className = false;
                settings.supports.customClassName = false;
                return settings;
            }
        }
        
        return settings;
    }
    
    wp.hooks.addFilter(
        'blocks.registerBlockType',
        'actionapp',
        extendBlockQuoteBlock
    );

    

    
    //    wp.richText.unregisterFormatType('core/underline');

    
    
   

    
} )( window.wp, window.ActionAppCore );



