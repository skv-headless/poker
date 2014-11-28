/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;

var Login = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <h1>Hello</h1>
        <Link to="room">Dashboard</Link>
      </div>
    );
  }
});

module.exports = Login;
