(function (ActionAppCore, $) {

    var ControlSpecs = {
      options: {
        padding: false
      },
      content: [{
        "ctl": "layout",
        "attr": {
          "rem-template": "customDemo1"
        },
        "name": "lo",
        "north": [{
          "ctl": "control",
          "catalog": "_designer",
          "controlname": "MainHeader",
          "name": "header"
  
        }],
        "center": [{
          ctl: "control",
          catalog: "_designer",
          controlname: "AceEditor",
          name: "editor",
          text: ""
        }],
        "west": [{
          "ctl": "control",
          "catalog": "_designer",
          "controlname": "TabsContainer",
          "name": "controls"
        }],
        "south": false
      }]
    }
  
    var ControlCode = {};
  
    ControlCode.setup = setup;
    function setup(theDetails) {
      console.log("Setup Details", theDetails);
    }
  
    ControlCode.setupButtonPanel = function() {
  
      var tmpPanelSpec = {
        "options": {
          "padding": true
        },
        "content": [{
          "ctl": "button",
          "text": "Format JSON",
          "color": "purple",
          "myaction": "formatJson"
        },
          {
            "ctl": "button",
            "text": "Clear JSON",
            "myaction": "clearJson"
          },
          {
            "ctl": "sep",
            "clearing": true
          },
          {
            "ctl": "button",
            "text": "Copy to Clipbaord",
            "color": "blue",
            "fluid": true,
            "myaction": "toClipboard"
          },
          {
            "ctl": "sep",
            "clearing": true,
            'fitted': true
          },
          {
            "ctl": "button",
            "text": "Select All",
            "color": "blue",
            "fluid": true,
            "myaction": "selectAll"
          },{
            ctl:'dropdown',
            name: 'theme',
            label: 'Select Theme',
            list:  {"source": "ace_plugin_themes"},
            "onChange": {
                          "run": "changeTheme"
                      }
          }]
      }
  
      var tmpControl = this.newControl || ThisApp.controls.newControl(tmpPanelSpec, {
        parent: this
      });
      var tmpName = 'controlbuttons';
      var tmpInstance = tmpControl.create(tmpName);
      //var tmpSpot = this.getSpot$('controls');
      var tmpSpot = this.parts.controls.getTabSpot('json');
      tmpInstance.loadToElement(tmpSpot);
      this.parts[tmpName] = tmpInstance;
      console.log('tmpName',tmpInstance);
  
    };
  
    ControlCode.setupImportButtonPanel = function() {
  
      var tmpPanelSpec = {
        "options": {
          "padding": true
        },
        "content": [{
          "ctl": "button",
          "text": "Import JSON documents",
          fluid: true,
          "color": "purple",
          "myaction": "importJson"
  
        },
          {
            "ctl": "sep",
            "clearing": true,
            'fitted': true
          },
          {
            "ctl": "button",
            "text": "Validate",
            fluid: true,
            "myaction": "validateJson"
          },
          {
            "ctl": "sep",
            "clearing": true
          },
          {
            "ctl": "spot",
            "name": "importlog"
          }]
      }
  
      var tmpControl = this.newControl || ThisApp.controls.newControl(tmpPanelSpec, {
        parent: this
      });
      var tmpName = 'importbuttons';
      var tmpInstance = tmpControl.create(tmpName);
      //var tmpSpot = this.getSpot$('controls');
      var tmpSpot = this.parts.controls.getTabSpot('import');
      tmpInstance.loadToElement(tmpSpot);
      this.parts[tmpName] = tmpInstance;
      
  
    };
  
    function editorSetupCallback(theEditor,theControl){
      theEditor.setTheme("ace/theme/tomorrow_night_bright");
      theEditor.setFontSize(16);
      theEditor.setValue(ThisApp.json({data:[]}));
      this.jsonEditor = theEditor;
    }
    
    ControlCode._onInit = _onInit;
    function _onInit() {
      this.parts.header.setText('Import / Export');
      this.parts.editor.setup({editorSetupCallback:editorSetupCallback.bind(this)});
      
      this.parts.controls.addTab({
        item: 'import', text: 'Import', icon: 'icon down arrow', content: ''
      });
      this.parts.controls.addTab({
        item: 'export', text: 'Export', icon: 'icon up arrow', content: ''
      });
      this.parts.controls.addTab({
        item: 'json', text: 'JSON', icon: 'icon edit outline', content: ''
      });
      this.parts.controls.gotoTab('import');
      this.setupButtonPanel();
      this.setupImportButtonPanel();
      
      
  
    }
  
  
    //--- Import tab
    ControlCode.importJson = function () {
      var tmpValidation = this.validateJson(false, true);
      if(tmpValidation !== true){
        return;
      }
      var tmpData = this.parts.editor.getJsonAsObject();
      ThisApp.confirm("Do you want to import now?", "Import from JSON","q").then(function(theReply){
        if( !theReply ){
          return;
        }
        
        var tmpURL = ActionAppCore.ActAppWP.rootPath + '/wp-json/actappdesigner/import-docs';
        ThisApp.apiCall({url:tmpURL,data:tmpData}).then(
            function(theReply){
                console.log('demoImport Reply',theReply);
                alert('Import Complete','Data Imported','c');
            }
        );
      
        
      })
      console.log('tmpData', tmpData);
      
  
  
    }
    ControlCode.validateJson = function (theIsSilent, theSilentSuccess) {
      var tmpData = this.parts.editor.getJsonAsObject();
      
      if (tmpData !== false) {
        if (!Array.isArray(tmpData.data)) {
          if (theIsSilent !== true){
            alert('A data array must be included to import.', 'No data object', 'e');
          }
          return ['A data array must be included to import.', 'No data object', 'e'];
        }
        if (tmpData.data.length === 0) {
          if (theIsSilent !== true) alert('Nothing to import.', 'No documents in data object', 'e');
          return ['Nothing to import.', 'No documents in data object', 'e'];
        }
      } else {
        
        if (theIsSilent !== true) alert('JSON is not valid', 'Invalid JSON', 'e');
        return ['JSON is not valid','Invalid JSON','e'];
      }
      if (theIsSilent !== true && theSilentSuccess !== true){
        alert('Validation complete','Good to go!','c');
      } 
      return true;
    }
  
    //--- JSON Tab
    ControlCode.clearJson = function () {
      this.parts.editor.clearJson()
    }
  
    ControlCode.selectAll = function () {
      this.parts.editor.selectAll()
    }
  
    ControlCode.toClipboard = function () {
      this.parts.editor.toClipboard()
    }
  
    ControlCode.formatJson = function () {
      this.parts.editor.formatJson()
    }
  
    ControlCode.loadJson = function (theObj) {
      this.parts.editor.loadJson(theObj)
    }
  
    ControlCode.changeTheme = function (theObj) {
      if(this.parts.controlbuttons){
        var tmpThemeName = this.parts.controlbuttons.getFieldValue('theme');
        if( tmpThemeName ){
          this.jsonEditor.setTheme("ace/theme/" + tmpThemeName);
        }
      }
    };
  
  
    var ThisControl = {
      specs: ControlSpecs,
      options: {
        proto: ControlCode,
        parent: ThisApp
      }};
    return ThisControl;
  })(ActionAppCore, $);