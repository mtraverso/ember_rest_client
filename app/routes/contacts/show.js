import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		return this.store.find('contact',params.id);
	},
	actions:{
		editAction: function(){
			var self = this;
			this.controller.get('model').save().then(
				function() {
					self.transitionTo('contacts.edit',self.controller.get('model').id);
				}).catch(function(){
					alert("Couldn't save user");
				});
		},
		deleteAction: function(){
			var self = this;
			var id = self.controller.get('model').id;
			self.transitionTo('contacts.delete',id);
		},
		listAction: function(){
			this.transitionTo('contacts.index');
		}
	}
});
