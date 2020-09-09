const { fstat } = require("fs");

const fs = require('fs')

let buf = fs.readFile(process.argv[2], function callback(err, data){
    const str = data.toString();
    let arr = str.split("\n");
    console.log(arr.length-1);
});