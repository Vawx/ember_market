import Ember from 'ember';

export default Ember.Route.extend({
  cartSvc: Ember.inject.service(),
  
  model(){
    return this.get('cartSvc');
  },
});
