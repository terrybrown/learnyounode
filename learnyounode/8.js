(function () {
    'use strict';

    var http = require('http');

    // mine

    //http.get(process.argv[2], function (response) {
    //    response.setEncoding('utf8');
    //    var contents = "";
    //
    //    response.on('data', function (data) {
    //        contents += data;
    //    });
    //    response.on('error', console.error);
    //
    //    response.on('end', function () {
    //        var contentsString = contents.toString();
    //        console.log(contentsString.length);
    //        console.log(contentsString);
    //    });
    //});


    var bl = require('bl'); // buffered lists

    http.get(process.argv[2], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err);

            data = data.toString();
            console.log(data.length);
            console.log(data);

        }));
    });
})();
