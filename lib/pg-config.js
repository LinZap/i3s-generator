/*
	@ By Zap
*/

"use strict";
var readline = require('readline');

module.exports = {

	res: {},
	q: require('./data/question.json'),

	rl: readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
	}),

	sq: function(callback){

		var gdata = this.go.next();

		if(!gdata.done){

			var obj = gdata.value,
				q = obj.q,
				show_q = obj.ans?q+": ("+obj.ans+") ":q+": ";

			this.rl.question(show_q, function(answer) {
				this.res[q] = answer? answer: obj.ans;
				this.sq(callback);
			}.bind(this));	

		}
		else {

			console.log("\n---- Connection Info ----\n");
			console.log(this.res);
			console.log("\n");

			this.rl.question("Is this ok? (Y/n) ", function(answer) {
				if(answer == "n") {
					console.log("Command aborted !");
					this.rl.close();	
				}
				else{
					this.rl.close();
					callback(this.res);
				}
			}.bind(this));	
		}

	},

	run: function(callback){

		var gen = function* (){ 
			for(var obj in this.q){
				yield this.q[obj];	
			}
		}.bind(this);

		this.go = gen();
		this.res = {};

		this.sq(callback);
	}
};
