'use strict';

function helloHapi (request, reply) {
    reply('Hello Hapi!');
}

module.exports = {
    method: 'GET',
    path: '/',
    handler: helloHapi
};