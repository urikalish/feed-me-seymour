angular.module('fmsApp').factory('fmsConstants', function fmsConstants() {

  var protocol = 'http';
  var server = 'localhost';
  //var server = 'kalish2.emea.hpqcorp.net';
  var port = 1618;
  var staticDir = 'feed-me-seymour';
  var getBase = protocol + '://' + server + ':' + port + '/' + staticDir + '/art';
  var postBase = protocol + '://' + server + ':' + port + '/api';

  return {
    url: {
      GET_BASE:           getBase,
      POST_BASE:          postBase
    }
  }
  
});
