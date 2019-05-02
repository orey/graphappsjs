//-----------------------------------------------
// GraphApps Utils 
// Author: O. Rey
// Creation date: May 2 2019
// License: Apache 2
//-----------------------------------------------
'use strict';

function getAllProperties(o) {
    var props = []

    function getProperties (o) {
	var temp = Object.getOwnPropertyNames(o);
	for (var i in temp){
	    if (!(temp[i] in props))
		props.push(temp[i]);
	}
	var proto = Object.getPrototypeOf(o);
	if ((proto === undefined) || (proto === null))
	    return;
	else 
	    getProperties(proto);
    }

    getProperties(o);
    const prop_obj = {};
    for (var i in props)
	prop_obj[props[i]] = o[props[i]];
    return prop_obj;
}

function printChain(o){
    console.log("=== printChain (begin) ===");
    var level = 1;

    function print(level, value){
	console.log("   ".repeat(level-1) + "+--- " + value);
    }
    
    function browseProperties (o,level) {
	var temp = Object.getOwnPropertyNames(o);
	for (var i in temp)
	    print(level, temp[i] + ': ' + o[temp[i]]);
	var proto = Object.getPrototypeOf(o);
	if ((proto === undefined) || (proto === null))
	    return;
	else {
	    level += 1;
	    browseProperties(proto,level);
	}
    }

    browseProperties(o, 1);
    console.log("=== printChain (end) ===");
}


module.exports = {
    getAllProperties : getAllProperties,
    printChain       : printChain
};

