const path = require('path');

const baseConfig = require('../../nightwatch.conf.base');

module.exports = {
    ...baseConfig,
    custom_assertions_path: path.join(__dirname, 'assertions'),
    src_folders: [path.join(__dirname, 'src')],
};
