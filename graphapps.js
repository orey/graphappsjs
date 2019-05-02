//-----------------------------------------------
// Core GraphApps.js library
// Author: O. Rey
// Creation date: May 2 2019
// License: Apache 2
//-----------------------------------------------
'use strict';

const utils = require('./utils');


// Module global name
const GA = {}


//Constants
GA.TYPES = {
    DOMAIN : "DOMAIN",
    NODE   : "NODE",
    EDGE   : "EDGE",
    WHATVERNODE : "WHATEVERNODE",
    WHATVEREDGE : "WHATEVEREDGE"
};

GA.CONST = {UNDEF : 'undefined'};


// Domain
GA.RootDomain = { name : GA.CONST.UNDEF, type : GA.TYPES.DOMAIN };


GA.Domain = (name) => {
    var that = utils.Construct(GA.RootDomain);
    if (name) that.name = name;
    return that;
};


// Node
GA.RootNode = {obj : {}, type : GA.TYPES.NODE};

GA.Node = (obj, type) => {
    var that = utils.Construct(GA.RootNode);
    if (obj) that.obj = obj;
    if (type) that.type = type;
    return that;
};

//Edge
GA.RootEdge ={
    obj    : {},
    type   : GA.TYPES.EDGE,
    source : GA.CONST.UNDEF,
    target : GA.CONST.UNDEF
};

GA.Edge = (source, dest, obj) => {
    var that = utils.Construct(GA.RootEdge);
    if (source)	that.source = source;
    if (dest) that.dest = dest;
    if (obj) that.obj = obj;
};

//Whatever
GA.WhateverNode = {type : GA.TYPES.WHATEVERNODE};
GA.WhateverEdge = {type : GA.TYPES.WHATEVEREDGE};


//Graph
GA.RootGraph = {
    name : GA.CONST.UNDEF,
    nodes : [],
    edges :[]
};






//------------------------------Exports
module.exports = {
    Domain   : GA.Domain,
    Node     : GA.Node,
    Edge     : GA.Edge,
    Whatever : GA.Whatever
};
