/**
 * Action App Block Editor - Content Editor Entrypoint: BlockEditor.js
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
 * @since actapp 1.0.22
 */

( function ( wp,  ActionAppCore) {
    var BlockEditor = {};
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
            wp.data.dispatch('core/editor').synchronizeTemplate();
            if( tmpBlockClientId ){
                wp.data.dispatch( 'core/block-editor' ).selectBlock( tmpBlockClientId )
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
        BlockEditor.getCommonBlocksListControl = function(theCurrentValue, theOnChangeEvent){
            var tmpSelection = CommonBlocks.getSelection();
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSelection);
        }

        BlockEditor.getColorListControl = function(theCurrentValue, theOnChangeEvent){
            var tmpSelection = [
                el("option", {value: ""}, ""),
                el("option", {value: "blue"}, "Blue"),
                el("option", {value: "green"}, "Green"),
                el("option", {value: "red"}, "Red"),
                el("option", {value: "orange"}, "Orange"),
                el("option", {value: "purple"}, "Purple"),
                el("option", {value: "violet"}, "Violet"),
                el("option", {value: "yellow"}, "Yellow"),
                el("option", {value: "olive"}, "Olive"),
                el("option", {value: "pink"}, "Pink"),
                el("option", {value: "brown"}, "Brown"),
                el("option", {value: "teal"}, "Teal"),                
                el("option", {value: "black"}, "Black"),
                el("option", {value: "gray"}, "Gray")
            ];
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSelection);
        }
        

        BlockEditor.getAttachedListControl = function(theCurrentValue, theOnChangeEvent){
            var tmpSelection = [
                el("option", {value: ""}, "None"),
                el("option", {value: "attached top"}, "Top"),
                el("option", {value: "attached"}, "Middle"),
                el("option", {value: "attached bottom"}, "Bottom"),
            ];
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSelection);
        }
        
        BlockEditor.getSizeListControl = function(theCurrentValue, theOnChangeEvent){
            var tmpSelection = [
                el("option", {value: ""}, ""),
                el("option", {value: "huge"}, "Huge"),
                el("option", {value: "large"}, "Large"),
                el("option", {value: "medium"}, "Medium"),
                el("option", {value: "small"}, "Small"),
                el("option", {value: "tiny"}, "Tiny")
            ];
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSelection);
        }

        BlockEditor.getAlignmentListControl = function(theCurrentValue, theOnChangeEvent){
            var tmpSelection = [
                el("option", {value: ""}, "None"),
                el("option", {value: "center aligned"}, "Center"),
                el("option", {value: "left aligned"}, "Left"),
                el("option", {value: "right aligned"}, "Right")
            ];
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSelection);
        }
        
        BlockEditor.getVerticalAlignmentListControl = function(theCurrentValue, theOnChangeEvent){
            var tmpSelection = [
                el("option", {value: ""}, "None"),
                el("option", {value: "top aligned"}, "Top"),
                el("option", {value: "middle aligned"}, "Middle"),
                el("option", {value: "bottom aligned"}, "Bottom")
            ];
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSelection);
        }
        BlockEditor.getLeftRightAlignmentListControl = function(theCurrentValue, theOnChangeEvent){
            var tmpSelection = [
                el("option", {value: ""}, "None"),
                el("option", {value: "left aligned"}, "Left"),
                el("option", {value: "right aligned"}, "Right")
            ];
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSelection);
        }
        BlockEditor.getLeftRighFloatListControl = function(theCurrentValue, theOnChangeEvent){
            var tmpSelection = [
                el("option", {value: ""}, "None"),
                el("option", {value: "floated left"}, "Float Left"),
                el("option", {value: "floated right"}, "Float Right")
            ];
            return BlockEditor.getSelectControl(theCurrentValue,theOnChangeEvent,tmpSelection);
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

        BlockEditor.getControlIcon = function(theControlName){
            var tmpAAIcon = "m 3.8635164,22.122498 c -0.492595,-0.544311 -0.63481,-1.374675 -0.786265,-4.590825 L 2.8923534,13.60535 1.8488754,13.14607 c -1.39173203,-0.612562 -1.43861903,-1.748182 -0.09156,-2.217767 1.133993,-0.395312 1.218044,-0.706955 1.392986,-5.1648921 0.117738,-3.0002407 0.206331,-3.4076767 0.855213,-3.9331097 0.398128,-0.322385 1.141307,-0.586154 1.65151,-0.586154 0.811998,0 0.927641,0.117419 0.927641,0.941884 0,0.788835 -0.143472,0.958393 -0.882943,1.043479 l -0.882943,0.101593 -0.160535,3.5867417 c -0.140694,3.1434401 -0.249116,3.6809611 -0.877239,4.3490701 l -0.716705,0.762329 0.716705,0.71621 c 0.632463,0.632028 0.735573,1.139535 0.877239,4.317753 l 0.160535,3.601542 0.963211,0.165761 c 0.767987,0.132165 0.963211,0.327809 0.963211,0.965284 0,0.683893 -0.164895,0.813384 -1.140157,0.895365 -0.82867,0.06966 -1.304448,-0.0857 -1.741523,-0.568661 z m 13.7962916,0.30941 c -0.396513,-0.641571 0.190879,-1.562542 1.060591,-1.662899 l 0.867606,-0.100114 0.160535,-3.586741 c 0.140694,-3.14344 0.249116,-3.680961 0.87724,-4.34907 L 21.342484,11.970755 20.62578,11.254544 C 19.99325,10.622451 19.890221,10.115097 19.74854,6.9347188 l -0.160535,-3.6036156 -0.85577,-0.09897 c -1.564739,-0.180966 -1.517585,-1.987985 0.05188,-1.987985 0.49131,0 1.228572,0.271494 1.63836,0.603321 0.677613,0.548698 0.754753,0.904791 0.852019,3.9331101 0.141434,4.4034617 0.233989,4.7499737 1.37498,5.1477247 1.347053,0.469585 1.300166,1.605205 -0.09157,2.217767 l -1.043478,0.45928 -0.168765,3.968143 c -0.155937,3.666488 -0.225761,4.014293 -0.918513,4.57525 -0.802336,0.649692 -2.437412,0.816999 -2.76734,0.283164 z M 9.9558984,19.49547 c -1.174587,-0.64245 -1.444816,-1.307924 -1.444816,-3.558053 0,-1.908473 0.104654,-2.305374 0.788081,-2.988801 0.676194,-0.676193 1.0864496,-0.788082 2.8896316,-0.788082 h 2.101551 l -0.0049,-1.364548 C 14.278376,8.839919 14.010452,8.5728223 12.172323,8.6894286 10.641938,8.7865126 10.593558,8.8206358 10.4375,9.9130432 10.315187,10.769231 10.124074,11.036789 9.6348244,11.036789 c -0.526384,0 -0.65999,-0.247053 -0.741159,-1.3704946 -0.08402,-1.1629305 0.04596,-1.5154746 0.858245,-2.3277592 0.8146556,-0.8146553 1.2037816,-0.9572644 2.6120106,-0.9572644 1.40382,0 1.798197,0.1434503 2.600738,0.9459917 l 0.945992,0.9459913 -0.08775,5.7162152 c -0.08401,5.47292 -0.115078,5.716216 -0.729887,5.716216 -0.586147,0 -0.650229,-0.24497 -0.734908,-2.809365 l -0.09276,-2.809364 h -1.742089 c -1.983544,0 -2.520525,0.536248 -2.345791,2.342594 0.09192,0.950279 0.197343,1.036006 1.383784,1.125291 1.503435,0.11314 2.220968,0.818911 1.74215,1.713591 -0.365311,0.682589 -2.277506,0.812279 -3.3475016,0.227038 z";
            var tmpPathSemReact = "M11.857 23.995C4.52 23.9-.237 17.431.012 11.775-.004 6.167 4.646.066 12.111 0c6.254.027 11.978 5.271 11.885 12.202-.072 6.813-5.84 11.973-12.14 11.793zm.175-4.92c.988.93 3.497 3.166 5.362 1.957 1.434-.93 1.157-3.975.75-5.5 1.597-.365 4.44-1.76 4.37-3.506-.078-2-2.615-3.057-4.408-3.545.347-1.495.913-4.317-.745-5.527-1.637-1.195-4.302.88-5.354 1.969-1.025-.879-3.361-3.096-5.22-2.046-1.46.824-1.513 3.087-.875 5.598-1.441.34-4.459 1.532-4.42 3.546.04 2.183 3.342 3.175 4.397 3.553-.495 1.639-.768 4.596.884 5.55 1.88 1.085 4.39-1.292 5.26-2.048zm-5.244-3.321c.126.039.216.054.362.113.035-.362.268-.685.486-.875-.221-.005-.544-.066-.615-.113.172-.562.439-1.357.657-1.782.25.375.393.674.6 1.1a3.35 3.35 0 0 1 .66-.68c-.645-1.294-1.514-2.837-1.896-4.38.227-.112.426-.116.618-.15.053-.324.162-.638.288-.95-.378-.003-.764.097-1.15.19-.525-1.693-.604-4.156.511-4.624 1.354-.48 3.525 1.331 4.052 2.013l-.337.351c.668-.123 1.305-.107 1.988.013a2.52 2.52 0 0 0-.358-.382c1.172-1.273 3.307-2.653 4.306-1.81.906.852.681 2.98.286 4.456-.466-.083-.72-.138-1.065-.194-.097.51-.163.523-.366.83.317.035.617.065 1.188.234-.19.624-.387 1.202-.662 1.776-.273-.415-.473-.829-.932-1.55l-.565.74c.725 1.284 1.45 2.526 2.143 4.79-.196.114-.309.103-.604.165a4.16 4.16 0 0 1-.333.96c.451-.087.794-.142 1.182-.233.4 1.242.676 3.872-.423 4.554-1.172.677-3.229-.943-4.141-1.918.086-.13.11-.172.26-.274-.594.062-1.29.082-1.779.044.13.108.169.163.207.245-1.43 1.496-3.372 2.559-4.275 1.822-.887-.724-.77-2.846-.293-4.481zm6.072 1.5c2.67-.512 3.576-3.241 2.114-4.976-.405-.48-1.479-1.024-2.257-1.275-1.523-.49-2.556-1.136-1.716-1.962.826-.81 2.851.083 3.182.503l1.155-1.49c-1.161-1.105-2.702-1.52-4.337-1.222C9.54 7.1 8.488 8.336 8.418 9.308c-.155 2.168.875 2.764 2.821 3.598 1.592.682 2.139.913 2.051 1.487-.246 1.618-2.867.959-3.977-.09l-1.361 1.58c1.696 1.405 3.33 1.653 4.908 1.371zM2.404 12.055c-.097-1.216 2.43-2.463 3.731-2.682.318.892.625 1.788 1.031 2.608-.412.86-.737 1.764-1.042 2.679-1.08-.236-3.616-1.31-3.72-2.605zm14.455-.082c.452-1.08.812-2.016 1.013-2.64 1.2.252 3.78 1.37 3.724 2.668-.061 1.442-2.362 2.165-3.703 2.669a29.043 29.043 0 0 0-1.034-2.697z";
            var tmpRet = el('svg', { width: 24, height: 24 },
                el('path', { d: tmpPathSemReact } )
            );
            return tmpRet;
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
            
            if( tmpCT == 'columns' ){
                return 'getColumnListControl';
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
                wp.editor.InspectorControls,
                null,
                theSidebarPanels
            );            
        }

        BlockEditor.getStandardProperty = function(theProps, theAttName, theLabel, theControlType, theOnChange){
            var tmpAtts = theProps.attributes;
            var tmpContents = [];
            
            if( theControlType !== 'checkbox' ){
                tmpContents.push(BlockEditor.getOptionLabel(theLabel));
            }

            var tmpOnChange = theOnChange || function ( theEvent ) {
                var tmpObjAtts = {};
                var tmpVal = (theEvent.target.value);
                if( theControlType == 'number'){
                   tmpVal = parseInt(tmpVal);
                   if (!(tmpVal)){
                    tmpVal = 0;
                   }
                }
                tmpObjAtts[theAttName] = tmpVal;
                theProps.setAttributes( tmpObjAtts );
                //if( theControlType == 'number' || theControlType == 'string' ){
                    BlockEditor.refreshBlockEditor();
                //}
               
            };

            var tmpFunc = getFunctionForType(theControlType) || 'getDefaultControl';
            //--- Special Property Editors Used
            if( theControlType == 'checkbox' ){
                var tmpFunc = function (theValue){
                    tmpToSet = {};
                    tmpToSet[theAttName] = theValue;
                    theProps.setAttributes(tmpToSet);
                }
                var tmpIsChecked = tmpAtts[theAttName];
                var tmpEl = el(wp.components.ToggleControl,{label: theLabel, checked: tmpIsChecked, onChange: tmpFunc});
                tmpContents.push(tmpEl);
            } else if( theControlType == 'url') {
                var tmpFunc = function( theURL, thePost ) {
                    tmpToSet = {};
                    tmpToSet[theAttName] = theURL;
                    theProps.setAttributes(tmpToSet);
                }
                var tmpEl = el(wp.editor.URLInput, {onChange: tmpFunc, value: tmpAtts[theAttName] || ''},'Browse for Link');
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
                var tmpMediaEl = el( wp.editor.MediaUpload, {
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
                tmpContents.push(BlockEditor.getOptionSep());
            }
            
            return el('div',{},tmpContents);
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
            wp.data.dispatch('core/editor').insertBlocks(tmpToAddElement,tmpPos,tmpThis.clientId) 
        }

        ThisApp.actions.beAddField = function(){
            var tmpThis = wp.data.select( 'core/block-editor' ).getSelectedBlock();
            var tmpPos = 0;
            if( tmpThis.innerBlocks && tmpThis.innerBlocks.length ){
                tmpPos = tmpThis.innerBlocks.length;
            }
            var tmpItemToAdd = 'field';
            var tmpToAddElement = BlockEditor.getCommonBlock(tmpItemToAdd);
            wp.data.dispatch('core/editor').insertBlocks(tmpToAddElement,tmpPos,tmpThis.clientId) 
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
            wp.data.dispatch('core/editor').insertBlocks(tmpToAddElement,tmpPos,tmpThis.clientId) 
        }
        
    }

    ActionAppCore.subscribe('app-loaded', function(){
        ThisApp.delay(1000).then(function(){
            addBlockEditorActions();
            //--- Open the sidebar editor automatically due to that being where our settings live
            wp.data.dispatch( 'core/edit-post' ).openGeneralSidebar( 'edit-post/block' );
            var tmpWarnings = $('.block-editor-warning__action > .components-button.is-primary');
            //--- Open the sidebar editor automatically due to that being where our settings live
            if( tmpWarnings.length > 0){
                ThisApp.confirm('Some stuff changed, refresh automatically?','Refresh Page?').then(function(theIsYes){
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
            }
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

} )( window.wp, window.ActionAppCore );



