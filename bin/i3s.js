#!/usr/bin/env node

/*
	@ By Zap
*/

var i3s_db = require('./i3s-db'),
	//i3s_awesome = require('./i3s-awesome'),
	git = require('./../lib/git.js'),
	field = process.argv[2];



switch(field) {

	case 'db': 
		git.clone('schema',function(prjpath){
			// D:\Node\i3s-generator\lib/schema
			i3s_db(prjpath);
		});
	break;
	

	case 'awesome': 
	case 'framework':   
		if(!process.argv[3]){
			console.error(`command not found!\nplease type like this:\n\n\ti3s ${field} [prjname]\n`);
			process.exit();
		}
		var prjdist = __dirname+ "/" + process.argv[3];

		git.setPrjPath(prjdist);
		console.log(`i3s-${field} fetching...`);
		git.clone(field,function(){
			console.log("Project created at: "+prjdist);
			process.exit();
		});
	break;
		
	case '--help':
		help();
	break;

	default:
		help();
	break;

}


function help(){


console.log("\
\n usage: i3s [commands]\n\
\n These are common i3s commands: \n\
\n  db\t\t\tcreate a empty i3s-database\
\n  framework [prjname]\tcarete a back-end i3s-framework\
\n  awesome [prjname]\tcarete a front-end i3s-awesome");
process.exit();

}
