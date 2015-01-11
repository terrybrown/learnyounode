(function () {
    'use strict';

    var trumpet = require('trumpet');
    var through = require('through');

    var toUpper = through(function(buffer) {
        this.queue(buffer.toString().toUpperCase());
    });

    var tr = trumpet();
    var loudStuff = tr.createStream('.loud');
    loudStuff.pipe(toUpper).pipe(loudStuff);

    process.stdin.pipe(tr).pipe(process.stdout);

})();
