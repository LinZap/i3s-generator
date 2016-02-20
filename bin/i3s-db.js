/*
	@ By Zap
*/

var extend = require('extend'),
	pg_config = require('../lib/pg-config'), // 一問一答設定
	sql = require('../lib/quick-sql');

module.exports = function(sqldirpath){

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
		var i3s_sql = sqldirpath + "/" + "i3s.sql",
			analysis_sql =  sqldirpath + "/" + "analysis.sql",
			opt = {file: [i3s_sql,analysis_sql]},
			this_opt = extend({},db_conf,opt);
		sql(this_opt,done);
	}
	
	function done(result){
		console.log("Created I3S Database: " + db_conf.dbname);
	}


};
