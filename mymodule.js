const fs = require('fs')
const path = require('path')

const dir = process.argv[2];
const ext = "." + process.argv[3];

const listFiles = fs.readdir(dir, ext, function callback(err, list){
    for (let index = 0; index < list.length; index++) {
        if (path.extname(list[index]) === ext)
        console.log(list[index].toString());
    }
})

module.exports = listFiles;