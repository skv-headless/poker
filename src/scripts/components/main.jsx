/** @jsx React.DOM */

var PokerApp = require('./PokerApp');
var React = require('react');
var {DefaultRoute, Route, Routes} = require('react-router');

React.renderComponent((
  <Routes location="history">
    <Route path="/" handler={PokerApp}>
    </Route>
  </Routes>
), document.getElementById('content'));
