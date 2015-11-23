#!/usr/bin/env node

/*
	@ By Zap
*/

var i3s_db = require('./i3s-db'),
	i3s_awesome = require('./i3s-awesome'),
	field = process.argv[2],
	dirname = process.argv[3];


switch(field) {
	case 'db': 
		i3s_db(); 
	break;
	
	case 'awesome':  
		if(dirname) i3s_awesome(dirname);  
	break;
}
