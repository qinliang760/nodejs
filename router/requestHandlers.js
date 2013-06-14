function start(){   
    console.log("Request handler ’start’ was called.");   
       
    function sleep(milliSeconds){   
        var startTime=new Date().getTime();   
        while(new Date().getTime()<startTime+milliSeconds);   
    }   
    //sleep(10000);   
    return "Hello Start express";   
}   
function upload(){   
    console.log("Request handler ’upload’ was called.");   
    return "Hello Upload";   
}

function getHtml(){
//var http=require("http");	
	var options = {
	  host: 'www.google.com',
	  port: 80,
	  path: '/upload',
	  method: 'POST'
	};
console.log(options);
/*	var req = http.request(options, function(res) {
	  console.log('STATUS: ' + res.statusCode);
	  console.log('HEADERS: ' + JSON.stringify(res.headers));
	  res.setEncoding('utf8');
	  res.on('data', function (chunk) {
	    console.log('BODY: ' + chunk);
	  });
	});

	req.on('error', function(e) {
	  console.log('problem with request: ' + e.message);
	});

	// write data to request body
	req.write('data\n');
	req.write('data\n');
	req.end();*/
}   
  
exports.start=start;   
exports.upload=upload;
exports.getHtml=getHtml; 