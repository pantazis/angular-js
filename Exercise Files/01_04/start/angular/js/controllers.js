var myNameSpace = angular.module("myApp",[]);

myNameSpace.controller("MyController",function MyController($scope) {
  $scope.author = {
    'name' : 'Ray Villalobos',
    'title' : 'Staff Author',
    'company' : 'Lynda.com'
  }
});

