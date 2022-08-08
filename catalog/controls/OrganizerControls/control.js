/*
SearchBar Control

Author: Joseph Francis
License: MIT
*/
(function (ActionAppCore, $) {

	var ControlSpecs = {
		"options": {
			"padding": true
		},
		"content": [
			{
				"ctl": "fieldrow",
				"name": "options",
				"items": [
					{
						"ctl": "button",
						"color": "green",
						"icon": "search",
						"classes": "field",
						"name": "btn-select-mode",
						"text": "Select Mode",
						"myaction": "selectModeSelected"
					},
					{
						"ctl": "button",
						"icon": "close",
						"text": "Move Mode",
						"color": "violet",
						"classes": "field",
						"name": "btn-move-mode",
						"myaction": "moveModeSelected"
					}
				]
			}
		]
	}

  var ControlCode = {};

	function _onInit() {
	
	}
	
	

	//---- Return control
	var ThisControl = {specs: ControlSpecs, options: { proto: ControlCode, parent: ThisApp }};
	return ThisControl;

})(ActionAppCore, $);

