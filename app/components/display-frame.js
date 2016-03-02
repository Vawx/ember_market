import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addToCart(inventory){
      this.sendAction('addToCart', inventory);
    }
  }
});
