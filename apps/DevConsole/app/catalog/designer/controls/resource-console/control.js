/*
Author: Joseph Francis
License: MIT
*/
(function (ActionAppCore, $) {

	var ControlSpecs = {
		"options": {
			"padding": false
		},
		"content": [
			{
				ctl: "layout",
				north: [
					{
						"ctl": "spot",
						"name": "nav-tabs"
					},
					{
						"ctl": "field",
						"name": "title",
						"fluid": true,
						"readonly": true,
						"inputClasses": "title",
						"default": "Resource",
						"placeholder": "",
						"content": [
							{
								"ctl": "button",
								"color": "blue",
								"icon": "save",
								"disabled": true,
								"name": "btn-save",
								"label": "Save",
								"onClick": {
									"run": "action",
									"action": "saveContent"
								}
							},
							{
								"ctl": "button",
								"color": "black",
								basic: true,
								right: true,
								"icon": "recycle",
								"name": "btn-reload-page",
								"label": "Reload",
								onClick: {
									"run": "action",
									action: "reloadPage"
								}
							},
							{
								"ctl": "button",
								"color": "black",
								hidden: false,
								basic: true,
								right: true,
								"icon": "cancel",
								"name": "btn-close-page",
								"label": "Close",
								onClick: {
									"run": "action",
									action: "closeMe"
								}
							}
						]
					}
				],
				center: [
					{
						ctl: "layout",
						name: "layout",
						east: [
							{
								ctl: "spot",
								name: "preview-area",
								text: "Preview"
							}
						],
						north: [
							{
								"ctl": "button",
								"color": "black",
								basic: true,
								"name": "btn-format",
								"label": "Format",
								"onClick": {
									"run": "action",
									"action": "formatCode"
								}
							},
							{
								"ctl": "button",
								"color": "green",
								toRight: true,
								hidden: true,
								"name": "btn-set-data",
								"label": "Set Preview Object",
								"onClick": {
									"run": "action",
									"action": "setPreviewObject"
								}
							},
							{
								"ctl": "button",
								"color": "purple",
								toLeft: true,
								"name": "btn-refresh-page",
								"label": "Refresh Preview",
								"onClick": {
									"run": "action",
									"action": "refreshControlDisplay"
								}
							}
						],
						center: [
							{
								ctl: "control",
								"controlname": "app/catalog/designer/controls/AceEditor",
								name: "editor",
								text: ""
							}

						]

					}
				]
			}
		]

	}

	var ControlCode = {
		setup: setup,
		preLoad: preLoad,
		isCodeDirty: isCodeDirty,
		markClean: markClean,
		refreshFromSource: refreshFromSource,
		refreshFromLoaded: refreshFromLoaded,
		refreshEditorFromCodeIndex: refreshEditorFromCodeIndex,
		showCode: showCode,
		saveContent: saveContent,
		uniqueGroups: uniqueGroups,
		setupEditor: setupEditor,
		refreshTabNav: refreshTabNav,
		_onInit: _onInit,
		_onParentResize: _onParentResize
	};

	function _onParentResize() {
		

	}

	ControlCode.isActive = function () {
		var tmpIsVis = this.getItemEl('btn-save').is(":visible");
		return tmpIsVis;
	}
	function _onInit() {
		//this.parts.resources.subscribe('selectMe', onResSelect.bind(this))
		var tmpThis = this;
		ThisApp.subscribe('saveRequested', function () {
			if (!tmpThis.isActive()) { return }
			var tmpIsDirty = tmpThis.refreshButtonStatus();
			if (tmpIsDirty) {
				tmpThis.saveContent();
			}
		})

	}

	function onResSelect(theEvent, theControl, theTarget) {
		this.publish('selected', [theControl, theTarget])
	}


	//--- Run before
	function preLoad(theDetails) {

	}
	//---- Initial Setup of the control
	function setup(theDetails) {


		var tmpPageName = theDetails.pagename || '';
		var tmpCatName = theDetails.catname || '';
		var tmpAppName = theDetails.appname || '';
		var tmpResName = theDetails.resname || '';
		var tmpResType = theDetails.restype || '';

		tmpResType = ThisApp.controls.getUnifiedName(tmpResType);

		var tmpSource = tmpOptions.source || 'ws';


		var tmpShowName = tmpResName.replace('.html', '')
			.replace('.json', '')
			.replace('.js', '')

		this.setFieldValue('title', '[' + tmpResType + '] ' + tmpShowName);

		this.details = {
			pagename: tmpPageName,
			source: tmpSource,
			title: tmpShowName,
			appname: tmpAppName,
			catname: tmpCatName,
			resname: tmpResName,
			restype: tmpResType
		}
		
		this.setItemDisplay('btn-set-data', (tmpResType == 'Template' || tmpResType == 'Templates'));

		this.aceSessionType = "ace/mode/javascript"
		if (tmpResType == 'HTML' || tmpResType == 'Template' || tmpResType == 'html' || tmpResType == 'Templates') {
			this.aceSessionType = "ace/mode/html"
		}
		this.setupEditor();

		this.refreshTabNav();
		var tmpBaseURL = this.getParentPage().common.getBaseURL();

		this.endpointURL = tmpBaseURL + '/wp-json/actappdesigner/get-catalog-res.json?catname=' + tmpCatName + '&resname=' + tmpResName + '&restype=' + tmpResType;
		this.refreshFromSource();
	}

	function uniqueGroups(theUniqueness) {
		var tmpIndex = this.getIndex();
		if (tmpIndex && tmpIndex.items) {
			for (var aName in tmpIndex.items) {
				var tmpEntry = tmpindex.all[aName];
				if (tmpEntry && ThisApp.util.isStr(tmpEntry.group)) {
					tmpEntry.group += theUniqueness;
				}
			}
		}
	}

	function onEditorResize(){
		this.parts.editor.resizeToParent();
	}
	function setupEditor() {
		if (this.editorSetup === true) {
			return;
		}
		var tmpThis = this;

		this.editorSetup = true;

		//this.aceEditorEl = this.getSpot("ace-editor");
		//this.aceEditor = ace.edit(this.aceEditorEl.get(0));
		this.aceEditor = this.parts.editor.codeEditor;
		if( this.context.page && this.context.page.controller ){
			this.context.page.controller.subscribe('resized', onEditorResize.bind(this));
		}
		//this.aceEditor.setTheme("ace/theme/tomorrow_night_bright");
		this.aceEditor.setFontSize(16);

		ace.config.loadModule('ace/ext/beautify', function (theResults) {
			tmpThis.beautify = theResults;

			tmpThis.aceEditor.setOptions({
				enableBasicAutocompletion: true,
				enableSnippets: true,
				enableLiveAutocompletion: false
			});

		});

		var tmpThis = this;
		this.aceEditor.on('change', function () {
			//--- ToDo: Check for actual changes to account for undo
			//     and add a reset to original button for each session
			tmpThis.refreshButtonStatus();
		})

	}

	ControlCode.refreshButtonStatus = refreshButtonStatus;
	function refreshButtonStatus() {
		var tmpThis = this;
		var tmpIsDirty = false;
		for (var aName in tmpThis.loaded.sessions) {

			if ((tmpThis.isCodeDirty(aName))) {

				tmpIsDirty = true;
				break;
			}
		}

		tmpThis.setItemDisabled('btn-save', !tmpIsDirty)
		return tmpIsDirty;
	}

	function markClean() {
		for (var aName in this.loaded.sessions) {
			var tmpSession = this.loaded.sessions[aName];
			this.loaded.codeIndex[aName] = tmpSession.getValue();
			tmpSession.getUndoManager().markClean();
		}
		this.refreshButtonStatus();
	}

	function isCodeDirty(theName) {
		var tmpSession = this.loaded.sessions[theName];

		try {
			var tmpCode = tmpSession.getValue();
			var tmpOrig = this.loaded.codeIndex[theName];
			if (tmpOrig == tmpCode) {
				tmpSession.getUndoManager().markClean();
			} else {
				return true;
			}
		} catch (error) {
			return true;
		}
		return false;
	}
	function initSession(theSession) {
		theSession.setTabSize(2);
	}
	function refreshEditorFromCodeIndex() {
		for (var aName in this.loaded.codeIndex) {
			var tmpCode = this.loaded.codeIndex[aName];
			if (!(this.loaded.sessions[aName])) {
				this.loaded.sessions[aName] = ace.createEditSession(aName, this.aceSessionType || "ace/mode/javascript")
				initSession(this.loaded.sessions[aName]);
			}
			this.loaded.sessions[aName].setValue(tmpCode);
		}
	}

	var defaultCodeName = 'thisPageSpecs'
	function refreshFromLoaded() {
		this.refreshEditorFromCodeIndex();
		this.showCode();
		this.markClean();
		this.refreshControlDisplay();
	}

	function saveContent() {
		var tmpThis = this;
		var tmpNewCodeIndex = {};
		for (var aName in this.loaded.sessions) {
			var tmpSession = this.loaded.sessions[aName];
			var tmpCode = tmpSession.getValue();
			tmpNewCodeIndex[aName] = tmpCode;
		}

		var tmpContentText = tmpNewCodeIndex["content"];


		var tmpRequest = {
			pagename: this.details.pagename,
			appname: this.details.appname || '',
			catname: this.details.catname || '',
			resname: this.details.resname || '',
			restype: this.details.restype || '',
			content: tmpContentText
		}

		var tmpBaseURL = this.getParentPage().common.getBaseURL();
		tmpEndpoint = tmpBaseURL + '/wp-json/actappdesigner/save-catalog-res';

		ThisApp.apiCall({
			url: tmpEndpoint,
			data: tmpRequest
		}).then(function (theReply) {
			if( theReply && theReply.status === false){
				var tmpMsg = "There was an error, contact support with these details: " + theReply.error || '(unknown error)';
				alert(tmpMsg,"Error","e");
				return;
			}
			tmpThis.setItemDisabled('btn-save', true);
			tmpThis.markClean();
		})


	}
	function showCode(theParams) {
		var tmpParams = theParams || 'content';
		if (typeof (tmpParams) == 'string') {
			tmpParams = { name: tmpParams }
		}
		var tmpName = tmpParams.name || tmpParams.codename || defaultCodeName;
		this.aceEditor.setSession(this.loaded.sessions[tmpName])
	}

	function refreshFromSource() {
		var tmpThis = this;

		ThisApp.apiCall(this.endpointURL).then(function (theReply) {
			var tmpIndex = { content: 0 };
			var tmpParts = [theReply];
			var tmpCodeIndex = {};

			tmpThis.loaded = {
				index: tmpIndex,
				parts: tmpParts,
				codeIndex: tmpCodeIndex,
				sessions: {}
			}
			for (var aName in tmpIndex) {
				var tmpCode = tmpParts[tmpIndex[aName]];
				tmpCodeIndex[aName] = tmpCode
			}

			tmpThis.refreshFromLoaded();


		})
	}








	//======


	//======


	/**
	 */



	ControlCode.refreshOnActivate = refreshOnActivate;
	function refreshOnActivate() {
		this.refreshTabNav();
	}

	ControlCode.refreshTabNav = refreshTabNav;
	function refreshTabNav() {
		this.details = this.details || {};

		var tmpHTML = this.context.page.controller.getSubNavTabs(this.details);
		if ((tmpHTML)) {
			this.loadSpot('nav-tabs', tmpHTML.join(''))
		}
	}


	ControlCode.showControl = showControl;
	function showControl(theControlSpec) {

		if (this.activeControl) {
			this.activeControl.destroy();
			delete (this.activeControl)
		}
		//-- ToDo: If active control, destroy it
		this.activeControl = this.activeControlSpec.create(this.activeControlName);
		var tmpCheckPath = '';
		ThisApp.loadWebResouces(this.activeControl, tmpCheckPath, tmpCheckPath);

		this.activeControl.loadToElement(this.spot$('preview-area'))

		//--- allow console access for testing
		window.activeControl = this.activeControl;

		//this.loadFieldList()
	}

	ControlCode.showControlDetails = showControlDetails;
	function showControlDetails() {
		var tmpDetails = activeControl.getWebControlDetails()
		this.aceEditor.setValue(ThisApp.json(tmpDetails.data));
		this.aceEditor.clearSelection();
	};


	function showDetailsJson(theObject) {
		this.aceEditor.setValue(ThisApp.json(theObject, true));
		this.aceEditor.clearSelection();
	}

	ControlCode.showControlSpecConfig = showControlSpecConfig;
	function showControlSpecConfig() {
		showDetailsJson(this.loadedControlSpec.controlConfig);
	};

	function getTarget(theEvent) {
		var tmpEl = theEvent.target || theEvent.currentTarget || theEvent.delegetTarget || false;
		if (tmpEl) {
			tmpEl = $(tmpEl);
			var tmpName = tmpEl.attr('name');
			if (!(tmpName)) { return false; };
			return { name: tmpName, el: tmpEl };
		}
		return false;
	}

	function frmPreviewFocusChange(theEvent) {
		if (theEvent && theEvent.target) {
			var tmpTarget = $(theEvent.target);
			var tmpFN = tmpTarget.attr('name');
			setSelectedField(tmpFN);
		}
	}
	function frmPreviewChange(theEvent) {
		var tmpTarget = getTarget(theEvent);
		var tmpFN = tmpTarget.name;
		setSelectedField(tmpFN);
	};

	ControlCode.fieldToggleDisplay = fieldToggleDisplay;
	function fieldToggleDisplay() {
		var tmpFN = getSelectedField();
		if (!tmpFN) {
			return alert("Select a field");
		}
		var tmpIsVis = activeControl.getFieldDisplay(tmpFN);
		activeControl.setFieldDisplay(tmpFN, !tmpIsVis)
	};

	ControlCode.fieldSetValue = fieldSetValue;
	function fieldSetValue() {
		var tmpFN = getSelectedField() || '';
		this.fieldSelect.focus();
		if (!tmpFN) { return alert("Select a field to set first") }

		var tmpDefault = activeControl.getFieldValue(tmpFN);

		ThisApp.input("Enter a new value", "New Value", "Set field value", tmpDefault).then(function (theValue) {
			if (!(theValue)) { return };
			activeControl.setFieldValue(tmpFN, theValue);

		})

	};

	ControlCode.fieldShowSpecs = fieldShowSpecs;
	function fieldShowSpecs() {
		var tmpFN = getSelectedField() || '';
		if (!tmpFN) { return alert("Select a Field") }
		var tmpSpecs = activeControl.getFieldSpecs(tmpFN);
		var tmpCtlName = tmpSpecs.ctl || 'field';

		var tmpCtl = ThisApp.controls.webControls.get(tmpCtlName);
		if (tmpCtl && tmpCtl.getInfo) {
			var tmpInfo = tmpCtl.getInfo(tmpCtlName);
		} else {
			alert("Not found " + tmpCtlName)
		}

		tmpSpecs.controlDetails = tmpInfo;

		showDetailsJson(tmpSpecs);
	};

	ControlCode.fieldGoto = fieldGoto;
	function fieldGoto() {
		var tmpFN = getSelectedField() || '';
		if (!tmpFN) { return alert("Select a Field") }
		activeControl.gotoField(tmpFN);
	};

	function setSelectedField(theFieldName) {
		ControlCode.fieldSelectEl.dropdown('set exactly', [theFieldName]);
	}
	function getSelectedField() {
		var tmpVal = this.fieldSelectEl.dropdown('get value');
		return tmpVal
	}

	ControlCode.loadFieldList = loadFieldList;
	function loadFieldList() {
		var tmpConfig = activeControl.getConfig();
		if (!tmpConfig && tmpConfig.index && tmpConfig.index.fields) {
			return alert("No tmpField found in form config index")
		}
		var tmpFieldList = [];
		var tmpFields = tmpConfig.index.fields;
		for (var aField in tmpFields) {
			var tmpField = tmpFields[aField];
			tmpFieldList.push({
				name: tmpField.label || aField,
				value: aField
			});
		}

		this.fieldSelect.dropdown('change values', tmpFieldList)
		this.selectedFieldName = '';
	};


	ControlCode.showFieldInfo = showFieldInfo;
	function showFieldInfo(theFieldName) {
		var tmpFN = theFieldName || '';
		if (!tmpFN) {
			return alert("No field name")
		}
		var tmpConfig = activeControl.getConfig();
		if (!tmpConfig && tmpConfig.index && tmpConfig.index.fields) {
			return alert("No tmpField found in form config index")
		}
		var tmpFields = tmpConfig.index.fields;
		var tmpFieldInfo = tmpFields[tmpFN];
		if (!tmpFieldInfo) {
			return alert("No field details")
		}

		showDetailsJson(tmpFieldInfo);

	};

	ControlCode.validateActiveControl = validateActiveControl;
	function validateActiveControl() {
		var tmpValidation = activeControl.validate();
		if (!tmpValidation.isValid) {
			//Message shows automatically
			//alert("Not valid, see form for deatils", "Did not pass validation", "i");
		} else {
			alert("Your good", "Passed Validation", "c")
		}
	};



	ControlCode.refreshControlDisplay = refreshControlDisplay;
	function refreshControlDisplay() {


		var tmpResType = this.details.restype;


		if (tmpResType == 'HTML' || tmpResType == 'html') {
			var tmpContent = this.aceEditor.getValue();
			this.loadSpot('preview-area', tmpContent);
		} else if (tmpResType == 'Template' || tmpResType == 'Templates') {
			var tmpContent = this.aceEditor.getValue();
			var tmpTplName = 'resource-console--preview--only--' + this.details.resname;
			ThisApp.addTemplate(tmpTplName,tmpContent);
			this.loadSpot('preview-area', this.previewObject || {},tmpTplName);
		} else if (tmpResType == 'Panel') {
			var tmpObject = this.aceEditor.getValue();
			tmpObject = ThisApp.json(tmpObject);
			this.activeControlSpec = ThisApp.controls.newControl(tmpObject, { parent: this });
			this.activeControlSpec.parent = this;
			this.showControl();
		} else if (tmpResType == 'Control') {
			var tmpCode = this.aceEditor.getValue();
			this.activeControlSpec = eval(tmpCode);
			this.activeControlSpec = ThisApp.controls.newControl(this.activeControlSpec.specs, this.activeControlSpec.options || {})
			this.activeControlSpec.parent = this;
			this.showControl()
		} else {
			console.error("Unknown resource type " + tmpResType)
		}
	};

	
	ControlCode.setPreviewObject = setPreviewObject;
	function setPreviewObject() {
		var tmpThis = this;
		ThisApp.input("Enter JSON", "Valid JSON Required").then(
			function(theReply){
				var tmpDoc = JSON.parse(theReply);
				tmpThis.previewObject = tmpDoc;
			}
		);		
	}

	ControlCode.formatCode = formatCode;
	function formatCode() {
		this.beautify.beautify(this.aceEditor.session);
		this.refreshButtonStatus();
	}

	ControlCode.reloadPage = function () {
		var tmpThis = this;
		var tmpIsDirty = tmpThis.refreshButtonStatus();
		if (tmpIsDirty) {
			ThisApp.confirm("Are you sure you want to refresh and lost changes?", "Unsaved Changes")
				.then(function (theIsYes) {
					if (theIsYes) {
						tmpThis.refreshFromSource();
					}

				})
		} else {
			tmpThis.refreshFromSource();
		}

	};


	ControlCode.closeMe = function () {
		this.context.page.controller.closeResourceConsole(this.details);
	}

	//==== END
	var ThisControl = { specs: ControlSpecs, options: { proto: ControlCode, parent: ThisApp } };

	return ThisControl;
})(ActionAppCore, $);

