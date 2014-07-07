MusicPlayer.Comment = DS.Model.extend({
  username: DS.attr('string'),
  content: DS.attr('string'),
  createdAt: DS.attr('date', {
    defaultValue: function() {
      return new Date();
    }
  }),
  song: DS.belongsTo('song')
});
