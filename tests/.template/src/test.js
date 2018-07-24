module.exports = {
    'Demo test': function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('body')
            .end();
    }
};
