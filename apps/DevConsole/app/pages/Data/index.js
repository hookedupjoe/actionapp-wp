(function (ActionAppCore, $) {

    var SiteMod = ActionAppCore.module("site");

    //~thisPageSpecs//~

var thisPageSpecs = {
	"pageName": "Data",
	"pageTitle": "Data",
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
        
        controls: {
            baseURL: pageBaseURL + 'controls/',
            map: {
                "PostsView": "PostsView"
            }
        }
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

    var loadedTabs = {};
    
    
    ThisPage._onFirstActivate = function (theApp) {
        //~_onFirstActivate//~

        //~_onFirstActivate~//~
        ThisPage.initOnFirstLoad().then(
            function () {
                //~_onFirstLoad//~
        window.tmpDataPage = ThisPage;

        ThisPage.loadedTabs = loadedTabs;       
        //quick access
        ThisPage.ctlHeader = ThisPage.parts.header;
        ThisPage.ctlBody = ThisPage.parts.body;
        ThisPage.ctlNav = ThisPage.parts.nav;
        ThisPage.ctlStatusbar = ThisPage.parts.statusbar;

        //setup
        ThisPage.ctlHeader.setHeader('Data Manager');
        //ThisPage.ctlHeader.addSideContent('<div class="ui label green basic right pointing">Need Help?</div>');
        //ThisPage.ctlHeader.addSideContent('<div type="button" pageaction="showDocs" class="ui button  blue icon">Docs</div>');

        ThisPage.ctlBody.addTab({item:'home',text: '', icon: 'icon home blue', content:''});
        ThisPage.ctlBody.loadTabSpot('home','Initial Page, Welcome');
        ThisPage.ctlBody.gotoTab('home');

        ThisPage.ctlNav.addTab({item:'posts',text: 'Posts', icon: 'icon database blue', content:''});
        ThisPage.ctlNav.addTab({item:'dataviews',text: 'Data Views', icon: 'icon table green', content:''});
        ThisPage.ctlNav.gotoTab('posts');

        var tmpHTML = [];
        tmpHTML.push('<div class="ui segment raised">');
        tmpHTML.push('<div class="ui top attached header">Document Types</div>');
        tmpHTML.push('<div class="ui attached segment">');
        tmpHTML.push('<div class="basic slim buttons vertical fluid">');
        tmpHTML.push('  {{#each data}}');
        tmpHTML.push('  <div itemname="{{name}}" itemtitle="{{title}}" pageaction="selectListItem" class="ui button fluid basic blue">{{title}}</div>');
        tmpHTML.push('  {{/each}}');
        tmpHTML.push('</div>');
        tmpHTML.push('</div>');
        tmpHTML.push('</div>');
        tmpHTML = tmpHTML.join('\n');
        ThisApp.addTemplate('DevConsole:SelectionList', tmpHTML);

        tmpHTML = [];
        tmpHTML.push('<div class="ui segment blue"><table class="ui table stackable">');
        tmpHTML.push('<tr>');
        tmpHTML.push('  <th>ID</th>');
        tmpHTML.push('  <th>Title</th>');
        tmpHTML.push('  <th>Created</th>');
        tmpHTML.push('  <th>&nbsp;</th>');
        tmpHTML.push('  </tr>');
        tmpHTML.push('  {{#each data}}');
        tmpHTML.push('  <tr>');
        tmpHTML.push('    <td>{{__id}}</td>');
        tmpHTML.push('    <td>{{__posttitle}}</td>');
        tmpHTML.push('    <td>{{__postdate}}</td>');
        tmpHTML.push('    <td><a href="{{__url}}" target="_blank" class="ui botton basic icon"><i class="icon right arrow"></i>'); tmpHTML.push('Open</a></td>');
        tmpHTML.push('  </tr>');
        tmpHTML.push('  {{/each}}');
        tmpHTML.push('</table></div>');
        tmpHTML = tmpHTML.join('\n');
        ThisApp.addTemplate('DevConsole:PostsTable', tmpHTML);


        var tmpPostItems = {data:[
            {
                name:'actappdoc',
                title: 'Application Docs'
            },
            {
                name:'actappdesigndoc',
                title: 'Designer Docs'
            },
            {
                name:'actappelem',
                title: 'Design Element Docs'
            }
        ]}

        ThisPage.ctlNav.loadTabSpot('posts',tmpPostItems,'DevConsole:SelectionList');

        ThisPage.ctlStatusbar.setContent('Welcome to the developer data manager');

            //~_onFirstLoad~//~
                ThisPage._onActivate();
            }
        );
    }
    
    actions.closeTab = function(theParams, theTarget){
        var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['tab']);
        var tmpTabName = tmpParams.tab;
        if( !(tmpTabName) ){
            alert('Could not close tab, no tab name provided');
        }
        if( loadedTabs[tmpTabName] ){
            var tmpToRemove = loadedTabs[tmpTabName];
            if( tmpToRemove && tmpToRemove.destroy ){
                tmpToRemove.destroy();
            }
            delete loadedTabs[tmpTabName];
        }
        ThisPage.ctlBody.closeTab(tmpTabName);
    }

    actions.selectListItem = function(theParams, theTarget){
        var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['itemname','itemtitle']);
        //console.log('itemname: ' + tmpParams.itemname);
        var tmpTabKey = 'tab-' + tmpParams.itemname;
        var tmpTabTitle = tmpParams.itemtitle || tmpParams.itemname;
        if( loadedTabs[tmpTabKey] ){
            console.log('loaded');
            ThisPage.ctlBody.gotoTab(tmpTabKey);
        } else {
            var tmpCloseMe = '<i style="margin-right:-5px;margin-left:10px;" tab="' + tmpTabKey + '" pageaction="closeTab" class="icon close grey inverted"></i>';
            var tmpNewTabControl = ThisPage.getControl('PostsView').create(tmpTabKey);
            ThisPage.ctlBody.addTab({item:tmpTabKey,text: tmpTabTitle + tmpCloseMe, icon: 'table', content:''})
            var tmpNewSpot = ThisPage.ctlBody.getTabSpot(tmpTabKey);
            tmpNewTabControl.loadToElement(tmpNewSpot).then(function (theReply) {
                loadedTabs[tmpTabKey] = tmpNewTabControl;
                //--- Go to the newly added card (to show it and hide others)
                if( tmpNewTabControl.setup ){
                    tmpNewTabControl.setup(tmpParams);
                }
                ThisApp.delay(1).then(function(){
                    ThisPage.ctlBody.gotoTab(tmpTabKey);
                })
                
            });

        }
        

        // ThisApp.apiCall(ActionAppCore.ActAppWP.rootPath + '/wp-json/actappdesigner/alldocs?fields=(none)&doctype=&posttype=' + tmpParams.itemname + '').then(function(theReply){
        //     //console.log('theReply',theReply);
        //     ThisPage.ctlBody.loadTabSpot('home',theReply,'DevConsole:PostsTable');
        // })
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


    //~YourPageCode~//~

})(ActionAppCore, $);
