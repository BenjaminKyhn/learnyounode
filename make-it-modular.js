var mymodule = require('./mymodule.js')

var dir = process.argv[2];
var ext = process.argv[3];

mymodule(dir, ext, function(err, list){
    for (let index = 0; index < list.length; index++) {
        console.log(list[index].toString());        
    }
})