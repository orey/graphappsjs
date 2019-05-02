//-----------------------------------------------
// Core GraphApps.js library - Tests
// Author: O. Rey
// Creation date: May 2 2019
// License: Apache 2
//-----------------------------------------------
'use strict';

const ga = require('./graphapps.js');
//const ga = graphapps.GA;

// Main tests entry point
(() => {
    test01();
})();


function test01() {
    console.log(ga);
    console.log(ga.createId());
    console.log(ga.createId());
    console.log(ga.createId());
}



