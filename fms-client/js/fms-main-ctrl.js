angular.module('fmsApp').controller('fmsCtrl', function fmsCtrl($scope, $timeout, fmsConstants, fmsServ) {

  function getData() {
    fmsServ.getDataFromServer($scope.model.settings, handleServerResponse);
  }

  function scheduleGetData(delay) {
    $timeout(function() {
      getData();
    }, delay);
  }

  function handleServerResponse(responseData) {
    $scope.model.items = responseData.data.items;
    scheduleGetData(60*1000);
  }

  $scope.model = {
    settings: {},
    items: []
  };

  getData();

});


