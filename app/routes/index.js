import Ember from 'ember';

export default Ember.Route.extend({
  cartSvc: Ember.inject.service(),

  model( ) {
    return this.store.findAll('inventory');
  },
  actions: {
    addToCart(inventory){
      this.get('cartSvc').add(inventory);
    }
  }

});
