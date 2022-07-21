(function (ActionAppCore, $) {

    var SiteMod = ActionAppCore.module("site");

    //~thisPageSpecs//~

var thisPageSpecs = {
	"pageName": "Admin",
	"pageTitle": "Admin",
	"navOptions": {
		"topLink": true,
		"sideLink": true
	}
}

//~thisPageSpecs~//~

    var pageBaseURL = 'app/pages/' + thisPageSpecs.pageName + '/';

    //~layoutOptions//~
    thisPageSpecs.layoutOptions =  {
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

                  
        //quick access
        ThisPage.ctlHeader = ThisPage.parts.header;
        ThisPage.ctlBody = ThisPage.parts.body;
        ThisPage.ctlNav = ThisPage.parts.nav;
        ThisPage.ctlStatusbar = ThisPage.parts.statusbar;

        //setup
        ThisPage.ctlHeader.setHeader('Administration Console');
        //ThisPage.ctlHeader.addSideContent('<div class="ui label green basic right pointing">Need Help?</div>');
        //ThisPage.ctlHeader.addSideContent('<div type="button" pageaction="showDocs" class="ui button  blue icon">Docs</div>');

        ThisPage.ctlBody.addTab({item:'home',text: '', icon: 'icon home blue', content:''});
        ThisPage.ctlBody.loadTabSpot('home','Initial Page, Welcome');
        ThisPage.ctlBody.gotoTab('home');

        //ThisPage.ctlNav.addTab({item:'links',text: 'Quick Links', icon: 'icon chain blue', content:''});
        ThisPage.ctlNav.addTab({item:'users',text: 'Users', icon: 'icon user blue', content:''});
        ThisPage.ctlNav.gotoTab('users');

        ThisPage.ctlStatusbar.setContent('Welcome to the administration console');


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


    actions.loadASpot = loadASpot;
    function loadASpot() {
        ThisPage.loadSpot("funspot", "We are having fun now")
    };

    actions.loadASpot = loadASpot;
    function loadASpot() {
        var tmpHTML = [];
        tmpHTML.push('<div class="ui-layout-center">Center')
        tmpHTML.push('</div>')
        tmpHTML.push('<div class="ui-layout-north">North</div>')
        tmpHTML.push('<div class="ui-layout-south">South</div>')
        tmpHTML.push('<div class="ui-layout-east">East</div>')
        tmpHTML.push('<div class="ui-layout-west">West</div>')
        tmpHTML = tmpHTML.join('');

        ThisPage.loadSpot("body", tmpHTML);
        var tmpBodySpot = ThisPage.getSpot("body");
        var tmpLayout = tmpBodySpot.layout();
        console.log('tmpLayout', tmpLayout);
        if (typeof (ThisApp.refreshLayouts) == 'function') {
            ThisApp.refreshLayouts();
        }
        console.log('tmpBodySpot', tmpBodySpot);


    };
    //~YourPageCode~//~

})(ActionAppCore, $);
