import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | date-helper', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:date-helper');
    assert.ok(route);
  });
});
