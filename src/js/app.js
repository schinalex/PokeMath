var PokeMath = angular.module('PokeMath', ['ngMaterial', 'ngRoute', 'ngDraggable'])

PokeMath.config(($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: '../pages/home.html'
  })
  .when('/home', {
    templateUrl: '../pages/home.html'
  })
  .when('/game', {
    templateUrl: '../pages/game.html',
    controller: 'gameCtrl'
  })
  .when('/about', {
    templateUrl: '../pages/about.html'
  })
  .when('/contact', {
    templateUrl: '../pages/contact.html'
  })
})

PokeMath.controller('mainCtrl', ['$scope', '$log', '$mdSidenav', '$location', ($scope, $log, $mdSidenav, $location) => {
  $scope.toggleSidebar = () => {$mdSidenav('sidebar').open()}
  $scope.go = (path) => {
    $location.path(path)
  }
}])

PokeMath.controller('gameCtrl', ['$scope', '$log', ($scope, $log) => {
  $scope.labels = ['`(a+b)^2`', '`(a-b)^2`', '`a^2-b^2`', '`(a+b)^3`', '`(a-b)^3`', '`a^3+b^3`', '`a^3-b^3`']
  $scope.progress = 45
  $scope.variant = 'v1'
  // $scope.label = formulas.formula.label
  $scope.formula = formulas.formula.variante[$scope.variant].ab
  $scope.correctAnswers = formulas.formula.variante[$scope.variant].raspunsuriCorecte
  $scope.answers = formulas.formula.variante[$scope.variant].raspunsuri


  $scope.onDragComplete = (data,evt) => {
    console.log("drag success, data:", data)
  }
  $scope.onDropComplete = (data,evt) => {
    console.log("drop success, data:", data)
  }
}])
