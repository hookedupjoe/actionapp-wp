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
				"text": "Test Document"
			},
			{
				"ctl": "message",
				"color": "blue",
				"size": "large",
				"name": "welcome",
				"hidden": true,
				"text": "Enter test document details below"
			},
			{
				"ctl": "fieldrow",
				"items": [
					{
						"label": "Test Name",
						"ctl": "field",
						"name": "name",
						"req": true
					},
					{
						"label": "Short Desc",
						"ctl": "field",
						"name": "desc",
						"req": true
					}
				]
			},
			{
				"ctl": "divider",
				"color": "blue",
				"size": "medium",
				"text": "Other Details"
			},
			{
				"ctl": "fieldrow",
				"label": "More Options",
				"name": "options-row",
				"items": [
					{
						"ctl": "radiolist",
						"name": "one",
						"label": "Select one option",
						"onChange": {
							"run": "showif",
							"field": "one-other",
							"value": "other"
						},
						"list": "This Option|this,That Option|that,The Other Option|other",
						"note": "Other option shows more stuff",
						"req": false
					},
					{
						"ctl": "checkboxlist",
						"name": "one-other",
						"label": "Select any of these",
						"list": "One,Two,Three,Four,Five",
						"req": true
					}
				]
			},
			{
				"ctl": "fieldrow",
				"name": "selections-row",
				"items": [
					{
						"ctl": "dropdown",
						"name": "track",
						"label": "Track",
						"list": "Business,Technical",
						"req": false
					},
					{
						"ctl": "dropdown",
						"multi": true,
						"name": "topic",
						"label": "Select Topic(s)",
						"list": "Work,Play,Meetup,Play More,Other",
						"req": false
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
		var tmpDocTitle = tmpData.name;
		var tmpBaseURL = ActionAppCore.ActAppWP.rootPath;
		var tmpPostOptions = {
			formSubmit: false,
			data: tmpData,
			url: tmpBaseURL + '/wp-json/actappdesigner/savedoc?open&doctype=test&doctitle=' + tmpDocTitle
		}
		return ThisApp.apiCall(tmpPostOptions);
	}

	//=== End
	var ThisControl = { specs: ControlSpecs, options: { proto: ControlCode, parent: ThisApp } };

	return ThisControl;
})(ActionAppCore, $);

