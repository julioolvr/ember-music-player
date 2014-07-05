MusicPlayer.Artist = DS.Model.extend({
  name: DS.attr('string'),
  songs: DS.hasMany('song')
});

MusicPlayer.Artist.FIXTURES = [
  { id: 1, name: 'Gaijin Games', songs: [1] },
  { id: 2, name: 'Scorpions', songs: [2] }
];
