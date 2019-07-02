import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';

export default Mixin.create({
  actions: {
    shuffle() {
      this.set("collection", this._shuffelCollection());
    }
  },

  collection: computed("model", function() {
    return this._shuffelCollection();
  }),

  _shuffelCollection() {
    const model = this.get("model").toArray();
    const item1 = model[this._getRandomInt(model.length)];
    const item2 = model[this._getRandomInt(model.length)];
    return [item1 , item2];
  },

  _getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
});
