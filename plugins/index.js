'use strict';

module.exports = [{
    plugin: require('good'),
    options: {
        reporters: [{
            reporter: require('good-console'),
            args: [{
                log: '*',
                request: '*'
            }]
        }]
    }
}];