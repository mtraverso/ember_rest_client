import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource ('contacts',{path: '/'}, function(){
    this.route('new', {path: '/new'});
    this.route('show', {path: '/show/:id'});
    this.route('edit', {path: '/edit/:id'});
    this.route('delete', {path: '/delete/:id'});
    
  });
});

export default Router;
