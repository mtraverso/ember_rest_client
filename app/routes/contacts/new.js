import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.store.createRecord('contact');
	},
	actions:{
		submitAction: function(){
			var self = this;
			this.controller.get('model').save().then(
				function() {
					self.transitionTo('contacts.show',self.controller.get('model').id);
				}).catch(function(){
					alert("Couldn't save user");
				});
		},
		listAction: function(){
			this.controller.get('model').destroyRecord();
			this.transitionTo('contacts.index');
		}
	}
});
