/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var _ = require('lodash');

var User = require('./User');

var Users = React.createClass({

  render: function () {
    return (
      <ul> { _.map(this.props.users, function(user){
        return (
          <li>
          <User user={user}/>
          </li>
        )
      })}
      </ul>

    );
  }
});

module.exports = Users;
