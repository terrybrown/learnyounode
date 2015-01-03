(function () {
    'use strict';

    var http = require('http');
    var bl = require('bl');

    var contents = [];
    var count = 0;

    function printResults() {
        contents.forEach(function(file) {
            console.log(file);
        });
    }

    function httpGet(url, index) {
        http.get(url, function(response) {
            var me = index;
            //console.log("Processing: " + me + " :: " + index);
            response.pipe(bl(function(err, data) {
                if (err)
                    return console.err(err);

                data = data.toString();

                //console.log('GOT: i:' + index + " :: me: " + me);
                contents[index] = data;

                if (++count === 3) {
                    printResults();
                }
            }));
        });
    }

    for (var i = 2; i < process.argv.length; i++) {
        httpGet(process.argv[i], i);
    }
})();
