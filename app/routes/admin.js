import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    saveInventory( params ) {
      var newInventory = this.store.createRecord( 'inventory', params );
      newInventory.save( );
      this.transitionTo('index');
    }
  }
});
