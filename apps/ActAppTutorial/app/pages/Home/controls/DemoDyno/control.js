(function (ActionAppCore, $) {

	var ControlSpecs = { 
		options: {
			padding: true
		},
		content: [
		  {
			"ctl": "button",
			"color": "green",
			"basic": true,
			"size": "large",
			"onClick": {
				"run": "action",
				"action": "runTest",
				"validate": false
			},
			"labeled": true,
			"right": true,
			"icon": "bug",
			"name": "btn-submit",
			"text": "Run Test"
		},
		{
			ctl: "spot",
			name: "dyno1",
			text: "Click button to load dynamic created panel created from JSON"
		},
		{
			ctl: "spot",
			name: "dyno2",
			text: ""
		},
		{
			ctl: "spot",
			name: "body",
			text: ""
		}
		]
	}

	var ControlCode = {};

    ControlCode.setup = setup;
    function setup(){
        this.loadSpot('body','setup');
    }
    
    ControlCode.runTest = function(){
      
      var tmpPanelSpec = { 
      		options: {
      			padding: true
      		},
      		content: [
      		  {
      			"ctl": "button",
      			"color": "blue",
      			"basic": true,
      			"size": "large",
      			"onClick": {
      				"run": "publish",
				      "event": "hello"
      			},
      			"name": "btn-hello",
      			"text": "Say Hello"
      		},
      		{
      			ctl: "spot",
      			name: "hellobody",
      			text: ""
      		}
      		]
      	}

      var tmpControl = this.newControl || ThisApp.controls.newControl(tmpPanelSpec, {parent:this});
      var tmpName = 'onthefly1';
      var tmpInstance = tmpControl.create(tmpName);
      var tmpSpot = this.getSpot$('dyno1');
      tmpInstance.loadToElement(tmpSpot);
      tmpInstance.subscribe('hello', onSayHello.bind(this));
      //or use helper -> tmpInstance.subscribe('hello',this.getSayHello());
      
      var tmpInstance2 = tmpControl.create('onthefly2');
      tmpInstance2.loadToElement(this.getSpot$('dyno2'));
      tmpInstance2.subscribe('hello', onSayHello.bind(this));
    };

  var totalCreated = 1;

  ControlCode.getSayHello = function(){
    return onSayHello.bind(this);
  };
  
  function onSayHello(theEvent, theControl){
    theControl.loadSpot('hellobody','Hello back at ya');
    var tmpButton = theControl.getItem("btn-hello").el;
    tmpButton.addClass('disabled').addClass('loading');
    ThisApp.delay(1000).then(function(){
      tmpButton.removeClass('disabled').removeClass('loading');
      theControl.loadSpot('hellobody','');
    })
    
    if( this.saidHello !== true ){
      this.saidHello = true;
      this.loadSpot('body','The new button says hello<br/>');
      return;
    }
    this.addToSpot('body','... hello again<br/>');
  }

	var ThisControl = {specs: ControlSpecs, options: { proto: ControlCode, parent: ThisApp }};
	return ThisControl;
})(ActionAppCore, $);