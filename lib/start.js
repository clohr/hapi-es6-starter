'use strict';

import Hoek from 'hoek';
import Glue from 'glue';
import path from 'path';
import manifest from '../manifest.json';

const init = () => {

    const manifestOptions = {
        relativeTo: path.join(__dirname, '../plugins')
    };
    
    Glue.compose(manifest, manifestOptions, (err, server) => {
    
        Hoek.assert(!err, err);
        server.start(serverErr => {
    
            Hoek.assert(!serverErr, serverErr);
            console.log('Server running at:', server.info.uri);
        });
    });
};

init();
