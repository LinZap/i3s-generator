/*
	@ By Zap
*/

var http = require('http'),
	querystring = require('querystring');

/*
	opt
	host: 
	path: 
	query : {}
	method : get
	port: 80
	contentType : text/html
*/

module.exports = function(opt,callback){


	var postData = querystring.stringify(opt.query||{});

	var options = {
		hostname: opt.host,
		port: opt.port || 80,
		path: opt.path,
		method: opt.method || 'GET',
		headers: {
			'Content-Type': opt.contentType || 'text/html',
			'Content-Length': postData.length
		}
	};

	var req = http.request(options, function(res) {
		var data = "";
		if(res.statusCode!=200){
			console.error("Can not fetch SQL file");
			console.error(res.headers);
		}
		res.setEncoding('utf8');
		res.on('data', function (chunk) { data+=chunk; });
		res.on('end', function() { callback(data); });
	});

	req.on('error', function(e) {
		console.error(e.message);
	});



	req.write(postData);
	req.end();
};