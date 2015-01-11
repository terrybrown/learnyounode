(function () {
    'use strict';

    var http = require('http');
    var fs = require('fs');
    var through = require('through');

    var toUpper = through(function(buffer) {
        this.queue(buffer.toString().toUpperCase());
    });

    var server = http.createServer(function(request, response) {
        if (request.method === "POST") {
            request.pipe(toUpper).pipe(response);
        }

        response.end();
    });

    server.listen(process.argv[2]);

})();
