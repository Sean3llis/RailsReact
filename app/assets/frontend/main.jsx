// var Test = require('./test.jsx');

// var App = React.createClass({
// 	render: function(){
// 		return (
// 			"app main"
// 		)
// 	}
// });


// module.exports = App;
console.log('main jsx loaded.');

var Test = require('./test');

var App = React.createClass({
	render: function(){
		return (
			<div>
				<h1>App Title</h1>
				<Test />
			</div>
		)
	}
});

$(document).ready(function(){
	ReactDOM.render(<App />, document.getElementById('app'));
});
