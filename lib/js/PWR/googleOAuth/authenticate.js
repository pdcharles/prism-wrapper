export let authenticate = function() {

 let _authenticate = function() {
  return new Promise((resolve, reject) => {
   if (pwrApp.authenticated) {
    resolve()
   }
   else {
    return gapi.auth2.getAuthInstance().signIn().then(() => {
     pwrApp.authenticated = gapi.auth2.getAuthInstance().currentUser.get().hasGrantedScopes(SCOPES)
     _authenticate();
    })
   }
  });
 }

 return _authenticate;
}();