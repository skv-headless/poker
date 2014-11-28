/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var Message = React.createClass({

  render: function () {
    return (
      <p> {this.props.message.text}
      </p>
    );
  }
});

module.exports = Message;
