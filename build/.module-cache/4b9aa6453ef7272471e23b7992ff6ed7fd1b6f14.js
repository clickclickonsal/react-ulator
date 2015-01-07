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
			],
			equalkey: '=',
			outputscreen: 0,
			lastoutput: 0,
			currentoperator: '',
		}
	},
	equalKeyClick: function(){
		var value = 0;
		if( this.state.currentoperator === '%' ){
			value += this.state.lastoutput % this.state.outputscreen
		}
		else if( this.state.currentoperator === '/' ){
			value += this.state.lastoutput / this.state.outputscreen
		}
		else if( this.state.currentoperator === 'X' ){
			value += this.state.lastoutput * this.state.outputscreen
		}
		else if( this.state.currentoperator === '-' ){
			value += this.state.lastoutput - this.state.outputscreen
		}
		else if( this.state.currentoperator === '+' ){
			value += this.state.lastoutput + this.state.outputscreen
		}
		this.setState({lastoutput:value, outputscreen:0});

	},
	opKeyClick: function(key){
		console.log(key)
		if( key === 'C'){	
			this.setState({outputscreen: 0, lastoutput: 0, currentoperator:''})
		}
		else {
			this.setState({currentoperator:key})
		}
	},
	keyClick: function(key){
		
			if(this.state.lastoutput === 0){
				this.setState({lastoutput:key})
			}
			else if(this.state.lastoutput !== 0 && this.state.currentoperator !== ''){
				var newKey = this.state.outputscreen.toString() + key.toString()
				this.setState({outputscreen:parseInt(newKey)})
			}
			else {
				var newKey = this.state.lastoutput.toString() + key.toString()
				this.setState({lastoutput:parseInt(newKey)})
			}
	},
	render: function() {
		return (
			React.createElement("div", {id: "calculator"}, 

				React.createElement("div", {className: "output-screen"}, 
					React.createElement("div", {className: "previous-output-screen"}, 
						 this.state.outputscreen === 0 ? '' : this.state.lastoutput, 
						React.createElement("br", null), 
						 this.state.currentoperator
					), 
					 this.state.outputscreen === 0 ? this.state.lastoutput : this.state.outputscreen
				), 

				React.createElement("div", {className: "num-keys"}, 
					this.state.numkeys.map(function(key){
						return (
							React.createElement(Numkey, {value: key, keyClick: this.keyClick})
						)
					}, this), 
						React.createElement("div", {className: "op-keys"}, 
					this.state.opkeys.map(function(key){
						return (
							React.createElement(Opkey, {value: key, opKeyClick: this.opKeyClick})
						)
					}, this)
				)
				), 

			

				React.createElement("div", {className: "equal-key", onClick: this.equalKeyClick}, this.state.equalkey)

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
		this.props.opKeyClick(this.props.value)
	},
	render: function() {
		return (
			React.createElement("div", {className: this.props.value, onClick: this.clickHandler}, this.props.value)
		)
	}
});

React.render(React.createElement(Calculator, null), document.getElementById('calc-container'));