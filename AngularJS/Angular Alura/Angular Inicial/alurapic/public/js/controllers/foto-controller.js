angular.module('alurapic').controller('FotoController', function($scope, $http) {
    
    $scope.foto = {};
    
    $scope.mensagem = '';
    
    $scope.subimeter = function () {
        
        if ($scope.formulario.$valid) {
            
            $http.post('v1/fotos', $scope.foto).success(function() {
                
                $scope.foto = {};
                $scope.mensagem = 'Imagem Cadastrada com Sucesso!';
                
            }).error(function() {
                $scope.mensagem = 'Imagem não cadastrada, por favor tente mais tarde!';
            });
            
        }
    };    
});