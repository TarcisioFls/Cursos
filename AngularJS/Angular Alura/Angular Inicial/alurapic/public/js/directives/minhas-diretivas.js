angular.module('minhasDiretivas', []).directive('meuPainel', function () {

    var ddo = {};

    ddo.restric = 'AE';

    ddo.scope = {
      titulo : '@'
    };

    ddo.transclude = true;

    ddo.templateUrl = 'js/directives/meu-painel.html';

    return ddo;

  }).directive('minhaFoto', function() {
    var ddo = {};
    ddo.restric = 'AE';

    ddo.scope = {
      titulo : '@',
      url : '@'
    };

    ddo.template = '<img class="img-responsive center-block" ng-src="{{url}}" alt="{{titulo}}">';

    return ddo;

  }).directive('meuBotaoPerigo', function() {
   
    var ddo = {};
    ddo.restric = 'E';
    
    ddo.scope = {
        nome : '@',
        acao : '&'
    };
    
    ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';
    return ddo;
});
