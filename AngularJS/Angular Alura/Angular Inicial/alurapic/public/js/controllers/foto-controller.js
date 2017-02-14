angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {
    
    $scope.foto = {};
    
    $scope.mensagem = '';
    
    if ($routeParams.fotoId) {
        $http.get('v1/fotos/' + $routeParams.fotoId).success(function(foto) {
            $scope.foto = foto;
        }).error(function(erro) {
            console.log(erro);
        });
    }
    
    $scope.subimeter = function () {
        
        if ($scope.formulario.$valid) {
            if ($routeParams.fotoId) {
                $http.put('v1/fotos/' + $routeParams.fotoId, $scope.foto).success(function() {
                    $scope.mensagem = 'Imagem alterada com sucesso!';
                }).error(function(erro) {
                    console.log(erro);
                    $scope.mensagem = 'Imagem não alerada, por favor tente mais tarde!';
                });
                
            } else {
                
                $http.post('v1/fotos', $scope.foto).success(function() {

                    $scope.foto = {};
                    $scope.mensagem = 'Imagem Cadastrada com Sucesso!';
                    $scope.formulario.$submitted = false;
                }).error(function() {
                    $scope.mensagem = 'Imagem não cadastrada, por favor tente mais tarde!';
                });
                
            }
        }
    };    
});