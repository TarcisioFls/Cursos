angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, cadastroDeFotos, $routeParams) {
    
    $scope.foto = {};
    
    $scope.mensagem = '';
    
    if ($routeParams.fotoId) {
        recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto) {
           $scope.foto = foto; 
        }, function(erro) {
            console.log(erro);
        });
        
//        $http.get('v1/fotos/' + $routeParams.fotoId).success(function(foto) {
//            $scope.foto = foto;
//        }).error(function(erro) {
//            console.log(erro);
//        });
    }
    
    $scope.subimeter = function () {
        
        if ($scope.formulario.$valid) {
            cadastroDeFotos.cadastrar($scope.foto).then(function(dados){
                $scope.mensagem = dados.mensagem;
                if (dados.inclusao) {
                    $scope.foto = {};
                }
            }).catch(function(erro) {
                $scope.mensagem = erro.mensagem;
            });
//            if ($routeParams.fotoId) {
//                recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function() {
//                   $scope.mensagem = 'Imagem alterada com sucesso!';
//                }, function(erro) {
//                    console.log(erro);
//                    $scope.mensagem = 'Imagem não alerada, por favor tente mais tarde!';
//                });
//                
////                $http.put('v1/fotos/' + $routeParams.fotoId, $scope.foto).success(function() {
////                    $scope.mensagem = 'Imagem alterada com sucesso!';
////                }).error(function(erro) {
////                    console.log(erro);
////                    $scope.mensagem = 'Imagem não alerada, por favor tente mais tarde!';
////                });
//                
//            } else {
//                
//                recursoFoto.save($scope.foto, function(){
//                    $scope.foto = {};
//                    $scope.mensagem = 'Imagem Cadastrada com Sucesso!';
//                }, function(erro) {
//                    $scope.mensagem = 'Imagem não cadastrada, por favor tente mais tarde!';
//                });
//                
////                $http.post('v1/fotos', $scope.foto).success(function() {
////
////                    $scope.foto = {};
////                    $scope.formulario.$setPristine();
////                    $scope.mensagem = 'Imagem Cadastrada com Sucesso!';
////                }).error(function() {
////                    $scope.mensagem = 'Imagem não cadastrada, por favor tente mais tarde!';
////                });
//                
//            }
        }
    };    
});