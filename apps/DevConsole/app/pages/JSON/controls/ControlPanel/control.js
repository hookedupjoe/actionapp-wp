/*
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
				"ctl":"button",
				"text": "Format JSON",
				"color": "purple",
				"pageaction": "formatJson"
			},
			{
				"ctl":"button",
				"text": "Clear JSON",
				"pageaction": "clearJson"
			},
			{
				"ctl":"sep",
				"clearing": true
			},
			{
				"ctl":"button",
				"text": "Copy to Clipbaord",
				"color": "blue",
				"fluid": true,
				"pageaction": "toClipboard"
			},
			{
				"ctl":"sep",
				"clearing": true,
				'fitted': true
			},
			{
				"ctl":"button",
				"text": "Select All",
				"color": "blue",
				"fluid": true,
				"pageaction": "selectAll"
			}
		]
	}

		var ControlCode = {};
	var ThisControl = {specs: ControlSpecs, options: { proto: ControlCode, parent: ThisApp }};


	return ThisControl;

})(ActionAppCore, $);

