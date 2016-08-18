var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var config = require('./config.js').config;
var feeds = require('./feeds.js').feeds;
var dataProvider = require('./data-provider.js').dataProvider;
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
var httpServer = http.Server(app);

function afterGetData(context, data) {
	console.log('afterGetData()');
	console.log('Data: ' + JSON.stringify(data));
	var response = {
		data: data
	};
	var responseDataJson = JSON.stringify(response, null, 4);
	console.log('Response: ' + responseDataJson);
	console.log('--------------------------------------------------------------------------------');
	context.res.end(responseDataJson);
}

//HTTP GET
app.use('/' + config.STATIC_DIR, express.static(__dirname + '/../fms-client'));

//HTTP POST
app.post('/api', function(req, res) {
	var context;
	console.log('--------------------------------------------------------------------------------');
	console.log('Server API call');
	context = {
		settings: req.settings,
		res: res
	};
	dataProvider.getData(context, afterGetData);
});

//LISTEN
httpServer.listen(config.SERVER_PORT, function(){
	console.log('UI available at http://localhost:' + config.SERVER_PORT.toString() + '/' + config.STATIC_DIR + '/');
	console.log('Server READY');
});
