
(function(){ 
  var app = angular.module('starter', ['ionic'])

  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('list', {
      url: '/list',
      templateUrl: 'templates/list.html'
    });
    $stateProvider.state('edit', {
      url: '/edit',
      templateUrl: 'templates/edit.html'
    });    
    $urlRouterProvider.otherwise('/list');
  });

  app.controller('ListCtrl', function($scope){
        $scope.notas = [
          {titulo: 'Titulo 1', descripcion:'Descripcion 1'},
          {titulo: 'Titulo 2', descripcion:'Descripcion 2'},
          {titulo: 'Titulo 3', descripcion:'Descripcion 3'},
          {titulo: 'Titulo 4', descripcion:'Descripcion 4'},
        ];
  });

  app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
}());