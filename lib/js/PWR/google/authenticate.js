export let authenticate = function() {

 let _authenticate = function() {
  return new Promise((resolve, reject) => {
   if (pwrApp.authenticated) {
    resolve()
   }
   else {
    return gapi.auth2.getAuthInstance().signIn().then(resolve)
   }
  });
 }

 return _authenticate;
}();