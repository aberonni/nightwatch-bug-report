const path = require('path');

const baseConfig = require('../../nightwatch.conf.base');

module.exports = {
  ...baseConfig,
  src_folders: [path.join(__dirname, 'src')],
  custom_commands_path: [path.join(__dirname, 'custom-commands')],
  page_objects_path: [path.join(__dirname, 'page-objects')]
};
