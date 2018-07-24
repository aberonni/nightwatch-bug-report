module.exports = {
    'Demo test 1': function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('body')
            .end();
    }
};
