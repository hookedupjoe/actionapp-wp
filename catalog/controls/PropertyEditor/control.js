(function (ActionAppCore, $) {

  var ControlSpecs = {
    "options": {
      "padding": true
    },
    "content": [{
      "ctl": "header",
      "name": "header",
      "text": "Properties"
    },
      {
        "name": "name",
        "label": "Name",
        "ctl": "field",
        "req": true
      },
      {
        "name": "ctl",
        "label": "Web Control",
        "onChange": {
          "run": "webControlChange"
        },
        "ctl": "dropdown",
        "list": {
          "source": "PropertyEditor_controls"
        },
        "req": true
      },
      {
        "name": "label",
        "label": "Label",
        "ctl": "field"
      },
      {
        "name": "req",
        "label": "Required",
        "can_set__type": "standard",
        "ctl": "checkbox",
        "list": "|yes"
      },
      {
        "name": "list",
        "label": "List",
        "ctl": "field"
      },
      {
        "name": "text",
        "label": "Text",
        "ctl": "field"
      },
      {
        "name": "icon",
        "label": "Icon",
        "ctl": "field"
      },
      {
        "name": "color",
        "label": "Select Color",
        "ctl": "dropdown",
        "list": {
          "source": "sys_colors"
        }
      },
      {
        "name": "size",
        "label": "Size",
        "ctl": "dropdown",
        "list": {
          "source": "sys_sizes"
        }
      },
      {
        "name": "classes",
        "label": "Class name(s)",
        "ctl": "field"
      },
      {
        "name": "styles",
        "label": "CSS style(s)",
        "ctl": "field"
      },
      {
        "name": "placeholder",
        "label": "Placeholder",
        "ctl": "field"
      },
      {
        "name": "note",
        "label": "Note",
        "ctl": "field"
      },
      {
        "name": "multi",
        "label": "Allow Multiple Values",
        "ctl": "checkbox",
        "list": "|yes"
      },
      {
        "name": "hidden",
        "label": "Hidden",
        "ctl": "checkbox",
        "list": "|yes"
      },
      {
        "name": "row",
        "label": "Row (side by side)",
        "ctl": "checkbox",
        "list": "|yes"
      },
      { name: 'floating', label: 'Floating', "ctl": "checkbox", "list": "|yes"},
      { name: 'dividing', label: 'Dividing', "ctl": "checkbox", "list": "|yes"},
      { name: 'block', label: 'Block', "ctl": "checkbox", "list": "|yes"},
      { name: 'link', label: 'Link', "ctl": "checkbox", "list": "|yes"},
      { name: 'fluid', label: 'Fluid', "ctl": "checkbox", "list": "|yes"},
      { name: 'raised', label: 'Raised', "ctl": "checkbox", "list": "|yes"},
      { name: 'tall', label: 'Tall', "ctl": "checkbox", "list": "|yes"},
      { name: 'stacked', label: 'Stacked', "ctl": "checkbox", "list": "|yes"},
      { name: 'piled', label: 'Piled', "ctl": "checkbox", "list": "|yes"},
      { name: 'vertical', label: 'Vertical', "ctl": "checkbox", "list": "|yes"},
      { name: 'loading', label: 'Loading', "ctl": "checkbox", "list": "|yes"},
      { name: 'inverted', label: 'Inverted', "ctl": "checkbox", "list": "|yes"},
      { name: 'bottom', label: 'Bottom', "ctl": "checkbox", "list": "|yes"},
      { name: 'top', label: 'Top', "ctl": "checkbox", "list": "|yes"},
      { name: 'attached', label: 'Attached', "ctl": "checkbox", "list": "|yes"},
      { name: 'padded', label: 'Padded', "ctl": "checkbox", "list": "|yes"},
      { name: 'slim', label: 'Slim', "ctl": "checkbox", "list": "|yes"},
      { name: 'compact', label: 'Compact', "ctl": "checkbox", "list": "|yes"},
      { name: 'secondary', label: 'Secondary', "ctl": "checkbox", "list": "|yes"},
      { name: 'tertiary', label: 'Tertiary', "ctl": "checkbox", "list": "|yes"},
      { name: 'circular', label: 'Circular', "ctl": "checkbox", "list": "|yes"},
      { name: 'clearing', label: 'Clearing', "ctl": "checkbox", "list": "|yes"},
      { name: 'right', label: 'Right', "ctl": "checkbox", "list": "|yes"},
      { name: 'left', label: 'Left', "ctl": "checkbox", "list": "|yes"},
      { name: 'center', label: 'Center', "ctl": "checkbox", "list": "|yes"},
      { name: 'aligned', label: 'Aligned', "ctl": "checkbox", "list": "|yes"},
      { name: 'basic', label: 'Basic', "ctl": "checkbox", "list": "|yes"},
      {
        "name": "rows",
        "label": "Number of rows",
        "ctl": "dropdown",
        "list": "Default|,1,2,3,4,5,6,7,8,9,10,15,20"
      }]
  }
  var ControlCode = {};
  //--- Do not edit or place code above this area (only JSON ControlSpecs Edit)
  //--- ActAppDesigner ---: No Edit



  // ControlCode.setup = setup;
  // function setup() {
  //   //--- placeholder
  // }

  ControlCode._controlScope = {
    isSetup: false
  }

  ControlCode._onPreInit = _onPreInit;
  function _onPreInit() {
    //--- Set source values used by this control only - one time for all instances
    var tmpScope = ControlCode._controlScope;
    if (!(tmpScope.isSetup)) {
      //ToDo: check for PropertyEditor_controls?
      ActionAppCore.addSources({
        PropertyEditor_controls: 'Segment|segment,Header|header,Field|field,Drop Down List|dropdown,Radio List|radiolist,Checkbox List|checkboxlist,TextArea|textarea,Message|message,Button|button,Div|div,Span|span,UI|ui,Title|title,Divider|divider,Seperator|sep'
      });
      this.initScopedInfo();
      tmpScope.isSetup = true;
    }
  }
  
  ControlCode.initScopedInfo = function(){
    var tmpScope = this._controlScope;
    var tmpWebControls = ActionAppCore.getListSource('PropertyEditor_controls');
    var tmpCtlIndex = {};
    for( var iPos in tmpWebControls ){
      var tmpEntry = tmpWebControls[iPos];
      var tmpLabel = tmpEntry[0];
      var tmpName = tmpEntry[1];
      var tmpInfo = {
        label: tmpLabel,
        name: tmpName
      }
      tmpCtlIndex[tmpName] = tmpInfo;
    }
    tmpScope.ctlIndex = tmpCtlIndex;
  }
  
  ControlCode.initShowIndex = initShowIndex;
  function initShowIndex() {
    this.showIndex = {};
    var tmpExcludeIndex = {name:1,ctl:1};
    var tmpIndex = this.getIndex();
    for( var iName in tmpIndex.fields ){
      if( !(tmpExcludeIndex[iName]) ){
        this.showIndex[iName] = false;  
      }
    }
  }

  ControlCode.resetShowIndex = resetShowIndex;
  function resetShowIndex() {
    for( var iName in this.showIndex ){
      this.showIndex[iName] = false;
    }
  }
  
  
  ControlCode.refreshFromShowIndex = refreshFromShowIndex;
  function refreshFromShowIndex() {
    for( var iName in this.showIndex ){
      if(iName){
        this.setFieldDisplay(iName,this.showIndex[iName]);
      }
    }
  }

  ControlCode.refreshShowIndex = refreshShowIndex;
  function refreshShowIndex(theAutoRefresh) {
    var tmpCtl = this.getFieldValue('ctl');
    if( !(tmpCtl) ){
      this.resetShowIndex();
    } else {
      var tmpWebCtl = ThisApp.controls.getWebControl(tmpCtl);
      var tmpPropList = [];
      if(tmpWebCtl.getPropList){
        tmpPropList = tmpWebCtl.getPropList();
      }
      for( var iName in this.showIndex ){
        var tmpShowFlag = (tmpPropList.indexOf(iName) >= 0);
        this.showIndex[iName] = tmpShowFlag;
      }
    }
    if( theAutoRefresh !== false){
      this.refreshFromShowIndex();
    }
  }
  
  ControlCode._onInit = _onInit;
  function _onInit() {
    //--- ref to control wide info (all instances)
    this.ctlIndex = this._controlScope.ctlIndex;
    //--- this instance show flags
    this.initShowIndex();
  }


  ControlCode.webControlChange = function() {
    var tmpCtl = this.getFieldValue('ctl');
    if( !(tmpCtl) ){
      return;
    }
    this.refreshShowIndex(true);
    

  }





  //--- ActAppDesigner ---: No Edit
  //--- Do not edit or place code below this area
  var ThisControl = {
    specs: ControlSpecs,
    options: {
      proto: ControlCode,
      parent: ThisApp
    }};
  return ThisControl;
})(ActionAppCore, $);