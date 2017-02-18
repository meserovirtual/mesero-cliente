(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.comandas', ['ngRoute'])
      .controller('ComandasCtrl', ComandasCtrl);


  ComandasCtrl.$inject = ['$scope', 'mvProductoInsiteService'];
  function ComandasCtrl($scope, mvProductoInsiteService) {

    var vm = this;
    mvProductoInsiteService.listen(function(data){
        console.log(mvProductoInsiteService.producto);
    });
  }

})();