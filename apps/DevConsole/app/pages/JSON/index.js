(function (ActionAppCore, $) {

    var SiteMod = ActionAppCore.module("site");

    //~thisPageSpecs//~
var thisPageSpecs = {
	"pageName": "JSON",
	"pageTitle": "JSON",
	"navOptions": {
		"topLink": true,
		"sideLink": true
	}
}
//~thisPageSpecs~//~

    var pageBaseURL = 'app/pages/' + thisPageSpecs.pageName + '/';

    //~layoutOptions//~
thisPageSpecs.layoutOptions = {
        baseURL: pageBaseURL,
        north: { control: 'Header', name: "header" },
        west: { control: 'ControlPanel', name: "controls" },
        east: false,
        center: { control: 'Previewer', name: "json" },
        south: false
    }
//~layoutOptions~//~

    //~layoutConfig//~
thisPageSpecs.layoutConfig = {
        west__size: "300"
        , east__size: "250"
    }
//~layoutConfig~//~
    //~required//~
thisPageSpecs.required = {

    }
//~required~//~

    var ThisPage = new SiteMod.SitePage(thisPageSpecs);

    var actions = ThisPage.pageActions;

    ThisPage._onPreInit = function (theApp) {
        //~_onPreInit//~

//~_onPreInit~//~
    }

    ThisPage._onInit = function () {
        //~_onInit//~

//~_onInit~//~
    }


    ThisPage._onFirstActivate = function (theApp) {
        //~_onFirstActivate//~

//~_onFirstActivate~//~
        ThisPage.initOnFirstLoad().then(
            function () {
                //~_onFirstLoad//~
ThisPage.aceEditor = ThisPage.parts.json.aceEditor;
//~_onFirstLoad~//~
                ThisPage._onActivate();
            }
        );
    }


    ThisPage._onActivate = function () {
        //~_onActivate//~

//~_onActivate~//~
    }

    ThisPage._onResizeLayout = function (thePane, theElement, theState, theOptions, theName) {
        //~_onResizeLayout//~

//~_onResizeLayout~//~
    }

    //------- --------  --------  --------  --------  --------  --------  -------- 
    //~YourPageCode//~
actions.clearJson = clearJson;
function clearJson() {
  ThisPage.aceEditor.setValue('{}');
  actions.selectAll();
}

actions.selectAll = selectAll;
function selectAll() {
  ThisPage.aceEditor.selectAll();
  ThisPage.aceEditor.focus();
}
actions.toClipboard = toClipboard;
function toClipboard() {
  navigator.clipboard.writeText(ThisPage.aceEditor.getValue());
  ThisPage.aceEditor.focus();
}

actions.formatJson = formatJson;
function formatJson() {
  var tmpJSON = ThisPage.aceEditor.getValue();
  var tmpConverter = {};
  try {

    var tmpEval = eval('tmpConverter =' + tmpJSON);
    loadJson(tmpEval);
  } catch (ex) {
    try {
      if (tmpJSON.startsWith('var ')) {
        tmpJSON = tmpJSON.replace("var ", "tmpConverter.");
      }
      var tmpEval = eval(tmpJSON);
      loadJson(tmpEval);
    } catch (ex) {
      console.error("formatJson err", ex);
      alert("Invalid JSON", "Format Error", "e");
    }
  }
  ThisPage.aceEditor.clearSelection();

}

actions.loadJson = loadJson;
function loadJson(theObj) {
  ThisPage.aceEditor.setValue(ThisApp.json(theObj, true));
  ThisPage.aceEditor.clearSelection();
}
//~YourPageCode~//~

})(ActionAppCore, $);
