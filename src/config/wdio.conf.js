exports.config = {
    runner: 'local',

    specs: [
        '../tests/**/*.tests.js'
    ],

    maxInstances: 4,

    capabilities: [
        {
            maxInstances: 2,
            browserName: 'firefox',
            acceptInsecureCerts: true,
        },
        {
            maxInstances: 2,
            browserName: 'MicrosoftEdge',
            acceptInsecureCerts: true,
        }
    ],

    logLevel: 'error',

    bail: 0,

    baseUrl: 'https://saucedemo.com',

    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 1,

    framework: 'mocha',

    reporters: ['spec',
      ['allure', {
        outputDir: 'allure-results',
        cleanOnStart: true,
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
        }
      ]
    ],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

}