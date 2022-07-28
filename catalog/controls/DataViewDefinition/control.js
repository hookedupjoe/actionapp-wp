(function (ActionAppCore, $) {

    var ControlSpecs = {
          "options": {padding: true},
          "content": [
              {
                  "ctl": "title",
                  "size": "Large",
                  "color": "blue",
                  "name": "title",
                  "text": "Data View Definition"
              },
              {
                  "ctl": "message",
                  "color": "blue",
                  "size": "large",
                  "name": "welcome",
                  "hidden": false,
                  "text": "Defines a view of data used by apis"
              },
              {
                  "ctl": "fieldrow",
                  "items": [
                      {
                          "label": "Data View Name",
                          "ctl": "field",
                          "name": "name",
                          "note": "Should be unique",
                          "req": true
                      },
                      {
                          "label": "Data View Title",
                          "ctl": "field",
                          "name": "title",
                          "note": "Display name for this form",
                          "req": true
                      }
                  ]
              },
              
              {
                  "ctl": "fieldrow",
                  "items": [
                      {
                          "label": "Post Type",
                          "ctl": "dropdown",
                          "note": "Select Post Type",
                          "name": "sourceposttype",
                          "default": "actappdoc",
                          "list": "Document|actappdoc,Design Doc|actappdesigndoc,Design Element|actappelem,Any Action App Doc|(any)",
                          "req": true
                      },
                      {
                          "label": "Doc Type",
                          "ctl": "field",
                          "name": "sourcedoctype",
                          "note": "The doctype to look for",
                          "req": true
                      }
                  ]
              },
              
              {
                  "ctl": "fieldrow",
                  "items": [
                      {
                          "label": "Write Capabilities",
                          "ctl": "dropdown",
                          "note": "Required to use this data view, comma delim",
                          "name": "writecaps",
                          "default": "actappapps",
                          "list": "None|,Applications Access|actappapps,Designer Access|actappdesign",
                          "req": true
                      },
                      {
                          "label": "Read Capabilities",
                          "ctl": "dropdown",
                          "note": "Required to use this data view, comma delim",
                          "name": "readcaps",
                          "default": "actappapps",
                          "list": "None|,Applications Access|actappapps,Designer Access|actappdesign",
                          "req": true
                      }
                  ]
              }
                  ,
              {
                  "name": "id",
                  "ctl": "hidden"
              },
              {
                  "name": "__doctype",
                  "ctl": "hidden",
                  "value": "dataview"
              },
              {
                  "name": "__doctitle",
                  "ctl": "hidden"
              },
              {
                  "name": "tag",
                  "ctl": "hidden"
              },
              {
                  "ctl": "segment",
                  "raised": true,
                  "clearing": true,
                  "name":'submit-bar',
                  "hidden": false,
                  "content":[
                      {
                          "ctl": "button",
                          "color": "blue",
                          "size": "large",
                          "onClick": {
                              "run": "action",
                              "action": "submitForm",
                              "validate": true
                          },
                          "labeled": true,
                          "right": true,
                          "toright": true,
                          "icon": "arrow right",
                          "name": "btn-submit",
                          "text": "Submit Form"
                      }
                  ]
              }
              
      
          ]
          
      }
  
  
      function submitForm() {
          var tmpData = this.getData();
          var tmpDocTitle = tmpData.title;
          
          var tmpBaseURL = ActionAppCore.ActAppWP.rootPath;
          var tmpDocType = 'dataview';
          
          var tmpPostOptions = {
              formSubmit: false,
              data: tmpData,
              url: tmpBaseURL + '/wp-json/actappdesigner/savedesign?open&doctype=' + tmpDocType+ '&doctitle=' + tmpDocTitle
          };
          
          return ThisApp.apiCall(tmpPostOptions);
      }
      
    var ControlCode = {
          submitForm: submitForm,
    };
  
    ControlCode.setup = setup;
    function setup() {
      console.log("Ran setup")
    }
  
    ControlCode._onInit = _onInit;
    function _onInit() {
      //console.log("Ran _onInit")
    }
  
    var ThisControl = {
      specs: ControlSpecs, options: {
        proto: ControlCode, parent: ThisApp
      }};
    return ThisControl;
  })(ActionAppCore, $);