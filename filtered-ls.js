const fs = require('fs')
const path = require('path')

const ext = "." + process.argv[3];

let test = fs.readdir(process.argv[2], function callback(err, list){
    for (let index = 0; index < list.length; index++) {
        if (path.extname(list[index]) === ext)
        console.log(list[index].toString());
    }
})