import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('inventory');
  },

  actions: {
    saveInventory( params ) {
      var newInventory = this.store.createRecord( 'inventory', params );
      newInventory.save( );
      this.transitionTo('index');
    },
    destroyInv(item){
      // console.log('DESTROY!');
      item.destroyRecord();
      this.transitionTo('admin');
    }
  }

});
