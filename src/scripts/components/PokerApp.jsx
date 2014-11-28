/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;


var imageURL = require('../../images/yeoman.png');

var PokerApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = PokerApp;
