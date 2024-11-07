/**
 * Block Widget: richtext.js - Semantic UI RichText  
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
        name: 'richtext',
        title: 'UI RichText',
        example: {
            attributes: {color: 'blue'}
        },
        category: 'actappui',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    function getClassNames( props ){
        var tmpRet = 'ui segment basic pad0 mar0';
        //---ToDo: Add options for padding and margin
        //pad0 mar0
        var tmpAlignCls = '';
        if( props.attributes.alignment === 'center'){
            tmpAlignCls = ' center aligned';
        } else if( props.attributes.alignment === 'right'){
            tmpAlignCls = ' right aligned';
        }
        tmpRet += tmpAlignCls;
        return tmpRet;
    }

   
    wp.blocks.registerBlockType( info.category + '/' + info.name, {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: {
            alignment: {
                type: 'string'
            },
            content: {
                type: 'string',
                source: 'html',
                selector: 'div',
            },
        },
        edit: function( props ) {

            // function onChangeContent( updatedContent ) {
            //     props.setAttributes( { content: updatedContent } );
            // }

            function onChangeAlignment( updatedAlignment ) {
                console.log( 'alignment: updatedAlignment', updatedAlignment);
                props.setAttributes( { alignment: updatedAlignment } );
            }


           //0 var blockProps = wp.blockEditor.useBlockProps();
            var tmpClass = '';
            if( props.isSelected ){
                tmpClass = 'actapp-block-box';
            }
           // return el('div',{},'to: ' + typeof(Object.assign));

            //allowed can add -> , 'actappformat/inline-label'
            var tmpAs = Object.assign( useBlockProps, {
                tagName: 'div',  // The tag here is the element output and editable in the admin
                className: tmpClass,
                value: props.attributes.content || '', // Any existing content, either from the database or an attribute default
                allowedFormats: [ 'core/bold', 'core/italic' ], // Allow the content to be made bold or italic, but do not allow other formatting options
                onChange: function( content ) {
                    props.setAttributes( { content: content } ); // Store updated content as a block attribute
                },
                placeholder: ( 'Heading here ...' ), // Display this text before any content has been added by the user
            } )

            var tmpAligner = el(
                wp.blockEditor.BlockControls,
                {},
                el(
                    wp.blockEditor.AlignmentToolbar,
                    {
                        value: props.attributes.alignment,
                        onChange: onChangeAlignment
                    }
                )
            );
            return el('div',{className: getClassNames(props)},tmpAligner,el(wp.blockEditor.RichText,tmpAs));
            return el('div',{},'to: ' + typeof(wp.blockEditor.RichText));
            return el( wp.blockEditor.RichText, Object.assign( blockProps, {
                tagName: 'div',  // The tag here is the element output and editable in the admin
                value: '', // Any existing content, either from the database or an attribute default
                //allowedFormats: [ 'core/bold', 'core/italic' ], // Allow the content to be made bold or italic, but do not allow other formatting options
                // onChange: function( content ) {
                //     props.setAttributes( { content: content } ); // Store updated content as a block attribute
                // },
                placeholder: __( 'Heading...' ), // Display this text before any content has been added by the user
            } ) );
        },
     
        save: function( props ) {
            var blockProps = useBlockProps.save();
            //blockProps.className = '';

            return wp.element.createElement( wp.blockEditor.RichText.Content, Object.assign( blockProps, {
                className: getClassNames(props), tagName: 'div', value: props.attributes.content // Saves <div>Content added in the editor...</div> to the database for frontend display
            } ) );
        }
    } );
} )( window.wp, window.ActionAppCore );


