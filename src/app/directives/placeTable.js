angular.module('Workshop')
.directive('placeTable', function (){
        return {
            restrict: 'E',
            templateUrl: 'directives/place-table.html',
            transclude: true,
            scope: {},
            controller: function ($scope, $rootScope, $http) {
            //    variables
                $scope.places = [];

                var getPlaces = function () {
                    $http.get('http://188.226.184.180:3000/api/places')
                        .then(function (response) {
                            $scope.places = response.data;
                        });
                };

                getPlaces();

                $scope.removeItem = function (item) {
                    $http.delete('http://188.226.184.180:3000/api/place/'+item._id);
                    var idx = $scope.places.indexOf(item);
                    $scope.places.splice(idx, 1);
                };

                $scope.updateMode = function (place) {
                    $rootScope.$broadcast('updateMode', place);
                };

            //    methods
            }
        }
    });