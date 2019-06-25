import Controller from '@ember/controller';
import { run } from '@ember/runloop';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Controller.extend({
    init() {
      this._super(...arguments);
      run.scheduleOnce('afterRender', () => {
        this.set('peopleCollection',this._shuffelCollection() )
      })
    },

    actions: {
      shuffle() {
        this._shuffelCollection();
      }
    },

    _shuffelCollection() {
      debugger;
      const model = this.get("model").toArray();
      const person1 = model[getRandomInt(model.length)];
      const person2 = model[getRandomInt(model.length)];
      return [person1 , person2];
    }
});
