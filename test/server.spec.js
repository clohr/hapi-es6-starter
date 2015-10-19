// Load modules

const Code = require('code');
const Lab = require('lab');
const HapiStarter = require('../lib');

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
