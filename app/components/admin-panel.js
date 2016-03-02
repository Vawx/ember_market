import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveInventory( ) {
      var params = {
        name: this.get("name"),
        cost: this.get("cost"),
        img: this.get("image"),
      };
      this.sendAction('saveInventory', params);
    },
  }
});
