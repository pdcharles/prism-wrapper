import * as PWR from "./PWR/_index.js";
window.PWR = PWR;

window.addEventListener("load", function() {
 window.pwrApp = new PWR.App(document.getElementById("prism_wrapper"))
});