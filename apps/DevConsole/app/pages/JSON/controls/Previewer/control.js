/*
Author: Joseph Francis
License: MIT
*/
(function (ActionAppCore, $) {

  var ControlSpecs = {
    "options": {
      padding: false,
    },
    "content": [{
      ctl: "control",
      catalog: "_designer",
      controlname: "AceEditor",
      name: "editor",
      text: ""
    }]
  }

  function _onParentResize() {
    var tmpThis = this;
    tmpThis.parts.editor.resizeToParent();
    ThisApp.delay(10).then(function() {
      tmpThis.parts.editor.resizeToParent();
    });

  }

  function setupEditor() {
    if (this.editorSetup === true) {
      return;
    }
    this.editorSetup = true;

    this.aceEditor = this.parts.editor.codeEditor;
    this.aceEditor.setFontSize(16);

    var tmpThis = this;
    ace.config.loadModule('ace/ext/beautify', function (theResults) {
      tmpThis.beautify = theResults;
    });

    var tmpThis = this;
    this.aceEditor.on('change', function () {
      //Do anything on change here with tmpThis as this

    });


  }

  function _onInit() {

    if (this.parentControl) {
      this.subscribeEvent(this.parentControl, 'resized', this._onParentResize.bind(this));
    }
    this.setupEditor();
    this._onParentResize();
  }

  // function _onDestroy(){
  //   console.log('_onDestroy');
  //   for( var iKey in this.__subcriptions){
  //           console.log('has sub' + iKey);
  //       }

  //   //this.unsubscribeAllEvents();
  //   //this.parentControl.unsubscribe('resized');//, this._onParentResize.bind(this)
  // }
  var ControlCode = {
    _onInit: _onInit,
    // _onDestroy: _onDestroy,
    _onParentResize: _onParentResize,
    setupEditor: setupEditor
  };
  var ThisControl = {
    specs: ControlSpecs,
    options: {
      proto: ControlCode,
      parent: ThisApp
    }};


  return ThisControl;

})(ActionAppCore, $);