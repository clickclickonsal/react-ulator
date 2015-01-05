/** 
	* @jsx React.DOM
*/

var Calculator = React.createClass({displayName: "Calculator",
	render: function() {
		return (
			React.createElement("div", {id: "calculator"}, 
				"Hello, World!"
			)
		);
	}
});

React.render(React.createElement(Calculator, null), document.getElementById('calc-container'));