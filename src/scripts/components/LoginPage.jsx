/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Router = require('react-router');

var Link = Router.Link;
var Navigation = Router.Navigation;

var Login = React.createClass({

  mixins: [Navigation],

  getInitialState: function() {
    return {text: ''};
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  onClick: function(e) {
    this.setState({login: this.state.text});
    this.transitionTo('room');
  },

  render: function() {
    return (
      <div className='main'>
        <h1>Login page</h1>
        <p>Username</p>
        <input onChange={this.onChange} value={this.state.text} type="text"/>
        <Link to="room">Login</Link>


      </div>
    );
  }

});

module.exports = Login;
