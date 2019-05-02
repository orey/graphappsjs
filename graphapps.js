//-----------------------------------------------
// Core GraphApps.js library
// Author: O. Rey
// Creation date: May 2 2019
// License: Apache 2
//-----------------------------------------------
'use strict';

const uuidv4 = require('uuid/v4');


// Module global name
const GA = {}


GA.createId = () => {
    return uuidv4();
};


// Create the prototype chain
GA.construct = (o) => {
    var F = function () {};
    F.prototype = o;
    var that = new F();
    that.id = uuidv4();
//    that.type = "undefined";
    that.print = () => {console.log(that);};
    return that;
};

GA.CONST = {
    DOMAIN : "DOMAIN"
};



GA.OriginDomain = {
    type : GA.CONST.DOMAIN,
};

GA.Domain = (name) => {
    var that = GA.construct(GA.OriginDomain);
    that.domainName = name;
    return that;
};




GA.Node = (obj) => {
    this.obj = obj;
};


GA.Edge = (source, dest, obj) => {
    this.source = source;
    this.dest = dest;
    this.obj = obj;
}


//------------------------------Exports
module.exports = {
    Domain : GA.Domain,
    Node : GA.Node,
    Edge : GA.Edge,
    createId : GA.createId
}
