const http = require('http')
const url = require('url')

let port = process.argv[2];

http.createServer(function (request, response){
let data = url.parse(request.url, true), json;

console.log(data);

if (data.pathname === "/api/parsetime"){
    let date = new Date(data.query.iso);

    json = {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    };
}
else if (data.pathname === "/api/unixtime"){
    json = {
        unixtime: (new Date(data.query.iso)).getTime(),
    };
}

if (json){
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(json));
}
else {
    response.writeHead(404)
    response.end()
}

}).listen(port)