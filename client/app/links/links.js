angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  $scope.query = {};
  $scope.queryBy = '$';
  
  Links.getAll().then(function(links) {
    $scope.data.links = links;
  });

  $scope.signout = function() {
    Auth.signout();
  };
});
