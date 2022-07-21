(function (ActionAppCore, $) {

  var ControlSpecs = {
    "options": {
      "padding": false
    },
    "content": [{
        "ctl": "spot",
        "name": "container"
      }]
  }


  var ControlCode = {};


  ControlCode.setup = setup;
  function setup(theOptions) {
    var tmpOptions = theOptions || {};

  }

  ControlCode._onInit = _onInit;
  function _onInit() {
    this.config = {
      
    };

    this.pageIndex = {};

    this.loadSpot('container', '<div myspot="body" class="ui segment mar0 pad4">&nbsp;</div>');

    //ThisApp.resizeToLayout(this.getSpot('body'));
  }


  ControlCode.sayHello = sayHello;
  function sayHello() {
    this.loadSpot('body',"hello");
  }

  var ThisControl = {
    specs: ControlSpecs,
    options: {
      proto: ControlCode,
      parent: ThisApp
    }};
  return ThisControl;
})(ActionAppCore, $);