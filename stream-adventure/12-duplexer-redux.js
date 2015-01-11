(function () {
    'use strict';

    var duplex = require('duplexer');
    var through = require('through');

    module.exports = function (counter) {
        var counts = {};

        var updateCount = function(incoming) {
            var count = counts[incoming.country] || 0;
            counts[incoming.country] = count + 1;
        };

        var outputCount = function() {
            counter.setCounts(counts);
            counts = {};
        };

        return duplex(through(updateCount, outputCount), counter);
    }
})();
