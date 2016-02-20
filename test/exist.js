var fs = require('fs'),
	rimraf = require('rimraf'),
	Git = require("nodegit");

var p = __dirname+'/i3s-schema';

fs.lstat(p,function(err, stats){

	if(err){
		Git.Clone("https://linzap:zxcvbnm123@gitlab.com/wkelab/i3s-schema.git", "./test/i3s-schema")
		.then(function(repository) {
		 	console.log('done');
		});
	}
	else{
		rimraf(p,function(){
			console.log('done');
		})
	}
	
});

