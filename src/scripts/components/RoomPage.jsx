/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Users = require('./Users');
var Messages = require('./Messages');

var RoomPage = React.createClass({

  getInitialState: function () {
    return {
      users: [
        {name: "Женя"}, {name: "Артем"}
      ],
      messages: [
          {text: "srgseg"},{text: "srgseg"}
      ],
      name: ""};
  },

  render: function () {
    return (
      <div className='main'>
        <h1>Hello3!!!</h1>
        <Users users={this.state.users}/>
        <Messages messages={this.state.messages}/>
      </div>
    );
  }
});

module.exports = RoomPage;
