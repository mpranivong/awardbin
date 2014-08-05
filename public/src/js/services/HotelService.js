
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
