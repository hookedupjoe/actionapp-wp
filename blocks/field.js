/**
 * Block Widget: field.js - A tabledev field
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
        name: 'field',
        title: 'Table View Field',
        example: {
            attributes: {text: 'TODO',title:'Todo'}
        },
        category: 'actappdesign',
        atts: {}
    };
    const iconEl = BlockEditor.getControlIcon(info.name);

    BlockEditor.addNumberAtts(info.atts,['parentMaxImgHeight', 'mediaID']);
    BlockEditor.addBooleanAtts(info.atts,['fluid', 'raised','urlopentab']);
    BlockEditor.addStringAtts(info.atts,['text','title', 'subtitle', 'color', 'parentColor', 'url', 'mediaURL']);

    var tmpClassSpecs = {
        boolean: ['fluid','raised'],
        string: []
    }
    function getClass(theProps, theIsEditMode){
        return BlockEditor.getStandardClass( 'ui card', tmpClassSpecs, theProps, theIsEditMode);
    }
	
    var newEl = BlockEditor.el;

    function getDisplayValue(theProps,theIsEditMode){
        var tmpAtts = theProps.attributes;
        var props = theProps;

        var tmpContent = [];
        var tmpClass = getClass(theProps,theIsEditMode);
        var tmpTitle = '';
        var tmpAtt = props.attributes;
        
        if( tmpAtts.parentColor != '' ){
            tmpClass += ' ' + tmpAtts.parentColor;
        } else if( tmpAtt.color ){
            tmpClass += ' ' + tmpAtt.color;
        }
        if( tmpAtt.title ){
            tmpTitle = tmpAtt.title;
        }
        if( tmpAtt.mediaURL ){
            var tmpMediaAtts = {src:tmpAtt.mediaURL};
           if( tmpAtts.parentMaxImgHeight > 0 ){
                tmpMediaAtts.style = {"max-height":tmpAtts.parentMaxImgHeight,"min-height":tmpAtts.parentMaxImgHeight,"object-fit": "cover"}
            }
             
            tmpContent.push( newEl('div','image',el('img',tmpMediaAtts) )  );
        }
        if( theIsEditMode && tmpTitle == '' && tmpAtt.mediaURL == '' && tmpAtt.subtitle == ''  && tmpAtt.text == '' ){
            //EDIT ONLY
            tmpTitle = '** EDIT DETAILS ON SIDEBAR **';
        }
        var tmpMainContent = [];
        if( tmpTitle ){
            tmpMainContent.push( newEl('div','header',tmpTitle) );
        }
        if( tmpAtt.subtitle ){
            tmpMainContent.push( newEl('div','meta',tmpAtt.subtitle) );
        }
        if( tmpAtt.text ){
            tmpMainContent.push( newEl('div','description',tmpAtt.text) );
        }
        tmpContent.push( newEl('div','content',tmpMainContent) );
        
        if( theIsEditMode ){
            tmpContent.push( el( wp.blockEditor.InnerBlocks,{renderAppender:false} ));
        } else {
            tmpContent.push( el( wp.blockEditor.InnerBlocks.Content ));
        }
        

        var tmpExtraContent = [];
        var tmpBtnBar = '';
        if( theIsEditMode && props.isSelected ){
            var tmpBarContent = [];
            var tmpAddBtn = el('div',{className:'ui compact button blue basic ',action:'beAddElement', elementname: 'cardsection'}, 'Add Section');
            tmpBarContent.push(tmpAddBtn);
            var tmpAddBottomBtn = el('div',{className:'ui compact button blue basic ',action:'beAddElement', elementname:'button'}, 'Add Bottom Button');
            tmpBarContent.push(tmpAddBottomBtn);
            tmpBtnBar = el('div',{},[el('div',{className:'ui fluid center aligned label blue'},'Card Control'),el('div',{className:'ui segment raised slim'},tmpBarContent,el('div',{className:'endfloat'}))]);
        }
        
        tmpContent.push(tmpExtraContent);
        if( tmpAtt.url && !theIsEditMode){
            var tmpOpts = {className:tmpClass,href:tmpAtts.url};
            if( tmpAtts.urlopentab){
                tmpOpts.target = "_blank";
                //--- Important, without this it shows 
                tmpOpts.rel = "noopener";
            }
            return el('a',tmpOpts,tmpContent);
        } else {
            if( theIsEditMode ){
                return el('div',{className:'pad10'},[tmpBtnBar,newEl('div',tmpClass,[tmpContent])]);    
            }
            return newEl('div',tmpClass,tmpContent);
        }


    }
 
    wp.blocks.registerBlockType( 'actappdesign/field', {
        title: info.title,
        icon: iconEl,
        category: info.category,
        example: info.example,
        supports: BlockEditor.defaultSupports,
        attributes: info.atts,
        rem_parent: 'actappdesign/tabledef',
        supports: {
            inserter: true,
        },
        edit: function ( props ) {
            var tmpAtts = props.attributes;
            var tmpParentAttributes = BlockEditor.getParentAttributes(props.clientId);
            props.attributes.parentColor = tmpParentAttributes.color || '';
            props.attributes.parentMaxImgHeight = tmpParentAttributes.maxImageHeight || 0;

            var tmpParentColor = tmpParentAttributes.color || '';

            var tmpStandardProperties = [
                BlockEditor.getStandardProperty(props,'title', 'Card Title'),
                BlockEditor.getStandardProperty(props,'subtitle', 'Subtitle' ),
                BlockEditor.getStandardProperty(props,'text', 'Text' ),
                tmpParentColor ? '' : BlockEditor.getStandardProperty(props,'color', 'Card Color', 'color' ),
                BlockEditor.getStandardProperty(props,{mediaID:'mediaID',mediaURL:'mediaURL'}, 'Card Image', 'image' ),
                BlockEditor.getStandardProperty(props,'url', 'Target Content or Link', 'url' ),
                !(tmpAtts.url) ? '' : BlockEditor.getStandardProperty(props,'urlopentab', 'Open link in new tab?', 'checkbox' ),                
                BlockEditor.getStandardProperty(props,'fluid', 'Full width', 'checkbox' ),
                BlockEditor.getStandardProperty(props,'raised', 'Raised', 'checkbox' ),
            ];

            var tmpSidebarPanels = [
                BlockEditor.getSidebarPanel('Card Options', tmpStandardProperties)
            ];

            var tmpSidebarControls = BlockEditor.getSidebarControls(tmpSidebarPanels);

            var tmpDisplayObject = getDisplayValue(props,true);

            return el(
                'div',
                {},
                [
                    tmpSidebarControls,               
                    tmpDisplayObject
                ]
            );
            
        },
 
        save: function ( props ) {
            //not using blockProps, need clean HTML
            var tmpEl = getDisplayValue(props,false)
            return tmpEl;
        },

    } );
} )( window.wp, window.ActionAppCore );


