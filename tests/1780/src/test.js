module.exports = {
    'Demo test': function (browser) {
        browser
            .url(browser.launchUrl)
            .waitForElementVisible('body')
            .shell('echo "Hello from custom command!"')
            .waitForInput()
            .end();
    }
};
