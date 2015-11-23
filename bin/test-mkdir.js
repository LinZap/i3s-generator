#!/usr/bin/env node
var fs = require('fs');
var dirname = process.argv[2];
fs.mkdirSync(dirname);
console.log("mkdir "+dirname);
