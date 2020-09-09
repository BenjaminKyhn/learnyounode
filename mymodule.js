const fs = require('fs')
var path = require('path')

module.exports = function(dir, fileFilter, callback){
    fs.readdir(dir, function(err, list){
        if (err) 
            return callback(err);
        let filteredList = [];
        let ext = '.' + fileFilter;
        
        list.forEach(function (file) {
            if (path.extname(file) === ext) {
                filteredList.push(file);
            }
        });
        return callback(null, filteredList);
    });
};