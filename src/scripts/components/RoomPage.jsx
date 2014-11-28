/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var _ = require('lodash');

var Users = require('./Users');
var MessageStore = require('../stores/MessageStore');
var UserStore = require('../stores/UserStore');
var Fluxable = require('../behaviors/Fluxable');
var Messages = require('./Messages');

var MessageActions = require('../actions/MessageActions');
var UserActions = require('../actions/UserActions');

var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

var RoomPage = React.createClass({

  mixins: [Fluxable],

  watchStores: [MessageStore, UserStore],

  getStateFromStores: function() {
    return {
      messages: MessageStore.all(),
      users: UserStore.all(),
      name: "",
      message: ''
    };
  },

  didMount: function() {
    var login = localStorage.getItem('login');
    console.log(login);
    if (_.isObject(login)) {
      var login = ChatApi.getUser(localStorage.getItem('login'))
      window.login = login;
    } else {
      UserActions.addUser("partos");
    }
    // localStorage.setItem('favoriteflavor','vanilla');
// If you read out the favoriteflavor key, you will get back “vanilla”:
// var taste = localStorage.getItem('favoriteflavor');
  },

  render: function () {
    return (
      <div>

        <Col xs={6} md={6}>
          <Messages messages={this.state.messages}/>
        </Col>

        <Col xs={6} md={6}>
          <Users users={this.state.users}/>
        </Col>

        <Input type='text' value={this.state.message} onChange={this.setText}/>
        <Button bsStyle="info" onClick={this.addMessage}>Send</Button>
      </div>
    );
  },

  setText: function(event) {
    this.setState({message: event.target.value});
  },

  addMessage: function() {
    MessageActions.addMessage(this.state.message, window.login);
  }
});

// раз в 10 сек нужно звать метод ChatApi.activeUser(user)
function stillAlive() {
  setTimeout(function () {
    ChatApi.activeUser(window.login);
    stillAlive();
  }, 8000);
};



module.exports = RoomPage;
