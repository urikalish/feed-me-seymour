angular.module('fmsApp').factory('fmsServ', function fmsServ(fmsConstants, fmsVariables, fmsCommServ) {

  function getDataFromServer(settings, callback) {
    fmsCommServ.sendServerRequest(settings, callback);
  }

  return {
    getDataFromServer: getDataFromServer
  }

});

