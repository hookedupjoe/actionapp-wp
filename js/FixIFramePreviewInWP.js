/*
This is hopefully temporary code that fixes an issue where the iFrame doesn't load css file enqueued for the block editor
*/
document.addEventListener(
	'DOMContentLoaded',
	function () {
		gutenbergResponsiveIframe.init();
	}
);

const gutenbergResponsiveIframe = {
	listenerTriggered: false,
	init: function () {
        this.loadStyles();
		const isEditorFrameLoaded = setInterval(
			() =>
			{
                // Check is the current page Gutenberg editor or Full Site Editor
				const editorPage = document.querySelector( '.block-editor-iframe__container' ) || document.querySelector( '.edit-site-visual-editor' );
                if( editorPage ){
                    const editorFrame = editorPage.querySelector( 'iframe[name="editor-canvas"]' );
                    if ( editorFrame && !($(editorFrame).data('cssupdated')) ) {
                        console.log('isloaded');
                        $(editorFrame).data('cssupdated',true);
                        gutenbergResponsiveIframe.listenerChanges( editorFrame );
                    }
                }
			},
			500
		);
	},
    loadStyles: function(){
        window.additionalIframeScripts = window.additionalIframeScripts || [];
        var tmpAdds = window.additionalIframeScripts;

        $('link[rel="stylesheet"][id]').each(function (i, ele) {
            tmpAdds.push($(this).attr('href'));
        });
    },
	listenerChanges: function ( editorFrame ) {
        if ( editorFrame ) {
            setTimeout(function(){
                gutenbergResponsiveIframe.includeScripts( editorFrame.contentDocument );
            },100); 
        }
	},
	includeScripts: function ( $document ) {
  		if ( $document ) {
			const $head  = $document.querySelector( 'head' );
			const styles = [];

			if ( typeof window.additionalIframeScripts === 'object' ) {
				for ( const [key, value] of Object.entries( window.additionalIframeScripts ) ) {
					styles.push( value );
				}
			}

			if ( styles.length > 0 ) {
				styles.forEach(
					styleURL =>
					{
						const link = $document.createElement( 'link' );

						link.setAttribute( 'href', styleURL );
						link.setAttribute( 'rel', 'stylesheet' );
						link.setAttribute( 'type', 'text/css' );
                        //console.log('includeScript',styleURL);
						$head.insertBefore( link, $head.firstChild );
					}
				);
			}
		}
	},
}