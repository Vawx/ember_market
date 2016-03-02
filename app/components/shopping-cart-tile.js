import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  actions: {
    destroy(item){
      this.get('shoppingCart').destroy(item);

    }
  }
});
