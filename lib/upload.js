var strava = require('strava-v3');

module.exports = function upload(file, cb) {
  strava.uploads.post({
    data_type: 'fit',
    file: file,
    statusCallback: function(err, payload) {
      if (~payload.status.indexOf('still being processed')) return;

      cb(null, payload);
    }
  }, function(err, payload) {});
};
