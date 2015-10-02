import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
   saveAnswer() {
     var params = {
       user: this.get('user'),
       date: this.get('date'),
       content: this.get('content'),
       question: this.get('question')
     };
     this.sendAction('saveAnswer', params);
   }
 }
});
