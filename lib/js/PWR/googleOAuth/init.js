export let init = function() {

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
    console.log("GAPI Initialised");
    gapi.auth2.getAuthInstance().isSignedIn.listen(reportSigninStatus);
    pwrApp.authenticated = false;
   })
   .catch(function(error) {
    console.log(error);
   });
  })
 }

 let reportSigninStatus = function(value) {
  console.log("Signin Status: "+value);
  var user = gapi.auth2.getAuthInstance().currentUser.get();
  if (user.hasGrantedScopes(SCOPES)) {
   pwrApp.authenticated = true;
  } else {
   pwrApp.authenticated = false;    
  }
 }

 return _init;
}();