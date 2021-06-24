import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | date', function (hooks) {
  setupRenderingTest(hooks);

  test('it serializes date correctly', async function (assert) {
    this.someDate = new Date(1995, 1, 2);

    await render(hbs`{{date someDate}}`);

    assert.equal(this.element.textContent.trim(), '02-02-1995');

    this.set('someDate', new Date(2011, 11, 12));

    assert.equal(this.element.textContent.trim(), '12-12-2011');
  });
});
