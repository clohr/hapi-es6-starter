'use strict';

var Browser = require('zombie');

setup(function(done) {
    this.browser = Browser.create();
    this.browser.visit('http://localhost:3000').then(done, done);
    this.browser.on("error", function(error) {
        console.error(error);
    });
});

test('browser should connect', function() {
    return this.browser.success.should.be.ok;
});