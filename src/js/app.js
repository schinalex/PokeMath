console.log('app.js is connected!');
angular.module('PokeMath', ['ngMaterial'])
  .run(() => console.log('My app is ready!'))
