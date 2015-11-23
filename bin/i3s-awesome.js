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
		response.on('end', function() {
		  	uz();
		});
	
	}).on('error', function(e) {
		console.error("Can not fetch I3S-Awesome");
		console.error(e.message);
	});

	zip.on('end', function() {
		zip.close();
	  	uz();
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

		var rz = fs.createReadStream(tmpzipPath);

		var ext = unzip.Extract({ path: dirpath});
		rz.pipe(ext);

		ext.on('close', function() {
		  	console.log("Created I3S-Awesome: "+dirname);
		  	fs.unlinkSync(tmpzipPath);
		  	process.exit(0);
		});

	}


};