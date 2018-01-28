/**
 * 定投列表
 * @type {angular.Module}
 */
var app = angular.module('myApp', ["ngRoute"]);
app.controller('manageController', function ($scope, $http) {
    var params = {fundCode: "123", "fundName": "定投列表"};
    $http({
        url: path + 'rest/crontab/list',
        method: 'POST',
        data: params,
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }).then(function (data) {
        $scope.crontabs = data.data.crontabList;
    }).catch(function (err) {
        alert(JSON.stringify(err));
    });

    $http({
        url: path + 'fund/analyse/frank',
        method: 'POST',
        data: params,
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }).then(function (data) {
        $scope.ranks = data.data.ranks;
    }).catch(function (err) {
        alert(JSON.stringify(err));
    });

    $http({
        url: path + 'crontab/analyse/list',
        method: 'POST',
        data: params,
        headers: {
            'Accept': '*/*',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }).then(function (data) {
        $scope.crontabAnalyses = data.data.resp;
    }).catch(function (err) {
        alert(JSON.stringify(err));
    });

}).controller('subjectController', function ($scope, $http) {

}).config(function ($routeProvider) {
    $routeProvider
        .when('/manager', {
            templateUrl: 'html/manager.html',
            controller: 'manageController'
        })
        .when('/subject', {
            templateUrl: 'html/subject.html',
            controller: 'subjectController'
        })
});