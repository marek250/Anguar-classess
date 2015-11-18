(function(){
    var app = angular.module('Workshop', []);

    app.controller('ShoppingList', function ($scope) {
        $scope.shoppingList = [
            { name: 'Chleb', price: 2.30, isBought: false },
            { name: 'Masło', price: 4.50, isBought: false },
            { name: 'Mleko', price: 3.20, isBought: false },
            { name: 'Bułki 5 szt.', price: 1.25, isBought: false },
            { name: 'Jogurt', price: 2.20, isBought: false },
            { name: 'Płatki owsiane', price: 3.40, isBought: false },
            { name: 'Płatki kukurydziane', price: 5.60, isBought: false }
        ];

        $scope.sortingField = '';
        $scope.desc = true;
        $scope.reorder = function (field) {
            $scope.desc = $scope.sortingField === field ? !$scope.desc : false;
            $scope.sortingField = field;
        };

        $scope.newItem = { name: '', price: 0, isBought: false };
        $scope.addItem = function (item) {
            if(item.name && (item.price || item.price === 0)) {
                var newItem = angular.copy(item);
                $scope.shoppingList.push(newItem);
            }
        };
        $scope.removeItem = function (item) {
            var idx = $scope.shoppingList.indexOf(item);
            $scope.shoppingList.splice(idx, 1);
        };
    });

    app.controller('PeopleController', function ($scope, $http) {
        $scope.people = [];

        $http.get('http://www.w3schools.com/angular/customers.php').then(function (response) {
            $scope.people = response.data.records;
                console.log(response);
            });
        $scope.sortingField = '';
        $scope.desc = true;
        $scope.reorder = function (field) {
            $scope.desc = $scope.sortingField === field ? !$scope.desc : false;
            $scope.sortingField = field;
        };

        $scope.filterValue = '';
        $scope.filter = function (filter) {

        };

        $scope.newPerson = { Name: '', City: '', Country: '' };
        $scope.addPerson = function (item) {
                var newPerson = angular.copy(item);
                $scope.people.push(newPerson);
        };
        $scope.removeItem = function (item) {
            var idx = $scope.people.indexOf(item);
            $scope.people.splice(idx, 1);
        };
    });

    app.controller('PlacesController', function ($scope, $http) {


        //getPlaces();


    });
})();