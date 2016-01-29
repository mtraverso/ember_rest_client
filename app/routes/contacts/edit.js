import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.find('contact',params.id);
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
			this.transitionTo('contacts.index');
		}
	}
});
