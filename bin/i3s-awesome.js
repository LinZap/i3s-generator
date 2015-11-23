/*
	@ By Zap
*/


var fs = require('fs'),
	http = require('http'),
	unzip = require('unzip'),
	sys_conf = require('../data/config');


module.exports = function(dirname){
	
	/*
		download zip file
	*/
	var tmpzipPath = __dirname+"/"+sys_conf.awesome.name;
	var sourceURL = "http://"+sys_conf.awesome.host+sys_conf.awesome.path;
	var zip = fs.createWriteStream(tmpzipPath);

	console.log("fetch: "+sourceURL);

	var request = http.get(sourceURL, function(response) {
		response.pipe(zip);
		uz();
	}).on('error', function(e) {
		console.error("Can not fetch I3S-Awesome");
		console.error(e.message);
	});

	function uz(){

		/*
			create if dir is not exist
		*/
		var dirpath = "./" + dirname;
		try { fs.accessSync(dirpath) }
		catch(err) {
			fs.mkdirSync(dirpath);
		}

		console.log("unzip: "+tmpzipPath);

		var rs = fs.createReadStream(tmpzipPath)
		.pipe(unzip.Extract({ path: dirpath}));

		fs.unlinkSync(tmpzipPath);

		console.log("Created I3S-Awesome: "+dirname);
		console.log("done");
		process.exit(0);
		
	}


};