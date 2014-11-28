'use strict';

var _ = require('lodash');
var moment = require('moment');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var MessageConstants = require('../constants/MessageConstants');

function addMessage(text, user) {
  AppDispatcher.handleAction(MessageConstants.ADD_MESSAGE_START);
  AppDispatcher.handleAction(MessageConstants.ADD_MESSAGE_SUCCESS, {text: text, user: user, time: moment.unix()});
}

module.exports = {
  addMessage: addMessage
};
