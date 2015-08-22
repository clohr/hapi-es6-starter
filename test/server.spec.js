// Load modules

import Code from 'code';
import Lab from 'lab';
import Path from 'path';
import HapiStarter from '../lib';
import manifest from '../manifest.json';

// Test shortcuts

const lab = exports.lab = Lab.script();
const expect = Code.expect;
const it = lab.test;


it('starts server', (done) => {

    HapiStarter((err, server) => {

        expect(err).to.not.exist();
        expect(server.connections).length(1);
        expect(server.info.port).to.equal(9000);

        server.stop(done);
    });
});
