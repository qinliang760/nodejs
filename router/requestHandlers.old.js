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
	var http = require('http');
	var html = '';  
	http.get("http://www.battlenet.com.cn/sc2/zh/ladder/grandmaster/wings-of-liberty",function(res) { 
	    res.on('data', function(data) { 
	        // collect the data chunks to the variable named "html"  
	        //console.(data.toString());
	        //html += data;  
	        //console.log(data.toString());
	        //console.log("over2");
	        //console.log("jj({aa:"+html+"})");
	    }).on('end', function() {  
	        // the whole of webpage data has been collected. parsing time!  
/*	        var title = $(html).find('div h3 span').each(function($this){  
	            var a = $(this).children('a').attr('href');  
	            var b = $(this).children('a').text();  
	            console.log(b + ":" + options.host + a);  
	        });*/  
	        console.log("jj({aa:111})");
			//response.send(html);
	         
	     });  //return "jj({aa:111})";
	});


}   
  
exports.start=start;   
exports.upload=upload;
exports.getHtml=getHtml; 