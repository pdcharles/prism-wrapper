export let window = function() {
 
 let resize = function(e) {
  this.ui.canvas.setHeight(this.ui.canvas.wrapperEl.parentElement.offsetHeight);
  this.ui.canvas.setWidth(this.ui.canvas.wrapperEl.parentElement.offsetWidth);
  this.ui.canvas.renderAll();
  this.ui.canvas.calcOffset();
 }
 resize.useCapture = false;

 return {
          resize    : resize,
        };
}();