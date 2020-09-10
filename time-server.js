const net = require('net')

let port = process.argv[2];

const server = net.createServer(function (socket){
    socket.write(getDate() + '\n');
    socket.end();
}).listen(port)

function getDate() {
    let date = new Date(),
        year = date.getFullYear(),
        month = date.getMonth() + 1,
        day = date.getDate(),
        hours = date.getHours(),
        minutes = date.getMinutes();

    return year + '-' + padNumber(month) + '-' + padNumber(day) + ' ' + padNumber(hours) + ':' + padNumber(minutes);
}

function padNumber(number){
    if (number < 10)
        return '0' + number;
    else
        return number;
}