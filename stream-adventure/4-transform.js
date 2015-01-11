(function () {
    'use strict';

    var through = require('through');
    var toUpper = through(function(buffer) {
        this.queue(buffer.toString().toUpperCase());
    });


    process.stdin.pipe(toUpper).pipe(process.stdout);
})();
