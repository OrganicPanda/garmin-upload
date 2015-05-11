var strava = require('strava-v3');

console.log(strava.oauth.getRequestAccessURL({scope:"view_private,write"}));