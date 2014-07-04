MusicPlayer.CoverArtComponent = Ember.Component.extend({
  coverArtPath: function() {
    return 'http://coverartarchive.org/release/' + this.get('mbid') + '/front-250';
  }.property('mbid')
});
