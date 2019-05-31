export let init = function() {

 // const API_KEY = 'AIzaSyCIgqBLODVqw1GhxlQMlQI7ruylW9exy1E';
 const DISCOVERY_DOCS = [ 'https://ml.googleapis.com/$discovery/rest?version=v1' ];
 const SCOPES = 'https://www.googleapis.com/auth/cloud-platform';
 const CLIENT_ID = '365569268917-puvtu1eg8f558oib7ftrrb7dev0t0fun.apps.googleusercontent.com';

 const CONFIG = {
  discoveryDocs: DISCOVERY_DOCS,
  client_id: CLIENT_ID,
  scope: SCOPES
 }

 let _init = function() {
  gapi.load('client:auth2',function() {
   gapi.client.init(CONFIG)
   .then(function(message) {
    console.log(message);
    gapi.auth2.getAuthInstance().isSignedIn.listen(reportSigninStatus);
   })
   .catch(function(error) {
    console.log(error);
   });
  })
 }

 let reportSigninStatus = function() {
  var user = gapi.auth2.getAuthInstance().currentUser.get();
  if (user.hasGrantedScopes(SCOPES)) {
   console.log("currently signed in")
  } else {
   console.log("currently signed out")    
  }
 }

 return _init;
}();