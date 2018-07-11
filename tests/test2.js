module.exports = {
    'Demo test 2': function (browser) {
        browser
            .url('http://domenicogemoli.com')
            .waitForElementVisible('body')
            .end()
    }
};