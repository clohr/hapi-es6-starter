'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname, '/..');

module.exports = {
    root: rootPath,
    port: 3000,
    options: {
        debug: {
            request: ['error']
        },
        cors: true,
        views: {
            engines: {
                hbs: require('handlebars')
            },
            path: './views/partials',
            layoutPath: './views',
            layout: true,
            isCached: false,
            helpersPath: './helpers'
        },
        security: true
    }

};