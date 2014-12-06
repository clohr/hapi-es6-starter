'use strict';

var Hapi = require('hapi');
var config = require('./config');
var routes = require('./routes')();
var plugins = require('./plugins');

// create server instance
var server = Hapi.createServer('localhost', config.dev.port, config.dev.options);

// routes
server.route(routes);

// views
server.views({
    engines: {
        hbs: require('handlebars')
    },
    path: './views/partials',
    layoutPath: './views',
    layout: true,
    isCached: false,
    helpersPath: './helpers'
});

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