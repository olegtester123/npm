const middlewareUtils = require('@shprengel-co/middleware-utils');
const mpath = require('mpath'); // phantom: not in any package.json, comes via mongoose from root

console.log('web-app using', middlewareUtils.name);
console.log('web-app mpath (phantom):', typeof mpath);
