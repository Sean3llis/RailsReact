/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

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
	
	var Test = __webpack_require__(/*! ./test */ 1);
	
	var App = React.createClass({
		render: function () {
			return React.createElement(
				'div',
				null,
				React.createElement(
					'h1',
					null,
					'App Title'
				),
				React.createElement(Test, null)
			);
		}
	});
	
	$(document).ready(function () {
		ReactDOM.render(React.createElement(App, null), document.getElementById('app'));
	});

/***/ },
/* 1 */
/*!**************************************!*\
  !*** ./app/assets/frontend/test.jsx ***!
  \**************************************/
/***/ function(module, exports) {

	var Test = React.createClass({
		render: function () {
			return React.createElement(
				"div",
				null,
				"\"testing 123\""
			);
		}
	});
	
	module.exports = Test;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map