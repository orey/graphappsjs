//-----------------------------------------------
// GraphApps Utils 
// Author: O. Rey
// Creation date: May 2 2019
// License: Apache 2
//-----------------------------------------------
'use strict';

const uuidv4 = require('uuid/v4');


//-----------------------------------------------
// This function get all properties for an object including
// the ones of the prototype chain.
//-----------------------------------------------
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


//-----------------------------------------------
// This function prints the chain of properties
// under a tree form. It includes the properties
// of the prototype chain.
//-----------------------------------------------
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


//-----------------------------------------------
// Creates a unique ID
//-----------------------------------------------
function createId(){
    return uuidv4();
}


//-----------------------------------------------
// This function builds a new object based on a
// previous one. It augments the object (with an id)
//-----------------------------------------------
function Construct(o) {
    var F = function () {};
    F.prototype = o;
    var that = new F();
    that.id = uuidv4();
    that.print = function(){console.log(that);};
    return that;
};


//-----------------------------------------------
// Exports
//-----------------------------------------------
module.exports = {
    getAllProperties : getAllProperties,
    printChain       : printChain,
    createId         : createId,
    Construct        : Construct
};

