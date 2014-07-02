MusicPlayer.Router.map(function() {
  this.resource('song', { path: '/song/:song_id'});
});

MusicPlayer.IndexRoute = Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('song', 1);
  }
});
