//-----------------------------------------------
// Core GraphApps.js library
// Author: O. Rey
// Creation date: May 2 2019
// License: Apache 2
//-----------------------------------------------
'use strict';

const uuidv4 = require('uuid/v4');

const GA = {}

GA.createId = () => {
    return uuidv4();
}


GA.Root = () => {
    this.id = uuidv1();
}

GA.Domain = (name) => {
    this.name = name;
}


GA.Node = (obj) => {
    this.obj = obj;
}


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
