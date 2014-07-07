MusicPlayer.Comment = DS.Model.extend({
  username: DS.attr('string'),
  content: DS.attr('string'),
  song: DS.belongsTo('song')
});
