var PokeMath = angular.module('PokeMath', ['ngMaterial','ngDraggable'])

PokeMath.controller('mainCtrl', ['$scope', '$log', ($scope, $log) => {
  // code here

}])

PokeMath.controller('sidenavCtrl', ['$scope', '$log', '$mdSidenav',($scope, $log, $mdSidenav) => {
  $scope.toggleSidebar = () => {$mdSidenav('sidebar').open()}
}])

PokeMath.controller('gameCtrl', ['$scope', '$log', ($scope, $log) => {
  $scope.progress = 45
  $scope.variant = 'v1'
  $scope.label = formulas.formula.label
  $scope.formula = formulas.formula.variante[$scope.variant].ab
  $scope.correctAnswers = formulas.formula.variante[$scope.variant].raspunsuriCorecte
  $scope.answers = formulas.formula.variante[$scope.variant].raspunsuri
}])
