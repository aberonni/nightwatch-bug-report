const path = require('path');

const baseConfig = require('../../nightwatch.conf.base');

module.exports = {
    ...baseConfig,
    src_folders: [path.join(__dirname, 'src')],
    custom_commands_path: [
        'node_modules/nightwatch-custom-commands-assertions/js/commands',
        path.join(__dirname, 'custom-commands')
    ]
};
