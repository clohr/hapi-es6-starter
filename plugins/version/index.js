'use strict';

const Package = require('../../package.json');

// Declare internals

const internals = {
    response: {
        version: Package.version
    }
};

const register = (server, options, next) => {

    server.route({
        method: 'GET',
        path: '/version',
        config: {
            description: 'Returns the version of the server',
            handler: (request, reply) => reply(internals.response)
        }
    });

    return next();
};

register.attributes = {
    name: 'version'
};

module.exports = register;
