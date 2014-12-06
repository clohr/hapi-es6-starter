'use strict';

exports.test = {
    port: 3000,
    options: {
        debug: {
            request: false
        }
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
        security: true
    }
};