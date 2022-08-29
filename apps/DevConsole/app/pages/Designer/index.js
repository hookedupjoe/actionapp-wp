(function (ActionAppCore, $) {

    var SiteMod = ActionAppCore.module("site");

    //~thisPageSpecs//~
var thisPageSpecs = {
	"pageName": "Designer",
	"pageTitle": "Designer",
	"navOptions": {
		"topLink": true,
		"sideLink": true
	}
};
//~thisPageSpecs~//~

    var pageBaseURL = 'app/pages/' + thisPageSpecs.pageName + '/';

    //~layoutOptions//~
thisPageSpecs.layoutOptions = {
  baseURL: pageBaseURL,
  north: {
    source: '_designer',
    control: "MainHeader",
    name :'header'
  },
  east: false,
  west: {
    source: '_designer',
    control: "TabsContainer",
    name :'nav'
  },
  center: {
    source: '_designer',
    control: "TabsContainer",
    name :'body'
  },
  south: {
    source: '_designer',
    control: "MainStatusBar",
    name :'statusbar'
  }
};


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

//temporary - for debug in console
window.tmpPage = ThisPage;
window.tmpParts = ThisPage.parts;

//quick access
ThisPage.ctlHeader = ThisPage.parts.header;
ThisPage.ctlBody = ThisPage.parts.body;
ThisPage.ctlNav = ThisPage.parts.nav;
ThisPage.ctlStatusbar = ThisPage.parts.statusbar;


//setup initial ui
ThisPage.ctlHeader.setHeader('Developer Workspace');
//ThisPage.ctlHeader.addSideContent('<div class="ui label green basic right pointing">Need Help?</div>');
//ThisPage.ctlHeader.addSideContent('<div type="button" pageaction="showDocs" class="ui button  blue icon">Docs</div>');

ThisPage.ctlBody.addTab({item:'home',text: '', icon: 'icon home blue', content:''});
ThisPage.ctlBody.loadTabSpot('home','Initial Page, Welcome');

//ThisPage.ctlBody.addTab({item:'doctypes',text: 'Document Types', icon: 'icon circle green', content:'Initial Content for Doc Types'});
ThisPage.ctlBody.gotoTab('home');

ThisPage.ctlNav.addTab({item:'apps',text: 'Apps', icon: 'icon globe blue', content:''});
ThisPage.ctlNav.addTab({item:'outline',text: 'Outline', icon: 'icon tree blue', content:''});
//ThisPage.ctlNav.addTab({item:'catalogs',text: 'Catalogs', icon: 'icon archive blue', content:''});
ThisPage.ctlNav.gotoTab('apps');

ThisPage.ctlStatusbar.setContent('Welcome to the designer console');


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

    actions.showDocs = showDocs;
function showDocs(){
  alert('show');
}


//~YourPageCode~//~

})(ActionAppCore, $);
