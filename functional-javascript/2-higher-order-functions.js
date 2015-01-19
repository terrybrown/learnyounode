(function () {
    'use strict';

    function repeat(operation, num) {
        for (var i = 0; i < num; i++) {
            //console.log("NUM: " + num + " :: " + operation);
            operation();
        }
    }

    // also achievable with (from the answer):
    //function repeat(operation, num) {
    //    if (num <= 0) return;
    //
    //    operation();
    //
    //    return repeat(operation, --num);
    //}

    module.exports = repeat;
})();
