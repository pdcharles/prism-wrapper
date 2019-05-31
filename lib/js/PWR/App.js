export let App = function _SOURCE() {
 
 let _App = function(elementRoot) {
  this.elementRoot = elementRoot;
  this.ui = new PWR.UI(this);
  PWR.googleOAuth.init()
  this.spectra = [];
 }
 
 _App._SOURCE = _SOURCE;
 return _App;
}()