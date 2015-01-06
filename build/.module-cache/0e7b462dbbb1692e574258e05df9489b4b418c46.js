/** 
	* @jsx React.DOM
*/
var Calculator = React.createClass({displayName: "Calculator",
	getInitialState: function(){
		return {
			numkeys: [
				'7','8','9',
				'4','5','6',
				'1','2','3',
				'0','.'
			],
			opkeys: [
				'C','%','/',
				'X','-','+',
				'='
			],
			outputscreen: 0
		}
	},
	render: function() {
		return (
			React.createElement("div", {id: "calculator"}, 
				React.createElement("div", {className: "output"}, this.state.outputscreen), 
				this.state.numkeys.map(function(key){
					return (
						React.createElement(Numkey, {value: key})
					)
				}, this)
			)
		);
	}
});

var Numkey = React.createClass({displayName: "Numkey",
	render: function() {
		return (
			React.createElement("div", {className: this.props.value}, this.props.value)
		)
	}
});

React.render(React.createElement(Calculator, null), document.getElementById('calc-container'));