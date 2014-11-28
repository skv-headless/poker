/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');

var User = require('./User');

var Users = React.createClass({

  render: function () {
    return (
      <ul> {this.props.users.map(function(user){
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
