const fs = require('fs');

module.exports = {
    abortOnAssertionFailure : true,
    waitForConditionPollInterval : 300,
    waitForConditionTimeout : 5000,
    throwOnMultipleElementsReturned : false,
    asyncHookTimeout : 10000,

    reporter : function(results, cb) {
        fs.writeFileSync('output.json', JSON.stringify(results, null, 4), 'utf8');
        cb();
    }
  };