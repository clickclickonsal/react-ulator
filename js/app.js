/** 
	* @jsx React.DOM
*/
var Calculator = React.createClass({
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
			outputscreen: 0,
			lastoutput: 0,
			currentoperator: '',
		}
	},
	opKeyClick:function(key){
		console.log(key)
		if( key === 'C'){	
			this.setState({outputscreen: 0, currentoperator:''})
		}
		else {
			this.setState({currentoperator:key})
		}
	},
	keyClick: function(key){
		// console.log(key);
		if(this.state.outputscreen !== 0 && this.state.currentoperator === '%'){
			console.log("hi")
			var output = this.state.outputscreen % key
			this.setState({outputscreen:output})
		}
		else if(this.state.outputscreen !== 0 && this.state.currentoperator === '/'){
			var output = this.state.outputscreen / key
			this.setState({outputscreen:output})
		}
		else if(this.state.outputscreen !== 0 && this.state.currentoperator === 'X'){
			var output = this.state.outputscreen * key
			this.setState({outputscreen:output})
		}
		else if(this.state.outputscreen !== 0 && this.state.currentoperator === '+'){
			var output = this.state.outputscreen + parseInt(key)
			this.setState({outputscreen:output})
		}
		else if(this.state.outputscreen !== 0 && this.state.currentoperator === '-'){
			var output = this.state.outputscreen - key
			this.setState({outputscreen:output})
		}
		else{
			if(this.state.outputscreen === 0){
				this.setState({outputscreen:key})
			}
			else {
				var newKey = this.state.outputscreen.toString() + key.toString()
				console.log(newKey)
				console.log(this.state.outputscreen.toString())
				console.log(key.toString())
				this.setState({outputscreen:parseInt(newKey)})
			}
		}
	},
	render: function() {
		return (
			<div id="calculator">
				<div className="output">{this.state.outputscreen}</div>
				<div className="keys">
					{this.state.numkeys.map(function(key){
						return (
							<Numkey value={key} keyClick={this.keyClick} />
						)
					}, this)}
				</div>
				<div className="opkeys">
					{this.state.opkeys.map(function(key){
						return (
							<Opkey value={key} opKeyClick={this.opKeyClick} />
						)
					}, this)}
				</div>
			</div>
		);
	}
});

var Numkey = React.createClass({
	clickHandler: function(){
		this.props.keyClick(this.props.value)
	},
	render: function() {
		return (
			<div className={this.props.value} onClick={this.clickHandler}>{this.props.value}</div>
		)
	}
});

var Opkey = React.createClass({
	clickHandler: function(){
		this.props.opKeyClick(this.props.value)
	},
	render: function() {
		return (
			<div className={this.props.value} onClick={this.clickHandler}>{this.props.value}</div>
		)
	}
});

React.render(< Calculator />, document.getElementById('calc-container'));