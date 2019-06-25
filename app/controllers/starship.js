import Controller from '@ember/controller';
import  { computed } from '@ember/object';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default Controller.extend({
    shuffleBool: false,

    actions: {
      shuffle() {
        this.toggleProperty('shuffleBool');
      }
    },

    starship1: computed('model', 'shuffleBool', function() {
      const ar = this.get("model").toArray();
      return ar[getRandomInt(ar.length)];
    }),

    starship2: computed('model', 'shuffleBool', function() {
      const ar = this.get("model").toArray();
      return ar[getRandomInt(ar.length)];
    }),

    starshipCollection: computed('starship1','starship2', function(){
      return [ this.starship1 , this.starship2 ]
    }),
});
