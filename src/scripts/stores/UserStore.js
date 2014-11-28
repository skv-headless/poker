'use strict';

var Store = require('../lib/Store');

var users = ChatApi.getUsers().list();

var UserConstants = require('../constants/UserConstants');
var Moment = require('moment');

var UserStore = new Store({

  all: function () {
    return users;
  }

});

ChatApi.onUsersChange(function () {
  users = ChatApi.getUsers().list();
  this.emitChange();
}.bind(UserStore));

UserStore.registerHandler(UserConstants.ADD_USER, function (payload) {
  var user = ChatApi.createUser(payload);
  window.login = user;
  localStorage.setItem('login', user._id);
  this.emitChange();
});
//
// UserStore.registerHandler(UserConstants.SADD_MESSAGE_SUCCESS, function (payload) {
//   this.add(payload);
//   this.emitChange();
// });

module.exports = UserStore;
