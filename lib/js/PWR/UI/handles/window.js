export let window = function _SOURCE() {
 
 let resize = function(e) {
  this.ui.canvas.setHeight(this.ui.canvas.wrapperEl.parentElement.offsetHeight);
  this.ui.canvas.setWidth(this.ui.canvas.wrapperEl.parentElement.offsetWidth);
  this.ui.canvas.renderAll();
  this.ui.canvas.calcOffset();
 }
 resize.useCapture = false;

 return {  
          _SOURCE   : _SOURCE,
          resize    : resize,
        };
}();