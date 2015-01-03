(function () {
    'use strict';

    var http = require('http');
    var fs = require('fs');

    var server = http.createServer(function (request, response) {
        response.writeHead(200, { 'Content-Type': "text/plain" });

        //fs.readFile(process.argv[3], function (err, data) {
        //    if (err) {
        //        response.status = 500;
        //        response.content = "Error: " + err;
        //    }
        //
        //    response.write(data);
        //    response.end();
        //});

        // OR
        fs.createReadStream(process.argv[3]).pipe(response);

    });

    server.listen(process.argv[2]);

})();
