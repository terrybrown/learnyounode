(function () {
    'use strict';

    var net = require('net');
    var strftime = require('strftime');

    var server = net.createServer(function(socket) {
        // YYYY-MM-DD hh:hh\n
        var date = strftime("%Y-%m-%d %R\n")
        socket.end(date);
    });
    server.listen(process.argv[2]);

})();
