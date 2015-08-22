import Hoek from 'hoek';
import init from './index';

init((err, server) => {
    Hoek.assert(!err, err);

    server.start(serverErr => {

        Hoek.assert(!serverErr, serverErr);
        console.log('Server running at:', server.info.uri);
    });
});
