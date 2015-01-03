(function () {
    'use strict';

    var http = require('http');
    var map = require("through2-map");

    var uc = map(function(chunk) {
        return chunk.toString().toUpperCase();
    });

    var server = http.createServer(function(request, response) {
        if (request.method !== "POST") {
            return res.end("send a post");
        }

        request.pipe(uc).pipe(response);

    });

    server.listen(process.argv[2]);
})();
