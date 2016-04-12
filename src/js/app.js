var PokeMath = angular.module('PokeMath', ['ngMaterial'])

PokeMath.controller('mainController', ['$scope', '$log', '$mdSidenav',($scope, $log, $mdSidenav) => {
  $scope.toggleSidebar = () => {$mdSidenav('sidebar').open()}
}])
