module.exports = {
  'Demo test 1': function (browser) {
    browser
      .url('https://www.google.com/')
      .elements('css selector', '[class^="sb"]', function (results) {
        results.value.forEach(function (element) {
          browser.elementIdAttribute(element.ELEMENT, 'class', function (result) {
            console.log('Checking class: ', result.value);
            browser.expect
              .element(result.value)
              .to.have.attribute('class')
              .which.matches(/.*sb.*/);
          });
        });
      });
  }
};
