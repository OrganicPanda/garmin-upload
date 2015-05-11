var strava = require('strava-v3');

if (!process.argv[2]) {
  throw new Error('Access Code not Found!');
}

strava.oauth.getToken(process.argv[2], function(err, payload) {
  if (err || payload.errors) {
    throw new Error('Token exchange failed!');
  }

  console.log(
    'Paste the following in to data/strava_config as your access_token:\n' +
    payload.access_token
  );
});