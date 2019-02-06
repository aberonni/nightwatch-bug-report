module.exports = {
  before: function (browser) {
    browser.url(browser.launchUrl);
  },
  'Passing without page object provding Array': function (browser) {
    const dataForCommand = ['foo'];
    browser.customCommand(dataForCommand);
  },
  'Passing with a sring': function (browser) {
    const dataForCommand = 'foo';
    browser.page.myPage()
      .customCommand(dataForCommand);
  },
  'Failing with an Array': function (browser) {
    const dataForCommand = ['foo']; // will fail using object: { foo: 'bar' }
    browser.page.myPage()
      .customCommand(dataForCommand)
      .api.end();
  },
};
