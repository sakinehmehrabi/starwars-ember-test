import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
  classNames:[ "row" ],
  comparissonValue1: computed("comparissonAttr", "collection",function(){
    return this.collection[0][this.comparissonAttr];
    // return this.collection.firstObject[this.comparissonAttr];
  }),
  comparissonValue2: computed("comparissonAttr", "collection",function(){
    return this.collection[1][this.comparissonAttr];
    // return this.collection.lastObject[this.comparissonAttr];
  })
});
