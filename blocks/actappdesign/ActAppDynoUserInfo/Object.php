<?php
/**
 * Action App Dynamic Demo: ActAppDynoUserInfo/Object.php
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


class ActAppDynoUserInfo {
	private static $instance;
	public static function get_instance() {
		if ( null == self::$instance ) {
			self::$instance = new ActAppDynoUserInfo();
		}
		return self::$instance;
	}


	public static function init() {
		self::init_this_control();
	}

	
	public static function server_response( $block_attributes, $content ) {
		$tmpCount = sizeof($block_attributes);
		$tmpJSON = json_encode($block_attributes);
		//return $tmpJSON;
		
		$current_user = wp_get_current_user();

    //   echo 'Username: ' . $current_user->user_login . "\n";
    //   echo 'User email: ' . $current_user->user_email . "\n";
    //   echo 'User first name: ' . $current_user->user_firstname . "\n";
    //   echo 'User last name: ' . $current_user->user_lastname . "\n";
    //   echo 'User display name: ' . $current_user->display_name . "\n";
    //   echo 'User ID: ' . $current_user->ID . "\n";

		$tmpUserID = get_current_user_id();

		if( $tmpCount == 0){
			return 'no attributes';
		}

		if( $block_attributes['debug'] ){
			return $tmpJSON; //return 'debug ' . $block_attributes['debug'];
		}
		
		if( $block_attributes['message'] ){
			//<div class="ui button blue fluid" action="runClickMe">Click Me</div>
			return '<div class="ui bottom pointing label blue basic marb0 mart5">' . $current_user->display_name . '</div><div class="ui message blue large">' . $block_attributes['message'] . "</div>";
		}
		

		return 'unknown params';
	}


	static function init_this_control() {
	 
		wp_register_script(
			'actappdesign-dynamic-userinfo',
			plugins_url( 'plugin.js', __FILE__ ),
			array('wp-blocks', 'wp-element', 'wp-server-side-render', 'wp-i18n', 'wp-polyfill')
		);
	 
		register_block_type( 'actappdesign/dynamic-userinfo', array(
			'api_version' => 2,
			'attributes' => array(
				'message' => array(
					'type' => 'string'
				),
				'desc' => array(
					'type' => 'string'
				),
				'debug' => array(
					'type' => 'string'
				),
			),
			'editor_script' => 'actappdesign-dynamic-userinfo',
			'render_callback' => array('ActAppDynoUserInfo','server_response'),
		) );
	 
	}
	
}


add_action( 'init', array( 'ActAppDynoUserInfo', 'init' ) );

