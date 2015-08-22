'use strict';

import Glue from 'glue';
import Path from 'path';
import manifest from '../manifest.json';

const internals = {};

internals.manifestOptions = {
    relativeTo: Path.join(__dirname, '../plugins')
};

internals.init = (cb) => Glue.compose(manifest, internals.manifestOptions, cb);

export default internals.init;
