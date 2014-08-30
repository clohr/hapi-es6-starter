'use strict';

exports.test = {
    port: 3000,
    options: {
        debug: {
            request: false
        },
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

exports.dev = {
    port: 3000,
    routeCache: {
        privacy: 'public',
        expiresIn: 60000
    },
    options: {
        debug: {
            request: ['error']
        },
        cache: {
            engine: require('catbox-memory')
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