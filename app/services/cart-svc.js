import Ember from 'ember';

export default Ember.Service.extend({
  items: [],
  grandTotal: 0,

  add(item){
    var newCartItem = {
      name: item.get('name'),
      cost: item.get('cost'),
      img: item.get('img')
    };
    this.get('items').pushObject(newCartItem);
  },

  destroy(item){
    var items = this.get('items');

    for( var i = 0; i < items.length; i++ ) {
        if( items[i].verify === item.verify ) {
          items.removeObject(item);
          //IDEA: update total ??
        }
    }
  },

  totalCost() {
    var items = this.get('items');
    var total = 0;

    for (var i=0; i < items.length; i++ ){
      var itemCost = parseInt(items[i].cost);
      total += itemCost;
    }
    return total;
  }

});
