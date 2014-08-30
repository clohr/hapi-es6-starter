'use strict';

var Browser = require('zombie');
var Hapi = require('hapi');
var config = require('../config');
var routes = require('../routes')();

var localhost = 'http://localhost:' + config.port;
var server;

before(function(done) {
    // create server instance
    server = Hapi.createServer('localhost', config.port, config.options);
    // routes
    server.route(routes);
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

setup(function(done) {
    this.browser = Browser.create();
    this.browser.visit(localhost).then(done, done);
    this.browser.on('error', function(error) {
        console.error(error);
    });
});

test('browser should connect', function() {
    return this.browser.success.should.be.ok;
});

test('should connect to /stimpy', function(done) {
    var self = this;
    this.browser.visit(localhost + '/stimpy', function () {
        return self.browser.success.should.be.ok;
    }).then(done);
});

test('should connect to /view1', function(done) {
    var self = this;
    this.browser.visit(localhost + '/view1', function () {
        return self.browser.success.should.be.ok;
    }).then(done);
});