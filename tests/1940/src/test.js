module.exports = {
    // tags: ['issue 1940'],
    'part one - proper url': function(client) {
        client
            .url('http://localhost:8080')
            .getText('li[class="speed"] div[class="current-speed"]', ({value}) => {
                client.assert.equal(value, 10, 'speed successfully read');
            });

    },

    // 'part two - wrong url': function(client) {
    //     client
    //         .url('http://github.com/nightwatchjs/nightwatch')
    //         .getText('li[class="speed"] div[class="current-speed"]', ({value}) => {
    //             client.assert.equal(value, 10, 'speed successfully read');
    //         });
    // },

    after(client) {
        client.end();
    }
};
