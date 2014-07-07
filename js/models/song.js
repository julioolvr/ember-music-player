MusicPlayer.Song = DS.Model.extend({
  name: DS.attr('string'),
  artist: DS.belongsTo('artist'),
  path: DS.attr('string'),
  mbid: DS.attr('string'),
  comments: DS.hasMany('comment', { async: true })
});
