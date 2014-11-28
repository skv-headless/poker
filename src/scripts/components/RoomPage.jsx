/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Users = require('./Users');
var MessageStore = require('../stores/MessageStore');
var UserStore = require('../stores/UserStore');
var Fluxable = require('../behaviors/Fluxable');
var Messages = require('./Messages');
var MessageActions = require('../actions/MessageActions');
var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

var RoomPage = React.createClass({

  mixins: [Fluxable],

  watchStores: [MessageStore],

  getStateFromStores: function() {
    return {
      messages: MessageStore.all(),
      users: UserStore.all(),
      name: "",
      message: ''
    };
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
    MessageActions.addMessage(this.state.message, "user");
  }
});

module.exports = RoomPage;
