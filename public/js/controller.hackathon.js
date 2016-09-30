angular.module('Hackathon', [])
    .controller('homeCtrl', hControl)
    .controller('authCtrl', aControl);
    
hControl.$inject = ['hackFact'];
aControl.$inject = ['$http']

function hControl(hackFact) {
    var hCtrl = this;
    hCtrl.greeting = "GET YOUR HACK ON!"
    
}

function aControl ($http) { // window.Auth
    console.info('Auth controller loaded!');

    var auth = this,
        alertError = ['alert','alert-danger'];

    auth.payload = { // used both for registering and loggin in
            // ng-models are point to properties on this object
            // email (ng-model)
            // password (ng-model)
        };

    auth.login = {
            // happens when the user clicks submit on the login form
        submit: function($event) { // click-event
            console.info('auth.login.submit', $event);

            $http.post('/auth', auth.payload)
                .then(auth.login.success, auth.login.error);
            },
        success: function(res) { // server response callback
            location.href = '/dashboard';
            },
        error: function(err) {
            console.error('Login.error', err);

                // user feedback stuffs, sets up the alert box on error
            auth.login.alert = alertError;
            auth.login.message = ( err.data && err.data.message ) || 'Login failed, contact us!';
            }
        };

    auth.register = {
        submit: function () {
                // happens when the user clicks submit on the register form
            $http.post('/register', auth.payload)
                .then(auth.register.success, auth.register.error);
            },
        success: function() {
                // when register is successful, just redirect them into the dashboard (already logged in)
            location.href = "/dashboard";
            },
        error: function(err) {
            console.error('auth.register.error', err);

                // user feedback stuffs, sets up the alert box on error
                auth.register.alert = alertError;
                auth.register.message = ( err.data && err.data.message ) || 'Register failed, contact us!'
            }
        };
    };
