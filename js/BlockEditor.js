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
 * @since actionappwp 1.0.0
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
            var tmpAAIcon = "M 9.2168396,22.056624 C 5.4016493,21.203103 2.4804819,18.730221 1.1335267,15.213796 -1.2066276,9.1042875 2.257595,2.3634222 8.6275343,0.63156828 c 1.3129213,-0.35695577 4.1379757,-0.35695577 5.4508627,0 3.870732,1.05235442 6.817776,4.00748572 7.899552,7.92119802 0.365146,1.3209738 0.365146,4.1383537 0,5.4593277 -1.074721,3.888247 -4.024175,6.862477 -7.82591,7.891775 -1.258103,0.340679 -3.750703,0.417762 -4.9351994,0.152789 z m 4.6538464,-0.667937 c 2.247001,-0.570689 4.143309,-1.793279 5.610431,-3.617219 3.009881,-3.741893 3.022269,-9.1993622 0.03097,-12.9488259 C 15.329033,-0.41786036 7.4193975,-0.44786763 3.249005,4.7610446 0.21527627,8.5500821 0.19359677,13.979575 3.1970429,17.74239 5.7571942,20.949693 9.9552526,22.383676 13.872235,21.388859 Z M 4.8809956,18.276155 C 4.2569338,17.533372 3.3587793,15.512423 3.0186854,14.085873 2.6022313,12.338913 2.6734989,9.6223259 3.1773248,8.0363452 3.5881698,6.7432107 4.5574539,4.7955598 5.0214998,4.3308256 5.3969004,3.9548056 6.1230283,3.8497457 6.1230283,4.171498 c 0,0.105989 -0.2257428,0.7533133 -0.5012454,1.4385941 C 5.3461427,6.2953728 4.9732542,7.54563 4.7932794,8.3884489 4.514198,9.6945567 4.4773771,10.217482 4.5424158,11.929651 c 0.081901,2.157014 0.3441201,3.398943 1.1417217,5.409981 0.2415723,0.60868 0.4389596,1.171385 0.4389596,1.250429 0,0.07915 -0.1930514,0.143842 -0.4288769,0.143842 -0.2986962,0 -0.5454648,-0.13868 -0.8132246,-0.457507 z m 11.5545204,0.410157 c 0,-0.02753 0.259811,-0.73979 0.577296,-1.586153 0.826611,-2.20347 1.08126,-3.5624 1.076339,-5.74395 C 18.08571,9.2434497 17.872011,8.0919206 17.094472,5.9621958 16.324813,3.8540817 16.345426,3.978722 16.76687,3.978722 c 0.611054,0 1.116429,0.5512115 1.804669,1.9681948 0.948532,1.9530192 1.279748,3.3448474 1.287215,5.4092922 0.0069,2.092526 -0.25396,3.228948 -1.210442,5.257536 -0.808854,1.715645 -1.146539,2.119918 -1.770704,2.119918 -0.242949,0 -0.441988,-0.02065 -0.441988,-0.04749 z M 8.7165238,15.30072 C 7.32239,14.500194 7.2065592,12.300578 8.5134929,11.442962 8.7013825,11.319423 9.7156766,11.000561 10.767136,10.734109 l 1.911793,-0.484521 -0.02065,-0.5820447 c -0.02753,-0.8007674 -0.437548,-1.114777 -1.458863,-1.114777 -0.851215,0 -1.4294064,0.3448083 -1.8275534,1.0898627 C 9.1027612,10.146352 8.697632,10.256539 8.2338958,9.952337 7.9148995,9.742768 7.8685809,9.6257671 7.9372673,9.2009509 8.0556446,8.469558 8.5312185,7.8877198 9.3269616,7.5003094 10.275254,7.0386723 12.379958,7.0124159 13.257261,7.4514443 c 1.150669,0.5756785 1.400259,1.2936851 1.405521,4.0436867 0.0018,1.00951 0.08259,2.218542 0.178942,2.686786 0.158295,0.767939 0.149004,0.880776 -0.09635,1.15239 -0.415419,0.459744 -0.879434,0.376536 -1.395266,-0.250176 -0.425921,-0.517522 -0.473926,-0.538169 -0.78415,-0.336893 -1.508416,0.978161 -2.7906774,1.162575 -3.8508077,0.553861 z m 3.0185872,-1.222004 c 0.630084,-0.326226 1.016187,-1.03797 1.016841,-1.874113 3.78e-4,-0.464528 -0.0616,-0.69963 -0.183416,-0.697256 -0.523854,0.01032 -2.7054044,0.75173 -2.8683454,0.974961 -0.289405,0.396392 -0.226775,1.101081 0.131798,1.483364 0.3837984,0.409159 1.2340464,0.459641 1.9033294,0.112872 z";
            var tmpPathSemReact = "M11.857 23.995C4.52 23.9-.237 17.431.012 11.775-.004 6.167 4.646.066 12.111 0c6.254.027 11.978 5.271 11.885 12.202-.072 6.813-5.84 11.973-12.14 11.793zm.175-4.92c.988.93 3.497 3.166 5.362 1.957 1.434-.93 1.157-3.975.75-5.5 1.597-.365 4.44-1.76 4.37-3.506-.078-2-2.615-3.057-4.408-3.545.347-1.495.913-4.317-.745-5.527-1.637-1.195-4.302.88-5.354 1.969-1.025-.879-3.361-3.096-5.22-2.046-1.46.824-1.513 3.087-.875 5.598-1.441.34-4.459 1.532-4.42 3.546.04 2.183 3.342 3.175 4.397 3.553-.495 1.639-.768 4.596.884 5.55 1.88 1.085 4.39-1.292 5.26-2.048zm-5.244-3.321c.126.039.216.054.362.113.035-.362.268-.685.486-.875-.221-.005-.544-.066-.615-.113.172-.562.439-1.357.657-1.782.25.375.393.674.6 1.1a3.35 3.35 0 0 1 .66-.68c-.645-1.294-1.514-2.837-1.896-4.38.227-.112.426-.116.618-.15.053-.324.162-.638.288-.95-.378-.003-.764.097-1.15.19-.525-1.693-.604-4.156.511-4.624 1.354-.48 3.525 1.331 4.052 2.013l-.337.351c.668-.123 1.305-.107 1.988.013a2.52 2.52 0 0 0-.358-.382c1.172-1.273 3.307-2.653 4.306-1.81.906.852.681 2.98.286 4.456-.466-.083-.72-.138-1.065-.194-.097.51-.163.523-.366.83.317.035.617.065 1.188.234-.19.624-.387 1.202-.662 1.776-.273-.415-.473-.829-.932-1.55l-.565.74c.725 1.284 1.45 2.526 2.143 4.79-.196.114-.309.103-.604.165a4.16 4.16 0 0 1-.333.96c.451-.087.794-.142 1.182-.233.4 1.242.676 3.872-.423 4.554-1.172.677-3.229-.943-4.141-1.918.086-.13.11-.172.26-.274-.594.062-1.29.082-1.779.044.13.108.169.163.207.245-1.43 1.496-3.372 2.559-4.275 1.822-.887-.724-.77-2.846-.293-4.481zm6.072 1.5c2.67-.512 3.576-3.241 2.114-4.976-.405-.48-1.479-1.024-2.257-1.275-1.523-.49-2.556-1.136-1.716-1.962.826-.81 2.851.083 3.182.503l1.155-1.49c-1.161-1.105-2.702-1.52-4.337-1.222C9.54 7.1 8.488 8.336 8.418 9.308c-.155 2.168.875 2.764 2.821 3.598 1.592.682 2.139.913 2.051 1.487-.246 1.618-2.867.959-3.977-.09l-1.361 1.58c1.696 1.405 3.33 1.653 4.908 1.371zM2.404 12.055c-.097-1.216 2.43-2.463 3.731-2.682.318.892.625 1.788 1.031 2.608-.412.86-.737 1.764-1.042 2.679-1.08-.236-3.616-1.31-3.72-2.605zm14.455-.082c.452-1.08.812-2.016 1.013-2.64 1.2.252 3.78 1.37 3.724 2.668-.061 1.442-2.362 2.165-3.703 2.669a29.043 29.043 0 0 0-1.034-2.697z";
            var tmpRet = el('svg', { width: 24, height: 24 },
                el('path', { d: tmpAAIcon } )
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

                //--- The below refresh cause issues with editor in widgets area
                //BlockEditor.refreshBlockEditor();
                //--- ToDo: Review usage / initial need of the above call
               
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



