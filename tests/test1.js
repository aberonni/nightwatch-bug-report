module.exports = {
    'Demo test 1': function (browser) {
        browser
            .url('http://domenicogemoli.com')
            .waitForElementVisible('body')
            .end()
    }
};