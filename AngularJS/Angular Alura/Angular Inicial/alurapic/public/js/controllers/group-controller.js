angular.module('alurapic').controller('GruposController', function($scope, recursoGroup) {
    
    $scope.grupos = [];
    
    recursoGroup.query(function(grupos) {
        $scope.grupos = grupos;    
    }, function (erro) {
        console.log(erro);
    });
    
//    $http.get('/v1/grupos').success(function(grupos) {
//        $scope.grupos = grupos;
//    }).error(function(erro) {
//        console.log(erro);
//    });
    
});