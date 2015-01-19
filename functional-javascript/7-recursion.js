(function () {
    'use strict';

    function reduce(arr, fn, initial) {
        var wordList = initial,
            current = arr[0];

        if (arr.length === 0) {
            return initial;
        } else {
            initial = fn(wordList, current);
            return reduce(arr.slice(1), fn, initial);
        }
    };

    module.exports = reduce;
})();
