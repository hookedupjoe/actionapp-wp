( function ( blocks, element, serverSideRender, blockEditor ) {
    var el = element.createElement,
        registerBlockType = blocks.registerBlockType,
        ServerSideRender = serverSideRender,
        useBlockProps = blockEditor.useBlockProps;
        InspectorControls = blockEditor.InspectorControls;

        
        

    registerBlockType( 'gutenberg-examples/example-dynamic', {
        apiVersion: 2,
        title: 'Example: post from file',
        icon: 'megaphone',        
        category: 'actappui',
        edit: function ( props ) {
            var blockProps = useBlockProps();

            function onChangeMessage( theEvent ) {
                props.setAttributes( { message: theEvent.target.value } );
            }
            function onChangeDebug( theEvent ) {
                props.setAttributes( { debug: theEvent.target.value } );
            }

            return el(                
                'div',
                blockProps,
                [el(InspectorControls,
                    null,
                    [wp.element.createElement(wp.components.PanelBody, {
                        title: 'Basic Details',
                        initialOpen: true,                    
                    },[
                        el('form',{className:'ui form'},[
                        el('div',{className:'ui label fluid'},'Title'),
                        el('input',{value: '' + props.attributes.message, onChange: onChangeMessage}),
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
                    block: 'gutenberg-examples/example-dynamic',
                    attributes: props.attributes,
                } )]
            );
        },
    } );
} )(
    window.wp.blocks,
    window.wp.element,
    window.wp.serverSideRender,
    window.wp.blockEditor
);