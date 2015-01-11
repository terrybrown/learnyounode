(function () {
    'use strict';

    var webSocket = require('websocket-stream');
    var through = require('through');

    var stream = webSocket('ws://localhost:8000');

    stream.end('hello\n');

})();
