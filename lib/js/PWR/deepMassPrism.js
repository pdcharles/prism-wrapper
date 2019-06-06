export let deepMassPrism = function() {

 const RESOURCE_NAME = 'projects/deepmass-204419/models/deepmass_prism';
 const TEST = {'instances':[
                            {'inputs': [[1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0]], 'context': [[0.42857142857142855], [0.23333333333333334], [0.0], [1.0], [0.0], [1.0]], 'key': 0},
                            {'inputs': [[0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0], [0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]], 'context': [[0.2857142857142857], [0.2], [1.0], [0.0], [1.0], [0.0]], 'key': 1}
                           ]};

 const MOL_WEIGHTS = {
                      'A': 71.03711,
                      'C': 103.00919 + 57.02146,  // Add fixed CME modification to the Cys mass.
                      'E': 129.04259,
                      'D': 115.02694,
                      'G': 57.02146,
                      'F': 147.06841,
                      'I': 113.08406,
                      'H': 137.05891,
                      'K': 128.09496,
                      'M': 131.04049,
                      'L': 113.08406,
                      'N': 114.04293,
                      'Q': 128.05858,
                      'P': 97.05276,
                      'S': 87.03203,
                      'R': 156.10111,
                      'T': 101.04768,
                      'W': 186.07931,
                      'V': 99.06841,
                      'Y': 163.06333,
                      'M(ox)': 147.035405,
                      'groupCH3': 14.01565,
                      'groupOH': 17.00274,
                      'groupH': 1.007825,
                      'groupH2O': 18.01057,
                      'groupCH3CO': 42.01057,
                      'groupO': 15.994915,
                      'groupNH3': 17.02655
                     }
 const NON_SYMBOL_RE = /^group/
 const SYMBOLS = Object.entries(MOL_WEIGHTS).filter(([k,v]) => !NON_SYMBOL_RE.test(k)).map(([k,v]) => k).sort()

 const SEQUENCE_SPLIT_RE = /(?=[A-Z](?![^(]*\)))/

 const PERCENTILES = { 
                      'Length' :
                      [7, 7, 7, 7, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10,
                       10, 11, 11, 11, 11, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12, 12, 12, 12, 12,
                       12, 13, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15,
                       15, 15, 15, 15, 15, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 17, 18, 18, 18,
                       18, 19, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 23, 23, 24, 25, 26, 27,
                       28, 30],
                      'Charge' :
                      [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                       2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
                       2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
                       3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4,
                       7]
                      }
     

 const PRECURSOR_METADATA_FEATURES = ['Charge_pos',
                                      'Length_pos',
                                      'FTMS', 'HCD',
                                      'CID', 'ITMS'];

 const FRAG_TYPES = ['HCD','CID'];
 const ANALYSERS  = ['ITMS','FTMS'];

 let valueToOneHot = function(value,referenceArray) {
  let i = referenceArray.findIndex(ele => ele==value);
  if ( i >=0 ) {
   let ret = Array(referenceArray.length).fill(0)
   ret[i] = 1;
   return ret;
  }
  else return undefined;
 }

 let ContextArray = function() {
  let _CA = Array(PRECURSOR_METADATA_FEATURES.length).fill( [0] );
  _CA.add = function(value,location) {
   this[PRECURSOR_METADATA_FEATURES.findIndex(feature => feature==location)] = value;
  }
  _CA.addOH = function(oh,referenceArray) {
   this[PRECURSOR_METADATA_FEATURES.findIndex(feature => feature==referenceArray.find((ele,i) => oh[i]))] = [1]
  }
  return _CA;
 }
 
 let rangeNormalise = function(values,lower,upper) {
  if ( !Array.isArray(values) || !values.length ) return undefined;
  if ( typeof(lower) == 'undefined' ) lower = Math.min(...values);
  if ( typeof(upper) == 'undefined' ) upper = Math.max(...values);
  if ( !values.every( value => value >= lower && value <= upper ) ) return undefined;
  let range = upper - lower;
  return values.map( value => ( value - lower ) / range );
 }

 let _prepare = function(sequence,charge,fragType,analyser) {
  if ( sequence.length == 0 ) return undefined;
  charge = Number.parseInt(charge);
  if ( !Number.isInteger(charge) ) return undefined;
  let sequenceOH = sequence.split(SEQUENCE_SPLIT_RE).map(aa => valueToOneHot(aa,SYMBOLS));
  let ca = new ContextArray();
  let chargePCNorm = rangeNormalise([charge],0,Math.max(...PERCENTILES.Charge));
  let lengthPCNorm = rangeNormalise([sequenceOH.length],0,Math.max(...PERCENTILES.Length));
  let fragTypeOH = valueToOneHot(fragType,FRAG_TYPES);
  let analyserOH = valueToOneHot(analyser,ANALYSERS);
  if ([...sequenceOH,chargePCNorm,lengthPCNorm,fragTypeOH,analyserOH].some(ele => typeof(ele) == 'undefined')) return undefined;
  ca.add(chargePCNorm,'Charge_pos');
  ca.add(lengthPCNorm,'Length_pos');
  ca.addOH(fragTypeOH,FRAG_TYPES);
  ca.addOH(analyserOH,ANALYSERS);
  return JSON.stringify({ 'instances': [{ 'inputs' : sequenceOH, 'context' : ca , 'key' : 0 }] });
 }
 
 let _predict = function(input) {
  let app = this;
  return new Promise((resolve,reject) => {
   PWR.googleOAuth.authenticate(app)
   .then(() => {
    app.lastRequest = input.json();
    gapi.client.ml.projects.predict({name:RESOURCE_NAME,resource:input})
    .then(r => {
     app.lastResponse = r;
     app.data = r.result.predictions.map(p => p.outputs));
    }
   })
  })
 }

 return { prepare : _prepare , predict : _predict };
}();