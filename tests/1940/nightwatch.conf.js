const path = require('path');

const baseConfig = require('../../nightwatch.conf.base');

module.exports = {
  ...baseConfig,
  src_folders: [path.join(__dirname, 'src')],
  test_settings: {
    default: {
      default_path_prefix : '',
    }
  }
};
