import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | user', function(hooks) {
  setupTest(hooks);

  test('commentsNumber returns correct value', function(assert) {
    let store = this.owner.lookup('service:store');
    let author = store.createRecord('user', {});
    store.createRecord('comment', { author });
    store.createRecord('comment', { author });

    assert.equal(author.commentsNumber, 2);
  });
});
