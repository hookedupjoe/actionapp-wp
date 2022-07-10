<?php
/*
Common access points for ActApp related widgets
*/

/* package: actapp */


class ActAppDynamicCard {
	private static $instance;
	public static function get_instance() {
		if ( null == self::$instance ) {
			self::$instance = new ActAppDynamicCard();
		}
		return self::$instance;
	}


	public static function init() {
		self::gutenberg_examples_dynamic();
	}

	
	public static function gutenberg_examples_dynamic_render_callback( $block_attributes, $content ) {
		$tmpCount = sizeof($block_attributes);
		if( $tmpCount == 0){
			return 'no attributes';
			}
			if( $block_attributes['debug'] ){
			return 'debug ' . $block_attributes['debug'];
		}

		if( $block_attributes['message'] ){
			return '<div class="ui card"><b>message</b>: ' . $block_attributes['message'] . "</div>";
		}
		return 'unknown params';
	}


	function gutenberg_examples_dynamic() {
	 
		wp_register_script(
			'gutenberg-examples-dynamic',
			plugins_url( 'plugin.js', __FILE__ ),
			array('wp-blocks', 'wp-element', 'wp-server-side-render', 'wp-i18n', 'wp-polyfill')
		);
	 
		register_block_type( 'gutenberg-examples/example-dynamic', array(
			'api_version' => 2,
			'attributes' => array(
				'message' => array(
					'type' => 'string'
				),
				'debug' => array(
					'type' => 'string'
				),
				),
			'editor_script' => 'gutenberg-examples-dynamic',
			'render_callback' => array('ActAppDynamicCard','gutenberg_examples_dynamic_render_callback'),
		) );
	 
	}
	

	
	public static function baseDir() {
		return ACTIONAPP_WP_WIDGETS_DYNAMIC_CARD_DIR;
	}
	public static function baseURL() {
		return ACTIONAPP_WP_WIDGETS_DYNAMIC_CARD_URL;
	}
	
}


add_action( 'init', array( 'ActAppDynamicCard', 'init' ) );

