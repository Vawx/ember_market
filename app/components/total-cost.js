import Ember from 'ember';

export default Ember.Component.extend({
  cartSvc: Ember.inject.service(),
  grandTotal: 0,

  totalCost() {
    var sum = this.get('cartSvc').items.reduce(function(total, item) {
      return parseInt( total ) + parseInt( item.cost );
    }, 0);

    this.set('grandTotal', sum);
    return sum;
  },
});
