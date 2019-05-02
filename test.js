//-----------------------------------------------
// Core GraphApps.js library - Tests
// Author: O. Rey
// Creation date: May 2 2019
// License: Apache 2
//-----------------------------------------------
'use strict';

const ga = require('./graphapps.js');
const utils = require('./utils.js');


// Main tests entry point
(() => {
    console.log('-----------------');
    testImport();
    console.log('-----------------');
    testDomain();
    console.log('-----------------');
})();


function dump(obj){
    for (const key of Object.keys(obj))
	console.log(key + ': ' + obj[key]);
}

function getProperties(o) {
  var seenobj = new Set();
  var seenprop = new Set();
  function _proto(obj) {
    return obj instanceof Object ?
           Object.getPrototypeOf(obj) :
           obj.constructor.prototype;
  }
  function _properties(obj) {
    var ret = [];
    if (obj === null || seenobj.has(obj)) { return ret; }
    seenobj.add(obj);
    if (obj instanceof Object) {
      var ps = Object.getOwnPropertyNames(obj);
      for (var i = 0; i < ps.length; ++i) {
        if (!seenprop.has(ps[i])) {
          ret.push(ps[i]);
          seenprop.add(ps[i]);
        }
      }
    }
    return ret.concat(_properties(_proto(obj)));
  }
  return _properties(o);
}


function testImport() {
    console.log(ga);
    console.log(ga.createId());
    console.log(ga.createId());
    console.log(ga.createId());
}

function testDomain(){
    var dom1 = ga.Domain("domain 1");
    console.log(dom1);
    console.log(Object.getPrototypeOf(dom1));
    dom1.print();
    console.log(dom1.type);
    dump(dom1);
    var tab = getProperties(dom1);
    for (var i in tab)
	console.log(tab[i] + ': ' + dom1[tab[i]]);
    console.log(utils.getAllProperties(dom1));
    
}


