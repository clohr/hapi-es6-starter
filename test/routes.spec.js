'use strict';

var Zombie = require('zombie');
var Hapi = require('hapi');
var plugins = require('../plugins');
var config = require('../config');
var routes = require('../routes')();
var views = require('../views');

var localhost = 'http://localhost:' + config.test.port;
var server;

var browser = new Zombie({
    debug: true
});
setup(function(done) {
    browser.visit(localhost).then(done);
    browser.on('error', function(err) {
        console.dir(err);
    });
});

before(function(done) {
    // create server instance
    server = Hapi.createServer('localhost', config.test.port, config.test.options);
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
        console.log('Hapi server started');
        done();
    });
});

after(function(done){
    server.stop();
    console.log('Hapi server stopped');
    done();
});

test('browser should connect', function() {
    return browser.success.should.be.ok;
});

test('should connect to /name/stimpy', function(done) {
    browser.visit(localhost + '/name/stimpy', function () {
        return browser.success.should.be.ok;
    });
    done();
});

test('should connect to /name/123', function(done) {
    browser.visit(localhost + '/name/123', function () {
        return browser.success.should.be.ok;
    });
    done();
});

test('should connect to /view1', function(done) {
    browser.visit(localhost + '/view1', function () {
        return browser.success.should.be.ok;
    });
    done();
});
