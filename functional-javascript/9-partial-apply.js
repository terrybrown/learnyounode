(function () {
    'use strict';

    // painfully bad explanation of the problem - understand slice, partial application
    var slice = Array.prototype.slice;

    function logger(namespace) {
        return function logWithNamespace() {
            var message = slice.call(arguments).join(' ');

            console.log(namespace + " " + message);
        };
    };

    // would have likely not arrived at this one
    function loggerAsSolution(namespace) {
        return function() {
            console.log.apply(console, [namespace].concat(slice.call(arguments)));
        };
    }

    module.exports = logger;
})();
