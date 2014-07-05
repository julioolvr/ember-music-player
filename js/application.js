window.MusicPlayer = Ember.Application.create();

MusicPlayer.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'http://localhost:2403'
});

MusicPlayer.ApplicationSerializer = DS.RESTSerializer.extend({
  extractArray: function(store, type, rawPayload) {
    var payload = {},
        pluralType = type.typeKey.pluralize();

    payload[pluralType] = rawPayload;

    return this._super(store, type, payload);
  },
  extractSingle: function(store, type, rawPayload) {
    var payload = {};

    payload[type.typeKey] = rawPayload;

    return this._super(store, type, payload);
  }
});
