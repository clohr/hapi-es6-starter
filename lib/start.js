'use strict';

const Hoek = require('hoek');
const Init = require('./index');

Init((err, server) => {
    Hoek.assert(!err, err);

    server.start(serverErr => {

        Hoek.assert(!serverErr, serverErr);
        console.log('Server running at:', server.info.uri);
    });
});
