/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Message = require('./Message');
var Messages = React.createClass({

  render: function () {
    return (
      <ul> {this.props.messages.map(function(mes){
        return (
          <li>
          <Message message={mes}/>
          </li>
        )
      })}
      </ul>

    );
  }
});

module.exports = Messages;
