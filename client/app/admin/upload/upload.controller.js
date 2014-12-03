'use strict';

angular.module('thelooksappApp')
  .controller('UploadCtrl', function ($scope, Images) {

    $scope.tags={};

    $scope.uploadedfiles=[];

    $scope.isUploading = false;

    $scope.dropzoneConfig = {
      'options': { // passed into the Dropzone constructor
        'url': 'https://api.cloudinary.com/v1_1/www-thelooks-net/image/upload',
        'addRemoveLinks' : 'true'


      },
      'eventHandlers': {
        'sending': function (file, xhr, formData) {
          formData.append("upload_preset","wefi1sgv");
          if ($scope.isUploading == false){
            $scope.isUploading = true;
            $scope.$apply();
          }

        },
        'success': function (file, response) {

          console.log("response recieved from the server");
          console.log(response);

        },
        'queuecomplete' : function(e) {
          console.log('completed!');

          $scope.isUploading = false;
          $scope.$apply()
        }

      }
    };

    // end of dropzone config

    $scope.bulkUpload = function() {

        Images.bulkupload({tags: $scope.tags},function(){});

    };

});
