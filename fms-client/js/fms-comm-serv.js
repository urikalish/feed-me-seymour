angular.module('fmsApp').factory('fmsCommServ', function fmsCommServ($http, fmsConstants) {

  function sendServerRequest(settings, callback) {
    var req = {
      method: 'POST',
      url: fmsConstants.url.POST_BASE,
      headers : {'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8'},
      data: $.param({settings: settings})
    };
    $http(req).then(function(response) {
      callback(response.data);
    });
  }

  return {
    sendServerRequest: sendServerRequest
  }
  
});
