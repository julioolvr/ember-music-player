MusicPlayer.Router.map(function() {
  this.resource('song', { path: '/song/:song_id'});
  this.resource('artist', { path: '/artist/:artist_name' });
});

MusicPlayer.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('song');
  }
});

MusicPlayer.ArtistRoute = Ember.Route.extend({
  model: function(params) {
    // TODO: When not using fixtures anymore, probably findQuery will be better
    return this.store.find('song').then(function(songs) {
      return songs.filterBy('artist', params.artist_name);
    });
  },
});
