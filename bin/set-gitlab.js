var fs = require('fs'),
	gitlab_config = require('../lib/gitlab-config');


module.exports = function(callback){

	gitlab_config.run(function(set){
		var str = JSON.stringify(set),
			path = __dirname+"/../gitlab.json";
		fs.writeFile(path, str, 'utf8', callback);
	});

}