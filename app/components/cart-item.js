import Ember from 'ember';

export default Ember.Component.extend({
  cartSvc: Ember.inject.service(),
  
  actions: {
    destroy(item){
      this.get('cartSvc').destroy(item);
      this.get('cartSvc').totalCost(item.cost);

    }
  }
});
