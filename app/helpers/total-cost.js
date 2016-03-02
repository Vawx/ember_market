import Ember from 'ember';

export function totalCost(params) {
  var total = 0;
  for( var i = 0; i < params[0].length; i++ ){
    total += parseInt( params[0][i].get('cost') );
  }
  console.log(total);
  return total;
}

export default Ember.Helper.helper(totalCost);
