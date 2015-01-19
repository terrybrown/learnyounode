(function () {
    'use strict';

    function checkUsersValid(goodUsers) {
        //console.log('good users: ' + goodUsers.map(function(obj) { return obj.id; }).join(','));
        return function(submittedUsers) {
            //console.log('submitted users: ' + submittedUsers.map(function(obj) { return obj.id; }).join(','));
            return submittedUsers.every(function(submittedUser) {
                return goodUsers.some(function(goodUser) {
                    return goodUser.id === submittedUser.id;
                })
            })
        };
    };

    module.exports = checkUsersValid
})();
