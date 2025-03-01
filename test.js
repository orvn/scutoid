'use strict';

require('mocha');
const assert = require('assert');
const Scutoid = require('./scutoid.js');

describe('Scutoid', function() {
  it('Returns the expectedvolume of a scutoid with specific properties: ', function() {
    let scutoid = new Scutoid(10, 2, 5);
    let volume = scutoid.volume();
    assert.equal(Math.round(volume * 100) / 100, 66.32);
  });

  it('Returns the expected surface area of a scutoid with specific properties:', function() {
    let scutoid = new Scutoid(10, 2, 5);
    let surface = scutoid.surface();
    assert.equal(Math.round(surface * 100) / 100, 82.27);
  });
});
