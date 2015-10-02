import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
   saveAnswer() {
     var params = {
       author: this.get('author'),
       content: this.get('content'),
     };
     this.sendAction('saveAnswer', params);
   }
 }
});
