'use strict';

var
  apiMe = require('./me'),
  apiFollowing = require('./following');

function FanburstModule(opts) {
  opts = opts || {};
  this.credentials = opts.credentials || {};
  this.baseUrl     = opts.baseUrl || 'https://api.fanburst.com';

  var
    credentials = {},
    keysClientId = ['clientid', 'client_id', 'clientID', 'clientId'],
    keysClientSecret = ['clientsecret', 'client_secret', 'clientSecret'],
    keysCallbacks = ['callbackurl', 'callback_url', 'callbackUrl', 'callbackURL', 'redirecturi', 'redirectUri', 'redirect_uri'],
    keysCredentials = [keysClientId, keysClientSecret, keysCallbacks];

  keysCredentials.forEach(function(arrKeys) {
    arrKeys.forEach(function(key) {
      if (opts[key]) {
        credentials.clientId = opts[key];
      }

      if (opts.credentials[key]) {
        credentials.clientId = opts.credentials[key];
      }
    });
  });
}

FanburstModule.prototype.me = apiMe.get;
FanburstModule.prototype.followingAdd = apiFollowing.add;
FanburstModule.prototype.followingContains = apiFollowing.contains;

module.exports = FanburstModule;
