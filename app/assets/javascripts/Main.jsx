// class Main extends React.Component {
// 	render() {
// 		return (
// 			<h1>this will not work</h1>
// 		);
// 	}
// }

// let documentReady = () => {
// 	ReactDOM.render(
// 		<Main />,
// 		document.getElementById('app')
// 	);
// };

// $(documentReady);
var Main = React.createClass({
	render: function(){
		return (
			<div>
				<h1>Properties are passed through: {this.props.testProp}</h1>
			</div>
		);
	}
});


$(document).ready(function(){
	ReactDOM.render(
		<Main testProp="lolpropz" />,
		document.getElementById('app')
	)
});