'use strict';

angular.module('thelooksappApp')
  .controller('UploadCtrl', function ($scope) {

    $scope.dropzoneConfig = {
      'options': { // passed into the Dropzone constructor
        'url': 'https://api.cloudinary.com/v1_1/www-thelooks-net/image/upload'


      },
      'eventHandlers': {
        'sending': function (file, xhr, formData) {
          formData.append("upload_preset","wefi1sgv");
        },
        'success': function (file, response) {

          console.log("response recieved from the server");
          console.log(response);

        },
        'dragenter': function(event,e) {
          Document.getElementbyId
        },

        'drop' : function(event) {
          console.log("dragend event" +  event);
        },


        'dragleave' : function(event) {
          console.log("dragleave event" +  event);
        }



      }
    };

  });
