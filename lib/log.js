module.exports = function log(results) {
  results.forEach(function(result) {
    if (result.error) {
      console.log('Upload error:', result.error);
    } else {
      console.log(
        'Upload success:',
        result.external_id,
        result.status,
        'https://www.strava.com/activities/' + result.activity_id
      );
    }
  });
};
