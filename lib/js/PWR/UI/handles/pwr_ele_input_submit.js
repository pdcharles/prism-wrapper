export let pwr_ele_input_submit = function() {
 
 let click = function(e) {
  e.preventDefault()
  PWR.deepMass.prismPredict()
 }
 click.useCapture = false;

 return {  
          click : click,
        };
}();