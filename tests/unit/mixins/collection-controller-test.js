import EmberObject from '@ember/object';
import CollectionControllerMixin from 'starwars-test/mixins/collection-controller';
import { module, test } from 'qunit';

module('Unit | Mixin | collection-controller', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let CollectionControllerObject = EmberObject.extend(CollectionControllerMixin);
    let subject = CollectionControllerObject.create();
    assert.ok(subject);
  });
});
