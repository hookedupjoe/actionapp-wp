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
    
    var demoImportData = {
        "data": [
            {
                "name": "app4",
                "title": "Application Four",
                "writecaps": "actappapps",
                "readcaps": "actappapps",
                "__doctype": "app",
                "tag": "316062cae38715a25_462662df4d05d5930",
                "__doctitle": "Application Four",
                "__uid": "316062cae38715a25_462662df4d05d5930",
                "__title": "Application Four",
                "id": 529,
                "_edit_lock": "1658803546:1",
                "_edit_last": "1",
                "__id": 529,
                "__posttype": "actappdesigndoc",
                "__url": "http://localhost/actappdev/actappdesigndoc/316062cae38715a25_462662df4d05d5930/",
                "__postdate": "July 26, 2022"
            },
            {
                "name": "app3",
                "title": "Application Three",
                "writecaps": "actappapps",
                "readcaps": "actappapps",
                "__doctype": "app",
                "tag": "316062cae38715a25_958462df4d05e0ec9",
                "__doctitle": "Application Three",
                "__uid": "316062cae38715a25_958462df4d05e0ec9",
                "__title": "Application Three",
                "id": 530,
                "__id": 530,
                "__posttype": "actappdesigndoc",
                "__url": "http://localhost/actappdev/actappdesigndoc/316062cae38715a25_958462df4d05e0ec9/",
                "__postdate": "July 26, 2022"
            },
            {
                "name": "app2",
                "title": "Application Two",
                "writecaps": "actappapps",
                "readcaps": "actappapps",
                "id": 415,
                "__doctype": "app",
                "__title": "Application Two",
                "tag": "316062cae38715a25_696262d46d1d0a869",
                "__uid": "316062cae38715a25_696262d46d1d0a869",
                "_wp_trash_meta_status": "publish",
                "_wp_trash_meta_time": "1658801034",
                "__id": 415,
                "__doctitle": "Application Two",
                "_id": "415",
                "_wp_old_slug": "316062cae38715a25_696262d46d1d0a869__trashed",
                "_edit_last": "1",
                "_edit_lock": "1658801083:1",
                "__posttype": "actappdesigndoc",
                "__url": "http://localhost/actappdev/actappdesigndoc/316062cae38715a25_696262d46d1d0a869/",
                "__postdate": "July 17, 2022"
            },
            {
                "name": "app1",
                "title": "Application One",
                "writecaps": "actappapps",
                "readcaps": "actappapps",
                "id": 414,
                "__doctype": "app",
                "__title": "Application One",
                "tag": "316062cae38715a25_594762d46d124981a",
                "__uid": "316062cae38715a25_594762d46d124981a",
                "__id": 414,
                "__doctitle": "Application One",
                "_id": "414",
                "_wp_old_slug": "316062cae38715a25_594762d46d124981a__trashed",
                "_edit_last": "1",
                "_edit_lock": "1658802195:1",
                "__posttype": "actappdesigndoc",
                "__url": "http://localhost/actappdev/actappdesigndoc/316062cae38715a25_594762d46d124981a/",
                "__postdate": "July 17, 2022"
            }
        ]
    }
    
    function demoImport(){
        var tmpData = demoImportData;
        var tmpURL = ActionAppCore.ActAppWP.rootPath + '/wp-json/actappdesigner/import-docs';
        ThisApp.apiCall({url:tmpURL,data:tmpData}).then(
            function(theReply){
console.log('demoImport',theReply);
            }
        );
    }
    var selectionListIndex = {};

    ThisPage._onFirstActivate = function (theApp) {
        //~_onFirstActivate//~

        //~_onFirstActivate~//~
        ThisPage.initOnFirstLoad().then(
            function () {
                //~_onFirstLoad//~
        window.tmpDataPage = ThisPage;
        ThisPage.demoImport = demoImport;

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
        tmpHTML.push('<div class="ui segment ">');
        tmpHTML.push('<div pageaction="showDataViewDefs" class="ui fluid button blue">Show Definitions</div>');
        tmpHTML.push('</div>');
        tmpHTML = tmpHTML.join('\n');
        ThisApp.addTemplate('DevConsole:DataViewConsole', tmpHTML);

        tmpHTML = [];
        tmpHTML.push('<div class="ui segment raised">');
        tmpHTML.push('<div class="ui top attached header">Data Views</div>');
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
            },
            {
                name:'thetrash',
                isTrash: true,
                title: 'The Trash Bin'
            }
            // },
            // {
            //     name:'dvpeople',
            //     isDataView: true,
            //     viewname: 'people',
            //     title: 'People'
            // },
            // {
            //     name:'dvapps',
            //     isDataView: true,
            //     viewname: 'apps',
            //     title: 'Tiny Apps'
            // },
            // {
            //     name:'dvtests',
            //     isDataView: true,
            //     viewname: 'tests',
            //     title: 'Tests'
            // }
        ]}
        //--- Load to index
        for( var iPos in tmpPostItems.data ){
            var tmpDetails = tmpPostItems.data[iPos];
            selectionListIndex[tmpDetails.name] = tmpDetails;
        }
        
        ThisPage.ctlNav.loadTabSpot('posts',tmpPostItems,'DevConsole:SelectionList');
        var tmpDataViewItems = {};
        ThisPage.ctlNav.loadTabSpot('dataviews',tmpDataViewItems,'DevConsole:DataViewConsole');
        

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

    
    actions.showDataViewDefs = function(theParams, theTarget){
        //var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['aaa','bbb']);
        console.log('showDataViewDefs');
        var tmpTabKey = 'tab-showDataViewDefs';
        var tmpTabTitle = 'Data Views';
        if( loadedTabs[tmpTabKey] ){
            ThisPage.ctlBody.gotoTab(tmpTabKey);
        } else {
            var tmpCloseMe = '<i style="margin-right:-5px;margin-left:10px;" tab="' + tmpTabKey + '" pageaction="closeTab" class="icon close grey inverted"></i>';
            ThisApp.getResourceFromSource('control','DataViewDefinitions','_designer','DataViewDefinitions').then(function(theReply){
                var tmpNewTabControl = theReply.create(tmpTabKey);
                //var tmpNewTabControl = ThisPage.getControl('DataViewDefinitions').create(tmpTabKey);

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
            });
            

        }
    }

    actions.selectListItem = function(theParams, theTarget){
        var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['itemname','itemtitle']);
        
        var tmpTabKey = 'tab-' + tmpParams.itemname;
        var tmpTabTitle = tmpParams.itemtitle || tmpParams.itemname;
        if( loadedTabs[tmpTabKey] ){
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
                    var tmpSetupDetails = selectionListIndex[tmpParams.itemname] || tmpParams;
                    tmpNewTabControl.setup(tmpSetupDetails);
                }
                ThisApp.delay(1).then(function(){
                    ThisPage.ctlBody.gotoTab(tmpTabKey);
                })
                
            });

        }
        

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
