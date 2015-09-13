// Load modules

const Code = require('code');
const Lab = require('lab');
const Path = require('path');
const HapiStarter = require('../lib');
const Version = require('../plugins/version');
const Pkg = require('../package.json');

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
