const assert = require('assert');

module.exports = {
  reporter : function(results, cb) {
    const numberOfTests = Object.entries(results.modules).length;
    console.log('Number of tests in reporter:', numberOfTests);
    assert.equal(numberOfTests, 2, 'There are 2 tests in the report');
    cb();
  }
};
