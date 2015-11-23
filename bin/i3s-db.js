/*
	@ By Zap
*/

var extend = require('extend'),
	pg_config = require('../lib/pg-config'),
	sql = require('../lib/quick-sql'),
	request = require('../lib/quick-request'),
	sys_conf = require('../data/config');

module.exports = function(){

	var db_conf;

	pg_config.run(create_db);


	function create_db(config){
		db_conf = config;
		var create_db_opt = {
			sql: 'create database "'+db_conf.dbname+'"',
			dbname: 'postgres'
		},
		this_opt = extend({},db_conf,create_db_opt);
		sql(this_opt,create_i3s);
	}


	function create_i3s(result){

		var url_option = {
			host: sys_conf.db.host,
			path: sys_conf.db.path,
			ContentType: 'text/plain'
		};

		request(url_option,function(data){
			var create_i3s_opt = {sql: data},
				this_opt = extend({},db_conf,create_i3s_opt);
			sql(this_opt,done);
		});
	}


	function done(result){
		console.log("Created I3S Database: " + db_conf.dbname);
	}


};
