import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({

  actions:{
    shuffle(){
      this.shuffleAction();
    }
  },

  comparissonValue1: computed("comparissonAttr", "collection",function(){
    return this.collection[0][this.comparissonAttr];
  }),
  comparissonValue2: computed("comparissonAttr", "collection",function(){
    return this.collection[1][this.comparissonAttr];
  })
});
