
(function(){ 
  var app = angular.module('starter', ['ionic']);
  var notas = [
          {id: "1", titulo: 'Titulo 1', descripcion:'Descripcion 1'},
          {id: "2",titulo: 'Titulo 2', descripcion:'Descripcion 2'},
          {id: "3",titulo: 'Titulo 3', descripcion:'Descripcion 3'},
          {id: "4",titulo: 'Titulo 4', descripcion:'Descripcion 4'},
        ];

  function getNota(id){
      return notas.filter(function(nota){
        return nota.id === id;
      })[0];
  }

  function updateNota(nota){
    for(var i=0; i< notas.length; i++){
      if(notas[i].id === nota.id){
          notas[i] = nota;
          return;
      }
    }
  }

  app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider.state('list', {
      url: '/list',
      templateUrl: 'templates/list.html'
    });
    $stateProvider.state('edit', {
      url: '/edit/:id',
      templateUrl: 'templates/edit.html'
    });    
    $urlRouterProvider.otherwise('/list');
  });

  app.controller('ListCtrl', function($scope){
        $scope.notas = notas; 
  });

  app.controller('EditCtrl', function($scope, $state){
        $scope.id = $state.params.id;
        $scope.nota = angular.copy(getNota($scope.id));
        $scope.saveNota = function(){
          updateNota($scope.nota);
          $state.go("list");
        }
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