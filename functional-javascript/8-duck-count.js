(function () {
    'use strict';

    function duckCount() {
        var array = Array.prototype.slice.call(arguments);

        var ducks = array.filter(function(element) {
            return Object.prototype.hasOwnProperty.call(element, "quack");
        });

        return ducks.length;
    };

    module.exports = duckCount;
})();
