var connect = require('connect');
var app = connect();

function sayHello(req,res,next){
	res.setHeader('Content-Type','text/plain');
	res.end('Hello Sam');
}

//use middleware to do Authentication
function restrict(req,res,next){

	console.log('Catch the req in /admin path.');
	// var authorization = req.headers.authorization;
	// if(!authorization) return next(new Error('Unauthorization'));

	// var parts = authorization.split(' ');
	// var scheme = parts[0];
	// var auth = new Buffer(parts[1],'base64').toString().split(':');
	// var user = auth[0];
	// var pass = auth[1];

	// console.log(user);
	// console.log(pass);

	next();
}

function logger(req,res,next){
	console.log("%s %s",req.method,req.url);
	next();
}

//Make a congfigurable logger
var logger2 = require('./logger2')(':method :url :content-type :CONNECTION');


//app.use(logger).use('/admin',restrict).use(sayHello);
app.use(logger2).use('/admin',restrict).use(sayHello);
app.listen(8809);
















