/*
Author: Joseph Francis
License: MIT
*/
(function (ActionAppCore, $) {

	var ControlSpecs = {
		"options": {padding: true},
		"content": [
			{
				"ctl": "title",
				"size": "Large",
				"color": "blue",
				"name": "title",
				"text": "Data View"
			},
			{
				"ctl": "message",
				"color": "blue",
				"size": "large",
				"name": "welcome",
				"hidden": true,
				"text": "Defines a data view export"
			},
			{
				"ctl": "fieldrow",
				"items": [
					{
						"label": "Data View Name",
						"ctl": "field",
						"name": "name",
            "note": "Unique, lowercase and one word",
						"size": 8,
						"req": true
					},
					{
						"label": "Label",
						"ctl": "field",
						"name": "label",
            "note": "Short and Title Case",
						"size": 8,
						"req": true
					}
				]
			},
			{
				"ctl": "fieldrow",
				"items": [
					{
						"label": "Doc Type",
						"ctl": "field",
						"name": "doctype",
						"req": false,
						"size": 8
					},
					{
						"label": "PostType",
						"ctl": "field",
						"name": "posttype",
						"default": "actappdoc",
						"req": true,
						"size": 8
					}
				]
			},
			{
				"name": "comments",
				"label": "Comments",
				"placeholder": "Enter any comments related to this person",
				"ctl": "textarea",
				"rows": 2
			},
			{
				"name": "id",
				"ctl": "hidden"
			},
			{
				"name": "__doctype",
				"ctl": "hidden"
			},
			{
				"name": "__title",
				"ctl": "hidden"
			},
			{
				"name": "tag",
				"ctl": "hidden"
			},
			{
				"ctl": "segment",
				"raised": true,
				"clearing": true,
				"name":'submit-bar',
				"content":[
					{
						"ctl": "button",
						"color": "blue",
						"size": "large",
						"onClick": {
							"run": "action",
							"action": "submitForm",
							"validate": true
						},
						"labeled": true,
						"right": true,
						"toright": true,
						"icon": "arrow right",
						"name": "btn-submit",
						"text": "Submit Form"
					}
				]
			}
			
	
		]
		
	}


	var ControlCode = {
		setup: setup,
		submitForm: submitForm,
		_onInit: _onInit
	};

	function setup() {
		// var tmpBaseURL = ActionAppCore.ActAppWP.rootPath;
		// var tmpURL = tmpBaseURL + '/wp-json/actappdesigner/json_from_csv?run&pos=auto';
		// var tmpThis = this;
		// ThisApp.apiCall(tmpURL).then(function(theReply){
		// 	console.log('tmpThis',tmpThis)
		// 	if( theReply && theReply.data && theReply.data.length ){
		// 		console.log('theReply',theReply);
		// 		tmpThis.loadData(theReply.data[0]);
		// 	}
		// })
	}
	
	function _onInit(){
		var tmpThis = this;
		window.personForm = this;
		ThisApp.delay(1).then(function(){
			tmpThis.setup();
		})
	}
	
	function submitForm() {
		var tmpData = this.getData();
		var tmpDocTitle = tmpData.label + ": " + tmpData.name;
		
		var tmpBaseURL = ActionAppCore.ActAppWP.rootPath;
		var tmpPostOptions = {
			formSubmit: false,
			data: tmpData,
			url: tmpBaseURL + '/wp-json/actappdesigner/savedesign?open&doctype=dataview&doctitle=' + tmpDocTitle
		}
		return ThisApp.apiCall(tmpPostOptions);
	}

	//=== End
	var ThisControl = { specs: ControlSpecs, options: { proto: ControlCode, parent: ThisApp } };

	return ThisControl;
})(ActionAppCore, $);

