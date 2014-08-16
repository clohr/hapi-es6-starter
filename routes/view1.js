'use strict';

module.exports = {
    method: 'GET',
    path: '/view1',
    handler: function (request, reply) {
        reply.view('view1', {
            nav: [
                { url: "http://www.yehudakatz.com", title: "Katz Got Your Tongue" },
                { url: "http://www.sproutcore.com/block", title: "SproutCore Blog" }
            ]
        });
    }
};