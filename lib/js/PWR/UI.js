import * as handles from "./UI/handles/_index.js";

export let UI = function() {

 const UI_UPDATE_INTERVAL = 1000;
 
 let _UI = function(app) {
  this.fontFamily = window.getComputedStyle(app.elementRoot).fontFamily;
  this.canvas = new fabric.Canvas('pwr_ele_canvas',{hoverCursor: 'pointer',backgroundColor: 'rgb(255,255,255)'});
  window.addEventListener("resize",handles.window.resize.bind(app),handles.window.useCapture)

  this.elements = Array.from(app.elementRoot.querySelectorAll('*[id]')).reduce((obj,ele) => {obj[ele.id]=ele; return obj},{});
  Object.entries(this.elements).forEach(([id,ele]) => {
   Object.entries(UI.handles)
   .filter(([targetName,events]) => (ele.id == targetName)|ele.classList.contains(targetName))
   .forEach(([targetName,events]) => {
    Object.entries(events).forEach(([eventName,action]) => {
     ele.addEventListener(
      eventName,
      action.bind(app),
      action.useCapture
     );
    });
   });
  });
 }

 _UI.handles = handles;
 return _UI;
}();