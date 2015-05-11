var disks = require('nodejs-disks')
  , path = require('path')
  , async = require('async')
  , glob = require('glob');

var getDrives = function(cb) {
  disks.drives(function(err, drives) {
    if (err) return cb(err);

    disks.drivesDetail(drives, cb);
  });
};

module.exports = function getActivities(cb) {
  getDrives(function(err, drives) {
    if (err) return cb(err);

    var globPaths = drives.map(function(drive) {
      return path.join(drive.mountpoint, 'Garmin/Activities/*.fit');
    });

    async.map(globPaths, glob, function(err, results) {
      if (err) return cb(err);

      cb(null, [].concat.apply([], results));
    });
  });
};
