export let pwr_ele_input_submit = function _SOURCE() {
 
 let click = function(e) {
  e.preventDefault()
  PWR.deepmass.prismPredict()
 }
 click.useCapture = false;

 return {  
          _SOURCE : _SOURCE,
          click   : click,
        };
}();