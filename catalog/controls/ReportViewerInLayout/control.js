(function(ActionAppCore, $) {

    var ControlSpecs = {
      options: {
        padding: false,
        css: ['.table-footer {clear:right;line-height:30px;padding-left:10px;border:none;color: #2185d0;}']
      },
      content: [ {
        ctl: 'layout',
        name: 'layout',
        north: [ {
              ctl : 'divider',
              fitted : true,
              clearing : true
          },
          {
          "ctl": "field",
          "name": "search",
          fluid: true,
          "placeholder": "Search for ...",
          "content": [ {
            "ctl": "button",
            "color": "green",
            "name": "btn-do-search",
            "icon": "search",
            "onClick": {
              "run": "action",
              "action": "quickSearch"
            }
          }, {
            "ctl": "button",
            "icon": "close",
            "name": "btn-clear-search",
            basic: true,
            "color": "black",
            disabled: true,
            "onClick": {
              "run": "action",
              "action": "clearSearch"
            }
          }, {
            "ctl": "button",
            "icon": "square check green",
            basic: true,
            "color": "green",
            "name": "btn-select-filtered",
            "onClick": {
              "run": "action",
              "action": "selectFiltered"
            }
          }]
        }],
        south: [ {
          "ctl": "ui",
          "name": "footer-toolbar",
          "classes": "labeled icon compact pad0",
          "content": [{
            "ctl": "button",
            "color": "blue",
            "icon": "outline square check blue",
            "toLeft": true,
            compact: true,
            basic: true,
            "name": "btn-fb-all",
            "onClick": {
              "run": "action",
              "action": "selectAll"
            }
          },
            {
              "ctl": "button",
              "toLeft": true,
              "color": "blue",
              "icon": "outline times square blue",
              compact: true,
              basic: true,
              "name": "btn-fb-none",
              "onClick": {
                "run": "action",
                "action": "selectNone"
              }
            },
            {
              "ctl": "button",
              "toLeft": true,
              compact: true,
              basic: true,
              "color": "blue",
              "icon": "recycle",
              "name": "btn-tb-refresh",
              "onClick": {
                "run": "action",
                "action": "refresh"
              }
            },
            {
              "ctl": "button",
              "toLeft": true,
              "color": "blue",
              "icon": "table",
              compact: true,
              basic: true,
              "name": "btn-fb-export",
              "onClick": {
                "run": "action",
                "action": "exportTable"
              }
            },
            {
              ctl: "div",
              classes: "item",
              text: '<span class="table-footer one-liner" myspot="selected-count"></span>'
            }, {
              ctl: "divider",
              fitted: true,
              clearing: true
            }]
        }],
        center: [ {
          ctl: 'spot',
          name: 'report-area'
        }]
      }]
    };
  
    var ControlCode = {};
  
    ControlCode.refresh = function(theOptions) {
      var tmpOptions = theOptions || {};
      if (tmpOptions.full === true) {
        // --- do a full pull
        this.lastTimestamp = false;
      }
      this.showReport(theOptions);
    };
  
    ControlCode.notDeleted = function(data, filterParams) {
      return (data._deleted != "1");
    };
  
    ControlCode.postProcessData = function() {
      var tmpRows = this.mainTable.getRows();
      this.batchSelect = true;
  
      this.mainTable.addFilter(this.notDeleted, {});
  
      this.batchSelect = false;
  
      if (!this.syncReload) {
        this.publish('dataChange', [this.tableData, this]);
      }
  
    };
  
    ControlCode.refreshData = function(theData, theOptions) {
  
      var tmpOptions = theOptions || {};
  
      if (theData && theData.length === 0) {
        return;
      }
      this.dataVersion++;
      var tmpPosIndex = {};
      var iPos;
      var tmpDoc;
  
      for (iPos in theData) {
        tmpDoc = theData[iPos];
        tmpDoc._dataVersion = this.dataVersion;
        var tmpID = tmpDoc.unid || '';
        if (tmpID) {
          tmpPosIndex[tmpID] = iPos;
          var tmpExisting = this.tableIndex[tmpID];
          if (tmpExisting) {
            for (var aName in tmpExisting) {
              tmpExisting[aName] = undefined;
            }
            this.tableIndex[tmpID] = $.extend(tmpExisting, tmpDoc);
          } else {
            this.tableData.push(tmpDoc);
            this.tableIndex[tmpID] = tmpDoc;
          }
        }
      }
  
      // --- Clean deleted from full pull
      if (tmpOptions.fullPull === true) {
        var tmpRows = this.mainTable.getRows();
        for (iPos in tmpRows) {
          var tmpRow = tmpRows[iPos];
          tmpDoc = tmpRow.getData();
          if (tmpDoc._dataVersion !== this.dataVersion) {
            var tmpPos = this.tableData.indexOf(tmpDoc);
            this.tableData.splice(tmpPos, 1);
          }
        }
      }
  
      if (tmpOptions.select) {
        this.selectByUNID(tmpOptions.select);
      }
  
      this.postProcessData();
      this.refreshTableUI();
    };
  
    ControlCode.initTableIndex = function() {
      this.tableIndex = {};
      if (!(this.tableData && this.tableData.length)) {
        return;
      }
      for (var iPos in this.tableData) {
        var tmpDoc = this.tableData[iPos];
        if (tmpDoc && (tmpDoc.unid)) {
          this.tableIndex[tmpDoc.unid] = tmpDoc;
        }
      }
    };
  
    
  
    ControlCode.createTable = function(theOptions) {};
  
    ControlCode.refreshReport = function() {
      this.createTable();
    };
  
    ControlCode.loadCurrentReport = function() {
      this.createTable();
    };
  
    ControlCode.refreshSize = function() {
      ThisApp.resizeToLayout(this.mainTableEl);
      if (this.mainTable) {
        this.mainTable.redraw();
      }
    };
  
    ControlCode.refreshTableUI = function(theOptions) {
      var tmpOptions = theOptions || {};
      this.refreshSize();
      this.refreshSelection();
      // --- Implement this when scroll position can be redone or item
      // scrolled into view
      // ---> this.mainTable.rowManager.sorterRefresh();
      // ToDo: Scroll selected into view
    };
  
    ControlCode._onParentResize = function() {
      var tmpThis = this;
      // --- ToDo: Buffer to do less times?
      ThisApp.delay(200).then(function() {
        tmpThis.refreshSize();
      });
    };
  
    ControlCode.initTable = function(theDetails, theOptions) {
      var tmpDetails = theDetails || {};
  
      var tmpData = tmpDetails.data || [];
      var tmpCols = tmpDetails.columns || this.columnSpecs || false;
      if (!(tmpCols)) {
        console.error("No column details passed, can not initialize empty table.");
        return false;
      }
  
      this.tableData = [];
      this.columnSpecs = tmpCols;
  
      try {
        if (!(this.mainTable)) {
          this.mainTableEl = this.getSpot('report-area');
  
          this.tableData = tmpData;
          this.initTableIndex();
  
          this.tableConfig = $.extend({
            height: 250,
            selectableRangeMode: "click",
            keybindings: false,
            selectable: true,
            reactiveData: true,
            movableColumns: true,
            data: this.tableData,
            columns: this.columnSpecs,
            rowSelected: rowSelected.bind(this),
            rowDeselected: rowDeselected.bind(this),
            rowClick: rowClicked.bind(this)
          },this.tableConfig);
          
          this.mainTable = new Tabulator(this.mainTableEl.get(0), this.tableConfig );
        }
  
        this.postProcessData();
        this.refreshTableUI(theOptions);
  
      } catch (ex) {
        console.error("Error setting up Tabulator", ex);
      }
  
    };
  
    function matchAny(data, filterParams) {
      var checkVal = filterParams.value.toLowerCase();
      var tmpIsCols = Array.isArray(filterParams.columns);
      var tmpKeyList = data;
      if (tmpIsCols) {
        tmpKeyList = {};
        for (var iPos in filterParams.columns) {
          var tmpCol = filterParams.columns[iPos];
          var tmpKey = tmpCol.field;
          if (tmpKey) {
            tmpKeyList[tmpKey] = true;
          }
        }
      }
  
      var match = false;
      var key = '';
      if (filterParams.startsWith === true) {
        for (key in tmpKeyList) {
          if (data[key].toLowerCase().indexOf(checkVal) === 0) {
            match = true;
            break;
          }
        }
      } else {
        for (key in tmpKeyList) {
            
          if( !data[key] ){
              console.warn("no data for " + key);
          } else {
              if (data[key].toLowerCase().indexOf(checkVal) > -1) {
                  match = true;
                  break;
                }
          }
        }
      }
      return match;
    }
  
    ControlCode.rowSelected = rowSelected;
    function rowSelected(row) {
      if (this.batchSelect) {
        return;
      }
      this.refreshSelection();
      this.publish('data-selected',[this,row.getData()]);
      //this.context.page.controller.previewDoc({docs:[row.getData()]});
    }
  
    function rowDeselected(row) {
      if (this.batchSelect) {
        return;
      }
      this.refreshSelection();
    }
    function rowClicked(e, row) {
      if (this.batchSelect) {
        return;
      }
      this.rowSelected(row);
    }
  
  
    ControlCode._onInit = function() {
      this.initSearch();
      this.dataVersion = 0;
      window.lastCreatedControl = this;
    };
  
    ControlCode.setup = function(theOptions) {
      var tmpOptions = theOptions || {};
      var tmpOptConfig = tmpOptions.tableConfig || {};
      var tmpToolbar = tmpOptions.toolbar || false;
      
      if( tmpToolbar ){
          var tmpConfig = this.getConfig();
      } else {
          tmpToolbar = [{
              "ctl" : "spot",
              "name" : "top-toolbar"
          }]
      }
      
      
      var tmpViewName = tmpOptions.viewname || tmpOptions.viewName || '';
      this.viewName = tmpViewName;
      this.selectedIndex = {};
          
      this.selectIcon = function(cell, formatterParams) {
        return "<i class='ui icon square outline blue select'></i>";
      };
  
      this.reportCols = tmpOptions.columns || [ {
        "title": "ID",
        "field": "unid"
      }];
  
      var tmpCheckBoxIcon = {
        formatter: this.selectIcon,
        headerSort: false,
        align: "left",
        frozen: true
      };
      this.reportCols.unshift(tmpCheckBoxIcon);
      
      
      this.tableConfig = $.extend({}, tmpOptConfig)
      this.tableConfig.columns = this.reportCols;
          
      var tmpToRun = this.showReport.bind(this);
      var tmpLayoutSpecs = this.getItemSpecs('layout');
      if( Array.isArray(tmpToolbar) ){
          tmpLayoutSpecs.north = tmpToolbar.concat(tmpLayoutSpecs.north);
      }
      this.refreshUI().then(tmpToRun);
      
    }
    
    ControlCode.setupDELETEME = function(theOptions) {
      var tmpOptions = theOptions || {};
      var tmpViewName = theOptions.viewname || theOptions.viewName || '';
      this.viewName = tmpViewName;
      this.selectedIndex = {};
  
      this.selectIcon = function(cell, formatterParams) {
        return "<i class='ui icon square outline blue select'></i>";
      };
  
      this.reportCols = tmpOptions.columns || [ {
        "title": "ID",
        "field": "unid"
      }];
  
      var tmpCheckBoxIcon = {
        formatter: this.selectIcon,
        headerSort: false,
        align: "left",
        frozen: true
      };
      this.reportCols.unshift(tmpCheckBoxIcon);
      this.showReport();
    }
  
    ControlCode.showReport = function(theOptions) {
      var dfd = jQuery.Deferred();
      var tmpOptions = theOptions || {};
      var tmpThis = this;
      //var tmpURL = './' + this.viewName + '?ReadViewEntries&count=20000&outputformat=JSON&PreFormat&ExpandView';
      //var tmpURL = './app/pages/Table/report-data.json';
      var tmpURL = '/developer/wp-json/actappdesigner/people';
      
      var tmpFullPull = true;
  
      if (tmpThis.lastTimestamp) {
        //tmpURL += '&KeyType=time&StartKey=' + tmpThis.lastTimestamp;
        tmpFullPull = false;
      }
  
      ThisApp.apiCall( {
        loading: this.getEl(),
        cache: true,
        url: tmpURL
      }).then(function(theReply) {
        tmpThis.reloadedNeeded = false;
        var tmpData = theReply;
        if (typeof (tmpData) === 'string') {
          tmpData = JSON.parse(tmpData);
        }
  
        tmpData = tmpData.data || tmpData.docs || tmpData || [];
    
  //console.log("tmpData",ThisApp.json(tmpData));
  
        if (tmpThis.viewerLoaded !== true) {
          tmpThis.viewerLoaded = true;
          tmpThis.initTable( {
            data: tmpData,
            columns: tmpThis.reportCols
          }, theOptions);
        } else {
          tmpOptions.fullPull = tmpFullPull;
          tmpThis.refreshData(tmpData, tmpOptions);
        }
        dfd.resolve(true)
  
      })
  
      return dfd.promise();
    }
  
    
    ControlCode.refreshSelection = function() {
  
      var tmpLastCounts = this.counts || {
        all: 0,
        filered: 0,
        selected: 0
      };
  
      var tmpDocCount = 0;
      for (var iPos in this.tableData) {
        var tmpDoc = this.tableData[iPos];
        if (tmpDoc && (tmpDoc.unid) && (!tmpDoc._deleted)) {
          tmpDocCount++;
        }
      }
  
      var tmpSelected = this.mainTable.getSelectedRows();
      // --- replace old counts
      this.counts = {
        all: tmpDocCount,
        filtered: this.mainTable.getDataCount(),
        selected: tmpSelected.length
      };
      if (this.counts.all == this.counts.filtered) {
        this.counts.filtered = 0;
      }
      var tmpCountChanged = true;
      if (tmpLastCounts.all == this.counts.all && tmpLastCounts.filtered == this.counts.filtered && tmpLastCounts.selected == this.counts.selected) {
        // --- Nothing changed
        tmpCountChanged = false;
      }
  
      var tmpSelDisabled = (this.counts.filtered === 0);
      this.setItemDisabled('btn-select-filtered-footer', tmpSelDisabled)
      this.setItemDisabled('btn-select-filtered', tmpSelDisabled)
  
      this.refreshSearchUI();
  
      // -- MOVED to controller code
      //		var tmpDisableSingle = (this.counts.selected !== 1);
      //		this.setItemDisabled('btn-tb-edit', tmpDisableSingle);
      //
      //		var tmpDisableAny = (this.counts.selected === 0);
      //		this.setItemDisabled('btn-tb-recycle', tmpDisableAny);
  
      var tmpTotalCount = " " + (this.counts.all || "none") + " records.";
      var tmpSelCount = " (" + (this.counts.selected || "none")
      + " selected)";
      var tmpFilterCount = " (" + (this.counts.filtered || "none")
      + " filtered)";
      this.loadSpot('selected-count', tmpTotalCount + " " + tmpSelCount)
      this.loadSpot('filtered-count', tmpFilterCount);
      this.publish('selectionChange', [tmpCountChanged, this.counts, this]);
  
    };
  
    ControlCode.initSearch = function() {
      this.searchFieldEl = this.getFieldEl('search');
  
      this.onSearchKeyUp = function(e) {
        if (e.keyCode == 13) {
          this.quickSearch();
        } else if (e.keyCode == 27) {
          this.clearSearch();
        } else {
          var tmpVal = this.getFieldValue('search').trim();
  
          if (tmpVal === '' || (tmpVal && tmpVal.length == 1 && e.keyCode == 8)) {
            this.clearSearch();
          } else if (tmpVal) {
            this.quickSearch();
          }
        }
      }
      this.searchFieldEl.keyup(this.onSearchKeyUp.bind(this));
    }
  
    ControlCode.refreshSearchUI = function() {
      var tmpClearDisabled = !(this.getFieldValue('search').trim());
      this.setItemDisabled('btn-clear-search', tmpClearDisabled)
    };
  
    ControlCode.quickSearch = function() {
      var tmpSS = this.getFieldValue('search');
      this.mainTable.addFilter(matchAny, {
        columns: this.columnSpecs,
        value: tmpSS,
        startsWith: false
      });
      this.refreshSelection();
    };
  
    ControlCode.clearSearch = function() {
      this.mainTable.clearFilter();
      this.mainTable.addFilter(this.notDeleted, {});
      this.setFieldValue('search', '');
      this.refreshSelection();
    };
  
    ControlCode.selectByUNID = function(theUNID) {
  
      var tmpID = theUNID;
      this.mainTable.deselectRow();
  
      // --- ToDo: Better way?
      var tmpRows = this.mainTable.getRows();
      for (var iPos in tmpRows) {
        var tmpRow = tmpRows[iPos];
        var tmpDoc = tmpRow.getData();
        if (tmpDoc.unid == tmpID) {
          tmpRow.select();
          break;
        }
      }
  
      this.refreshSelection();
    };
  
    ControlCode.selectAll = function() {
      this.mainTable.deselectRow();
      var selectedRows = this.mainTable.getRows();
      this.batchSelect = true;
      for (var iPos in selectedRows) {
        var tmpRow = selectedRows[iPos];
        var tmpData = tmpRow.getData();
        if (tmpData._deleted != "1") {
          this.mainTable.selectRow(tmpRow);
        }
      }
      this.batchSelect = false;
      this.refreshSelection();
    };
  
    ControlCode.selectNone = function() {
      this.mainTable.deselectRow();
      this.refreshSelection();
    };
  
    ControlCode.selectFiltered = function() {
      this.mainTable.deselectRow();
      var selectedRows = this.mainTable.getRows(true);
      this.batchSelect = true;
      for (var iPos in selectedRows) {
        this.mainTable.selectRow(selectedRows[iPos]);
      }
      this.batchSelect = false;
  
      this.refreshSelection();
    };

    ControlCode.getSelectedKeys = function() {
      var tmpRet = [];
  
      var tmpSelected = this.mainTable.getSelectedRows();
      if (tmpSelected && tmpSelected.length) {
        for (var iPos in tmpSelected) {
          var tmpSel = tmpSelected[iPos];
          var tmpSelDoc = tmpSel.getData();
          if (tmpSelDoc && tmpSelDoc.unid) {
            tmpRet.push(tmpSelDoc.unid);
          } else {
            console.warn("Document did not have a UNID.", tmpSelDoc);
          }
        }
      }
      return tmpRet;
    };
  
  
  
    ControlCode.exportTable = function() {
      this.mainTable.download("xlsx", "myview.xlsx", {
        sheetName: "Exported Data"
      });
    }

    ControlCode.thisReportSetup = function(){
      var tmpToolBar = [ {
        "ctl" : "ui",
        "name" : "search-toolbar",
        "classes" : "labeled icon compact",
        "content" : [ {
          "ctl" : "button",
          "toLeft" : true,
          "color" : "blue",
          "icon" : "plus",
          compact : true,
          "name" : "btn-page-tb-new",
          "label" : "Add",
          "onClick" : {
            "run" : "action",
            "action" : "newDoc"
      
          }
        }, {
          "ctl" : "button",
          "toLeft" : true,
          "color" : "blue",
          "icon" : "pencil",
          compact : true,
          "name" : "btn-page-tb-edit",
          "label" : "Edit",
          "onClick" : {
            "run" : "action",
            "action" : "editDoc"
          }
        }, {
          "ctl" : "button",
          "toLeft" : true,
          "color" : "blue",
          "icon" : "trash",
          compact : true,
          "name" : "btn-page-tb-recycle",
          "label" : "Recycle",
          "onClick" : {
            "run" : "action",
            "action" : "recycleSelected"
          }
        } ]
      }, {
        ctl : 'divider',
        fitted : true,
        clearing : true
      }
         ];
         
         
         
      // Define columns based on Tabulator column documentation	 
      var tmpTableCols = [ {
        "title" : "First Name",
        "field" : "firstname",
        frozen : true
      }, {
        "title" : "Last Name",
        "field" : "lastname",
        frozen : true
      }, {
        "title" : "E-Mail",
        "field" : "email"
      }, {
        "title" : "Phone Number",
        "field" : "phone"
      }, {
        "title" : "Member Name",
        "field" : "membername"
      }, {
        "title" : "Contact Section",
        "field" : "submit-contact"
      } ]
      
      
      //--- Use tableConfig to include any Tabulator config options 
      //    ... used with new Tabulator({...});  
      this.setup( {
        tableConfig : {
          initialSort : [ {
            column : "lastname",
            dir : "asc"
          },
          {
            column : "firstname",
            dir : "asc"
          } ]
        },
        toolbar : tmpToolBar,
        //viewname : 'reportScholarshipApplicants',
        columns : tmpTableCols
      })
    }
  
    var ThisControl = {
      specs: ControlSpecs,
      options: {
        proto: ControlCode,
        parent: ThisApp
      }
    };
    return ThisControl;
  })(ActionAppCore, $);