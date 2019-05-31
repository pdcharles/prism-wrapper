export let pwr_ele_input_submit = function _SOURCE() {
 
 let click = function(e) {
  PWR.google.authenticate()
  .then(() => {
   gapi.client.ml.projects.predict({name:RESOURCE_NAME,resource:TEST})
   .then(r => { pwrApp.data = r.result.predictions.map(p => p.outputs) })
  })
 }
 click.useCapture = false;

 return {  
          _SOURCE : _SOURCE,
          click   : click,
        };
}();