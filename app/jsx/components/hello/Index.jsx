'use strict'

var React = require('react');

var Index = React.createClass({
	getInitialState: function() {
		return {
			value: "Hello Hong Kong JS!"
		}
	},
	handleChange: function(e) {
		this.setState({
	      value: e.target.value
	    });
	},
	onClick: function(e) {
		e.preventDefault();

		$.get('https://slack.com/api/chat.postMessage?token=xoxp-4501575029-4501575033-9276716226-e1d85f&channel=C07NP7YBG&text=' + this.state.value, function(result) {
			alert("Message Sent");
	    });
	},
	render: function() {
		return (
			<div className="pane">
        		<div className="app-inside">
					<form>
						<div className="form-group">
							<label>Say Hello</label>
							<textarea className="form-control" rows="3" value={this.state.value} onChange={this.handleChange}></textarea>
						</div>
						<button className="btn btn-large btn-primary" onClick={this.onClick}>Hello</button>
					</form>
				</div>
			</div>
		)
	}
});

module.exports = Index;