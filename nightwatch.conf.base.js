/**
 * Don't run nightwatch with this configuration directly.
 * 
 * The purpose of this configuration is to be a common
 * default for each specific test folder.
 */

const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

module.exports = {
    output_folder: 'reports',
    live_output: false,
    disable_colors: false,

    selenium: {
        start_process: true,
        server_path: seleniumServer.path,
        log_path: '',
        host: '127.0.0.1',
        port: 4444,
        cli_args: {
            'webdriver.chrome.driver': chromedriver.path
        }
    },

    test_settings: {
        default: {
            selenium_port: 4444,
            selenium_host: 'localhost',
            silent: true,
            launch_url: 'http://www.google.com',
            screenshots: {
                enabled: true,
                on_failure: true,
                on_error: false,
                path: 'reports/screenshots'
            },
            desiredCapabilities: {
                browserName: 'chrome',
                javascriptEnabled: true,
                acceptSslCerts: true
            },
            globals: {
                waitForConditionTimeout: 3000
            }
        }
    }
};
