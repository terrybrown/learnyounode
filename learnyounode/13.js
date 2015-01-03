(function () {
    'use strict';

    var http = require('http');
    var url = require('url');
    var querystring = require('querystring');

    var server = http.createServer(function(request, response) {
        if (request.method === "GET") {
            var parsedUrl = url.parse(request.url, true);

            var date = new Date(parsedUrl.query.iso);

            response.writeHead(200, {"Content-Type": "application/json"});

            if (request.url.indexOf("parsetime") > 0) {

                var value = JSON.stringify({
                    "hour": date.getHours(),
                    "minute": date.getMinutes(),
                    "second": date.getSeconds()
                });


                response.write(value);
            }

            if (request.url.indexOf("unixtime") > 0) {

                var value = JSON.stringify({ "unixtime": date.getTime() });
                response.write(value);
            }
            response.end();
        }
    });

    server.listen(process.argv[2]);
})();
