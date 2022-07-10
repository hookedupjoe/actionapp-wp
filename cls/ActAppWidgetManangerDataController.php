<?php

//--- Multiple json endpoints created / served by a single class
class ActAppWidgetManangerDataController extends WP_REST_Controller {
	private static $instance;
	public static function initInstance() {
		if ( null == self::$instance ) {
			self::$instance = new ActAppWidgetManangerDataController();
			self::$instance->registerRoutes();
		}
		return self::$instance;
	}

	public function registerRoutes() {
	  $namespace = 'actappwm';

	  $path = 'config';
	  $routeInfo = array(
		'methods'             => 'GET',
		'callback'            => array( $this, 'get_config' ),
		'permission_callback' => array( $this, 'get_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	  $path = 'more';
	  $routeInfo = array(
		'methods'             => 'GET',
		'callback'            => array( $this, 'get_more' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     
	}

	public function get_permissions_check($request) {
		return true;
	}
	public function get_edit_permissions_check($request) {
		return true;
	}

	public function get_config($request) {
		$tmpRet = array('testing'=>'initial');
		return new WP_REST_Response($tmpRet, 200);
	}
	public function get_more($request) {
		$args = array(
			'post_type' => 'project',
            'numberposts' => 0
		);
		$posts = get_posts($args);
		if (empty($posts)) {
			$posts = array();
		}
		return new WP_REST_Response($posts, 200);
	}


}

add_action('rest_api_init', array('ActAppWidgetManangerDataController', 'initInstance'));
  

