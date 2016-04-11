var app = angular.module('teste', []);

app.controller('veiculosController', ['$scope', '$http', function ($scope, $http) {

    $scope.cores = [
      {nome: "Branco"},
      {nome: "Preto"},
      {nome: "Prata"}
    ];

    $scope.veiculos = [
      {carro: "Fox", dataCompra: "01/02/2008", cor: {nome: "Prata"}, marca: "Volwswagen"},
      {carro: "Vectra", dataCompra: "02/01/2003", cor: {nome: "Branco"}, marca: "Chevrolet"},
      {carro: "Cruze", dataCompra: "01/06/2013", cor: {nome: "Prata"}, marca: "Chevrolet"},
      {carro: "Gol", dataCompra: "21/02/2000", cor: {nome: "Branco"}, marca: "Volwswagen"},
      {carro: "Focus", dataCompra: "22/08/2015", cor: {nome: "Preto"}, marca: "Ford"},
      {carro: "Fusion", dataCompra: "14/09/2014", cor: {nome: "Preto"}, marca: "Ford"},
      {carro: "i30", dataCompra: "19/09/2014", cor: {nome: "Branco"}, marca: "Hyundai"},
      {carro: "March", dataCompra: "12/09/2012", cor: {nome: "Prata"}, marca: "Nissan"},
      {carro: "Fiesta", dataCompra: "25/02/2011", cor: {nome: "Prata"}, marca: "Ford"},
      {carro: "Uno", dataCompra: "08/12/2013", cor: {nome: "Preto"}, marca: "Fiat"},
      {carro: "Linea", dataCompra: "18/04/2010", cor: {nome: "Preto"}, marca: "Fiat"}
    ];

    $scope.habilitarCadastro = function() {
      $scope.mostrarCadastro = !$scope.mostrarCadastro;
    }

    $scope.ordenarConsulta = function (campo) {
      $scope.campoOrdenacaoConsulta   = campo;
      $scope.direcaoOrdenacaoConsulta = !$scope.direcaoOrdenacaoConsulta;
    }

    $scope.novoVeiculo = function(){
      $scope.habilitarCadastro();
    }

    $scope.cancelarVeiculo = function(){
      $scope.erro = null;
      delete $scope.veiculo;
      $scope.habilitarCadastro();
    }

    $scope.salvarVeiculo = function(veiculo){

        $scope.erro = null;

        if (!veiculo){
           $scope.erro = 'Carro precisa ser informado.';
        } else if (!veiculo.carro){
           $scope.erro = 'Carro precisa ser informado.';
        } else if (!veiculo.dataCompra) {
           $scope.erro = 'Data da compra precisa ser informada.';
        } else if (!veiculo.cor) {
           $scope.erro = 'Cor precisa ser informada.';
        } else if (!veiculo.marca) {
           $scope.erro = 'Marca precisa ser informada.';
        } else {
           if ($scope.veiculos.indexOf(veiculo) >= 0) {
             $scope.veiculos[$scope.veiculos.indexOf(veiculo)] = veiculo;
           } else {
             $scope.veiculos.push(angular.copy(veiculo));
           }
           delete $scope.veiculo;
           $scope.habilitarCadastro();
        }
    }

    function montaData(str) {
     var dia = str.substring(0, 2);
     var mes = str.substring(3, 5);
     var ano = str.substring(6, 10);

     var data;

     data = mes;
     data += "-";
     data += dia;
     data += "-";
     data += ano;

     return new Date(data);
    }

    jQuery(function($){
           $("#editDataCompraFiltroConsulta").mask("99/99/9999");
    });

    $scope.excluirVeiculo = function(veiculo){
        $scope.veiculos.splice($scope.veiculos.indexOf(veiculo), 1);
        delete $scope.veiculo;
    }

    $scope.apagarVeiculosSelecionados = function(veiculos){

        $scope.veiculos = veiculos.filter(function (veiculo){
          if (!veiculo.selecionado) return veiculo;
        })
        delete $scope.veiculo;

    }

    $scope.editarVeiculo = function(veiculo){
        $scope.veiculo = {carro: veiculo.carro, dataCompra:montaData(veiculo.dataCompra), cor: veiculo.cor, marca: veiculo.marca};
        $scope.habilitarCadastro();
    }

}]);
