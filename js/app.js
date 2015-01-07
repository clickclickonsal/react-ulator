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
				'X','/','%',
				'C','+','-',
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
			<div id="calculator">

				<div className="output-screen">
					<div className="previous-output-screen">
						{ this.state.outputscreen === 0 ? '' : this.state.lastoutput }
						<br/>
						{ this.state.currentoperator}
					</div>
					{ this.state.outputscreen === 0 ? this.state.lastoutput : this.state.outputscreen }
				</div>

				<div className="op-keys">
					{this.state.opkeys.map(function(key){
						return (
							<Opkey value={key} opKeyClick={this.opKeyClick} />
						)
					}, this)}
				</div>

				<div className="num-keys">
					{this.state.numkeys.map(function(key){
						return (
							<Numkey value={key} keyClick={this.keyClick} />
						)
					}, this)}
				</div>

				<div className="equal-key" onClick={this.equalKeyClick}><p>{this.state.equalkey}</p></div>

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