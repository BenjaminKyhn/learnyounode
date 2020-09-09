var fs = require('fs')
var path = require('path')

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function(err, list){
        var filteredList = [];
        var ext = "." + ext;
        for (let index = 0; index < list.length; index++) {
            if (path.extname(list[index]) === ext){
                filteredList.push(list[index]);
            };  
        }
        return callback(null, filteredList);
    });
};