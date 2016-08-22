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
var FanburstApi = require('fanburst-api')();
```

<b>Note: You can get ```accessToken``` with help [passport-fanburst](https://github.com/shabanovtg/passport-fanburst)</b>
## Get user profile
```
FanburstApi.me(accessToken, function(err, result) {
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
FanburstApi.followingContains(followingId, accessToken, function(err, result) {
  if (err) {
    //...
  } else {
    //...
  }
});
```

### Add

```
FanburstApi.followingAdd(followingId, accessToken, function(err, result) {
  if (err) {
    //...
  } else {
    //...
  }
});
```
