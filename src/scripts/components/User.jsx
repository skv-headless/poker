/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var User = React.createClass({

  render: function () {
    return (
      <p> {this.props.user.name}
      </p>
    );
  }
});

module.exports = User;
