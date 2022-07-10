/* This section of the code registers a new block, sets an icon and a category, and indicates what type of fields it'll include. */
  
wp.blocks.registerBlockType('actapp/message-box', {
    title: 'Message Box',
    icon: 'smiley',
    category: 'actappui',
    attributes: {
      content: {type: 'string'},
      color: {type: 'string'}
    },
    
  /* This configures how the content and color fields will work, and sets up the necessary elements */
    
    edit: function(props) {
      function updateContent(event) {
        props.setAttributes({content: event.target.value})
      }
      function updateColor(event) {
        props.setAttributes({color: event.target.value})
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          {style:{color:"red"}, id: 'someId', className: "ui header large blue"},
          "Message Box"
        ),
        React.createElement("input", { type: "text", value: props.attributes.content, onChange: updateContent }),
        React.createElement("select", {value: props.attributes.color, onChange: updateColor},
        React.createElement("option", {value: ""}, ""),
        React.createElement("option", {value: "red"}, "Red"),
        React.createElement("option", {value: "blue"}, "Blue"),
          React.createElement("option", {value: "green"}, "Green")
        )
        //React.createElement(wp.components.ColorPicker, { color: props.attributes.color, onChangeComplete: updateColor })
      );
    },
    save: function(props) {
      var tmpEl = wp.element.createElement(
        "div",
        { className: "ui message " + props.attributes.color },
        props.attributes.content
      );
      return tmpEl;
    }
  })