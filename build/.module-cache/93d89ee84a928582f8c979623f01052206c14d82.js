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
	keyClick: function(key){
		console.log(key);
	},
	render: function() {
		return (
			React.createElement("div", {id: "calculator"}, 
				React.createElement("div", {className: "output"}, this.state.outputscreen), 
				React.createElement("div", {className: "keys"}, 
					this.state.numkeys.map(function(key){
						return (
							React.createElement(Numkey, {value: key, keyClick: this.keyClick})
						)
					}, this)
				), 
				React.createElement("div", null, 
					this.state.opkeys.map(function(keys){
						return (
							React.createElement(Opkey, {value: key, keyClick: this.keyClick})
						)
					}, this)
				)
			)
		);
	}
});

var Numkey = React.createClass({displayName: "Numkey",
	clickHandler: function(){
		this.props.keyClick(this.props.value)
	},
	render: function() {
		return (
			React.createElement("div", {className: this.props.value, onClick: this.clickHandler}, this.props.value)
		)
	}
});

var Opkey = React.createClass({displayName: "Opkey",
	clickHandler: function(){
		this.props.keyClick(this.props.value)
	},
	render: function() {
		return (
			React.createElement("div", {className: this.props.value, onClick: this.clickHandler}, this.props.value)
		)
	}
});

React.render(React.createElement(Calculator, null), document.getElementById('calc-container'));