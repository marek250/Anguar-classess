angular.module('Workshop')
.directive('placeForm', function(){
        return {
            restrict: 'E',
            templateUrl: 'directives/place-form.html',
            transclude: true,
            scope: {},
            controller: function ($scope, $rootScope, $http) {
                //    variables
                $scope.placeToUpdate = {};
                $scope.updateModeFlag = false;

                $scope.updatePlace = function (place) {
                    $http.put('http://188.226.184.180:3000/api/place/' + place._id, place)
                        .then (function (response) {
                        //getPlaces();
                        $scope.updateModeFlag = false;
                    });
                };

                $scope.updateMode = function (place) {
                    $scope.placeToUpdate = place;
                    $scope.updateModeFlag = true;
                };

                $rootScope.$on('updateMode', function (env, place) {
                    $scope.placeToUpdate = place;
                    $scope.updateModeFlag = true;
                });

                $scope.newPlace = { name: '', city: '', phone: '', street: '', buildingNumber: '' };
                $scope.addPlace = function (item) {
                    var place = angular.copy(item);
                    $http.post('http://188.226.184.180:3000/api/places', place)
                        .then(function (response) {
                            console.log(response);
                            //getPlaces();
                        });
                };


                //getPlaces();

                //    methods
            }
        }
    });