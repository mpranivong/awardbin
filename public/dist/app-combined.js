//================ public/src/js/app.js

angular.module('myApp', [
  'ngRoute', 'appRoutesModule',
  'MainControllerModule',
  'HotelControllerModule', 'HotelService'
  ]);

//================ public/src/js/appRoutes.js

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

//================ public/src/js/controllers/HotelCtrl.js

angular.module('HotelControllerModule', []).controller('HotelController', function($scope) {
  $scope.tagline = 'This is the hotel controller';
});

//================ public/src/js/controllers/MainCtrl.js

angular.module('MainControllerModule', []).controller('MainController', function($scope) {
  $scope.tagline = "From the main controller";
});

//================ public/src/js/services/HotelService.js

angular.module('HotelService',[]).factory('HotelFactory',['$http', function($http){

  return {
    // get all hotels
    get : function() {
      return $http.get('/api/hotels');
    },

    // add new hotel
    add : function( hotelData ) {
      return $http.post('/api/hotels/add', hotelData);
    },

    // delete a hotel
    delete : function( id ) {
      return $http.delete('/api/hotels/'+ id);
    }
  };

}]);
