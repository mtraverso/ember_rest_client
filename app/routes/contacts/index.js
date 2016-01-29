import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {return this.store.findAll('contact');
	
	},
	actions:{
		newAction: function(){
			this.transitionTo('contacts.new');
		}
	}

});
