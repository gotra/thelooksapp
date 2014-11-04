'use strict';

angular.module('thelooksappApp')
  .factory('ProUser', function ($resource) {
    // Service logic
   

    // Public API here
    return $resource('/api/prousers/:id', {
      id: '@_id'
    });
    
  });
