export let App = function () {
 
 let App = function(elementRoot) {
  this.elementRoot = elementRoot;
  this.ui = new PWR.UI(this);
  PWR.googleOAuth.init(this);
  this.spectra = [];
 }

 return App;
}()