export let authenticate = function() {

 let _authenticate = new Promise (function(resolve, reject) {
  if (pwrApp.authenticated) {
   resolve()
  }
  else {
   return gapi.auth2.getAuthInstance().signIn().then(resolve)
  }
 }

 return _authenticate;
}();