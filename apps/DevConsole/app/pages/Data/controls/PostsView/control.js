(function (ActionAppCore, $) {

    var ControlSpecs = {
      options: {
        padding: false
      },
      content: [
        {
          "ctl": "layout",
          "attr": {
            "rem-template": "customDemo1"
          },
          "name": "lo",
          "north": [{
            ctl: 'div',
            name: 'toolbar',
            content: [{
              "ctl": "ui",
              "name": "search-toolbar",
              "classes": "labeled icon compact pad5",
              hidden: false,
              "content": [ {
                "ctl": "button",
                "toLeft": true,
                "color": "blue",
                "icon": "plus",
                compact: true,
                "name": "btn-page-tb-open",
                "label": "Open in new tab",
                "onClick": {
                  "run": "action",
                  "action": "openURL"
  
                }
              },
                {
                  "ctl": "button",
                  "toLeft": true,
                  "color": "blue",
                  "icon": "trash",
                  compact: true,
                  "name": "btn-page-tb-recycle",
                  "label": "Recycle",
                  "onClick": {
                    "run": "action",
                    "action": "recycleSelected"
                  }
                }]
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
     //--- Anything when initially created the table
    }
  
    ControlCode._onInit = function() {
      var tmpBaseURL = ActionAppCore.ActAppWP.rootPath;
      var tmpViewer = this.getViewControl();
      var tmpPostType = 'actappdoc';
      //tmpViewer.setReportURL(ActionAppCore.ActAppWP.rootPath + '/wp-json/actappdesigner/alldocs?fields=(none)&doctype=&posttype=' + tmpPostType + '');
      tmpViewer.subscribe('selectionChange', refreshSelection.bind(this));
      tmpViewer.subscribe('tableBuilt', onTableBuilt.bind(this));
      
  
      //window.reportViewer = this;
      this.lastScrollH = 0;
      this.lastScrollV = 0;
  
      this.getViewControl().initSearch();
      if (this.initRan === true) {
        return;
      }
      this.initRan = true;
      this.dataVersion = 0;
  
      //this.thisReportSetup();
      // ThisApp.delay(1000).then(function(){
  
      // })
    };
  
    ControlCode.getViewControl = getViewControl;
    function getViewControl() {
      return this.parts.report;
    }

    // ControlCode._onDestroy = function() {
    //   for( var aPart in this.parts ){
    //     var tmpPart = this.parts[aPart]
    //     if( tmpPart && tmpPart.destroy ){
    //       tmpPart.destroy();
    //       console.log('aPart destroyed',aPart);
    //     }
    //   }
    // }

    ControlCode.setup = function(theOptions) {
      var tmpPostType = theOptions.itemname;
      this.posttype = tmpPostType;
      this.getViewControl().setReportURL(ActionAppCore.ActAppWP.rootPath + '/wp-json/actappdesigner/alldocs?fields=(none)&doctype=&posttype=' + tmpPostType + '');
      this.thisReportSetup();
    }

    ControlCode.thisReportSetup = function() {
      // Define columns based on Tabulator column documentation
      var tmpTableCols = [ {
        "title": "Title",
        "field": "__posttitle",
        frozen: true
      },
        {
          "title": "Date",
          "field": "__postdate"
        },
        {
          "title": "Post ID",
          "field": "__id"
        },
        {
          "title": "Doc Type",
          "field": "__doctype"
        }];
  
  
      //--- Use tableConfig to include any Tabulator config options
      //    ... used with new Tabulator({...});
      this.getViewControl().setup( {
  
        tableConfig: {
          groupBy:'__doctype',
          initialSort: [ {
            column: "name",
            dir: "asc"
          }]
        },
        columns: tmpTableCols
      });
    };
  
    ControlCode.newDoc = function() {
      var self = this;
  
      var tmpBaseURL = ActionAppCore.ActAppWP.rootPath;
      var tmpThis = this;
      var tmpViewer = this.getViewControl();
  
      self.parts.mainform.prompt({
        title: 'Add Application', submitLabel: 'Save Application'
      }).then(function(theSubmit, theData) {
        if (!theSubmit) {
          return;
        }
  
        self.parts.mainform.submitForm().then(function() {
          tmpViewer.showReport();
        });
  
      });
  
  
  
    };
  
    ControlCode.editDoc = function() {
      var tmpViewer = this.getViewControl();
      var tmpSelected = tmpViewer.getSelectedKeys();
      var tmpRow = tmpViewer.mainTable.getRow(tmpSelected[0]);
      var self = this;
  
      self.parts.mainform.prompt({
        title: 'Edit Application Definition',
        submitLabel: 'Save Changes',
        doc: tmpRow._row.data
      }).then(function(theSubmit,
        theData) {
        if (!theSubmit) {
          return;
        }
  
        self.parts.mainform.submitForm().then(function() {
          tmpViewer.showReport();
        });
  
      });
  
    };
  
  
  
    ControlCode.openURL = function() {
      var tmpViewer = this.getViewControl();
      var tmpData = tmpViewer.mainTable.getSelectedData();
      if( !(tmpData && tmpData.length == 1) ){
        alert('Select one document to open');
        return;
      }
      var tmpDoc = tmpData[0];
      var tmpURL = tmpDoc['__url'];
      if( !tmpURL ){
        alert('No URL found');
        return;
      }
      window.open(tmpURL,'_blank');
    };
    ControlCode.recycleSelected = function() {
      var self = this;
      var tmpViewer = this.getViewControl();
      ThisApp.confirm('Recycle the selected documents?',
        'Recycle?').then(function(theIsYes) {
          if (theIsYes) {
            self.recycleSelectedRun();
          }
        });
    };
  
    ControlCode.recycleSelectedRun = function() {
      var tmpViewer = this.getViewControl();
      var tmpSelected = tmpViewer.getSelectedKeys();
      var self = this;
      var tmpData = {
        ids: tmpSelected
      };
  
      var tmpBaseURL = ActionAppCore.ActAppWP.rootPath;
      var tmpPostOptions = {
        formSubmit: false,
        data: tmpData,
        url: tmpBaseURL + '/wp-json/actappdesigner/recycle?open'
      };
  
      ThisApp.apiCall(tmpPostOptions).then(function() {
        tmpViewer.showReport();
      });
  
  
    };
  
    ControlCode.refreshSelection = refreshSelection;
    function refreshSelection() {
  
      var tmpViewer = this.getViewControl();
  
      var tmpSelDisabled = (tmpViewer.counts.filtered === 0);
      this.setItemDisabled('btn-select-filtered-footer',
        tmpSelDisabled);
      this.setItemDisabled('btn-select-filtered',
        tmpSelDisabled);
  
      var tmpNoneDisabled = (tmpViewer.counts.selected === 0);
      this.setItemDisabled('btn-page-tb-recycle',
        tmpNoneDisabled);
  
      var tmpNotOneDisabled = (tmpViewer.counts.selected !== 1);
      this.setItemDisabled('btn-page-tb-open',
        tmpNotOneDisabled);
    }
  
    var ThisControl = {
      specs: ControlSpecs,
      options: {
        proto: ControlCode,
        parent: ThisApp
      }};
    return ThisControl;
  })(ActionAppCore, $);
  