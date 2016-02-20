/*
	@ By Zap
*/

var pg = require('pg'),
	fs = require('fs');

/*	
	option:
	user
	password
	host
	port
	dbname	
	sql || file
	params
	----------------
	callback(result)
*/

module.exports = function(option,callback){

	var conString = getConnString(option);

	pg.connect(conString, function(err, client, done) {

		var sql = "",
			params = option.params || [];

		if(option.file){
			if(Array.isArray(option.file))
				for (var i = 0; i < option.file.length; i++) 
					sql+= fs.readFileSync(option.file[i],'utf8');
			else fs.readFileSync(option.file,'utf8')
		}
		else{
			sql = option.sql;
		}
			

		if(err)  return console.error(option,"\n\n"+err);

		console.log("exec sql ...");
		
		client.query(sql, params ,function(err, result) {
			done();
			client.end();
			if(err) { return console.error('error running query', err); }
			callback(result);
		});
	});

	function getConnString(cf){
		//anything://user:password@host:port/database
		return "postgres://"+cf.user+":"+cf.password+"@"+cf.host+":"+cf.port+"/"+cf.dbname;
	}
}