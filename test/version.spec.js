// Load modules

import Code from 'code';
import Lab from 'lab';
import Path from 'path';
import HapiStarter from '../lib';
import Version from '../plugins/version';
import manifest from '../manifest.json';
import Pkg from '../package.json';

// Test shortcuts

const lab = exports.lab = Lab.script();
const expect = Code.expect;
const it = lab.test;


it('returns the version from package.json', (done) => {

    HapiStarter((err, server) => {

        expect(err).to.not.exist();

        server.select('app').inject('/version', (res) => {

            expect(res.statusCode).to.equal(200);
            expect(res.result).to.deep.equal({ version: Pkg.version });

            server.stop(done);
        });
    });
});
