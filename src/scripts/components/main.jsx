/** @jsx React.DOM */

var LoginPage = require('./LoginPage');
var RoomPage = require('./RoomPage');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

// Export React so the devtools can find it
(window !== window.top ? window.top : window).React = React;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={LoginPage}>
    </Route>
    <Route name='room' path="/room" handler={RoomPage}>
    </Route>
  </Routes>
), document.getElementById('content'));
