angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};

  $scope.addLink = function() {
    Links.addOne($scope.link)
    .then(function() {
      console.log('successfully added link!');
    })
    .catch(function() {
      console.log('error in adding link');
    });
  };
});

