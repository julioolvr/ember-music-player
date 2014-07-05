MusicPlayer.Song = DS.Model.extend({
  name: DS.attr('string'),
  artist: DS.belongsTo('artist'),
  path: DS.attr('string'),
  mbid: DS.attr('string')
});

// TODO: Move mbid to albums
MusicPlayer.Song.FIXTURES = [
  { id: 1, name: 'Growth', artist: 1, path: 'songs/growth.mp3', mbid: '78a78799-7b32-4118-baa1-9bc72f44f525' },
  { id: 2, name: 'Rock you like a hurricane', artist: 2, path: 'songs/hurricane.mp3', mbid: '5508f46f-1f21-4c07-812a-e9d64e001cef' }
];
