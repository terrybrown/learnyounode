(function () {
    'use strict';

    var fs = require('fs');

    fs.readFile(process.argv[2], function(err, data) {
       if (err) {
            console.log('error');
       } else {
           var count = data.toString().split('\n');

           console.log(count.length-1);
       }
    });
})();
