MusicPlayer.SongController = Ember.ObjectController.extend({
  newComment: {},
  actions: {
    saveComment: function(arguments) {
      var username = this.get('newComment.username'),
          content = this.get('newComment.content'),
          song = this.get('model');

      var comment = this.store.createRecord('comment', {
        username: username,
        content: content,
        song: song
      });

      this.set('newComment.username', '');
      this.set('newComment.content', '');

      song.get('comments').addObject(comment);

      comment.save().then(function() {
        song.save();
      });
    }
  }
});
