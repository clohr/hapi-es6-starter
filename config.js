'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname, '/..');

module.exports = {
    root: rootPath,
    port: parseInt(process.env.PORT, 10) || 3000,
    options: {
        debug: {
            request: ['error']
        },
        cache: {
            engine: require('catbox-memory'),
            expiresAt: '00:30'
        },
        cors: true,
        views: {
            engines: {
                hbs: require('handlebars')
            },
            path: './views/partials',
            layoutPath: './views',
            layout: true,
            isCached: true,
            helpersPath: './helpers'
        },
        security: true
    }

};