var $ = require('jquery');  
var http = require('http');  
  
var options = {  
    host: 'blog.csdn.net',  
    port: 80,  
    path: '/lqg1122'  
};  
  
var html = '';  
http.get(options, function(res) {  
    res.on('data', function(data) {  
        // collect the data chunks to the variable named "html"  
        html += data;  
    }).on('end', function() {  
        // the whole of webpage data has been collected. parsing time!  
        var title = $(html).find('div h3 span').each(function($this){  
            var a = $(this).children('a').attr('href');  
            var b = $(this).children('a').text();  
            console.log(b + ":" + options.host + a);  
        });  
        console.log("over");  
     });  
});  