import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),

  model( ) {
    return this.store.findAll('inventory');
  },
  actions: {
    addToCart(inventory){
      this.get('shoppingCart').add(inventory);
    }
  }

});
