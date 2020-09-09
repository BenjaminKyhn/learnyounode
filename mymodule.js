const fs = require('fs')
const path = require('path')

module.exports = function(dir, ext, callback){
    fs.readdir(dir, function(err, list){
        if (err) 
            return callback(err);
        let filteredList = [];
        let fileFilter = '.' + ext;
        
        list.forEach(function (file) {
            if (path.extname(file) === fileFilter) {
                filteredList.push(file);
            }
        });
        return callback(null, filteredList);
    });
};