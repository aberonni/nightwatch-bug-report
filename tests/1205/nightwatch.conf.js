const path = require('path');

const baseConfig = require('../../nightwatch.conf.base');

module.exports = {
    ...baseConfig,
    test_workers: {
        enabled: true,
        workers: 'auto'
    },
    src_folders: [path.join(__dirname, 'src')],
    globals_path: path.join(__dirname, 'globals.js')
};
