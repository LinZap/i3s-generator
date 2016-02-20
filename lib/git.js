var fs = require('fs'),
	Git = require("nodegit"),
	prjconf = require('./data/config.json'),
	gitconf = require('./../gitlab.json');

const username = gitconf["username"],
	  password = gitconf["password"],
	  prefix = `https://${username}:${password}@`;

module.exports = {

	prjurl : "",
	prjpath : false,

	setPrjPath: function(path){
		this.prjpath = path;
	},

	clone: function(prj,callback){

		this.prjpath = this.prjpath || __dirname + "/" + prj;
		this.prjurl = prefix + prjconf[prj];

		callback.bind(null,{
			prjpath: this.prjpath,
			prjurl: this.prjurl
		});

		fs.lstat(this.prjpath,function(err, stats){
			
			if(err) this.gitclone().then(function(){

				callback(this.prjpath);

			}.bind(this));

			else{

				require('rimraf')(this.prjpath,function(){

					this.gitclone().then(function(){

						callback(this.prjpath);

					}.bind(this));

				}.bind(this));
			}

		}.bind(this));
	},

	gitclone: function(){
		return Git.Clone(this.prjurl,this.prjpath);
	}

}


