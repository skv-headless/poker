'use strict';

var _ = require('lodash');
var AppDispatcher = require('../dispatcher/AppDispatcher');

var UserConstants = require('../constants/UserConstants');

function addUser(text, user) {
  AppDispatcher.handleAction(UserConstants.ADD_USER, 'partos');
}

module.exports = {
  addUser: addUser
};
