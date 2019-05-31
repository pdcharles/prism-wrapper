export let init = function() {

 const DISCOVERY_DOCS = [ 'https://ml.googleapis.com/$discovery/rest?version=v1' ];
 const SCOPES = 'https://www.googleapis.com/auth/cloud-platform';
 const CLIENT_ID = '365569268917-puvtu1eg8f558oib7ftrrb7dev0t0fun.apps.googleusercontent.com';

 const CONFIG = {
  discoveryDocs: DISCOVERY_DOCS,
  client_id: CLIENT_ID,
  scope: SCOPES,
  fetch_basic_profile: false
 }

 let _init = function() {
  gapi.load('client:auth2',function() {
   gapi.client.init(CONFIG)
   .then(function(message) {
    console.log("GAPI Initialised");
    pwrApp.authenticated = false;
    gapi.auth2.getAuthInstance().isSignedIn.listen(signedInBool => {
     pwrApp.authenticated = signedInBool && gapi.auth2.getAuthInstance().currentUser.get().hasGrantedScopes(SCOPES);
    })
   })
   .catch(function(error) {
    console.log(error);
   });
  })
 }

 return _init;
}();