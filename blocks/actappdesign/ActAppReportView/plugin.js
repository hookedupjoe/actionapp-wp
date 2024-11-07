/**
 * Action App Dynamic Demo Plugin: ActAppReportView/plugin.js
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

( function ( blocks, element, serverSideRender, blockEditor ) {
    var el = element.createElement,
        registerBlockType = blocks.registerBlockType,
        ServerSideRender = serverSideRender,
        useBlockProps = blockEditor.useBlockProps;
        InspectorControls = blockEditor.InspectorControls;


        function createDemoPanel(theEl){
            var tmpPanelSpec = {
              "options": {
                "padding": true
              },
              "content": [{
                "ctl": "button",
                "text": "Import JSON",
                "icon": "right arrow",
                "labeled": true,
                "right": true,
                fluid: true,
                "color": "purple",
                "myaction": "importJson"
        
              },
                {
                  "ctl": "sep",
                  "clearing": true,
                  'fitted': true
                },
                {
                  "ctl": "button",
                  "labeled": true,
                  "right": true,
                  "icon": "right arrow",
                  "text": "Validate",
                  fluid: true,
                  "myaction": "validateJson"
                },
                {
                  "ctl": "sep",
                  "clearing": true
                },
                {
                  "ctl": "spot",
                  "name": "importlog"
                }]
            };
        
            var tmpControl = this.newControl || ThisApp.controls.newControl(tmpPanelSpec, {
              parent: this
            });
            var tmpName = 'importbuttons';
            this.newControl = tmpControl;
            var tmpInstance = tmpControl.create(tmpName);
            //var tmpSpot = this.getSpot$('controls');
            //var tmpSpot = this.parts.controls.getTabSpot('import');
            tmpInstance.loadToElement(theEl);
            //this.parts[tmpName] = tmpInstance;
        }

    var tmpIconEl = el('svg', { width: 24, height: 24 },
    el('path', { d: "M 9.2168396,22.056624 C 5.4016493,21.203103 2.4804819,18.730221 1.1335267,15.213796 -1.2066276,9.1042875 2.257595,2.3634222 8.6275343,0.63156828 c 1.3129213,-0.35695577 4.1379757,-0.35695577 5.4508627,0 3.870732,1.05235442 6.817776,4.00748572 7.899552,7.92119802 0.365146,1.3209738 0.365146,4.1383537 0,5.4593277 -1.074721,3.888247 -4.024175,6.862477 -7.82591,7.891775 -1.258103,0.340679 -3.750703,0.417762 -4.9351994,0.152789 z m 4.6538464,-0.667937 c 2.247001,-0.570689 4.143309,-1.793279 5.610431,-3.617219 3.009881,-3.741893 3.022269,-9.1993622 0.03097,-12.9488259 C 15.329033,-0.41786036 7.4193975,-0.44786763 3.249005,4.7610446 0.21527627,8.5500821 0.19359677,13.979575 3.1970429,17.74239 5.7571942,20.949693 9.9552526,22.383676 13.872235,21.388859 Z M 4.8809956,18.276155 C 4.2569338,17.533372 3.3587793,15.512423 3.0186854,14.085873 2.6022313,12.338913 2.6734989,9.6223259 3.1773248,8.0363452 3.5881698,6.7432107 4.5574539,4.7955598 5.0214998,4.3308256 5.3969004,3.9548056 6.1230283,3.8497457 6.1230283,4.171498 c 0,0.105989 -0.2257428,0.7533133 -0.5012454,1.4385941 C 5.3461427,6.2953728 4.9732542,7.54563 4.7932794,8.3884489 4.514198,9.6945567 4.4773771,10.217482 4.5424158,11.929651 c 0.081901,2.157014 0.3441201,3.398943 1.1417217,5.409981 0.2415723,0.60868 0.4389596,1.171385 0.4389596,1.250429 0,0.07915 -0.1930514,0.143842 -0.4288769,0.143842 -0.2986962,0 -0.5454648,-0.13868 -0.8132246,-0.457507 z m 11.5545204,0.410157 c 0,-0.02753 0.259811,-0.73979 0.577296,-1.586153 0.826611,-2.20347 1.08126,-3.5624 1.076339,-5.74395 C 18.08571,9.2434497 17.872011,8.0919206 17.094472,5.9621958 16.324813,3.8540817 16.345426,3.978722 16.76687,3.978722 c 0.611054,0 1.116429,0.5512115 1.804669,1.9681948 0.948532,1.9530192 1.279748,3.3448474 1.287215,5.4092922 0.0069,2.092526 -0.25396,3.228948 -1.210442,5.257536 -0.808854,1.715645 -1.146539,2.119918 -1.770704,2.119918 -0.242949,0 -0.441988,-0.02065 -0.441988,-0.04749 z M 8.7165238,15.30072 C 7.32239,14.500194 7.2065592,12.300578 8.5134929,11.442962 8.7013825,11.319423 9.7156766,11.000561 10.767136,10.734109 l 1.911793,-0.484521 -0.02065,-0.5820447 c -0.02753,-0.8007674 -0.437548,-1.114777 -1.458863,-1.114777 -0.851215,0 -1.4294064,0.3448083 -1.8275534,1.0898627 C 9.1027612,10.146352 8.697632,10.256539 8.2338958,9.952337 7.9148995,9.742768 7.8685809,9.6257671 7.9372673,9.2009509 8.0556446,8.469558 8.5312185,7.8877198 9.3269616,7.5003094 10.275254,7.0386723 12.379958,7.0124159 13.257261,7.4514443 c 1.150669,0.5756785 1.400259,1.2936851 1.405521,4.0436867 0.0018,1.00951 0.08259,2.218542 0.178942,2.686786 0.158295,0.767939 0.149004,0.880776 -0.09635,1.15239 -0.415419,0.459744 -0.879434,0.376536 -1.395266,-0.250176 -0.425921,-0.517522 -0.473926,-0.538169 -0.78415,-0.336893 -1.508416,0.978161 -2.7906774,1.162575 -3.8508077,0.553861 z m 3.0185872,-1.222004 c 0.630084,-0.326226 1.016187,-1.03797 1.016841,-1.874113 3.78e-4,-0.464528 -0.0616,-0.69963 -0.183416,-0.697256 -0.523854,0.01032 -2.7054044,0.75173 -2.8683454,0.974961 -0.289405,0.396392 -0.226775,1.101081 0.131798,1.483364 0.3837984,0.409159 1.2340464,0.459641 1.9033294,0.112872 z" } )
    );

    registerBlockType( 'actappdesign/report-view', {
        apiVersion: 2,
        title: 'ActApp Report View',
        icon: tmpIconEl,
        category: 'actappdesign',
        edit: function ( props ) {
            if( !(ThisApp.actions.runClickMe) ){
                ThisApp.actions.runClickMe = function(theParams, theTarget){
                    var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['tempClientId']);
                    var tmpContext = ThisApp.common.loadedBlocks[tmpParams.tempClientId];
                    tmpContext.createDemoPanel = createDemoPanel.bind(tmpContext);
                    var tmpSpotName = 'controls_for_' + tmpParams.tempClientId;
                    var tmpSpot = ThisApp.getSpot$(tmpSpotName);
                    tmpContext.createDemoPanel(tmpSpot);
                    console.log('tmpContext and tmpParams', tmpSpot, tmpContext, tmpParams);    
                }
            }
            ThisApp.common.loadedBlocks = ThisApp.common.loadedBlocks || {};
            ThisApp.common.loadedBlocks[props.clientId] = {props:props,
                blocks:blocks, 
                element:element, 
                serverSideRender:serverSideRender, 
                blockEditor:blockEditor
            };

            var blockProps = useBlockProps();

            function onChangeMessage( theEvent ) {
                props.setAttributes( { message: theEvent.target.value } );
            }
            function onChangeDebug( theEvent ) {
                props.setAttributes( { debug: theEvent.target.value } );
            }
            function onChangeDesc( theEvent ) {
                props.setAttributes( { desc: theEvent.target.value } );
            }
            
            
            return el(                
                'div',
                blockProps,
                [
                el(InspectorControls,
                    null,
                    [
                    wp.element.createElement(wp.components.PanelBody, {
                        title: 'Basic Details',
                        initialOpen: true,                    
                    },[
                        el('form',{className:'ui form segment slim'},[
                            el('div',{spot: 'controls_for_' + props.clientId},''),
                            el('div',{className:'ui label fluid'},'Message'),
                            el('div',{action:'runClickMe', tempClientId: props.clientId, className:'ui button fluid blue'},'Click Me!'),
                            el('input',{value: '' + props.attributes.message, onChange: onChangeMessage}),
                            el('div',{className:'ui pad4'},''),
                            el('div',{className:'ui label fluid'},'Description'),
                            el('input',{value: '' + props.attributes.desc, onChange: onChangeDesc}),
                        ])
                    ]
                    ),
                    wp.element.createElement(wp.components.PanelBody, {
                        title: 'Advanded Options',
                        initialOpen: false,
                    },[
                        'Debug: ',
                        el('input',{value: '' + props.attributes.debug, onChange: onChangeDebug}),
                    ]
                    ),]
                ),
                el('div',{className:'ui message'},props.attributes.message)
            //    el( ServerSideRender, {
            //     block: 'actappdesign/report-view',
            //     attributes: props.attributes,
            // } )
                ]
            );
        },
    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.serverSideRender,
    window.wp.blockEditor
);