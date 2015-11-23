/*
	@ By Zap
*/

var pg = require('pg');

/*	
	config:
	user
	password
	host
	port
	dbname	
	sql
	params
*/
module.exports = function(option,callback){

	var conString = getConnString(option);

	pg.connect(conString, function(err, client, done) {

		var sql = option.sql,
			params = option.params || [];

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