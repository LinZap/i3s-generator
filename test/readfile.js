var fs = require('fs');

var res=  fs.readFileSync(__dirname+'/../lib/schema/analysis.sql', 'utf8');

console.log(res);