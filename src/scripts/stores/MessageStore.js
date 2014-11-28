'use strict';

var Store = require('../lib/Store');

var MessageConstants = require('../constants/MessageConstants');
var Moment = require('moment');

var messages = [
  {
    user: "user1",
    text: "srgseg",
    date: Moment()
  },
  {
    user: "user2",
    text: "srgseg",
    date: Moment()
  }
];

var MessageStore = new Store({

  all: function () {
    return messages;
  },

  add: function (message) {
    messages.push(message);
  }

});

MessageStore.registerHandler(MessageConstants.ADD_MESSAGE_START, function (payload) {
  this.emitChange();
});

MessageStore.registerHandler(MessageConstants.ADD_MESSAGE_SUCCESS, function (payload) {
  this.add(payload);
  console.log(payload);
  this.emitChange();
});

module.exports = MessageStore;
