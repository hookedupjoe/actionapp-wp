<?php
/**
 * Server Side Widget Manager: ActAppCommon
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
 * @since actapp 1.0.0
 */


class ActAppCommon {
	private static $instance;
	public static function get_instance() {
		if ( null == self::$instance ) {
			self::$instance = new ActAppCommon();
		}
		return self::$instance;
	}

	private $rootPath = '';
		
	public static function setup_scripts($hook) {
	
		$tmplibloc = ACTIONAPP_WP_CORE_LIB_URL . '/';
		$my_js_ver  = ACTIONAPP_WP_CORE_VERSION;
		$my_css_ver = ACTIONAPP_WP_CORE_VERSION;

		wp_register_style( 'support_libs_css',    $tmplibloc . 'built-lib/support-libs.css', false,   $my_css_ver );
		wp_enqueue_style ( 'support_libs_css' );

		wp_register_style( 'semantic_css',    $tmplibloc . 'lib/semantic/dist/semantic.min.css', false,   $my_css_ver );
		wp_enqueue_style ( 'semantic_css' );

		wp_register_style( 'aa-appframe',    $tmplibloc . 'lib/css/appframe.css', false,   $my_css_ver );
		wp_enqueue_style ( 'aa-appframe' );

		wp_register_style( 'aa-resp-grid',    $tmplibloc . 'lib/css/resp-grid.css', false,   $my_css_ver );
		wp_enqueue_style ( 'aa-resp-grid' );

		wp_register_style( 'tabulator_css',    $tmplibloc . 'lib/tabulator/css/tabulator.min.css', false,   $my_css_ver );
		wp_enqueue_style ( 'tabulator_css' );

		wp_enqueue_script( 'support_libs', $tmplibloc . 'built-lib/support-libs.js', array(), $my_js_ver );
		wp_enqueue_script( 'semantic_js', $tmplibloc . 'lib/semantic/dist/semantic.min.js', array(), $my_js_ver );
		wp_enqueue_script( 'actionapp', $tmplibloc . 'lib/actionapp/actionapp.js', array(), $my_js_ver );
		wp_enqueue_script( 'data-mgr-plugin', $tmplibloc . 'lib/actionapp/nosql-data-manager.js', array(), $my_js_ver );
		wp_enqueue_script( 'obj-mgr-plugin', $tmplibloc . 'lib/actionapp/object-manager-plugin.js', array(), $my_js_ver );
		wp_enqueue_script( 'app-module', $tmplibloc . 'lib/actionapp/app-module.js', array(), $my_js_ver );
		wp_enqueue_script( 'tabulator', $tmplibloc . 'lib/tabulator/js/tabulator.min.js', array(), $my_js_ver );
		wp_enqueue_script( 'tabulator_xlsx', $tmplibloc . 'lib/tabulator/addons/xlsx.full.min.js', array(), $my_js_ver );

		
		$tmpConfig = array(
			'rootPath'=>self::getRootPath(),
			'actappCatalogURL'=> ACTIONAPP_WP_BASE_URL . '/catalog/', 
			'libCatalogsURL'=> ACTIONAPP_WP_BASE_URL . '/core/catalogs/', 
			'restPath' => esc_url_raw( rest_url() ),
			'nonce' => wp_create_nonce( 'wp_rest' )
		);
		$tmpCats = array(
			'actapp' => ACTIONAPP_WP_BASE_URL . '/catalog/',
			'common' => ACTIONAPP_WP_BASE_URL . '/core/catalogs/common/', 
		);
		$tmpJson = json_encode($tmpConfig);
		$tmpScript = 'window.ActionAppCore.ActAppWP = ' . $tmpJson . ';';			
		$tmpScript .= 'ActionAppCore.dir.catalogs._wordpress = "' . ACTIONAPP_WP_BASE_URL . '/catalog/' . '";';
		$tmpScript .= 'ActionAppCore.dir.catalogs._common = "' . ACTIONAPP_WP_BASE_URL . '/core/catalogs/common/' . '";';
		$tmpScript .= 'ActionAppCore.dir.catalogs.getResourceURL = function(theCatName, theResType, theResName){
			var tmpBaseURL = ActionAppCore.ActAppWP.rootPath;
			var tmpURL = tmpBaseURL + "/wp-json/actappdesigner/get-catalog-res.json?catname=" + theCatName + "&restype=" + theResType + "&resname=" + theResName + "&alttype=";
			return tmpURL
		};';
		$tmpScript .= 'ActionAppCore.apiCallOptions = ActionAppCore.apiCallOptions || {};ActionAppCore.apiCallOptions.filterOptions = function(theOptions){
			var tmpOptions = theOptions || {};
			if( ActionAppCore.ActAppWP && ActionAppCore.ActAppWP.nonce ){
				tmpOptions.beforeSend = function ( xhr ) {
					xhr.setRequestHeader( "X-WP-Nonce", ActionAppCore.ActAppWP.nonce );
				}
			}
			return tmpOptions;
		};';
		
		wp_add_inline_script( 'app-only-preinit', $tmpScript );

		wp_enqueue_script( 'app-only-preinit', $tmplibloc . 'lib/actionapp/app-only-preinit.js', array(), $my_js_ver );
		wp_enqueue_script( 'app-only-init', $tmplibloc . 'lib/actionapp/app-only-init.js', array(), $my_js_ver,true );
		
	
	}


	 /**
	 * post_exists_by_slug.
	 *
	 * @return mixed boolean false if no post exists; post ID otherwise.
	 */
	public static function post_exists_by_slug( $post_slug, $post_type = 'post') {
		$args_posts = array(
			'post_type'      => $post_type,
			'post_status'    => 'any',
			'name'           => $post_slug,
			'posts_per_page' => 1,
		);
		$loop_posts = new WP_Query( $args_posts );
		if ( ! $loop_posts->have_posts() ) {
			return false;
		} else {
			$loop_posts->the_post();
			return $loop_posts->post->ID;
		}
	}
	
    public static function assure_doc($slug, $post_type, $title, $content){
		$author_id = 1;
		if( !self::post_exists_by_slug( $slug, $post_type ) ) {
            // Set the post ID
            return wp_insert_post(
                array(
                    'comment_status'    =>   'closed',
                    'ping_status'       =>   'closed',
                    'post_author'       =>   $author_id,
                    'post_name'         =>   $slug,
                    'post_title'        =>   $title,
                    'post_content'      =>   $content,
                    'post_status'       =>   'publish',
                    'post_type'         =>   $post_type
                )
			);
		} else {
			return self::post_exists_by_slug( $slug, $post_type );
		}
	}
	
	public static function getCurrentLocation(){
		$path = home_url();
		$loc = get_permalink();
		return str_replace($path,'',$loc);
	}

	public static function getRootPath(){
		$path = home_url();
		return ($path);
	}
	
	public static function init() {
		global $ActAppCommon;
		$ActAppCommon = array();
	}




}
add_action( 'init', array( 'ActAppCommon', 'init' ) );
