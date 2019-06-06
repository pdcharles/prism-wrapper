export let pwr_ele_input_submit = function() {
 
 let click = function(e) {
  e.preventDefault();
  let app = this;
  let json = PWR.deepMassPrism.prepare(
   app.ui.elements.pwr_ele_input.sequence.value,
   app.ui.elements.pwr_ele_input.charge.value,
   app.ui.elements.pwr_ele_input.fragType.value,
   app.ui.elements.pwr_ele_input.analyser.value
  );
  if (typeof(json) != 'undefined') PWR.deepMassPrism.predict.call(app,json).catch((r) => console.log(r));
 }
 click.useCapture = false;

 return {  
         click : click,
        };
}();