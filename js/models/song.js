MusicPlayer.Song = DS.Model.extend({
  name: DS.attr('string'),
  artist: DS.attr('string'),
  path: DS.attr('string')
});

MusicPlayer.Song.FIXTURES = [
  { id: 1, name: 'Growth', artist: 'Gaijin Games', path: 'songs/growth.mp3' }
];
