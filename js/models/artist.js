MusicPlayer.Artist = DS.Model.extend({
  name: DS.attr('string'),
  songs: DS.hasMany('song', {async: true})
});
