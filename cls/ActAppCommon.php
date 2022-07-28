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

//		wp_register_style( 'tabulator_sem_css',    $tmplibloc . 'lib/tabulator/css/tabulator_semanticui.min.css', false,   $my_css_ver );
//		wp_enqueue_style ( 'tabulator_sem_css' );

		wp_enqueue_script( 'support_libs', $tmplibloc . 'built-lib/support-libs.js', array(), $my_js_ver );
		wp_enqueue_script( 'semantic_js', $tmplibloc . 'lib/semantic/dist/semantic.min.js', array(), $my_js_ver );
		wp_enqueue_script( 'actionapp', $tmplibloc . 'lib/actionapp/actionapp.js', array(), $my_js_ver );
		wp_enqueue_script( 'data-mgr-plugin', $tmplibloc . 'lib/actionapp/nosql-data-manager.js', array(), $my_js_ver );
		wp_enqueue_script( 'obj-mgr-plugin', $tmplibloc . 'lib/actionapp/object-manager-plugin.js', array(), $my_js_ver );
		wp_enqueue_script( 'app-module', $tmplibloc . 'lib/actionapp/app-module.js', array(), $my_js_ver );
		wp_enqueue_script( 'tabulator', $tmplibloc . 'lib/tabulator/js/tabulator.min.js', array(), $my_js_ver );
		wp_enqueue_script( 'tabulator_xlsx', $tmplibloc . 'lib/tabulator/addons/xlsx.full.min.js', array(), $my_js_ver );
		wp_enqueue_script( 'tabulator_moment', $tmplibloc . 'lib/tabulator/addons/moment.2.24.js', array(), $my_js_ver );

		
		$tmpConfig = array(
			'rootPath'=>self::getRootPath(),
			'actappCatalogURL'=> ACTIONAPP_WP_BASE_URL . '/catalog/', 
			'libCatalogsURL'=> ACTIONAPP_WP_BASE_URL . '/core/catalogs/', 
			'restPath' => esc_url_raw( rest_url() ),
			'currentUser' => get_current_user_id(),
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
		$tmpScript .= 'ActionAppCore.apiCallOptions = ActionAppCore.apiCallOptions || {};
			ActionAppCore.apiCallOptions.filterOptions = function(theOptions){
			var tmpOptions = theOptions || {};
			if( ActionAppCore.ActAppWP && ActionAppCore.ActAppWP.nonce ){
				tmpOptions.beforeSend = function ( xhr ) {
					xhr.setRequestHeader( "X-WP-Nonce", ActionAppCore.ActAppWP.nonce );
				}
			}
			return tmpOptions;
		};';
		$tmpScript .= 'ActionAppCore.ActAppWP.nonceCheck = function(){
			var dfd = $.Deferred();
			tmpSuccess = function (theResponse) {
				ActionAppCore.ActAppWP.nonce = theResponse;
				dfd.resolve(true);
			}
			tmpError = function (theError) {
				dfd.resolve(false)
			}
			var tmpURL = this.rootPath + "/wp-admin/admin-ajax.php?action=rest-nonce";
			$.ajax({url:tmpURL}).then(tmpSuccess, tmpError);
			return dfd.promise();
		};';
		$tmpScript .= 'ActionAppCore.ActAppWP.heartBeat = function(){
			var dfd = $.Deferred();
			var tmpPayload = {
				"interval": 0,
				"_nonce": ActionAppCore.ActAppWP.nonce,
				"action": "heartbeat",
				"screen_id": "custom",
				"has_focus": true
			}
			ActionAppCore.apiCall({url: ActionAppCore.ActAppWP.rootPath + "/wp-admin/admin-ajax.php", data:tmpPayload, formSubmit: true}).then(function(theReply){
				if(theReply["wp-auth-check"] === false){
					dfd.resolve(false);
				} else {
					var tmpCurrN = theReply.rest_nonce || "";
					if( tmpCurrN && tmpCurrN != ActionAppCore.ActAppWP.nonce ){
						ActionAppCore.ActAppWP.nonce = tmpCurrN;
						ThisApp.delay(1).then(function(){
							dfd.resolve(true);
						})
					} else {
						dfd.resolve(true);
					}
				}
			})
			return dfd.promise();
		};';
		$tmpScript .= 'ActionAppCore.apiCallOptions = ActionAppCore.apiCallOptions || {};
		ActionAppCore.apiCallOptions.onBeforeRun = function(){
			var dfd = $.Deferred();
			if( ActionAppCore.apiCallOptions.onBeforeRunLastTime && (Date.now() < ActionAppCore.apiCallOptions.onBeforeRunLastTime) ){
				dfd.resolve(true);
				return dfd.promise();
			}
			//--- Do this if the last call was over this many seconds
			var tmpNextCheck = new Date(Date.now() + (1000*30) ); 
			ActionAppCore.apiCallOptions.onBeforeRunLastTime = tmpNextCheck;
			ActionAppCore.ActAppWP.heartBeat().then(function(theIsValid){
				if(theIsValid){
					dfd.resolve(true);
				} else {
					//--- Show dialog to log in, once logged in then resolve true;
					ActionAppCore.apiFailAction().then(function(theReply){
						dfd.resolve(theReply);
					})
				}
			})
			return dfd.promise();
		};';
		$tmpScript .= 'ActionAppCore.apiFailAction = function(){
			var dfd = $.Deferred();
			ActionAppCore.ActAppWP.nonceCheck().then(function(theIsNowValid){
				if( theIsNowValid ){
					dfd.resolve(true);
					return dfd.promise();
				} else {
					ThisApp.loadSpot("flyover-menu", "<center><iframe appuse=\"flyoverlogin\" style=\"height:100%;margin:auto;min-height:450px;width:100%;max-width:450px;\"></iframe></center>");

					var tmpFrame = ThisApp.getByAttr$({appuse:"flyoverlogin"});
				
					if( tmpFrame && tmpFrame.length == 1 ){
						tmpFrame = tmpFrame.get(0);
					} else {
						alert("Sign in again please","Log-in expired or failed");
						window.location = window.location;
						dfd.resolve(false);
						return dfd.promise();
					}
					function tmpOnLoginLoad(){
						var tmpNewNonce = "";
						var tmpNewUser = "";
						var tmpFrame = this;
						if( tmpFrame.contentWindow && tmpFrame.contentWindow.ActionAppCore && tmpFrame.contentWindow.ActionAppCore.ActAppWP && tmpFrame.contentWindow.ActionAppCore.ActAppWP ){
							var tmpWPInfo = tmpFrame.contentWindow.ActionAppCore.ActAppWP;
							tmpNewNonce = tmpWPInfo.nonce
							tmpNewUser = tmpWPInfo.currentUser
						}
						if( this._loadedOnce ){
							//alert("refresh now");
							//--- Refreshed page, assuming logged in - check
							
							if( tmpNewNonce ){
								window.ActionAppCore.ActAppWP.nonce = tmpNewNonce;
								ThisApp.clearFlyover();
								dfd.resolve(true);
							} else {
								//---  Do nothing, log-in failed?
								
								// or ...
								alert("Sign in again please","Log-in expired or failed");
								window.location = window.location;
								dfd.resolve(false);
							}
						} else {
							this._loadedOnce = true;
							if( (tmpNewUser > 0) && tmpNewNonce && window.ActionAppCore.ActAppWP.nonce != tmpNewNonce ){
								window.ActionAppCore.ActAppWP.nonce = tmpNewNonce;
								ThisApp.clearFlyover();
								dfd.resolve(true);
								return;
							};
							ThisApp.fullScreenFlyover();
						}
					}
					
				
					tmpFrame.onload = tmpOnLoginLoad.bind(tmpFrame);
					tmpFrame.src = ActionAppCore.ActAppWP.rootPath + "/actappdesign/login/";
			}

			})
			return dfd.promise();
		}
		';
		
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

	/**
	 * post_exists_by_slug.
	 *
	 * @return mixed boolean false if no post exists; post ID otherwise.
	 */
	public static function post_exists_by_uid( $post_uid ) {
		//--- Start with blank query
		$tmpQuery = array();

		//--- If getting a doc type then add to the query
		array_push($tmpQuery, array(
			'key'     => '__uid',
			'value'   => $post_uid,
			'compare' => '=',
			)
		);

		$args_posts = array(
			'post_type' => array('any'),
			'post_status' => array('any','trash'),
			'posts_per_page' => -1,
			'meta_query' => $tmpQuery
		);
		
		$loop_posts = new WP_Query( $args_posts );
		if ( ! $loop_posts->have_posts() ) {
			return false;
		} else {
			if( $loop_posts->found_posts != 1){
				return false;
			}
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
