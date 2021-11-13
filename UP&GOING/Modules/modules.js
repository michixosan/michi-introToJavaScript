
// Modules let you define private implementation details (variables, function) that are hidden from outside world
// as well as public API that is accessible from the outside.

// Consider

    function User() {
        var username, password;

        function doLogin(user, pw) {
            username = user;
            password = pw;

            // do the rest of the login form

            var publicAPI = {
                login: doLogin
            };
        }
        return publicAPI;
    }

    // create a "User" module instance
    var fred = User();

    fred.login("fred", "12Battery34!")