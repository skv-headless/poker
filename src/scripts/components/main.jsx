/** @jsx React.DOM */

var LoginPage = require('./LoginPage');
var RoomPage = require('./RoomPage');
var React = require('react/addons');

// var Router = require('react-router');
// var { Route, RouteHandler, Link } = Router;

// var {DefaultRoute, Route, Router} = require('react-router');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

React.renderComponent((
  <RoomPage/>
), document.getElementById('content'));

// var routes = (
//   <Route name="app" path="/" handler={LoginPage}>
//     <Route name='room' path="/room" handler={RoomPage}/>
//   </Route>
// );
//
// Router.run(routes, function (Handler) {
//   React.render(<Handler/>, document.getElementById('content'));
// });
