import Ember from 'ember';

export default Ember.Component.extend({
  admin: false,

  init(){
    this._super(...arguments);
    if ( location.href.indexOf('admin') !== -1){
      this.set('admin', true);
    }else{
      this.set('admin', false);
    }
  },

  actions: {
    addToCart(inventory){
      this.sendAction('addToCart', inventory);
    },
    destroyMe( item ) {
      if ( confirm('You sure?') ){
        this.sendAction('destroyMe', item);
      }
    }

  }
});
