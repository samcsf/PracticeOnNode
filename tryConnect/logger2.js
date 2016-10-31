function logger2Setup(format){
	var regexp = /:(\w+)/g;

	return function(req,res,next){
		debugger;
		var str = format.replace(regexp,(match,property)=>{
			console.log(arguments);
			return req[property];
		});
		console.log(str);
		next();
	};
}

module.exports = logger2Setup;

// arguments 拿到最外面的format
//
// function logger2Setup(format){
// 	var regexp = /:(\w+)/g;

// 	return (req,res,next)=>{
// 		debugger;
// 		var str = format.replace(regexp,(match,property)=>{
// 			console.log(arguments);
// 			return req[property];
// 		});
// 		console.log(str);
// 		next();
// 	};
// }
//
//  ()=>箭头函数能拿到最近一个function()里的内容,如果被箭头函数包裹则向外继续找