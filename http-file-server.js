const http = require('http')
const fs = require('fs');

let port = process.argv[2];
let file = process.argv[3];

http.createServer(function callback(request, response){

response.writeHead(200, { 'content-type': 'text/plain' })

let src = fs.createReadStream(file);
src.pipe(response)

}).listen(port)