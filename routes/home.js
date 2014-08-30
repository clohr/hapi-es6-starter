'use strict';

var config = require('../config');

function helloHapi (request, reply) {
    reply('Hello Hapi!');
}

module.exports = {
    method: 'GET',
    path: '/',
    handler: helloHapi,
    config: {
        cache: config.dev.routeCache
    }
};