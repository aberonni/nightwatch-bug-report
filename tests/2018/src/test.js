module.exports = {
  'Demo test': function (browser) {
    const dataForCommand = 'a string';
    const page = browser.page.myPage();

    page
      .navigate(browser.launchUrl)
      .customCommand(dataForCommand)
      .api.end();
  }
};
