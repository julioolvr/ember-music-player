MusicPlayer.Router.map(function() {
  this.resource('song', { path: '/song/:song_id'});
  this.resource('artist', { path: '/artist/:artist_id' });
});

MusicPlayer.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('song');
  }
});
