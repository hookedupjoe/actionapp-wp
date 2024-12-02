(function (ActionAppCore, $) {

    var ControlSpecs = {
      options: {
        padding: false
      },
      content: [{
        "ctl": "layout",
        "name": "lo",
        "north": [{
          ctl: 'div',
          name: 'toolbar',
          content: [{
            ctl: "spot",
            name: "top-toolbar",
            classes: "ui pad5 button-flow",
            styles: "min-height:40px;",
            xclasses: "ui labeled icon compact pad5",
            hidden: false,
            content: ''
          },
            {
              ctl: 'divider',
              fitted: true,
              clearing: true
            }]
        }],
        "center": [{
          ctl: "control",
          name: "report",
          catalog: "_designer",
          controlname: "ReportViewerFrame"
        }]
  
      }]
    };
  
    var ControlCode = {};
  
    function onTableBuilt() {
      //--- Take any action needed once table is fully created.
  
    }
  
    ControlCode._onPreInit = function() {
    }
    ControlCode.getMainForm = function() {
      return this.parentControl.parts[this.mainFormName];
    }
    ControlCode._onInit = function() {
      var tmpBaseURL = ActionAppCore.ActAppWP.rootPath;
      var tmpViewer = this.getViewControl();
      var tmpDataView = this.getConfigItem('dataview') || 'people';
      var tmpFormControlName = this.getConfigItem('formControl') || 'mainform';
  
      tmpViewer.setReportURL(tmpBaseURL + '/wp-json/actappdesigner/dataview/?dataview=' + tmpDataView);
      tmpViewer.subscribe('selectionChange', refreshSelection.bind(this));
      tmpViewer.subscribe('tableBuilt', onTableBuilt.bind(this));
      this.mainFormName = tmpFormControlName || 'mainform';
  
      
  
      var tmpToolbarSpec = {
        options: {
          padding: false
        },
        content: []
      };
  
  
      var tmpNewDocSpec = {
        "ctl": "button",
        "toLeft": true,
        "color": "blue",
        "icon": "plus",
        compact: true,
        "name": "btn-page-tb-new",
        "label": "Add",
        "myaction": "newDoc"
      };
  
      var tmpEditDocSpec = {
        "ctl": "button",
        "toLeft": true,
        "color": "blue",
        "icon": "pencil",
        compact: true,
        "name": "btn-page-tb-edit",
        "label": "Edit",
        "myaction": "editDoc"
      }
  
      var tmpRecycleDocSpec = {
        "ctl": "button",
        "toLeft": true,
        "color": "blue",
        "icon": "trash",
        compact: true,
        "name": "btn-page-tb-recycle",
        "label": "Recycle",
        "myaction": "recycleSelected"
      }
  
  
  
      tmpToolbarSpec.content.push(tmpNewDocSpec);
      tmpToolbarSpec.content.push(tmpEditDocSpec);
      tmpToolbarSpec.content.push(tmpRecycleDocSpec);
  
      //tmpToolbarSpec.content.push(tmpParentTestSpec);
      var tmpToolbarConfig = this.getConfigItem('toolbar');
  
      this.toolbarConfig = tmpToolbarConfig;
      if (tmpToolbarConfig && tmpToolbarConfig.items) {
        for (var iPos in tmpToolbarConfig.items) {
          tmpToolbarSpec.content.push(tmpToolbarConfig.items[iPos])
        }
      }
  
      var tmpControl = this.topToolbar || ThisApp.controls.newControl(tmpToolbarSpec, {
        parent: this
      });
      this.topToolbar = tmpControl;
  
      var tmpName = 'topToolbar';
      var tmpInstance = tmpControl.create(tmpName);
      var tmpSpot = this.getSpot('top-toolbar');
      tmpInstance.loadToElement(tmpSpot);
      this.parts[tmpName] = tmpInstance;
      
      //--- No scrollbars on toolbar header
      var tmpTBFrame = tmpSpot.closest('.ui-layout-pane');
      tmpTBFrame.css('overflow','hidden');
     
  
      this.getViewControl().initSearch();
      if (this.initRan === true) {
        return;
      }
      this.initRan = true;
      this.dataVersion = 0;
  
      this.thisReportSetup();
  
    };
  
    ControlCode.getViewControl = getViewControl;
    function getViewControl() {
      return this.parts.report;
    }
  
    ControlCode.getConfigItem = getConfigItem;
    function getConfigItem(theName) {
      var tmpParentControl = this.parentControl;
      var tmpSpecs = this.reportViewSpecs || false;
      if (!tmpSpecs && tmpParentControl) {
        var tmpConfig = tmpParentControl.getConfig();
        if (tmpConfig && tmpConfig.options && tmpConfig.options.reportViewSpecs) {
          tmpSpecs = tmpConfig.options.reportViewSpecs;
        }
        this.reportViewSpecs = tmpSpecs || false;
  
      }
      if (tmpSpecs) {
        if (tmpSpecs[theName]) {
          return tmpSpecs[theName];
        }
      }
      return '';
  
    }
    ControlCode.getCatalogName = getCatalogName;
    function getCatalogName() {
      return this.getConfigItem('formCatalog') || 'supercharger';
    }
  
    ControlCode.getFormName = getFormName;
    function getFormName() {
      return this.getConfigItem('formControl') || 'SuperchargerForm';
    }
  
  
  
    ControlCode.thisReportSetup = function() {
      var tmpCols = this.getConfigItem('columns');
  
      if (!tmpCols) {
        tmpCols = [{
          "title": "Name",
          "field": "name",
          frozen: true
        },
          {
            "title": "Title",
            "field": "title"
          }]
      }
      // Define columns based on Tabulator column documentation
      var tmpTableCols = tmpCols;
  
  
      //--- Use tableConfig to include any Tabulator config options
      //    ... used with new Tabulator({...});
      this.getViewControl().setup( {
  
        tableConfig: {
          initialSort: [ {
            column: "issuemonth",
            dir: "desc"
          },
            {
              column: "issueyear",
              dir: "desc"
            }]
        },
        columns: tmpTableCols
      });
    };
  
    ControlCode.newDoc = function() {
      var tmpViewer = this.getViewControl();
      tmpViewer.addNewDoc({
        formcontrol: this.getMainForm()});
    };
  
    //--- Use this in the case where you want more control
    // ControlCode.newDocRaw = function() {
    //   var self = this;
    //   var tmpViewer = this.getViewControl();
    //   self.parts.mainform.prompt({isNew: true}).then(function(theSubmit, theData) {
    //     if (!theSubmit) {
    //       return;
    //     }
    //     self.parts.mainform.submitForm().then(function() {
    //       tmpViewer.showReport();
    //     });
    //   });
  
    // };
  
    ControlCode.editDoc = function() {
      var tmpViewer = this.getViewControl();
      tmpViewer.editSelectedDoc({
        formcontrol: this.getMainForm()});
    };
  
    ControlCode.recycleSelected = function() {
      var tmpViewer = this.getViewControl();
      tmpViewer.recycleSelected();
  
    };
  
  
    ControlCode.refreshSelection = refreshSelection;
    function refreshSelection() {
      var tmpViewer = this.getViewControl();
  
      var tmpNoneDisabled = (tmpViewer.counts.selected === 0);
      this.setItemDisabled('btn-page-tb-recycle',
        tmpNoneDisabled);
  
      var tmpNotOneDisabled = (tmpViewer.counts.selected !== 1);
      this.setItemDisabled('btn-page-tb-edit',
        tmpNotOneDisabled);
  
      if (this.toolbarConfig && this.toolbarConfig.displayRules) {
        var tmpRules = this.toolbarConfig.displayRules;
        for (var iName in tmpRules) {
          var tmpRule = tmpRules[iName];
          if (tmpRule == 'anyselected') {
            this.setItemDisabled(iName,
              tmpNoneDisabled);
          } else if (tmpRule == 'oneselected') {
            this.setItemDisabled(iName,
              tmpNotOneDisabled);
          }
        }
      }
      this.publish('selectionChanged',
        [this,
          tmpViewer,
          tmpViewer.mainTable]);
    }
  
    var ThisControl = {
      specs: ControlSpecs,
      options: {
        proto: ControlCode,
        parent: ThisApp
      }};
    return ThisControl;
  })(ActionAppCore, $);