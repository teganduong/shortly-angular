angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  $scope.link = {};

  $scope.signout = function() {
    Auth.signout();
  };

  
  $scope.addLink = function() {
    Links.addOne($scope.link)
    .then(function() {
      console.log('successfully added link!');
      $scope.link = {};
    })
    .catch(function() {
      console.log('error in adding link');
    });
  };
});

