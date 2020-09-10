const http = require('http')

http.get(process.argv[2], function callback (res){
    let dataString = "";

    res.setEncoding("utf-8");

    res.on('error', function(err){
        console.error(err);
    })

    res.on('data', function (data){
        dataString += data;
    })

    res.on('end', function (){
        console.log(dataString.length);
        console.log(dataString);
    })
})