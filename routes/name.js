'use strict';

var Joi = require('joi');

module.exports = {
    method: 'GET',
    path: '/name/{name}',
    handler: function (request, reply) {
        reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
    },
    config: {
        validate: {
            params: {
                name: Joi.string().alphanum()
            }
        }
    }
};