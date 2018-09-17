const fs = require('fs');
const path = require('path');

module.exports = {
  reporter : function(results, cb) {
    const file = path.join(__dirname, 'output.json');
    fs.writeFileSync(file, JSON.stringify(results, null, 4), 'utf8');
    cb();
  }
};
