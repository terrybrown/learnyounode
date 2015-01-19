(function () {
    'use strict';

    module.exports = function arrayMap(arr, fn) {
        return arr.reduce(function(previous, current, index, array) {
            previous.push(fn(current, index, array));

            return previous;
        }, []);
    };

})();
