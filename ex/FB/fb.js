/**
 * Created by SSOL.MI on 2016-11-05.
 */
angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'ngAnimate'])

    .run(['$window',
        function($window){
            $window.fbAsyncInit = function() {
                FB.init({
                    appId: '{your-app-id}',
                    status: true,
                    cookie: true,
                    xfbml: true,
                    version: 'v2.4'
                });
            };
        }])


    .controller('UserController', ['$scope', '$window', '$injector', '$route', '$routeParams', '$location',
        function($scope, $window, $injector, $route, $routeParams, $location, $http) {

            $window.fbAsyncInit();

            var facebookService = $injector.get('facebookService');

            $scope.fbLogin = function(){
                facebookService.login();
            };
        }])
    .controller('UserController', ['$scope', '$window', '$injector', '$route', '$routeParams', '$location',
        function($scope, $window, $injector, $route, $routeParams, $location, $http) {

            $window.fbAsyncInit();

            var facebookService = $injector.get('facebookService');

            $scope.fbLogin = function(){
                facebookService.login();
            };
        }])
    .factory('facebookService', function($q) {
        return {
            login : function(){
                FB.login(function(response) {
                    if (response.authResponse) {
                        // accepted
                        FB.api('/me', function(response) {
                            console.log('Good to see you, ' + response.name + '.');
                        });
                    } else {

                        // denied
                        console.log('User cancelled login or did not fully authorize.');
                    }
                });
            },

            getMyLastName: function() {
                var deferred = $q.defer();

                FB.api('/me', {
                    fields: 'last_name'
                }, function(response) {
                    if (!response || response.error) {
                        deferred.reject('Error occured');
                    } else {
                        deferred.resolve(response);
                    }
                });
                return deferred.promise;
            }
        }
    });