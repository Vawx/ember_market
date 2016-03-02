import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),
  grandTotal: 0,

  totalCost: Ember.computed('shoppingCart.items', function() {
    var sum = this.get('shoppingCart').items.reduce(function(total, item) {
      return parseInt( total ) + parseInt( item.cost );
    }, 0);

    this.set('grandTotal', sum);
    return sum;
  }),
});
