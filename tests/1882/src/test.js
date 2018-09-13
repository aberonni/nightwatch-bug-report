module.exports = {
    'Demo test': function (browser) {
        const page = browser.page.myPage();

        page
            .navigate(browser.launchUrl)
            .customCommand('@myElement')
            .api.end();
    }
};
