/**
 * Any Widget: any.js - Semantic UI Generic Object
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

 

( function ( wp, ActionAppCore ) {
    var el = wp.element.createElement;
    var useBlockProps = wp.blockEditor.useBlockProps;
    var BlockEditor = ActionAppCore.common.blocks.Editor;
    
    var info = {
        name: 'any',
        title: 'UI Any',
        example: {
            attributes: {color: 'blue'}
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addStringAtts(info.atts,['color','size','attached','basic', 'spotname','spotsourcetype','spotsourcename','spotsourcepartname']);
    BlockEditor.addBooleanAtts(info.atts,['raised','stacked','vertical']);
    var tmpClassSpecs = {
        boolean: ['raised','stacked','vertical','basic'],
        string: ['color','size','attached']
    }    
    function getClass(theProps, theIsEditMode){
        return BlockEditor.getStandardClass( 'ui any', tmpClassSpecs, theProps, theIsEditMode);
    }
    function getDisplayValue(theProps,theIsEditMode){
        var props = theProps;
        var tmpClass = getClass(props, true);
        var tmpAtts = {className:tmpClass};
        var tmpPropAtts = theProps.attributes;
        
        var tmpEls = [];
        if( tmpPropAtts.spotname  && tmpPropAtts.spotname != ''){
            var tmpSpotTopAtts = {spot:tmpPropAtts.spotname};
            if( tmpPropAtts.spotsourcetype ){
                //console.log('tn',tmpPropAtts.spotsourcetype)
                tmpSpotTopAtts.sourcetype = tmpPropAtts.spotsourcetype;
                tmpSpotTopAtts.appuse = 'blockmarkup';
            }
            if( tmpPropAtts.spotsourcename ){
                //console.log('ts',tmpPropAtts.spotsourcename)
                tmpSpotTopAtts.sourcename = tmpPropAtts.spotsourcename;                
            }
            if( tmpPropAtts.spotsourcepartname ){
                //console.log('ts',tmpPropAtts.spotsourcename)
                tmpSpotTopAtts.sourcepartname = tmpPropAtts.spotsourcepartname;                
            }
            
    
            tmpEls.push(el('div',tmpSpotTopAtts,''));
        }

        
        if( theIsEditMode ){
            tmpEls.push(el( wp.blockEditor.InnerBlocks ));
        } else {
            tmpEls.push(el( wp.blockEditor.InnerBlocks.Content ));
        }

        
        return el('div', tmpAtts, tmpEls);
        
    }

    var editorAdds = 0;
    function getDisplayEditor(theProps){
        var tmpElAtts = {};
        var tmpID = theProps.clientId;
        var tmpEditor = BlockEditor.getEditor(tmpID);
        if( !tmpEditor ){
            tmpEditor = 'I was created for ' + tmpID;
            editorAdds++;
            BlockEditor.setEditor(tmpID, tmpEditor);
        } else {
            tmpEditor += ' and updated ' + (editorAdds++);
        }

        if( theProps.isSelected ){
            return el('div', tmpElAtts, tmpEditor);
        }
        return el('div', tmpElAtts, 'This is an ANY control');
    }

    wp.blocks.registerBlockType( info.category + '/' + info.name, {
        title: info.title,
        icon: iconEl,
        category: info.category,
        rem_example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        edit: function ( props ) {
            return el(
                'div',
                useBlockProps(),
                [
                    getDisplayEditor(props)
                ]
            );
        },
 
        save: function ( props ) {
            return el(
                'div',
                {},
                'testing'
            );
        },
    } );
} )( window.wp, window.ActionAppCore );


