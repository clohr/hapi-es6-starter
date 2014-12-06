'use strict';

var Hapi = require('hapi');
var config = require('./config');
var routes = require('./routes')();
var plugins = require('./plugins');
var views = require('./views');

// create server instance
var server = Hapi.createServer('localhost', config.dev.port, config.dev.options);

// routes
server.route(routes);

// views
server.views(views);

// plugins
server.pack.register(plugins, function(err) {
    if (err) {
        throw err;
    }
});

// start server
server.start(function () {
    console.log('Server running at: ', server.info.uri);
});