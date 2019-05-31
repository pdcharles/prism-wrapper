export let App = function _SOURCE() {
 
 let _App = function(elementRoot) {
  this.elementRoot = elementRoot;
  this.spectra = [];
  this.authenticated = false; 
  this.ui = new PWR.UI(this);
 }
 
 _App._SOURCE = _SOURCE;
 return _App;
}()