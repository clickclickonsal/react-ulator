/** 
	* @jsx React.DOM
*/

var Calculator = React.createClass({displayName: "Calculator",
	getInitialState: function(){
		return {
			numkeys: [
				'1','2','3',
				'4','5','6',
				'7','8','9',
				'0','.'
			],
			opkeys: [
				'C','%','/',
				'X','-','+',
				'='
			]
		}
	},
	render: function() {
		return (
			React.createElement("div", {id: "calculator"}, 
				this.state.numkeys.map(function(key){
					React.createElement(Numkey, {value: key})
				}, this)
			)
		);
	}
});

React.render(React.createElement(Calculator, null), document.getElementById('calc-container'));