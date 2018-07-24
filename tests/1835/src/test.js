module.exports = {
    'Demo test': function (browser) {
        browser
            .url(browser.launchUrl)
            .assert.customAssertion()
            .end();
    }
};
