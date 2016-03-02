import Ember from 'ember';

export default Ember.Service.extend({
  items: [],

  add(item){
    this.get('items').pushObject(item);
  },
  destroy(item){
    this.get('items').removeObject(item);
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
