module.exports = {
  'Demo test 2': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementVisible('body')
      .end();
  }
};
