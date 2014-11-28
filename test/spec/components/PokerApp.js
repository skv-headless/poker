'use strict';

describe('Main', function () {
  var PokerApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    PokerApp = require('../../../src/scripts/components/PokerApp.jsx');
    component = PokerApp();
  });

  it('should create a new instance of PokerApp', function () {
    expect(component).toBeDefined();
  });
});
