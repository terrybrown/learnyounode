(function () {
    'use strict';

    var fs = require('fs');

    var contentsBuffer = fs.readFileSync(process.argv[2]);

    var contentsArray = contentsBuffer.toString().split('\n');

    console.log(contentsArray.length-1);
})();
