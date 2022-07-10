/**
 * Block Widget: dropindicator.js - Block Editor Drop Placeholder
 *  (used to assure you can drop into a blank container)
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
 * @since actapp 1.0.24
 */
( function ( wp, ActionAppCore ) {
    
    var el = wp.element.createElement;
    var useBlockProps = wp.blockEditor.useBlockProps;
    var BlockEditor = ActionAppCore.common.blocks.Editor;
    
    var info = {
        name: 'dropindicator',
        title: 'UI Drop Indicator',
        example: {
            
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    function getDisplayValue(theProps,theIsEditMode){
        // if( theIsEditMode ){
        //     console.log('dsp')
        //     return el('div',{className:'actapp-be-drop-indicator'},'');
        // }

        return el('div',{className:'hidden'},'');
    }
 
    wp.blocks.registerBlockType( info.category + '/' + info.name, {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        attributes: info.atts,
        supports: {
            inserter: false,
        },
        edit: function ( props ) {
            var tmpDisplayObject = getDisplayValue(props,true);

            return el(
                'div',
                useBlockProps(),
                [
                    tmpDisplayObject
                ]
            );
            
        },
 
        

    } );
} )( window.wp, window.ActionAppCore );


