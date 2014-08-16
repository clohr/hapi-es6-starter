'use strict';

var glob = require('glob');
var path = require('path');
var globRoutes = glob.sync(path.join(__dirname, '*.js'));

module.exports = function () {
    var allRoutes = [];
    globRoutes.forEach(function (filename) {
        if (filename.indexOf('index.js') > 0) {
            return;
        }
        allRoutes.push(require(filename));
    });
    return allRoutes;
};
