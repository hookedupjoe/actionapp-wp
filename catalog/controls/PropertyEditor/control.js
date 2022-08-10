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
        "name": "req",
        "label": "Required",
        "can_set__type": "standard",
        "ctl": "checkbox",
        "list": "|yes"
      },
      {
        "name": "label",
        "label": "Label",
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
        "name": "list",
        "label": "List",
        "ctl": "field"
      },
      {
        "name": "clearing",
        "label": "Clearing",
        "ctl": "checkbox",
        "list": "|yes"
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




  ControlCode.setup = setup;
  function setup() {
    console.log("Ran setup")
  }

  ActionAppCore.controlScope._PropertyEditor = ActionAppCore.controlScope._PropertyEditor || {
    isSetup: false,
    ctlList: false,
    fieldList: false,
    itemList: false,
    fieldList: false,
    privAlwaysVis: {
      'name': true,
      'ctl': true
    },
    privControlInfo: {
      _flist: {
        'field': true, 'checkbox': true, 'checkboxlist': true, 'radiolist': true, 'dropdown': true
      },
      'req': {
        _f: true
      }
    }
  }

  ControlCode._onPreInit = _onPreInit;
  function _onPreInit() {
    //--- Set source values used by this control only - one time for all instances
    if (!(ControlCode.scopeInfo)) {
      console.log('ControlCode.scopeInfo', ControlCode.scopeInfo);
      ControlCode.scopeInfo = ActionAppCore.controlScope._PropertyEditor;
      console.log('set ControlCode.scopeInfo', ControlCode.scopeInfo);
      ActionAppCore.addSources({
        PropertyEditor_controls: 'Segment|segment,Header|header,Field|field,Drop Down List|dropdown,Radio List|radiolist,Checkbox List|checkboxlist,TextArea|textarea,Spot|spot,Message|message,Button|button,Div|div,Span|span,UI|ui,Title|title,Divider|divider,Seperator|sep'
      });
      ControlCode.scopeInfo.isSetup = true;

    }

  }

  ControlCode._onInit = _onInit;
  function _onInit() {
    console.log('ControlCode.scopeInfo', ControlCode.scopeInfo);
  }


  ControlCode.webControlChange = function() {
    var tmpCtl = this.getFieldValue('ctl');


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