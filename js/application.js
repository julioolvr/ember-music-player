window.MusicPlayer = Ember.Application.create({
  rootElement: '#music-player-app'
});

MusicPlayer.Router = Ember.Router.extend({
  location: 'none'
});

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
  },
  serializeIntoHash: function(hash, type, record, options) {
    /*
      Deployd expects just the attributes for the new record, without the root object
     */
     Ember.merge(hash, this.serialize(record, options));
  },
  serializeHasMany: function(record, json, relationship) {
    /*
      RESTSerializer won't add hasMany relationships by default
     */
    if (relationship.kind === 'hasMany') {
      json[relationship.key] = record.get(relationship.key).mapBy('id');
    } else {
      return this._super.apply(this, arguments);
    }
  }
});
