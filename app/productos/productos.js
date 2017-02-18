(function () {
  'use strict';
  var scripts = document.getElementsByTagName("script");
  var currentScriptPath = scripts[scripts.length - 1].src;

  angular.module('myApp.productos', ['ngRoute'])
      .controller('ProductosCtrl', ProductosCtrl);


  ProductosCtrl.$inject = ['$scope', 'mvProductoInsiteService'];
  function ProductosCtrl($scope, mvProductoInsiteService) {

    var vm = this;
    mvProductoInsiteService.listen(function(data){
        console.log(mvProductoInsiteService.producto);
    });
  }

})();