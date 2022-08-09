(function (ActionAppCore, $) {

    var ControlSpecs = {
        "options": {
            "padding": true
        },
        "content": [
            {
                "ctl": "header",
                "name": "header",
                "text": "Properties"
            },
            {
                "name": "name",
                "label": "Name",
                "ctl": "field",
                "req": true
            },
            {
                "name": "ctl",
                "label": "Web Control",
                "ctl": "dropdown",
                "list": {
                    "source": "sys_controls"
                },
                "req": true
            },
            {
                "name": "req",
                "label": "Required",
                "ctl": "radiolist",
                "row": true,
                "list": "Default|,Yes|yes,No|no"
            },
            {
                "name": "label",
                "label": "Label",
                "ctl": "field"
            },
            {
                "name": "text",
                "label": "Text",
                "ctl": "field"
            },
            {
                "name": "icon",
                "label": "Icon",
                "ctl": "field"
            },
            {
                "name": "color",
                "label": "Select Color",
                "ctl": "dropdown",
                "list": {
                    "source": "sys_colors"
                }
            },
            {
                "name": "size",
                "label": "Size",
                "ctl": "dropdown",
                "list": {
                    "source": "sys_sizes"
                }
            },
            {
                "name": "classes",
                "label": "Class name(s)",
                "ctl": "field"
            },
            {
                "name": "styles",
                "label": "CSS style(s)",
                "ctl": "field"
            },
            {
                "name": "placeholder",
                "label": "Placeholder",
                "ctl": "field"
            },
            {
                "name": "note",
                "label": "Note",
                "ctl": "field"
            },
            {
                "name": "list",
                "label": "List",
                "ctl": "field"
            },
            {
                "name": "clearing",
                "label": "Clearing",
                "ctl": "radiolist",
                "row": true,
                "list": "Default|,Yes|yes,No|no"
            },
            {
                "name": "multi",
                "label": "Allow Multiple Values",
                "ctl": "radiolist",
                "row": true,
                "list": "Default|,Yes|yes,No|no"
            },
            {
                "name": "hidden",
                "label": "Hidden",
                "ctl": "radiolist",
                "row": true,
                "list": "Default|,Yes|yes,No|no"
            },
            {
                "name": "row",
                "label": "Row (side by side)",
                "ctl": "radiolist",
                "row": true,
                "list": "Default|,Yes|yes,No|no"
            },
            {
                "name": "rows",
                "label": "Number of rows",
                "ctl": "dropdown",
                "list": "Default|,1,2,3,4,5,6,7,8,9,10,15,20"
            },
        ]
    }
    var ControlCode = {};
    //--- Do not edit or place code above this area (only JSON ControlSpecs Edit)
    //--- ActAppDesigner ---: No Edit


    ControlCode.setup = setup;
    function setup() {
        console.log("Ran setup")
    }

    ControlCode._onInit = _onInit;
    function _onInit() {
        //console.log("Ran _onInit")
    }


    //--- ActAppDesigner ---: No Edit
    //--- Do not edit or place code below this area
    var ThisControl = { specs: ControlSpecs, options: { proto: ControlCode, parent: ThisApp } };
    return ThisControl;
})(ActionAppCore, $);