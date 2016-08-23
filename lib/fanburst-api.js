'use strict';

var
  apiMe = require('./me'),
  apiFollowing = require('./following');

function FanburstModule(opts) {
  opts = opts || {};
  var _this = this;
  this.credentials = opts.credentials ? opts.credentials : {};
  this.baseUrl     = opts.baseUrl || 'https://api.fanburst.com';

  var
    keysClientId = ['clientid', 'client_id', 'clientID', 'clientId'],
    keysClientSecret = ['clientsecret', 'client_secret', 'clientSecret'],
    keysCallbacks = ['callbackurl', 'callback_url', 'callbackUrl', 'callbackURL', 'redirecturi', 'redirectUri', 'redirect_uri'],
    objCredentials = {
      clientId: keysClientId,
      clientSecret: keysClientSecret,
      redirect_uri: keysCallbacks
    };

  for (var keyCredential in objCredentials) {
    objCredentials[keyCredential].forEach(function(key) {
      if (opts[key]) {
        _this.credentials[keyCredential] = opts[key];
      }

      if (_this.credentials[key]) {
        _this.credentials[keyCredential] = _this.credentials[key];
      }
    });
  }

  console.log('this', this);

}

FanburstModule.prototype.me = apiMe.get;
FanburstModule.prototype.followingAdd = apiFollowing.add;
FanburstModule.prototype.followingContains = apiFollowing.contains;

module.exports = FanburstModule;
