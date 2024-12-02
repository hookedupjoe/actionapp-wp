<?php
/**
 * Server Side Designer Functionality: ActAppDesigner
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

class ActAppDesigner {
	private static $instance;

	public static function get_instance() {
		if ( null == self::$instance ) {
			self::$instance = new ActAppDesigner();
		}
		return self::$instance;
	}

	public static function getDataVersion(){
		return ACTIONAPP_WP_CORE_VERSION;
	}

	public static function actapp_block_category( $categories, $post ) {
		return array_merge(
			array(
				array(
					'slug' => 'actappdesign',
					'title' => __( 'Designer Widgets'),
				),
			),
			$categories
		);
	}

	
	public static function loadStandardBlock($theName, $theFileName = '', $theDependencies = null){
		$tmpDepDefaults = array('wp-blocks','wp-editor','wp-element');
		//$tmpDeps = array_combine($tmpDepDefaults, $theDependencies);
		$tmpFN = $theFileName;
		if( $tmpFN == ''){
			$tmpFN = $theName;
		}
		wp_enqueue_script(
			$theName, 
			ACTIONAPP_WP_URL . '/blocks/actappdesign/' . $tmpFN . '.js',
			$tmpDepDefaults,
			true
		);
		wp_enqueue_style ( 'act-app-designer_css' );
	}

	public static function activation_hook() {
		self::init();
		flush_rewrite_rules(); 
		self::plugin_initialize();
	}

	public static function override_tpl($template){
		$post = get_post();
		$pagename = isset($post->post_name) ? $post->post_name : '';
		//$current_user = wp_get_current_user();

		$tmpIsDeveloperView = '';
		if( isset($_GET['devonlyview'] )){
				$tmpIsDeveloperView = $_GET['devonlyview'];
		}
		if( $tmpIsDeveloperView == 'fields' && current_user_can('actappdesign') ){
			$template = ACTIONAPP_WP_DIR . '/tpl/actappdesigndoc.php';
			return $template;
		}
		
		$post_types = array( 'actappdesign' );
		if ( is_singular( $post_types ) && $pagename != '' && file_exists( ACTIONAPP_WP_DIR . '/tpl/designer-'.$pagename.'.php' ) ){
			$template = ACTIONAPP_WP_DIR . '/tpl/designer-'.$pagename.'.php';
			return $template;
		}
		if ( is_singular( $post_types ) && file_exists( ACTIONAPP_WP_DIR . '/tpl/designer.php' ) ){
			$template = ACTIONAPP_WP_DIR . '/tpl/designer.php';
			return $template;
		}

		$post_types = array( 'actappdoc' );
		if ( is_singular( $post_types ) && file_exists( ACTIONAPP_WP_DIR . '/tpl/actappdoc.php' ) ){
			$template = ACTIONAPP_WP_DIR . '/tpl/actappdoc.php';
			return $template;
		}

		$post_types = array( 'actappdesigndoc');
		if ( is_singular( $post_types ) && file_exists( ACTIONAPP_WP_DIR . '/tpl/actappdesigndoc.php' ) ){
			$template = ACTIONAPP_WP_DIR . '/tpl/actappdesigndoc.php';
			return $template;
		}
		$post_types = array( 'actappelem' );
		if ( is_singular( $post_types ) && file_exists( ACTIONAPP_WP_DIR . '/tpl/actappdoc.php' ) ){
			$template = ACTIONAPP_WP_DIR . '/tpl/actappelem.php';
			return $template;
		}

		
		return $template;
	}
	
	public static function getAppOnlyFooter(){
		echo '<script src="'.self::baseURL().'/core/lib/actionapp/app-only-init.js?ver=1.0.9" id="app-only-init-js"></script>';
	}

	public static function getRootPost(){
		$tmpMainID = self::getRootPostID();
		if( $tmpMainID ){
			$tmpMainPost = get_post($tmpMainID);
			if( $tmpMainPost ){
				return $tmpMainPost;
			}
		}
		return false;
	}
	public static function getRootPostID(){
		$post_type = 'actappdesign';
		$slug = 'welcome';
		$title = 'Welcome';
		$content = 'welcome';
		$tmpMainID = ActAppCommon::post_exists_by_slug($slug, $post_type, $title, $content);
		if( $tmpMainID ){
			return $tmpMainID;
		}
		return false;
	}
	
	public static function getSUID(){
		$tmpRet = false;
		$tmpMainID = self::getRootPostID();
		if( $tmpMainID ){
			$tmpRet = '' . get_post_meta( $tmpMainID, 'storeid', true);
			if( $tmpRet == ''){
				self::create_storeid($tmpMainID);
				$tmpRet = '' . get_post_meta( $tmpMainID, 'storeid', true);
			}
			if( $tmpRet == ''){
				throw new ErrorException("Could not save created store ID, contact support");
			}
		}
		return $tmpRet;
	}

	public static function getPluginSetupVersion(){
		$tmpVersion = 0;
		$tmpMainID = self::getRootPostID();
		if( $tmpMainID ){
			$tmpVersion = get_post_meta( $tmpMainID, 'version', true);
		}
		return $tmpVersion;
	}
	 
	

	public static function assure_plugin_initialized() {
		$tmpVersion = self::getPluginSetupVersion();
		if( $tmpVersion != self::getDataVersion() ){
			flush_rewrite_rules();
			return self::plugin_initialize();
		}
		return false;
	}

	public static function setOnLoad() {
		$slug = 'welcome';
		$tmpMainID = ActAppCommon::post_exists_by_slug($slug, 'actappdesign');
		//--- Use new var for assuring other docs to return false if not created
		update_post_meta( $tmpMainID, 'access', 'yes' );

	}


	public static function getOnLoad() {
		$slug = 'welcome';
		$tmpMainID = ActAppCommon::post_exists_by_slug($slug, 'actappdesign');
		//--- Use new var for assuring other docs to return false if not created
		return get_post_meta( $tmpMainID, 'access', true );

	}

	
	static function create_storeid($thePostID) {
		$tmpStoreID = uniqid('' . random_int(1000, 9999));
		update_post_meta( $thePostID, 'storeid', $tmpStoreID);
	}

	public static function plugin_initialize() {
		$post_type = 'actappdesign';

		$slug = 'welcome';
        $title = 'Designer Home Page';
        $content = 'Internal Use';

		$tmpMainID = ActAppCommon::assure_doc($slug, $post_type, $title, $content);
		
		$tmpMainID = ActAppCommon::post_exists_by_slug($slug, $post_type);
		if( !($tmpMainID)){
			throw new ErrorException("Could not create main entry point for designer, contact support");
		}
		$tmpSourceID = self::getSUID();

		$tmpVersion = get_post_meta( $tmpMainID, 'version', true ); 
		if( $tmpVersion != self::getDataVersion() ){
			//--- Use new var for assuring other docs to return false if not created
			update_post_meta( $tmpMainID, 'version', self::getDataVersion() );
			update_post_meta( $tmpMainID, 'hidden', 1 );
		}

		$slug = 'dashboard';
        $title = 'Developer Console';
        $content = 'Internal Use';
		ActAppCommon::assure_no_doc($slug, $post_type);
		$tmpNewDoc = ActAppCommon::assure_doc($slug, $post_type, $title, $content);
	
		$slug = 'resources';
        $title = 'Data Dashboard';
        $content = 'Internal Use';
		ActAppCommon::assure_no_doc($slug, $post_type);
		//$tmpNewDoc = ActAppCommon::assure_doc($slug, $post_type, $title, $content);

		$slug = 'appconsole';
        $title = 'Applications Console';
        $content = 'Internal Use';
		ActAppCommon::assure_no_doc($slug, $post_type);
		//$tmpNewDoc = ActAppCommon::assure_doc($slug, $post_type, $title, $content);

		//--- ToDo: Change to use internal call to build form to support external login types
		$slug = 'login';
        $title = 'Log In Form';
        $content = 'Internal Use';
		$tmpNewDoc = ActAppCommon::assure_doc($slug, $post_type, $title, $content);
		update_post_meta( $tmpNewDoc, 'hidden', 1 );

		return $tmpMainID;
	}


	

	public static function actapp_init_blocks_content($theHook) {
		$tmpConfig = array(
			'baseURL'=>self::baseURL(),
			'catalogURL'=>self::baseURL() . '/catalog'
		);
		$tmpJson = json_encode($tmpConfig);
		$tmpScript = 'window.ActionAppCore.DesignerConfig = ' . $tmpJson . ';';
		$tmpScript .= 'ActionAppCore.dir.catalogs._designer = "' . self::baseURL() . '/catalog/' . '";';
		$tmpScript .= 'window.ActionAppCore.addSources('. json_encode(ActAppDesigner::get_sources()) .')';
		
		//ActAppCommon::setup_scripts($theHook);
		wp_add_inline_script( 'app-only-preinit', $tmpScript );


		//--- Load the action app core components and ActionAppCore.common.blocks add on
		wp_enqueue_script(
			'actapp-designer', 
			ACTIONAPP_WP_URL . '/js/DesignerDashboard.js',
			array(),
			true
		);
	}

	public static function actapp_init_admin_scripts(){
		// wp_register_style( 'aa-core-admin_css',   ACTIONAPP_WP_URL . '/css/wp-admin.css', false,  $my_css_ver );
		// wp_enqueue_style ( 'aa-core-admin_css' );
	}
	
	public static function actapp_init_blocks($theHook) {
		$my_css_ver = '1'; //todo
		wp_register_style( 'act-app-designer_css',   ACTIONAPP_WP_URL . '/css/designer.css', false,  $my_css_ver );
		//--- Load the action app core components and ActionAppCore.common.blocks add on
		wp_enqueue_script(
			'actapp-core-blocks', 
			ACTIONAPP_WP_URL . '/js/DesignerDashboard.js',
			array('wp-blocks','wp-editor','wp-element'),
			true
		);
		if ( get_post_type( get_the_ID() ) == 'actappelem' ) {
			//--- Load standardly created widgets;
			$tmpWidgetList = array('controlspot', 'ActAppDesignElement','fieldlist','field');
			foreach ($tmpWidgetList as $aName) {
				self::loadStandardBlock($aName);
			}
			
		}

			
	}
	
	public static function get_sources($theOptionalName = '') {
		//--- Static function returns designer + saved CPT details
		$tmpRet = array (
			'capacities' => array('actappapps','actappdesigner')
		);
		if( $theOptionalName != ''){
			return $tmpRet[$theOptionalName];
		}

		return $tmpRet;
	}

	public static function setup_sources() {
		//--- Add sources available when designer is active
		//ToDo: 
		

	}
	public static function setup_access() {
		//--- Give all editors access to the applications interface (see see "my apps")
		$role = get_role( 'editor' );
  		$role->add_cap( 'actappapps' );

	    $role = get_role( 'administrator' );
  		$role->add_cap( 'actappapps' );
  		$role->add_cap( 'actappdesign' );
	}

	public static function init() {
		self::assure_plugin_initialized();
		self::setup_data();
		self::setup_access();
		self::setup_sources();
  
		add_filter('block_categories',  array('ActAppDesigner','actapp_block_category'), 10, 2);

		add_action('wp_enqueue_scripts',  array('ActAppDesigner','actapp_init_blocks_content'),20,2);

		add_action('admin_enqueue_scripts',  array('ActAppDesigner','actapp_init_blocks_content'),20,2);
		add_action('admin_enqueue_scripts',  array('ActAppDesigner','actapp_init_admin_scripts'),20);

		add_action('wp_enqueue_style',  array('ActAppDesigner','actapp_init_blocks_content'),11,2);
		add_action('wp_enqueue_style',  array('ActAppDesigner','actapp_init_blocks'),11,2);



	}

	
	public static function setup_data() {
		self::custom_post_designer_access();
		self::custom_post_actapp_doc();
		self::custom_post_design_element();
		self::custom_post_design_doc();
	}

	private static function custom_post_actapp_doc() {

		$labels = array(
		'name'               => __( 'ActApp Docs' ),
		'singular_name'      => __( 'ActApp Doc' ),
		'add_new'            => __( 'Add New ActApp Doc' ),
		'add_new_item'       => __( 'Add New ActApp Doc' ),
		'edit_item'          => __( 'Edit ActApp Doc' ),
		'new_item'           => __( 'New ActApp Doc' ),
		'all_items'          => __( 'All ActApp Docs' ),
		'view_item'          => __( 'View ActApp Doc' ),
		'search_items'       => __( 'Search ActApp Doc' )
		);

		$args = array(
		'labels'            => $labels,
		'description'       => 'Holds general data managed by the ActApp model',
		'public'            => false,
		'menu_position'     => 21,
		'show_in_rest'      => false,
		'supports'          => array( 'title', 'editor', 'custom-fields' , 'excerpt' ),
		'has_archive'       => false,
		'show_in_admin_bar' => false,
		'show_in_nav_menus' => false,
		'query_var'         => true,
		'capabilities' => array(
			'edit_post' => 'actappdesign',
			'edit_posts' => 'actappdesign',
			'edit_others_posts' => 'actappdesign',
			'publish_posts' => 'actappdesign',
			'read_post' => 'actappdesign',
			'read_private_posts' => 'actappdesign',
			'delete_post' => 'actappdesign'
			),
		);

		register_post_type( 'actappdoc', $args);

	}

	private static function custom_post_design_element() {

		$labels = array(
		'name'               => __( 'Design Elements' ),
		'singular_name'      => __( 'Design Element' ),
		'add_new'            => __( 'Add New Design Element' ),
		'add_new_item'       => __( 'Add New Design Element' ),
		'edit_item'          => __( 'Edit Design Element' ),
		'new_item'           => __( 'New Design Element' ),
		'all_items'          => __( 'All Design Elements' ),
		'view_item'          => __( 'View Design Element' ),
		'search_items'       => __( 'Search Design Element' )
		);

		$args = array(
		'labels'            => $labels,
		'description'       => 'Holds general data managed by the ActApp model',
		'public'            => true,
		'menu_position'     => 22,
		'show_in_rest'      => true,
		'supports'          => array( 'title', 'editor', 'custom-fields' ),
		'has_archive'       => false,
		'show_in_admin_bar' => true,
		'show_in_nav_menus' => false,
		'query_var'         => true,
		'capabilities' => array(
			'edit_post' => 'actappdesign',
			'edit_posts' => 'actappdesign',
			'edit_others_posts' => 'actappdesign',
			'publish_posts' => 'actappdesign',
			'read_post' => 'actappdesign',
			'read_private_posts' => 'actappdesign',
			'delete_post' => 'actappdesign'
			),
		);

		register_post_type( 'actappelem', $args);
	}

	private static function custom_post_designer_access() {

		$labels = array(
		'name'               => __( 'Designer Access Points' ),
		'singular_name'      => __( 'Designer Access Point' ),
		'add_new'            => __( 'Add New Designer Access Point' ),
		'add_new_item'       => __( 'Add New Designer Access Point' ),
		'edit_item'          => __( 'Edit Designer Access Point' ),
		'new_item'           => __( 'New Designer Access Point' ),
		'all_items'          => __( 'All Designer Access Points' ),
		'view_item'          => __( 'View Designer Access Point' ),
		'search_items'       => __( 'Search Designer Access Point' )
		);

		$args = array(
		'labels'            => $labels,
		'description'       => 'Used to provide access entrypoints into the designer',
		'public'            => true,
		'menu_position'     => 23,
		'show_in_rest'      => false,
		'supports'          => array( 'title', 'editor', 'custom-fields', 'excerpt' ),
		'has_archive'       => false,
		'show_in_admin_bar' => false,
		'show_in_nav_menus' => false,
		'query_var'         => true,
		'capabilities' => array(
			'edit_post' => 'actappdesign',
			'edit_posts' => 'actappdesign',
			'edit_others_posts' => 'actappdesign',
			'publish_posts' => 'actappdesign',
			'read_post' => 'actappdesign',
			'read_private_posts' => 'actappdesign',
			'delete_post' => 'actappdesign'
			),
		);

		register_post_type( 'actappdesign', $args);
		register_post_meta( 'actappdesign', 'designobj', [
			'auth_callback' => function() {
				return current_user_can('edit_posts');
			},
			'show_in_rest'      => true,
			'single'            => true,
			'type'              => 'string',
		]);
	}


	private static function custom_post_design_doc() {

		$labels = array(
		'name'               => __( 'Designer Docs' ),
		'singular_name'      => __( 'Designer Doc' ),
		'add_new'            => __( 'Add New Designer Doc' ),
		'add_new_item'       => __( 'Add New Designer Doc' ),
		'edit_item'          => __( 'Edit Designer Doc' ),
		'new_item'           => __( 'New Designer Doc' ),
		'all_items'          => __( 'All Designer Docs' ),
		'view_item'          => __( 'View Designer Doc' ),
		'search_items'       => __( 'Search Designer Doc' )
		);

		$args = array(
		'labels'            => $labels,
		'description'       => 'Holds design related details, managed by development team only',
		'public'            => false,
		'menu_position'     => 22,
		'show_in_rest'      => false,
		'supports'          => array( 'title', 'editor', 'custom-fields' ),
		'has_archive'       => false,
		'show_in_admin_bar' => false,
		'show_in_nav_menus' => false,
		'query_var'         => true,
		'capabilities' => array(
			'edit_post' => 'actappdesign',
			'edit_posts' => 'actappdesign',
			'edit_others_posts' => 'actappdesign',
			'publish_posts' => 'actappdesign',
			'read_post' => 'actappdesign',
			'read_private_posts' => 'actappdesign',
			'delete_post' => 'actappdesign'
			),
		);

		register_post_type( 'actappdesigndoc', $args);


		//--- Register custom meta used by custom block items
		$tmpMetaDetails = [
			'auth_callback' => function() {
				return current_user_can('actappapps');
			},
			'sanitize_callback' => 'sanitize_text_field',
			'show_in_rest'      => true,
			'single'            => true,
			'type'              => 'string',
		];
		$tmpMetaDetailsDev = [
			'auth_callback' => function() {
				return current_user_can('actappapps');
			},
			'sanitize_callback' => '',
			'show_in_rest'      => true,
			'single'            => true,
			'type'              => 'string',
		];

		//--- Common meta items to expose to design time block editors, potentially used in any post type.
		//-> __doctype - Name of the related doctype for this post
		//-> __design_app - Name of the related application
		//-> __design_props - JSON string for post properties (field / value pairs of related data)
		//-> __design_source - The source text for this design element to be used when viewed.  Couild be JSON or HTML.
		//-> __design_setup - JSON string that is the setup object passed into a setup function of the main object on load if this param exists
		
		//$tmpCustomMetaFields = ['__design_props','__design_app','__design_setup','__design_source','__doctype','__doctitle'];
		//--- Text fields
		$tmpCustomMetaFields = ['__design_app','__doctype'];
		//--- Designer Element Only Fields (actappdesign capability required to save)
		$tmpCustomMetaFieldsDev = ['__design_props','__design_setup','__design_source'];
		//--- Register all used meta fields designed for block update use
		foreach ($tmpCustomMetaFields as $iFN) {
			register_post_meta( '', $iFN, $tmpMetaDetails);
		}
		foreach ($tmpCustomMetaFieldsDev as $iFN) {
			register_post_meta( '', $iFN, $tmpMetaDetailsDev);
		}	
		
	}
	
	public static function baseDir() {
		return ACTIONAPP_WP_DIR;
	}
	public static function baseURL() {
		return ACTIONAPP_WP_URL;
	}


	public static function getIconForType($theType){
		if( $theType == 'Control'){
			return 'newspaper';
		} else if( $theType == 'Panel'){
			return 'newspaper outline';
		} else if( $theType == 'Template'){
			return 'object group outline';
		} else if( $theType == 'HTML'){
			return 'code';
		}
		return 'question';
	}


	//---- Admin Settings
	public static function showApplications(){
		//esc_html_e( 'showDesigner', 'textdomain' );
		include(ACTIONAPP_WP_DIR . '/tpl/designer-apps.php');
	}
	public static function showDesigner(){
		//esc_html_e( 'showDesigner', 'textdomain' );
		include(ACTIONAPP_WP_DIR . '/tpl/designer-ui.php');
	}

	public static function getSystemLoader(){
		$pagePath = explode('/wp-content/', ABSPATH);
		
		$path = (str_replace('wp-content/' , '', $pagePath[0] . 'wp-load.php'));
		return ($path);
	}

	public static function foobar_handler(){
		$tmpID = get_current_user_id();
		echo 'you are ' . $tmpID;
		//-> always die
		wp_die();
	}
	
	public static function registerMenus(){
		// if( !current_user_can('editor')){
		// 	remove_menu_page( 'index.php' );
		// 	remove_menu_page( 'tools.php' );
		// }
		 //remove_menu_page( 'edit.php?post_type=actappelem' );
		 remove_menu_page( 'edit.php?post_type=actappdesign' );
		 remove_menu_page( 'edit.php?post_type=actappdoc' );
		 remove_menu_page( 'edit.php?post_type=actappdesigndoc' );
		
		// //--- Adds "Applications" tab for those with the 'actappapps' capability (cap)
		// add_menu_page( 
		// 	__( 'My Applications'),
		// 	'Applications',
		// 	'actappapps',
		// 	'actapps',
		// 	array( 'ActAppDesigner', 'showApplications' ),
		// 	'dashicons-list-view',
		// 	70
		// ); 
		
		$tmpIcon = 'data:image/svg+xml;base64,' . base64_encode('<svg xmlns="http://www.w3.org/2000/svg"><path fill="black" d="M 8.0329169,26.38454 C 4.6147035,25.61982 1.9974867,23.404256 0.79068313,20.253709 -1.3059767,14.779879 1.7977885,8.7404093 7.504931,7.1887553 c 1.1763106,-0.3196634 3.707419,-0.3196634 4.883699,0 3.467979,0.9428714 6.108377,3.5905237 7.077594,7.0970007 0.327147,1.183534 0.327147,3.707756 0,4.89129 -0.962895,3.483654 -3.605453,6.14844 -7.011616,7.070622 -1.127196,0.305102 -3.3604379,0.374284 -4.4216911,0.136804 z m 4.1696141,-0.598454 c 2.013199,-0.511292 3.712192,-1.606681 5.026659,-3.240824 2.696703,-3.352571 2.707798,-8.242168 0.02777,-11.601512 -3.747805,-4.6952249 -10.8344381,-4.7221119 -14.5708967,-0.0552 -2.71806637,3.394798 -2.73748997,8.259336 -0.046561,11.630634 2.2937641,2.873583 6.0550107,4.158366 9.5644307,3.267067 z M 4.1482219,22.99743 C 3.5890955,22.331927 2.7843936,20.521257 2.4796873,19.243146 2.1065651,17.677947 2.1704199,15.244035 2.6218089,13.823057 2.9899027,12.66448 3.858334,10.919504 4.2740961,10.503129 c 0.3363238,-0.336933 0.9869134,-0.431037 0.9869134,-0.1429 0,0.09482 -0.2022618,0.674916 -0.4490934,1.288914 -0.2469602,0.613963 -0.5810457,1.73414 -0.7422962,2.489277 -0.2500418,1.170191 -0.2830239,1.638714 -0.2247463,3.172726 0.07338,1.932576 0.3083193,3.045268 1.0229262,4.847066 0.21645,0.545357 0.3932839,1.049505 0.3932839,1.120312 0,0.07077 -0.1729705,0.129016 -0.384253,0.129016 -0.2676163,0 -0.4887055,-0.124276 -0.7286054,-0.409907 z m 10.3522661,0.367477 c 0,-0.0237 0.232771,-0.662828 0.517227,-1.421114 0.740601,-1.974193 0.968753,-3.191723 0.964344,-5.146275 -0.0031,-1.892957 -0.19454,-2.924649 -0.89118,-4.832775 -0.689575,-1.888757 -0.671106,-1.777078 -0.293521,-1.777078 0.54747,0 1.000262,0.493853 1.61689,1.763397 0.849837,1.749785 1.14659,2.99681 1.15328,4.846456 0.0061,1.874771 -0.227522,2.892954 -1.084495,4.710463 -0.72469,1.537127 -1.02724,1.899356 -1.586461,1.899356 -0.21767,0 -0.396,-0.01693 -0.396,-0.04267 z M 7.5846609,20.331594 C 6.3355898,19.614348 6.2318108,17.64361 7.4027509,16.875233 7.5710819,16.764501 8.4798433,16.478871 9.4218991,16.240139 l 1.7128719,-0.43412 -0.01862,-0.521484 c -0.02472,-0.717448 -0.392024,-0.998779 -1.3070709,-0.998779 -0.762645,0 -1.280675,0.308827 -1.6373949,0.976464 C 7.9305808,15.713541 7.567607,15.81225 7.1521227,15.539554 6.8663215,15.351956 6.824806,15.246981 6.8863685,14.866365 6.9924261,14.211088 7.4185196,13.689773 8.1314645,13.342681 8.9810851,12.929083 10.866795,12.905549 11.652815,13.299 c 1.030938,0.515762 1.25456,1.159084 1.259273,3.622931 0.0016,0.904471 0.07399,1.987703 0.160306,2.407227 0.141817,0.688022 0.133486,0.789136 -0.08632,1.032472 -0.372194,0.411906 -0.787929,0.337272 -1.25009,-0.22417 -0.381601,-0.463682 -0.42461,-0.482171 -0.702558,-0.301717 -1.3514629,0.876366 -2.5003042,1.041582 -3.4501275,0.496224 z m 2.7045011,-1.094848 c 0.564526,-0.292235 0.910453,-0.92997 0.911038,-1.679114 3.39e-4,-0.416204 -0.0552,-0.626831 -0.164335,-0.624732 -0.469347,0.01016 -2.423903,0.673529 -2.5698912,0.873521 -0.2592869,0.355152 -0.2031768,0.986521 0.1180785,1.329041 0.3438618,0.366563 1.1056428,0.411804 1.7052867,0.10125 z"/></svg>');

		//--- Demo of how to add a page on the left panel.  		
		add_menu_page( 
			__( 'Action App'),
			'Action App',
			'actappdesign',
			'actappdesigner',
			array( 'ActAppDesigner', 'showDesigner' ),
			$tmpIcon,
			90
		); 




	}

	//--- Return the current post as a "document" array
	public static function get_post_as_doc($theOptionalID = null, $theFields = null, $theIncludePostFields = null){
		global $post;
		if( $theOptionalID != null){
			$post = get_post($theOptionalID);
		}
		$tmpID = get_the_ID();
		$tmpMeta = get_post_meta($tmpID);
		$tmpDocPostType = get_post_type();

		if( $theFields == '(none)' ){
			$tmpJson = array();
			
			$tmpDocType = $tmpMeta['__doctype'];
			if( is_array($tmpDocType) && count($tmpDocType) == 1){
				$tmpJson['__doctype'] = $tmpDocType[0];
			} else {
				$tmpJson['__doctype'] = $tmpDocPostType;
			}
			
		} else {
			if( $theFields == null || $theFields == '(all)' || $theFields == '(export)'){
				$tmpJson = $tmpMeta;
				
				
			} else {
				$tmpFieldList = explode(',',$theFields);
				$tmpJson = array();
				foreach ($tmpFieldList as $iFieldName) {
					$tmpJson[$iFieldName] = array();
					array_push($tmpJson[$iFieldName], $tmpMeta[$iFieldName]);
				}
			}
			if( is_array($tmpJson)){
				foreach($tmpJson as $iField => $iVal) {
					if( count($iVal) == 1){
						$tmpVal = $iVal[0];
						$tmpJson[$iField] = maybe_unserialize($tmpVal);
					}
				}
			}
		}
		if($theFields == '(export)'){
			unset($tmpJson['_edit_lock']);
		}
		if( $theIncludePostFields == true){
			$tmpPostFields = array('post_author','post_date','post_date_gmt','post_content','post_title','post_excerpt','post_status','comment_status','ping_status','post_password','post_name','to_ping','pinged','post_modified','post_modified_gmt','post_content_filtered','post_parent','guid','menu_order','post_type','post_mime_type','comment_count');
			foreach ($tmpPostFields as $iFieldName) {
				$tmpExportFN = '___'.$iFieldName;
				$tmpJson[$tmpExportFN] = get_post_field($iFieldName);
			}
		}
		$tmpJson['id'] = $tmpID;
		$tmpJson['__posttype'] = $tmpDocPostType;
		$tmpJson['__doctitle'] = get_the_title();
		$tmpJson['__url'] = get_post_permalink();
		//---> Use this for no leading zeros: get_the_date('n/j/Y');
		$tmpJson['__postdate'] = get_the_date('m/d/Y'); 
		return $tmpJson;
	}

	//--- Return the current post as a "document" array
	public static function load_meta_to_doc($theMeta, $theDoc, $theFields = null, $theIncludePostFields = null){
		
		$tmpMeta = $theMeta;
		$tmpJson =$theDoc;
		$tmpID = $theDoc->ID;

		if( $theFields == '(none)' ){
			
			$tmpJson['__doctype'] = '';
			$tmpDocType = $tmpMeta['__doctype'];
			if( is_array($tmpDocType) && count($tmpDocType) == 1){
				$tmpJson['__doctype'] = $tmpDocType[0];
			}
			
		} else {
			if( $theFields == null || $theFields == '(all)' || $theFields == '(export)'){
				$tmpJson = $tmpMeta;
				
				
			} else {
				$tmpFieldList = explode(',',$theFields);
				$tmpJson = array();
				foreach ($tmpFieldList as $iFieldName) {
					$tmpJson[$iFieldName] = array();
					array_push($tmpJson[$iFieldName], $tmpMeta[$iFieldName]);
				}
			}
			if( is_array($tmpJson)){
				foreach($tmpJson as $iField => $iVal) {
					if( count($iVal) == 1){
						$tmpVal = $iVal[0];
						$tmpJson[$iField] = maybe_unserialize($tmpVal);
					}
				}
			}
		}

		
		

		if($theFields == '(export)'){
			unset($tmpJson['_edit_lock']);
		}
		if( $theIncludePostFields == true){
			$tmpPostFields = array('post_author','post_date','post_date_gmt','post_content','post_title','post_excerpt','post_status','comment_status','ping_status','post_password','post_name','to_ping','pinged','post_modified','post_modified_gmt','post_content_filtered','post_parent','guid','menu_order','post_type','post_mime_type','comment_count');
			foreach ($tmpPostFields as $iFieldName) {
				$tmpExportFN = '___'.$iFieldName;
				$tmpJson[$tmpExportFN] = get_post_field($iFieldName);
			}
		}
		$tmpJson['id'] = $tmpID;
		
		return $tmpJson;
	}

	public static function load_doc_post(){
		while ( have_posts() ) :
			the_post();
			break;
		endwhile;
	}

	public static function get_code_bubble_start(){
		return '(function (ActionAppCore, $) {';
	}
	public static function get_code_bubble_end(){
		return '})(ActionAppCore, $);';
	}
	

	public static function get_app_loader_script(){
		//--- For cases where ActionAppCore may not be loaded yet, 
		//...   wait for ThisApp to load.
		//--- To Use: 
		/*
			function onThisAppLoaded(){
				//--- Use ThisApp
			}
			window.ActAppLoader.ready(onThisAppLoaded);
		*/
		return '
		window.ActAppLoader = {
			ready: function(callback) {
				var tmpMaxTimes = 100;
				var tmpThis = this;				
				if (typeof(ThisApp) == "object") {
					try{
						callback();
					} catch(ex){
						//--- Still return even if error
					}
					return;
				} else {
					tmpMaxTimes--;
					setTimeout(function () {
						tmpThis.ready(callback);
					}, 100);
				}
			}
		}
		';
	}



}


//--- Create stub documents when plugin initialized
register_activation_hook( __FILE__, array( 'ActAppDesigner', 'activation_hook' ) );

add_action( 'init', array( 'ActAppDesigner', 'init' ) );

add_action( 'admin_menu', array( 'ActAppDesigner', 'registerMenus' ) );
 
add_filter(
	'template_include',
	array( 'ActAppDesigner', 'override_tpl')
);


add_action( 'wp_ajax_foobar', array('ActAppDesigner','foobar_handler') );

//--- Just a demo, consider use case for server side dynamic ***
//require_once ACTIONAPP_WP_BLOCKS_DIR . '/blocks/actappdesign/ActAppDynamicDemo/Object.php';
//require_once ACTIONAPP_WP_BLOCKS_DIR . '/blocks/actappdesign/ActAppReportView/Object.php';

//--- This demo shows backend data based on the current user
//require_once ACTIONAPP_WP_BLOCKS_DIR . '/blocks/actappdesign/ActAppDynoUserInfo/Object.php';
