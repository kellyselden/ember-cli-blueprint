'use strict';

const { describe } = require('./helpers/mocha');
const { expect } = require('./helpers/chai');
const path = require('path');
const {
  emberInit: _emberInit,
  prepareBlueprint
} = require('ember-cli-update-test-helpers');

const fixturesPath = path.resolve(__dirname, 'fixtures');

async function emberInit({
  args = []
}) {
  return await _emberInit({
    args: [
      '-sn',
      ...args
    ]
  });
}

describe(function() {
  this.timeout(5 * 1000);

  before(async function() {
    let {
      blueprintPath,
      cleanUp
    } = await prepareBlueprint();

    this.blueprintPath = blueprintPath;
    this.cleanUp = cleanUp;
  });

  after(async function() {
    await this.cleanUp();
  });

  it('works', async function() {
    let cwd = await emberInit({
      args: [
        '-b',
        this.blueprintPath
      ]
    });

    expect(cwd).to.be.a.directory().and.equal(fixturesPath);
  });
});
