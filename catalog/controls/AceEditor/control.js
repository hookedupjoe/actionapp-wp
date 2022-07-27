/*
Author: Joseph Francis
License: MIT
*/
(function (ActionAppCore, $) {

	var ControlSpecs = {
		"options": {
			padding: false,
		},
		"content": [
			{
				"ctl": "spot",				
				"name": "code-editor"
			}
		]
	}

	var ControlCode = {};

	ControlCode.setParentEl = setParentEl;
	function setParentEl(theParentEl) {
		this.parentEl = theParentEl;
	}
	
	ControlCode.resizeToParent = resizeToParent;
	function resizeToParent(theParentEl) {
		var tmpSpot = this.getSpot$('code-editor');
		tmpSpot.height($(tmpSpot.context).height());

		var tmpParent = this.parentEl;
		
		if( !(tmpParent) ){
			console.error('Could not resizeToParent due to no parent being found or passed');
			return;	
		}
		var tmpH = tmpParent.height();
		var tmpW = tmpParent.width();
		if( tmpH == 0 ){
			tmpParent = this.parentEl.closest('.ui-layout-pane');
			tmpH = tmpParent.height();
			tmpW = tmpParent.width();
		}

		ThisApp.util.resizeToParent(this.codeEditor.container)

		if (this.codeEditorEl && this.codeEditor) {
			this.codeEditorEl
			.css('height', '' + tmpH + 'px')
			.css('width', '' + tmpW + 'px')
			.css('position', 'relative');
			this.codeEditor.resize(true);
			this.codeEditorEl.show();
		}
	}
	ControlCode.setValue = setValue;
	function setValue(theValue) {
		this.codeEditor.setValue(theValue);
		this.codeEditor.clearSelection();
	}
	ControlCode.getValue = getValue;
	function getValue(theValue) {
		return this.codeEditor.getValue(theValue);
	}
	
	
	ControlCode._onInit = _onInit;
	function _onInit() {
		this.codeEditorEl = this.getSpot$('code-editor')

		this.codeEditor = ace.edit(this.codeEditorEl.get(0));
		//this.codeEditor.setTheme("ace/theme/tomorrow_night_bright");
		this.codeEditor.setFontSize(16);
		this.codeEditor.session.setMode("ace/mode/json");
		this.codeEditor.session.setTabSize(2);

		this.codeEditor.setValue(ThisApp.json({}));
		
		if( this.parentControl ){
			this.subscribeEvent(this.parentControl, 'resized', this.resizeToParent.bind(this) );
		} else if( this.context && this.context.page && this.context.page.controller ){
			this.subscribeEvent(this.parent, 'resized', this.resizeToParent.bind(this) );
		}
		this.resizeToParent();

	}


	ControlCode.clearJson = clearJson;
	function clearJson() {
		this.codeEditor.setValue('{}');
		this.selectAll();
	}

	ControlCode.selectAll = selectAll;
	function selectAll() {
		this.codeEditor.selectAll();
		this.codeEditor.focus();
	}
	ControlCode.toClipboard = toClipboard;
	function toClipboard() {
		navigator.clipboard.writeText(this.codeEditor.getValue());
		this.codeEditor.focus();
	}

	ControlCode.formatJson = formatJson;
	function formatJson() {
			
		var tmpJSON = this.codeEditor.getValue();
		var tmpConverter = {};//<-- Do not remove, used below in eval
		try {
			var tmpEval = eval('tmpConverter =' + tmpJSON);
			this.loadJson(tmpEval);
		} catch (ex) {
			try {
			if (tmpJSON.startsWith('var ')) {
				tmpJSON = tmpJSON.replace("var ", "tmpConverter.");
			}
			var tmpEval = eval(tmpJSON);
			this.loadJson(tmpEval);
			} catch (ex) {
			console.error("formatJson err", ex);
			alert("Invalid JSON", "Format Error", "e");
			}
		}
		this.codeEditor.clearSelection();

	}

	ControlCode.loadJson = loadJson;
	function loadJson(theObj) {
		this.codeEditor.setValue(ThisApp.json(theObj, true));
		this.codeEditor.clearSelection();
	}

	//---- Return Control
	var ThisControl = { specs: ControlSpecs, options: { proto: ControlCode, parent: ThisApp } };
	return ThisControl;

})(ActionAppCore, $);


