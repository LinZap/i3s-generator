#!/usr/bin/env node

process.argv.forEach(function(val, index, array) {
  console.log(index + ': ' + val);
});

 console.log(__dirname);