export let window = function _SOURCE() {
 
 let resize = function(e) {
  app.ui.canvas.setHeight(app.ui.canvas.wrapperEl.parentElement.offsetHeight);
  app.ui.canvas.setWidth(app.ui.canvas.wrapperEl.parentElement.offsetWidth);
  app.ui.canvas.renderAll();
  app.ui.canvas.calcOffset();
 }
 resize.useCapture = false;

 return {  
          _SOURCE   : _SOURCE,
          resize    : resize,
        };
}();