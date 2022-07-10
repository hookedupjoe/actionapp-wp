/*
Author: Joseph Francis
License: MIT
*/
(function (ActionAppCore, $) {

  var ControlSpecs = {
    "options": {
      padding: true,
      readonly: false,
      doc: {
        "user_login": "Editor1",
        "capabilities": ['actappdesign', 'actappapps'],
        "wp_capabilities": ['edit_users']
      }
    },
    "content": [{
      "ctl": "title",
      "size": "Large",
      "color": "blue",
      "name": "title",
      "text": "WordPress User"
    },
      {
        "ctl": "message",
        "color": "blue",
        "size": "large",
        "name": "welcome",
        "hidden": true,
        "text": "Enter details below and submit"
      },
      {
        "ctl": "fieldrow",
        "items": [{
          "label": "Username",
          "ctl": "field",
          "name": "user_login",
          "req": true
        },
          {
            "label": "Password",
            "ctl": "field",
            "name": "user_pass",
            "req": true
          }]
      },
      {
        "ctl": "fieldrow",
        "items": [{
          "label": "First Name",
          "ctl": "field",
          "name": "first_name",
          "req": true
        },
          {
            "label": "Last Name",
            "ctl": "field",
            "name": "last_name",
            "req": true
          }]
      },
      {
        "ctl": "fieldrow",
        "items": [{
          "ctl": "dropdown",
          "name": "role",
          "label": "User Role",
          "default": "author",
          "list": "Administrator|administrator,Editor|editor,Author|author,Contributor|contributor,Subscriber,subscriber",
          "req": true
        },
          {
            "label": "Email",
            "ctl": "field",
            "name": "user_email",
            "req": true
          }]
      },
      {
        "ctl": "fieldrow",
        "items": [{
          "ctl": "checkboxlist",
          "type": "check",
          "name": "admin_options",
          "label": "Admin Options",
          "default": "adminbar",
          "list": "Show the admin bar in front when logged in|adminbar,Always require SSL on the admin bar|ssl",
          "req": false
        },
        {
          "ctl": "checkboxlist",
          "name": "capabilities",
          "type": "check",
          "label": "ActApp Capabilities",
          "list": "Applications Access|actappapps,Developer Access|actappdesign",
          "req": false
        }]
      },
      {
        "ctl": "fieldrow",
        "items": [
          {
            "ctl": "checkboxlist",
            "name": "wp_capabilities",
            "type": "check",
            "label": "WordPress Capabilities",
            "list": "edit_users,add_users,create_users",
            "req": false
          }]
      },
      {
        "name": "description",
        "label": "Description",
        "ctl": "field",
        "rows": 2
      },
      {
        "name": "id",
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
        "name": 'submit-bar',
        "content": [{
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
        }]
      }]

  }


  var ControlCode = {
    setup: setup,
    submitForm: submitForm,
    _onInit: _onInit
  };

  function setup() {
    // var tmpBaseURL = ActionAppCore.ActAppWP.rootPath;
    // var tmpURL = tmpBaseURL + '/wp-json/actappdesigner/json_from_csv?run&pos=auto';
    // var tmpThis = this;
    // ThisApp.apiCall(tmpURL).then(function(theReply){
    // 	console.log('tmpThis',tmpThis)
    // 	if( theReply && theReply.data && theReply.data.length ){
    // 		console.log('theReply',theReply);
    // 		tmpThis.loadData(theReply.data[0]);
    // 	}
    // })
  }

  function _onInit() {
    var tmpThis = this;
    window.personForm = this;
    ThisApp.delay(1).then(function() {
      tmpThis.setup();
    })
  }

  function submitForm() {
    var tmpData = this.getData();
    var tmpDocTitle = tmpData.name;
    var tmpBaseURL = ActionAppCore.ActAppWP.rootPath;
    var tmpPostOptions = {
      formSubmit: false,
      data: tmpData,
      url: tmpBaseURL + '/wp-json/actappdesigner/savedoc?open&doctype=test&doctitle=' + tmpDocTitle
    }
    return ThisApp.apiCall(tmpPostOptions);
  }

  //=== End
  var ThisControl = {
    specs: ControlSpecs, options: {
      proto: ControlCode, parent: ThisApp
    }
  };

  return ThisControl;
})(ActionAppCore, $);