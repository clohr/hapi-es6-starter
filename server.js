'use strict';

var Hapi = require('hapi');
var config = require('./config');
var routes = require('./routes')();

// create server instance
var server = Hapi.createServer('localhost', config.dev.port, config.dev.options);

// routes
server.route(routes);

// plugins
require('./plugins')(server);

// start server
server.start(function () {
    console.log('Server running at: ', server.info.uri);
});