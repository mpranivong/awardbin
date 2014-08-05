
angular.module('appRoutesModule', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainController'
  })

  .when('/hotels', {
    templateUrl: 'views/hotel.html',
    controller: 'HotelController'
  });

  $locationProvider.html5Mode(true);

}]);
