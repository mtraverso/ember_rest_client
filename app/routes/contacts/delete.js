import Ember from 'ember';

export default Ember.Route.extend({
	model(params){
		var self = this;
		this.store.find('contact',params.id).then(function(contact){
			contact.deleteRecord();
			contact.save().then(function(){
				self.transitionTo('contacts.index');
			})
		});
	},
});
