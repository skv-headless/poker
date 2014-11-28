'use strict';

var Store = require('../lib/Store');

var users = [];

var UserStore = new Store({

  all: function () {
    return users;
  }

});

// UserStore.registerHandler(UserConstants.ADD_MESSAGE_START, function (payload) {
//   this.emitChange();
// });
//
// UserStore.registerHandler(UserConstants.SADD_MESSAGE_SUCCESS, function (payload) {
//   this.add(payload);
//   this.emitChange();
// });

module.exports = UserStore;
