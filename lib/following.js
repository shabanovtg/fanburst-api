'use strict';

var
  rp = require('request-promise'),
  followingUrl = '/me/following';

/**
 * POST https://api.fanburst.com/me/following?access_token=12345
 * @param followingId
 * @param accessToken
 * @param cb(err, results)
 * err - Error
 * results - { status: '200' }
 */
exports.add = function(followingId, accessToken, cb) {
  var
    _this = this,
    args = arguments.length;

  cb = cb || function () {};

  if (args < 2) return cb('Invalid arguments');
  if (typeof followingId !== 'string') return cb('Invalid followingId');
  if (typeof accessToken !== 'string') return cb('Invalid accessToken');

  var uri = this.baseUrl + followingUrl + '?access_token=' + accessToken;

  var requestOpts = {
    method: 'POST',
    uri: uri,
    body: {
      user_id: followingId
    },
    json: true
  };

  rp(requestOpts)
    .then(function(response) {
      cb(null, response);
      return false;
    })
    .catch(function(response) {
      var err = new Error(response.message || 'FanburstApi followingAdd error');
      cb(err);
      return false;
    });
};

/**
 * GET https://api.fanburst.com/me/following/contains?access_token=12345&follower_id=9yjoe6
 * @param followingId
 * @param accessToken
 * @param cb(err, results)
 * err - Error
 * results -
 *  {
      "user_id": "2q9lk6",
      "follower_id": "9yjoe6",
      "status": false
    }
 */
exports.contains = function(followingId, accessToken, cb) {
  var
    _this = this,
    args = arguments.length;

  cb = cb || function () {};

  if (args < 2) return cb('Invalid arguments');
  if (typeof followingId !== 'string') return cb('Invalid followingId');
  if (typeof accessToken !== 'string') return cb('Invalid accessToken');

  var uri = this.baseUrl + followingUrl + '/contains';

  var requestOpts = {
    method: 'GET',
    uri: uri,
    qs: {
      access_token: accessToken,
      follower_id: followingId
    },
    json: true
  };

  rp(requestOpts)
    .then(function(response) {
      cb(null, response);
      return false;
    })
    .catch(function(response) {
      var err = new Error(response.message || 'FanburstApi followingContains error');
      cb(err);
      return false;
    });
};
