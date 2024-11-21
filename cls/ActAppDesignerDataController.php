<?php
/**
 * Server Side Designer Data Controller: ActAppDesignerDataController
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


class ActAppDesignerDataController extends WP_REST_Controller {
	private static $instance;
	public static function initInstance() {
		if ( null == self::$instance ) {
			self::$instance = new ActAppDesignerDataController();
			self::$instance->registerRoutes();
		}
		return self::$instance;
	}


	public function registerRoutes() {
	  $namespace = 'actappdesigner';

//=========== DEVELOPER / DEBUG APIs ===============

//--- Debug Route, plugin developer use only
	  $path = 'debug';
	  $routeInfo = array(
		'methods'             => 'GET',
		'callback'            => array( $this, 'get_debug' ),
		'permission_callback' => array( $this, 'get_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	  $path = 'devinfo';
	  $routeInfo = array(
		'methods'             => 'POST',
		'callback'            => array( $this, 'get_debug' ),
		'permission_callback' => array( $this, 'get_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     
	  
	  //--- To get demo data
	  $path = 'json_from_csv';
	  $routeInfo = array(
		'methods'             => 'GET',
		'callback'            => array( $this, 'get_json_from_csv' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	//--- To get csv file as json
	$path = 'json_from_csv_file';
	$routeInfo = array(
		'methods'             => 'GET',
		'callback'            => array( $this, 'get_json_from_csv_file' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	);
	register_rest_route( $namespace, '/' . $path, [$routeInfo]);     
	
	  

//=========== ADMIN MANAGEMENT APIs ===============
	  //--- Admin / Developer access to user data for user mgmt
	  $path = 'users';
	  $routeInfo = array(
		'methods'             => 'GET',
		'callback'            => array( $this, 'get_users' ),
		'permission_callback' => array( $this, 'get_users_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	  $path = 'saveuser';
	  $routeInfo = array(
		'methods'             => 'POST',
		'callback'            => array( $this, 'save_user' ),
		'permission_callback' => array( $this, 'get_users_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     


	  

//=========== DOCUMENT MANAGEMENT APIs ===============

	  //--- Developer/Admin user level access to data
	  $path = 'alldocs';
	  $routeInfo = array(
		'methods'             => 'GET',
		'callback'            => array( $this, 'get_all_docs' ),
		'permission_callback' => array( $this, 'get_design_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     


	  //--- Application user level access to data
	  //-   Any other selection params passed are ignored
	  $path = 'dataview';
	  $routeInfo = array(
		'methods'             => 'GET',
		'callback'            => array( $this, 'get_data_view' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     


	  $path = 'import-docs';
	  $routeInfo = array(
		'methods'             => 'POST',
		'callback'            => array( $this, 'import_docs' ),
		'permission_callback' => array( $this, 'get_users_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	  //--- Application user level access to save data
	  $path = 'savedoc';
	  $routeInfo = array(
		'methods'             => 'POST',
		'callback'            => array( $this, 'save_document' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	  //--- Designer user level access to save data
	  $path = 'savedesign';
	  $routeInfo = array(
		'methods'             => 'POST',
		'callback'            => array( $this, 'save_design' ),
		'permission_callback' => array( $this, 'get_design_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	  
	  $path = 'restore';
	  $routeInfo = array(
		'methods'             => 'POST',
		'callback'            => array( $this, 'restore_docs' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	  $path = 'recycle';
	  $routeInfo = array(
		'methods'             => 'POST',
		'callback'            => array( $this, 'recycle_docs' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     


//=========== DESIGNER RESOURCE APIs ===============

	  $path = 'create-catalog';
	  $routeInfo = array(
		'methods'             => 'POST',
		'callback'            => array( $this, 'create_catalog' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	  $path = 'update-catalog';
	  $routeInfo = array(
		'methods'             => 'POST',
		'callback'            => array( $this, 'update_catalog' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     
	  

	  $path = 'create-catalog-res';
	  $routeInfo = array(
		'methods'             => 'POST',
		'callback'            => array( $this, 'create_catalog_res' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     
	  
	  $path = 'save-catalog-res';
	  $routeInfo = array(
		'methods'             => 'POST',
		'callback'            => array( $this, 'save_catalog_res' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     
	  

	  
	  //--- Object APIs return objects used on the client side in designer.
	  
	  // Object API: Catalog Resource
	  $path = 'get-catalog-res.json';
	  $routeInfo = array(
		'methods'             => 'GET',
		'callback'            => array( $this, 'get_catalog_res' ),
		'permission_callback' => array( $this, 'get_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	  // Object API: Catalog Form
	  $path = 'get-catalog-form.json';
	  $routeInfo = array(
		'methods'             => 'GET',
		'callback'            => array( $this, 'get_catalog_form' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	  // Object API: Full Resources Outline
	  $path = 'get-ws-outline.json';
	  $routeInfo = array(
		'methods'             => 'GET',
		'callback'            => array( $this, 'get_ws_outline' ),
		'permission_callback' => array( $this, 'get_edit_permissions_check' )
	  );
	  register_rest_route( $namespace, '/' . $path, [$routeInfo]);     

	}

	
//=========== PERMISSION ===============

	public function get_permissions_check($request) {
		return true;
	}
	public function get_edit_permissions_check($request) {
		if( current_user_can('actappapps')){
			return true;
		}
		return false;
	}
	public function get_users_permissions_check($request) {
		if( current_user_can('actappdesign')){
			return true;
		}
		return false;
	}
	public function get_design_permissions_check($request) {
		if( current_user_can('actappdesign')){
			return true;
		}
		return false;
	}


//=========== DEV NOTES ===============

//--- A Sample Form Post of form data
// public function formpost($request) {
// 	//---> If using formSubmit = true then get field values like this
// 	$body = $request->get_body_params();
// 	$tmpActionName = $body['action'];

// 	$tmpRet = wp_json_encode(array(
// 		'request' => 'formpost',
// 		'action' => $tmpActionName,
// 		'body' => $body,
// 	));

// 	header('Content-Type: application/json');
// 	echo $tmpRet;
// 	exit();
// }	





//==========================================
//=========== IMPLEMENTATION ===============
//===========      AREA      ===============
//==========================================

	public function get_debug($request) {
		$tmpDebug = 'we are here';
		$tmpRet = array('debug'=>$tmpDebug);	
		return new WP_REST_Response($tmpRet, 200);
	}

	public function get_page_code($request) {
		$tmpRoot = ACTIONAPP_WP_DIR . '/apps/DevDesigner/app/catalog/designer/panels';
		$tmpRet = '{"status":true,"loc":"'.$tmpRoot.'","index":{"thisPageSpecs":"2","layoutOptions":"6","layoutConfig":"10","required":"14","_onPreInit":"18","_onInit":"22","_onFirstActivate":"26","_onFirstLoad":"30","_onActivate":"34","_onResizeLayout":"38","YourPageCode":"42"},"parts":["(function (ActionAppCore, $) {\r\n\r\n    var SiteMod = ActionAppCore.module(\"site\");\r\n\r\n    ","thisPageSpecs","\r\n\r\nvar thisPageSpecs = {\n\t\"pageName\": \"TestNew1\",\n\t\"pageTitle\": \"TestNew1\",\n\t\"navOptions\": {\n\t\t\"topLink\": true,\n\t\t\"sideLink\": true\n\t}\n}\r\n\r\n","thisPageSpecs~","\r\n\r\n    var pageBaseURL = \n"app/pages/\n" + thisPageSpecs.pageName + \n"/\n";\r\n\r\n    ","layoutOptions","\r\n    thisPageSpecs.layoutOptions = {\r\n        baseURL: pageBaseURL,\r\n        north: false,\r\n        east: { html: \n"east\n" },\r\n        west: false,\r\n        center: { html: \"center\" },\r\n        south: false\r\n    }\r\n    ","layoutOptions~","\r\n\r\n    ","layoutConfig","\r\n    thisPageSpecs.layoutConfig = {\r\n        west__size: \"500\"\r\n        , east__size: \"250\"\r\n    }\r\n\r\n    ","layoutConfig~","\r\n    ","required","\r\n    thisPageSpecs.required = {\r\n\r\n    }\r\n    ","required~","\r\n\r\n    var ThisPage = new SiteMod.SitePage(thisPageSpecs);\r\n\r\n    var actions = ThisPage.pageActions;\r\n\r\n    ThisPage._onPreInit = function (theApp) {\r\n        ","_onPreInit","\r\n\r\n        ","_onPreInit~","\r\n    }\r\n\r\n    ThisPage._onInit = function () {\r\n        ","_onInit","\r\n\r\n        ","_onInit~","\r\n    }\r\n\r\n\r\n    ThisPage._onFirstActivate = function (theApp) {\r\n        ","_onFirstActivate","\r\n\r\n        ","_onFirstActivate~","\r\n        ThisPage.initOnFirstLoad().then(\r\n            function () {\r\n                ","_onFirstLoad","\r\n\r\n                ","_onFirstLoad~","\r\n                ThisPage._onActivate();\r\n            }\r\n        );\r\n    }\r\n\r\n\r\n    ThisPage._onActivate = function () {\r\n        ","_onActivate","\r\n\r\n        ","_onActivate~","\r\n    }\r\n\r\n    ThisPage._onResizeLayout = function (thePane, theElement, theState, theOptions, theName) {\r\n        ","_onResizeLayout","\r\n\r\n        ","_onResizeLayout~","\r\n    }\r\n\r\n    //------- --------  --------  --------  --------  --------  --------  -------- \r\n    ","YourPageCode","\r\n\r\n\r\n    actions.loadASpot = loadASpot;\r\n    function loadASpot() {\r\n        ThisPage.loadSpot(\"funspot\", \"We are having fun now\")\r\n    };\r\n\r\n    actions.loadASpot = loadASpot;\r\n    function loadASpot() {\r\n        var tmpHTML = [];\r\n        tmpHTML.push(\n"<div class=\"ui-layout-center\">Center\n")\r\n        tmpHTML.push(\n"</div>\n")\r\n        tmpHTML.push(\n"<div class=\"ui-layout-north\">North</div>\n")\r\n        tmpHTML.push(\n"<div class=\"ui-layout-south\">South</div>\n")\r\n        tmpHTML.push(\n"<div class=\"ui-layout-east\">East</div>\n")\r\n        tmpHTML.push(\n"<div class=\"ui-layout-west\">West</div>\n")\r\n        tmpHTML = tmpHTML.join(\n"\n");\r\n\r\n        ThisPage.loadSpot(\"body\", tmpHTML);\r\n        var tmpBodySpot = ThisPage.getSpot(\"body\");\r\n        var tmpLayout = tmpBodySpot.layout();\r\n        console.log(\n"tmpLayout\n", tmpLayout);\r\n        if (typeof (ThisApp.refreshLayouts) == \n"function\n") {\r\n            ThisApp.refreshLayouts();\r\n        }\r\n        console.log(\n"tmpBodySpot\n", tmpBodySpot);\r\n\r\n\r\n    };\r\n    ","YourPageCode~","\r\n\r\n})(ActionAppCore, $);\r\n"]}';
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}

	public function get_page($request) {
		$tmpRet = '{"options":{"padding":false},"content":[{"ctl":"tbl-ol-node","type":"pages","name":"pages","item":"","details":".../pages","meta":"&#160;","classes":"ws-outline","level":3,"icon":"columns","color":"black","group":"workspace-outline","content":[{"ctl":"tbl-ol-node","type":"page","item":"ActionAppParts-Home","attr":{"appname":"ActionAppParts","pagename":"Home","source":"app"},"details":"Home","meta":"&#160;","level":2,"icon":"columns","color":"green","group":"workspace-outline","content":[{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-PanelWIthControls.json","details":"PanelWIthControls","meta":"&#160;","level":1,"icon":"newspaper outline","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"PanelWIthControls.json","restype":"Panels","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-PanelWithLayout.json","details":"PanelWithLayout","meta":"&#160;","level":1,"icon":"newspaper outline","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"PanelWithLayout.json","restype":"Panels","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-frmContactInfo.json","details":"frmContactInfo","meta":"&#160;","level":1,"icon":"newspaper outline","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"frmContactInfo.json","restype":"Panels","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-Demo Media Text.html","details":"Demo Media Text","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"Demo Media Text.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-buttons - animated demo.html","details":"buttons - animated demo","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"buttons - animated demo.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-buttons container testing.html","details":"buttons container testing","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"buttons container testing.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-cards demo.html","details":"cards demo","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"cards demo.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-center.html","details":"center","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"center.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-demo sae detroit home.html","details":"demo sae detroit home","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"demo sae detroit home.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-demo single event.html","details":"demo single event","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"demo single event.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-east.html","details":"east","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"east.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-events page demo.html","details":"events page demo","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"events page demo.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-file-upload-formatted.html","details":"file-upload-formatted","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"file-upload-formatted.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-grid-16 four column example.html","details":"grid-16 four column example","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"grid-16 four column example.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-members.html","details":"members","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"members.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-relaxed list demo.html","details":"relaxed list demo","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"relaxed list demo.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-sidebar-cards.html","details":"sidebar-cards","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"sidebar-cards.html","restype":"HTML","source":"app"},"group":"workspace-outline"},{"ctl":"tbl-ol-node","type":"resource","item":"ActionAppParts-Home-tabs-demo.html","details":"tabs-demo","meta":"&#160;","level":1,"icon":"code","color":"purple","attr":{"appname":"ActionAppParts","pagename":"Home","resname":"tabs-demo.html","restype":"HTML","source":"app"},"group":"workspace-outline"}]}]}]}';
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}

	public function save_catalog_res($request) {
		$json = $request->get_body();
		$body = json_decode($json);
		$catname = $body->catname;
		$resname = $body->resname;
		$restype = $body->restype;
		$content = $body->content;

		$tmpDocType = 'design-catalog-res'; 

		$tmpExtraQuery = array();
		array_push($tmpExtraQuery, array(
			'key'     => 'catname',
			'value'   => $catname,
			'compare' => '=',
			)
		);
		array_push($tmpExtraQuery, array(
			'key'     => 'resname',
			'value'   => $resname,
			'compare' => '=',
			)
		);
		array_push($tmpExtraQuery, array(
			'key'     => 'restype',
			'value'   => $restype,
			'compare' => '=',
			)
		);

		$tmpDocs = self::getDesignDocs($tmpDocType,$tmpExtraQuery);
		$tmpLen = count($tmpDocs);
		if( $tmpLen != 1){
			//--- Blank JSON Reply
			header('Content-Type: application/json');
			echo '{"status":false,"error":"Invalid Count: '.$tmpLen.'", catname: '.$catname.' resname: '.$resname.' restype: '.$restype.'}';
			exit();
		}
		$tmpDoc = $tmpDocs[0];
		$tmpDoc['source'] = $content;
		//ToDo: Universally do this as needed (i.e. any JSON object store);
		//--- Update source JSON to escape " in content for saving as quoted string
		$tmpDoc['source'] = str_replace('\"','\\\"',$tmpDoc['source']);
		
		//--- Encode when passing array so decode works like $request
		$tmpResults = self::save_doc(wp_json_encode($tmpDoc),true,false);
		//--- Make return as array and encode it
		$tmpRet = wp_json_encode(array(
			'action' => 'save_catalog_res',
			'catname' => $catname,
			'results' => $tmpResults,
			'resname' => $resname,
			'restype' => $restype,
			'status' => true,
		));

		//--- Standard JSON reply
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}

	public function create_catalog_res($request) {
		$json = $request->get_body();
		$body = json_decode($json);
		$catname = $body->catname;
		$resname = $body->resname;
		$restype = $body->restype;
		

		$body->__doctype = "design-catalog-res";
		$body->name = $catname.'-'.$restype.'-'.$resname;
		$body->__doctitle = 'Catalog '.$restype.': '.$body->name;
		$tmpSource = '';

		//--- ToDo: Allow for templates? Pull from somewhere else?
		if( $restype == "Control"){
			$tmpSource = '(function (ActionAppCore, $) {

				var ControlSpecs = { 
					options: {
						padding: true
					},
					content: [
					{
						ctl: "spot",
						name: "body",
						text: "Use loadSpot to load me"
					}
					]
				}
			
				var ControlCode = {};
				//--- Do not edit or place code above this area (only JSON ControlSpecs Edit)
				//--- ActAppDesigner ---: No Edit
							
				ControlCode.setup = setup;
				function setup(){
					console.log("Ran setup")
				}
			
				ControlCode._onInit = _onInit;
				function _onInit(){
					//console.log("Ran _onInit")
				}
			
				//--- ActAppDesigner ---: No Edit
				//--- Do not edit or place code below this area
				var ThisControl = {specs: ControlSpecs, options: { proto: ControlCode, parent: ThisApp }};
				return ThisControl;
			})(ActionAppCore, $);';
		} else if( $restype == "Panel"){
			$tmpSource = '{
				"options":{
					"padding": true
				},
				"content": [
				
					{
						"ctl": "title",
						"name": "title",
						"text": "Page Title"
					}
				]
			}';
		}
		

		//$body->id = "design-catalog-".$catname;
		$body->catname = $catname;
		$body->resname = $resname;
		$body->restype = $restype;
		$body->label = $body->name;
		$body->source = $tmpSource;

		$tmpResults = self::save_doc($body,true,false);

		//--- Make return as array and encode it
		$tmpRet = wp_json_encode(array(
			'action' => 'create_catalog_res',
			'catname' => $catname,
			'results' => $tmpResults,
			'resname' => $resname,
			'restype' => $restype,
			'status' => true,
		));

		//--- Standard JSON reply
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}
	
	public function update_catalog($request) {
		$json = $request->get_body();
		$body = json_decode($json);
		$catname = $body->catname;
		$title = $body->title;
		$description = $body->description;

		$tmpDocType = 'design-catalog'; 

		$tmpExtraQuery = array();
		array_push($tmpExtraQuery, array(
			'key'     => 'catname',
			'value'   => $catname,
			'compare' => '=',
			)
		);
		

		$tmpDocs = self::getDesignDocs($tmpDocType,$tmpExtraQuery);
		$tmpLen = count($tmpDocs);
		if( $tmpLen != 1){
			//--- Blank JSON Reply
			header('Content-Type: application/json');
			echo '{"status":false,"error":"Invalid Count: '.$tmpLen.'", catname: '.$catname.'"}';
			exit();
		}
		$tmpDoc = $tmpDocs[0];
		$tmpDoc['title'] = $title;
		$tmpDoc['description'] = $description;

		//--- Encode when passing array so decode works like $request
		$tmpResults = self::save_doc(wp_json_encode($tmpDoc),true,false);
		//--- Make return as array and encode it
		$tmpRet = wp_json_encode(array(
			'action' => 'save_catalog',
			'catname' => $catname,
			'results' => $tmpResults,
			'status' => true,
		));

		//--- Standard JSON reply
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}

	public function create_catalog($request) {
		$json = $request->get_body();
		$body = json_decode($json);
		$catname = $body->catname;
		$title = $body->title;
		$description = $body->description;
		$body->__doctype = "design-catalog";
		$body->__doctitle = 'Catalog: '.$catname;
		//$body->id = "design-catalog-".$catname;
		$body->name = $catname;
		$body->label = $title;
		$body->description = $description;

		$tmpResults = self::save_doc($body,true,false);

		//--- Make return as array and encode it
		$tmpRet = wp_json_encode(array(
			'action' => 'create_catalog',
			'catname' => $catname,
			'results' => $tmpResults,
			'title' => $title,
			'description' => $description,
			'status' => true,
		));

		//--- Standard JSON reply
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}
	
	public function restore_docs($request) {
		$json = $request->get_body();
		$body = json_decode($json);
		$ids = $body->ids;
		foreach( $ids as $id){
			$tmpStatus = get_post_status( $id );
			if( 'trash' == $tmpStatus ){
				wp_untrash_post( $id );
				wp_publish_post( $id );
			} else {
				//--- Skip it ... log it?
			}
		}
		//--- Make return as array and encode it
		$tmpRet = wp_json_encode(array(
			'action' => 'restore',
			'ids' => $ids,
		));

		//--- Standard JSON reply
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}	

	public function recycle_docs($request) {
		$json = $request->get_body();
		$body = json_decode($json);
		$ids = $body->ids;
		foreach( $ids as $id){
			//set_post_type( $id, get_post_type($id)."_recycled" );
			$tmpStatus = get_post_status( $id );
			if( 'trash' == $tmpStatus ){
				wp_delete_post( $id, true );
			} else {
				wp_trash_post( $id );
			}
		}
		//--- Make return as array and encode it
		$tmpRet = wp_json_encode(array(
			'action' => 'recycle',
			'ids' => $ids,
		));

		//--- Standard JSON reply
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}	

	public static function getDataFromQuery($query){
		$tmpRet = array();
		$tmpAdded = false;
		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();
				$tmpID = get_the_ID();
				$tmpData = get_post_meta($tmpID);
				
				foreach($tmpData as $iField => $iVal) {
					if( count($iVal) == 1){
						$tmpVal = $iVal[0];
						$tmpData[$iField] = maybe_unserialize($tmpVal);
					}
				}
				
				if( $tmpAdded ){
					$tmpRet .= ',';			
				} else {
					$tmpAdded = true;
				}
				array_push($tmpRet, $tmpData);			
			}
		}
		return $tmpRet;
	}

	public static function get_design_doc($theName,$theType){
		//--- Get data view document by slug
		//-- populate this from the details
		$tmpDocType = $theType; 
		$tmpPostType = 'actappdesigndoc'; 

		//--- Start with blank query
		$tmpQuery = array();

		//--- If getting a doc type then add to the query
		if( $tmpDocType != ''){
			array_push($tmpQuery, array(
				'key'     => '__doctype',
				'value'   => $tmpDocType,
				'compare' => '=',
				)
			);
		}
		if( $theName != ''){
			array_push($tmpQuery,array(
				'key'     => 'name',
				'value'   => $theName,
				'compare' => '=',
			));
		}

		$args = array(
			'post_type' => $tmpPostType,
			'posts_per_page' => 1,
			'meta_query' => $tmpQuery
		);

		$query = new WP_Query( $args );

		$tmpRet = self::getDataFromQuery($query);
		/* Restore original Post Data */
		wp_reset_postdata();
		return $tmpRet[0];
	}
	
	public static function import_docs($request) {
		if( !current_user_can('actappdesign') ){
			return new WP_Error('actapp_data_error', 'Not autorized', array('status' => 403));
		}
		$json = $request->get_body();
		$body = json_decode($json);
		$docs = [];
		$tmpResultCode = '';
		$tmpLog = [];
		$tmpLen = 0;
		$tmpData = $body->data;
		$tmpUpdated = 0;
		$tmpSkipped = 0;
		
		if( $tmpData ){
			$tmpLen = count($tmpData);
			if( $tmpLen ){
				array_push($tmpLog,'Importing '.$tmpLen.' docs');
			} else {
				array_push($tmpLog,'Nothing passed in data array');				
			}
			
		} else {
			array_push($tmpLog,'No data array passed');
		}
		if( $tmpLen ){
			//--- We have data, process it
			foreach ($tmpData as $tmpDoc) {
				
				$tmpResult = self::import_doc($tmpDoc,$tmpLog);
				if($tmpResult){
					$tmpUpdated++;
					$tmpImportPostID = 5;
					array_push($tmpLog,'Imported: '.$tmpDoc->{'__uid'}.' as post id '.$tmpResult['post_id']);
				} else {
					$tmpSkipped++;
					array_push($tmpLog,'Skipped: '.$tmpDoc->{'__uid'});
				}
			}
		}

		//--- Make return as array and encode it
		$tmpRet = wp_json_encode(array(
			'action' => 'import_docs',
			'result' => $tmpResultCode,
			'updated' => $tmpUpdated,
			'skipped' => $tmpSkipped,
			'log' => $tmpLog
		));

		//--- Standard JSON reply
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}

	public static function import_doc($theDoc){
		if( !is_object($theDoc) ){
			return false;
		}
		$tmpSlug = $theDoc->__uid;
		$tmpPostType = $theDoc->__posttype;
		$tmpPostTitle = $theDoc->__doctitle;
		$tmpDebug = '';
		
		$tmpExistingID = ActAppCommon::post_exists_by_uid($tmpSlug);

		$tmpExistingStatus = 'na';
		if($tmpExistingID){
			$tmpExistingStatus = get_post_status($tmpExistingID);
			
			$tmpPost = get_post( $tmpExistingID );
			if( 'trash' == $tmpExistingStatus ){
				$tmpDebug .= ' >> was in trash, removed it ' ;
				wp_delete_post($tmpExistingID, true);
				$tmpExistingID = false;
			}
			$tmpDebug .= ' $tmpExistingStatus '. $tmpExistingStatus ;
		} else {
			$tmpDebug .= ' NOT FOUND ' . $tmpExistingID ;
		}
		if($tmpExistingID != false){
			$theDoc->id = $tmpExistingID;
			$theDoc->_id = $tmpExistingID;
			$tmpDebug .= ' FOUND ' . $tmpExistingID ;
			return false; //Already in system
		} else {
			unset($theDoc->id);
			unset($theDoc->__id);
		}


		unset($theDoc->__url);
		unset($theDoc->__postdate);
		unset($theDoc->__posttype);

		$tmpResults = self::save_doc(wp_json_encode($theDoc),$tmpPostType,false);
		//--- Return new post id or slug?
		return $tmpResults;
	}
	public static function save_user($request) {
		//ToDo: Use wp user update / add caps instead
		if( !current_user_can('actappdesign') ){
			return new WP_Error('actapp_data_error', 'Not autorized', array('status' => 403));
		}
		$json = $request->get_body();
		$body = json_decode($json);

		$tmpDocID = '';
		$tmpPostID = false;
		if ($body->id != null && $body->id != ""){
			$tmpPostID = $body->id;
			$tmpDocID = $body->id;
			$body->tag = get_post_meta($tmpPostID,'__uid',true);
		} else {
			if($body->id != null){
				unset($body["id"]);
			}			
			$tmpDocID = (ActAppDesigner::getSUID() . '_' . uniqid('' . random_int(1000, 9999)));
			$body->__uid = $tmpDocID;
			$body->__doctype = '';
			$body->__doctitle = '';
		}
		
		$jsonDoc = json_encode($body);
		
		$author_id = get_current_user_id();;
		$newid = 0;

		$newuser = array(
			'user_login'    =>   $body->user_login,
			'user_email'       =>   $body->user_email,
			'first_name'         =>   $body->first_name,
			'last_name'        =>   $body->last_name,
			'description'      =>   $body->description,
			'show_admin_bar_front' => in_array('adminbar',$body->admin_options),
			'use_ssl' => in_array('ssl',$body->admin_options),
			'role'       =>   $body->role,
		);
		if( $tmpPostID ){
			$newuser['ID'] = $tmpPostID;
		}
		
		
		$tmpResultCode = '';
		if( !$tmpPostID ){
			$tmpResultCode = 'new user';
			if( $body->user_pass != null && $body->user_pass != ''){
				$newuser['user_pass'] = $body->user_pass;			
			}

			$newid = wp_insert_user(
				$newuser
			);
			$body->id = $newid;
			$newWPUser = get_user_by('id', $newid);
			if( is_array($body->capabilities) ){
				foreach ($body->capabilities as $iCap) {
					$newWPUser->add_cap($iCap);
				}	
			}
		} else {
			$tmpResultCode = 'updated user ';
			if( $body->user_pass != null && $body->user_pass != ''){
				wp_set_password( $body->user_pass, $tmpPostID );			
			}
			
			$tmpAddReply = wp_insert_user(
				$newuser
			);
			$newWPUser = get_user_by('id', $tmpPostID);
			$tmpAllCaps = explode(",",$body->allcapabilities);

			//--- ToDo: Review for removal instead of remove and readd?
			if( is_array($tmpAllCaps) ){
				foreach ($tmpAllCaps as $iAllCap) {
					$newWPUser->remove_cap($iAllCap);
				}	
			}
			if( is_array($body->capabilities) ){
				foreach ($body->capabilities as $iCap) {
					$newWPUser->add_cap($iCap);
				}	
			}
		}

		//--- Make return as array and encode it
		$tmpRet = wp_json_encode(array(
			'action' => 'saveuser',
			'callcaps' => $tmpAllCaps,
			'add_reply' => $tmpAddReply,
			'post_id' => $newid ? $newid : $tmpPostID,
			'full_id' => $body->id,
			'new_id' => $newid,
			'update_id' => $tmpPostID,
			'doctype' => '',
			'newuser' => $newuser,
			'result' => $tmpResultCode,
			'body' => $body
		));

		//--- Standard JSON reply
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}

	
	public static function save_document($request) {
		return self::save_doc($request,false);
	}	

	public static function save_design($request) {
		return self::save_doc($request,true);
	}	
	
	//--- $thePostType: True = designerdoc, False or Null = appdoc, String Value = posttype
	public static function save_doc($request, $thePostType, $theIsRequest = true) {
		$tmpPostType = 'actappdoc';
		
		$tmpDoDebug = false;
		$tmpDebugOut = 'started';

		if($tmpDoDebug){
			//--- Make return as array and encode it
			$tmpDebugRet = wp_json_encode(array(
				'action' => 'saveuser',
				'debug' => $tmpDebugOut
			));

			header('Content-Type: application/json');
			echo $tmpDebugRet;
			exit();
			return;
		}

		$tmpIsAltPostType = is_string($thePostType);

		if( $tmpIsAltPostType ){
			$tmpPostType = $thePostType;
			if( !current_user_can('actappdesign') ){
				return new WP_Error('actapp_data_error', 'Not autorized for ' . get_current_user_id(), array('status' => 403));
			}
		} else if( $thePostType === true){
			$tmpPostType = 'actappdesigndoc';
			if( !current_user_can('actappdesign') ){
				return new WP_Error('actapp_data_error', 'Not autorized for ' . get_current_user_id(), array('status' => 403));
			}
		} else {
			if( !current_user_can('actappapps') ){
				return new WP_Error('actapp_data_error', 'Not autorized', array('status' => 403));
			}
		}
		if( $theIsRequest ){
			$json = $request->get_body();
			$body = json_decode($json);
		} else {
			if( is_string($request) ){
				$body = json_decode($request);
			} else {
				$body = ($request);
			}
		}

		$doctype = $body->__doctype;
		$doctitle = $body->__doctitle;

		$tmpContent = isset($body->__postcontent) ? $body->__postcontent : '';
		$tmpExcerpt = isset($body->__postexcerpt) ? $body->__postexcerpt : '';

		$tmpDocID = '';
		$tmpPostID = false;
		if (!empty($body->__uid) && empty($body->id)){
			$tmpExistingID = ActAppCommon::post_exists_by_uid($body->__uid);
			if($tmpExistingID){
				//ToDo: Delete from trash instead?
				$tmpExistingStatus = get_post_status($tmpExistingID);
				$tmpPost = get_post( $tmpExistingID );
				if( 'trash' == $tmpExistingStatus ){
					wp_untrash_post($tmpExistingStatus, true);
				}
				$body->id = $tmpExistingID;
			}
		}
		
		if (isset($body->id) && $body->id != ""){
			$tmpPostID = $body->id;
			$tmpDocID = $body->id;
			//--- If being updated, assure $doctitle
			if( $doctitle == ''){
				$doctitle = get_the_title($tmpPostID);
			}
		} else {
			if(isset($body->id)){
				unset($body["id"]);
			}
			if( empty($body->__uid) ){
				$tmpDocID = (ActAppDesigner::getSUID() . '_' . uniqid('' . random_int(1000, 9999)));
			} else {
				//--- Allow created document to use non-used uid
				$tmpDocID = $body->__uid;
			}
			if( $doctitle == ''){
				$doctitle = $tmpDocID;
			}
			$body->__uid = $tmpDocID;
			$body->__doctype = $doctype;
			//$body->__doctitle = $doctitle;
		}
		unset($body->__doctitle);
		unset($body->__url);
		unset($body->__id);
		unset($body->__postdate);

		$jsonDoc = json_encode($body);
		
		$author_id = get_current_user_id();
		$newid = 0;

		$newpost = array(
			'comment_status'    =>   'closed',
			'ping_status'       =>   'closed',
			'post_author'       =>   $author_id,
			'post_name'         =>   $tmpDocID,
			'post_title'        =>   $doctitle,
			'post_content'      =>   '',
			'json' => $jsonDoc,
			'body_topic' => isset($body->topic) ? $body->topic : '',
			'post_status'       =>   'publish',
			'post_type'         =>   $tmpPostType
		);
		if( $tmpPostID ){
			$newpost['id'] = $tmpPostID;
		}
		if( $tmpContent ){
			$newpost['post_content'] = $tmpContent;
		}
		if($tmpExcerpt){
			$newpost['post_excerpt'] = $tmpExcerpt;
		}
		
		unset($body->__postcontent);
		unset($body->__postexcerpt);

		$tmpResultCode = '';
		if( !$tmpPostID ){
			$tmpResultCode = 'new doc';
			$newid = wp_insert_post(
				$newpost
			);
			$body->id = $newid;
			wp_update_post(array(
				'ID'        => $newid,
				'meta_input'=> $body,	
			));
		} else {
			$tmpResultCode = 'updated json';
			wp_update_post(array(
				'ID'        => $tmpPostID,
				'post_title'        =>   $doctitle,
				'post_status'       =>   'publish',
				'meta_input'=> $body,
			));
		}

		//--- Make return as array and encode it
		$tmpRet = array(
			'action' => 'savedoc',
			'post_id' => $newid ? $newid : $tmpPostID,
			'full_id' => $body->id,
			'new_id' => $newid,
			'update_id' => $tmpPostID,
			'doctype' => $doctype,
			'newpost' => $newpost,
			'result' => $tmpResultCode,
			//'body' => $body,
			//'storeid' => ActAppDesigner::getSUID(),
			//'data_version' => ActAppDesigner::getPluginSetupVersion(),
			//'base_url' => ActAppCommon::getRootPath(),
		);

		if( $theIsRequest ){
			//--- Standard JSON reply
			header('Content-Type: application/json');
			echo wp_json_encode($tmpRet);
			exit();
		} else {
			return $tmpRet;
		}
		
	}

	public function getDataViewDoc($theName) {
	
		$tmpDocType = 'dataview';
		//--- Start with blank query
		$tmpExtraQuery = array();
		
		array_push($tmpExtraQuery, array(
			'key'     => 'name',
			'value'   => $theName,
			'compare' => '=',
			)
		);

		$tmpDocs = self::getDesignDocs($tmpDocType,$tmpExtraQuery);
		$tmpLen = count($tmpDocs);
		$tmpRet = '{}';
		if( $tmpLen == 1){
			$tmpDoc = $tmpDocs[0];
			$tmpRet = $tmpDoc;
		} else {
			$tmpRet = $tmpLen; //["__error"=>"Invalid count " . $tmpLen]
		}
		return $tmpRet;
	}

	public function get_data_view($request) {
		
		$tmpName = $_GET['dataview'];
		
		if( !empty($tmpName)){
			//--- Pass in a dataview name, this makes it ignore all other selection pararms
			//--- This call only requires application level access
			//--- The get_all_docs will use the capabilities from the dataview doc to ...
			//      ... restrict access based on the dataview passed
			return self::get_all_docs($request);
		}
		$tmpRet = '{"data":[], "error": "no dataview name provided: '.$tmpName.'"}';
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}

	public function getCatalogResource($request) {
		$catname = $_GET['catname'];
		$resname = $_GET['resname'];
		$restype = $_GET['restype'];
		$tmpDocType = "design-catalog-res";

		//--- Start with blank query
		$tmpExtraQuery = array();
		array_push($tmpExtraQuery, array(
			'key'     => 'catname',
			'value'   => $catname,
			'compare' => '=',
			)
		);
		array_push($tmpExtraQuery, array(
			'key'     => 'resname',
			'value'   => $resname,
			'compare' => '=',
			)
		);
		array_push($tmpExtraQuery, array(
			'key'     => 'restype',
			'value'   => $restype,
			'compare' => '=',
			)
		);

		$tmpDocs = self::getDesignDocs($tmpDocType,$tmpExtraQuery);
		$tmpLen = count($tmpDocs);
		$tmpRet = '{}';
		if( $tmpLen == 1){
			$tmpDoc =$tmpDocs[0];
			//var_dump($tmpDoc);
			$tmpRet = $tmpDoc['source'];
		} else {
			$tmpRet = "Invalid count " . $tmpLen;
		}
		header('Content-Type: text/html');
		echo $tmpRet;
		exit();
	}

	public function getCatalogDoc($theCatName) {
		$catname = $theCatName;
		$tmpDocType = "design-catalog";

		//--- Start with blank query
		$tmpExtraQuery = array();
		array_push($tmpExtraQuery, array(
			'key'     => 'catname',
			'value'   => $catname,
			'compare' => '=',
			)
		);
		
		$tmpDocs = self::getDesignDocs($tmpDocType,$tmpExtraQuery);
		$tmpLen = count($tmpDocs);
		$tmpRet = '{}';
		if( $tmpLen == 1){
			$tmpDoc = $tmpDocs[0];
			$tmpRet = $tmpDoc;
		} else {
			$tmpRet = "Invalid count " . $tmpLen;
		}
		return $tmpRet;
	}
	
	public function get_catalog_res($request) {
		$catname = $_GET['catname'];
		$resname = $_GET['resname'];
		$restype = $_GET['restype'];
		
		if( $catname ){
			if( !(empty($resname) || empty($restype)) ){
				return self::getCatalogResource($request);
			} else {
				$tmpRes = self::getCatalogResources($catname);
				$tmpRet = '{"options":{"padding":false},"content":[{"ctl":"tbl-ol-node","type":"resources","details":"Resources","meta":"&#160;","classes":"ws-outline","level":2,"icon":"box","color":"black","group":"workspace-outline","content":['.$tmpRes.']}]}';
			}
		} else {
			//---  This is not one resource, return no items (error really)
			$tmpRet = '{}';
		}
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}
	
	public static function getParam($theName){
	    if( isset( $_GET[$theName] ) ){
	        return $_GET[$theName];
	    }
	    return '';
	}

    public static function getIfSet($theObj, $theName){
	    if( isset( $theObj[$theName] ) ){
	        return $theObj[$theName];
	    }
	    return '';
	}

	public function get_all_docs($request) {
		$posttype = self::getParam('posttype');		
		$doctype = self::getParam('doctype');
		$query = self::getParam('query');
		$fields = self::getParam('fields');
		$status = self::getParam('status');		
		$dataview = self::getParam('dataview');

		if( empty($status) ){
			$status = array('any');
		} else {
			$status = array($status);
		}

		//--- Only process supported types for the designer level onyly api
		if( empty($posttype) ){
			$posttype = array('actappdoc','actappdesigndoc','actappelem','actappdesign');
		}

		if (!empty($dataview)){
			$tmpDoc = self::getDataViewDoc($dataview);

			$posttype = $tmpDoc['sourceposttype'];
			$doctype = $tmpDoc['sourcedoctype'];
			$posttypeother = self::getIfSet($tmpDoc,'sourceposttypeother');
			if( 'other' == $posttype && $posttypeother != null ){
				$posttype = $posttypeother;
			}
			//$capabilities = $tmpDoc['capabilities'];
			
			// $doctype = 'person';
			// $posttype = 'actappdoc';
			//--- Get access control and apply it here
			
		}

		$tmpDocs = self::getPostDocs($posttype,$doctype,$query,$fields,$status);
		header('Content-Type: application/json');
		$tmpJsonArray = self::getJsonFromDocs($tmpDocs);
		echo '{"data":'.$tmpJsonArray.'}';
		exit();
	}

	public function getJsonFromDocs($theDocs, $theInfo = null){
		$tmpRet = '[';
		$tmpAdded = false;
		foreach ($theDocs as $tmpJson) {
			$tmpJsonText = json_encode($tmpJson);
			if( $tmpAdded ){
				$tmpRet .= ',';			
			} else {
				$tmpAdded = true;
			}
			$tmpRet .= $tmpJsonText;
		}
		
		$tmpRet .= ']';
		return $tmpRet;
	}
	
	public function get_catalog_form($request) {
		$tmpCatName = $_GET['catname'];
		$tmpDesignDoc = self::get_design_doc($tmpCatName,'design-catalog');
		$tmpTitle = ''.$tmpDesignDoc["title"];
		$description = ''.$tmpDesignDoc["description"];
		$tmpRet = '{"options":{"readonly":true,"padding":false,"links":{"path":""},"doc":{"title":"'.$tmpTitle.'","details":"'.$description.'","name":"'.$tmpCatName.'"}},"content":[{"ctl":"tabs","name":"my-tabs","tabs":[{"label":"Basic Info","name":"my-tab-1","ctl":"tab","content":[{"ctl":"field","name":"title","label":"Catalog Title","req":true},{"name":"details","label":"Details","placeholder":"Enter optional details about this catalog","ctl":"field"},{"ctl":"hidden","name":"name"}]}]}]}';
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}
	
	public function get_json_from_csv_file($request) {
		//$file="C:\\aa\\mock-data.csv";
		$file = ACTIONAPP_WP_URL . '/extra/DepthChartPreWeek7.csv';
		$csv = file_get_contents($file);
		$array = array_map("str_getcsv", explode("\n", $csv));
		$tmpDocCount = count($array);

		$tmpID = 'na';
		$pos = $_GET['pos'];
		$fn = $_GET['fn'];
		// if(!empty($fn)){
		// 	$file = ACTIONAPP_WP_URL . '/extra/'. $fn;
		// }
		$tmpStart = 1;
		$tmpEnd = $tmpDocCount;		
		if( $pos != ''){
			if( $pos == 'auto'){
				$current_user = wp_get_current_user();
				$tmpID = $current_user->ID;
				$tmpLastPos = get_user_meta( $tmpID, 'mock_data_pos', true ); 
				if( $tmpLastPos == ''){
					$pos = 1;
				} else {
					$pos = intval(''.$tmpLastPos) + 1;
					if( $pos >= $tmpDocCount-1){
						$pos = 1;
					}
				}
				update_user_meta( $tmpID, 'mock_data_pos', $pos ); 
			}
			$tmpStart = intval($pos);
			$tmpEnd = $tmpStart + 1;
		}
		$tmpFieldNames = $array[0];
		$tmpFNCount = count($tmpFieldNames);
		$tmpData = [];
		for ($iPos = $tmpStart; $iPos < $tmpEnd; $iPos++) {
			$tmpDoc = $array[$iPos];
			$tmpDocEntry = [];
			if(count($tmpDoc) == $tmpFNCount){
				for ($iFieldPos = 0; $iFieldPos < $tmpFNCount; $iFieldPos++) {
					$tmpFN = $tmpFieldNames[$iFieldPos];
					$tmpDocEntry[$tmpFN] = $tmpDoc[$iFieldPos];
				}
				$tmpDocEntry['posid'] = ''.$iPos;
				array_push($tmpData, $tmpDocEntry);
			}
		}
		$tmpRet = array('data' => $tmpData,'id' => $tmpID, 'pos' => $pos);
		$json = json_encode($tmpRet);
		header('Content-Type: application/json');
		echo $json;
		exit();
	}

	public function get_json_from_csv($request) {
		//$file="C:\\aa\\mock-data.csv";
		$file = ACTIONAPP_WP_URL . '/extra/mock-data.csv';
		$csv = file_get_contents($file);
		$array = array_map("str_getcsv", explode("\n", $csv));
		$tmpDocCount = count($array);

		$tmpID = 'na';
		$pos = $_GET['pos'];
		$tmpStart = 1;
		$tmpEnd = $tmpDocCount;		
		if( $pos != ''){
			if( $pos == 'auto'){
				$current_user = wp_get_current_user();
				$tmpID = $current_user->ID;
				$tmpLastPos = get_user_meta( $tmpID, 'mock_data_pos', true ); 
				if( $tmpLastPos == ''){
					$pos = 1;
				} else {
					$pos = intval(''.$tmpLastPos) + 1;
					if( $pos >= $tmpDocCount-1){
						$pos = 1;
					}
				}
				update_user_meta( $tmpID, 'mock_data_pos', $pos ); 
			}
			$tmpStart = intval($pos);
			$tmpEnd = $tmpStart + 1;
		}
		$tmpFieldNames = $array[0];
		$tmpFNCount = count($tmpFieldNames);
		$tmpData = [];
		for ($iPos = $tmpStart; $iPos < $tmpEnd; $iPos++) {
			$tmpDoc = $array[$iPos];
			$tmpDocEntry = [];
			if(count($tmpDoc) == $tmpFNCount){
				for ($iFieldPos = 0; $iFieldPos < $tmpFNCount; $iFieldPos++) {
					$tmpFN = $tmpFieldNames[$iFieldPos];
					$tmpDocEntry[$tmpFN] = $tmpDoc[$iFieldPos];
				}
				$tmpDocEntry['posid'] = ''.$iPos;
				array_push($tmpData, $tmpDocEntry);
			}
		}
		$tmpRet = array('data' => $tmpData,'id' => $tmpID, 'pos' => $pos);
		$json = json_encode($tmpRet);
		header('Content-Type: application/json');
		echo $json;
		exit();
	}

	public function get_users($request) {
		$blogusers = get_users( array( 'role__in' => array( 'administrator', 'author', 'editor', 'contributor', 'subscriber' ) ) );
		$tmpData = [];
		foreach ( $blogusers as $user ) {
			$tmpID = $user->ID;
			if( $tmpID != 1){
				//$tmpAdminOptions = [];
				foreach ( $user->roles as $iRole ) {
					$tmpRole = $iRole;
				}
				
				$tmpUserData = $user->data;
				$tmpCaps = [];
				$tmpAdminOptions = [];
				$tmpAdminBar = get_user_meta($tmpID,'show_admin_bar_front',true);
				$tmpSSL = get_user_meta($tmpID,'use_ssl',true);

				if( $tmpAdminBar == '1' ){
					array_push($tmpAdminOptions,'adminbar');
				}
				if( $tmpSSL == '1' ){
					array_push($tmpAdminOptions,'ssl');
				}

				foreach ( $user->caps as $iCapName => $iCapVal ) {
					if( $iCapName != $tmpRole){
						if( $iCapVal === true){
							array_push($tmpCaps,$iCapName);
						}
					}
				}

				$tmpNew = [
					'admin_options' => $tmpAdminOptions,
					'capabilities' => $tmpCaps,
					'description' => get_user_meta($tmpID,'description',true),
					'first_name' => get_user_meta($tmpID,'first_name',true),
					'last_name' => get_user_meta($tmpID,'last_name',true),
					'role' => $tmpRole,
					'user_email' => $user->data->user_email,
					'user_login' => $user->data->user_login,
				];
				if( $tmpNew['description'] === null ){
					$tmpNew['description'] = '';
				}
				$tmpNew['id'] = $tmpID;
				array_push($tmpData,$tmpNew);
			}
		}
		$tmpRet = ['data' => $tmpData];
		header('Content-Type: application/json');
		echo json_encode($tmpRet);
		exit();
	}

	public function getCatalogs(){
		//-- populate this from the details
		$tmpDocType = 'design-catalog'; 
		//$tmpPostType = 'actappdesigndoc';
		$tmpDocs = self::getDesignDocs($tmpDocType);
		$tmpRet = '';
		$tmpAdded = false;
		foreach ($tmpDocs as $tmpJson) {
			$tmpToAdd = '{
				"ctl": "tbl-ol-node",
				"type": "catalog",
				"item": "'.$tmpJson['catname'].'",
				"attr": {
					"catname": "'.$tmpJson['catname'].'",
					"cattitle": "'.$tmpJson['title'].'",
					"source": "catalog"
				},
				"details": "['.$tmpJson['catname'].'] '.$tmpJson['title'].'",
				"meta": "&#160;",
				"level": 1,
				"icon": "archive",
				"color": "teal",
				"group": "workspace-outline"
			}';
			if( $tmpAdded ){
				$tmpRet .= ',';			
			} else {
				$tmpAdded = true;
			}
	
			$tmpRet .= $tmpToAdd;				
		}
		return $tmpRet;
	}

	public function getPostDocs($thePostType,$theDocType,$theAdditionalArgs = null,$theFields = null, $theOptionalPostStatus = array('any')){
		$tmpDocType = $theDocType; 
		$tmpPostType = 'actappdoc';
		if( !empty($thePostType) ){
			$tmpPostType = $thePostType;
		}

		
		//--- Start with blank query
		$tmpQuery = array();

		//--- If getting a doc type then add to the query
		if( $tmpDocType != ''){
			array_push($tmpQuery, array(
				'key'     => '__doctype',
				'value'   => $tmpDocType,
				'compare' => '=',
				)
			);
		}
		
		if( $theAdditionalArgs != null ){
			foreach ($theAdditionalArgs as $iValue) {
				array_push($tmpQuery,$iValue);	
			}
		}

		$args = array(
			'post_type' => $tmpPostType,
			'posts_per_page' => -1,
			'post_status'    => $theOptionalPostStatus,
			'meta_query' => $tmpQuery
		);

		$query = new WP_Query( $args );
		$tmpAdded = false;
		$tmpRet = [];
		
		if ( $query->have_posts() ) {
			while ( $query->have_posts() ) {
				$query->the_post();
				$tmpJson = ActAppDesigner::get_post_as_doc();
				if( '(export)' == $theFields ){
					$tmpContent = get_the_content();
					if( $tmpContent != null ){
						$tmpJson['__postcontent'] = $tmpContent;
					}
					$tmpExcerpt = get_the_excerpt();
					if( $tmpExcerpt != null ){
						$tmpJson['__postexcerpt'] = $tmpExcerpt;
					}
				}
		
				array_push($tmpRet,$tmpJson);
			}
		}

		/* Restore original Post Data */
		wp_reset_postdata();

		return $tmpRet;
	}

	public function getDesignDocs($theDocType,$theAdditionalArgs = null){
		return self::getPostDocs("actappdesigndoc",$theDocType,$theAdditionalArgs);
	}

	public function getCatalogResources($theCatName){
		$tmpDocType = 'design-catalog-res'; 
		//--- Start with blank query
		$tmpExtraQuery = array();
		array_push($tmpExtraQuery, array(
			'key'     => 'catname',
			'value'   => $theCatName,
			'compare' => '=',
			)
		);

		$tmpDocs = self::getDesignDocs($tmpDocType,$tmpExtraQuery);
		$tmpRet = '';
		$tmpAdded = false;
		foreach ($tmpDocs as $tmpJson) {
			$tmpIcon = ActAppDesigner::getIconForType($tmpJson['restype']);
			$tmpToAdd = '{"ctl":"tbl-ol-node","type":"resource","item":"'.$tmpJson['catname'].'--'.$tmpJson['resname'].'","details":"'.$tmpJson['resname'].'","meta":"&#160;","level":1,"icon":"'.$tmpIcon.'","color":"brown","attr":{"catname":"'.$tmpJson['catname'].'","appname":"","pagename":"","resname":"'.$tmpJson['resname'].'","restype":"'.$tmpJson['restype'].'","source":"cat"},"group":"workspace-outline"}';
			if( $tmpAdded ){
				$tmpRet .= ',';			
			} else {
				$tmpAdded = true;
			}
			$tmpRet .= $tmpToAdd;			
		}
		return $tmpRet;
	}

	public function get_ws_outline($request) {
		$tmpMsg = 'Version: ' . ActAppDesigner::getDataVersion();
		$tmpRootPath = ActAppCommon::getRootPath();
		$tmpCatalogs = self::getCatalogs();

		$tmpRet = '{
			"options": {
				"padding": false,
				"css": [
					".ws-outline table.outline > tbody > tr[oluse=\"select\"] {",
					"  cursor: pointer;",
					"}",
					".ws-outline table.outline > tbody > tr[oluse=\"collapsable\"] {",
					"  cursor: pointer;",
					"}",
					".ws-outline table.outline > tbody > tr > td.tbl-label {",
					"  width:20px;",
					"  color:black;",
					"  background-color: #eeeeee;",
					"}",
					".ws-outline table.outline > tbody > tr.active > td.tbl-label {",
					"  background-color: #777777;",
					"  color: white;",
					"}",
					".ws-outline table.outline > tbody > tr > td.tbl-icon {",
					"  width:40px;",
					"}",
					".ws-outline table.outline > tbody > tr > td.tbl-icon2 {",
					"  width:80px;",
					"}",
					".ws-outline table.outline > tbody > tr > td.tbl-details {",
					"  font-weight:bolder;",
					"  overflow:auto;",
					"  width:auto;",
					"}",
					".ws-outline table.outline > tbody > tr.active[type=\"page\"] > td.tbl-label {",
					"  background-color: #21ba45;",
					"}",
					".ws-outline table.outline > tbody > tr.active[type=\"app\"] > td.tbl-label {",
					"  background-color: #2185d0;",
					"}",
					".ws-outline table.outline > tbody > tr.active[type=\"resource\"] > td.tbl-label {",
					"  background-color: #a333c8;",
					"}"
				],
				"extra": {
					"previewPort": 33461
				},
				"baseURL": "'.$tmpRootPath.'"
			},
			"content": [
				{
					"ctl": "tbl-ol-node",
					"type": "workspace",
					"name": "workspace",
					"item": "",
					"details": "Workspace",
					"meta": "&#160;",
					"classes": "ws-outline",
					"level": 3,
					"icon": "hdd outline",
					"color": "black",
					"group": "workspace-outline",
					"content": [
						{
							"ctl": "tbl-ol-node",
							"type": "catalogs",
							"details": "Catalogs",
							"meta": "&#160;",
							"classes": "ws-editor-outline",
							"level": 2,
							"icon": "archive",
							"color": "black",
							"group": "workspace-outline",
							"content": [' . $tmpCatalogs . ']
						}
					]
				}
			]
		}';
		
		header('Content-Type: application/json');
		echo $tmpRet;
		exit();
	}


}

add_action('rest_api_init', array('ActAppDesignerDataController', 'initInstance'));
  

