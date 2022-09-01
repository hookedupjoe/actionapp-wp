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

    // thisPageSpecs.required = {
    //     controls: {
    //         baseURL: pageBaseURL + 'controls/',
    //         map: {}
    //     }
    // }

    //~required~//~

    var ThisPage = new SiteMod.SitePage(thisPageSpecs);

    var actions = ThisPage.pageActions;

    ThisPage._onPreInit = function (theApp) {
        //~_onPreInit//~

        //~_onPreInit~//~
    }

    ThisPage.refreshDataViewSource = function(){
        var tmpDataViewsURL = ActionAppCore.ActAppWP.rootPath + '/wp-json/actappdesigner/alldocs?fields=(export)&doctype=&dataview=dataviews';
        ThisApp.apiCall(tmpDataViewsURL).then(function(theReply){
            if( theReply && theReply.data && theReply.data.length ){
                var tmpSources = [];
                for( var iPos in theReply.data ){
                    var tmpDoc = theReply.data[iPos];
                    tmpSources.push(tmpDoc.title + '|' + tmpDoc.name);
                }
                ActionAppCore.addSources({ActAppDataViews: tmpSources});
            };
            ThisApp.publish('Data:ActAppDataViewsUpdated')
        });
    }

    ThisPage._onInit = function () {
        //~_onInit//~

        var tmpSnippetManager = ace.require("ace/snippets").snippetManager;
        tmpSnippetManager.register( tmpSnippetManager.parseSnippetFile("snippet _log\n\tconsole.log( \'$1\', $2);\n"), "javascript");
        tmpSnippetManager.register( tmpSnippetManager.parseSnippetFile("snippet _fnandreply\n\tfunction(theReply){console.log(theReply)}\n"), "javascript");
        tmpSnippetManager.register( tmpSnippetManager.parseSnippetFile("snippet _fnandargs\n\tfunction(){console.log(arguments)}\n"), "javascript");
        tmpSnippetManager.register( tmpSnippetManager.parseSnippetFile("snippet _apiandreply\n\tThisApp.apiCall('$1').then(function(theReply){console.log(theReply)})\n"), "javascript");
        //console.log("Added some demo snippets. ToDo: Snippet Management");

        this.refreshDataViewSource();
        //~_onInit~//~
    }

    var loadedTabs = {};
    
    var demoImportData = {
        "data": [
           
        ]
    }
    
    function demoImport(){
        var tmpData = demoImportData;
        var tmpURL = ActionAppCore.ActAppWP.rootPath + '/wp-json/actappdesigner/import-docs';
        ThisApp.apiCall({url:tmpURL,data:tmpData}).then(
            function(theReply){
                console.log('demoImport Reply',theReply);
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
        tmpHTML.push('<div class="ui top attached header">Action App Docs</div>');
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
            },
            {
                name:'importexport',
                catalog: '_designer',
                controlname: 'ImportExport',
                title: 'Import / Export'
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
            if( tmpToRemove && tmpToRemove._subid ){
                tmpToRemove.unsubscribe('',tmpToRemove._subid);
            }
            if( tmpToRemove && tmpToRemove.destroy ){
                tmpToRemove.destroy();
            }
            delete loadedTabs[tmpTabName];
        }
        ThisPage.ctlBody.closeTab(tmpTabName);
    }

    
    actions.showDataViewDefs = function(theParams, theTarget){
        //var tmpParams = ThisApp.getActionParams(theParams, theTarget, ['aaa','bbb']);
        var tmpTabKey = 'tab-showDataViewDefs';
        var tmpTabTitle = 'Data Views';
        if( loadedTabs[tmpTabKey] ){
            ThisPage.ctlBody.gotoTab(tmpTabKey);
        } else {
            var tmpCloseMe = '<i style="margin-right:-5px;margin-left:10px;" tab="' + tmpTabKey + '" pageaction="closeTab" class="icon close grey inverted"></i>';
            ThisApp.getResourceFromSource('control','DataViewDefinitions','_designer','DataViewDefinitions').then(function(theLoadedControl){
                var tmpNewTabControl = theLoadedControl.create(tmpTabKey);
                //var tmpNewTabControl = ThisPage.getControl('DataViewDefinitions').create(tmpTabKey);

                ThisPage.ctlBody.addTab({item:tmpTabKey,text: tmpTabTitle + tmpCloseMe, icon: 'table', content:''})
                var tmpNewSpot = ThisPage.ctlBody.getTabSpot(tmpTabKey);
                tmpNewTabControl.loadToElement(tmpNewSpot).then(function () {
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

            var tmpSetupDetails = selectionListIndex[tmpParams.itemname] || tmpParams;
            var tmpControlName = tmpSetupDetails.controlname || 'PostsView';
            var tmpControlSource = tmpSetupDetails.catalog || '_designer';
            ThisApp.getResourceFromSource('control',tmpControlName,tmpControlSource,tmpControlName).then(function(theLoadedControl){
                var tmpNewTabControl = theLoadedControl.create(tmpTabKey);
                //var tmpNewTabControl = ThisPage.getControl('PostsView').create(tmpTabKey);
                ThisPage.ctlBody.addTab({item:tmpTabKey,text: tmpTabTitle + tmpCloseMe, icon: 'table', content:''})
                var tmpNewSpot = ThisPage.ctlBody.getTabSpot(tmpTabKey);
                tmpNewTabControl.loadToElement(tmpNewSpot).then(function () {
                    loadedTabs[tmpTabKey] = tmpNewTabControl;
                    //--- Go to the newly added card (to show it and hide others)
                    if( tmpNewTabControl.setup ){
                        tmpNewTabControl.setup(tmpSetupDetails);
                    }
                    if( tmpControlName ){
                        var tmpSubID = tmpNewTabControl.subscribe('urlOpenRequest', onURLOpenRequest.bind(this))
                        tmpNewTabControl._subid = tmpSubID;
                    }
                    ThisApp.delay(1).then(function(){
                        ThisPage.ctlBody.gotoTab(tmpTabKey);
                    })
                    
                });
            })
        }
    }

    function onURLOpenRequest(theEvent, theControl, theURL, theOptions){
        var tmpOptions = theOptions || {};
        
        var tmpUseFrame = true;

        if (!(tmpUseFrame)){
            window.open(theURL);
            return;
        } 

        var tmpURL = theURL;
        var tmpToAdd = 'nosite=1';
        if( tmpURL.indexOf('?') == -1){
          tmpToAdd = '?' + tmpToAdd;
        } else {
          tmpToAdd = '&' + tmpToAdd;
        }
        tmpURL += tmpToAdd;
        var tmpTabID = tmpOptions.name || ('tab-' + ThisApp.controls.getNextCounter());

        var tmpTabDetails = {
            tabname: tmpTabID,
            icon: tmpOptions.icon || '',
            tabtitle: tmpOptions.title || tmpTabID,
            url: tmpURL
        }
        tmpDataPage.parts.body.openTab(tmpTabDetails);


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
