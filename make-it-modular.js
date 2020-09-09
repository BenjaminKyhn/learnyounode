const mymodule = require('./mymodule.js')

let dir = process.argv[2];
let ext = process.argv[3];

mymodule(dir, ext, function(err, list){
    if (err) 
        return console.error(err);
        for (let index = 0; index < list.length; index++) {
            console.log(list[index]);
        }
});