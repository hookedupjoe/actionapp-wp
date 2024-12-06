<?php
/**
 * Server Side Blocks / Widget Manager: ActAppEmailManager
 * 
 * Copyright (c) 2024 Joseph Francis / hookedup, inc. 
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
 * @since actionappwp 1.0.42
 * 
 * 
 * 
 *   PENDING COMPLETION - NOT ADDED 12-24
 * 
 * 
 */



class ActAppEmailManager {
	private static $instance;
	
	public static function get_instance() {
		if ( null == self::$instance ) {
			self::$instance = new ActAppEmailManager();
		}
		return self::$instance;
	}


	
	public static function init() {


		self::setup_data();
	}

	// //Custom acf endpoint;
	// public static function dev_endpoint( $request_data ) {
	// 	return array('version'=>'V1.1.1');
	// }

	
	public static function setup_data() {
		
// // register the endpoint;
// add_action( 'rest_api_init', function () {
// 	register_rest_route( 'aawm/v1', 'blocksdev/', array(
// 		'methods' => 'GET',
// 		'callback' => array('ActAppEmailManager', 'dev_endpoint'),
// 		)
// 	);
// });
	}

	
	public static function baseDir() {
		return ACTIONAPP_WP_BLOCKS_DIR;
	}
	public static function baseURL() {
		return ACTIONAPP_WP_BLOCKS_URL;
	}
	

	//---- Admin Settings
	public static function showAdminSettings(){
		//include ACTIONAPP_WP_BLOCKS_DIR . '/tpl/widgets-settings.php';
		//get_template_part( 'tpl/widgets-settings' );
		//echo 'hi';
		include(ACTIONAPP_WP_BLOCKS_DIR . '/tpl/email-settings.php');
		
	}


	public static function registerAdminSettings(){
		add_menu_page( 
			__( 'EMail Settings'),
			'EMail Settings',
			'manage_options',
			'actappemailsettings',
			array( 'ActAppEmailManager', 'showAdminSettings' ),
			plugins_url( 'actapp-blocks/images/icon.png' ),
			81
		); 
	}

}

//--- Demo of a widget that uses server side rendering
//--- *** This is a Designer Widget, Setup in ActAppDesigner
//require_once ACTIONAPP_WP_BLOCKS_DIR . '/blocks/actappdesign/ActAppDynamicDemo/Object.php';

add_action( 'init', array( 'ActAppEmailManager', 'init' ) );



