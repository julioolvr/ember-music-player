MusicPlayer.CoverArtComponent = Ember.Component.extend({
  coverArtPath: function() {
    return 'http://coverartarchive.org/release/' + this.get('mbid') + '/front-500';
  }.property('mbid')
});
