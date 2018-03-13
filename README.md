# ghostwebapp
# Ghosts
A mobile application that uses google maps to geolocated audio-clips which are only accessible by proximity to the original recording location.

### MVP Features:
- [ ]  Users can log in via Google OAuth
- [ ]  User must be logged in to see any other features
- [ ]  Users can see all audio clips on the Google map
- [ ]  When user scrolls out in Google maps, audio clips closely located will [cluster together](https://developers.Google.com/maps/documentation/javascript/marker-clustering)
- [ ]  Users can listen to an audio clip only when they are within a small radius to the audio clip
- [ ]  Users can record an audio clip to the app
- [ ]  When a user records an audio clip, the clip is assigned coordinates according to the location of the user
- [ ]  Users can listen to audio clips from other users
- [ ]  Users can listen to their own audio clips

##### Optional Features:
- [ ]  Users have the option to see just their audio clips on google maps
- [ ]  Users can follow other users
- [ ]  Users can select categories to file their audio clips under
- [ ]  Users can select a category to filter audio clips
- [ ]  Users can upload a profile picture, bio, and simple updates (like "I will be traveling to --location-- next!" or "The next museum tour will be at --location--")
- [ ]  When a user is near an audio clip(s), they receive a notification with the option to play clip

##### Tech stack for this project:
- [ ]  React Native
- [ ]  PostgreSQL
- [ ]  Node.js
- [ ]  Express
- [ ]  Mocha
- [ ]  Chai
- [ ]  OAuth
- [ ]  Flexbox
- [ ]  Google Maps API
- [ ]  Audio modules

##### Skills still needed:
- [ ]  <b>React Native:</b>
	[Udemy](https://www.udemy.com/the-complete-react-native-and-redux-course/) course, reviewing previous code, and documentation
- [ ]  <b>OAuth:</b>
	Reading documentation, maybe try the [Udemy](https://www.udemy.com/learn-oauth-2/) course
- [ ]  <b>Audio module:</b>
	Test a few npm module ( [1](https://github.com/Shinetechchina/react-native-audio-player-recorder/blob/master/Example/src/recorder/Recorder.js), [2](https://github.com/jsierles/react-native-audio), [3](https://github.com/futurice/react-native-audio-toolkit) ) to find one that is easy to work with and saves recordings as mp3 files

### Specifications
- [ ] Create new branches per spec category, push commits often
- [ ] Use React on the front end
- [ ] Use a UI framework, such as bootstrap, Materialize, or UIKit
- [ ] Dynamic rendering based on the device you are using
- [ ] Implement Google Maps API
  - [ ] Create data pins on map
  - [ ] New data pins should pull data from database
  - [ ] Data pins contains links to audio clips, username, date, category, etc.
  - [ ] When data pin is selected, audio clip will play (maybe load into player via link?)
- [ ] Sound clips should be stored remotely, and accessed via links in the database
- [ ] Access audio clip when selected on map
- [ ] Basic CRUD functionality using Express server
- [ ] User profiles show all their uploaded clips
- [ ] Implemented user authentication utilizing Passport with a Postgres database to store session data
- [ ] Connect front end to back end
- [ ] Search feature

### Implementation Plan
- [ ] Build out React scaffolding
  - [ ] Atom components: buttons, form components,
  - [ ] Molecule components: navbar, forms, Google Map container, audio container
  - [ ] Page components: login, signup, profile, map, individual audio, country, city, search
  - [ ] Implement UI framework
- [ ] Implement Google Maps API
- [ ] Backend
  - [ ] Database Tables:
   - [ ] audios: id, user_id, country, city, audio_link, date, coordinates, category, keywords
   - [ ] users: id, name, username, email, password, image_link, join_date
   - [ ] keywords: audio_id, keyword
  - [ ] Routes:
   - [ ] get `search`
   - [ ] get `user/profile/:id`
   - [ ] get `user/login`
   - [ ] post `user/login`
   - [ ] get `user/signUp`
   - [ ] post `user/signUp`
   - [ ] get `user/profile/:id`
   - [ ] put `user/profile/:id/edit`
   - [ ] post `audioClip`
   - [ ] get `audioClip`
   - [ ] get `audioClip/:country`
   - [ ] get `audioClip/:city`
  - [ ] Queries:
   - [ ] `search`
   - [ ] `getUserByEmail`
   - [ ] `getAudioByUserEmail`
   - [ ] `getAudioByCountry`
   - [ ] `getAudioByCity`
   - [ ] `getAudioByCoordinates`
   - [ ] `getAudioByCategory`
   - [ ] `getAudioByKeyword`
   - [ ] `createAudio`
   - [ ] `logIn`
   - [ ] `signUp`
   - [ ] `editUserById`
   
### Week 1:
	- [ ] Focus on React Native tutorials

### Week 2:
- [x] Move from mobile to web app 
- [x] Set up react scaffolding w/ router boilerplate 
- [x] Setup Schema 
- [x] Implement Google maps API
   - [x] simple map
   	EXTRA:
	 - [ ] cluster
  	 - [x] pull data from db to map
- [ ] Form includes link to recorded file, user name, category, lat, lng
- [ ] Either save audio as blob into DB, or using a cloud storage (firebase?)
- [ ] Make/Find Audio module that records and saves to file 
   - [ ] Write directly using [JS](https://medium.com/@bryanjenningz/how-to-record-and-play-audio-in-javascript-faa1b2b3e49b)
   - [ ] Check out some [scripts](https://github.com/higuma/web-audio-recorder-js)
   - [ ] Write it from [scratch](https://developers.google.com/web/fundamentals/media/recording-audio/)?
   - [ ] [Recorder.js](https://ourcodeworld.com/articles/read/499/how-to-record-and-export-audio-wav-and-mp3-using-recorder-js-in-html5)?
   - [ ] [NPM Module](https://www.npmjs.com/package/react-audio-recorder)?
- [ ] Create front end views (Use wireframes and UI design that John Ware created)
- [x] Routes:
   - [x] get `user/profile/:id`
   - [x] get `user/login`
   - [x] post `user/login`
   - [x] get `user/signUp`
   - [x] post `user/signUp`
- [x] Queries: 
   - [x]  getUserByEmail
   - [x] logIn
   - [x] signUp
   - [x] editUserById