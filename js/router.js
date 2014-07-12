MusicPlayer.Router.map(function() {
  this.resource('song', { path: '/song/:song_id'});
  this.resource('artist', { path: '/artist/:artist_id' });
});

MusicPlayer.IndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('song');
  }
});

MusicPlayer.ArtistRoute = Ember.Route.extend({
  model: function(params) {
    var artist = this.store.find('artist', params.artist_id),
      slowDown;

    slowDown = new Ember.RSVP.Promise(function(resolve, reject) {
      setTimeout(resolve, 3000)
    });

    return Ember.RSVP.all([artist, slowDown]).then(function(results) {
      return results[0];
    });
  }
});
