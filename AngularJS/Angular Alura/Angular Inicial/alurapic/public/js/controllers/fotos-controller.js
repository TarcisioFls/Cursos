angular.module('alurapic').controller('FotosController', function($scope, $http) {

    $scope.fotos = [];
    $scope.filtro = '';
    
    $scope.mensagem = '';

    $http.get('v1/fotos').success(function(fotos) {
      $scope.fotos = fotos;
    }).error(function(error) {
      console.log(error);
    });
    
    $scope.remover = function (foto) {
        $http.delete('v1/fotos/' + foto._id).success(function() {
            var indexFoto = $scope.fotos.indexOf(foto);
            $scope.fotos.splice(indexFoto, 1);
            $scope.mensagem = 'Imagem ' + foto.titulo + " foi deletada com sucesso!";
            console.log($scope.mensagem);
        }).error(function(erro) {
            console.log(erro);
            $scope.mensagem = 'Não foi possível deletar a imagem ' + foto.titulo + '!';
        })
    }

});
