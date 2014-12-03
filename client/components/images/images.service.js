'use strict';

angular.module('thelooksappApp')
  .factory('Images', function ($resource) {
    
    // Public API here
    return $resource('/api/images/:id',
      {id: '@_id'},
      {'update': { method : 'PUT'},
      'filter': {method:'GET',isArray:true},
  		'bulkupload':{ method: 'POST', url: '/api/images/bulk'}}
    );

  });
