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
            isCached: true,
            helpersPath: './helpers'
        },
        security: true
    }
};