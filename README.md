# garmin-upload

Automatically upload Garmin activities to Strava.

## Setup
```shell
git clone git@github.com:OrganicPanda/garmin-upload.git
cd garmin-upload
cp data/strava_config.tmpl data/strava_config
```

Now you need to create a [Strava API application](http://www.strava.com/developers) and fill in the details in `data/strava_config`. Then:

```shell
open `node auth.js`
```

Or if you don't have `open` just manually open the URL produced by:

```shell
node auth.js
```

Allow your app access to your data and you will then be redirected. The URL that you are redirected to will have a URL like `http://127.0.0.1:8080/?state=&code=89f1ff1d1d8e7cbcb88501901f29efoobaryo78b`. Copy the `code` from that URL in to the following command:

```shell
node token.js 89f1ff1d1d8e7cbcb88501901f29efoobaryo78b
```

Take that access token and paste it in to data/strava_config as your access_token.

## Usage 
Firstly plug in your Garmin device then run:

```shell
node index.js
```

## Known Issues
 - Previously deleted activities will be re-uploaded. I've opened an issue here: https://github.com/UnbounDev/node-strava-v3/issues/6 