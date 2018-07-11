module.exports = {
  "src_folders": ["tests"],
  "output_folder": "reports",
  "globals_path": "./globals.js",

  "test_workers": {
    "enabled": true,
    "workers": "auto"
  },

  "selenium": {
    "start_process": false,
    "server_path": "",
    "log_path": "",
    "port": 4444,
    "cli_args": {
      "webdriver.chrome.driver": "",
      "webdriver.gecko.driver": "",
      "webdriver.edge.driver": ""
    }
  },

  "test_settings": {
    "default": {
      "launch_url": "http://localhost",
      "selenium_port": 4444,
      "selenium_host": "localhost",
      "silent": true,
      "screenshots": {
        "enabled": false,
        "path": ""
      },
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

  }
}