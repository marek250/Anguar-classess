angular.module('Workshop')
    .directive('loginForm', function (){
        return {
            restrict: 'E',
            templateUrl: 'directives/login-form.html',
            transclude: true,
            scope: {},
            controller: function ($scope, $http) {
                //    variables

                $scope.user = {};
                var backendUrl = 'http://188.226.184.180:3000/api/';

                $scope.loginMessage = '';


                $scope.login = function (user) {
                    $http.post(backendUrl + 'users', {'username': user.login, 'password': user.password})
                        .then(function (response) {
                            console.log(response);
                            $scope.loginMessage = response.data.message;
                        }, function errorCallback(error) {
                            console.log('błąd: ', error);
                            $scope.loginMessage = error.data.message;
                        })
                }
            }
        }
    });