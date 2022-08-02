/**
 * Action App Dynamic Demo Plugin: ActAppDynamicDemo/plugin.js
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

    registerBlockType( 'actappdesign/dynamic-demo', {
        apiVersion: 2,
        title: 'ActApp Dynamic Demo',
        icon: 'welcome-learn-more',
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
            window.tmpLastProps = props;
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
                el( ServerSideRender, {
                    block: 'actappdesign/dynamic-demo',
                    attributes: props.attributes,
                } )
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