var http = require("http");
var url = require("url");
var fs = require('fs')
var util = require("util");
var less = require('less');
http.createServer(function(request, response) {
	// console.log(request.headers);
	var param = url.parse(request.url, true)

	var cssfile = param.query.file + ".less";

	fs.readFile(cssfile, 'utf-8', function(error, data) {
		less.render(data, function(e, css) {
			response.writeHead(200, {
				"Content-Type": "text/css;charset=utf8",
				"Connection": "close"
			});
			response.write(css);
			response.end();
		});
	});
}).listen(1338);
console.log(" start listen at 1338 ");

