var TweetBox = require('./components/TweetBox');

var App = React.createClass({
	render: function(){
		return (
			<div>
				<h1>App Title</h1>
				<TweetBox />
			</div>
		)
	},
	displayName: 'App'
});

$(document).ready(function(){
	ReactDOM.render(<App />, document.getElementById('app'));
});
