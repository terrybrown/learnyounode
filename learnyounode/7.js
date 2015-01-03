(function () {
    'use strict';

    var http = require('http');

    http.get(process.argv[2], function(response) {
        response.setEncoding('utf8');
        response.on('data', console.log);
        response.on('error', console.error);

        //response.on('data', function(data) {
        //    console.log(data.toString());
        //});
        //
        //response.on('error', function(err) {
        //   console.log("ERROR:::::" + err);
        //});
        //
        //response.on('end', function() {
        //    // do nothing
        //})
    });
})();
