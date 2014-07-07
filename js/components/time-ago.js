MusicPlayer.TimeAgoComponent = Ember.Component.extend({
  iso: function() {
    return moment(this.get('date')).toISOString();
  }.property('date'),
  timeAgo: function() {
    return moment(this.get('date')).fromNow();
  }.property('date')
});
