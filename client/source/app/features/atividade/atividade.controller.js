(function () {
    'use strict';

    angular
        .module('app')
        .controller('atividadeCtrl', atividadeCtrl)

    function atividadeCtrl($scope, $routeParams, atividadeAPI, scopeGlobalService) {

        $scope.data = scopeGlobalService.value;

        $scope.load = function () {
            atividadeAPI.getAll($routeParams.chamadoSid).then(function (result) {
                $scope.lista = result.data
            }).catch(function (data) {
                $scope.message = 'Error: ' + data
            })
        }

        $scope.finalizar = function (atividade) {
            atividade.status = 'fechado'
            atividadeAPI.create($routeParams.chamadoSid, atividade).then(function (result) {
                scopeGlobalService.set(atividade.status, 'status')
                $scope.load()
            }).catch(function (data) {
                $scope.message = 'Error: ' + data
            })
        }

        $scope.abrir = function (atividade) {
            atividade.status = 'aberto'
            atividadeAPI.create($routeParams.chamadoSid, atividade).then(function (result) {
                scopeGlobalService.set(atividade.status, 'atividade')
                $scope.load()
            }).catch(function (data) {
                $scope.message = 'Error: ' + data
            })
        }

        $scope.salvar = function (atividade) {
            atividade.status = 'pendente'
            atividadeAPI.create($routeParams.chamadoSid, atividade).then(function (result) {
                scopeGlobalService.set(atividade.status, 'status')
                $scope.load()
            }).catch(function (data) {
                $scope.message = 'Error: ' + data
            })
        }

        $scope.excluir = function (atividade) {
            atividadeAPI.destroy(atividade).then(function (result) {
                $scope.load()
            }).catch(function (data) {
                $scope.message = 'Error: ' + data
            })
        }

        $scope.load()
    }

}());