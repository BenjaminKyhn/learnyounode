const http = require('http')

var urlList = process.argv.slice(2);

parseUrl(urlList[0], function(){
    parseUrl(urlList[1], function(){
        parseUrl(urlList[2], function(){
            // end
        })
    })
})

function parseUrl(url, callback){
    var dataString = "";

    http.get(url, function (res){
        res.setEncoding("utf-8");
    
        res.on('error', function(err){
            console.error(err);
        })
    
        res.on('data', function (data){
            dataString += data;
        })
    
        res.on('end', function (){
            console.log(dataString);
            callback();
        })
    })
}
