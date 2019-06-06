export let googleOAuth = function() {

 const DISCOVERY_DOCS = [ 'https://ml.googleapis.com/$discovery/rest?version=v1' ];
 const SCOPES = 'https://www.googleapis.com/auth/cloud-platform';
 const CLIENT_ID = '365569268917-puvtu1eg8f558oib7ftrrb7dev0t0fun.apps.googleusercontent.com';

 const CONFIG = {
  discoveryDocs: DISCOVERY_DOCS,
  client_id: CLIENT_ID,
  scope: SCOPES,
  fetch_basic_profile: false
 }

 let init = function(app) {
  gapi.load('client:auth2',function() {
   gapi.client.init(CONFIG)
   .then(function(message) {
    console.log("GAPI Initialised");
    app.authenticated = false;
   })
   .catch(function(error) {
    console.log(error);
   });
  })
 }

 let authenticate = function(app) {
  return new Promise((resolve, reject) => {
   if (app.authenticated) {
    resolve()
   }
   else {
    return gapi.auth2.getAuthInstance().signIn().then(() => {
     app.authenticated = gapi.auth2.getAuthInstance().currentUser.get().hasGrantedScopes(SCOPES)
     authenticate(app);
    })
   }
  });
 }

 return { init : init, authenticate : authenticate };
}();