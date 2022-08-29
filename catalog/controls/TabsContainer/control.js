(function (ActionAppCore, $) {

  var ControlSpecs = {
    "options": {
      "padding": false
      
    },
    "content": [{
      "ctl": "layout",
      "name": "layoutTabs",
      "north": [{
        "ctl": "spot",
        "name": "nav"
      }],
      "center": [{
        "ctl": "spot",
        "name": "cards"
      }],
      "south": false
    }]
  };

  var ControlCode = {};

  ControlCode.setup = setup;
  function setup(theOptions) {
    var tmpOptions = theOptions || {};
    if (tmpOptions.group) {
      this.config.group = tmpOptions.group;
    }
    

  }

  ControlCode._onInit = _onInit;
  function _onInit() {
    //this.parts = {};
    this.uniqueName = 'tab-group' + ThisApp.controls.getNextCounter();
    this.config = {
      group: this.uniqueName
    };

    this.tabIndex = {};
    var tmpPostFix = '-' + this.uniqueName;
    //--- Load initial wrapper with new spot names "myspot"
    this.loadSpot('nav', '<div myspot="navbody' + tmpPostFix + '" ctluse="dev-console-nav" class="pad0 ui top attached tabular slim menu"></div>');
    this.loadSpot('cards', '<div myspot="cardbody' + tmpPostFix + '" ctluse="dev-console-cards"></div>');

  }


  ControlCode.gotoTab = gotoTab;
  function gotoTab(theTabName) {
    ThisApp.gotoTab({
      item: theTabName, group: this.config.group
    });
    //--ToDo: Scroll nav into view;
    // var tmpNavEl = this.getByAttr$({
    //   appuse: "tablinks", item: theTabName, group: this.config.group
    // });
  }

  ControlCode.loadTabSpot = loadTabSpot;
  function loadTabSpot(theTabName, theContent, theOptionalTemplate) {
    var tmpItem = theTabName;
    if (this.tabIndex.hasOwnProperty(tmpItem)) {
      var tmpSpotName = this.getSpotName(theTabName);
      if (!(tmpSpotName)) {
        console.error("Spot not found for " + theTabName);
        return;
      }
      this.loadSpot(tmpSpotName, theContent, theOptionalTemplate);
    } else {
      console.error("Spot not found for " + theTabName);
      return;
    }
  }

  //--- Control Action: closeTabRequest
  ControlCode.closeTabRequest = function(theParams, theTarget){
      var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['tab']);
      var tmpTabName = tmpParams.tab;
      if( !(tmpTabName) ){
          alert('Could not close tab, no tab name provided');
      }
      this.closeTab(tmpTabName);
      this.publish('closeTab',[this,tmpTabName]);
  }

  //--- ToDo: Add control mgmt with destroy and reopen tab
  ControlCode.closeTab = closeTab;
  function closeTab(theTabName) {

    if( this.parts[theTabName] ){
      var tmpToRemove = this.parts[theTabName];
      if( tmpToRemove && tmpToRemove._subid ){
          tmpToRemove.unsubscribe('',tmpToRemove._subid);
      }
      if( tmpToRemove && tmpToRemove.destroy ){
          tmpToRemove.destroy();
      }
      delete this.parts[theTabName];
    }

    var tmpAttrs = this.getByAttr$({group:this.config.group,item:theTabName});
    tmpAttrs.remove();
    tmpAttrs = this.getByAttr$({group:this.config.group,item:''});
    if( tmpAttrs && tmpAttrs.length > 0){
      var tmpItem = $(tmpAttrs.get(tmpAttrs.length-1)).attr('item');
      //--- ToDo: Go to last tab, track open tab history?
      this.gotoTab(tmpItem);
    }
    if( this.tabIndex.hasOwnProperty(theTabName) ){
      delete this.tabIndex[theTabName];
    }
    

  }

  ControlCode.getTabSpot = getTabSpot;
  function getTabSpot(theTabName) {
    return this.getSpot$(this.getSpotName(theTabName));
  }

  ControlCode.getSpotName = getSpotName;
  function getSpotName(theTabName) {
    var tmpItem = theTabName;
    if (this.tabIndex.hasOwnProperty(tmpItem)) {
      var tmpDetails = this.tabIndex[tmpItem];
      if (tmpDetails && tmpDetails._spotname) {
        return tmpDetails._spotname;
      }
      return '';
    }
  }

  function onTabAction(){
    console.log( 'onTabAction', arguments);
    this.publish('tabAction',[this])
  }
  
  //--- Will create a new tab with dynamic content or open if exists already
  //--- ** Use addTab for simple tab with a spot for general use
  ControlCode.openTab = openTab;
  function openTab(theOptions) {
    if( !(theOptions) ){
      return;
    }
    var tmpOptions = theOptions || {};
    var tmpTabKey = tmpOptions.tabname || tmpOptions.name || tmpOptions.item;
    var tmpTabTitle = tmpOptions.tabtitle || tmpOptions.itemtitle || tmpOptions.title || tmpTabKey;
    if (this.parts[tmpTabKey]) {
      this.gotoTab(tmpTabKey);
    } else {
      //--- ToDo: Expose external / centralize ???
      var tmpCloseMe = '<i style="margin-right:-5px;margin-left:10px;" tab="' + tmpTabKey + '" myaction="closeTabRequest" class="icon close grey inverted"></i>';

      var tmpSetupDetails = tmpOptions;
      var tmpControlName = tmpSetupDetails.controlname || 'PostsView';
      var tmpControlSource = tmpSetupDetails.catalog || '_designer';
      var tmpThis = this;
      ThisApp.getResourceFromSource('control', tmpControlName, tmpControlSource, tmpControlName).then(function (theLoadedControl) {
        var tmpNewTabControl = theLoadedControl.create(tmpTabKey);
        tmpThis.addTab({ item: tmpTabKey, text: tmpTabTitle + tmpCloseMe, icon: (tmpOptions.icon || ''), content: '' })
        var tmpNewSpot = tmpThis.getTabSpot(tmpTabKey);
        tmpNewTabControl.loadToElement(tmpNewSpot).then(function () {
          tmpThis.parts[tmpTabKey] = tmpNewTabControl;
          //--- Go to the newly added card (to show it and hide others)
          if (tmpNewTabControl.setup) {
            tmpNewTabControl.setup(tmpSetupDetails);
          }
          if (tmpControlName) {
            var tmpSubID = tmpNewTabControl.subscribe('tabAction', onTabAction.bind(this))
            tmpNewTabControl._subid = tmpSubID;
          }
          ThisApp.delay(1).then(function () {
            tmpThis.gotoTab(tmpTabKey);
          })
        });
      })
    }
  }



  ControlCode.addTab = addTab;
  function addTab(theOptions) {
    var tmpOptions = theOptions || {};
    var tmpGroup = this.config.group;
    var tmpItem = tmpOptions.item;
    if (!tmpItem) {
      console.error("No item provided");
      return;
    }
    if (this.tabIndex.hasOwnProperty(tmpItem)) {
      this.gotoTab(tmpItem);
      return;
    }
    this.tabIndex[tmpItem] = ThisApp.clone(tmpOptions);
    var tmpAction = 'selectMe';
    if (tmpOptions.action) {
      tmpAction = tmpOptions.action;
    }
    var tmpAttrs = '';
    if (tmpOptions.attr) {
      tmpAttrs = tmpOptions.attr;
    }
    var tmpIcon = '';
    if (tmpOptions.icon) {
      tmpIcon = tmpOptions.icon;
      if( tmpIcon.indexOf('icon') == -1){
        tmpIcon = 'icon ' + tmpIcon;
      }
    }
    var tmpText = '';
    if (tmpOptions.text) {
      tmpText = tmpOptions.text;
    }

    var tmpNav = '<a appuse="tablinks" group="' + tmpGroup + '" item="' + tmpItem + '" action="' + tmpAction + '"  ' + tmpAttrs + ' class="item black active">&nbsp;';
    if (tmpIcon) {
      tmpNav += '<i class="' + tmpIcon + '"></i>';
    }
    if (tmpText) {
      tmpNav += '' + tmpText + '&nbsp;';
    }
    tmpNav += '</a>';

    var tmpSpotName = '';
    if (tmpOptions.spotname) {
      tmpSpotName = tmpOptions.spotname;
    } else {
      tmpSpotName = 'spot-for-' + tmpItem;
    }

    this.tabIndex[tmpItem]._spotname = tmpSpotName;

    var tmpContent = '';
    if (tmpOptions.content) {
      tmpContent = tmpOptions.content;
    }
    var tmpCard = '<div appuse="cards" class="hidden" myspot="' + tmpSpotName + '" group="' + tmpGroup + '" item="' + tmpItem + '">';
    tmpCard += tmpContent + '</div>';

    var tmpPostFix = '-' + this.uniqueName;
    this.addToSpot('navbody' + tmpPostFix, tmpNav);
    this.addToSpot('cardbody' + tmpPostFix, tmpCard);
    this.gotoTab(tmpItem);
  }


  var ThisControl = {
    specs: ControlSpecs,
    options: {
      proto: ControlCode,
      parent: ThisApp
    }};
  return ThisControl;
})(ActionAppCore, $);
