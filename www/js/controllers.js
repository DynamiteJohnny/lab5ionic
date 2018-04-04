angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', '$http',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {
 
    $scope.mdl = {};



}])
   
.controller('page2Ctrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $http) {

    appid = '';
    lat = $stateParams.lat;
    lon = $stateParams.lon;
    url = "http://api.openweathermap.org/data/2.5/uvi?appid=8262c538bee377af9da6ca36b4aacdee&lat=20.615383&lon=-100.398251";


    $http.get(url).then(function(response){
            $scope.value = response.data.value;

            


        }, function(error){
            //There was an error fetching from the server
            alert("Unable to retrieve UV info");
        });

}])
 
