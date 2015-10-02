import Ember from 'ember';

export default Ember.Component.extend({
    editAnswerForm: false,
  actions: {
    editAnswerForm() {
      this.set('editAnswerForm', true);
    },
    editAnswerHide() {
      this.set('editAnswerForm', false);
    },

    editAnswer(answer) {
      var params = {
        user: this.get('user'),
        date: this.get('date'),
        content: this.get('content')
      }
      this.set('editAnswerForm', false);
      this.sendAction('editAnswer', answer, params);
    }
  }
});
