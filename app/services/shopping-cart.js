import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item){
    var newStoreItem = {
      name: item.get('name'),
      cost: item.get('cost'),
      img: item.get('img'),
      verify: this.get('items').length,
    };
    this.get('items').pushObject(newStoreItem);
  },
  destroy(item){
    for( var i = 0; i < this.get('items').length; i++ ) {
        if( this.get('items')[ i ].verify === item.verify ) {
          this.get('items').removeObject(item);
        }
    }
  },
  totalCost( ) {
      var total = 0;
      if( this.get('items') != undefined ) {
        for( var i = 0; i < this.get('items').length; i++ ){
          total += parseInt( this.get('items')[i].get('cost') );
        }
      }
      return total;
  },

});
