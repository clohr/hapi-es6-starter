'use strict';

const Glue = require('glue');
const Path = require('path');
const Manifest = require('../manifest.json');

const internals = {};

internals.manifestOptions = {
    relativeTo: Path.join(__dirname, '../plugins')
};

internals.init = (cb) => Glue.compose(Manifest, internals.manifestOptions, cb);

module.exports = internals.init;
