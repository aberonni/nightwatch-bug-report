/**
 * Don't run nightwatch with this configuration directly.
 * 
 * The purpose of this configuration is to be a common
 * default for each specific test folder.
 */
const chromedriver = require('chromedriver');

module.exports = {
  output_folder: 'reports',
  live_output: false,
  disable_colors: false,

  webdriver: {
    start_process: true,
    server_path: chromedriver.path,
    cli_args: [
      '--log', 'debug'
    ],
    port: 9515
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      screenshots: {
        enabled: true,
        path: './reports/screens',
        on_failure: true
      },
      desiredCapabilities: {
        browserName: 'chrome',
        acceptInsecureCerts: true,
        chromeOptions: {
          args: ['--no-sandbox']
        },
        loggingPrefs: {driver: 'INFO', server: 'OFF', browser: 'INFO'}
      }
    }
  }
};
