(function () {
    'use strict';

    // another example where it wasn't entirely clear what was being asked for - arrived at this after much play and reading aroun dothers work
    function Spy(target, method) {
        var spy = {
            count: 0
        },
            oldMethod = target[method];

        target[method] = function() {
            spy.count++;
            return oldMethod.apply(target, arguments);
        };

        return spy;
    };

    module.exports = Spy;
})();
