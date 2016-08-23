# fanburst-api

Fanburst Api for Node.js

- get user profile
- following 
  + contains
  + add (follow)
  
## Install
```
$ npm install fanburst-api
```

## Usage
```
var FanburstApi = require('fanburst-api');
var fanburstApi = new FanburstApi();
```

<b>Note: You can get ```accessToken``` with help [passport-fanburst](https://github.com/shabanovtg/passport-fanburst)</b>
## Get user profile
```
fanburstApi.me(accessToken, function(err, result) {
  if (err) {
    //...
  } else {
    //...
  }
});
```

## Following

### Contains

```
fanburstApi.followingContains(followingId, accessToken, function(err, result) {
  if (err) {
    //...
  } else {
    //...
  }
});
```

### Add

```
fanburstApi.followingAdd(followingId, accessToken, function(err, result) {
  if (err) {
    //...
  } else {
    //...
  }
});
```
