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

module.exports = {getAllProperties : getAllProperties};

