(function () {
    'use strict';

    var fs = require('fs');
    var path = require('path');

    function processDir(directory, extension, callback) {
        fs.readdir(directory, function(err, list) {
            if (err) {
                callback(err, null);
            } else {
                var files = [];
                var fullExtension = "."+extension;

                list.forEach(function(file) {
                   if (path.extname(file) === fullExtension) {
                       files.push(file);
                   }
                });

                callback(null, files);
            }
        })
    }

    module.exports = processDir;
})();
