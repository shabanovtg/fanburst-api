'use strict';

var
  rp = require('request-promise');

/**
 * GET https://api.fanburst.com/me?access_token=12345
 * @param accessToken
 * @param cb
 */
exports.get = function(accessToken, cb) {
  var
    _this = this,
    args = arguments.length;

  cb = cb || function () {};

  if (args < 1) return cb('Invalid arguments');
  if (typeof accessToken !== 'string') return cb('Invalid accessToken');

  var uri = this.baseUrl + '/me';

  var requestOpts = {
    method: 'GET',
    uri: uri,
    qs: {
      access_token: accessToken
    },
    json: true
  };

  rp(requestOpts)
    .then(function(response) {
      cb(null, response);
      return false;
    })
    .catch(function(response) {
      var err = new Error(response.message || 'FanburstApi profileGet error');
      cb(err);
      return false;
    });
};
