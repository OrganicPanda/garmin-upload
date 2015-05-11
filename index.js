var activities = require('./lib/activities')
  , upload = require('./lib/upload')
  , log = require('./lib/log')
  , async = require('async');

activities(function(err, files) {
  if (err) return console.log('Error getting Activities!', err);

  console.log('Found Garmin activities:', files);
  console.log('Starting upload');

  async.map(files, upload, function(err, results) {
    if (err) return console.log('Error uploading Activities!', err);

    log(results);
  });
});