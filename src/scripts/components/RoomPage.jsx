/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Users = require('./Users');
var Messages = require('./Messages');
var Col = require('react-bootstrap').Col;
var Input = require('react-bootstrap').Input;
var Button = require('react-bootstrap').Button;

var RoomPage = React.createClass({

  getInitialState: function () {
    return {
      users: [
        {name: "Женя"}, {name: "Артем"}
      ],
      messages: [
          {text: "srgseg"},{text: "srgseg"}
      ],
      name: "",
      message: ''
    };

  },

  render: function () {
    return (
      <div>
        <Col xs={6} md={6}>
          <Users users={this.state.users}/>
        </Col>

        <Col xs={6} md={6}>
          <Messages messages={this.state.messages}/>
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
    var messages = this.state.messages;
    messages.push({text: this.state.message});
    this.setState({messages: messages});
  }
});

module.exports = RoomPage;
