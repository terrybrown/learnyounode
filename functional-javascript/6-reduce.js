(function () {
    'use strict';

    function countWords(inputWords) {
        return inputWords.reduce(function(previous, current, index, array) {
            var count = previous[current] || 0;
            previous[current] = ++count;

            return previous;
        }, {});

    };

    module.exports = countWords;

})();
