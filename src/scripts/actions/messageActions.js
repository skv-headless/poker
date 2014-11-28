'use strict';

var _ = require('lodash');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var MessageConstants = require('../constants/MessageConstants');

function addMessage(text, user) {
  AppDispatcher.handleAction(MessageConstants.ADD_MESSAGE_START);
  console.log(user);
  console.log(text);
  AppDispatcher.handleAction(MessageConstants.ADD_MESSAGE_SUCCESS, {text: text, user: user});
}

module.exports = {
  addMessage: addMessage
};
