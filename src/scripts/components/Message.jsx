/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var Moment = require('moment');

var Message = React.createClass({

  render: function () {
    // dateString = moment.unix().format("MM/DD/YYYY");
    // console.log(dateString);
    // console.log(this.props.message);
    return (
      <div>
      <p>
      {this.props.message.user}:
      </p>
      <p>

      {this.props.message.time}
      </p>
      <p>
      {this.props.message.text}
      </p>
      </div>
    );
  }
});

module.exports = Message;
