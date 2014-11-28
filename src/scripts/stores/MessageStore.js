'use strict';

var Store = require('../lib/Store');

var MessageConstants = require('../constants/MessageConstants');
var Moment = require('moment');

var messages = ChatApi.getMessages().list();

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
  var mes = ChatApi.createMessage(payload.text, payload.time, payload.user);
  console.log(payload);
  console.log(mes);
  this.emitChange();
});

ChatApi.onMessagesChange(function () {
  messages = ChatApi.getMessages().list();
  this.emitChange();
}.bind(MessageStore));

module.exports = MessageStore;
