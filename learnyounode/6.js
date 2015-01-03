(function () {
    'use strict';

    var mod = require('./6.module.js');

    mod(process.argv[2], process.argv[3], function(err, data) {
        if (err) {
            console.log('error');
        } else {
            data.forEach(function(file) {
               console.log(file);
            });
        }
    })
})();
