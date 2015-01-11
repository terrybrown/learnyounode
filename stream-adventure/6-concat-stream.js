(function () {
    'use strict';

    var concat = require('concat-stream');

    process.stdin.pipe(concat(function(contents) {
        console.log(contents.toString().split("").reverse().join(""));
    }));
})();
